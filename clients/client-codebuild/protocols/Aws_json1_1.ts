import {
  BatchDeleteBuildsCommandInput,
  BatchDeleteBuildsCommandOutput
} from "../commands/BatchDeleteBuildsCommand";
import {
  BatchGetBuildsCommandInput,
  BatchGetBuildsCommandOutput
} from "../commands/BatchGetBuildsCommand";
import {
  BatchGetProjectsCommandInput,
  BatchGetProjectsCommandOutput
} from "../commands/BatchGetProjectsCommand";
import {
  BatchGetReportGroupsCommandInput,
  BatchGetReportGroupsCommandOutput
} from "../commands/BatchGetReportGroupsCommand";
import {
  BatchGetReportsCommandInput,
  BatchGetReportsCommandOutput
} from "../commands/BatchGetReportsCommand";
import {
  CreateProjectCommandInput,
  CreateProjectCommandOutput
} from "../commands/CreateProjectCommand";
import {
  CreateReportGroupCommandInput,
  CreateReportGroupCommandOutput
} from "../commands/CreateReportGroupCommand";
import {
  CreateWebhookCommandInput,
  CreateWebhookCommandOutput
} from "../commands/CreateWebhookCommand";
import {
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput
} from "../commands/DeleteProjectCommand";
import {
  DeleteReportCommandInput,
  DeleteReportCommandOutput
} from "../commands/DeleteReportCommand";
import {
  DeleteReportGroupCommandInput,
  DeleteReportGroupCommandOutput
} from "../commands/DeleteReportGroupCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput
} from "../commands/DeleteResourcePolicyCommand";
import {
  DeleteSourceCredentialsCommandInput,
  DeleteSourceCredentialsCommandOutput
} from "../commands/DeleteSourceCredentialsCommand";
import {
  DeleteWebhookCommandInput,
  DeleteWebhookCommandOutput
} from "../commands/DeleteWebhookCommand";
import {
  DescribeTestCasesCommandInput,
  DescribeTestCasesCommandOutput
} from "../commands/DescribeTestCasesCommand";
import {
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput
} from "../commands/GetResourcePolicyCommand";
import {
  ImportSourceCredentialsCommandInput,
  ImportSourceCredentialsCommandOutput
} from "../commands/ImportSourceCredentialsCommand";
import {
  InvalidateProjectCacheCommandInput,
  InvalidateProjectCacheCommandOutput
} from "../commands/InvalidateProjectCacheCommand";
import {
  ListBuildsCommandInput,
  ListBuildsCommandOutput
} from "../commands/ListBuildsCommand";
import {
  ListBuildsForProjectCommandInput,
  ListBuildsForProjectCommandOutput
} from "../commands/ListBuildsForProjectCommand";
import {
  ListCuratedEnvironmentImagesCommandInput,
  ListCuratedEnvironmentImagesCommandOutput
} from "../commands/ListCuratedEnvironmentImagesCommand";
import {
  ListProjectsCommandInput,
  ListProjectsCommandOutput
} from "../commands/ListProjectsCommand";
import {
  ListReportGroupsCommandInput,
  ListReportGroupsCommandOutput
} from "../commands/ListReportGroupsCommand";
import {
  ListReportsCommandInput,
  ListReportsCommandOutput
} from "../commands/ListReportsCommand";
import {
  ListReportsForReportGroupCommandInput,
  ListReportsForReportGroupCommandOutput
} from "../commands/ListReportsForReportGroupCommand";
import {
  ListSharedProjectsCommandInput,
  ListSharedProjectsCommandOutput
} from "../commands/ListSharedProjectsCommand";
import {
  ListSharedReportGroupsCommandInput,
  ListSharedReportGroupsCommandOutput
} from "../commands/ListSharedReportGroupsCommand";
import {
  ListSourceCredentialsCommandInput,
  ListSourceCredentialsCommandOutput
} from "../commands/ListSourceCredentialsCommand";
import {
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput
} from "../commands/PutResourcePolicyCommand";
import {
  StartBuildCommandInput,
  StartBuildCommandOutput
} from "../commands/StartBuildCommand";
import {
  StopBuildCommandInput,
  StopBuildCommandOutput
} from "../commands/StopBuildCommand";
import {
  UpdateProjectCommandInput,
  UpdateProjectCommandOutput
} from "../commands/UpdateProjectCommand";
import {
  UpdateReportGroupCommandInput,
  UpdateReportGroupCommandOutput
} from "../commands/UpdateReportGroupCommand";
import {
  UpdateWebhookCommandInput,
  UpdateWebhookCommandOutput
} from "../commands/UpdateWebhookCommand";
import {
  AccountLimitExceededException,
  BatchDeleteBuildsInput,
  BatchDeleteBuildsOutput,
  BatchGetBuildsInput,
  BatchGetBuildsOutput,
  BatchGetProjectsInput,
  BatchGetProjectsOutput,
  BatchGetReportGroupsInput,
  BatchGetReportGroupsOutput,
  BatchGetReportsInput,
  BatchGetReportsOutput,
  Build,
  BuildArtifacts,
  BuildNotDeleted,
  BuildPhase,
  CacheMode,
  CloudWatchLogsConfig,
  CreateProjectInput,
  CreateProjectOutput,
  CreateReportGroupInput,
  CreateReportGroupOutput,
  CreateWebhookInput,
  CreateWebhookOutput,
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
  DescribeTestCasesInput,
  DescribeTestCasesOutput,
  EnvironmentImage,
  EnvironmentLanguage,
  EnvironmentPlatform,
  EnvironmentVariable,
  ExportedEnvironmentVariable,
  GetResourcePolicyInput,
  GetResourcePolicyOutput,
  GitSubmodulesConfig,
  ImportSourceCredentialsInput,
  ImportSourceCredentialsOutput,
  InvalidInputException,
  InvalidateProjectCacheInput,
  InvalidateProjectCacheOutput,
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
  ProjectCache,
  ProjectEnvironment,
  ProjectSource,
  ProjectSourceVersion,
  PutResourcePolicyInput,
  PutResourcePolicyOutput,
  RegistryCredential,
  Report,
  ReportExportConfig,
  ReportFilter,
  ReportGroup,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  S3LogsConfig,
  S3ReportExportConfig,
  SourceAuth,
  SourceCredentialsInfo,
  StartBuildInput,
  StartBuildOutput,
  StopBuildInput,
  StopBuildOutput,
  Tag,
  TestCase,
  TestCaseFilter,
  TestReportSummary,
  UpdateProjectInput,
  UpdateProjectOutput,
  UpdateReportGroupInput,
  UpdateReportGroupOutput,
  UpdateWebhookInput,
  UpdateWebhookOutput,
  VpcConfig,
  Webhook,
  WebhookFilter
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_json1_1BatchDeleteBuildsCommand = async (
  input: BatchDeleteBuildsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.BatchDeleteBuilds"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchDeleteBuildsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetBuildsCommand = async (
  input: BatchGetBuildsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.BatchGetBuilds"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetBuildsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetProjectsCommand = async (
  input: BatchGetProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.BatchGetProjects"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetProjectsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetReportGroupsCommand = async (
  input: BatchGetReportGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.BatchGetReportGroups"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetReportGroupsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetReportsCommand = async (
  input: BatchGetReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.BatchGetReports"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetReportsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.CreateProject"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.CreateReportGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateReportGroupInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateWebhookCommand = async (
  input: CreateWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.CreateWebhook"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateWebhookInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteProjectCommand = async (
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.DeleteProject"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.DeleteReport"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.DeleteReportGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteReportGroupInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.DeleteResourcePolicy"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteResourcePolicyInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSourceCredentialsCommand = async (
  input: DeleteSourceCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.DeleteSourceCredentials"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteSourceCredentialsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteWebhookCommand = async (
  input: DeleteWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.DeleteWebhook"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteWebhookInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTestCasesCommand = async (
  input: DescribeTestCasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.DescribeTestCases"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeTestCasesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.GetResourcePolicy"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetResourcePolicyInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportSourceCredentialsCommand = async (
  input: ImportSourceCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.ImportSourceCredentials"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ImportSourceCredentialsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1InvalidateProjectCacheCommand = async (
  input: InvalidateProjectCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.InvalidateProjectCache"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1InvalidateProjectCacheInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListBuildsCommand = async (
  input: ListBuildsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.ListBuilds"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.ListBuildsForProject"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListBuildsForProjectInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCuratedEnvironmentImagesCommand = async (
  input: ListCuratedEnvironmentImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.ListCuratedEnvironmentImages"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListCuratedEnvironmentImagesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListProjectsCommand = async (
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.ListProjects"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.ListReportGroups"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListReportGroupsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListReportsCommand = async (
  input: ListReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.ListReports"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.ListReportsForReportGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListReportsForReportGroupInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSharedProjectsCommand = async (
  input: ListSharedProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.ListSharedProjects"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListSharedProjectsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSharedReportGroupsCommand = async (
  input: ListSharedReportGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.ListSharedReportGroups"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListSharedReportGroupsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSourceCredentialsCommand = async (
  input: ListSourceCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.ListSourceCredentials"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListSourceCredentialsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.PutResourcePolicy"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutResourcePolicyInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartBuildCommand = async (
  input: StartBuildCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.StartBuild"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartBuildInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopBuildCommand = async (
  input: StopBuildCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.StopBuild"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopBuildInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateProjectCommand = async (
  input: UpdateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.UpdateProject"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateProjectInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateReportGroupCommand = async (
  input: UpdateReportGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.UpdateReportGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateReportGroupInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateWebhookCommand = async (
  input: UpdateWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeBuild_20161006.UpdateWebhook"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateWebhookInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1BatchDeleteBuildsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteBuildsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchDeleteBuildsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDeleteBuildsOutput(data, context);
  const response: BatchDeleteBuildsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchDeleteBuildsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchDeleteBuildsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteBuildsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1BatchGetBuildsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetBuildsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchGetBuildsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetBuildsOutput(data, context);
  const response: BatchGetBuildsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchGetBuildsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetBuildsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetBuildsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1BatchGetProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetProjectsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchGetProjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetProjectsOutput(data, context);
  const response: BatchGetProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchGetProjectsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetProjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetProjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1BatchGetReportGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetReportGroupsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchGetReportGroupsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetReportGroupsOutput(data, context);
  const response: BatchGetReportGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchGetReportGroupsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetReportGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetReportGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1BatchGetReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetReportsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchGetReportsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetReportsOutput(data, context);
  const response: BatchGetReportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchGetReportsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetReportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetReportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateProjectOutput(data, context);
  const response: CreateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateProjectOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccountLimitExceededException":
    case "com.amazonaws.codebuild#AccountLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1AccountLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.codebuild#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateReportGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReportGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateReportGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateReportGroupOutput(data, context);
  const response: CreateReportGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateReportGroupOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateReportGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReportGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccountLimitExceededException":
    case "com.amazonaws.codebuild#AccountLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1AccountLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.codebuild#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebhookCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateWebhookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateWebhookOutput(data, context);
  const response: CreateWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateWebhookOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateWebhookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebhookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OAuthProviderException":
    case "com.amazonaws.codebuild#OAuthProviderException":
      response = {
        ...(await deserializeAws_json1_1OAuthProviderExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.codebuild#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteProjectOutput(data, context);
  const response: DeleteProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteProjectOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReportCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteReportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteReportOutput(data, context);
  const response: DeleteReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteReportOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteReportGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReportGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteReportGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteReportGroupOutput(data, context);
  const response: DeleteReportGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteReportGroupOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteReportGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReportGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteResourcePolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteResourcePolicyOutput(data, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteResourcePolicyOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteSourceCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSourceCredentialsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteSourceCredentialsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSourceCredentialsOutput(data, context);
  const response: DeleteSourceCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteSourceCredentialsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSourceCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSourceCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebhookCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteWebhookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteWebhookOutput(data, context);
  const response: DeleteWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteWebhookOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteWebhookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebhookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OAuthProviderException":
    case "com.amazonaws.codebuild#OAuthProviderException":
      response = {
        ...(await deserializeAws_json1_1OAuthProviderExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeTestCasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTestCasesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTestCasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTestCasesOutput(data, context);
  const response: DescribeTestCasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTestCasesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTestCasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTestCasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetResourcePolicyOutput(data, context);
  const response: GetResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetResourcePolicyOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ImportSourceCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportSourceCredentialsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ImportSourceCredentialsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportSourceCredentialsOutput(data, context);
  const response: ImportSourceCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ImportSourceCredentialsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportSourceCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportSourceCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccountLimitExceededException":
    case "com.amazonaws.codebuild#AccountLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1AccountLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.codebuild#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1InvalidateProjectCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvalidateProjectCacheCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1InvalidateProjectCacheCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1InvalidateProjectCacheOutput(data, context);
  const response: InvalidateProjectCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "InvalidateProjectCacheOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1InvalidateProjectCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvalidateProjectCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListBuildsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuildsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListBuildsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListBuildsOutput(data, context);
  const response: ListBuildsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListBuildsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListBuildsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuildsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListBuildsForProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuildsForProjectCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListBuildsForProjectCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListBuildsForProjectOutput(data, context);
  const response: ListBuildsForProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListBuildsForProjectOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListBuildsForProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuildsForProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListCuratedEnvironmentImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCuratedEnvironmentImagesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListCuratedEnvironmentImagesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCuratedEnvironmentImagesOutput(
    data,
    context
  );
  const response: ListCuratedEnvironmentImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListCuratedEnvironmentImagesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCuratedEnvironmentImagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCuratedEnvironmentImagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListProjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListProjectsOutput(data, context);
  const response: ListProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListProjectsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListProjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListReportGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportGroupsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListReportGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListReportGroupsOutput(data, context);
  const response: ListReportGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListReportGroupsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListReportGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListReportsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListReportsOutput(data, context);
  const response: ListReportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListReportsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListReportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListReportsForReportGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportsForReportGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListReportsForReportGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListReportsForReportGroupOutput(
    data,
    context
  );
  const response: ListReportsForReportGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListReportsForReportGroupOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListReportsForReportGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportsForReportGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListSharedProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSharedProjectsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListSharedProjectsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSharedProjectsOutput(data, context);
  const response: ListSharedProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSharedProjectsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSharedProjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSharedProjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListSharedReportGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSharedReportGroupsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListSharedReportGroupsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSharedReportGroupsOutput(data, context);
  const response: ListSharedReportGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSharedReportGroupsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSharedReportGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSharedReportGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListSourceCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceCredentialsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListSourceCredentialsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSourceCredentialsOutput(data, context);
  const response: ListSourceCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSourceCredentialsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSourceCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutResourcePolicyOutput(data, context);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutResourcePolicyOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartBuildCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBuildCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartBuildCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartBuildOutput(data, context);
  const response: StartBuildCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartBuildOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartBuildCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBuildCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccountLimitExceededException":
    case "com.amazonaws.codebuild#AccountLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1AccountLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StopBuildCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBuildCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopBuildCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopBuildOutput(data, context);
  const response: StopBuildCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopBuildOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopBuildCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBuildCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateProjectOutput(data, context);
  const response: UpdateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateProjectOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateReportGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReportGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateReportGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateReportGroupOutput(data, context);
  const response: UpdateReportGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateReportGroupOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateReportGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReportGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWebhookCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateWebhookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateWebhookOutput(data, context);
  const response: UpdateWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateWebhookOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateWebhookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWebhookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OAuthProviderException":
    case "com.amazonaws.codebuild#OAuthProviderException":
      response = {
        ...(await deserializeAws_json1_1OAuthProviderExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1AccountLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccountLimitExceededException(
    body,
    context
  );
  const contents: AccountLimitExceededException = {
    name: "AccountLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(
    body,
    context
  );
  const contents: InvalidInputException = {
    name: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OAuthProviderExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OAuthProviderException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OAuthProviderException(
    body,
    context
  );
  const contents: OAuthProviderException = {
    name: "OAuthProviderException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(
    body,
    context
  );
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1BatchDeleteBuildsInput = (
  input: BatchDeleteBuildsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ids !== undefined && {
      ids: serializeAws_json1_1BuildIds(input.ids, context)
    })
  };
};

const serializeAws_json1_1BatchGetBuildsInput = (
  input: BatchGetBuildsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ids !== undefined && {
      ids: serializeAws_json1_1BuildIds(input.ids, context)
    })
  };
};

const serializeAws_json1_1BatchGetProjectsInput = (
  input: BatchGetProjectsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.names !== undefined && {
      names: serializeAws_json1_1ProjectNames(input.names, context)
    })
  };
};

const serializeAws_json1_1BatchGetReportGroupsInput = (
  input: BatchGetReportGroupsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.reportGroupArns !== undefined && {
      reportGroupArns: serializeAws_json1_1ReportGroupArns(
        input.reportGroupArns,
        context
      )
    })
  };
};

const serializeAws_json1_1BatchGetReportsInput = (
  input: BatchGetReportsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.reportArns !== undefined && {
      reportArns: serializeAws_json1_1ReportArns(input.reportArns, context)
    })
  };
};

const serializeAws_json1_1BuildIds = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1CloudWatchLogsConfig = (
  input: CloudWatchLogsConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.groupName !== undefined && { groupName: input.groupName }),
    ...(input.status !== undefined && { status: input.status }),
    ...(input.streamName !== undefined && { streamName: input.streamName })
  };
};

const serializeAws_json1_1CreateProjectInput = (
  input: CreateProjectInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.artifacts !== undefined && {
      artifacts: serializeAws_json1_1ProjectArtifacts(input.artifacts, context)
    }),
    ...(input.badgeEnabled !== undefined && {
      badgeEnabled: input.badgeEnabled
    }),
    ...(input.cache !== undefined && {
      cache: serializeAws_json1_1ProjectCache(input.cache, context)
    }),
    ...(input.description !== undefined && { description: input.description }),
    ...(input.encryptionKey !== undefined && {
      encryptionKey: input.encryptionKey
    }),
    ...(input.environment !== undefined && {
      environment: serializeAws_json1_1ProjectEnvironment(
        input.environment,
        context
      )
    }),
    ...(input.logsConfig !== undefined && {
      logsConfig: serializeAws_json1_1LogsConfig(input.logsConfig, context)
    }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.queuedTimeoutInMinutes !== undefined && {
      queuedTimeoutInMinutes: input.queuedTimeoutInMinutes
    }),
    ...(input.secondaryArtifacts !== undefined && {
      secondaryArtifacts: serializeAws_json1_1ProjectArtifactsList(
        input.secondaryArtifacts,
        context
      )
    }),
    ...(input.secondarySourceVersions !== undefined && {
      secondarySourceVersions: serializeAws_json1_1ProjectSecondarySourceVersions(
        input.secondarySourceVersions,
        context
      )
    }),
    ...(input.secondarySources !== undefined && {
      secondarySources: serializeAws_json1_1ProjectSources(
        input.secondarySources,
        context
      )
    }),
    ...(input.serviceRole !== undefined && { serviceRole: input.serviceRole }),
    ...(input.source !== undefined && {
      source: serializeAws_json1_1ProjectSource(input.source, context)
    }),
    ...(input.sourceVersion !== undefined && {
      sourceVersion: input.sourceVersion
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1TagList(input.tags, context)
    }),
    ...(input.timeoutInMinutes !== undefined && {
      timeoutInMinutes: input.timeoutInMinutes
    }),
    ...(input.vpcConfig !== undefined && {
      vpcConfig: serializeAws_json1_1VpcConfig(input.vpcConfig, context)
    })
  };
};

const serializeAws_json1_1CreateReportGroupInput = (
  input: CreateReportGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.exportConfig !== undefined && {
      exportConfig: serializeAws_json1_1ReportExportConfig(
        input.exportConfig,
        context
      )
    }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.type !== undefined && { type: input.type })
  };
};

