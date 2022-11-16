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

export const serializeAws_json1_1BatchDeleteBuildsCommand = async (
  input: BatchDeleteBuildsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.BatchDeleteBuilds",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchDeleteBuildsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetBuildBatchesCommand = async (
  input: BatchGetBuildBatchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.BatchGetBuildBatches",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetBuildBatchesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetBuildsCommand = async (
  input: BatchGetBuildsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.BatchGetBuilds",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetBuildsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetProjectsCommand = async (
  input: BatchGetProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.BatchGetProjects",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetProjectsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetReportGroupsCommand = async (
  input: BatchGetReportGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.BatchGetReportGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetReportGroupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetReportsCommand = async (
  input: BatchGetReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.BatchGetReports",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetReportsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.CreateProject",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateProjectInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateReportGroupCommand = async (
  input: CreateReportGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.CreateReportGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateReportGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateWebhookCommand = async (
  input: CreateWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.CreateWebhook",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateWebhookInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteBuildBatchCommand = async (
  input: DeleteBuildBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.DeleteBuildBatch",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteBuildBatchInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteProjectCommand = async (
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.DeleteProject",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteProjectInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteReportCommand = async (
  input: DeleteReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.DeleteReport",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteReportInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteReportGroupCommand = async (
  input: DeleteReportGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.DeleteReportGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteReportGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.DeleteResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteResourcePolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSourceCredentialsCommand = async (
  input: DeleteSourceCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.DeleteSourceCredentials",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSourceCredentialsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteWebhookCommand = async (
  input: DeleteWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.DeleteWebhook",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteWebhookInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCodeCoveragesCommand = async (
  input: DescribeCodeCoveragesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.DescribeCodeCoverages",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCodeCoveragesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTestCasesCommand = async (
  input: DescribeTestCasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.DescribeTestCases",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTestCasesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetReportGroupTrendCommand = async (
  input: GetReportGroupTrendCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.GetReportGroupTrend",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetReportGroupTrendInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.GetResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetResourcePolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportSourceCredentialsCommand = async (
  input: ImportSourceCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ImportSourceCredentials",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ImportSourceCredentialsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1InvalidateProjectCacheCommand = async (
  input: InvalidateProjectCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.InvalidateProjectCache",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1InvalidateProjectCacheInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListBuildBatchesCommand = async (
  input: ListBuildBatchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ListBuildBatches",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListBuildBatchesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListBuildBatchesForProjectCommand = async (
  input: ListBuildBatchesForProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ListBuildBatchesForProject",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListBuildBatchesForProjectInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListBuildsCommand = async (
  input: ListBuildsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ListBuilds",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListBuildsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListBuildsForProjectCommand = async (
  input: ListBuildsForProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ListBuildsForProject",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListBuildsForProjectInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCuratedEnvironmentImagesCommand = async (
  input: ListCuratedEnvironmentImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ListCuratedEnvironmentImages",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCuratedEnvironmentImagesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListProjectsCommand = async (
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ListProjects",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListProjectsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListReportGroupsCommand = async (
  input: ListReportGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ListReportGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListReportGroupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListReportsCommand = async (
  input: ListReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ListReports",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListReportsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListReportsForReportGroupCommand = async (
  input: ListReportsForReportGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ListReportsForReportGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListReportsForReportGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSharedProjectsCommand = async (
  input: ListSharedProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ListSharedProjects",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSharedProjectsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSharedReportGroupsCommand = async (
  input: ListSharedReportGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ListSharedReportGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSharedReportGroupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSourceCredentialsCommand = async (
  input: ListSourceCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.ListSourceCredentials",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSourceCredentialsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.PutResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutResourcePolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RetryBuildCommand = async (
  input: RetryBuildCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.RetryBuild",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RetryBuildInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RetryBuildBatchCommand = async (
  input: RetryBuildBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.RetryBuildBatch",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RetryBuildBatchInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartBuildCommand = async (
  input: StartBuildCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.StartBuild",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartBuildInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartBuildBatchCommand = async (
  input: StartBuildBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.StartBuildBatch",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartBuildBatchInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopBuildCommand = async (
  input: StopBuildCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.StopBuild",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopBuildInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopBuildBatchCommand = async (
  input: StopBuildBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.StopBuildBatch",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopBuildBatchInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateProjectCommand = async (
  input: UpdateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.UpdateProject",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateProjectInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateProjectVisibilityCommand = async (
  input: UpdateProjectVisibilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.UpdateProjectVisibility",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateProjectVisibilityInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateReportGroupCommand = async (
  input: UpdateReportGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.UpdateReportGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateReportGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateWebhookCommand = async (
  input: UpdateWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeBuild_20161006.UpdateWebhook",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateWebhookInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1BatchDeleteBuildsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteBuildsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchDeleteBuildsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDeleteBuildsOutput(data, context);
  const response: BatchDeleteBuildsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchDeleteBuildsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1BatchGetBuildBatchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetBuildBatchesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetBuildBatchesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetBuildBatchesOutput(data, context);
  const response: BatchGetBuildBatchesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetBuildBatchesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1BatchGetBuildsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetBuildsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetBuildsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetBuildsOutput(data, context);
  const response: BatchGetBuildsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetBuildsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1BatchGetProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetProjectsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetProjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetProjectsOutput(data, context);
  const response: BatchGetProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetProjectsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1BatchGetReportGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetReportGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetReportGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetReportGroupsOutput(data, context);
  const response: BatchGetReportGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetReportGroupsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1BatchGetReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetReportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetReportsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetReportsOutput(data, context);
  const response: BatchGetReportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetReportsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateProjectOutput(data, context);
  const response: CreateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateProjectCommandError = async (
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
      throw await deserializeAws_json1_1AccountLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.codebuild#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateReportGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReportGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateReportGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateReportGroupOutput(data, context);
  const response: CreateReportGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateReportGroupCommandError = async (
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
      throw await deserializeAws_json1_1AccountLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.codebuild#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebhookCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateWebhookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateWebhookOutput(data, context);
  const response: CreateWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateWebhookCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OAuthProviderException":
    case "com.amazonaws.codebuild#OAuthProviderException":
      throw await deserializeAws_json1_1OAuthProviderExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.codebuild#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteBuildBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBuildBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteBuildBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBuildBatchOutput(data, context);
  const response: DeleteBuildBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteBuildBatchCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteProjectOutput(data, context);
  const response: DeleteProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteProjectCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteReportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteReportOutput(data, context);
  const response: DeleteReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteReportCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteReportGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReportGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteReportGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteReportGroupOutput(data, context);
  const response: DeleteReportGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteReportGroupCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteResourcePolicyOutput(data, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteResourcePolicyCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteSourceCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSourceCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSourceCredentialsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSourceCredentialsOutput(data, context);
  const response: DeleteSourceCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSourceCredentialsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebhookCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteWebhookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteWebhookOutput(data, context);
  const response: DeleteWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteWebhookCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OAuthProviderException":
    case "com.amazonaws.codebuild#OAuthProviderException":
      throw await deserializeAws_json1_1OAuthProviderExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeCodeCoveragesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCodeCoveragesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCodeCoveragesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCodeCoveragesOutput(data, context);
  const response: DescribeCodeCoveragesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCodeCoveragesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeTestCasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTestCasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTestCasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTestCasesOutput(data, context);
  const response: DescribeTestCasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTestCasesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetReportGroupTrendCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReportGroupTrendCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetReportGroupTrendCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetReportGroupTrendOutput(data, context);
  const response: GetReportGroupTrendCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetReportGroupTrendCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetResourcePolicyOutput(data, context);
  const response: GetResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetResourcePolicyCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ImportSourceCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportSourceCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ImportSourceCredentialsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportSourceCredentialsOutput(data, context);
  const response: ImportSourceCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportSourceCredentialsCommandError = async (
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
      throw await deserializeAws_json1_1AccountLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.codebuild#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1InvalidateProjectCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvalidateProjectCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1InvalidateProjectCacheCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1InvalidateProjectCacheOutput(data, context);
  const response: InvalidateProjectCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1InvalidateProjectCacheCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListBuildBatchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuildBatchesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListBuildBatchesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListBuildBatchesOutput(data, context);
  const response: ListBuildBatchesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListBuildBatchesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListBuildBatchesForProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuildBatchesForProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListBuildBatchesForProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListBuildBatchesForProjectOutput(data, context);
  const response: ListBuildBatchesForProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListBuildBatchesForProjectCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListBuildsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuildsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListBuildsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListBuildsOutput(data, context);
  const response: ListBuildsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListBuildsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListBuildsForProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuildsForProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListBuildsForProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListBuildsForProjectOutput(data, context);
  const response: ListBuildsForProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListBuildsForProjectCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListCuratedEnvironmentImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCuratedEnvironmentImagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCuratedEnvironmentImagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCuratedEnvironmentImagesOutput(data, context);
  const response: ListCuratedEnvironmentImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCuratedEnvironmentImagesCommandError = async (
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

export const deserializeAws_json1_1ListProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListProjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListProjectsOutput(data, context);
  const response: ListProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListProjectsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListReportGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListReportGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListReportGroupsOutput(data, context);
  const response: ListReportGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListReportGroupsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListReportsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListReportsOutput(data, context);
  const response: ListReportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListReportsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListReportsForReportGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportsForReportGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListReportsForReportGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListReportsForReportGroupOutput(data, context);
  const response: ListReportsForReportGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListReportsForReportGroupCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListSharedProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSharedProjectsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSharedProjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSharedProjectsOutput(data, context);
  const response: ListSharedProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSharedProjectsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListSharedReportGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSharedReportGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSharedReportGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSharedReportGroupsOutput(data, context);
  const response: ListSharedReportGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSharedReportGroupsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListSourceCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSourceCredentialsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSourceCredentialsOutput(data, context);
  const response: ListSourceCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSourceCredentialsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutResourcePolicyOutput(data, context);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutResourcePolicyCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RetryBuildCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryBuildCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RetryBuildCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RetryBuildOutput(data, context);
  const response: RetryBuildCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RetryBuildCommandError = async (
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
      throw await deserializeAws_json1_1AccountLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RetryBuildBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryBuildBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RetryBuildBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RetryBuildBatchOutput(data, context);
  const response: RetryBuildBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RetryBuildBatchCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartBuildCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBuildCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartBuildCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartBuildOutput(data, context);
  const response: StartBuildCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartBuildCommandError = async (
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
      throw await deserializeAws_json1_1AccountLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartBuildBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBuildBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartBuildBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartBuildBatchOutput(data, context);
  const response: StartBuildBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartBuildBatchCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopBuildCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBuildCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopBuildCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopBuildOutput(data, context);
  const response: StopBuildCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopBuildCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopBuildBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBuildBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopBuildBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopBuildBatchOutput(data, context);
  const response: StopBuildBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopBuildBatchCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateProjectOutput(data, context);
  const response: UpdateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateProjectCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateProjectVisibilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectVisibilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateProjectVisibilityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateProjectVisibilityOutput(data, context);
  const response: UpdateProjectVisibilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateProjectVisibilityCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateReportGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReportGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateReportGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateReportGroupOutput(data, context);
  const response: UpdateReportGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateReportGroupCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWebhookCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateWebhookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateWebhookOutput(data, context);
  const response: UpdateWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateWebhookCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OAuthProviderException":
    case "com.amazonaws.codebuild#OAuthProviderException":
      throw await deserializeAws_json1_1OAuthProviderExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1AccountLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccountLimitExceededException(body, context);
  const exception = new AccountLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(body, context);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OAuthProviderExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OAuthProviderException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OAuthProviderException(body, context);
  const exception = new OAuthProviderException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1BatchDeleteBuildsInput = (input: BatchDeleteBuildsInput, context: __SerdeContext): any => {
  return {
    ...(input.ids != null && { ids: serializeAws_json1_1BuildIds(input.ids, context) }),
  };
};

const serializeAws_json1_1BatchGetBuildBatchesInput = (
  input: BatchGetBuildBatchesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ids != null && { ids: serializeAws_json1_1BuildBatchIds(input.ids, context) }),
  };
};

const serializeAws_json1_1BatchGetBuildsInput = (input: BatchGetBuildsInput, context: __SerdeContext): any => {
  return {
    ...(input.ids != null && { ids: serializeAws_json1_1BuildIds(input.ids, context) }),
  };
};

const serializeAws_json1_1BatchGetProjectsInput = (input: BatchGetProjectsInput, context: __SerdeContext): any => {
  return {
    ...(input.names != null && { names: serializeAws_json1_1ProjectNames(input.names, context) }),
  };
};

const serializeAws_json1_1BatchGetReportGroupsInput = (
  input: BatchGetReportGroupsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.reportGroupArns != null && {
      reportGroupArns: serializeAws_json1_1ReportGroupArns(input.reportGroupArns, context),
    }),
  };
};

const serializeAws_json1_1BatchGetReportsInput = (input: BatchGetReportsInput, context: __SerdeContext): any => {
  return {
    ...(input.reportArns != null && { reportArns: serializeAws_json1_1ReportArns(input.reportArns, context) }),
  };
};

const serializeAws_json1_1BatchRestrictions = (input: BatchRestrictions, context: __SerdeContext): any => {
  return {
    ...(input.computeTypesAllowed != null && {
      computeTypesAllowed: serializeAws_json1_1ComputeTypesAllowed(input.computeTypesAllowed, context),
    }),
    ...(input.maximumBuildsAllowed != null && { maximumBuildsAllowed: input.maximumBuildsAllowed }),
  };
};

const serializeAws_json1_1BuildBatchFilter = (input: BuildBatchFilter, context: __SerdeContext): any => {
  return {
    ...(input.status != null && { status: input.status }),
  };
};

const serializeAws_json1_1BuildBatchIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1BuildIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1BuildStatusConfig = (input: BuildStatusConfig, context: __SerdeContext): any => {
  return {
    ...(input.context != null && { context: input.context }),
    ...(input.targetUrl != null && { targetUrl: input.targetUrl }),
  };
};

const serializeAws_json1_1CloudWatchLogsConfig = (input: CloudWatchLogsConfig, context: __SerdeContext): any => {
  return {
    ...(input.groupName != null && { groupName: input.groupName }),
    ...(input.status != null && { status: input.status }),
    ...(input.streamName != null && { streamName: input.streamName }),
  };
};

const serializeAws_json1_1ComputeTypesAllowed = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1CreateProjectInput = (input: CreateProjectInput, context: __SerdeContext): any => {
  return {
    ...(input.artifacts != null && { artifacts: serializeAws_json1_1ProjectArtifacts(input.artifacts, context) }),
    ...(input.badgeEnabled != null && { badgeEnabled: input.badgeEnabled }),
    ...(input.buildBatchConfig != null && {
      buildBatchConfig: serializeAws_json1_1ProjectBuildBatchConfig(input.buildBatchConfig, context),
    }),
    ...(input.cache != null && { cache: serializeAws_json1_1ProjectCache(input.cache, context) }),
    ...(input.concurrentBuildLimit != null && { concurrentBuildLimit: input.concurrentBuildLimit }),
    ...(input.description != null && { description: input.description }),
    ...(input.encryptionKey != null && { encryptionKey: input.encryptionKey }),
    ...(input.environment != null && {
      environment: serializeAws_json1_1ProjectEnvironment(input.environment, context),
    }),
    ...(input.fileSystemLocations != null && {
      fileSystemLocations: serializeAws_json1_1ProjectFileSystemLocations(input.fileSystemLocations, context),
    }),
    ...(input.logsConfig != null && { logsConfig: serializeAws_json1_1LogsConfig(input.logsConfig, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.queuedTimeoutInMinutes != null && { queuedTimeoutInMinutes: input.queuedTimeoutInMinutes }),
    ...(input.secondaryArtifacts != null && {
      secondaryArtifacts: serializeAws_json1_1ProjectArtifactsList(input.secondaryArtifacts, context),
    }),
    ...(input.secondarySourceVersions != null && {
      secondarySourceVersions: serializeAws_json1_1ProjectSecondarySourceVersions(
        input.secondarySourceVersions,
        context
      ),
    }),
    ...(input.secondarySources != null && {
      secondarySources: serializeAws_json1_1ProjectSources(input.secondarySources, context),
    }),
    ...(input.serviceRole != null && { serviceRole: input.serviceRole }),
    ...(input.source != null && { source: serializeAws_json1_1ProjectSource(input.source, context) }),
    ...(input.sourceVersion != null && { sourceVersion: input.sourceVersion }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    ...(input.timeoutInMinutes != null && { timeoutInMinutes: input.timeoutInMinutes }),
    ...(input.vpcConfig != null && { vpcConfig: serializeAws_json1_1VpcConfig(input.vpcConfig, context) }),
  };
};

const serializeAws_json1_1CreateReportGroupInput = (input: CreateReportGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.exportConfig != null && {
      exportConfig: serializeAws_json1_1ReportExportConfig(input.exportConfig, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_1CreateWebhookInput = (input: CreateWebhookInput, context: __SerdeContext): any => {
  return {
    ...(input.branchFilter != null && { branchFilter: input.branchFilter }),
    ...(input.buildType != null && { buildType: input.buildType }),
    ...(input.filterGroups != null && { filterGroups: serializeAws_json1_1FilterGroups(input.filterGroups, context) }),
    ...(input.projectName != null && { projectName: input.projectName }),
  };
};

const serializeAws_json1_1DeleteBuildBatchInput = (input: DeleteBuildBatchInput, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

const serializeAws_json1_1DeleteProjectInput = (input: DeleteProjectInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_1DeleteReportGroupInput = (input: DeleteReportGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.deleteReports != null && { deleteReports: input.deleteReports }),
  };
};

const serializeAws_json1_1DeleteReportInput = (input: DeleteReportInput, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

const serializeAws_json1_1DeleteResourcePolicyInput = (
  input: DeleteResourcePolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_json1_1DeleteSourceCredentialsInput = (
  input: DeleteSourceCredentialsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

const serializeAws_json1_1DeleteWebhookInput = (input: DeleteWebhookInput, context: __SerdeContext): any => {
  return {
    ...(input.projectName != null && { projectName: input.projectName }),
  };
};

const serializeAws_json1_1DescribeCodeCoveragesInput = (
  input: DescribeCodeCoveragesInput,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_1DescribeTestCasesInput = (input: DescribeTestCasesInput, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: serializeAws_json1_1TestCaseFilter(input.filter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.reportArn != null && { reportArn: input.reportArn }),
  };
};

const serializeAws_json1_1EnvironmentVariable = (input: EnvironmentVariable, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.type != null && { type: input.type }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_json1_1EnvironmentVariables = (input: EnvironmentVariable[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1EnvironmentVariable(entry, context);
    });
};

const serializeAws_json1_1FilterGroup = (input: WebhookFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1WebhookFilter(entry, context);
    });
};

const serializeAws_json1_1FilterGroups = (input: WebhookFilter[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1FilterGroup(entry, context);
    });
};

const serializeAws_json1_1GetReportGroupTrendInput = (
  input: GetReportGroupTrendInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.numOfReports != null && { numOfReports: input.numOfReports }),
    ...(input.reportGroupArn != null && { reportGroupArn: input.reportGroupArn }),
    ...(input.trendField != null && { trendField: input.trendField }),
  };
};

const serializeAws_json1_1GetResourcePolicyInput = (input: GetResourcePolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_json1_1GitSubmodulesConfig = (input: GitSubmodulesConfig, context: __SerdeContext): any => {
  return {
    ...(input.fetchSubmodules != null && { fetchSubmodules: input.fetchSubmodules }),
  };
};

const serializeAws_json1_1ImportSourceCredentialsInput = (
  input: ImportSourceCredentialsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.authType != null && { authType: input.authType }),
    ...(input.serverType != null && { serverType: input.serverType }),
    ...(input.shouldOverwrite != null && { shouldOverwrite: input.shouldOverwrite }),
    ...(input.token != null && { token: input.token }),
    ...(input.username != null && { username: input.username }),
  };
};

const serializeAws_json1_1InvalidateProjectCacheInput = (
  input: InvalidateProjectCacheInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.projectName != null && { projectName: input.projectName }),
  };
};

const serializeAws_json1_1ListBuildBatchesForProjectInput = (
  input: ListBuildBatchesForProjectInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.filter != null && { filter: serializeAws_json1_1BuildBatchFilter(input.filter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.projectName != null && { projectName: input.projectName }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_json1_1ListBuildBatchesInput = (input: ListBuildBatchesInput, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: serializeAws_json1_1BuildBatchFilter(input.filter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_json1_1ListBuildsForProjectInput = (
  input: ListBuildsForProjectInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.projectName != null && { projectName: input.projectName }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_json1_1ListBuildsInput = (input: ListBuildsInput, context: __SerdeContext): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_json1_1ListCuratedEnvironmentImagesInput = (
  input: ListCuratedEnvironmentImagesInput,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1ListProjectsInput = (input: ListProjectsInput, context: __SerdeContext): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_json1_1ListReportGroupsInput = (input: ListReportGroupsInput, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_json1_1ListReportsForReportGroupInput = (
  input: ListReportsForReportGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.filter != null && { filter: serializeAws_json1_1ReportFilter(input.filter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.reportGroupArn != null && { reportGroupArn: input.reportGroupArn }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_json1_1ListReportsInput = (input: ListReportsInput, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: serializeAws_json1_1ReportFilter(input.filter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_json1_1ListSharedProjectsInput = (input: ListSharedProjectsInput, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_json1_1ListSharedReportGroupsInput = (
  input: ListSharedReportGroupsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_json1_1ListSourceCredentialsInput = (
  input: ListSourceCredentialsInput,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1LogsConfig = (input: LogsConfig, context: __SerdeContext): any => {
  return {
    ...(input.cloudWatchLogs != null && {
      cloudWatchLogs: serializeAws_json1_1CloudWatchLogsConfig(input.cloudWatchLogs, context),
    }),
    ...(input.s3Logs != null && { s3Logs: serializeAws_json1_1S3LogsConfig(input.s3Logs, context) }),
  };
};

const serializeAws_json1_1ProjectArtifacts = (input: ProjectArtifacts, context: __SerdeContext): any => {
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

const serializeAws_json1_1ProjectArtifactsList = (input: ProjectArtifacts[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ProjectArtifacts(entry, context);
    });
};

const serializeAws_json1_1ProjectBuildBatchConfig = (input: ProjectBuildBatchConfig, context: __SerdeContext): any => {
  return {
    ...(input.batchReportMode != null && { batchReportMode: input.batchReportMode }),
    ...(input.combineArtifacts != null && { combineArtifacts: input.combineArtifacts }),
    ...(input.restrictions != null && {
      restrictions: serializeAws_json1_1BatchRestrictions(input.restrictions, context),
    }),
    ...(input.serviceRole != null && { serviceRole: input.serviceRole }),
    ...(input.timeoutInMins != null && { timeoutInMins: input.timeoutInMins }),
  };
};

const serializeAws_json1_1ProjectCache = (input: ProjectCache, context: __SerdeContext): any => {
  return {
    ...(input.location != null && { location: input.location }),
    ...(input.modes != null && { modes: serializeAws_json1_1ProjectCacheModes(input.modes, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_1ProjectCacheModes = (input: (CacheMode | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ProjectEnvironment = (input: ProjectEnvironment, context: __SerdeContext): any => {
  return {
    ...(input.certificate != null && { certificate: input.certificate }),
    ...(input.computeType != null && { computeType: input.computeType }),
    ...(input.environmentVariables != null && {
      environmentVariables: serializeAws_json1_1EnvironmentVariables(input.environmentVariables, context),
    }),
    ...(input.image != null && { image: input.image }),
    ...(input.imagePullCredentialsType != null && { imagePullCredentialsType: input.imagePullCredentialsType }),
    ...(input.privilegedMode != null && { privilegedMode: input.privilegedMode }),
    ...(input.registryCredential != null && {
      registryCredential: serializeAws_json1_1RegistryCredential(input.registryCredential, context),
    }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_1ProjectFileSystemLocation = (
  input: ProjectFileSystemLocation,
  context: __SerdeContext
): any => {
  return {
    ...(input.identifier != null && { identifier: input.identifier }),
    ...(input.location != null && { location: input.location }),
    ...(input.mountOptions != null && { mountOptions: input.mountOptions }),
    ...(input.mountPoint != null && { mountPoint: input.mountPoint }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_1ProjectFileSystemLocations = (
  input: ProjectFileSystemLocation[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ProjectFileSystemLocation(entry, context);
    });
};

const serializeAws_json1_1ProjectNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ProjectSecondarySourceVersions = (
  input: ProjectSourceVersion[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ProjectSourceVersion(entry, context);
    });
};

const serializeAws_json1_1ProjectSource = (input: ProjectSource, context: __SerdeContext): any => {
  return {
    ...(input.auth != null && { auth: serializeAws_json1_1SourceAuth(input.auth, context) }),
    ...(input.buildStatusConfig != null && {
      buildStatusConfig: serializeAws_json1_1BuildStatusConfig(input.buildStatusConfig, context),
    }),
    ...(input.buildspec != null && { buildspec: input.buildspec }),
    ...(input.gitCloneDepth != null && { gitCloneDepth: input.gitCloneDepth }),
    ...(input.gitSubmodulesConfig != null && {
      gitSubmodulesConfig: serializeAws_json1_1GitSubmodulesConfig(input.gitSubmodulesConfig, context),
    }),
    ...(input.insecureSsl != null && { insecureSsl: input.insecureSsl }),
    ...(input.location != null && { location: input.location }),
    ...(input.reportBuildStatus != null && { reportBuildStatus: input.reportBuildStatus }),
    ...(input.sourceIdentifier != null && { sourceIdentifier: input.sourceIdentifier }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_1ProjectSources = (input: ProjectSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ProjectSource(entry, context);
    });
};

const serializeAws_json1_1ProjectSourceVersion = (input: ProjectSourceVersion, context: __SerdeContext): any => {
  return {
    ...(input.sourceIdentifier != null && { sourceIdentifier: input.sourceIdentifier }),
    ...(input.sourceVersion != null && { sourceVersion: input.sourceVersion }),
  };
};

const serializeAws_json1_1PutResourcePolicyInput = (input: PutResourcePolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.policy != null && { policy: input.policy }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_json1_1RegistryCredential = (input: RegistryCredential, context: __SerdeContext): any => {
  return {
    ...(input.credential != null && { credential: input.credential }),
    ...(input.credentialProvider != null && { credentialProvider: input.credentialProvider }),
  };
};

const serializeAws_json1_1ReportArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ReportExportConfig = (input: ReportExportConfig, context: __SerdeContext): any => {
  return {
    ...(input.exportConfigType != null && { exportConfigType: input.exportConfigType }),
    ...(input.s3Destination != null && {
      s3Destination: serializeAws_json1_1S3ReportExportConfig(input.s3Destination, context),
    }),
  };
};

const serializeAws_json1_1ReportFilter = (input: ReportFilter, context: __SerdeContext): any => {
  return {
    ...(input.status != null && { status: input.status }),
  };
};

const serializeAws_json1_1ReportGroupArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1RetryBuildBatchInput = (input: RetryBuildBatchInput, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.idempotencyToken != null && { idempotencyToken: input.idempotencyToken }),
    ...(input.retryType != null && { retryType: input.retryType }),
  };
};

const serializeAws_json1_1RetryBuildInput = (input: RetryBuildInput, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.idempotencyToken != null && { idempotencyToken: input.idempotencyToken }),
  };
};

const serializeAws_json1_1S3LogsConfig = (input: S3LogsConfig, context: __SerdeContext): any => {
  return {
    ...(input.bucketOwnerAccess != null && { bucketOwnerAccess: input.bucketOwnerAccess }),
    ...(input.encryptionDisabled != null && { encryptionDisabled: input.encryptionDisabled }),
    ...(input.location != null && { location: input.location }),
    ...(input.status != null && { status: input.status }),
  };
};

const serializeAws_json1_1S3ReportExportConfig = (input: S3ReportExportConfig, context: __SerdeContext): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.bucketOwner != null && { bucketOwner: input.bucketOwner }),
    ...(input.encryptionDisabled != null && { encryptionDisabled: input.encryptionDisabled }),
    ...(input.encryptionKey != null && { encryptionKey: input.encryptionKey }),
    ...(input.packaging != null && { packaging: input.packaging }),
    ...(input.path != null && { path: input.path }),
  };
};

const serializeAws_json1_1SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SourceAuth = (input: SourceAuth, context: __SerdeContext): any => {
  return {
    ...(input.resource != null && { resource: input.resource }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_1StartBuildBatchInput = (input: StartBuildBatchInput, context: __SerdeContext): any => {
  return {
    ...(input.artifactsOverride != null && {
      artifactsOverride: serializeAws_json1_1ProjectArtifacts(input.artifactsOverride, context),
    }),
    ...(input.buildBatchConfigOverride != null && {
      buildBatchConfigOverride: serializeAws_json1_1ProjectBuildBatchConfig(input.buildBatchConfigOverride, context),
    }),
    ...(input.buildTimeoutInMinutesOverride != null && {
      buildTimeoutInMinutesOverride: input.buildTimeoutInMinutesOverride,
    }),
    ...(input.buildspecOverride != null && { buildspecOverride: input.buildspecOverride }),
    ...(input.cacheOverride != null && {
      cacheOverride: serializeAws_json1_1ProjectCache(input.cacheOverride, context),
    }),
    ...(input.certificateOverride != null && { certificateOverride: input.certificateOverride }),
    ...(input.computeTypeOverride != null && { computeTypeOverride: input.computeTypeOverride }),
    ...(input.debugSessionEnabled != null && { debugSessionEnabled: input.debugSessionEnabled }),
    ...(input.encryptionKeyOverride != null && { encryptionKeyOverride: input.encryptionKeyOverride }),
    ...(input.environmentTypeOverride != null && { environmentTypeOverride: input.environmentTypeOverride }),
    ...(input.environmentVariablesOverride != null && {
      environmentVariablesOverride: serializeAws_json1_1EnvironmentVariables(
        input.environmentVariablesOverride,
        context
      ),
    }),
    ...(input.gitCloneDepthOverride != null && { gitCloneDepthOverride: input.gitCloneDepthOverride }),
    ...(input.gitSubmodulesConfigOverride != null && {
      gitSubmodulesConfigOverride: serializeAws_json1_1GitSubmodulesConfig(input.gitSubmodulesConfigOverride, context),
    }),
    ...(input.idempotencyToken != null && { idempotencyToken: input.idempotencyToken }),
    ...(input.imageOverride != null && { imageOverride: input.imageOverride }),
    ...(input.imagePullCredentialsTypeOverride != null && {
      imagePullCredentialsTypeOverride: input.imagePullCredentialsTypeOverride,
    }),
    ...(input.insecureSslOverride != null && { insecureSslOverride: input.insecureSslOverride }),
    ...(input.logsConfigOverride != null && {
      logsConfigOverride: serializeAws_json1_1LogsConfig(input.logsConfigOverride, context),
    }),
    ...(input.privilegedModeOverride != null && { privilegedModeOverride: input.privilegedModeOverride }),
    ...(input.projectName != null && { projectName: input.projectName }),
    ...(input.queuedTimeoutInMinutesOverride != null && {
      queuedTimeoutInMinutesOverride: input.queuedTimeoutInMinutesOverride,
    }),
    ...(input.registryCredentialOverride != null && {
      registryCredentialOverride: serializeAws_json1_1RegistryCredential(input.registryCredentialOverride, context),
    }),
    ...(input.reportBuildBatchStatusOverride != null && {
      reportBuildBatchStatusOverride: input.reportBuildBatchStatusOverride,
    }),
    ...(input.secondaryArtifactsOverride != null && {
      secondaryArtifactsOverride: serializeAws_json1_1ProjectArtifactsList(input.secondaryArtifactsOverride, context),
    }),
    ...(input.secondarySourcesOverride != null && {
      secondarySourcesOverride: serializeAws_json1_1ProjectSources(input.secondarySourcesOverride, context),
    }),
    ...(input.secondarySourcesVersionOverride != null && {
      secondarySourcesVersionOverride: serializeAws_json1_1ProjectSecondarySourceVersions(
        input.secondarySourcesVersionOverride,
        context
      ),
    }),
    ...(input.serviceRoleOverride != null && { serviceRoleOverride: input.serviceRoleOverride }),
    ...(input.sourceAuthOverride != null && {
      sourceAuthOverride: serializeAws_json1_1SourceAuth(input.sourceAuthOverride, context),
    }),
    ...(input.sourceLocationOverride != null && { sourceLocationOverride: input.sourceLocationOverride }),
    ...(input.sourceTypeOverride != null && { sourceTypeOverride: input.sourceTypeOverride }),
    ...(input.sourceVersion != null && { sourceVersion: input.sourceVersion }),
  };
};

const serializeAws_json1_1StartBuildInput = (input: StartBuildInput, context: __SerdeContext): any => {
  return {
    ...(input.artifactsOverride != null && {
      artifactsOverride: serializeAws_json1_1ProjectArtifacts(input.artifactsOverride, context),
    }),
    ...(input.buildStatusConfigOverride != null && {
      buildStatusConfigOverride: serializeAws_json1_1BuildStatusConfig(input.buildStatusConfigOverride, context),
    }),
    ...(input.buildspecOverride != null && { buildspecOverride: input.buildspecOverride }),
    ...(input.cacheOverride != null && {
      cacheOverride: serializeAws_json1_1ProjectCache(input.cacheOverride, context),
    }),
    ...(input.certificateOverride != null && { certificateOverride: input.certificateOverride }),
    ...(input.computeTypeOverride != null && { computeTypeOverride: input.computeTypeOverride }),
    ...(input.debugSessionEnabled != null && { debugSessionEnabled: input.debugSessionEnabled }),
    ...(input.encryptionKeyOverride != null && { encryptionKeyOverride: input.encryptionKeyOverride }),
    ...(input.environmentTypeOverride != null && { environmentTypeOverride: input.environmentTypeOverride }),
    ...(input.environmentVariablesOverride != null && {
      environmentVariablesOverride: serializeAws_json1_1EnvironmentVariables(
        input.environmentVariablesOverride,
        context
      ),
    }),
    ...(input.gitCloneDepthOverride != null && { gitCloneDepthOverride: input.gitCloneDepthOverride }),
    ...(input.gitSubmodulesConfigOverride != null && {
      gitSubmodulesConfigOverride: serializeAws_json1_1GitSubmodulesConfig(input.gitSubmodulesConfigOverride, context),
    }),
    ...(input.idempotencyToken != null && { idempotencyToken: input.idempotencyToken }),
    ...(input.imageOverride != null && { imageOverride: input.imageOverride }),
    ...(input.imagePullCredentialsTypeOverride != null && {
      imagePullCredentialsTypeOverride: input.imagePullCredentialsTypeOverride,
    }),
    ...(input.insecureSslOverride != null && { insecureSslOverride: input.insecureSslOverride }),
    ...(input.logsConfigOverride != null && {
      logsConfigOverride: serializeAws_json1_1LogsConfig(input.logsConfigOverride, context),
    }),
    ...(input.privilegedModeOverride != null && { privilegedModeOverride: input.privilegedModeOverride }),
    ...(input.projectName != null && { projectName: input.projectName }),
    ...(input.queuedTimeoutInMinutesOverride != null && {
      queuedTimeoutInMinutesOverride: input.queuedTimeoutInMinutesOverride,
    }),
    ...(input.registryCredentialOverride != null && {
      registryCredentialOverride: serializeAws_json1_1RegistryCredential(input.registryCredentialOverride, context),
    }),
    ...(input.reportBuildStatusOverride != null && { reportBuildStatusOverride: input.reportBuildStatusOverride }),
    ...(input.secondaryArtifactsOverride != null && {
      secondaryArtifactsOverride: serializeAws_json1_1ProjectArtifactsList(input.secondaryArtifactsOverride, context),
    }),
    ...(input.secondarySourcesOverride != null && {
      secondarySourcesOverride: serializeAws_json1_1ProjectSources(input.secondarySourcesOverride, context),
    }),
    ...(input.secondarySourcesVersionOverride != null && {
      secondarySourcesVersionOverride: serializeAws_json1_1ProjectSecondarySourceVersions(
        input.secondarySourcesVersionOverride,
        context
      ),
    }),
    ...(input.serviceRoleOverride != null && { serviceRoleOverride: input.serviceRoleOverride }),
    ...(input.sourceAuthOverride != null && {
      sourceAuthOverride: serializeAws_json1_1SourceAuth(input.sourceAuthOverride, context),
    }),
    ...(input.sourceLocationOverride != null && { sourceLocationOverride: input.sourceLocationOverride }),
    ...(input.sourceTypeOverride != null && { sourceTypeOverride: input.sourceTypeOverride }),
    ...(input.sourceVersion != null && { sourceVersion: input.sourceVersion }),
    ...(input.timeoutInMinutesOverride != null && { timeoutInMinutesOverride: input.timeoutInMinutesOverride }),
  };
};

const serializeAws_json1_1StopBuildBatchInput = (input: StopBuildBatchInput, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

const serializeAws_json1_1StopBuildInput = (input: StopBuildInput, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

const serializeAws_json1_1Subnets = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TestCaseFilter = (input: TestCaseFilter, context: __SerdeContext): any => {
  return {
    ...(input.keyword != null && { keyword: input.keyword }),
    ...(input.status != null && { status: input.status }),
  };
};

const serializeAws_json1_1UpdateProjectInput = (input: UpdateProjectInput, context: __SerdeContext): any => {
  return {
    ...(input.artifacts != null && { artifacts: serializeAws_json1_1ProjectArtifacts(input.artifacts, context) }),
    ...(input.badgeEnabled != null && { badgeEnabled: input.badgeEnabled }),
    ...(input.buildBatchConfig != null && {
      buildBatchConfig: serializeAws_json1_1ProjectBuildBatchConfig(input.buildBatchConfig, context),
    }),
    ...(input.cache != null && { cache: serializeAws_json1_1ProjectCache(input.cache, context) }),
    ...(input.concurrentBuildLimit != null && { concurrentBuildLimit: input.concurrentBuildLimit }),
    ...(input.description != null && { description: input.description }),
    ...(input.encryptionKey != null && { encryptionKey: input.encryptionKey }),
    ...(input.environment != null && {
      environment: serializeAws_json1_1ProjectEnvironment(input.environment, context),
    }),
    ...(input.fileSystemLocations != null && {
      fileSystemLocations: serializeAws_json1_1ProjectFileSystemLocations(input.fileSystemLocations, context),
    }),
    ...(input.logsConfig != null && { logsConfig: serializeAws_json1_1LogsConfig(input.logsConfig, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.queuedTimeoutInMinutes != null && { queuedTimeoutInMinutes: input.queuedTimeoutInMinutes }),
    ...(input.secondaryArtifacts != null && {
      secondaryArtifacts: serializeAws_json1_1ProjectArtifactsList(input.secondaryArtifacts, context),
    }),
    ...(input.secondarySourceVersions != null && {
      secondarySourceVersions: serializeAws_json1_1ProjectSecondarySourceVersions(
        input.secondarySourceVersions,
        context
      ),
    }),
    ...(input.secondarySources != null && {
      secondarySources: serializeAws_json1_1ProjectSources(input.secondarySources, context),
    }),
    ...(input.serviceRole != null && { serviceRole: input.serviceRole }),
    ...(input.source != null && { source: serializeAws_json1_1ProjectSource(input.source, context) }),
    ...(input.sourceVersion != null && { sourceVersion: input.sourceVersion }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    ...(input.timeoutInMinutes != null && { timeoutInMinutes: input.timeoutInMinutes }),
    ...(input.vpcConfig != null && { vpcConfig: serializeAws_json1_1VpcConfig(input.vpcConfig, context) }),
  };
};

const serializeAws_json1_1UpdateProjectVisibilityInput = (
  input: UpdateProjectVisibilityInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.projectArn != null && { projectArn: input.projectArn }),
    ...(input.projectVisibility != null && { projectVisibility: input.projectVisibility }),
    ...(input.resourceAccessRole != null && { resourceAccessRole: input.resourceAccessRole }),
  };
};

const serializeAws_json1_1UpdateReportGroupInput = (input: UpdateReportGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.exportConfig != null && {
      exportConfig: serializeAws_json1_1ReportExportConfig(input.exportConfig, context),
    }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1UpdateWebhookInput = (input: UpdateWebhookInput, context: __SerdeContext): any => {
  return {
    ...(input.branchFilter != null && { branchFilter: input.branchFilter }),
    ...(input.buildType != null && { buildType: input.buildType }),
    ...(input.filterGroups != null && { filterGroups: serializeAws_json1_1FilterGroups(input.filterGroups, context) }),
    ...(input.projectName != null && { projectName: input.projectName }),
    ...(input.rotateSecret != null && { rotateSecret: input.rotateSecret }),
  };
};

const serializeAws_json1_1VpcConfig = (input: VpcConfig, context: __SerdeContext): any => {
  return {
    ...(input.securityGroupIds != null && {
      securityGroupIds: serializeAws_json1_1SecurityGroupIds(input.securityGroupIds, context),
    }),
    ...(input.subnets != null && { subnets: serializeAws_json1_1Subnets(input.subnets, context) }),
    ...(input.vpcId != null && { vpcId: input.vpcId }),
  };
};

const serializeAws_json1_1WebhookFilter = (input: WebhookFilter, context: __SerdeContext): any => {
  return {
    ...(input.excludeMatchedPattern != null && { excludeMatchedPattern: input.excludeMatchedPattern }),
    ...(input.pattern != null && { pattern: input.pattern }),
    ...(input.type != null && { type: input.type }),
  };
};

const deserializeAws_json1_1AccountLimitExceededException = (
  output: any,
  context: __SerdeContext
): AccountLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1BatchDeleteBuildsOutput = (
  output: any,
  context: __SerdeContext
): BatchDeleteBuildsOutput => {
  return {
    buildsDeleted:
      output.buildsDeleted != null ? deserializeAws_json1_1BuildIds(output.buildsDeleted, context) : undefined,
    buildsNotDeleted:
      output.buildsNotDeleted != null
        ? deserializeAws_json1_1BuildsNotDeleted(output.buildsNotDeleted, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetBuildBatchesOutput = (
  output: any,
  context: __SerdeContext
): BatchGetBuildBatchesOutput => {
  return {
    buildBatches:
      output.buildBatches != null ? deserializeAws_json1_1BuildBatches(output.buildBatches, context) : undefined,
    buildBatchesNotFound:
      output.buildBatchesNotFound != null
        ? deserializeAws_json1_1BuildBatchIds(output.buildBatchesNotFound, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetBuildsOutput = (output: any, context: __SerdeContext): BatchGetBuildsOutput => {
  return {
    builds: output.builds != null ? deserializeAws_json1_1Builds(output.builds, context) : undefined,
    buildsNotFound:
      output.buildsNotFound != null ? deserializeAws_json1_1BuildIds(output.buildsNotFound, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetProjectsOutput = (output: any, context: __SerdeContext): BatchGetProjectsOutput => {
  return {
    projects: output.projects != null ? deserializeAws_json1_1Projects(output.projects, context) : undefined,
    projectsNotFound:
      output.projectsNotFound != null
        ? deserializeAws_json1_1ProjectNames(output.projectsNotFound, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetReportGroupsOutput = (
  output: any,
  context: __SerdeContext
): BatchGetReportGroupsOutput => {
  return {
    reportGroups:
      output.reportGroups != null ? deserializeAws_json1_1ReportGroups(output.reportGroups, context) : undefined,
    reportGroupsNotFound:
      output.reportGroupsNotFound != null
        ? deserializeAws_json1_1ReportGroupArns(output.reportGroupsNotFound, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetReportsOutput = (output: any, context: __SerdeContext): BatchGetReportsOutput => {
  return {
    reports: output.reports != null ? deserializeAws_json1_1Reports(output.reports, context) : undefined,
    reportsNotFound:
      output.reportsNotFound != null ? deserializeAws_json1_1ReportArns(output.reportsNotFound, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BatchRestrictions = (output: any, context: __SerdeContext): BatchRestrictions => {
  return {
    computeTypesAllowed:
      output.computeTypesAllowed != null
        ? deserializeAws_json1_1ComputeTypesAllowed(output.computeTypesAllowed, context)
        : undefined,
    maximumBuildsAllowed: __expectInt32(output.maximumBuildsAllowed),
  } as any;
};

const deserializeAws_json1_1Build = (output: any, context: __SerdeContext): Build => {
  return {
    arn: __expectString(output.arn),
    artifacts: output.artifacts != null ? deserializeAws_json1_1BuildArtifacts(output.artifacts, context) : undefined,
    buildBatchArn: __expectString(output.buildBatchArn),
    buildComplete: __expectBoolean(output.buildComplete),
    buildNumber: __expectLong(output.buildNumber),
    buildStatus: __expectString(output.buildStatus),
    cache: output.cache != null ? deserializeAws_json1_1ProjectCache(output.cache, context) : undefined,
    currentPhase: __expectString(output.currentPhase),
    debugSession:
      output.debugSession != null ? deserializeAws_json1_1DebugSession(output.debugSession, context) : undefined,
    encryptionKey: __expectString(output.encryptionKey),
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    environment:
      output.environment != null ? deserializeAws_json1_1ProjectEnvironment(output.environment, context) : undefined,
    exportedEnvironmentVariables:
      output.exportedEnvironmentVariables != null
        ? deserializeAws_json1_1ExportedEnvironmentVariables(output.exportedEnvironmentVariables, context)
        : undefined,
    fileSystemLocations:
      output.fileSystemLocations != null
        ? deserializeAws_json1_1ProjectFileSystemLocations(output.fileSystemLocations, context)
        : undefined,
    id: __expectString(output.id),
    initiator: __expectString(output.initiator),
    logs: output.logs != null ? deserializeAws_json1_1LogsLocation(output.logs, context) : undefined,
    networkInterface:
      output.networkInterface != null
        ? deserializeAws_json1_1NetworkInterface(output.networkInterface, context)
        : undefined,
    phases: output.phases != null ? deserializeAws_json1_1BuildPhases(output.phases, context) : undefined,
    projectName: __expectString(output.projectName),
    queuedTimeoutInMinutes: __expectInt32(output.queuedTimeoutInMinutes),
    reportArns:
      output.reportArns != null ? deserializeAws_json1_1BuildReportArns(output.reportArns, context) : undefined,
    resolvedSourceVersion: __expectString(output.resolvedSourceVersion),
    secondaryArtifacts:
      output.secondaryArtifacts != null
        ? deserializeAws_json1_1BuildArtifactsList(output.secondaryArtifacts, context)
        : undefined,
    secondarySourceVersions:
      output.secondarySourceVersions != null
        ? deserializeAws_json1_1ProjectSecondarySourceVersions(output.secondarySourceVersions, context)
        : undefined,
    secondarySources:
      output.secondarySources != null
        ? deserializeAws_json1_1ProjectSources(output.secondarySources, context)
        : undefined,
    serviceRole: __expectString(output.serviceRole),
    source: output.source != null ? deserializeAws_json1_1ProjectSource(output.source, context) : undefined,
    sourceVersion: __expectString(output.sourceVersion),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    timeoutInMinutes: __expectInt32(output.timeoutInMinutes),
    vpcConfig: output.vpcConfig != null ? deserializeAws_json1_1VpcConfig(output.vpcConfig, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BuildArtifacts = (output: any, context: __SerdeContext): BuildArtifacts => {
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

const deserializeAws_json1_1BuildArtifactsList = (output: any, context: __SerdeContext): BuildArtifacts[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BuildArtifacts(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BuildBatch = (output: any, context: __SerdeContext): BuildBatch => {
  return {
    arn: __expectString(output.arn),
    artifacts: output.artifacts != null ? deserializeAws_json1_1BuildArtifacts(output.artifacts, context) : undefined,
    buildBatchConfig:
      output.buildBatchConfig != null
        ? deserializeAws_json1_1ProjectBuildBatchConfig(output.buildBatchConfig, context)
        : undefined,
    buildBatchNumber: __expectLong(output.buildBatchNumber),
    buildBatchStatus: __expectString(output.buildBatchStatus),
    buildGroups:
      output.buildGroups != null ? deserializeAws_json1_1BuildGroups(output.buildGroups, context) : undefined,
    buildTimeoutInMinutes: __expectInt32(output.buildTimeoutInMinutes),
    cache: output.cache != null ? deserializeAws_json1_1ProjectCache(output.cache, context) : undefined,
    complete: __expectBoolean(output.complete),
    currentPhase: __expectString(output.currentPhase),
    debugSessionEnabled: __expectBoolean(output.debugSessionEnabled),
    encryptionKey: __expectString(output.encryptionKey),
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    environment:
      output.environment != null ? deserializeAws_json1_1ProjectEnvironment(output.environment, context) : undefined,
    fileSystemLocations:
      output.fileSystemLocations != null
        ? deserializeAws_json1_1ProjectFileSystemLocations(output.fileSystemLocations, context)
        : undefined,
    id: __expectString(output.id),
    initiator: __expectString(output.initiator),
    logConfig: output.logConfig != null ? deserializeAws_json1_1LogsConfig(output.logConfig, context) : undefined,
    phases: output.phases != null ? deserializeAws_json1_1BuildBatchPhases(output.phases, context) : undefined,
    projectName: __expectString(output.projectName),
    queuedTimeoutInMinutes: __expectInt32(output.queuedTimeoutInMinutes),
    resolvedSourceVersion: __expectString(output.resolvedSourceVersion),
    secondaryArtifacts:
      output.secondaryArtifacts != null
        ? deserializeAws_json1_1BuildArtifactsList(output.secondaryArtifacts, context)
        : undefined,
    secondarySourceVersions:
      output.secondarySourceVersions != null
        ? deserializeAws_json1_1ProjectSecondarySourceVersions(output.secondarySourceVersions, context)
        : undefined,
    secondarySources:
      output.secondarySources != null
        ? deserializeAws_json1_1ProjectSources(output.secondarySources, context)
        : undefined,
    serviceRole: __expectString(output.serviceRole),
    source: output.source != null ? deserializeAws_json1_1ProjectSource(output.source, context) : undefined,
    sourceVersion: __expectString(output.sourceVersion),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    vpcConfig: output.vpcConfig != null ? deserializeAws_json1_1VpcConfig(output.vpcConfig, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BuildBatches = (output: any, context: __SerdeContext): BuildBatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BuildBatch(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BuildBatchIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1BuildBatchPhase = (output: any, context: __SerdeContext): BuildBatchPhase => {
  return {
    contexts: output.contexts != null ? deserializeAws_json1_1PhaseContexts(output.contexts, context) : undefined,
    durationInSeconds: __expectLong(output.durationInSeconds),
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    phaseStatus: __expectString(output.phaseStatus),
    phaseType: __expectString(output.phaseType),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
  } as any;
};

const deserializeAws_json1_1BuildBatchPhases = (output: any, context: __SerdeContext): BuildBatchPhase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BuildBatchPhase(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BuildGroup = (output: any, context: __SerdeContext): BuildGroup => {
  return {
    currentBuildSummary:
      output.currentBuildSummary != null
        ? deserializeAws_json1_1BuildSummary(output.currentBuildSummary, context)
        : undefined,
    dependsOn: output.dependsOn != null ? deserializeAws_json1_1Identifiers(output.dependsOn, context) : undefined,
    identifier: __expectString(output.identifier),
    ignoreFailure: __expectBoolean(output.ignoreFailure),
    priorBuildSummaryList:
      output.priorBuildSummaryList != null
        ? deserializeAws_json1_1BuildSummaries(output.priorBuildSummaryList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BuildGroups = (output: any, context: __SerdeContext): BuildGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BuildGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BuildIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1BuildNotDeleted = (output: any, context: __SerdeContext): BuildNotDeleted => {
  return {
    id: __expectString(output.id),
    statusCode: __expectString(output.statusCode),
  } as any;
};

const deserializeAws_json1_1BuildPhase = (output: any, context: __SerdeContext): BuildPhase => {
  return {
    contexts: output.contexts != null ? deserializeAws_json1_1PhaseContexts(output.contexts, context) : undefined,
    durationInSeconds: __expectLong(output.durationInSeconds),
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    phaseStatus: __expectString(output.phaseStatus),
    phaseType: __expectString(output.phaseType),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
  } as any;
};

const deserializeAws_json1_1BuildPhases = (output: any, context: __SerdeContext): BuildPhase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BuildPhase(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BuildReportArns = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Builds = (output: any, context: __SerdeContext): Build[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Build(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BuildsNotDeleted = (output: any, context: __SerdeContext): BuildNotDeleted[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BuildNotDeleted(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BuildStatusConfig = (output: any, context: __SerdeContext): BuildStatusConfig => {
  return {
    context: __expectString(output.context),
    targetUrl: __expectString(output.targetUrl),
  } as any;
};

const deserializeAws_json1_1BuildSummaries = (output: any, context: __SerdeContext): BuildSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BuildSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BuildSummary = (output: any, context: __SerdeContext): BuildSummary => {
  return {
    arn: __expectString(output.arn),
    buildStatus: __expectString(output.buildStatus),
    primaryArtifact:
      output.primaryArtifact != null
        ? deserializeAws_json1_1ResolvedArtifact(output.primaryArtifact, context)
        : undefined,
    requestedOn:
      output.requestedOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.requestedOn)))
        : undefined,
    secondaryArtifacts:
      output.secondaryArtifacts != null
        ? deserializeAws_json1_1ResolvedSecondaryArtifacts(output.secondaryArtifacts, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CloudWatchLogsConfig = (output: any, context: __SerdeContext): CloudWatchLogsConfig => {
  return {
    groupName: __expectString(output.groupName),
    status: __expectString(output.status),
    streamName: __expectString(output.streamName),
  } as any;
};

const deserializeAws_json1_1CodeCoverage = (output: any, context: __SerdeContext): CodeCoverage => {
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

const deserializeAws_json1_1CodeCoverageReportSummary = (
  output: any,
  context: __SerdeContext
): CodeCoverageReportSummary => {
  return {
    branchCoveragePercentage: __limitedParseDouble(output.branchCoveragePercentage),
    branchesCovered: __expectInt32(output.branchesCovered),
    branchesMissed: __expectInt32(output.branchesMissed),
    lineCoveragePercentage: __limitedParseDouble(output.lineCoveragePercentage),
    linesCovered: __expectInt32(output.linesCovered),
    linesMissed: __expectInt32(output.linesMissed),
  } as any;
};

const deserializeAws_json1_1CodeCoverages = (output: any, context: __SerdeContext): CodeCoverage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CodeCoverage(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ComputeTypesAllowed = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1CreateProjectOutput = (output: any, context: __SerdeContext): CreateProjectOutput => {
  return {
    project: output.project != null ? deserializeAws_json1_1Project(output.project, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateReportGroupOutput = (
  output: any,
  context: __SerdeContext
): CreateReportGroupOutput => {
  return {
    reportGroup:
      output.reportGroup != null ? deserializeAws_json1_1ReportGroup(output.reportGroup, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateWebhookOutput = (output: any, context: __SerdeContext): CreateWebhookOutput => {
  return {
    webhook: output.webhook != null ? deserializeAws_json1_1Webhook(output.webhook, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DebugSession = (output: any, context: __SerdeContext): DebugSession => {
  return {
    sessionEnabled: __expectBoolean(output.sessionEnabled),
    sessionTarget: __expectString(output.sessionTarget),
  } as any;
};

const deserializeAws_json1_1DeleteBuildBatchOutput = (output: any, context: __SerdeContext): DeleteBuildBatchOutput => {
  return {
    buildsDeleted:
      output.buildsDeleted != null ? deserializeAws_json1_1BuildIds(output.buildsDeleted, context) : undefined,
    buildsNotDeleted:
      output.buildsNotDeleted != null
        ? deserializeAws_json1_1BuildsNotDeleted(output.buildsNotDeleted, context)
        : undefined,
    statusCode: __expectString(output.statusCode),
  } as any;
};

const deserializeAws_json1_1DeleteProjectOutput = (output: any, context: __SerdeContext): DeleteProjectOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeleteReportGroupOutput = (
  output: any,
  context: __SerdeContext
): DeleteReportGroupOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeleteReportOutput = (output: any, context: __SerdeContext): DeleteReportOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeleteResourcePolicyOutput = (
  output: any,
  context: __SerdeContext
): DeleteResourcePolicyOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeleteSourceCredentialsOutput = (
  output: any,
  context: __SerdeContext
): DeleteSourceCredentialsOutput => {
  return {
    arn: __expectString(output.arn),
  } as any;
};

const deserializeAws_json1_1DeleteWebhookOutput = (output: any, context: __SerdeContext): DeleteWebhookOutput => {
  return {} as any;
};

const deserializeAws_json1_1DescribeCodeCoveragesOutput = (
  output: any,
  context: __SerdeContext
): DescribeCodeCoveragesOutput => {
  return {
    codeCoverages:
      output.codeCoverages != null ? deserializeAws_json1_1CodeCoverages(output.codeCoverages, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1DescribeTestCasesOutput = (
  output: any,
  context: __SerdeContext
): DescribeTestCasesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    testCases: output.testCases != null ? deserializeAws_json1_1TestCases(output.testCases, context) : undefined,
  } as any;
};

const deserializeAws_json1_1EnvironmentImage = (output: any, context: __SerdeContext): EnvironmentImage => {
  return {
    description: __expectString(output.description),
    name: __expectString(output.name),
    versions: output.versions != null ? deserializeAws_json1_1ImageVersions(output.versions, context) : undefined,
  } as any;
};

const deserializeAws_json1_1EnvironmentImages = (output: any, context: __SerdeContext): EnvironmentImage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EnvironmentImage(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EnvironmentLanguage = (output: any, context: __SerdeContext): EnvironmentLanguage => {
  return {
    images: output.images != null ? deserializeAws_json1_1EnvironmentImages(output.images, context) : undefined,
    language: __expectString(output.language),
  } as any;
};

const deserializeAws_json1_1EnvironmentLanguages = (output: any, context: __SerdeContext): EnvironmentLanguage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EnvironmentLanguage(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EnvironmentPlatform = (output: any, context: __SerdeContext): EnvironmentPlatform => {
  return {
    languages:
      output.languages != null ? deserializeAws_json1_1EnvironmentLanguages(output.languages, context) : undefined,
    platform: __expectString(output.platform),
  } as any;
};

const deserializeAws_json1_1EnvironmentPlatforms = (output: any, context: __SerdeContext): EnvironmentPlatform[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EnvironmentPlatform(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EnvironmentVariable = (output: any, context: __SerdeContext): EnvironmentVariable => {
  return {
    name: __expectString(output.name),
    type: __expectString(output.type),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_json1_1EnvironmentVariables = (output: any, context: __SerdeContext): EnvironmentVariable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EnvironmentVariable(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ExportedEnvironmentVariable = (
  output: any,
  context: __SerdeContext
): ExportedEnvironmentVariable => {
  return {
    name: __expectString(output.name),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_json1_1ExportedEnvironmentVariables = (
  output: any,
  context: __SerdeContext
): ExportedEnvironmentVariable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExportedEnvironmentVariable(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FilterGroup = (output: any, context: __SerdeContext): WebhookFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WebhookFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FilterGroups = (output: any, context: __SerdeContext): WebhookFilter[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FilterGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GetReportGroupTrendOutput = (
  output: any,
  context: __SerdeContext
): GetReportGroupTrendOutput => {
  return {
    rawData:
      output.rawData != null ? deserializeAws_json1_1ReportGroupTrendRawDataList(output.rawData, context) : undefined,
    stats: output.stats != null ? deserializeAws_json1_1ReportGroupTrendStats(output.stats, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetResourcePolicyOutput = (
  output: any,
  context: __SerdeContext
): GetResourcePolicyOutput => {
  return {
    policy: __expectString(output.policy),
  } as any;
};

const deserializeAws_json1_1GitSubmodulesConfig = (output: any, context: __SerdeContext): GitSubmodulesConfig => {
  return {
    fetchSubmodules: __expectBoolean(output.fetchSubmodules),
  } as any;
};

const deserializeAws_json1_1Identifiers = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ImageVersions = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ImportSourceCredentialsOutput = (
  output: any,
  context: __SerdeContext
): ImportSourceCredentialsOutput => {
  return {
    arn: __expectString(output.arn),
  } as any;
};

const deserializeAws_json1_1InvalidateProjectCacheOutput = (
  output: any,
  context: __SerdeContext
): InvalidateProjectCacheOutput => {
  return {} as any;
};

const deserializeAws_json1_1InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListBuildBatchesForProjectOutput = (
  output: any,
  context: __SerdeContext
): ListBuildBatchesForProjectOutput => {
  return {
    ids: output.ids != null ? deserializeAws_json1_1BuildBatchIds(output.ids, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListBuildBatchesOutput = (output: any, context: __SerdeContext): ListBuildBatchesOutput => {
  return {
    ids: output.ids != null ? deserializeAws_json1_1BuildBatchIds(output.ids, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListBuildsForProjectOutput = (
  output: any,
  context: __SerdeContext
): ListBuildsForProjectOutput => {
  return {
    ids: output.ids != null ? deserializeAws_json1_1BuildIds(output.ids, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListBuildsOutput = (output: any, context: __SerdeContext): ListBuildsOutput => {
  return {
    ids: output.ids != null ? deserializeAws_json1_1BuildIds(output.ids, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListCuratedEnvironmentImagesOutput = (
  output: any,
  context: __SerdeContext
): ListCuratedEnvironmentImagesOutput => {
  return {
    platforms:
      output.platforms != null ? deserializeAws_json1_1EnvironmentPlatforms(output.platforms, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListProjectsOutput = (output: any, context: __SerdeContext): ListProjectsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    projects: output.projects != null ? deserializeAws_json1_1ProjectNames(output.projects, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListReportGroupsOutput = (output: any, context: __SerdeContext): ListReportGroupsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    reportGroups:
      output.reportGroups != null ? deserializeAws_json1_1ReportGroupArns(output.reportGroups, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListReportsForReportGroupOutput = (
  output: any,
  context: __SerdeContext
): ListReportsForReportGroupOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    reports: output.reports != null ? deserializeAws_json1_1ReportArns(output.reports, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListReportsOutput = (output: any, context: __SerdeContext): ListReportsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    reports: output.reports != null ? deserializeAws_json1_1ReportArns(output.reports, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListSharedProjectsOutput = (
  output: any,
  context: __SerdeContext
): ListSharedProjectsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    projects: output.projects != null ? deserializeAws_json1_1ProjectArns(output.projects, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListSharedReportGroupsOutput = (
  output: any,
  context: __SerdeContext
): ListSharedReportGroupsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    reportGroups:
      output.reportGroups != null ? deserializeAws_json1_1ReportGroupArns(output.reportGroups, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListSourceCredentialsOutput = (
  output: any,
  context: __SerdeContext
): ListSourceCredentialsOutput => {
  return {
    sourceCredentialsInfos:
      output.sourceCredentialsInfos != null
        ? deserializeAws_json1_1SourceCredentialsInfos(output.sourceCredentialsInfos, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LogsConfig = (output: any, context: __SerdeContext): LogsConfig => {
  return {
    cloudWatchLogs:
      output.cloudWatchLogs != null
        ? deserializeAws_json1_1CloudWatchLogsConfig(output.cloudWatchLogs, context)
        : undefined,
    s3Logs: output.s3Logs != null ? deserializeAws_json1_1S3LogsConfig(output.s3Logs, context) : undefined,
  } as any;
};

const deserializeAws_json1_1LogsLocation = (output: any, context: __SerdeContext): LogsLocation => {
  return {
    cloudWatchLogs:
      output.cloudWatchLogs != null
        ? deserializeAws_json1_1CloudWatchLogsConfig(output.cloudWatchLogs, context)
        : undefined,
    cloudWatchLogsArn: __expectString(output.cloudWatchLogsArn),
    deepLink: __expectString(output.deepLink),
    groupName: __expectString(output.groupName),
    s3DeepLink: __expectString(output.s3DeepLink),
    s3Logs: output.s3Logs != null ? deserializeAws_json1_1S3LogsConfig(output.s3Logs, context) : undefined,
    s3LogsArn: __expectString(output.s3LogsArn),
    streamName: __expectString(output.streamName),
  } as any;
};

const deserializeAws_json1_1NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return {
    networkInterfaceId: __expectString(output.networkInterfaceId),
    subnetId: __expectString(output.subnetId),
  } as any;
};

const deserializeAws_json1_1OAuthProviderException = (output: any, context: __SerdeContext): OAuthProviderException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PhaseContext = (output: any, context: __SerdeContext): PhaseContext => {
  return {
    message: __expectString(output.message),
    statusCode: __expectString(output.statusCode),
  } as any;
};

const deserializeAws_json1_1PhaseContexts = (output: any, context: __SerdeContext): PhaseContext[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PhaseContext(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Project = (output: any, context: __SerdeContext): Project => {
  return {
    arn: __expectString(output.arn),
    artifacts: output.artifacts != null ? deserializeAws_json1_1ProjectArtifacts(output.artifacts, context) : undefined,
    badge: output.badge != null ? deserializeAws_json1_1ProjectBadge(output.badge, context) : undefined,
    buildBatchConfig:
      output.buildBatchConfig != null
        ? deserializeAws_json1_1ProjectBuildBatchConfig(output.buildBatchConfig, context)
        : undefined,
    cache: output.cache != null ? deserializeAws_json1_1ProjectCache(output.cache, context) : undefined,
    concurrentBuildLimit: __expectInt32(output.concurrentBuildLimit),
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    description: __expectString(output.description),
    encryptionKey: __expectString(output.encryptionKey),
    environment:
      output.environment != null ? deserializeAws_json1_1ProjectEnvironment(output.environment, context) : undefined,
    fileSystemLocations:
      output.fileSystemLocations != null
        ? deserializeAws_json1_1ProjectFileSystemLocations(output.fileSystemLocations, context)
        : undefined,
    lastModified:
      output.lastModified != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModified)))
        : undefined,
    logsConfig: output.logsConfig != null ? deserializeAws_json1_1LogsConfig(output.logsConfig, context) : undefined,
    name: __expectString(output.name),
    projectVisibility: __expectString(output.projectVisibility),
    publicProjectAlias: __expectString(output.publicProjectAlias),
    queuedTimeoutInMinutes: __expectInt32(output.queuedTimeoutInMinutes),
    resourceAccessRole: __expectString(output.resourceAccessRole),
    secondaryArtifacts:
      output.secondaryArtifacts != null
        ? deserializeAws_json1_1ProjectArtifactsList(output.secondaryArtifacts, context)
        : undefined,
    secondarySourceVersions:
      output.secondarySourceVersions != null
        ? deserializeAws_json1_1ProjectSecondarySourceVersions(output.secondarySourceVersions, context)
        : undefined,
    secondarySources:
      output.secondarySources != null
        ? deserializeAws_json1_1ProjectSources(output.secondarySources, context)
        : undefined,
    serviceRole: __expectString(output.serviceRole),
    source: output.source != null ? deserializeAws_json1_1ProjectSource(output.source, context) : undefined,
    sourceVersion: __expectString(output.sourceVersion),
    tags: output.tags != null ? deserializeAws_json1_1TagList(output.tags, context) : undefined,
    timeoutInMinutes: __expectInt32(output.timeoutInMinutes),
    vpcConfig: output.vpcConfig != null ? deserializeAws_json1_1VpcConfig(output.vpcConfig, context) : undefined,
    webhook: output.webhook != null ? deserializeAws_json1_1Webhook(output.webhook, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ProjectArns = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ProjectArtifacts = (output: any, context: __SerdeContext): ProjectArtifacts => {
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

const deserializeAws_json1_1ProjectArtifactsList = (output: any, context: __SerdeContext): ProjectArtifacts[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProjectArtifacts(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProjectBadge = (output: any, context: __SerdeContext): ProjectBadge => {
  return {
    badgeEnabled: __expectBoolean(output.badgeEnabled),
    badgeRequestUrl: __expectString(output.badgeRequestUrl),
  } as any;
};

const deserializeAws_json1_1ProjectBuildBatchConfig = (
  output: any,
  context: __SerdeContext
): ProjectBuildBatchConfig => {
  return {
    batchReportMode: __expectString(output.batchReportMode),
    combineArtifacts: __expectBoolean(output.combineArtifacts),
    restrictions:
      output.restrictions != null ? deserializeAws_json1_1BatchRestrictions(output.restrictions, context) : undefined,
    serviceRole: __expectString(output.serviceRole),
    timeoutInMins: __expectInt32(output.timeoutInMins),
  } as any;
};

const deserializeAws_json1_1ProjectCache = (output: any, context: __SerdeContext): ProjectCache => {
  return {
    location: __expectString(output.location),
    modes: output.modes != null ? deserializeAws_json1_1ProjectCacheModes(output.modes, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1ProjectCacheModes = (output: any, context: __SerdeContext): (CacheMode | string)[] => {
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

const deserializeAws_json1_1ProjectEnvironment = (output: any, context: __SerdeContext): ProjectEnvironment => {
  return {
    certificate: __expectString(output.certificate),
    computeType: __expectString(output.computeType),
    environmentVariables:
      output.environmentVariables != null
        ? deserializeAws_json1_1EnvironmentVariables(output.environmentVariables, context)
        : undefined,
    image: __expectString(output.image),
    imagePullCredentialsType: __expectString(output.imagePullCredentialsType),
    privilegedMode: __expectBoolean(output.privilegedMode),
    registryCredential:
      output.registryCredential != null
        ? deserializeAws_json1_1RegistryCredential(output.registryCredential, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1ProjectFileSystemLocation = (
  output: any,
  context: __SerdeContext
): ProjectFileSystemLocation => {
  return {
    identifier: __expectString(output.identifier),
    location: __expectString(output.location),
    mountOptions: __expectString(output.mountOptions),
    mountPoint: __expectString(output.mountPoint),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1ProjectFileSystemLocations = (
  output: any,
  context: __SerdeContext
): ProjectFileSystemLocation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProjectFileSystemLocation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProjectNames = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Projects = (output: any, context: __SerdeContext): Project[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Project(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProjectSecondarySourceVersions = (
  output: any,
  context: __SerdeContext
): ProjectSourceVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProjectSourceVersion(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProjectSource = (output: any, context: __SerdeContext): ProjectSource => {
  return {
    auth: output.auth != null ? deserializeAws_json1_1SourceAuth(output.auth, context) : undefined,
    buildStatusConfig:
      output.buildStatusConfig != null
        ? deserializeAws_json1_1BuildStatusConfig(output.buildStatusConfig, context)
        : undefined,
    buildspec: __expectString(output.buildspec),
    gitCloneDepth: __expectInt32(output.gitCloneDepth),
    gitSubmodulesConfig:
      output.gitSubmodulesConfig != null
        ? deserializeAws_json1_1GitSubmodulesConfig(output.gitSubmodulesConfig, context)
        : undefined,
    insecureSsl: __expectBoolean(output.insecureSsl),
    location: __expectString(output.location),
    reportBuildStatus: __expectBoolean(output.reportBuildStatus),
    sourceIdentifier: __expectString(output.sourceIdentifier),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1ProjectSources = (output: any, context: __SerdeContext): ProjectSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProjectSource(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProjectSourceVersion = (output: any, context: __SerdeContext): ProjectSourceVersion => {
  return {
    sourceIdentifier: __expectString(output.sourceIdentifier),
    sourceVersion: __expectString(output.sourceVersion),
  } as any;
};

const deserializeAws_json1_1PutResourcePolicyOutput = (
  output: any,
  context: __SerdeContext
): PutResourcePolicyOutput => {
  return {
    resourceArn: __expectString(output.resourceArn),
  } as any;
};

const deserializeAws_json1_1RegistryCredential = (output: any, context: __SerdeContext): RegistryCredential => {
  return {
    credential: __expectString(output.credential),
    credentialProvider: __expectString(output.credentialProvider),
  } as any;
};

const deserializeAws_json1_1Report = (output: any, context: __SerdeContext): Report => {
  return {
    arn: __expectString(output.arn),
    codeCoverageSummary:
      output.codeCoverageSummary != null
        ? deserializeAws_json1_1CodeCoverageReportSummary(output.codeCoverageSummary, context)
        : undefined,
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    executionId: __expectString(output.executionId),
    expired:
      output.expired != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.expired))) : undefined,
    exportConfig:
      output.exportConfig != null ? deserializeAws_json1_1ReportExportConfig(output.exportConfig, context) : undefined,
    name: __expectString(output.name),
    reportGroupArn: __expectString(output.reportGroupArn),
    status: __expectString(output.status),
    testSummary:
      output.testSummary != null ? deserializeAws_json1_1TestReportSummary(output.testSummary, context) : undefined,
    truncated: __expectBoolean(output.truncated),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1ReportArns = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ReportExportConfig = (output: any, context: __SerdeContext): ReportExportConfig => {
  return {
    exportConfigType: __expectString(output.exportConfigType),
    s3Destination:
      output.s3Destination != null
        ? deserializeAws_json1_1S3ReportExportConfig(output.s3Destination, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ReportGroup = (output: any, context: __SerdeContext): ReportGroup => {
  return {
    arn: __expectString(output.arn),
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    exportConfig:
      output.exportConfig != null ? deserializeAws_json1_1ReportExportConfig(output.exportConfig, context) : undefined,
    lastModified:
      output.lastModified != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModified)))
        : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
    tags: output.tags != null ? deserializeAws_json1_1TagList(output.tags, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1ReportGroupArns = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ReportGroups = (output: any, context: __SerdeContext): ReportGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReportGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ReportGroupTrendRawDataList = (
  output: any,
  context: __SerdeContext
): ReportWithRawData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReportWithRawData(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ReportGroupTrendStats = (output: any, context: __SerdeContext): ReportGroupTrendStats => {
  return {
    average: __expectString(output.average),
    max: __expectString(output.max),
    min: __expectString(output.min),
  } as any;
};

const deserializeAws_json1_1Reports = (output: any, context: __SerdeContext): Report[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Report(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ReportStatusCounts = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1ReportWithRawData = (output: any, context: __SerdeContext): ReportWithRawData => {
  return {
    data: __expectString(output.data),
    reportArn: __expectString(output.reportArn),
  } as any;
};

const deserializeAws_json1_1ResolvedArtifact = (output: any, context: __SerdeContext): ResolvedArtifact => {
  return {
    identifier: __expectString(output.identifier),
    location: __expectString(output.location),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1ResolvedSecondaryArtifacts = (output: any, context: __SerdeContext): ResolvedArtifact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResolvedArtifact(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RetryBuildBatchOutput = (output: any, context: __SerdeContext): RetryBuildBatchOutput => {
  return {
    buildBatch: output.buildBatch != null ? deserializeAws_json1_1BuildBatch(output.buildBatch, context) : undefined,
  } as any;
};

const deserializeAws_json1_1RetryBuildOutput = (output: any, context: __SerdeContext): RetryBuildOutput => {
  return {
    build: output.build != null ? deserializeAws_json1_1Build(output.build, context) : undefined,
  } as any;
};

const deserializeAws_json1_1S3LogsConfig = (output: any, context: __SerdeContext): S3LogsConfig => {
  return {
    bucketOwnerAccess: __expectString(output.bucketOwnerAccess),
    encryptionDisabled: __expectBoolean(output.encryptionDisabled),
    location: __expectString(output.location),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1S3ReportExportConfig = (output: any, context: __SerdeContext): S3ReportExportConfig => {
  return {
    bucket: __expectString(output.bucket),
    bucketOwner: __expectString(output.bucketOwner),
    encryptionDisabled: __expectBoolean(output.encryptionDisabled),
    encryptionKey: __expectString(output.encryptionKey),
    packaging: __expectString(output.packaging),
    path: __expectString(output.path),
  } as any;
};

const deserializeAws_json1_1SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1SourceAuth = (output: any, context: __SerdeContext): SourceAuth => {
  return {
    resource: __expectString(output.resource),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1SourceCredentialsInfo = (output: any, context: __SerdeContext): SourceCredentialsInfo => {
  return {
    arn: __expectString(output.arn),
    authType: __expectString(output.authType),
    serverType: __expectString(output.serverType),
  } as any;
};

const deserializeAws_json1_1SourceCredentialsInfos = (
  output: any,
  context: __SerdeContext
): SourceCredentialsInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SourceCredentialsInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StartBuildBatchOutput = (output: any, context: __SerdeContext): StartBuildBatchOutput => {
  return {
    buildBatch: output.buildBatch != null ? deserializeAws_json1_1BuildBatch(output.buildBatch, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StartBuildOutput = (output: any, context: __SerdeContext): StartBuildOutput => {
  return {
    build: output.build != null ? deserializeAws_json1_1Build(output.build, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StopBuildBatchOutput = (output: any, context: __SerdeContext): StopBuildBatchOutput => {
  return {
    buildBatch: output.buildBatch != null ? deserializeAws_json1_1BuildBatch(output.buildBatch, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StopBuildOutput = (output: any, context: __SerdeContext): StopBuildOutput => {
  return {
    build: output.build != null ? deserializeAws_json1_1Build(output.build, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Subnets = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TestCase = (output: any, context: __SerdeContext): TestCase => {
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

const deserializeAws_json1_1TestCases = (output: any, context: __SerdeContext): TestCase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TestCase(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TestReportSummary = (output: any, context: __SerdeContext): TestReportSummary => {
  return {
    durationInNanoSeconds: __expectLong(output.durationInNanoSeconds),
    statusCounts:
      output.statusCounts != null ? deserializeAws_json1_1ReportStatusCounts(output.statusCounts, context) : undefined,
    total: __expectInt32(output.total),
  } as any;
};

const deserializeAws_json1_1UpdateProjectOutput = (output: any, context: __SerdeContext): UpdateProjectOutput => {
  return {
    project: output.project != null ? deserializeAws_json1_1Project(output.project, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateProjectVisibilityOutput = (
  output: any,
  context: __SerdeContext
): UpdateProjectVisibilityOutput => {
  return {
    projectArn: __expectString(output.projectArn),
    projectVisibility: __expectString(output.projectVisibility),
    publicProjectAlias: __expectString(output.publicProjectAlias),
  } as any;
};

const deserializeAws_json1_1UpdateReportGroupOutput = (
  output: any,
  context: __SerdeContext
): UpdateReportGroupOutput => {
  return {
    reportGroup:
      output.reportGroup != null ? deserializeAws_json1_1ReportGroup(output.reportGroup, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateWebhookOutput = (output: any, context: __SerdeContext): UpdateWebhookOutput => {
  return {
    webhook: output.webhook != null ? deserializeAws_json1_1Webhook(output.webhook, context) : undefined,
  } as any;
};

const deserializeAws_json1_1VpcConfig = (output: any, context: __SerdeContext): VpcConfig => {
  return {
    securityGroupIds:
      output.securityGroupIds != null
        ? deserializeAws_json1_1SecurityGroupIds(output.securityGroupIds, context)
        : undefined,
    subnets: output.subnets != null ? deserializeAws_json1_1Subnets(output.subnets, context) : undefined,
    vpcId: __expectString(output.vpcId),
  } as any;
};

const deserializeAws_json1_1Webhook = (output: any, context: __SerdeContext): Webhook => {
  return {
    branchFilter: __expectString(output.branchFilter),
    buildType: __expectString(output.buildType),
    filterGroups:
      output.filterGroups != null ? deserializeAws_json1_1FilterGroups(output.filterGroups, context) : undefined,
    lastModifiedSecret:
      output.lastModifiedSecret != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedSecret)))
        : undefined,
    payloadUrl: __expectString(output.payloadUrl),
    secret: __expectString(output.secret),
    url: __expectString(output.url),
  } as any;
};

const deserializeAws_json1_1WebhookFilter = (output: any, context: __SerdeContext): WebhookFilter => {
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
