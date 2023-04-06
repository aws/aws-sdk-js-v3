// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { BatchDeleteBuildsCommandInput, BatchDeleteBuildsCommandOutput } from "../commands/BatchDeleteBuildsCommand";
import {
  BatchGetBuildBatchesCommandInput,
  BatchGetBuildBatchesCommandOutput,
} from "../commands/BatchGetBuildBatchesCommand";
import { BatchGetBuildsCommandInput, BatchGetBuildsCommandOutput } from "../commands/BatchGetBuildsCommand";
import { BatchGetProjectsCommandInput, BatchGetProjectsCommandOutput } from "../commands/BatchGetProjectsCommand";
import {
  BatchGetReportGroupsCommandInput,
  BatchGetReportGroupsCommandOutput,
} from "../commands/BatchGetReportGroupsCommand";
import { BatchGetReportsCommandInput, BatchGetReportsCommandOutput } from "../commands/BatchGetReportsCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "../commands/CreateProjectCommand";
import { CreateReportGroupCommandInput, CreateReportGroupCommandOutput } from "../commands/CreateReportGroupCommand";
import { CreateWebhookCommandInput, CreateWebhookCommandOutput } from "../commands/CreateWebhookCommand";
import { DeleteBuildBatchCommandInput, DeleteBuildBatchCommandOutput } from "../commands/DeleteBuildBatchCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "../commands/DeleteProjectCommand";
import { DeleteReportCommandInput, DeleteReportCommandOutput } from "../commands/DeleteReportCommand";
import { DeleteReportGroupCommandInput, DeleteReportGroupCommandOutput } from "../commands/DeleteReportGroupCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import {
  DeleteSourceCredentialsCommandInput,
  DeleteSourceCredentialsCommandOutput,
} from "../commands/DeleteSourceCredentialsCommand";
import { DeleteWebhookCommandInput, DeleteWebhookCommandOutput } from "../commands/DeleteWebhookCommand";
import {
  DescribeCodeCoveragesCommandInput,
  DescribeCodeCoveragesCommandOutput,
} from "../commands/DescribeCodeCoveragesCommand";
import { DescribeTestCasesCommandInput, DescribeTestCasesCommandOutput } from "../commands/DescribeTestCasesCommand";
import {
  GetReportGroupTrendCommandInput,
  GetReportGroupTrendCommandOutput,
} from "../commands/GetReportGroupTrendCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "../commands/GetResourcePolicyCommand";
import {
  ImportSourceCredentialsCommandInput,
  ImportSourceCredentialsCommandOutput,
} from "../commands/ImportSourceCredentialsCommand";
import {
  InvalidateProjectCacheCommandInput,
  InvalidateProjectCacheCommandOutput,
} from "../commands/InvalidateProjectCacheCommand";
import { ListBuildBatchesCommandInput, ListBuildBatchesCommandOutput } from "../commands/ListBuildBatchesCommand";
import {
  ListBuildBatchesForProjectCommandInput,
  ListBuildBatchesForProjectCommandOutput,
} from "../commands/ListBuildBatchesForProjectCommand";
import { ListBuildsCommandInput, ListBuildsCommandOutput } from "../commands/ListBuildsCommand";
import {
  ListBuildsForProjectCommandInput,
  ListBuildsForProjectCommandOutput,
} from "../commands/ListBuildsForProjectCommand";
import {
  ListCuratedEnvironmentImagesCommandInput,
  ListCuratedEnvironmentImagesCommandOutput,
} from "../commands/ListCuratedEnvironmentImagesCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "../commands/ListProjectsCommand";
import { ListReportGroupsCommandInput, ListReportGroupsCommandOutput } from "../commands/ListReportGroupsCommand";
import { ListReportsCommandInput, ListReportsCommandOutput } from "../commands/ListReportsCommand";
import {
  ListReportsForReportGroupCommandInput,
  ListReportsForReportGroupCommandOutput,
} from "../commands/ListReportsForReportGroupCommand";
import { ListSharedProjectsCommandInput, ListSharedProjectsCommandOutput } from "../commands/ListSharedProjectsCommand";
import {
  ListSharedReportGroupsCommandInput,
  ListSharedReportGroupsCommandOutput,
} from "../commands/ListSharedReportGroupsCommand";
import {
  ListSourceCredentialsCommandInput,
  ListSourceCredentialsCommandOutput,
} from "../commands/ListSourceCredentialsCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import { RetryBuildBatchCommandInput, RetryBuildBatchCommandOutput } from "../commands/RetryBuildBatchCommand";
import { RetryBuildCommandInput, RetryBuildCommandOutput } from "../commands/RetryBuildCommand";
import { StartBuildBatchCommandInput, StartBuildBatchCommandOutput } from "../commands/StartBuildBatchCommand";
import { StartBuildCommandInput, StartBuildCommandOutput } from "../commands/StartBuildCommand";
import { StopBuildBatchCommandInput, StopBuildBatchCommandOutput } from "../commands/StopBuildBatchCommand";
import { StopBuildCommandInput, StopBuildCommandOutput } from "../commands/StopBuildCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "../commands/UpdateProjectCommand";
import {
  UpdateProjectVisibilityCommandInput,
  UpdateProjectVisibilityCommandOutput,
} from "../commands/UpdateProjectVisibilityCommand";
import { UpdateReportGroupCommandInput, UpdateReportGroupCommandOutput } from "../commands/UpdateReportGroupCommand";
import { UpdateWebhookCommandInput, UpdateWebhookCommandOutput } from "../commands/UpdateWebhookCommand";
import { CodeBuildServiceException as __BaseException } from "../models/CodeBuildServiceException";
import {
  AccountLimitExceededException,
  BatchDeleteBuildsInput,
  BatchDeleteBuildsOutput,
  BatchGetBuildBatchesInput,
  BatchGetBuildBatchesOutput,
  BatchGetBuildsInput,
  BatchGetBuildsOutput,
  BatchGetProjectsInput,
  BatchGetProjectsOutput,
  BatchGetReportGroupsInput,
  BatchGetReportGroupsOutput,
  BatchGetReportsInput,
  BatchGetReportsOutput,
  BatchRestrictions,
  Build,
  BuildArtifacts,
  BuildBatch,
  BuildBatchFilter,
  BuildBatchPhase,
  BuildGroup,
  BuildNotDeleted,
  BuildPhase,
  BuildStatusConfig,
  BuildSummary,
  CacheMode,
  CloudWatchLogsConfig,
  CodeCoverage,
  CodeCoverageReportSummary,
  CreateProjectInput,
  CreateProjectOutput,
  CreateReportGroupInput,
  CreateReportGroupOutput,
  CreateWebhookInput,
  CreateWebhookOutput,
  DebugSession,
  DeleteBuildBatchInput,
  DeleteBuildBatchOutput,
  DeleteProjectInput,
  DeleteProjectOutput,
  DeleteReportGroupInput,
  DeleteReportGroupOutput,
  DeleteReportInput,
  DeleteReportOutput,
  DeleteResourcePolicyInput,
  DeleteResourcePolicyOutput,
  DeleteSourceCredentialsInput,
  DeleteSourceCredentialsOutput,
  DeleteWebhookInput,
  DeleteWebhookOutput,
  DescribeCodeCoveragesInput,
  DescribeCodeCoveragesOutput,
  DescribeTestCasesInput,
  DescribeTestCasesOutput,
  EnvironmentImage,
  EnvironmentLanguage,
  EnvironmentPlatform,
  EnvironmentVariable,
  ExportedEnvironmentVariable,
  GetReportGroupTrendInput,
  GetReportGroupTrendOutput,
  GetResourcePolicyInput,
  GetResourcePolicyOutput,
  GitSubmodulesConfig,
  ImportSourceCredentialsInput,
  ImportSourceCredentialsOutput,
  InvalidateProjectCacheInput,
  InvalidateProjectCacheOutput,
  InvalidInputException,
  ListBuildBatchesForProjectInput,
  ListBuildBatchesForProjectOutput,
  ListBuildBatchesInput,
  ListBuildBatchesOutput,
  ListBuildsForProjectInput,
  ListBuildsForProjectOutput,
  ListBuildsInput,
  ListBuildsOutput,
  ListCuratedEnvironmentImagesInput,
  ListCuratedEnvironmentImagesOutput,
  ListProjectsInput,
  ListProjectsOutput,
  ListReportGroupsInput,
  ListReportGroupsOutput,
  ListReportsForReportGroupInput,
  ListReportsForReportGroupOutput,
  ListReportsInput,
  ListReportsOutput,
  ListSharedProjectsInput,
  ListSharedProjectsOutput,
  ListSharedReportGroupsInput,
  ListSharedReportGroupsOutput,
  ListSourceCredentialsInput,
  ListSourceCredentialsOutput,
  LogsConfig,
  LogsLocation,
  NetworkInterface,
  OAuthProviderException,
  PhaseContext,
  Project,
  ProjectArtifacts,
  ProjectBadge,
  ProjectBuildBatchConfig,
  ProjectCache,
  ProjectEnvironment,
  ProjectFileSystemLocation,
  ProjectSource,
  ProjectSourceVersion,
  PutResourcePolicyInput,
  PutResourcePolicyOutput,
  RegistryCredential,
  Report,
  ReportExportConfig,
  ReportFilter,
  ReportGroup,
  ReportGroupTrendStats,
  ReportWithRawData,
  ResolvedArtifact,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  RetryBuildBatchInput,
  RetryBuildBatchOutput,
  RetryBuildInput,
  RetryBuildOutput,
  S3LogsConfig,
  S3ReportExportConfig,
  SourceAuth,
  SourceCredentialsInfo,
  StartBuildBatchInput,
  StartBuildBatchOutput,
  StartBuildInput,
  StartBuildOutput,
  StopBuildBatchInput,
  StopBuildBatchOutput,
  StopBuildInput,
  StopBuildOutput,
  Tag,
  TestCase,
  TestCaseFilter,
  TestReportSummary,
  UpdateProjectInput,
  UpdateProjectOutput,
  UpdateProjectVisibilityInput,
  UpdateProjectVisibilityOutput,
  UpdateReportGroupInput,
  UpdateReportGroupOutput,
  UpdateWebhookInput,
  UpdateWebhookOutput,
  VpcConfig,
  Webhook,
  WebhookFilter,
} from "../models/models_0";

/**
 * serializeAws_json1_1BatchDeleteBuildsCommand
 */