const serializeAws_json1_1CreateWebhookInput = (
  input: CreateWebhookInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.branchFilter !== undefined && {
      branchFilter: input.branchFilter
    }),
    ...(input.filterGroups !== undefined && {
      filterGroups: serializeAws_json1_1FilterGroups(
        input.filterGroups,
        context
      )
    }),
    ...(input.projectName !== undefined && { projectName: input.projectName })
  };
};

const serializeAws_json1_1DeleteProjectInput = (
  input: DeleteProjectInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_1DeleteReportGroupInput = (
  input: DeleteReportGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.arn !== undefined && { arn: input.arn })
  };
};

const serializeAws_json1_1DeleteReportInput = (
  input: DeleteReportInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.arn !== undefined && { arn: input.arn })
  };
};

const serializeAws_json1_1DeleteResourcePolicyInput = (
  input: DeleteResourcePolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn })
  };
};

const serializeAws_json1_1DeleteSourceCredentialsInput = (
  input: DeleteSourceCredentialsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.arn !== undefined && { arn: input.arn })
  };
};

const serializeAws_json1_1DeleteWebhookInput = (
  input: DeleteWebhookInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.projectName !== undefined && { projectName: input.projectName })
  };
};

const serializeAws_json1_1DescribeTestCasesInput = (
  input: DescribeTestCasesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.filter !== undefined && {
      filter: serializeAws_json1_1TestCaseFilter(input.filter, context)
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.reportArn !== undefined && { reportArn: input.reportArn })
  };
};

const serializeAws_json1_1EnvironmentVariable = (
  input: EnvironmentVariable,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.type !== undefined && { type: input.type }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_json1_1EnvironmentVariables = (
  input: EnvironmentVariable[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1EnvironmentVariable(entry, context)
  );
};

const serializeAws_json1_1FilterGroup = (
  input: WebhookFilter[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1WebhookFilter(entry, context));
};

const serializeAws_json1_1FilterGroups = (
  input: WebhookFilter[][],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1FilterGroup(entry, context));
};

const serializeAws_json1_1GetResourcePolicyInput = (
  input: GetResourcePolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn })
  };
};

const serializeAws_json1_1GitSubmodulesConfig = (
  input: GitSubmodulesConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.fetchSubmodules !== undefined && {
      fetchSubmodules: input.fetchSubmodules
    })
  };
};

const serializeAws_json1_1ImportSourceCredentialsInput = (
  input: ImportSourceCredentialsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.authType !== undefined && { authType: input.authType }),
    ...(input.serverType !== undefined && { serverType: input.serverType }),
    ...(input.shouldOverwrite !== undefined && {
      shouldOverwrite: input.shouldOverwrite
    }),
    ...(input.token !== undefined && { token: input.token }),
    ...(input.username !== undefined && { username: input.username })
  };
};

const serializeAws_json1_1InvalidateProjectCacheInput = (
  input: InvalidateProjectCacheInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.projectName !== undefined && { projectName: input.projectName })
  };
};

const serializeAws_json1_1ListBuildsForProjectInput = (
  input: ListBuildsForProjectInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.projectName !== undefined && { projectName: input.projectName }),
    ...(input.sortOrder !== undefined && { sortOrder: input.sortOrder })
  };
};

const serializeAws_json1_1ListBuildsInput = (
  input: ListBuildsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.sortOrder !== undefined && { sortOrder: input.sortOrder })
  };
};

const serializeAws_json1_1ListCuratedEnvironmentImagesInput = (
  input: ListCuratedEnvironmentImagesInput,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1ListProjectsInput = (
  input: ListProjectsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.sortBy !== undefined && { sortBy: input.sortBy }),
    ...(input.sortOrder !== undefined && { sortOrder: input.sortOrder })
  };
};

const serializeAws_json1_1ListReportGroupsInput = (
  input: ListReportGroupsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.sortBy !== undefined && { sortBy: input.sortBy }),
    ...(input.sortOrder !== undefined && { sortOrder: input.sortOrder })
  };
};

const serializeAws_json1_1ListReportsForReportGroupInput = (
  input: ListReportsForReportGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.filter !== undefined && {
      filter: serializeAws_json1_1ReportFilter(input.filter, context)
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.reportGroupArn !== undefined && {
      reportGroupArn: input.reportGroupArn
    }),
    ...(input.sortOrder !== undefined && { sortOrder: input.sortOrder })
  };
};

const serializeAws_json1_1ListReportsInput = (
  input: ListReportsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.filter !== undefined && {
      filter: serializeAws_json1_1ReportFilter(input.filter, context)
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.sortOrder !== undefined && { sortOrder: input.sortOrder })
  };
};

const serializeAws_json1_1ListSharedProjectsInput = (
  input: ListSharedProjectsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.sortBy !== undefined && { sortBy: input.sortBy }),
    ...(input.sortOrder !== undefined && { sortOrder: input.sortOrder })
  };
};

const serializeAws_json1_1ListSharedReportGroupsInput = (
  input: ListSharedReportGroupsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.sortBy !== undefined && { sortBy: input.sortBy }),
    ...(input.sortOrder !== undefined && { sortOrder: input.sortOrder })
  };
};

const serializeAws_json1_1ListSourceCredentialsInput = (
  input: ListSourceCredentialsInput,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1LogsConfig = (
  input: LogsConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.cloudWatchLogs !== undefined && {
      cloudWatchLogs: serializeAws_json1_1CloudWatchLogsConfig(
        input.cloudWatchLogs,
        context
      )
    }),
    ...(input.s3Logs !== undefined && {
      s3Logs: serializeAws_json1_1S3LogsConfig(input.s3Logs, context)
    })
  };
};

const serializeAws_json1_1ProjectArtifacts = (
  input: ProjectArtifacts,
  context: __SerdeContext
): any => {
  return {
    ...(input.artifactIdentifier !== undefined && {
      artifactIdentifier: input.artifactIdentifier
    }),
    ...(input.encryptionDisabled !== undefined && {
      encryptionDisabled: input.encryptionDisabled
    }),
    ...(input.location !== undefined && { location: input.location }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.namespaceType !== undefined && {
      namespaceType: input.namespaceType
    }),
    ...(input.overrideArtifactName !== undefined && {
      overrideArtifactName: input.overrideArtifactName
    }),
    ...(input.packaging !== undefined && { packaging: input.packaging }),
    ...(input.path !== undefined && { path: input.path }),
    ...(input.type !== undefined && { type: input.type })
  };
};

const serializeAws_json1_1ProjectArtifactsList = (
  input: ProjectArtifacts[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1ProjectArtifacts(entry, context)
  );
};

const serializeAws_json1_1ProjectCache = (
  input: ProjectCache,
  context: __SerdeContext
): any => {
  return {
    ...(input.location !== undefined && { location: input.location }),
    ...(input.modes !== undefined && {
      modes: serializeAws_json1_1ProjectCacheModes(input.modes, context)
    }),
    ...(input.type !== undefined && { type: input.type })
  };
};

const serializeAws_json1_1ProjectCacheModes = (
  input: (CacheMode | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ProjectEnvironment = (
  input: ProjectEnvironment,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificate !== undefined && { certificate: input.certificate }),
    ...(input.computeType !== undefined && { computeType: input.computeType }),
    ...(input.environmentVariables !== undefined && {
      environmentVariables: serializeAws_json1_1EnvironmentVariables(
        input.environmentVariables,
        context
      )
    }),
    ...(input.image !== undefined && { image: input.image }),
    ...(input.imagePullCredentialsType !== undefined && {
      imagePullCredentialsType: input.imagePullCredentialsType
    }),
    ...(input.privilegedMode !== undefined && {
      privilegedMode: input.privilegedMode
    }),
    ...(input.registryCredential !== undefined && {
      registryCredential: serializeAws_json1_1RegistryCredential(
        input.registryCredential,
        context
      )
    }),
    ...(input.type !== undefined && { type: input.type })
  };
};

const serializeAws_json1_1ProjectNames = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ProjectSecondarySourceVersions = (
  input: ProjectSourceVersion[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1ProjectSourceVersion(entry, context)
  );
};

const serializeAws_json1_1ProjectSource = (
  input: ProjectSource,
  context: __SerdeContext
): any => {
  return {
    ...(input.auth !== undefined && {
      auth: serializeAws_json1_1SourceAuth(input.auth, context)
    }),
    ...(input.buildspec !== undefined && { buildspec: input.buildspec }),
    ...(input.gitCloneDepth !== undefined && {
      gitCloneDepth: input.gitCloneDepth
    }),
    ...(input.gitSubmodulesConfig !== undefined && {
      gitSubmodulesConfig: serializeAws_json1_1GitSubmodulesConfig(
        input.gitSubmodulesConfig,
        context
      )
    }),
    ...(input.insecureSsl !== undefined && { insecureSsl: input.insecureSsl }),
    ...(input.location !== undefined && { location: input.location }),
    ...(input.reportBuildStatus !== undefined && {
      reportBuildStatus: input.reportBuildStatus
    }),
    ...(input.sourceIdentifier !== undefined && {
      sourceIdentifier: input.sourceIdentifier
    }),
    ...(input.type !== undefined && { type: input.type })
  };
};

const serializeAws_json1_1ProjectSources = (
  input: ProjectSource[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1ProjectSource(entry, context));
};

const serializeAws_json1_1ProjectSourceVersion = (
  input: ProjectSourceVersion,
  context: __SerdeContext
): any => {
  return {
    ...(input.sourceIdentifier !== undefined && {
      sourceIdentifier: input.sourceIdentifier
    }),
    ...(input.sourceVersion !== undefined && {
      sourceVersion: input.sourceVersion
    })
  };
};

const serializeAws_json1_1PutResourcePolicyInput = (
  input: PutResourcePolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.policy !== undefined && { policy: input.policy }),
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn })
  };
};

const serializeAws_json1_1RegistryCredential = (
  input: RegistryCredential,
  context: __SerdeContext
): any => {
  return {
    ...(input.credential !== undefined && { credential: input.credential }),
    ...(input.credentialProvider !== undefined && {
      credentialProvider: input.credentialProvider
    })
  };
};

const serializeAws_json1_1ReportArns = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ReportExportConfig = (
  input: ReportExportConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.exportConfigType !== undefined && {
      exportConfigType: input.exportConfigType
    }),
    ...(input.s3Destination !== undefined && {
      s3Destination: serializeAws_json1_1S3ReportExportConfig(
        input.s3Destination,
        context
      )
    })
  };
};

const serializeAws_json1_1ReportFilter = (
  input: ReportFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.status !== undefined && { status: input.status })
  };
};

const serializeAws_json1_1ReportGroupArns = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1S3LogsConfig = (
  input: S3LogsConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.encryptionDisabled !== undefined && {
      encryptionDisabled: input.encryptionDisabled
    }),
    ...(input.location !== undefined && { location: input.location }),
    ...(input.status !== undefined && { status: input.status })
  };
};