export const se_BatchDeleteBuildsCommand = async (
  input: BatchDeleteBuildsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.BatchDeleteBuilds",
  };
  let body: any;
  body = JSON.stringify(se_BatchDeleteBuildsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetBuildBatchesCommand
 */
export const se_BatchGetBuildBatchesCommand = async (
  input: BatchGetBuildBatchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.BatchGetBuildBatches",
  };
  let body: any;
  body = JSON.stringify(se_BatchGetBuildBatchesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetBuildsCommand
 */
export const se_BatchGetBuildsCommand = async (
  input: BatchGetBuildsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.BatchGetBuilds",
  };
  let body: any;
  body = JSON.stringify(se_BatchGetBuildsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetProjectsCommand
 */
export const se_BatchGetProjectsCommand = async (
  input: BatchGetProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.BatchGetProjects",
  };
  let body: any;
  body = JSON.stringify(se_BatchGetProjectsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetReportGroupsCommand
 */
export const se_BatchGetReportGroupsCommand = async (
  input: BatchGetReportGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.BatchGetReportGroups",
  };
  let body: any;
  body = JSON.stringify(se_BatchGetReportGroupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetReportsCommand
 */
export const se_BatchGetReportsCommand = async (
  input: BatchGetReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.BatchGetReports",
  };
  let body: any;
  body = JSON.stringify(se_BatchGetReportsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateProjectCommand
 */
export const se_CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.CreateProject",
  };
  let body: any;
  body = JSON.stringify(se_CreateProjectInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateReportGroupCommand
 */
export const se_CreateReportGroupCommand = async (
  input: CreateReportGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.CreateReportGroup",
  };
  let body: any;
  body = JSON.stringify(se_CreateReportGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWebhookCommand
 */
export const se_CreateWebhookCommand = async (
  input: CreateWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.CreateWebhook",
  };
  let body: any;
  body = JSON.stringify(se_CreateWebhookInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBuildBatchCommand
 */
export const se_DeleteBuildBatchCommand = async (
  input: DeleteBuildBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.DeleteBuildBatch",
  };
  let body: any;
  body = JSON.stringify(se_DeleteBuildBatchInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteProjectCommand
 */
export const se_DeleteProjectCommand = async (
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.DeleteProject",
  };
  let body: any;
  body = JSON.stringify(se_DeleteProjectInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteReportCommand
 */
export const se_DeleteReportCommand = async (
  input: DeleteReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.DeleteReport",
  };
  let body: any;
  body = JSON.stringify(se_DeleteReportInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteReportGroupCommand
 */
export const se_DeleteReportGroupCommand = async (
  input: DeleteReportGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.DeleteReportGroup",
  };
  let body: any;
  body = JSON.stringify(se_DeleteReportGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.DeleteResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(se_DeleteResourcePolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSourceCredentialsCommand
 */
export const se_DeleteSourceCredentialsCommand = async (
  input: DeleteSourceCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.DeleteSourceCredentials",
  };
  let body: any;
  body = JSON.stringify(se_DeleteSourceCredentialsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWebhookCommand
 */
export const se_DeleteWebhookCommand = async (
  input: DeleteWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.DeleteWebhook",
  };
  let body: any;
  body = JSON.stringify(se_DeleteWebhookInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCodeCoveragesCommand
 */
export const se_DescribeCodeCoveragesCommand = async (
  input: DescribeCodeCoveragesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.DescribeCodeCoverages",
  };
  let body: any;
  body = JSON.stringify(se_DescribeCodeCoveragesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTestCasesCommand
 */
export const se_DescribeTestCasesCommand = async (
  input: DescribeTestCasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.DescribeTestCases",
  };
  let body: any;
  body = JSON.stringify(se_DescribeTestCasesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetReportGroupTrendCommand
 */
export const se_GetReportGroupTrendCommand = async (
  input: GetReportGroupTrendCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.GetReportGroupTrend",
  };
  let body: any;
  body = JSON.stringify(se_GetReportGroupTrendInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResourcePolicyCommand
 */
export const se_GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.GetResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(se_GetResourcePolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportSourceCredentialsCommand
 */
export const se_ImportSourceCredentialsCommand = async (
  input: ImportSourceCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ImportSourceCredentials",
  };
  let body: any;
  body = JSON.stringify(se_ImportSourceCredentialsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1InvalidateProjectCacheCommand
 */
export const se_InvalidateProjectCacheCommand = async (
  input: InvalidateProjectCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.InvalidateProjectCache",
  };
  let body: any;
  body = JSON.stringify(se_InvalidateProjectCacheInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListBuildBatchesCommand
 */
export const se_ListBuildBatchesCommand = async (
  input: ListBuildBatchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ListBuildBatches",
  };
  let body: any;
  body = JSON.stringify(se_ListBuildBatchesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListBuildBatchesForProjectCommand
 */
export const se_ListBuildBatchesForProjectCommand = async (
  input: ListBuildBatchesForProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ListBuildBatchesForProject",
  };
  let body: any;
  body = JSON.stringify(se_ListBuildBatchesForProjectInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListBuildsCommand
 */
export const se_ListBuildsCommand = async (
  input: ListBuildsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ListBuilds",
  };
  let body: any;
  body = JSON.stringify(se_ListBuildsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListBuildsForProjectCommand
 */
export const se_ListBuildsForProjectCommand = async (
  input: ListBuildsForProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ListBuildsForProject",
  };
  let body: any;
  body = JSON.stringify(se_ListBuildsForProjectInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCuratedEnvironmentImagesCommand
 */
export const se_ListCuratedEnvironmentImagesCommand = async (
  input: ListCuratedEnvironmentImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ListCuratedEnvironmentImages",
  };
  let body: any;
  body = JSON.stringify(se_ListCuratedEnvironmentImagesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListProjectsCommand
 */
export const se_ListProjectsCommand = async (
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ListProjects",
  };
  let body: any;
  body = JSON.stringify(se_ListProjectsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListReportGroupsCommand
 */
export const se_ListReportGroupsCommand = async (
  input: ListReportGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ListReportGroups",
  };
  let body: any;
  body = JSON.stringify(se_ListReportGroupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListReportsCommand
 */
export const se_ListReportsCommand = async (
  input: ListReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ListReports",
  };
  let body: any;
  body = JSON.stringify(se_ListReportsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListReportsForReportGroupCommand
 */
export const se_ListReportsForReportGroupCommand = async (
  input: ListReportsForReportGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ListReportsForReportGroup",
  };
  let body: any;
  body = JSON.stringify(se_ListReportsForReportGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSharedProjectsCommand
 */
export const se_ListSharedProjectsCommand = async (
  input: ListSharedProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ListSharedProjects",
  };
  let body: any;
  body = JSON.stringify(se_ListSharedProjectsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSharedReportGroupsCommand
 */
export const se_ListSharedReportGroupsCommand = async (
  input: ListSharedReportGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ListSharedReportGroups",
  };
  let body: any;
  body = JSON.stringify(se_ListSharedReportGroupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSourceCredentialsCommand
 */
export const se_ListSourceCredentialsCommand = async (
  input: ListSourceCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ListSourceCredentials",
  };
  let body: any;
  body = JSON.stringify(se_ListSourceCredentialsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.PutResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(se_PutResourcePolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RetryBuildCommand
 */
export const se_RetryBuildCommand = async (
  input: RetryBuildCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.RetryBuild",
  };
  let body: any;
  body = JSON.stringify(se_RetryBuildInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RetryBuildBatchCommand
 */
export const se_RetryBuildBatchCommand = async (
  input: RetryBuildBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.RetryBuildBatch",
  };
  let body: any;
  body = JSON.stringify(se_RetryBuildBatchInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartBuildCommand
 */
export const se_StartBuildCommand = async (
  input: StartBuildCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.StartBuild",
  };
  let body: any;
  body = JSON.stringify(se_StartBuildInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartBuildBatchCommand
 */
export const se_StartBuildBatchCommand = async (
  input: StartBuildBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.StartBuildBatch",
  };
  let body: any;
  body = JSON.stringify(se_StartBuildBatchInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopBuildCommand
 */
export const se_StopBuildCommand = async (
  input: StopBuildCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.StopBuild",
  };
  let body: any;
  body = JSON.stringify(se_StopBuildInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopBuildBatchCommand
 */
export const se_StopBuildBatchCommand = async (
  input: StopBuildBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.StopBuildBatch",
  };
  let body: any;
  body = JSON.stringify(se_StopBuildBatchInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateProjectCommand
 */
export const se_UpdateProjectCommand = async (
  input: UpdateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.UpdateProject",
  };
  let body: any;
  body = JSON.stringify(se_UpdateProjectInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateProjectVisibilityCommand
 */
export const se_UpdateProjectVisibilityCommand = async (
  input: UpdateProjectVisibilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.UpdateProjectVisibility",
  };
  let body: any;
  body = JSON.stringify(se_UpdateProjectVisibilityInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateReportGroupCommand
 */
export const se_UpdateReportGroupCommand = async (
  input: UpdateReportGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.UpdateReportGroup",
  };
  let body: any;
  body = JSON.stringify(se_UpdateReportGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateWebhookCommand
 */
export const se_UpdateWebhookCommand = async (
  input: UpdateWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.UpdateWebhook",
  };
  let body: any;
  body = JSON.stringify(se_UpdateWebhookInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1BatchDeleteBuildsCommand
 */
export const de_BatchDeleteBuildsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteBuildsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchDeleteBuildsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchDeleteBuildsOutput(data, context);
  const response: BatchDeleteBuildsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchDeleteBuildsCommandError
 */
const de_BatchDeleteBuildsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteBuildsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetBuildBatchesCommand
 */
export const de_BatchGetBuildBatchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetBuildBatchesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetBuildBatchesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetBuildBatchesOutput(data, context);
  const response: BatchGetBuildBatchesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchGetBuildBatchesCommandError
 */
const de_BatchGetBuildBatchesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetBuildBatchesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetBuildsCommand
 */
export const de_BatchGetBuildsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetBuildsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetBuildsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetBuildsOutput(data, context);
  const response: BatchGetBuildsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchGetBuildsCommandError
 */
const de_BatchGetBuildsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetBuildsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetProjectsCommand
 */
export const de_BatchGetProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetProjectsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetProjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetProjectsOutput(data, context);
  const response: BatchGetProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchGetProjectsCommandError
 */
const de_BatchGetProjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetProjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetReportGroupsCommand
 */
export const de_BatchGetReportGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetReportGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetReportGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetReportGroupsOutput(data, context);
  const response: BatchGetReportGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchGetReportGroupsCommandError
 */
const de_BatchGetReportGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetReportGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetReportsCommand
 */
export const de_BatchGetReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetReportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetReportsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetReportsOutput(data, context);
  const response: BatchGetReportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchGetReportsCommandError
 */
const de_BatchGetReportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetReportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateProjectCommand
 */
export const de_CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateProjectOutput(data, context);
  const response: CreateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateProjectCommandError
 */
const de_CreateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountLimitExceededException":
    case "com.amazonaws.codebuild#AccountLimitExceededException":
      throw await de_AccountLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.codebuild#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateReportGroupCommand
 */
export const de_CreateReportGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReportGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateReportGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateReportGroupOutput(data, context);
  const response: CreateReportGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateReportGroupCommandError
 */
const de_CreateReportGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReportGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountLimitExceededException":
    case "com.amazonaws.codebuild#AccountLimitExceededException":
      throw await de_AccountLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.codebuild#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateWebhookCommand
 */
export const de_CreateWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebhookCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateWebhookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateWebhookOutput(data, context);
  const response: CreateWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateWebhookCommandError
 */
const de_CreateWebhookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebhookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OAuthProviderException":
    case "com.amazonaws.codebuild#OAuthProviderException":
      throw await de_OAuthProviderExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.codebuild#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteBuildBatchCommand
 */
export const de_DeleteBuildBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBuildBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteBuildBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteBuildBatchOutput(data, context);
  const response: DeleteBuildBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteBuildBatchCommandError
 */
const de_DeleteBuildBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBuildBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteProjectCommand
 */
export const de_DeleteProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteProjectOutput(data, context);
  const response: DeleteProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteProjectCommandError
 */
const de_DeleteProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteReportCommand
 */
export const de_DeleteReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteReportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteReportOutput(data, context);
  const response: DeleteReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteReportCommandError
 */
const de_DeleteReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteReportGroupCommand
 */
export const de_DeleteReportGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReportGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteReportGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteReportGroupOutput(data, context);
  const response: DeleteReportGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteReportGroupCommandError
 */
const de_DeleteReportGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReportGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteResourcePolicyOutput(data, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteResourcePolicyCommandError
 */
const de_DeleteResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteSourceCredentialsCommand
 */
export const de_DeleteSourceCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSourceCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSourceCredentialsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteSourceCredentialsOutput(data, context);
  const response: DeleteSourceCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteSourceCredentialsCommandError
 */
const de_DeleteSourceCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSourceCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteWebhookCommand
 */
export const de_DeleteWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebhookCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteWebhookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteWebhookOutput(data, context);
  const response: DeleteWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteWebhookCommandError
 */
const de_DeleteWebhookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebhookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OAuthProviderException":
    case "com.amazonaws.codebuild#OAuthProviderException":
      throw await de_OAuthProviderExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeCodeCoveragesCommand
 */
export const de_DescribeCodeCoveragesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCodeCoveragesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCodeCoveragesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCodeCoveragesOutput(data, context);
  const response: DescribeCodeCoveragesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeCodeCoveragesCommandError
 */
const de_DescribeCodeCoveragesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCodeCoveragesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeTestCasesCommand
 */
export const de_DescribeTestCasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTestCasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTestCasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTestCasesOutput(data, context);
  const response: DescribeTestCasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeTestCasesCommandError
 */
const de_DescribeTestCasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTestCasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetReportGroupTrendCommand
 */
export const de_GetReportGroupTrendCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReportGroupTrendCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetReportGroupTrendCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetReportGroupTrendOutput(data, context);
  const response: GetReportGroupTrendCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetReportGroupTrendCommandError
 */
const de_GetReportGroupTrendCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReportGroupTrendCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetResourcePolicyCommand
 */
export const de_GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResourcePolicyOutput(data, context);
  const response: GetResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetResourcePolicyCommandError
 */
const de_GetResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ImportSourceCredentialsCommand
 */
export const de_ImportSourceCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportSourceCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportSourceCredentialsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ImportSourceCredentialsOutput(data, context);
  const response: ImportSourceCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ImportSourceCredentialsCommandError
 */
const de_ImportSourceCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportSourceCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountLimitExceededException":
    case "com.amazonaws.codebuild#AccountLimitExceededException":
      throw await de_AccountLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.codebuild#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1InvalidateProjectCacheCommand
 */
export const de_InvalidateProjectCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvalidateProjectCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_InvalidateProjectCacheCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_InvalidateProjectCacheOutput(data, context);
  const response: InvalidateProjectCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1InvalidateProjectCacheCommandError
 */
const de_InvalidateProjectCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvalidateProjectCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListBuildBatchesCommand
 */
export const de_ListBuildBatchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuildBatchesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListBuildBatchesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListBuildBatchesOutput(data, context);
  const response: ListBuildBatchesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListBuildBatchesCommandError
 */
const de_ListBuildBatchesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuildBatchesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListBuildBatchesForProjectCommand
 */
export const de_ListBuildBatchesForProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuildBatchesForProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListBuildBatchesForProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListBuildBatchesForProjectOutput(data, context);
  const response: ListBuildBatchesForProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListBuildBatchesForProjectCommandError
 */
const de_ListBuildBatchesForProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuildBatchesForProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListBuildsCommand
 */
export const de_ListBuildsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuildsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListBuildsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListBuildsOutput(data, context);
  const response: ListBuildsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListBuildsCommandError
 */
const de_ListBuildsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuildsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListBuildsForProjectCommand
 */
export const de_ListBuildsForProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuildsForProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListBuildsForProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListBuildsForProjectOutput(data, context);
  const response: ListBuildsForProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListBuildsForProjectCommandError
 */
const de_ListBuildsForProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuildsForProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListCuratedEnvironmentImagesCommand
 */
export const de_ListCuratedEnvironmentImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCuratedEnvironmentImagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCuratedEnvironmentImagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCuratedEnvironmentImagesOutput(data, context);
  const response: ListCuratedEnvironmentImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListCuratedEnvironmentImagesCommandError
 */
const de_ListCuratedEnvironmentImagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCuratedEnvironmentImagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListProjectsCommand
 */
export const de_ListProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListProjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListProjectsOutput(data, context);
  const response: ListProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListProjectsCommandError
 */
const de_ListProjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListReportGroupsCommand
 */
export const de_ListReportGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListReportGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListReportGroupsOutput(data, context);
  const response: ListReportGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListReportGroupsCommandError
 */
const de_ListReportGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListReportsCommand
 */
export const de_ListReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListReportsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListReportsOutput(data, context);
  const response: ListReportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListReportsCommandError
 */
const de_ListReportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListReportsForReportGroupCommand
 */
export const de_ListReportsForReportGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportsForReportGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListReportsForReportGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListReportsForReportGroupOutput(data, context);
  const response: ListReportsForReportGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListReportsForReportGroupCommandError
 */
const de_ListReportsForReportGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportsForReportGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListSharedProjectsCommand
 */
export const de_ListSharedProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSharedProjectsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSharedProjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSharedProjectsOutput(data, context);
  const response: ListSharedProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListSharedProjectsCommandError
 */
const de_ListSharedProjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSharedProjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListSharedReportGroupsCommand
 */
export const de_ListSharedReportGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSharedReportGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSharedReportGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSharedReportGroupsOutput(data, context);
  const response: ListSharedReportGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListSharedReportGroupsCommandError
 */
const de_ListSharedReportGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSharedReportGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListSourceCredentialsCommand
 */
export const de_ListSourceCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSourceCredentialsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSourceCredentialsOutput(data, context);
  const response: ListSourceCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListSourceCredentialsCommandError
 */
const de_ListSourceCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutResourcePolicyOutput(data, context);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutResourcePolicyCommandError
 */
const de_PutResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RetryBuildCommand
 */
export const de_RetryBuildCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryBuildCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RetryBuildCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RetryBuildOutput(data, context);
  const response: RetryBuildCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RetryBuildCommandError
 */
const de_RetryBuildCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryBuildCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountLimitExceededException":
    case "com.amazonaws.codebuild#AccountLimitExceededException":
      throw await de_AccountLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RetryBuildBatchCommand
 */
export const de_RetryBuildBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryBuildBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RetryBuildBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RetryBuildBatchOutput(data, context);
  const response: RetryBuildBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RetryBuildBatchCommandError
 */
const de_RetryBuildBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryBuildBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartBuildCommand
 */
export const de_StartBuildCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBuildCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartBuildCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartBuildOutput(data, context);
  const response: StartBuildCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartBuildCommandError
 */
const de_StartBuildCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBuildCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountLimitExceededException":
    case "com.amazonaws.codebuild#AccountLimitExceededException":
      throw await de_AccountLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartBuildBatchCommand
 */
export const de_StartBuildBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBuildBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartBuildBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartBuildBatchOutput(data, context);
  const response: StartBuildBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartBuildBatchCommandError
 */
const de_StartBuildBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBuildBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopBuildCommand
 */
export const de_StopBuildCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBuildCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopBuildCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopBuildOutput(data, context);
  const response: StopBuildCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopBuildCommandError
 */
const de_StopBuildCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBuildCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopBuildBatchCommand
 */
export const de_StopBuildBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBuildBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopBuildBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopBuildBatchOutput(data, context);
  const response: StopBuildBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopBuildBatchCommandError
 */
const de_StopBuildBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBuildBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateProjectCommand
 */
export const de_UpdateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateProjectOutput(data, context);
  const response: UpdateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateProjectCommandError
 */
const de_UpdateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateProjectVisibilityCommand
 */
export const de_UpdateProjectVisibilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectVisibilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateProjectVisibilityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateProjectVisibilityOutput(data, context);
  const response: UpdateProjectVisibilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateProjectVisibilityCommandError
 */
const de_UpdateProjectVisibilityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectVisibilityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateReportGroupCommand
 */
export const de_UpdateReportGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReportGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateReportGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateReportGroupOutput(data, context);
  const response: UpdateReportGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateReportGroupCommandError
 */
const de_UpdateReportGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReportGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateWebhookCommand
 */
export const de_UpdateWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWebhookCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateWebhookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateWebhookOutput(data, context);
  const response: UpdateWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateWebhookCommandError
 */
const de_UpdateWebhookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWebhookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OAuthProviderException":
    case "com.amazonaws.codebuild#OAuthProviderException":
      throw await de_OAuthProviderExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AccountLimitExceededExceptionRes
 */
const de_AccountLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccountLimitExceededException(body, context);
  const exception = new AccountLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidInputExceptionRes
 */
const de_InvalidInputExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidInputException(body, context);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OAuthProviderExceptionRes
 */
const de_OAuthProviderExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OAuthProviderException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OAuthProviderException(body, context);
  const exception = new OAuthProviderException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceAlreadyExistsException(body, context);
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1BatchDeleteBuildsInput
 */
const se_BatchDeleteBuildsInput = (input: BatchDeleteBuildsInput, context: __SerdeContext): any => {
  return {
    ...(input.ids != null && { ids: se_BuildIds(input.ids, context) }),
  };
};

/**
 * serializeAws_json1_1BatchGetBuildBatchesInput
 */
const se_BatchGetBuildBatchesInput = (input: BatchGetBuildBatchesInput, context: __SerdeContext): any => {
  return {
    ...(input.ids != null && { ids: se_BuildBatchIds(input.ids, context) }),
  };
};

/**
 * serializeAws_json1_1BatchGetBuildsInput
 */
const se_BatchGetBuildsInput = (input: BatchGetBuildsInput, context: __SerdeContext): any => {
  return {
    ...(input.ids != null && { ids: se_BuildIds(input.ids, context) }),
  };
};

/**
 * serializeAws_json1_1BatchGetProjectsInput
 */
const se_BatchGetProjectsInput = (input: BatchGetProjectsInput, context: __SerdeContext): any => {
  return {
    ...(input.names != null && { names: se_ProjectNames(input.names, context) }),
  };
};

/**
 * serializeAws_json1_1BatchGetReportGroupsInput
 */
const se_BatchGetReportGroupsInput = (input: BatchGetReportGroupsInput, context: __SerdeContext): any => {
  return {
    ...(input.reportGroupArns != null && { reportGroupArns: se_ReportGroupArns(input.reportGroupArns, context) }),
  };
};

/**
 * serializeAws_json1_1BatchGetReportsInput
 */
const se_BatchGetReportsInput = (input: BatchGetReportsInput, context: __SerdeContext): any => {
  return {
    ...(input.reportArns != null && { reportArns: se_ReportArns(input.reportArns, context) }),
  };
};

/**
 * serializeAws_json1_1BatchRestrictions
 */
const se_BatchRestrictions = (input: BatchRestrictions, context: __SerdeContext): any => {
  return {
    ...(input.computeTypesAllowed != null && {
      computeTypesAllowed: se_ComputeTypesAllowed(input.computeTypesAllowed, context),
    }),
    ...(input.maximumBuildsAllowed != null && { maximumBuildsAllowed: input.maximumBuildsAllowed }),
  };
};

/**
 * serializeAws_json1_1BuildBatchFilter
 */
const se_BuildBatchFilter = (input: BuildBatchFilter, context: __SerdeContext): any => {
  return {
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_1BuildBatchIds
 */
const se_BuildBatchIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1BuildIds
 */
const se_BuildIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1BuildStatusConfig
 */
const se_BuildStatusConfig = (input: BuildStatusConfig, context: __SerdeContext): any => {
  return {
    ...(input.context != null && { context: input.context }),
    ...(input.targetUrl != null && { targetUrl: input.targetUrl }),
  };
};

/**
 * serializeAws_json1_1CloudWatchLogsConfig
 */
const se_CloudWatchLogsConfig = (input: CloudWatchLogsConfig, context: __SerdeContext): any => {
  return {
    ...(input.groupName != null && { groupName: input.groupName }),
    ...(input.status != null && { status: input.status }),
    ...(input.streamName != null && { streamName: input.streamName }),
  };
};

/**
 * serializeAws_json1_1ComputeTypesAllowed
 */
const se_ComputeTypesAllowed = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CreateProjectInput
 */
const se_CreateProjectInput = (input: CreateProjectInput, context: __SerdeContext): any => {
  return {
    ...(input.artifacts != null && { artifacts: se_ProjectArtifacts(input.artifacts, context) }),
    ...(input.badgeEnabled != null && { badgeEnabled: input.badgeEnabled }),
    ...(input.buildBatchConfig != null && {
      buildBatchConfig: se_ProjectBuildBatchConfig(input.buildBatchConfig, context),
    }),
    ...(input.cache != null && { cache: se_ProjectCache(input.cache, context) }),
    ...(input.concurrentBuildLimit != null && { concurrentBuildLimit: input.concurrentBuildLimit }),
    ...(input.description != null && { description: input.description }),
    ...(input.encryptionKey != null && { encryptionKey: input.encryptionKey }),
    ...(input.environment != null && { environment: se_ProjectEnvironment(input.environment, context) }),
    ...(input.fileSystemLocations != null && {
      fileSystemLocations: se_ProjectFileSystemLocations(input.fileSystemLocations, context),
    }),
    ...(input.logsConfig != null && { logsConfig: se_LogsConfig(input.logsConfig, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.queuedTimeoutInMinutes != null && { queuedTimeoutInMinutes: input.queuedTimeoutInMinutes }),
    ...(input.secondaryArtifacts != null && {
      secondaryArtifacts: se_ProjectArtifactsList(input.secondaryArtifacts, context),
    }),
    ...(input.secondarySourceVersions != null && {
      secondarySourceVersions: se_ProjectSecondarySourceVersions(input.secondarySourceVersions, context),
    }),
    ...(input.secondarySources != null && { secondarySources: se_ProjectSources(input.secondarySources, context) }),
    ...(input.serviceRole != null && { serviceRole: input.serviceRole }),
    ...(input.source != null && { source: se_ProjectSource(input.source, context) }),
    ...(input.sourceVersion != null && { sourceVersion: input.sourceVersion }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.timeoutInMinutes != null && { timeoutInMinutes: input.timeoutInMinutes }),
    ...(input.vpcConfig != null && { vpcConfig: se_VpcConfig(input.vpcConfig, context) }),
  };
};

/**
 * serializeAws_json1_1CreateReportGroupInput
 */
const se_CreateReportGroupInput = (input: CreateReportGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.exportConfig != null && { exportConfig: se_ReportExportConfig(input.exportConfig, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1CreateWebhookInput
 */
const se_CreateWebhookInput = (input: CreateWebhookInput, context: __SerdeContext): any => {
  return {
    ...(input.branchFilter != null && { branchFilter: input.branchFilter }),
    ...(input.buildType != null && { buildType: input.buildType }),
    ...(input.filterGroups != null && { filterGroups: se_FilterGroups(input.filterGroups, context) }),
    ...(input.projectName != null && { projectName: input.projectName }),
  };
};

/**
 * serializeAws_json1_1DeleteBuildBatchInput
 */
const se_DeleteBuildBatchInput = (input: DeleteBuildBatchInput, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_1DeleteProjectInput
 */
const se_DeleteProjectInput = (input: DeleteProjectInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1DeleteReportGroupInput
 */
const se_DeleteReportGroupInput = (input: DeleteReportGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.deleteReports != null && { deleteReports: input.deleteReports }),
  };
};

/**
 * serializeAws_json1_1DeleteReportInput
 */
const se_DeleteReportInput = (input: DeleteReportInput, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1DeleteResourcePolicyInput
 */
const se_DeleteResourcePolicyInput = (input: DeleteResourcePolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

/**
 * serializeAws_json1_1DeleteSourceCredentialsInput
 */
const se_DeleteSourceCredentialsInput = (input: DeleteSourceCredentialsInput, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1DeleteWebhookInput
 */
const se_DeleteWebhookInput = (input: DeleteWebhookInput, context: __SerdeContext): any => {
  return {
    ...(input.projectName != null && { projectName: input.projectName }),
  };
};

/**
 * serializeAws_json1_1DescribeCodeCoveragesInput
 */
const se_DescribeCodeCoveragesInput = (input: DescribeCodeCoveragesInput, context: __SerdeContext): any => {
  return {
    ...(input.maxLineCoveragePercentage != null && {
      maxLineCoveragePercentage: __serializeFloat(input.maxLineCoveragePercentage),
    }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.minLineCoveragePercentage != null && {
      minLineCoveragePercentage: __serializeFloat(input.minLineCoveragePercentage),
    }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.reportArn != null && { reportArn: input.reportArn }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_json1_1DescribeTestCasesInput
 */
const se_DescribeTestCasesInput = (input: DescribeTestCasesInput, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: se_TestCaseFilter(input.filter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.reportArn != null && { reportArn: input.reportArn }),
  };
};

/**
 * serializeAws_json1_1EnvironmentVariable
 */
const se_EnvironmentVariable = (input: EnvironmentVariable, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.type != null && { type: input.type }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1EnvironmentVariables
 */
const se_EnvironmentVariables = (input: EnvironmentVariable[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EnvironmentVariable(entry, context);
    });
};

/**
 * serializeAws_json1_1FilterGroup
 */
const se_FilterGroup = (input: WebhookFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WebhookFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1FilterGroups
 */
const se_FilterGroups = (input: WebhookFilter[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FilterGroup(entry, context);
    });
};

/**
 * serializeAws_json1_1GetReportGroupTrendInput
 */
const se_GetReportGroupTrendInput = (input: GetReportGroupTrendInput, context: __SerdeContext): any => {
  return {
    ...(input.numOfReports != null && { numOfReports: input.numOfReports }),
    ...(input.reportGroupArn != null && { reportGroupArn: input.reportGroupArn }),
    ...(input.trendField != null && { trendField: input.trendField }),
  };
};

/**
 * serializeAws_json1_1GetResourcePolicyInput
 */
const se_GetResourcePolicyInput = (input: GetResourcePolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

/**
 * serializeAws_json1_1GitSubmodulesConfig
 */
const se_GitSubmodulesConfig = (input: GitSubmodulesConfig, context: __SerdeContext): any => {
  return {
    ...(input.fetchSubmodules != null && { fetchSubmodules: input.fetchSubmodules }),
  };
};

/**
 * serializeAws_json1_1ImportSourceCredentialsInput
 */
const se_ImportSourceCredentialsInput = (input: ImportSourceCredentialsInput, context: __SerdeContext): any => {
  return {
    ...(input.authType != null && { authType: input.authType }),
    ...(input.serverType != null && { serverType: input.serverType }),
    ...(input.shouldOverwrite != null && { shouldOverwrite: input.shouldOverwrite }),
    ...(input.token != null && { token: input.token }),
    ...(input.username != null && { username: input.username }),
  };
};

/**
 * serializeAws_json1_1InvalidateProjectCacheInput
 */
const se_InvalidateProjectCacheInput = (input: InvalidateProjectCacheInput, context: __SerdeContext): any => {
  return {
    ...(input.projectName != null && { projectName: input.projectName }),
  };
};

/**
 * serializeAws_json1_1ListBuildBatchesForProjectInput
 */
const se_ListBuildBatchesForProjectInput = (input: ListBuildBatchesForProjectInput, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: se_BuildBatchFilter(input.filter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.projectName != null && { projectName: input.projectName }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_json1_1ListBuildBatchesInput
 */
const se_ListBuildBatchesInput = (input: ListBuildBatchesInput, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: se_BuildBatchFilter(input.filter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_json1_1ListBuildsForProjectInput
 */
const se_ListBuildsForProjectInput = (input: ListBuildsForProjectInput, context: __SerdeContext): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.projectName != null && { projectName: input.projectName }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_json1_1ListBuildsInput
 */
const se_ListBuildsInput = (input: ListBuildsInput, context: __SerdeContext): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_json1_1ListCuratedEnvironmentImagesInput
 */
const se_ListCuratedEnvironmentImagesInput = (
  input: ListCuratedEnvironmentImagesInput,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_json1_1ListProjectsInput
 */
const se_ListProjectsInput = (input: ListProjectsInput, context: __SerdeContext): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_json1_1ListReportGroupsInput
 */
const se_ListReportGroupsInput = (input: ListReportGroupsInput, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_json1_1ListReportsForReportGroupInput
 */
const se_ListReportsForReportGroupInput = (input: ListReportsForReportGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: se_ReportFilter(input.filter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.reportGroupArn != null && { reportGroupArn: input.reportGroupArn }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_json1_1ListReportsInput
 */
const se_ListReportsInput = (input: ListReportsInput, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: se_ReportFilter(input.filter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_json1_1ListSharedProjectsInput
 */
const se_ListSharedProjectsInput = (input: ListSharedProjectsInput, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_json1_1ListSharedReportGroupsInput
 */
const se_ListSharedReportGroupsInput = (input: ListSharedReportGroupsInput, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_json1_1ListSourceCredentialsInput
 */
const se_ListSourceCredentialsInput = (input: ListSourceCredentialsInput, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1LogsConfig
 */
const se_LogsConfig = (input: LogsConfig, context: __SerdeContext): any => {
  return {
    ...(input.cloudWatchLogs != null && { cloudWatchLogs: se_CloudWatchLogsConfig(input.cloudWatchLogs, context) }),
    ...(input.s3Logs != null && { s3Logs: se_S3LogsConfig(input.s3Logs, context) }),
  };
};

/**
 * serializeAws_json1_1ProjectArtifacts
 */
const se_ProjectArtifacts = (input: ProjectArtifacts, context: __SerdeContext): any => {
  return {
    ...(input.artifactIdentifier != null && { artifactIdentifier: input.artifactIdentifier }),
    ...(input.bucketOwnerAccess != null && { bucketOwnerAccess: input.bucketOwnerAccess }),
    ...(input.encryptionDisabled != null && { encryptionDisabled: input.encryptionDisabled }),
    ...(input.location != null && { location: input.location }),
    ...(input.name != null && { name: input.name }),
    ...(input.namespaceType != null && { namespaceType: input.namespaceType }),
    ...(input.overrideArtifactName != null && { overrideArtifactName: input.overrideArtifactName }),
    ...(input.packaging != null && { packaging: input.packaging }),
    ...(input.path != null && { path: input.path }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1ProjectArtifactsList
 */
const se_ProjectArtifactsList = (input: ProjectArtifacts[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ProjectArtifacts(entry, context);
    });
};

/**
 * serializeAws_json1_1ProjectBuildBatchConfig
 */
const se_ProjectBuildBatchConfig = (input: ProjectBuildBatchConfig, context: __SerdeContext): any => {
  return {
    ...(input.batchReportMode != null && { batchReportMode: input.batchReportMode }),
    ...(input.combineArtifacts != null && { combineArtifacts: input.combineArtifacts }),
    ...(input.restrictions != null && { restrictions: se_BatchRestrictions(input.restrictions, context) }),
    ...(input.serviceRole != null && { serviceRole: input.serviceRole }),
    ...(input.timeoutInMins != null && { timeoutInMins: input.timeoutInMins }),
  };
};

/**
 * serializeAws_json1_1ProjectCache
 */
const se_ProjectCache = (input: ProjectCache, context: __SerdeContext): any => {
  return {
    ...(input.location != null && { location: input.location }),
    ...(input.modes != null && { modes: se_ProjectCacheModes(input.modes, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1ProjectCacheModes
 */
const se_ProjectCacheModes = (input: (CacheMode | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ProjectEnvironment
 */
const se_ProjectEnvironment = (input: ProjectEnvironment, context: __SerdeContext): any => {
  return {
    ...(input.certificate != null && { certificate: input.certificate }),
    ...(input.computeType != null && { computeType: input.computeType }),
    ...(input.environmentVariables != null && {
      environmentVariables: se_EnvironmentVariables(input.environmentVariables, context),
    }),
    ...(input.image != null && { image: input.image }),
    ...(input.imagePullCredentialsType != null && { imagePullCredentialsType: input.imagePullCredentialsType }),
    ...(input.privilegedMode != null && { privilegedMode: input.privilegedMode }),
    ...(input.registryCredential != null && {
      registryCredential: se_RegistryCredential(input.registryCredential, context),
    }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1ProjectFileSystemLocation
 */
const se_ProjectFileSystemLocation = (input: ProjectFileSystemLocation, context: __SerdeContext): any => {
  return {
    ...(input.identifier != null && { identifier: input.identifier }),
    ...(input.location != null && { location: input.location }),
    ...(input.mountOptions != null && { mountOptions: input.mountOptions }),
    ...(input.mountPoint != null && { mountPoint: input.mountPoint }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1ProjectFileSystemLocations
 */
const se_ProjectFileSystemLocations = (input: ProjectFileSystemLocation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ProjectFileSystemLocation(entry, context);
    });
};

/**
 * serializeAws_json1_1ProjectNames
 */
const se_ProjectNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ProjectSecondarySourceVersions
 */
const se_ProjectSecondarySourceVersions = (input: ProjectSourceVersion[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ProjectSourceVersion(entry, context);
    });
};

/**
 * serializeAws_json1_1ProjectSource
 */
const se_ProjectSource = (input: ProjectSource, context: __SerdeContext): any => {
  return {
    ...(input.auth != null && { auth: se_SourceAuth(input.auth, context) }),
    ...(input.buildStatusConfig != null && {
      buildStatusConfig: se_BuildStatusConfig(input.buildStatusConfig, context),
    }),
    ...(input.buildspec != null && { buildspec: input.buildspec }),
    ...(input.gitCloneDepth != null && { gitCloneDepth: input.gitCloneDepth }),
    ...(input.gitSubmodulesConfig != null && {
      gitSubmodulesConfig: se_GitSubmodulesConfig(input.gitSubmodulesConfig, context),
    }),
    ...(input.insecureSsl != null && { insecureSsl: input.insecureSsl }),
    ...(input.location != null && { location: input.location }),
    ...(input.reportBuildStatus != null && { reportBuildStatus: input.reportBuildStatus }),
    ...(input.sourceIdentifier != null && { sourceIdentifier: input.sourceIdentifier }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1ProjectSources
 */
const se_ProjectSources = (input: ProjectSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ProjectSource(entry, context);
    });
};

/**
 * serializeAws_json1_1ProjectSourceVersion
 */
const se_ProjectSourceVersion = (input: ProjectSourceVersion, context: __SerdeContext): any => {
  return {
    ...(input.sourceIdentifier != null && { sourceIdentifier: input.sourceIdentifier }),
    ...(input.sourceVersion != null && { sourceVersion: input.sourceVersion }),
  };
};

/**
 * serializeAws_json1_1PutResourcePolicyInput
 */
const se_PutResourcePolicyInput = (input: PutResourcePolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.policy != null && { policy: input.policy }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

/**
 * serializeAws_json1_1RegistryCredential
 */
const se_RegistryCredential = (input: RegistryCredential, context: __SerdeContext): any => {
  return {
    ...(input.credential != null && { credential: input.credential }),
    ...(input.credentialProvider != null && { credentialProvider: input.credentialProvider }),
  };
};

/**
 * serializeAws_json1_1ReportArns
 */
const se_ReportArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ReportExportConfig
 */
const se_ReportExportConfig = (input: ReportExportConfig, context: __SerdeContext): any => {
  return {
    ...(input.exportConfigType != null && { exportConfigType: input.exportConfigType }),
    ...(input.s3Destination != null && { s3Destination: se_S3ReportExportConfig(input.s3Destination, context) }),
  };
};

/**
 * serializeAws_json1_1ReportFilter
 */
const se_ReportFilter = (input: ReportFilter, context: __SerdeContext): any => {
  return {
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_1ReportGroupArns
 */
const se_ReportGroupArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1RetryBuildBatchInput
 */
const se_RetryBuildBatchInput = (input: RetryBuildBatchInput, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.idempotencyToken != null && { idempotencyToken: input.idempotencyToken }),
    ...(input.retryType != null && { retryType: input.retryType }),
  };
};

/**
 * serializeAws_json1_1RetryBuildInput
 */
const se_RetryBuildInput = (input: RetryBuildInput, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.idempotencyToken != null && { idempotencyToken: input.idempotencyToken }),
  };
};

/**
 * serializeAws_json1_1S3LogsConfig
 */
const se_S3LogsConfig = (input: S3LogsConfig, context: __SerdeContext): any => {
  return {
    ...(input.bucketOwnerAccess != null && { bucketOwnerAccess: input.bucketOwnerAccess }),
    ...(input.encryptionDisabled != null && { encryptionDisabled: input.encryptionDisabled }),
    ...(input.location != null && { location: input.location }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_1S3ReportExportConfig
 */
const se_S3ReportExportConfig = (input: S3ReportExportConfig, context: __SerdeContext): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.bucketOwner != null && { bucketOwner: input.bucketOwner }),
    ...(input.encryptionDisabled != null && { encryptionDisabled: input.encryptionDisabled }),
    ...(input.encryptionKey != null && { encryptionKey: input.encryptionKey }),
    ...(input.packaging != null && { packaging: input.packaging }),
    ...(input.path != null && { path: input.path }),
  };
};

/**
 * serializeAws_json1_1SecurityGroupIds
 */
const se_SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SourceAuth
 */
const se_SourceAuth = (input: SourceAuth, context: __SerdeContext): any => {
  return {
    ...(input.resource != null && { resource: input.resource }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1StartBuildBatchInput
 */
const se_StartBuildBatchInput = (input: StartBuildBatchInput, context: __SerdeContext): any => {
  return {
    ...(input.artifactsOverride != null && {
      artifactsOverride: se_ProjectArtifacts(input.artifactsOverride, context),
    }),
    ...(input.buildBatchConfigOverride != null && {
      buildBatchConfigOverride: se_ProjectBuildBatchConfig(input.buildBatchConfigOverride, context),
    }),
    ...(input.buildTimeoutInMinutesOverride != null && {
      buildTimeoutInMinutesOverride: input.buildTimeoutInMinutesOverride,
    }),
    ...(input.buildspecOverride != null && { buildspecOverride: input.buildspecOverride }),
    ...(input.cacheOverride != null && { cacheOverride: se_ProjectCache(input.cacheOverride, context) }),
    ...(input.certificateOverride != null && { certificateOverride: input.certificateOverride }),
    ...(input.computeTypeOverride != null && { computeTypeOverride: input.computeTypeOverride }),
    ...(input.debugSessionEnabled != null && { debugSessionEnabled: input.debugSessionEnabled }),
    ...(input.encryptionKeyOverride != null && { encryptionKeyOverride: input.encryptionKeyOverride }),
    ...(input.environmentTypeOverride != null && { environmentTypeOverride: input.environmentTypeOverride }),
    ...(input.environmentVariablesOverride != null && {
      environmentVariablesOverride: se_EnvironmentVariables(input.environmentVariablesOverride, context),
    }),
    ...(input.gitCloneDepthOverride != null && { gitCloneDepthOverride: input.gitCloneDepthOverride }),
    ...(input.gitSubmodulesConfigOverride != null && {
      gitSubmodulesConfigOverride: se_GitSubmodulesConfig(input.gitSubmodulesConfigOverride, context),
    }),
    ...(input.idempotencyToken != null && { idempotencyToken: input.idempotencyToken }),
    ...(input.imageOverride != null && { imageOverride: input.imageOverride }),
    ...(input.imagePullCredentialsTypeOverride != null && {
      imagePullCredentialsTypeOverride: input.imagePullCredentialsTypeOverride,
    }),
    ...(input.insecureSslOverride != null && { insecureSslOverride: input.insecureSslOverride }),
    ...(input.logsConfigOverride != null && { logsConfigOverride: se_LogsConfig(input.logsConfigOverride, context) }),
    ...(input.privilegedModeOverride != null && { privilegedModeOverride: input.privilegedModeOverride }),
    ...(input.projectName != null && { projectName: input.projectName }),
    ...(input.queuedTimeoutInMinutesOverride != null && {
      queuedTimeoutInMinutesOverride: input.queuedTimeoutInMinutesOverride,
    }),
    ...(input.registryCredentialOverride != null && {
      registryCredentialOverride: se_RegistryCredential(input.registryCredentialOverride, context),
    }),
    ...(input.reportBuildBatchStatusOverride != null && {
      reportBuildBatchStatusOverride: input.reportBuildBatchStatusOverride,
    }),
    ...(input.secondaryArtifactsOverride != null && {
      secondaryArtifactsOverride: se_ProjectArtifactsList(input.secondaryArtifactsOverride, context),
    }),
    ...(input.secondarySourcesOverride != null && {
      secondarySourcesOverride: se_ProjectSources(input.secondarySourcesOverride, context),
    }),
    ...(input.secondarySourcesVersionOverride != null && {
      secondarySourcesVersionOverride: se_ProjectSecondarySourceVersions(
        input.secondarySourcesVersionOverride,
        context
      ),
    }),
    ...(input.serviceRoleOverride != null && { serviceRoleOverride: input.serviceRoleOverride }),
    ...(input.sourceAuthOverride != null && { sourceAuthOverride: se_SourceAuth(input.sourceAuthOverride, context) }),
    ...(input.sourceLocationOverride != null && { sourceLocationOverride: input.sourceLocationOverride }),
    ...(input.sourceTypeOverride != null && { sourceTypeOverride: input.sourceTypeOverride }),
    ...(input.sourceVersion != null && { sourceVersion: input.sourceVersion }),
  };
};

/**
 * serializeAws_json1_1StartBuildInput
 */
const se_StartBuildInput = (input: StartBuildInput, context: __SerdeContext): any => {
  return {
    ...(input.artifactsOverride != null && {
      artifactsOverride: se_ProjectArtifacts(input.artifactsOverride, context),
    }),
    ...(input.buildStatusConfigOverride != null && {
      buildStatusConfigOverride: se_BuildStatusConfig(input.buildStatusConfigOverride, context),
    }),
    ...(input.buildspecOverride != null && { buildspecOverride: input.buildspecOverride }),
    ...(input.cacheOverride != null && { cacheOverride: se_ProjectCache(input.cacheOverride, context) }),
    ...(input.certificateOverride != null && { certificateOverride: input.certificateOverride }),
    ...(input.computeTypeOverride != null && { computeTypeOverride: input.computeTypeOverride }),
    ...(input.debugSessionEnabled != null && { debugSessionEnabled: input.debugSessionEnabled }),
    ...(input.encryptionKeyOverride != null && { encryptionKeyOverride: input.encryptionKeyOverride }),
    ...(input.environmentTypeOverride != null && { environmentTypeOverride: input.environmentTypeOverride }),
    ...(input.environmentVariablesOverride != null && {
      environmentVariablesOverride: se_EnvironmentVariables(input.environmentVariablesOverride, context),
    }),
    ...(input.gitCloneDepthOverride != null && { gitCloneDepthOverride: input.gitCloneDepthOverride }),
    ...(input.gitSubmodulesConfigOverride != null && {
      gitSubmodulesConfigOverride: se_GitSubmodulesConfig(input.gitSubmodulesConfigOverride, context),
    }),
    ...(input.idempotencyToken != null && { idempotencyToken: input.idempotencyToken }),
    ...(input.imageOverride != null && { imageOverride: input.imageOverride }),
    ...(input.imagePullCredentialsTypeOverride != null && {
      imagePullCredentialsTypeOverride: input.imagePullCredentialsTypeOverride,
    }),
    ...(input.insecureSslOverride != null && { insecureSslOverride: input.insecureSslOverride }),
    ...(input.logsConfigOverride != null && { logsConfigOverride: se_LogsConfig(input.logsConfigOverride, context) }),
    ...(input.privilegedModeOverride != null && { privilegedModeOverride: input.privilegedModeOverride }),
    ...(input.projectName != null && { projectName: input.projectName }),
    ...(input.queuedTimeoutInMinutesOverride != null && {
      queuedTimeoutInMinutesOverride: input.queuedTimeoutInMinutesOverride,
    }),
    ...(input.registryCredentialOverride != null && {
      registryCredentialOverride: se_RegistryCredential(input.registryCredentialOverride, context),
    }),
    ...(input.reportBuildStatusOverride != null && { reportBuildStatusOverride: input.reportBuildStatusOverride }),
    ...(input.secondaryArtifactsOverride != null && {
      secondaryArtifactsOverride: se_ProjectArtifactsList(input.secondaryArtifactsOverride, context),
    }),
    ...(input.secondarySourcesOverride != null && {
      secondarySourcesOverride: se_ProjectSources(input.secondarySourcesOverride, context),
    }),
    ...(input.secondarySourcesVersionOverride != null && {
      secondarySourcesVersionOverride: se_ProjectSecondarySourceVersions(
        input.secondarySourcesVersionOverride,
        context
      ),
    }),
    ...(input.serviceRoleOverride != null && { serviceRoleOverride: input.serviceRoleOverride }),
    ...(input.sourceAuthOverride != null && { sourceAuthOverride: se_SourceAuth(input.sourceAuthOverride, context) }),
    ...(input.sourceLocationOverride != null && { sourceLocationOverride: input.sourceLocationOverride }),
    ...(input.sourceTypeOverride != null && { sourceTypeOverride: input.sourceTypeOverride }),
    ...(input.sourceVersion != null && { sourceVersion: input.sourceVersion }),
    ...(input.timeoutInMinutesOverride != null && { timeoutInMinutesOverride: input.timeoutInMinutesOverride }),
  };
};

/**
 * serializeAws_json1_1StopBuildBatchInput
 */
const se_StopBuildBatchInput = (input: StopBuildBatchInput, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_1StopBuildInput
 */
const se_StopBuildInput = (input: StopBuildInput, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_1Subnets
 */
const se_Subnets = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TestCaseFilter
 */
const se_TestCaseFilter = (input: TestCaseFilter, context: __SerdeContext): any => {
  return {
    ...(input.keyword != null && { keyword: input.keyword }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_1UpdateProjectInput
 */
const se_UpdateProjectInput = (input: UpdateProjectInput, context: __SerdeContext): any => {
  return {
    ...(input.artifacts != null && { artifacts: se_ProjectArtifacts(input.artifacts, context) }),
    ...(input.badgeEnabled != null && { badgeEnabled: input.badgeEnabled }),
    ...(input.buildBatchConfig != null && {
      buildBatchConfig: se_ProjectBuildBatchConfig(input.buildBatchConfig, context),
    }),
    ...(input.cache != null && { cache: se_ProjectCache(input.cache, context) }),
    ...(input.concurrentBuildLimit != null && { concurrentBuildLimit: input.concurrentBuildLimit }),
    ...(input.description != null && { description: input.description }),
    ...(input.encryptionKey != null && { encryptionKey: input.encryptionKey }),
    ...(input.environment != null && { environment: se_ProjectEnvironment(input.environment, context) }),
    ...(input.fileSystemLocations != null && {
      fileSystemLocations: se_ProjectFileSystemLocations(input.fileSystemLocations, context),
    }),
    ...(input.logsConfig != null && { logsConfig: se_LogsConfig(input.logsConfig, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.queuedTimeoutInMinutes != null && { queuedTimeoutInMinutes: input.queuedTimeoutInMinutes }),
    ...(input.secondaryArtifacts != null && {
      secondaryArtifacts: se_ProjectArtifactsList(input.secondaryArtifacts, context),
    }),
    ...(input.secondarySourceVersions != null && {
      secondarySourceVersions: se_ProjectSecondarySourceVersions(input.secondarySourceVersions, context),
    }),
    ...(input.secondarySources != null && { secondarySources: se_ProjectSources(input.secondarySources, context) }),
    ...(input.serviceRole != null && { serviceRole: input.serviceRole }),
    ...(input.source != null && { source: se_ProjectSource(input.source, context) }),
    ...(input.sourceVersion != null && { sourceVersion: input.sourceVersion }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.timeoutInMinutes != null && { timeoutInMinutes: input.timeoutInMinutes }),
    ...(input.vpcConfig != null && { vpcConfig: se_VpcConfig(input.vpcConfig, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateProjectVisibilityInput
 */
const se_UpdateProjectVisibilityInput = (input: UpdateProjectVisibilityInput, context: __SerdeContext): any => {
  return {
    ...(input.projectArn != null && { projectArn: input.projectArn }),
    ...(input.projectVisibility != null && { projectVisibility: input.projectVisibility }),
    ...(input.resourceAccessRole != null && { resourceAccessRole: input.resourceAccessRole }),
  };
};

/**
 * serializeAws_json1_1UpdateReportGroupInput
 */
const se_UpdateReportGroupInput = (input: UpdateReportGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.exportConfig != null && { exportConfig: se_ReportExportConfig(input.exportConfig, context) }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateWebhookInput
 */
const se_UpdateWebhookInput = (input: UpdateWebhookInput, context: __SerdeContext): any => {
  return {
    ...(input.branchFilter != null && { branchFilter: input.branchFilter }),
    ...(input.buildType != null && { buildType: input.buildType }),
    ...(input.filterGroups != null && { filterGroups: se_FilterGroups(input.filterGroups, context) }),
    ...(input.projectName != null && { projectName: input.projectName }),
    ...(input.rotateSecret != null && { rotateSecret: input.rotateSecret }),
  };
};

/**
 * serializeAws_json1_1VpcConfig
 */
const se_VpcConfig = (input: VpcConfig, context: __SerdeContext): any => {
  return {
    ...(input.securityGroupIds != null && { securityGroupIds: se_SecurityGroupIds(input.securityGroupIds, context) }),
    ...(input.subnets != null && { subnets: se_Subnets(input.subnets, context) }),
    ...(input.vpcId != null && { vpcId: input.vpcId }),
  };
};

/**
 * serializeAws_json1_1WebhookFilter
 */
const se_WebhookFilter = (input: WebhookFilter, context: __SerdeContext): any => {
  return {
    ...(input.excludeMatchedPattern != null && { excludeMatchedPattern: input.excludeMatchedPattern }),
    ...(input.pattern != null && { pattern: input.pattern }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * deserializeAws_json1_1AccountLimitExceededException
 */
const de_AccountLimitExceededException = (output: any, context: __SerdeContext): AccountLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1BatchDeleteBuildsOutput
 */
const de_BatchDeleteBuildsOutput = (output: any, context: __SerdeContext): BatchDeleteBuildsOutput => {
  return {
    buildsDeleted: output.buildsDeleted != null ? de_BuildIds(output.buildsDeleted, context) : undefined,
    buildsNotDeleted:
      output.buildsNotDeleted != null ? de_BuildsNotDeleted(output.buildsNotDeleted, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchGetBuildBatchesOutput
 */
const de_BatchGetBuildBatchesOutput = (output: any, context: __SerdeContext): BatchGetBuildBatchesOutput => {
  return {
    buildBatches: output.buildBatches != null ? de_BuildBatches(output.buildBatches, context) : undefined,
    buildBatchesNotFound:
      output.buildBatchesNotFound != null ? de_BuildBatchIds(output.buildBatchesNotFound, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchGetBuildsOutput
 */
const de_BatchGetBuildsOutput = (output: any, context: __SerdeContext): BatchGetBuildsOutput => {
  return {
    builds: output.builds != null ? de_Builds(output.builds, context) : undefined,
    buildsNotFound: output.buildsNotFound != null ? de_BuildIds(output.buildsNotFound, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchGetProjectsOutput
 */
const de_BatchGetProjectsOutput = (output: any, context: __SerdeContext): BatchGetProjectsOutput => {
  return {
    projects: output.projects != null ? de_Projects(output.projects, context) : undefined,
    projectsNotFound: output.projectsNotFound != null ? de_ProjectNames(output.projectsNotFound, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchGetReportGroupsOutput
 */
const de_BatchGetReportGroupsOutput = (output: any, context: __SerdeContext): BatchGetReportGroupsOutput => {
  return {
    reportGroups: output.reportGroups != null ? de_ReportGroups(output.reportGroups, context) : undefined,
    reportGroupsNotFound:
      output.reportGroupsNotFound != null ? de_ReportGroupArns(output.reportGroupsNotFound, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchGetReportsOutput
 */
const de_BatchGetReportsOutput = (output: any, context: __SerdeContext): BatchGetReportsOutput => {
  return {
    reports: output.reports != null ? de_Reports(output.reports, context) : undefined,
    reportsNotFound: output.reportsNotFound != null ? de_ReportArns(output.reportsNotFound, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchRestrictions
 */
const de_BatchRestrictions = (output: any, context: __SerdeContext): BatchRestrictions => {
  return {
    computeTypesAllowed:
      output.computeTypesAllowed != null ? de_ComputeTypesAllowed(output.computeTypesAllowed, context) : undefined,
    maximumBuildsAllowed: __expectInt32(output.maximumBuildsAllowed),
  } as any;
};

/**
 * deserializeAws_json1_1Build
 */
const de_Build = (output: any, context: __SerdeContext): Build => {
  return {
    arn: __expectString(output.arn),
    artifacts: output.artifacts != null ? de_BuildArtifacts(output.artifacts, context) : undefined,
    buildBatchArn: __expectString(output.buildBatchArn),
    buildComplete: __expectBoolean(output.buildComplete),
    buildNumber: __expectLong(output.buildNumber),
    buildStatus: __expectString(output.buildStatus),
    cache: output.cache != null ? de_ProjectCache(output.cache, context) : undefined,
    currentPhase: __expectString(output.currentPhase),
    debugSession: output.debugSession != null ? de_DebugSession(output.debugSession, context) : undefined,
    encryptionKey: __expectString(output.encryptionKey),
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    environment: output.environment != null ? de_ProjectEnvironment(output.environment, context) : undefined,
    exportedEnvironmentVariables:
      output.exportedEnvironmentVariables != null
        ? de_ExportedEnvironmentVariables(output.exportedEnvironmentVariables, context)
        : undefined,
    fileSystemLocations:
      output.fileSystemLocations != null
        ? de_ProjectFileSystemLocations(output.fileSystemLocations, context)
        : undefined,
    id: __expectString(output.id),
    initiator: __expectString(output.initiator),
    logs: output.logs != null ? de_LogsLocation(output.logs, context) : undefined,
    networkInterface:
      output.networkInterface != null ? de_NetworkInterface(output.networkInterface, context) : undefined,
    phases: output.phases != null ? de_BuildPhases(output.phases, context) : undefined,
    projectName: __expectString(output.projectName),
    queuedTimeoutInMinutes: __expectInt32(output.queuedTimeoutInMinutes),
    reportArns: output.reportArns != null ? de_BuildReportArns(output.reportArns, context) : undefined,
    resolvedSourceVersion: __expectString(output.resolvedSourceVersion),
    secondaryArtifacts:
      output.secondaryArtifacts != null ? de_BuildArtifactsList(output.secondaryArtifacts, context) : undefined,
    secondarySourceVersions:
      output.secondarySourceVersions != null
        ? de_ProjectSecondarySourceVersions(output.secondarySourceVersions, context)
        : undefined,
    secondarySources: output.secondarySources != null ? de_ProjectSources(output.secondarySources, context) : undefined,
    serviceRole: __expectString(output.serviceRole),
    source: output.source != null ? de_ProjectSource(output.source, context) : undefined,
    sourceVersion: __expectString(output.sourceVersion),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    timeoutInMinutes: __expectInt32(output.timeoutInMinutes),
    vpcConfig: output.vpcConfig != null ? de_VpcConfig(output.vpcConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BuildArtifacts
 */
const de_BuildArtifacts = (output: any, context: __SerdeContext): BuildArtifacts => {
  return {
    artifactIdentifier: __expectString(output.artifactIdentifier),
    bucketOwnerAccess: __expectString(output.bucketOwnerAccess),
    encryptionDisabled: __expectBoolean(output.encryptionDisabled),
    location: __expectString(output.location),
    md5sum: __expectString(output.md5sum),
    overrideArtifactName: __expectBoolean(output.overrideArtifactName),
    sha256sum: __expectString(output.sha256sum),
  } as any;
};

/**
 * deserializeAws_json1_1BuildArtifactsList
 */
const de_BuildArtifactsList = (output: any, context: __SerdeContext): BuildArtifacts[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BuildArtifacts(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BuildBatch
 */
const de_BuildBatch = (output: any, context: __SerdeContext): BuildBatch => {
  return {
    arn: __expectString(output.arn),
    artifacts: output.artifacts != null ? de_BuildArtifacts(output.artifacts, context) : undefined,
    buildBatchConfig:
      output.buildBatchConfig != null ? de_ProjectBuildBatchConfig(output.buildBatchConfig, context) : undefined,
    buildBatchNumber: __expectLong(output.buildBatchNumber),
    buildBatchStatus: __expectString(output.buildBatchStatus),
    buildGroups: output.buildGroups != null ? de_BuildGroups(output.buildGroups, context) : undefined,
    buildTimeoutInMinutes: __expectInt32(output.buildTimeoutInMinutes),
    cache: output.cache != null ? de_ProjectCache(output.cache, context) : undefined,
    complete: __expectBoolean(output.complete),
    currentPhase: __expectString(output.currentPhase),
    debugSessionEnabled: __expectBoolean(output.debugSessionEnabled),
    encryptionKey: __expectString(output.encryptionKey),
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    environment: output.environment != null ? de_ProjectEnvironment(output.environment, context) : undefined,
    fileSystemLocations:
      output.fileSystemLocations != null
        ? de_ProjectFileSystemLocations(output.fileSystemLocations, context)
        : undefined,
    id: __expectString(output.id),
    initiator: __expectString(output.initiator),
    logConfig: output.logConfig != null ? de_LogsConfig(output.logConfig, context) : undefined,
    phases: output.phases != null ? de_BuildBatchPhases(output.phases, context) : undefined,
    projectName: __expectString(output.projectName),
    queuedTimeoutInMinutes: __expectInt32(output.queuedTimeoutInMinutes),
    resolvedSourceVersion: __expectString(output.resolvedSourceVersion),
    secondaryArtifacts:
      output.secondaryArtifacts != null ? de_BuildArtifactsList(output.secondaryArtifacts, context) : undefined,
    secondarySourceVersions:
      output.secondarySourceVersions != null
        ? de_ProjectSecondarySourceVersions(output.secondarySourceVersions, context)
        : undefined,
    secondarySources: output.secondarySources != null ? de_ProjectSources(output.secondarySources, context) : undefined,
    serviceRole: __expectString(output.serviceRole),
    source: output.source != null ? de_ProjectSource(output.source, context) : undefined,
    sourceVersion: __expectString(output.sourceVersion),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    vpcConfig: output.vpcConfig != null ? de_VpcConfig(output.vpcConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BuildBatches
 */
const de_BuildBatches = (output: any, context: __SerdeContext): BuildBatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BuildBatch(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BuildBatchIds
 */
const de_BuildBatchIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BuildBatchPhase
 */
const de_BuildBatchPhase = (output: any, context: __SerdeContext): BuildBatchPhase => {
  return {
    contexts: output.contexts != null ? de_PhaseContexts(output.contexts, context) : undefined,
    durationInSeconds: __expectLong(output.durationInSeconds),
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    phaseStatus: __expectString(output.phaseStatus),
    phaseType: __expectString(output.phaseType),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BuildBatchPhases
 */
const de_BuildBatchPhases = (output: any, context: __SerdeContext): BuildBatchPhase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BuildBatchPhase(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BuildGroup
 */
const de_BuildGroup = (output: any, context: __SerdeContext): BuildGroup => {
  return {
    currentBuildSummary:
      output.currentBuildSummary != null ? de_BuildSummary(output.currentBuildSummary, context) : undefined,
    dependsOn: output.dependsOn != null ? de_Identifiers(output.dependsOn, context) : undefined,
    identifier: __expectString(output.identifier),
    ignoreFailure: __expectBoolean(output.ignoreFailure),
    priorBuildSummaryList:
      output.priorBuildSummaryList != null ? de_BuildSummaries(output.priorBuildSummaryList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BuildGroups
 */
const de_BuildGroups = (output: any, context: __SerdeContext): BuildGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BuildGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BuildIds
 */
const de_BuildIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BuildNotDeleted
 */
const de_BuildNotDeleted = (output: any, context: __SerdeContext): BuildNotDeleted => {
  return {
    id: __expectString(output.id),
    statusCode: __expectString(output.statusCode),
  } as any;
};

/**
 * deserializeAws_json1_1BuildPhase
 */
const de_BuildPhase = (output: any, context: __SerdeContext): BuildPhase => {
  return {
    contexts: output.contexts != null ? de_PhaseContexts(output.contexts, context) : undefined,
    durationInSeconds: __expectLong(output.durationInSeconds),
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    phaseStatus: __expectString(output.phaseStatus),
    phaseType: __expectString(output.phaseType),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BuildPhases
 */
const de_BuildPhases = (output: any, context: __SerdeContext): BuildPhase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BuildPhase(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BuildReportArns
 */
const de_BuildReportArns = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Builds
 */
const de_Builds = (output: any, context: __SerdeContext): Build[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Build(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BuildsNotDeleted
 */
const de_BuildsNotDeleted = (output: any, context: __SerdeContext): BuildNotDeleted[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BuildNotDeleted(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BuildStatusConfig
 */
const de_BuildStatusConfig = (output: any, context: __SerdeContext): BuildStatusConfig => {
  return {
    context: __expectString(output.context),
    targetUrl: __expectString(output.targetUrl),
  } as any;
};

/**
 * deserializeAws_json1_1BuildSummaries
 */
const de_BuildSummaries = (output: any, context: __SerdeContext): BuildSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BuildSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BuildSummary
 */
const de_BuildSummary = (output: any, context: __SerdeContext): BuildSummary => {
  return {
    arn: __expectString(output.arn),
    buildStatus: __expectString(output.buildStatus),
    primaryArtifact: output.primaryArtifact != null ? de_ResolvedArtifact(output.primaryArtifact, context) : undefined,
    requestedOn:
      output.requestedOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.requestedOn)))
        : undefined,
    secondaryArtifacts:
      output.secondaryArtifacts != null ? de_ResolvedSecondaryArtifacts(output.secondaryArtifacts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CloudWatchLogsConfig
 */
const de_CloudWatchLogsConfig = (output: any, context: __SerdeContext): CloudWatchLogsConfig => {
  return {
    groupName: __expectString(output.groupName),
    status: __expectString(output.status),
    streamName: __expectString(output.streamName),
  } as any;
};

/**
 * deserializeAws_json1_1CodeCoverage
 */
const de_CodeCoverage = (output: any, context: __SerdeContext): CodeCoverage => {
  return {
    branchCoveragePercentage: __limitedParseDouble(output.branchCoveragePercentage),
    branchesCovered: __expectInt32(output.branchesCovered),
    branchesMissed: __expectInt32(output.branchesMissed),
    expired:
      output.expired != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.expired))) : undefined,
    filePath: __expectString(output.filePath),
    id: __expectString(output.id),
    lineCoveragePercentage: __limitedParseDouble(output.lineCoveragePercentage),
    linesCovered: __expectInt32(output.linesCovered),
    linesMissed: __expectInt32(output.linesMissed),
    reportARN: __expectString(output.reportARN),
  } as any;
};

/**
 * deserializeAws_json1_1CodeCoverageReportSummary
 */
const de_CodeCoverageReportSummary = (output: any, context: __SerdeContext): CodeCoverageReportSummary => {
  return {
    branchCoveragePercentage: __limitedParseDouble(output.branchCoveragePercentage),
    branchesCovered: __expectInt32(output.branchesCovered),
    branchesMissed: __expectInt32(output.branchesMissed),
    lineCoveragePercentage: __limitedParseDouble(output.lineCoveragePercentage),
    linesCovered: __expectInt32(output.linesCovered),
    linesMissed: __expectInt32(output.linesMissed),
  } as any;
};

/**
 * deserializeAws_json1_1CodeCoverages
 */
const de_CodeCoverages = (output: any, context: __SerdeContext): CodeCoverage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CodeCoverage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ComputeTypesAllowed
 */
const de_ComputeTypesAllowed = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateProjectOutput
 */
const de_CreateProjectOutput = (output: any, context: __SerdeContext): CreateProjectOutput => {
  return {
    project: output.project != null ? de_Project(output.project, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateReportGroupOutput
 */
const de_CreateReportGroupOutput = (output: any, context: __SerdeContext): CreateReportGroupOutput => {
  return {
    reportGroup: output.reportGroup != null ? de_ReportGroup(output.reportGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateWebhookOutput
 */
const de_CreateWebhookOutput = (output: any, context: __SerdeContext): CreateWebhookOutput => {
  return {
    webhook: output.webhook != null ? de_Webhook(output.webhook, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DebugSession
 */
const de_DebugSession = (output: any, context: __SerdeContext): DebugSession => {
  return {
    sessionEnabled: __expectBoolean(output.sessionEnabled),
    sessionTarget: __expectString(output.sessionTarget),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteBuildBatchOutput
 */
const de_DeleteBuildBatchOutput = (output: any, context: __SerdeContext): DeleteBuildBatchOutput => {
  return {
    buildsDeleted: output.buildsDeleted != null ? de_BuildIds(output.buildsDeleted, context) : undefined,
    buildsNotDeleted:
      output.buildsNotDeleted != null ? de_BuildsNotDeleted(output.buildsNotDeleted, context) : undefined,
    statusCode: __expectString(output.statusCode),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteProjectOutput
 */
const de_DeleteProjectOutput = (output: any, context: __SerdeContext): DeleteProjectOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteReportGroupOutput
 */
const de_DeleteReportGroupOutput = (output: any, context: __SerdeContext): DeleteReportGroupOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteReportOutput
 */
const de_DeleteReportOutput = (output: any, context: __SerdeContext): DeleteReportOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteResourcePolicyOutput
 */
const de_DeleteResourcePolicyOutput = (output: any, context: __SerdeContext): DeleteResourcePolicyOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteSourceCredentialsOutput
 */
const de_DeleteSourceCredentialsOutput = (output: any, context: __SerdeContext): DeleteSourceCredentialsOutput => {
  return {
    arn: __expectString(output.arn),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteWebhookOutput
 */
const de_DeleteWebhookOutput = (output: any, context: __SerdeContext): DeleteWebhookOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeCodeCoveragesOutput
 */
const de_DescribeCodeCoveragesOutput = (output: any, context: __SerdeContext): DescribeCodeCoveragesOutput => {
  return {
    codeCoverages: output.codeCoverages != null ? de_CodeCoverages(output.codeCoverages, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTestCasesOutput
 */
const de_DescribeTestCasesOutput = (output: any, context: __SerdeContext): DescribeTestCasesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    testCases: output.testCases != null ? de_TestCases(output.testCases, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EnvironmentImage
 */
const de_EnvironmentImage = (output: any, context: __SerdeContext): EnvironmentImage => {
  return {
    description: __expectString(output.description),
    name: __expectString(output.name),
    versions: output.versions != null ? de_ImageVersions(output.versions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EnvironmentImages
 */
const de_EnvironmentImages = (output: any, context: __SerdeContext): EnvironmentImage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EnvironmentImage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EnvironmentLanguage
 */
const de_EnvironmentLanguage = (output: any, context: __SerdeContext): EnvironmentLanguage => {
  return {
    images: output.images != null ? de_EnvironmentImages(output.images, context) : undefined,
    language: __expectString(output.language),
  } as any;
};

/**
 * deserializeAws_json1_1EnvironmentLanguages
 */
const de_EnvironmentLanguages = (output: any, context: __SerdeContext): EnvironmentLanguage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EnvironmentLanguage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EnvironmentPlatform
 */
const de_EnvironmentPlatform = (output: any, context: __SerdeContext): EnvironmentPlatform => {
  return {
    languages: output.languages != null ? de_EnvironmentLanguages(output.languages, context) : undefined,
    platform: __expectString(output.platform),
  } as any;
};

/**
 * deserializeAws_json1_1EnvironmentPlatforms
 */
const de_EnvironmentPlatforms = (output: any, context: __SerdeContext): EnvironmentPlatform[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EnvironmentPlatform(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EnvironmentVariable
 */
const de_EnvironmentVariable = (output: any, context: __SerdeContext): EnvironmentVariable => {
  return {
    name: __expectString(output.name),
    type: __expectString(output.type),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1EnvironmentVariables
 */
const de_EnvironmentVariables = (output: any, context: __SerdeContext): EnvironmentVariable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EnvironmentVariable(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExportedEnvironmentVariable
 */
const de_ExportedEnvironmentVariable = (output: any, context: __SerdeContext): ExportedEnvironmentVariable => {
  return {
    name: __expectString(output.name),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1ExportedEnvironmentVariables
 */
const de_ExportedEnvironmentVariables = (output: any, context: __SerdeContext): ExportedEnvironmentVariable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExportedEnvironmentVariable(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FilterGroup
 */
const de_FilterGroup = (output: any, context: __SerdeContext): WebhookFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WebhookFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FilterGroups
 */
const de_FilterGroups = (output: any, context: __SerdeContext): WebhookFilter[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FilterGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetReportGroupTrendOutput
 */
const de_GetReportGroupTrendOutput = (output: any, context: __SerdeContext): GetReportGroupTrendOutput => {
  return {
    rawData: output.rawData != null ? de_ReportGroupTrendRawDataList(output.rawData, context) : undefined,
    stats: output.stats != null ? de_ReportGroupTrendStats(output.stats, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetResourcePolicyOutput
 */
const de_GetResourcePolicyOutput = (output: any, context: __SerdeContext): GetResourcePolicyOutput => {
  return {
    policy: __expectString(output.policy),
  } as any;
};

/**
 * deserializeAws_json1_1GitSubmodulesConfig
 */
const de_GitSubmodulesConfig = (output: any, context: __SerdeContext): GitSubmodulesConfig => {
  return {
    fetchSubmodules: __expectBoolean(output.fetchSubmodules),
  } as any;
};

/**
 * deserializeAws_json1_1Identifiers
 */
const de_Identifiers = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImageVersions
 */
const de_ImageVersions = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImportSourceCredentialsOutput
 */
const de_ImportSourceCredentialsOutput = (output: any, context: __SerdeContext): ImportSourceCredentialsOutput => {
  return {
    arn: __expectString(output.arn),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidateProjectCacheOutput
 */
const de_InvalidateProjectCacheOutput = (output: any, context: __SerdeContext): InvalidateProjectCacheOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1InvalidInputException
 */
const de_InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListBuildBatchesForProjectOutput
 */
const de_ListBuildBatchesForProjectOutput = (
  output: any,
  context: __SerdeContext
): ListBuildBatchesForProjectOutput => {
  return {
    ids: output.ids != null ? de_BuildBatchIds(output.ids, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListBuildBatchesOutput
 */
const de_ListBuildBatchesOutput = (output: any, context: __SerdeContext): ListBuildBatchesOutput => {
  return {
    ids: output.ids != null ? de_BuildBatchIds(output.ids, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListBuildsForProjectOutput
 */
const de_ListBuildsForProjectOutput = (output: any, context: __SerdeContext): ListBuildsForProjectOutput => {
  return {
    ids: output.ids != null ? de_BuildIds(output.ids, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListBuildsOutput
 */
const de_ListBuildsOutput = (output: any, context: __SerdeContext): ListBuildsOutput => {
  return {
    ids: output.ids != null ? de_BuildIds(output.ids, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListCuratedEnvironmentImagesOutput
 */
const de_ListCuratedEnvironmentImagesOutput = (
  output: any,
  context: __SerdeContext
): ListCuratedEnvironmentImagesOutput => {
  return {
    platforms: output.platforms != null ? de_EnvironmentPlatforms(output.platforms, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListProjectsOutput
 */
const de_ListProjectsOutput = (output: any, context: __SerdeContext): ListProjectsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    projects: output.projects != null ? de_ProjectNames(output.projects, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListReportGroupsOutput
 */
const de_ListReportGroupsOutput = (output: any, context: __SerdeContext): ListReportGroupsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    reportGroups: output.reportGroups != null ? de_ReportGroupArns(output.reportGroups, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListReportsForReportGroupOutput
 */
const de_ListReportsForReportGroupOutput = (output: any, context: __SerdeContext): ListReportsForReportGroupOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    reports: output.reports != null ? de_ReportArns(output.reports, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListReportsOutput
 */
const de_ListReportsOutput = (output: any, context: __SerdeContext): ListReportsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    reports: output.reports != null ? de_ReportArns(output.reports, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListSharedProjectsOutput
 */
const de_ListSharedProjectsOutput = (output: any, context: __SerdeContext): ListSharedProjectsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    projects: output.projects != null ? de_ProjectArns(output.projects, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListSharedReportGroupsOutput
 */
const de_ListSharedReportGroupsOutput = (output: any, context: __SerdeContext): ListSharedReportGroupsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    reportGroups: output.reportGroups != null ? de_ReportGroupArns(output.reportGroups, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListSourceCredentialsOutput
 */
const de_ListSourceCredentialsOutput = (output: any, context: __SerdeContext): ListSourceCredentialsOutput => {
  return {
    sourceCredentialsInfos:
      output.sourceCredentialsInfos != null
        ? de_SourceCredentialsInfos(output.sourceCredentialsInfos, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LogsConfig
 */
const de_LogsConfig = (output: any, context: __SerdeContext): LogsConfig => {
  return {
    cloudWatchLogs: output.cloudWatchLogs != null ? de_CloudWatchLogsConfig(output.cloudWatchLogs, context) : undefined,
    s3Logs: output.s3Logs != null ? de_S3LogsConfig(output.s3Logs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LogsLocation
 */
const de_LogsLocation = (output: any, context: __SerdeContext): LogsLocation => {
  return {
    cloudWatchLogs: output.cloudWatchLogs != null ? de_CloudWatchLogsConfig(output.cloudWatchLogs, context) : undefined,
    cloudWatchLogsArn: __expectString(output.cloudWatchLogsArn),
    deepLink: __expectString(output.deepLink),
    groupName: __expectString(output.groupName),
    s3DeepLink: __expectString(output.s3DeepLink),
    s3Logs: output.s3Logs != null ? de_S3LogsConfig(output.s3Logs, context) : undefined,
    s3LogsArn: __expectString(output.s3LogsArn),
    streamName: __expectString(output.streamName),
  } as any;
};

/**
 * deserializeAws_json1_1NetworkInterface
 */
const de_NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return {
    networkInterfaceId: __expectString(output.networkInterfaceId),
    subnetId: __expectString(output.subnetId),
  } as any;
};

/**
 * deserializeAws_json1_1OAuthProviderException
 */
const de_OAuthProviderException = (output: any, context: __SerdeContext): OAuthProviderException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PhaseContext
 */
const de_PhaseContext = (output: any, context: __SerdeContext): PhaseContext => {
  return {
    message: __expectString(output.message),
    statusCode: __expectString(output.statusCode),
  } as any;
};

/**
 * deserializeAws_json1_1PhaseContexts
 */
const de_PhaseContexts = (output: any, context: __SerdeContext): PhaseContext[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PhaseContext(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Project
 */
const de_Project = (output: any, context: __SerdeContext): Project => {
  return {
    arn: __expectString(output.arn),
    artifacts: output.artifacts != null ? de_ProjectArtifacts(output.artifacts, context) : undefined,
    badge: output.badge != null ? de_ProjectBadge(output.badge, context) : undefined,
    buildBatchConfig:
      output.buildBatchConfig != null ? de_ProjectBuildBatchConfig(output.buildBatchConfig, context) : undefined,
    cache: output.cache != null ? de_ProjectCache(output.cache, context) : undefined,
    concurrentBuildLimit: __expectInt32(output.concurrentBuildLimit),
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    description: __expectString(output.description),
    encryptionKey: __expectString(output.encryptionKey),
    environment: output.environment != null ? de_ProjectEnvironment(output.environment, context) : undefined,
    fileSystemLocations:
      output.fileSystemLocations != null
        ? de_ProjectFileSystemLocations(output.fileSystemLocations, context)
        : undefined,
    lastModified:
      output.lastModified != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModified)))
        : undefined,
    logsConfig: output.logsConfig != null ? de_LogsConfig(output.logsConfig, context) : undefined,
    name: __expectString(output.name),
    projectVisibility: __expectString(output.projectVisibility),
    publicProjectAlias: __expectString(output.publicProjectAlias),
    queuedTimeoutInMinutes: __expectInt32(output.queuedTimeoutInMinutes),
    resourceAccessRole: __expectString(output.resourceAccessRole),
    secondaryArtifacts:
      output.secondaryArtifacts != null ? de_ProjectArtifactsList(output.secondaryArtifacts, context) : undefined,
    secondarySourceVersions:
      output.secondarySourceVersions != null
        ? de_ProjectSecondarySourceVersions(output.secondarySourceVersions, context)
        : undefined,
    secondarySources: output.secondarySources != null ? de_ProjectSources(output.secondarySources, context) : undefined,
    serviceRole: __expectString(output.serviceRole),
    source: output.source != null ? de_ProjectSource(output.source, context) : undefined,
    sourceVersion: __expectString(output.sourceVersion),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
    timeoutInMinutes: __expectInt32(output.timeoutInMinutes),
    vpcConfig: output.vpcConfig != null ? de_VpcConfig(output.vpcConfig, context) : undefined,
    webhook: output.webhook != null ? de_Webhook(output.webhook, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ProjectArns
 */
const de_ProjectArns = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProjectArtifacts
 */
const de_ProjectArtifacts = (output: any, context: __SerdeContext): ProjectArtifacts => {
  return {
    artifactIdentifier: __expectString(output.artifactIdentifier),
    bucketOwnerAccess: __expectString(output.bucketOwnerAccess),
    encryptionDisabled: __expectBoolean(output.encryptionDisabled),
    location: __expectString(output.location),
    name: __expectString(output.name),
    namespaceType: __expectString(output.namespaceType),
    overrideArtifactName: __expectBoolean(output.overrideArtifactName),
    packaging: __expectString(output.packaging),
    path: __expectString(output.path),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1ProjectArtifactsList
 */
const de_ProjectArtifactsList = (output: any, context: __SerdeContext): ProjectArtifacts[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProjectArtifacts(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProjectBadge
 */
const de_ProjectBadge = (output: any, context: __SerdeContext): ProjectBadge => {
  return {
    badgeEnabled: __expectBoolean(output.badgeEnabled),
    badgeRequestUrl: __expectString(output.badgeRequestUrl),
  } as any;
};

/**
 * deserializeAws_json1_1ProjectBuildBatchConfig
 */
const de_ProjectBuildBatchConfig = (output: any, context: __SerdeContext): ProjectBuildBatchConfig => {
  return {
    batchReportMode: __expectString(output.batchReportMode),
    combineArtifacts: __expectBoolean(output.combineArtifacts),
    restrictions: output.restrictions != null ? de_BatchRestrictions(output.restrictions, context) : undefined,
    serviceRole: __expectString(output.serviceRole),
    timeoutInMins: __expectInt32(output.timeoutInMins),
  } as any;
};

/**
 * deserializeAws_json1_1ProjectCache
 */
const de_ProjectCache = (output: any, context: __SerdeContext): ProjectCache => {
  return {
    location: __expectString(output.location),
    modes: output.modes != null ? de_ProjectCacheModes(output.modes, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1ProjectCacheModes
 */
const de_ProjectCacheModes = (output: any, context: __SerdeContext): (CacheMode | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProjectEnvironment
 */
const de_ProjectEnvironment = (output: any, context: __SerdeContext): ProjectEnvironment => {
  return {
    certificate: __expectString(output.certificate),
    computeType: __expectString(output.computeType),
    environmentVariables:
      output.environmentVariables != null ? de_EnvironmentVariables(output.environmentVariables, context) : undefined,
    image: __expectString(output.image),
    imagePullCredentialsType: __expectString(output.imagePullCredentialsType),
    privilegedMode: __expectBoolean(output.privilegedMode),
    registryCredential:
      output.registryCredential != null ? de_RegistryCredential(output.registryCredential, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1ProjectFileSystemLocation
 */
const de_ProjectFileSystemLocation = (output: any, context: __SerdeContext): ProjectFileSystemLocation => {
  return {
    identifier: __expectString(output.identifier),
    location: __expectString(output.location),
    mountOptions: __expectString(output.mountOptions),
    mountPoint: __expectString(output.mountPoint),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1ProjectFileSystemLocations
 */
const de_ProjectFileSystemLocations = (output: any, context: __SerdeContext): ProjectFileSystemLocation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProjectFileSystemLocation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProjectNames
 */
const de_ProjectNames = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Projects
 */
const de_Projects = (output: any, context: __SerdeContext): Project[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Project(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProjectSecondarySourceVersions
 */
const de_ProjectSecondarySourceVersions = (output: any, context: __SerdeContext): ProjectSourceVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProjectSourceVersion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProjectSource
 */
const de_ProjectSource = (output: any, context: __SerdeContext): ProjectSource => {
  return {
    auth: output.auth != null ? de_SourceAuth(output.auth, context) : undefined,
    buildStatusConfig:
      output.buildStatusConfig != null ? de_BuildStatusConfig(output.buildStatusConfig, context) : undefined,
    buildspec: __expectString(output.buildspec),
    gitCloneDepth: __expectInt32(output.gitCloneDepth),
    gitSubmodulesConfig:
      output.gitSubmodulesConfig != null ? de_GitSubmodulesConfig(output.gitSubmodulesConfig, context) : undefined,
    insecureSsl: __expectBoolean(output.insecureSsl),
    location: __expectString(output.location),
    reportBuildStatus: __expectBoolean(output.reportBuildStatus),
    sourceIdentifier: __expectString(output.sourceIdentifier),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1ProjectSources
 */
const de_ProjectSources = (output: any, context: __SerdeContext): ProjectSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProjectSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProjectSourceVersion
 */
const de_ProjectSourceVersion = (output: any, context: __SerdeContext): ProjectSourceVersion => {
  return {
    sourceIdentifier: __expectString(output.sourceIdentifier),
    sourceVersion: __expectString(output.sourceVersion),
  } as any;
};

/**
 * deserializeAws_json1_1PutResourcePolicyOutput
 */
const de_PutResourcePolicyOutput = (output: any, context: __SerdeContext): PutResourcePolicyOutput => {
  return {
    resourceArn: __expectString(output.resourceArn),
  } as any;
};

/**
 * deserializeAws_json1_1RegistryCredential
 */
const de_RegistryCredential = (output: any, context: __SerdeContext): RegistryCredential => {
  return {
    credential: __expectString(output.credential),
    credentialProvider: __expectString(output.credentialProvider),
  } as any;
};

/**
 * deserializeAws_json1_1Report
 */
const de_Report = (output: any, context: __SerdeContext): Report => {
  return {
    arn: __expectString(output.arn),
    codeCoverageSummary:
      output.codeCoverageSummary != null
        ? de_CodeCoverageReportSummary(output.codeCoverageSummary, context)
        : undefined,
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    executionId: __expectString(output.executionId),
    expired:
      output.expired != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.expired))) : undefined,
    exportConfig: output.exportConfig != null ? de_ReportExportConfig(output.exportConfig, context) : undefined,
    name: __expectString(output.name),
    reportGroupArn: __expectString(output.reportGroupArn),
    status: __expectString(output.status),
    testSummary: output.testSummary != null ? de_TestReportSummary(output.testSummary, context) : undefined,
    truncated: __expectBoolean(output.truncated),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1ReportArns
 */
const de_ReportArns = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReportExportConfig
 */
const de_ReportExportConfig = (output: any, context: __SerdeContext): ReportExportConfig => {
  return {
    exportConfigType: __expectString(output.exportConfigType),
    s3Destination: output.s3Destination != null ? de_S3ReportExportConfig(output.s3Destination, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ReportGroup
 */
const de_ReportGroup = (output: any, context: __SerdeContext): ReportGroup => {
  return {
    arn: __expectString(output.arn),
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    exportConfig: output.exportConfig != null ? de_ReportExportConfig(output.exportConfig, context) : undefined,
    lastModified:
      output.lastModified != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModified)))
        : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1ReportGroupArns
 */
const de_ReportGroupArns = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReportGroups
 */
const de_ReportGroups = (output: any, context: __SerdeContext): ReportGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReportGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReportGroupTrendRawDataList
 */
const de_ReportGroupTrendRawDataList = (output: any, context: __SerdeContext): ReportWithRawData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReportWithRawData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReportGroupTrendStats
 */
const de_ReportGroupTrendStats = (output: any, context: __SerdeContext): ReportGroupTrendStats => {
  return {
    average: __expectString(output.average),
    max: __expectString(output.max),
    min: __expectString(output.min),
  } as any;
};

/**
 * deserializeAws_json1_1Reports
 */
const de_Reports = (output: any, context: __SerdeContext): Report[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Report(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReportStatusCounts
 */
const de_ReportStatusCounts = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ReportWithRawData
 */
const de_ReportWithRawData = (output: any, context: __SerdeContext): ReportWithRawData => {
  return {
    data: __expectString(output.data),
    reportArn: __expectString(output.reportArn),
  } as any;
};

/**
 * deserializeAws_json1_1ResolvedArtifact
 */
const de_ResolvedArtifact = (output: any, context: __SerdeContext): ResolvedArtifact => {
  return {
    identifier: __expectString(output.identifier),
    location: __expectString(output.location),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1ResolvedSecondaryArtifacts
 */
const de_ResolvedSecondaryArtifacts = (output: any, context: __SerdeContext): ResolvedArtifact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResolvedArtifact(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistsException
 */
const de_ResourceAlreadyExistsException = (output: any, context: __SerdeContext): ResourceAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RetryBuildBatchOutput
 */
const de_RetryBuildBatchOutput = (output: any, context: __SerdeContext): RetryBuildBatchOutput => {
  return {
    buildBatch: output.buildBatch != null ? de_BuildBatch(output.buildBatch, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RetryBuildOutput
 */
const de_RetryBuildOutput = (output: any, context: __SerdeContext): RetryBuildOutput => {
  return {
    build: output.build != null ? de_Build(output.build, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1S3LogsConfig
 */
const de_S3LogsConfig = (output: any, context: __SerdeContext): S3LogsConfig => {
  return {
    bucketOwnerAccess: __expectString(output.bucketOwnerAccess),
    encryptionDisabled: __expectBoolean(output.encryptionDisabled),
    location: __expectString(output.location),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1S3ReportExportConfig
 */
const de_S3ReportExportConfig = (output: any, context: __SerdeContext): S3ReportExportConfig => {
  return {
    bucket: __expectString(output.bucket),
    bucketOwner: __expectString(output.bucketOwner),
    encryptionDisabled: __expectBoolean(output.encryptionDisabled),
    encryptionKey: __expectString(output.encryptionKey),
    packaging: __expectString(output.packaging),
    path: __expectString(output.path),
  } as any;
};

/**
 * deserializeAws_json1_1SecurityGroupIds
 */
const de_SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SourceAuth
 */
const de_SourceAuth = (output: any, context: __SerdeContext): SourceAuth => {
  return {
    resource: __expectString(output.resource),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1SourceCredentialsInfo
 */
const de_SourceCredentialsInfo = (output: any, context: __SerdeContext): SourceCredentialsInfo => {
  return {
    arn: __expectString(output.arn),
    authType: __expectString(output.authType),
    serverType: __expectString(output.serverType),
  } as any;
};

/**
 * deserializeAws_json1_1SourceCredentialsInfos
 */
const de_SourceCredentialsInfos = (output: any, context: __SerdeContext): SourceCredentialsInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SourceCredentialsInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StartBuildBatchOutput
 */
const de_StartBuildBatchOutput = (output: any, context: __SerdeContext): StartBuildBatchOutput => {
  return {
    buildBatch: output.buildBatch != null ? de_BuildBatch(output.buildBatch, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StartBuildOutput
 */
const de_StartBuildOutput = (output: any, context: __SerdeContext): StartBuildOutput => {
  return {
    build: output.build != null ? de_Build(output.build, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StopBuildBatchOutput
 */
const de_StopBuildBatchOutput = (output: any, context: __SerdeContext): StopBuildBatchOutput => {
  return {
    buildBatch: output.buildBatch != null ? de_BuildBatch(output.buildBatch, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StopBuildOutput
 */
const de_StopBuildOutput = (output: any, context: __SerdeContext): StopBuildOutput => {
  return {
    build: output.build != null ? de_Build(output.build, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Subnets
 */
const de_Subnets = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TestCase
 */
const de_TestCase = (output: any, context: __SerdeContext): TestCase => {
  return {
    durationInNanoSeconds: __expectLong(output.durationInNanoSeconds),
    expired:
      output.expired != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.expired))) : undefined,
    message: __expectString(output.message),
    name: __expectString(output.name),
    prefix: __expectString(output.prefix),
    reportArn: __expectString(output.reportArn),
    status: __expectString(output.status),
    testRawDataPath: __expectString(output.testRawDataPath),
  } as any;
};

/**
 * deserializeAws_json1_1TestCases
 */
const de_TestCases = (output: any, context: __SerdeContext): TestCase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TestCase(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TestReportSummary
 */
const de_TestReportSummary = (output: any, context: __SerdeContext): TestReportSummary => {
  return {
    durationInNanoSeconds: __expectLong(output.durationInNanoSeconds),
    statusCounts: output.statusCounts != null ? de_ReportStatusCounts(output.statusCounts, context) : undefined,
    total: __expectInt32(output.total),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateProjectOutput
 */
const de_UpdateProjectOutput = (output: any, context: __SerdeContext): UpdateProjectOutput => {
  return {
    project: output.project != null ? de_Project(output.project, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateProjectVisibilityOutput
 */
const de_UpdateProjectVisibilityOutput = (output: any, context: __SerdeContext): UpdateProjectVisibilityOutput => {
  return {
    projectArn: __expectString(output.projectArn),
    projectVisibility: __expectString(output.projectVisibility),
    publicProjectAlias: __expectString(output.publicProjectAlias),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateReportGroupOutput
 */
const de_UpdateReportGroupOutput = (output: any, context: __SerdeContext): UpdateReportGroupOutput => {
  return {
    reportGroup: output.reportGroup != null ? de_ReportGroup(output.reportGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateWebhookOutput
 */
const de_UpdateWebhookOutput = (output: any, context: __SerdeContext): UpdateWebhookOutput => {
  return {
    webhook: output.webhook != null ? de_Webhook(output.webhook, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1VpcConfig
 */
const de_VpcConfig = (output: any, context: __SerdeContext): VpcConfig => {
  return {
    securityGroupIds:
      output.securityGroupIds != null ? de_SecurityGroupIds(output.securityGroupIds, context) : undefined,
    subnets: output.subnets != null ? de_Subnets(output.subnets, context) : undefined,
    vpcId: __expectString(output.vpcId),
  } as any;
};

/**
 * deserializeAws_json1_1Webhook
 */
const de_Webhook = (output: any, context: __SerdeContext): Webhook => {
  return {
    branchFilter: __expectString(output.branchFilter),
    buildType: __expectString(output.buildType),
    filterGroups: output.filterGroups != null ? de_FilterGroups(output.filterGroups, context) : undefined,
    lastModifiedSecret:
      output.lastModifiedSecret != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedSecret)))
        : undefined,
    payloadUrl: __expectString(output.payloadUrl),
    secret: __expectString(output.secret),
    url: __expectString(output.url),
  } as any;
};

/**
 * deserializeAws_json1_1WebhookFilter
 */
const de_WebhookFilter = (output: any, context: __SerdeContext): WebhookFilter => {
  return {
    excludeMatchedPattern: __expectBoolean(output.excludeMatchedPattern),
    pattern: __expectString(output.pattern),
    type: __expectString(output.type),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