const serializeAws_json1_1S3ReportExportConfig = (
  input: S3ReportExportConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucket !== undefined && { bucket: input.bucket }),
    ...(input.encryptionDisabled !== undefined && {
      encryptionDisabled: input.encryptionDisabled
    }),
    ...(input.encryptionKey !== undefined && {
      encryptionKey: input.encryptionKey
    }),
    ...(input.packaging !== undefined && { packaging: input.packaging }),
    ...(input.path !== undefined && { path: input.path })
  };
};

const serializeAws_json1_1SecurityGroupIds = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1SourceAuth = (
  input: SourceAuth,
  context: __SerdeContext
): any => {
  return {
    ...(input.resource !== undefined && { resource: input.resource }),
    ...(input.type !== undefined && { type: input.type })
  };
};

const serializeAws_json1_1StartBuildInput = (
  input: StartBuildInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.artifactsOverride !== undefined && {
      artifactsOverride: serializeAws_json1_1ProjectArtifacts(
        input.artifactsOverride,
        context
      )
    }),
    ...(input.buildspecOverride !== undefined && {
      buildspecOverride: input.buildspecOverride
    }),
    ...(input.cacheOverride !== undefined && {
      cacheOverride: serializeAws_json1_1ProjectCache(
        input.cacheOverride,
        context
      )
    }),
    ...(input.certificateOverride !== undefined && {
      certificateOverride: input.certificateOverride
    }),
    ...(input.computeTypeOverride !== undefined && {
      computeTypeOverride: input.computeTypeOverride
    }),
    ...(input.encryptionKeyOverride !== undefined && {
      encryptionKeyOverride: input.encryptionKeyOverride
    }),
    ...(input.environmentTypeOverride !== undefined && {
      environmentTypeOverride: input.environmentTypeOverride
    }),
    ...(input.environmentVariablesOverride !== undefined && {
      environmentVariablesOverride: serializeAws_json1_1EnvironmentVariables(
        input.environmentVariablesOverride,
        context
      )
    }),
    ...(input.gitCloneDepthOverride !== undefined && {
      gitCloneDepthOverride: input.gitCloneDepthOverride
    }),
    ...(input.gitSubmodulesConfigOverride !== undefined && {
      gitSubmodulesConfigOverride: serializeAws_json1_1GitSubmodulesConfig(
        input.gitSubmodulesConfigOverride,
        context
      )
    }),
    ...(input.idempotencyToken !== undefined && {
      idempotencyToken: input.idempotencyToken
    }),
    ...(input.imageOverride !== undefined && {
      imageOverride: input.imageOverride
    }),
    ...(input.imagePullCredentialsTypeOverride !== undefined && {
      imagePullCredentialsTypeOverride: input.imagePullCredentialsTypeOverride
    }),
    ...(input.insecureSslOverride !== undefined && {
      insecureSslOverride: input.insecureSslOverride
    }),
    ...(input.logsConfigOverride !== undefined && {
      logsConfigOverride: serializeAws_json1_1LogsConfig(
        input.logsConfigOverride,
        context
      )
    }),
    ...(input.privilegedModeOverride !== undefined && {
      privilegedModeOverride: input.privilegedModeOverride
    }),
    ...(input.projectName !== undefined && { projectName: input.projectName }),
    ...(input.queuedTimeoutInMinutesOverride !== undefined && {
      queuedTimeoutInMinutesOverride: input.queuedTimeoutInMinutesOverride
    }),
    ...(input.registryCredentialOverride !== undefined && {
      registryCredentialOverride: serializeAws_json1_1RegistryCredential(
        input.registryCredentialOverride,
        context
      )
    }),
    ...(input.reportBuildStatusOverride !== undefined && {
      reportBuildStatusOverride: input.reportBuildStatusOverride
    }),
    ...(input.secondaryArtifactsOverride !== undefined && {
      secondaryArtifactsOverride: serializeAws_json1_1ProjectArtifactsList(
        input.secondaryArtifactsOverride,
        context
      )
    }),
    ...(input.secondarySourcesOverride !== undefined && {
      secondarySourcesOverride: serializeAws_json1_1ProjectSources(
        input.secondarySourcesOverride,
        context
      )
    }),
    ...(input.secondarySourcesVersionOverride !== undefined && {
      secondarySourcesVersionOverride: serializeAws_json1_1ProjectSecondarySourceVersions(
        input.secondarySourcesVersionOverride,
        context
      )
    }),
    ...(input.serviceRoleOverride !== undefined && {
      serviceRoleOverride: input.serviceRoleOverride
    }),
    ...(input.sourceAuthOverride !== undefined && {
      sourceAuthOverride: serializeAws_json1_1SourceAuth(
        input.sourceAuthOverride,
        context
      )
    }),
    ...(input.sourceLocationOverride !== undefined && {
      sourceLocationOverride: input.sourceLocationOverride
    }),
    ...(input.sourceTypeOverride !== undefined && {
      sourceTypeOverride: input.sourceTypeOverride
    }),
    ...(input.sourceVersion !== undefined && {
      sourceVersion: input.sourceVersion
    }),
    ...(input.timeoutInMinutesOverride !== undefined && {
      timeoutInMinutesOverride: input.timeoutInMinutesOverride
    })
  };
};

const serializeAws_json1_1StopBuildInput = (
  input: StopBuildInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.id !== undefined && { id: input.id })
  };
};

const serializeAws_json1_1Subnets = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key !== undefined && { key: input.key }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_json1_1TagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TestCaseFilter = (
  input: TestCaseFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.status !== undefined && { status: input.status })
  };
};

const serializeAws_json1_1UpdateProjectInput = (
  input: UpdateProjectInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.artifacts !== undefined && {
      artifacts: serializeAws_json1_1ProjectArtifacts(input.artifacts, context)
    }),
    ...(input.badgeEnabled !== undefined && {
      badgeEnabled: input.badgeEnabled
    }),
    ...(input.cache !== undefined && {
      cache: serializeAws_json1_1ProjectCache(input.cache, context)
    }),
    ...(input.description !== undefined && { description: input.description }),
    ...(input.encryptionKey !== undefined && {
      encryptionKey: input.encryptionKey
    }),
    ...(input.environment !== undefined && {
      environment: serializeAws_json1_1ProjectEnvironment(
        input.environment,
        context
      )
    }),
    ...(input.logsConfig !== undefined && {
      logsConfig: serializeAws_json1_1LogsConfig(input.logsConfig, context)
    }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.queuedTimeoutInMinutes !== undefined && {
      queuedTimeoutInMinutes: input.queuedTimeoutInMinutes
    }),
    ...(input.secondaryArtifacts !== undefined && {
      secondaryArtifacts: serializeAws_json1_1ProjectArtifactsList(
        input.secondaryArtifacts,
        context
      )
    }),
    ...(input.secondarySourceVersions !== undefined && {
      secondarySourceVersions: serializeAws_json1_1ProjectSecondarySourceVersions(
        input.secondarySourceVersions,
        context
      )
    }),
    ...(input.secondarySources !== undefined && {
      secondarySources: serializeAws_json1_1ProjectSources(
        input.secondarySources,
        context
      )
    }),
    ...(input.serviceRole !== undefined && { serviceRole: input.serviceRole }),
    ...(input.source !== undefined && {
      source: serializeAws_json1_1ProjectSource(input.source, context)
    }),
    ...(input.sourceVersion !== undefined && {
      sourceVersion: input.sourceVersion
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1TagList(input.tags, context)
    }),
    ...(input.timeoutInMinutes !== undefined && {
      timeoutInMinutes: input.timeoutInMinutes
    }),
    ...(input.vpcConfig !== undefined && {
      vpcConfig: serializeAws_json1_1VpcConfig(input.vpcConfig, context)
    })
  };
};

const serializeAws_json1_1UpdateReportGroupInput = (
  input: UpdateReportGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.arn !== undefined && { arn: input.arn }),
    ...(input.exportConfig !== undefined && {
      exportConfig: serializeAws_json1_1ReportExportConfig(
        input.exportConfig,
        context
      )
    })
  };
};

const serializeAws_json1_1UpdateWebhookInput = (
  input: UpdateWebhookInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.branchFilter !== undefined && {
      branchFilter: input.branchFilter
    }),
    ...(input.filterGroups !== undefined && {
      filterGroups: serializeAws_json1_1FilterGroups(
        input.filterGroups,
        context
      )
    }),
    ...(input.projectName !== undefined && { projectName: input.projectName }),
    ...(input.rotateSecret !== undefined && {
      rotateSecret: input.rotateSecret
    })
  };
};

const serializeAws_json1_1VpcConfig = (
  input: VpcConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.securityGroupIds !== undefined && {
      securityGroupIds: serializeAws_json1_1SecurityGroupIds(
        input.securityGroupIds,
        context
      )
    }),
    ...(input.subnets !== undefined && {
      subnets: serializeAws_json1_1Subnets(input.subnets, context)
    }),
    ...(input.vpcId !== undefined && { vpcId: input.vpcId })
  };
};

const serializeAws_json1_1WebhookFilter = (
  input: WebhookFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.excludeMatchedPattern !== undefined && {
      excludeMatchedPattern: input.excludeMatchedPattern
    }),
    ...(input.pattern !== undefined && { pattern: input.pattern }),
    ...(input.type !== undefined && { type: input.type })
  };
};

const deserializeAws_json1_1AccountLimitExceededException = (
  output: any,
  context: __SerdeContext
): AccountLimitExceededException => {
  return {
    __type: "AccountLimitExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchDeleteBuildsOutput = (
  output: any,
  context: __SerdeContext
): BatchDeleteBuildsOutput => {
  return {
    __type: "BatchDeleteBuildsOutput",
    buildsDeleted:
      output.buildsDeleted !== undefined && output.buildsDeleted !== null
        ? deserializeAws_json1_1BuildIds(output.buildsDeleted, context)
        : undefined,
    buildsNotDeleted:
      output.buildsNotDeleted !== undefined && output.buildsNotDeleted !== null
        ? deserializeAws_json1_1BuildsNotDeleted(
            output.buildsNotDeleted,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchGetBuildsOutput = (
  output: any,
  context: __SerdeContext
): BatchGetBuildsOutput => {
  return {
    __type: "BatchGetBuildsOutput",
    builds:
      output.builds !== undefined && output.builds !== null
        ? deserializeAws_json1_1Builds(output.builds, context)
        : undefined,
    buildsNotFound:
      output.buildsNotFound !== undefined && output.buildsNotFound !== null
        ? deserializeAws_json1_1BuildIds(output.buildsNotFound, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchGetProjectsOutput = (
  output: any,
  context: __SerdeContext
): BatchGetProjectsOutput => {
  return {
    __type: "BatchGetProjectsOutput",
    projects:
      output.projects !== undefined && output.projects !== null
        ? deserializeAws_json1_1Projects(output.projects, context)
        : undefined,
    projectsNotFound:
      output.projectsNotFound !== undefined && output.projectsNotFound !== null
        ? deserializeAws_json1_1ProjectNames(output.projectsNotFound, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchGetReportGroupsOutput = (
  output: any,
  context: __SerdeContext
): BatchGetReportGroupsOutput => {
  return {
    __type: "BatchGetReportGroupsOutput",
    reportGroups:
      output.reportGroups !== undefined && output.reportGroups !== null
        ? deserializeAws_json1_1ReportGroups(output.reportGroups, context)
        : undefined,
    reportGroupsNotFound:
      output.reportGroupsNotFound !== undefined &&
      output.reportGroupsNotFound !== null
        ? deserializeAws_json1_1ReportGroupArns(
            output.reportGroupsNotFound,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchGetReportsOutput = (
  output: any,
  context: __SerdeContext
): BatchGetReportsOutput => {
  return {
    __type: "BatchGetReportsOutput",
    reports:
      output.reports !== undefined && output.reports !== null
        ? deserializeAws_json1_1Reports(output.reports, context)
        : undefined,
    reportsNotFound:
      output.reportsNotFound !== undefined && output.reportsNotFound !== null
        ? deserializeAws_json1_1ReportArns(output.reportsNotFound, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1Build = (
  output: any,
  context: __SerdeContext
): Build => {
  return {
    __type: "Build",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    artifacts:
      output.artifacts !== undefined && output.artifacts !== null
        ? deserializeAws_json1_1BuildArtifacts(output.artifacts, context)
        : undefined,
    buildComplete:
      output.buildComplete !== undefined && output.buildComplete !== null
        ? output.buildComplete
        : undefined,
    buildNumber:
      output.buildNumber !== undefined && output.buildNumber !== null
        ? output.buildNumber
        : undefined,
    buildStatus:
      output.buildStatus !== undefined && output.buildStatus !== null
        ? output.buildStatus
        : undefined,
    cache:
      output.cache !== undefined && output.cache !== null
        ? deserializeAws_json1_1ProjectCache(output.cache, context)
        : undefined,
    currentPhase:
      output.currentPhase !== undefined && output.currentPhase !== null
        ? output.currentPhase
        : undefined,
    encryptionKey:
      output.encryptionKey !== undefined && output.encryptionKey !== null
        ? output.encryptionKey
        : undefined,
    endTime:
      output.endTime !== undefined && output.endTime !== null
        ? new Date(Math.round(output.endTime * 1000))
        : undefined,
    environment:
      output.environment !== undefined && output.environment !== null
        ? deserializeAws_json1_1ProjectEnvironment(output.environment, context)
        : undefined,
    exportedEnvironmentVariables:
      output.exportedEnvironmentVariables !== undefined &&
      output.exportedEnvironmentVariables !== null
        ? deserializeAws_json1_1ExportedEnvironmentVariables(
            output.exportedEnvironmentVariables,
            context
          )
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    initiator:
      output.initiator !== undefined && output.initiator !== null
        ? output.initiator
        : undefined,
    logs:
      output.logs !== undefined && output.logs !== null
        ? deserializeAws_json1_1LogsLocation(output.logs, context)
        : undefined,
    networkInterface:
      output.networkInterface !== undefined && output.networkInterface !== null
        ? deserializeAws_json1_1NetworkInterface(
            output.networkInterface,
            context
          )
        : undefined,
    phases:
      output.phases !== undefined && output.phases !== null
        ? deserializeAws_json1_1BuildPhases(output.phases, context)
        : undefined,
    projectName:
      output.projectName !== undefined && output.projectName !== null
        ? output.projectName
        : undefined,
    queuedTimeoutInMinutes:
      output.queuedTimeoutInMinutes !== undefined &&
      output.queuedTimeoutInMinutes !== null
        ? output.queuedTimeoutInMinutes
        : undefined,
    reportArns:
      output.reportArns !== undefined && output.reportArns !== null
        ? deserializeAws_json1_1BuildReportArns(output.reportArns, context)
        : undefined,
    resolvedSourceVersion:
      output.resolvedSourceVersion !== undefined &&
      output.resolvedSourceVersion !== null
        ? output.resolvedSourceVersion
        : undefined,
    secondaryArtifacts:
      output.secondaryArtifacts !== undefined &&
      output.secondaryArtifacts !== null
        ? deserializeAws_json1_1BuildArtifactsList(
            output.secondaryArtifacts,
            context
          )
        : undefined,
    secondarySourceVersions:
      output.secondarySourceVersions !== undefined &&
      output.secondarySourceVersions !== null
        ? deserializeAws_json1_1ProjectSecondarySourceVersions(
            output.secondarySourceVersions,
            context
          )
        : undefined,
    secondarySources:
      output.secondarySources !== undefined && output.secondarySources !== null
        ? deserializeAws_json1_1ProjectSources(output.secondarySources, context)
        : undefined,
    serviceRole:
      output.serviceRole !== undefined && output.serviceRole !== null
        ? output.serviceRole
        : undefined,
    source:
      output.source !== undefined && output.source !== null
        ? deserializeAws_json1_1ProjectSource(output.source, context)
        : undefined,
    sourceVersion:
      output.sourceVersion !== undefined && output.sourceVersion !== null
        ? output.sourceVersion
        : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    timeoutInMinutes:
      output.timeoutInMinutes !== undefined && output.timeoutInMinutes !== null
        ? output.timeoutInMinutes
        : undefined,
    vpcConfig:
      output.vpcConfig !== undefined && output.vpcConfig !== null
        ? deserializeAws_json1_1VpcConfig(output.vpcConfig, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1BuildArtifacts = (
  output: any,
  context: __SerdeContext
): BuildArtifacts => {
  return {
    __type: "BuildArtifacts",
    artifactIdentifier:
      output.artifactIdentifier !== undefined &&
      output.artifactIdentifier !== null
        ? output.artifactIdentifier
        : undefined,
    encryptionDisabled:
      output.encryptionDisabled !== undefined &&
      output.encryptionDisabled !== null
        ? output.encryptionDisabled
        : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? output.location
        : undefined,
    md5sum:
      output.md5sum !== undefined && output.md5sum !== null
        ? output.md5sum
        : undefined,
    overrideArtifactName:
      output.overrideArtifactName !== undefined &&
      output.overrideArtifactName !== null
        ? output.overrideArtifactName
        : undefined,
    sha256sum:
      output.sha256sum !== undefined && output.sha256sum !== null
        ? output.sha256sum
        : undefined
  } as any;
};

const deserializeAws_json1_1BuildArtifactsList = (
  output: any,
  context: __SerdeContext
): BuildArtifacts[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BuildArtifacts(entry, context)
  );
};

const deserializeAws_json1_1BuildIds = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1BuildNotDeleted = (
  output: any,
  context: __SerdeContext
): BuildNotDeleted => {
  return {
    __type: "BuildNotDeleted",
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    statusCode:
      output.statusCode !== undefined && output.statusCode !== null
        ? output.statusCode
        : undefined
  } as any;
};

const deserializeAws_json1_1BuildPhase = (
  output: any,
  context: __SerdeContext
): BuildPhase => {
  return {
    __type: "BuildPhase",
    contexts:
      output.contexts !== undefined && output.contexts !== null
        ? deserializeAws_json1_1PhaseContexts(output.contexts, context)
        : undefined,
    durationInSeconds:
      output.durationInSeconds !== undefined &&
      output.durationInSeconds !== null
        ? output.durationInSeconds
        : undefined,
    endTime:
      output.endTime !== undefined && output.endTime !== null
        ? new Date(Math.round(output.endTime * 1000))
        : undefined,
    phaseStatus:
      output.phaseStatus !== undefined && output.phaseStatus !== null
        ? output.phaseStatus
        : undefined,
    phaseType:
      output.phaseType !== undefined && output.phaseType !== null
        ? output.phaseType
        : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1BuildPhases = (
  output: any,
  context: __SerdeContext
): BuildPhase[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BuildPhase(entry, context)
  );
};

const deserializeAws_json1_1BuildReportArns = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Builds = (
  output: any,
  context: __SerdeContext
): Build[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Build(entry, context)
  );
};

const deserializeAws_json1_1BuildsNotDeleted = (
  output: any,
  context: __SerdeContext
): BuildNotDeleted[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BuildNotDeleted(entry, context)
  );
};

const deserializeAws_json1_1CloudWatchLogsConfig = (
  output: any,
  context: __SerdeContext
): CloudWatchLogsConfig => {
  return {
    __type: "CloudWatchLogsConfig",
    groupName:
      output.groupName !== undefined && output.groupName !== null
        ? output.groupName
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    streamName:
      output.streamName !== undefined && output.streamName !== null
        ? output.streamName
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateProjectOutput = (
  output: any,
  context: __SerdeContext
): CreateProjectOutput => {
  return {
    __type: "CreateProjectOutput",
    project:
      output.project !== undefined && output.project !== null
        ? deserializeAws_json1_1Project(output.project, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateReportGroupOutput = (
  output: any,
  context: __SerdeContext
): CreateReportGroupOutput => {
  return {
    __type: "CreateReportGroupOutput",
    reportGroup:
      output.reportGroup !== undefined && output.reportGroup !== null
        ? deserializeAws_json1_1ReportGroup(output.reportGroup, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateWebhookOutput = (
  output: any,
  context: __SerdeContext
): CreateWebhookOutput => {
  return {
    __type: "CreateWebhookOutput",
    webhook:
      output.webhook !== undefined && output.webhook !== null
        ? deserializeAws_json1_1Webhook(output.webhook, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteProjectOutput = (
  output: any,
  context: __SerdeContext
): DeleteProjectOutput => {
  return {
    __type: "DeleteProjectOutput"
  } as any;
};

const deserializeAws_json1_1DeleteReportGroupOutput = (
  output: any,
  context: __SerdeContext
): DeleteReportGroupOutput => {
  return {
    __type: "DeleteReportGroupOutput"
  } as any;
};

const deserializeAws_json1_1DeleteReportOutput = (
  output: any,
  context: __SerdeContext
): DeleteReportOutput => {
  return {
    __type: "DeleteReportOutput"
  } as any;
};

const deserializeAws_json1_1DeleteResourcePolicyOutput = (
  output: any,
  context: __SerdeContext
): DeleteResourcePolicyOutput => {
  return {
    __type: "DeleteResourcePolicyOutput"
  } as any;
};

const deserializeAws_json1_1DeleteSourceCredentialsOutput = (
  output: any,
  context: __SerdeContext
): DeleteSourceCredentialsOutput => {
  return {
    __type: "DeleteSourceCredentialsOutput",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined
  } as any;
};

const deserializeAws_json1_1DeleteWebhookOutput = (
  output: any,
  context: __SerdeContext
): DeleteWebhookOutput => {
  return {
    __type: "DeleteWebhookOutput"
  } as any;
};

const deserializeAws_json1_1DescribeTestCasesOutput = (
  output: any,
  context: __SerdeContext
): DescribeTestCasesOutput => {
  return {
    __type: "DescribeTestCasesOutput",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    testCases:
      output.testCases !== undefined && output.testCases !== null
        ? deserializeAws_json1_1TestCases(output.testCases, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1EnvironmentImage = (
  output: any,
  context: __SerdeContext
): EnvironmentImage => {
  return {
    __type: "EnvironmentImage",
    description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    versions:
      output.versions !== undefined && output.versions !== null
        ? deserializeAws_json1_1ImageVersions(output.versions, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1EnvironmentImages = (
  output: any,
  context: __SerdeContext
): EnvironmentImage[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EnvironmentImage(entry, context)
  );
};

const deserializeAws_json1_1EnvironmentLanguage = (
  output: any,
  context: __SerdeContext
): EnvironmentLanguage => {
  return {
    __type: "EnvironmentLanguage",
    images:
      output.images !== undefined && output.images !== null
        ? deserializeAws_json1_1EnvironmentImages(output.images, context)
        : undefined,
    language:
      output.language !== undefined && output.language !== null
        ? output.language
        : undefined
  } as any;
};

const deserializeAws_json1_1EnvironmentLanguages = (
  output: any,
  context: __SerdeContext
): EnvironmentLanguage[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EnvironmentLanguage(entry, context)
  );
};

const deserializeAws_json1_1EnvironmentPlatform = (
  output: any,
  context: __SerdeContext
): EnvironmentPlatform => {
  return {
    __type: "EnvironmentPlatform",
    languages:
      output.languages !== undefined && output.languages !== null
        ? deserializeAws_json1_1EnvironmentLanguages(output.languages, context)
        : undefined,
    platform:
      output.platform !== undefined && output.platform !== null
        ? output.platform
        : undefined
  } as any;
};

const deserializeAws_json1_1EnvironmentPlatforms = (
  output: any,
  context: __SerdeContext
): EnvironmentPlatform[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EnvironmentPlatform(entry, context)
  );
};

const deserializeAws_json1_1EnvironmentVariable = (
  output: any,
  context: __SerdeContext
): EnvironmentVariable => {
  return {
    __type: "EnvironmentVariable",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_json1_1EnvironmentVariables = (
  output: any,
  context: __SerdeContext
): EnvironmentVariable[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EnvironmentVariable(entry, context)
  );
};

const deserializeAws_json1_1ExportedEnvironmentVariable = (
  output: any,
  context: __SerdeContext
): ExportedEnvironmentVariable => {
  return {
    __type: "ExportedEnvironmentVariable",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_json1_1ExportedEnvironmentVariables = (
  output: any,
  context: __SerdeContext
): ExportedEnvironmentVariable[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ExportedEnvironmentVariable(entry, context)
  );
};

const deserializeAws_json1_1FilterGroup = (
  output: any,
  context: __SerdeContext
): WebhookFilter[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1WebhookFilter(entry, context)
  );
};

const deserializeAws_json1_1FilterGroups = (
  output: any,
  context: __SerdeContext
): WebhookFilter[][] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FilterGroup(entry, context)
  );
};

const deserializeAws_json1_1GetResourcePolicyOutput = (
  output: any,
  context: __SerdeContext
): GetResourcePolicyOutput => {
  return {
    __type: "GetResourcePolicyOutput",
    policy:
      output.policy !== undefined && output.policy !== null
        ? output.policy
        : undefined
  } as any;
};

const deserializeAws_json1_1GitSubmodulesConfig = (
  output: any,
  context: __SerdeContext
): GitSubmodulesConfig => {
  return {
    __type: "GitSubmodulesConfig",
    fetchSubmodules:
      output.fetchSubmodules !== undefined && output.fetchSubmodules !== null
        ? output.fetchSubmodules
        : undefined
  } as any;
};

const deserializeAws_json1_1ImageVersions = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ImportSourceCredentialsOutput = (
  output: any,
  context: __SerdeContext
): ImportSourceCredentialsOutput => {
  return {
    __type: "ImportSourceCredentialsOutput",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined
  } as any;
};

const deserializeAws_json1_1InvalidateProjectCacheOutput = (
  output: any,
  context: __SerdeContext
): InvalidateProjectCacheOutput => {
  return {
    __type: "InvalidateProjectCacheOutput"
  } as any;
};

const deserializeAws_json1_1InvalidInputException = (
  output: any,
  context: __SerdeContext
): InvalidInputException => {
  return {
    __type: "InvalidInputException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ListBuildsForProjectOutput = (
  output: any,
  context: __SerdeContext
): ListBuildsForProjectOutput => {
  return {
    __type: "ListBuildsForProjectOutput",
    ids:
      output.ids !== undefined && output.ids !== null
        ? deserializeAws_json1_1BuildIds(output.ids, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListBuildsOutput = (
  output: any,
  context: __SerdeContext
): ListBuildsOutput => {
  return {
    __type: "ListBuildsOutput",
    ids:
      output.ids !== undefined && output.ids !== null
        ? deserializeAws_json1_1BuildIds(output.ids, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListCuratedEnvironmentImagesOutput = (
  output: any,
  context: __SerdeContext
): ListCuratedEnvironmentImagesOutput => {
  return {
    __type: "ListCuratedEnvironmentImagesOutput",
    platforms:
      output.platforms !== undefined && output.platforms !== null
        ? deserializeAws_json1_1EnvironmentPlatforms(output.platforms, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListProjectsOutput = (
  output: any,
  context: __SerdeContext
): ListProjectsOutput => {
  return {
    __type: "ListProjectsOutput",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    projects:
      output.projects !== undefined && output.projects !== null
        ? deserializeAws_json1_1ProjectNames(output.projects, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListReportGroupsOutput = (
  output: any,
  context: __SerdeContext
): ListReportGroupsOutput => {
  return {
    __type: "ListReportGroupsOutput",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    reportGroups:
      output.reportGroups !== undefined && output.reportGroups !== null
        ? deserializeAws_json1_1ReportGroupArns(output.reportGroups, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListReportsForReportGroupOutput = (
  output: any,
  context: __SerdeContext
): ListReportsForReportGroupOutput => {
  return {
    __type: "ListReportsForReportGroupOutput",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    reports:
      output.reports !== undefined && output.reports !== null
        ? deserializeAws_json1_1ReportArns(output.reports, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListReportsOutput = (
  output: any,
  context: __SerdeContext
): ListReportsOutput => {
  return {
    __type: "ListReportsOutput",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    reports:
      output.reports !== undefined && output.reports !== null
        ? deserializeAws_json1_1ReportArns(output.reports, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListSharedProjectsOutput = (
  output: any,
  context: __SerdeContext
): ListSharedProjectsOutput => {
  return {
    __type: "ListSharedProjectsOutput",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    projects:
      output.projects !== undefined && output.projects !== null
        ? deserializeAws_json1_1ProjectArns(output.projects, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListSharedReportGroupsOutput = (
  output: any,
  context: __SerdeContext
): ListSharedReportGroupsOutput => {
  return {
    __type: "ListSharedReportGroupsOutput",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    reportGroups:
      output.reportGroups !== undefined && output.reportGroups !== null
        ? deserializeAws_json1_1ReportGroupArns(output.reportGroups, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListSourceCredentialsOutput = (
  output: any,
  context: __SerdeContext
): ListSourceCredentialsOutput => {
  return {
    __type: "ListSourceCredentialsOutput",
    sourceCredentialsInfos:
      output.sourceCredentialsInfos !== undefined &&
      output.sourceCredentialsInfos !== null
        ? deserializeAws_json1_1SourceCredentialsInfos(
            output.sourceCredentialsInfos,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1LogsConfig = (
  output: any,
  context: __SerdeContext
): LogsConfig => {
  return {
    __type: "LogsConfig",
    cloudWatchLogs:
      output.cloudWatchLogs !== undefined && output.cloudWatchLogs !== null
        ? deserializeAws_json1_1CloudWatchLogsConfig(
            output.cloudWatchLogs,
            context
          )
        : undefined,
    s3Logs:
      output.s3Logs !== undefined && output.s3Logs !== null
        ? deserializeAws_json1_1S3LogsConfig(output.s3Logs, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1LogsLocation = (
  output: any,
  context: __SerdeContext
): LogsLocation => {
  return {
    __type: "LogsLocation",
    cloudWatchLogs:
      output.cloudWatchLogs !== undefined && output.cloudWatchLogs !== null
        ? deserializeAws_json1_1CloudWatchLogsConfig(
            output.cloudWatchLogs,
            context
          )
        : undefined,
    cloudWatchLogsArn:
      output.cloudWatchLogsArn !== undefined &&
      output.cloudWatchLogsArn !== null
        ? output.cloudWatchLogsArn
        : undefined,
    deepLink:
      output.deepLink !== undefined && output.deepLink !== null
        ? output.deepLink
        : undefined,
    groupName:
      output.groupName !== undefined && output.groupName !== null
        ? output.groupName
        : undefined,
    s3DeepLink:
      output.s3DeepLink !== undefined && output.s3DeepLink !== null
        ? output.s3DeepLink
        : undefined,
    s3Logs:
      output.s3Logs !== undefined && output.s3Logs !== null
        ? deserializeAws_json1_1S3LogsConfig(output.s3Logs, context)
        : undefined,
    s3LogsArn:
      output.s3LogsArn !== undefined && output.s3LogsArn !== null
        ? output.s3LogsArn
        : undefined,
    streamName:
      output.streamName !== undefined && output.streamName !== null
        ? output.streamName
        : undefined
  } as any;
};

const deserializeAws_json1_1NetworkInterface = (
  output: any,
  context: __SerdeContext
): NetworkInterface => {
  return {
    __type: "NetworkInterface",
    networkInterfaceId:
      output.networkInterfaceId !== undefined &&
      output.networkInterfaceId !== null
        ? output.networkInterfaceId
        : undefined,
    subnetId:
      output.subnetId !== undefined && output.subnetId !== null
        ? output.subnetId
        : undefined
  } as any;
};

const deserializeAws_json1_1OAuthProviderException = (
  output: any,
  context: __SerdeContext
): OAuthProviderException => {
  return {
    __type: "OAuthProviderException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1PhaseContext = (
  output: any,
  context: __SerdeContext
): PhaseContext => {
  return {
    __type: "PhaseContext",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined,
    statusCode:
      output.statusCode !== undefined && output.statusCode !== null
        ? output.statusCode
        : undefined
  } as any;
};

const deserializeAws_json1_1PhaseContexts = (
  output: any,
  context: __SerdeContext
): PhaseContext[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PhaseContext(entry, context)
  );
};

const deserializeAws_json1_1Project = (
  output: any,
  context: __SerdeContext
): Project => {
  return {
    __type: "Project",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    artifacts:
      output.artifacts !== undefined && output.artifacts !== null
        ? deserializeAws_json1_1ProjectArtifacts(output.artifacts, context)
        : undefined,
    badge:
      output.badge !== undefined && output.badge !== null
        ? deserializeAws_json1_1ProjectBadge(output.badge, context)
        : undefined,
    cache:
      output.cache !== undefined && output.cache !== null
        ? deserializeAws_json1_1ProjectCache(output.cache, context)
        : undefined,
    created:
      output.created !== undefined && output.created !== null
        ? new Date(Math.round(output.created * 1000))
        : undefined,
    description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    encryptionKey:
      output.encryptionKey !== undefined && output.encryptionKey !== null
        ? output.encryptionKey
        : undefined,
    environment:
      output.environment !== undefined && output.environment !== null
        ? deserializeAws_json1_1ProjectEnvironment(output.environment, context)
        : undefined,
    lastModified:
      output.lastModified !== undefined && output.lastModified !== null
        ? new Date(Math.round(output.lastModified * 1000))
        : undefined,
    logsConfig:
      output.logsConfig !== undefined && output.logsConfig !== null
        ? deserializeAws_json1_1LogsConfig(output.logsConfig, context)
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    queuedTimeoutInMinutes:
      output.queuedTimeoutInMinutes !== undefined &&
      output.queuedTimeoutInMinutes !== null
        ? output.queuedTimeoutInMinutes
        : undefined,
    secondaryArtifacts:
      output.secondaryArtifacts !== undefined &&
      output.secondaryArtifacts !== null
        ? deserializeAws_json1_1ProjectArtifactsList(
            output.secondaryArtifacts,
            context
          )
        : undefined,
    secondarySourceVersions:
      output.secondarySourceVersions !== undefined &&
      output.secondarySourceVersions !== null
        ? deserializeAws_json1_1ProjectSecondarySourceVersions(
            output.secondarySourceVersions,
            context
          )
        : undefined,
    secondarySources:
      output.secondarySources !== undefined && output.secondarySources !== null
        ? deserializeAws_json1_1ProjectSources(output.secondarySources, context)
        : undefined,
    serviceRole:
      output.serviceRole !== undefined && output.serviceRole !== null
        ? output.serviceRole
        : undefined,
    source:
      output.source !== undefined && output.source !== null
        ? deserializeAws_json1_1ProjectSource(output.source, context)
        : undefined,
    sourceVersion:
      output.sourceVersion !== undefined && output.sourceVersion !== null
        ? output.sourceVersion
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
    timeoutInMinutes:
      output.timeoutInMinutes !== undefined && output.timeoutInMinutes !== null
        ? output.timeoutInMinutes
        : undefined,
    vpcConfig:
      output.vpcConfig !== undefined && output.vpcConfig !== null
        ? deserializeAws_json1_1VpcConfig(output.vpcConfig, context)
        : undefined,
    webhook:
      output.webhook !== undefined && output.webhook !== null
        ? deserializeAws_json1_1Webhook(output.webhook, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ProjectArns = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ProjectArtifacts = (
  output: any,
  context: __SerdeContext
): ProjectArtifacts => {
  return {
    __type: "ProjectArtifacts",
    artifactIdentifier:
      output.artifactIdentifier !== undefined &&
      output.artifactIdentifier !== null
        ? output.artifactIdentifier
        : undefined,
    encryptionDisabled:
      output.encryptionDisabled !== undefined &&
      output.encryptionDisabled !== null
        ? output.encryptionDisabled
        : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? output.location
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    namespaceType:
      output.namespaceType !== undefined && output.namespaceType !== null
        ? output.namespaceType
        : undefined,
    overrideArtifactName:
      output.overrideArtifactName !== undefined &&
      output.overrideArtifactName !== null
        ? output.overrideArtifactName
        : undefined,
    packaging:
      output.packaging !== undefined && output.packaging !== null
        ? output.packaging
        : undefined,
    path:
      output.path !== undefined && output.path !== null
        ? output.path
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_json1_1ProjectArtifactsList = (
  output: any,
  context: __SerdeContext
): ProjectArtifacts[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ProjectArtifacts(entry, context)
  );
};

const deserializeAws_json1_1ProjectBadge = (
  output: any,
  context: __SerdeContext
): ProjectBadge => {
  return {
    __type: "ProjectBadge",
    badgeEnabled:
      output.badgeEnabled !== undefined && output.badgeEnabled !== null
        ? output.badgeEnabled
        : undefined,
    badgeRequestUrl:
      output.badgeRequestUrl !== undefined && output.badgeRequestUrl !== null
        ? output.badgeRequestUrl
        : undefined
  } as any;
};

const deserializeAws_json1_1ProjectCache = (
  output: any,
  context: __SerdeContext
): ProjectCache => {
  return {
    __type: "ProjectCache",
    location:
      output.location !== undefined && output.location !== null
        ? output.location
        : undefined,
    modes:
      output.modes !== undefined && output.modes !== null
        ? deserializeAws_json1_1ProjectCacheModes(output.modes, context)
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_json1_1ProjectCacheModes = (
  output: any,
  context: __SerdeContext
): (CacheMode | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ProjectEnvironment = (
  output: any,
  context: __SerdeContext
): ProjectEnvironment => {
  return {
    __type: "ProjectEnvironment",
    certificate:
      output.certificate !== undefined && output.certificate !== null
        ? output.certificate
        : undefined,
    computeType:
      output.computeType !== undefined && output.computeType !== null
        ? output.computeType
        : undefined,
    environmentVariables:
      output.environmentVariables !== undefined &&
      output.environmentVariables !== null
        ? deserializeAws_json1_1EnvironmentVariables(
            output.environmentVariables,
            context
          )
        : undefined,
    image:
      output.image !== undefined && output.image !== null
        ? output.image
        : undefined,
    imagePullCredentialsType:
      output.imagePullCredentialsType !== undefined &&
      output.imagePullCredentialsType !== null
        ? output.imagePullCredentialsType
        : undefined,
    privilegedMode:
      output.privilegedMode !== undefined && output.privilegedMode !== null
        ? output.privilegedMode
        : undefined,
    registryCredential:
      output.registryCredential !== undefined &&
      output.registryCredential !== null
        ? deserializeAws_json1_1RegistryCredential(
            output.registryCredential,
            context
          )
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_json1_1ProjectNames = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Projects = (
  output: any,
  context: __SerdeContext
): Project[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Project(entry, context)
  );
};

const deserializeAws_json1_1ProjectSecondarySourceVersions = (
  output: any,
  context: __SerdeContext
): ProjectSourceVersion[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ProjectSourceVersion(entry, context)
  );
};

const deserializeAws_json1_1ProjectSource = (
  output: any,
  context: __SerdeContext
): ProjectSource => {
  return {
    __type: "ProjectSource",
    auth:
      output.auth !== undefined && output.auth !== null
        ? deserializeAws_json1_1SourceAuth(output.auth, context)
        : undefined,
    buildspec:
      output.buildspec !== undefined && output.buildspec !== null
        ? output.buildspec
        : undefined,
    gitCloneDepth:
      output.gitCloneDepth !== undefined && output.gitCloneDepth !== null
        ? output.gitCloneDepth
        : undefined,
    gitSubmodulesConfig:
      output.gitSubmodulesConfig !== undefined &&
      output.gitSubmodulesConfig !== null
        ? deserializeAws_json1_1GitSubmodulesConfig(
            output.gitSubmodulesConfig,
            context
          )
        : undefined,
    insecureSsl:
      output.insecureSsl !== undefined && output.insecureSsl !== null
        ? output.insecureSsl
        : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? output.location
        : undefined,
    reportBuildStatus:
      output.reportBuildStatus !== undefined &&
      output.reportBuildStatus !== null
        ? output.reportBuildStatus
        : undefined,
    sourceIdentifier:
      output.sourceIdentifier !== undefined && output.sourceIdentifier !== null
        ? output.sourceIdentifier
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_json1_1ProjectSources = (
  output: any,
  context: __SerdeContext
): ProjectSource[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ProjectSource(entry, context)
  );
};

const deserializeAws_json1_1ProjectSourceVersion = (
  output: any,
  context: __SerdeContext
): ProjectSourceVersion => {
  return {
    __type: "ProjectSourceVersion",
    sourceIdentifier:
      output.sourceIdentifier !== undefined && output.sourceIdentifier !== null
        ? output.sourceIdentifier
        : undefined,
    sourceVersion:
      output.sourceVersion !== undefined && output.sourceVersion !== null
        ? output.sourceVersion
        : undefined
  } as any;
};

const deserializeAws_json1_1PutResourcePolicyOutput = (
  output: any,
  context: __SerdeContext
): PutResourcePolicyOutput => {
  return {
    __type: "PutResourcePolicyOutput",
    resourceArn:
      output.resourceArn !== undefined && output.resourceArn !== null
        ? output.resourceArn
        : undefined
  } as any;
};

const deserializeAws_json1_1RegistryCredential = (
  output: any,
  context: __SerdeContext
): RegistryCredential => {
  return {
    __type: "RegistryCredential",
    credential:
      output.credential !== undefined && output.credential !== null
        ? output.credential
        : undefined,
    credentialProvider:
      output.credentialProvider !== undefined &&
      output.credentialProvider !== null
        ? output.credentialProvider
        : undefined
  } as any;
};

const deserializeAws_json1_1Report = (
  output: any,
  context: __SerdeContext
): Report => {
  return {
    __type: "Report",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    created:
      output.created !== undefined && output.created !== null
        ? new Date(Math.round(output.created * 1000))
        : undefined,
    executionId:
      output.executionId !== undefined && output.executionId !== null
        ? output.executionId
        : undefined,
    expired:
      output.expired !== undefined && output.expired !== null
        ? new Date(Math.round(output.expired * 1000))
        : undefined,
    exportConfig:
      output.exportConfig !== undefined && output.exportConfig !== null
        ? deserializeAws_json1_1ReportExportConfig(output.exportConfig, context)
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    reportGroupArn:
      output.reportGroupArn !== undefined && output.reportGroupArn !== null
        ? output.reportGroupArn
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    testSummary:
      output.testSummary !== undefined && output.testSummary !== null
        ? deserializeAws_json1_1TestReportSummary(output.testSummary, context)
        : undefined,
    truncated:
      output.truncated !== undefined && output.truncated !== null
        ? output.truncated
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_json1_1ReportArns = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ReportExportConfig = (
  output: any,
  context: __SerdeContext
): ReportExportConfig => {
  return {
    __type: "ReportExportConfig",
    exportConfigType:
      output.exportConfigType !== undefined && output.exportConfigType !== null
        ? output.exportConfigType
        : undefined,
    s3Destination:
      output.s3Destination !== undefined && output.s3Destination !== null
        ? deserializeAws_json1_1S3ReportExportConfig(
            output.s3Destination,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ReportGroup = (
  output: any,
  context: __SerdeContext
): ReportGroup => {
  return {
    __type: "ReportGroup",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    created:
      output.created !== undefined && output.created !== null
        ? new Date(Math.round(output.created * 1000))
        : undefined,
    exportConfig:
      output.exportConfig !== undefined && output.exportConfig !== null
        ? deserializeAws_json1_1ReportExportConfig(output.exportConfig, context)
        : undefined,
    lastModified:
      output.lastModified !== undefined && output.lastModified !== null
        ? new Date(Math.round(output.lastModified * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_json1_1ReportGroupArns = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ReportGroups = (
  output: any,
  context: __SerdeContext
): ReportGroup[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ReportGroup(entry, context)
  );
};

const deserializeAws_json1_1Reports = (
  output: any,
  context: __SerdeContext
): Report[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Report(entry, context)
  );
};

const deserializeAws_json1_1ReportStatusCounts = (
  output: any,
  context: __SerdeContext
): { [key: string]: number } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: number }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  return {
    __type: "ResourceAlreadyExistsException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    __type: "ResourceNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1S3LogsConfig = (
  output: any,
  context: __SerdeContext
): S3LogsConfig => {
  return {
    __type: "S3LogsConfig",
    encryptionDisabled:
      output.encryptionDisabled !== undefined &&
      output.encryptionDisabled !== null
        ? output.encryptionDisabled
        : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? output.location
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1S3ReportExportConfig = (
  output: any,
  context: __SerdeContext
): S3ReportExportConfig => {
  return {
    __type: "S3ReportExportConfig",
    bucket:
      output.bucket !== undefined && output.bucket !== null
        ? output.bucket
        : undefined,
    encryptionDisabled:
      output.encryptionDisabled !== undefined &&
      output.encryptionDisabled !== null
        ? output.encryptionDisabled
        : undefined,
    encryptionKey:
      output.encryptionKey !== undefined && output.encryptionKey !== null
        ? output.encryptionKey
        : undefined,
    packaging:
      output.packaging !== undefined && output.packaging !== null
        ? output.packaging
        : undefined,
    path:
      output.path !== undefined && output.path !== null
        ? output.path
        : undefined
  } as any;
};

const deserializeAws_json1_1SecurityGroupIds = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1SourceAuth = (
  output: any,
  context: __SerdeContext
): SourceAuth => {
  return {
    __type: "SourceAuth",
    resource:
      output.resource !== undefined && output.resource !== null
        ? output.resource
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_json1_1SourceCredentialsInfo = (
  output: any,
  context: __SerdeContext
): SourceCredentialsInfo => {
  return {
    __type: "SourceCredentialsInfo",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    authType:
      output.authType !== undefined && output.authType !== null
        ? output.authType
        : undefined,
    serverType:
      output.serverType !== undefined && output.serverType !== null
        ? output.serverType
        : undefined
  } as any;
};

const deserializeAws_json1_1SourceCredentialsInfos = (
  output: any,
  context: __SerdeContext
): SourceCredentialsInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SourceCredentialsInfo(entry, context)
  );
};

const deserializeAws_json1_1StartBuildOutput = (
  output: any,
  context: __SerdeContext
): StartBuildOutput => {
  return {
    __type: "StartBuildOutput",
    build:
      output.build !== undefined && output.build !== null
        ? deserializeAws_json1_1Build(output.build, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1StopBuildOutput = (
  output: any,
  context: __SerdeContext
): StopBuildOutput => {
  return {
    __type: "StopBuildOutput",
    build:
      output.build !== undefined && output.build !== null
        ? deserializeAws_json1_1Build(output.build, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1Subnets = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  return {
    __type: "Tag",
    key:
      output.key !== undefined && output.key !== null ? output.key : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TestCase = (
  output: any,
  context: __SerdeContext
): TestCase => {
  return {
    __type: "TestCase",
    durationInNanoSeconds:
      output.durationInNanoSeconds !== undefined &&
      output.durationInNanoSeconds !== null
        ? output.durationInNanoSeconds
        : undefined,
    expired:
      output.expired !== undefined && output.expired !== null
        ? new Date(Math.round(output.expired * 1000))
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    prefix:
      output.prefix !== undefined && output.prefix !== null
        ? output.prefix
        : undefined,
    reportArn:
      output.reportArn !== undefined && output.reportArn !== null
        ? output.reportArn
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    testRawDataPath:
      output.testRawDataPath !== undefined && output.testRawDataPath !== null
        ? output.testRawDataPath
        : undefined
  } as any;
};

const deserializeAws_json1_1TestCases = (
  output: any,
  context: __SerdeContext
): TestCase[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TestCase(entry, context)
  );
};

const deserializeAws_json1_1TestReportSummary = (
  output: any,
  context: __SerdeContext
): TestReportSummary => {
  return {
    __type: "TestReportSummary",
    durationInNanoSeconds:
      output.durationInNanoSeconds !== undefined &&
      output.durationInNanoSeconds !== null
        ? output.durationInNanoSeconds
        : undefined,
    statusCounts:
      output.statusCounts !== undefined && output.statusCounts !== null
        ? deserializeAws_json1_1ReportStatusCounts(output.statusCounts, context)
        : undefined,
    total:
      output.total !== undefined && output.total !== null
        ? output.total
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateProjectOutput = (
  output: any,
  context: __SerdeContext
): UpdateProjectOutput => {
  return {
    __type: "UpdateProjectOutput",
    project:
      output.project !== undefined && output.project !== null
        ? deserializeAws_json1_1Project(output.project, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateReportGroupOutput = (
  output: any,
  context: __SerdeContext
): UpdateReportGroupOutput => {
  return {
    __type: "UpdateReportGroupOutput",
    reportGroup:
      output.reportGroup !== undefined && output.reportGroup !== null
        ? deserializeAws_json1_1ReportGroup(output.reportGroup, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateWebhookOutput = (
  output: any,
  context: __SerdeContext
): UpdateWebhookOutput => {
  return {
    __type: "UpdateWebhookOutput",
    webhook:
      output.webhook !== undefined && output.webhook !== null
        ? deserializeAws_json1_1Webhook(output.webhook, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1VpcConfig = (
  output: any,
  context: __SerdeContext
): VpcConfig => {
  return {
    __type: "VpcConfig",
    securityGroupIds:
      output.securityGroupIds !== undefined && output.securityGroupIds !== null
        ? deserializeAws_json1_1SecurityGroupIds(
            output.securityGroupIds,
            context
          )
        : undefined,
    subnets:
      output.subnets !== undefined && output.subnets !== null
        ? deserializeAws_json1_1Subnets(output.subnets, context)
        : undefined,
    vpcId:
      output.vpcId !== undefined && output.vpcId !== null
        ? output.vpcId
        : undefined
  } as any;
};

const deserializeAws_json1_1Webhook = (
  output: any,
  context: __SerdeContext
): Webhook => {
  return {
    __type: "Webhook",
    branchFilter:
      output.branchFilter !== undefined && output.branchFilter !== null
        ? output.branchFilter
        : undefined,
    filterGroups:
      output.filterGroups !== undefined && output.filterGroups !== null
        ? deserializeAws_json1_1FilterGroups(output.filterGroups, context)
        : undefined,
    lastModifiedSecret:
      output.lastModifiedSecret !== undefined &&
      output.lastModifiedSecret !== null
        ? new Date(Math.round(output.lastModifiedSecret * 1000))
        : undefined,
    payloadUrl:
      output.payloadUrl !== undefined && output.payloadUrl !== null
        ? output.payloadUrl
        : undefined,
    secret:
      output.secret !== undefined && output.secret !== null
        ? output.secret
        : undefined,
    url:
      output.url !== undefined && output.url !== null ? output.url : undefined
  } as any;
};

const deserializeAws_json1_1WebhookFilter = (
  output: any,
  context: __SerdeContext
): WebhookFilter => {
  return {
    __type: "WebhookFilter",
    excludeMatchedPattern:
      output.excludeMatchedPattern !== undefined &&
      output.excludeMatchedPattern !== null
        ? output.excludeMatchedPattern
        : undefined,
    pattern:
      output.pattern !== undefined && output.pattern !== null
        ? output.pattern
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers
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
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
