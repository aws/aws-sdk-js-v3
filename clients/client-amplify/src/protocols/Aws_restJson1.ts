// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateAppCommandInput, CreateAppCommandOutput } from "../commands/CreateAppCommand";
import {
  CreateBackendEnvironmentCommandInput,
  CreateBackendEnvironmentCommandOutput,
} from "../commands/CreateBackendEnvironmentCommand";
import { CreateBranchCommandInput, CreateBranchCommandOutput } from "../commands/CreateBranchCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "../commands/CreateDeploymentCommand";
import {
  CreateDomainAssociationCommandInput,
  CreateDomainAssociationCommandOutput,
} from "../commands/CreateDomainAssociationCommand";
import { CreateWebhookCommandInput, CreateWebhookCommandOutput } from "../commands/CreateWebhookCommand";
import { DeleteAppCommandInput, DeleteAppCommandOutput } from "../commands/DeleteAppCommand";
import {
  DeleteBackendEnvironmentCommandInput,
  DeleteBackendEnvironmentCommandOutput,
} from "../commands/DeleteBackendEnvironmentCommand";
import { DeleteBranchCommandInput, DeleteBranchCommandOutput } from "../commands/DeleteBranchCommand";
import {
  DeleteDomainAssociationCommandInput,
  DeleteDomainAssociationCommandOutput,
} from "../commands/DeleteDomainAssociationCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "../commands/DeleteJobCommand";
import { DeleteWebhookCommandInput, DeleteWebhookCommandOutput } from "../commands/DeleteWebhookCommand";
import { GenerateAccessLogsCommandInput, GenerateAccessLogsCommandOutput } from "../commands/GenerateAccessLogsCommand";
import { GetAppCommandInput, GetAppCommandOutput } from "../commands/GetAppCommand";
import { GetArtifactUrlCommandInput, GetArtifactUrlCommandOutput } from "../commands/GetArtifactUrlCommand";
import {
  GetBackendEnvironmentCommandInput,
  GetBackendEnvironmentCommandOutput,
} from "../commands/GetBackendEnvironmentCommand";
import { GetBranchCommandInput, GetBranchCommandOutput } from "../commands/GetBranchCommand";
import {
  GetDomainAssociationCommandInput,
  GetDomainAssociationCommandOutput,
} from "../commands/GetDomainAssociationCommand";
import { GetJobCommandInput, GetJobCommandOutput } from "../commands/GetJobCommand";
import { GetWebhookCommandInput, GetWebhookCommandOutput } from "../commands/GetWebhookCommand";
import { ListAppsCommandInput, ListAppsCommandOutput } from "../commands/ListAppsCommand";
import { ListArtifactsCommandInput, ListArtifactsCommandOutput } from "../commands/ListArtifactsCommand";
import {
  ListBackendEnvironmentsCommandInput,
  ListBackendEnvironmentsCommandOutput,
} from "../commands/ListBackendEnvironmentsCommand";
import { ListBranchesCommandInput, ListBranchesCommandOutput } from "../commands/ListBranchesCommand";
import {
  ListDomainAssociationsCommandInput,
  ListDomainAssociationsCommandOutput,
} from "../commands/ListDomainAssociationsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListWebhooksCommandInput, ListWebhooksCommandOutput } from "../commands/ListWebhooksCommand";
import { StartDeploymentCommandInput, StartDeploymentCommandOutput } from "../commands/StartDeploymentCommand";
import { StartJobCommandInput, StartJobCommandOutput } from "../commands/StartJobCommand";
import { StopJobCommandInput, StopJobCommandOutput } from "../commands/StopJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAppCommandInput, UpdateAppCommandOutput } from "../commands/UpdateAppCommand";
import { UpdateBranchCommandInput, UpdateBranchCommandOutput } from "../commands/UpdateBranchCommand";
import {
  UpdateDomainAssociationCommandInput,
  UpdateDomainAssociationCommandOutput,
} from "../commands/UpdateDomainAssociationCommand";
import { UpdateWebhookCommandInput, UpdateWebhookCommandOutput } from "../commands/UpdateWebhookCommand";
import { AmplifyServiceException as __BaseException } from "../models/AmplifyServiceException";
import {
  App,
  Artifact,
  AutoBranchCreationConfig,
  BackendEnvironment,
  BadRequestException,
  Branch,
  CustomRule,
  DependentServiceFailureException,
  DomainAssociation,
  InternalFailureException,
  Job,
  JobSummary,
  LimitExceededException,
  NotFoundException,
  ProductionBranch,
  ResourceNotFoundException,
  Step,
  SubDomain,
  SubDomainSetting,
  UnauthorizedException,
  Webhook,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateAppCommand
 */
export const se_CreateAppCommand = async (
  input: CreateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apps";
  let body: any;
  body = JSON.stringify({
    ...(input.accessToken != null && { accessToken: input.accessToken }),
    ...(input.autoBranchCreationConfig != null && {
      autoBranchCreationConfig: se_AutoBranchCreationConfig(input.autoBranchCreationConfig, context),
    }),
    ...(input.autoBranchCreationPatterns != null && {
      autoBranchCreationPatterns: se_AutoBranchCreationPatterns(input.autoBranchCreationPatterns, context),
    }),
    ...(input.basicAuthCredentials != null && { basicAuthCredentials: input.basicAuthCredentials }),
    ...(input.buildSpec != null && { buildSpec: input.buildSpec }),
    ...(input.customHeaders != null && { customHeaders: input.customHeaders }),
    ...(input.customRules != null && { customRules: se_CustomRules(input.customRules, context) }),
    ...(input.description != null && { description: input.description }),
    ...(input.enableAutoBranchCreation != null && { enableAutoBranchCreation: input.enableAutoBranchCreation }),
    ...(input.enableBasicAuth != null && { enableBasicAuth: input.enableBasicAuth }),
    ...(input.enableBranchAutoBuild != null && { enableBranchAutoBuild: input.enableBranchAutoBuild }),
    ...(input.enableBranchAutoDeletion != null && { enableBranchAutoDeletion: input.enableBranchAutoDeletion }),
    ...(input.environmentVariables != null && {
      environmentVariables: se_EnvironmentVariables(input.environmentVariables, context),
    }),
    ...(input.iamServiceRoleArn != null && { iamServiceRoleArn: input.iamServiceRoleArn }),
    ...(input.name != null && { name: input.name }),
    ...(input.oauthToken != null && { oauthToken: input.oauthToken }),
    ...(input.platform != null && { platform: input.platform }),
    ...(input.repository != null && { repository: input.repository }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateBackendEnvironmentCommand
 */
export const se_CreateBackendEnvironmentCommand = async (
  input: CreateBackendEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apps/{appId}/backendenvironments";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.deploymentArtifacts != null && { deploymentArtifacts: input.deploymentArtifacts }),
    ...(input.environmentName != null && { environmentName: input.environmentName }),
    ...(input.stackName != null && { stackName: input.stackName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateBranchCommand
 */
export const se_CreateBranchCommand = async (
  input: CreateBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apps/{appId}/branches";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.backendEnvironmentArn != null && { backendEnvironmentArn: input.backendEnvironmentArn }),
    ...(input.basicAuthCredentials != null && { basicAuthCredentials: input.basicAuthCredentials }),
    ...(input.branchName != null && { branchName: input.branchName }),
    ...(input.buildSpec != null && { buildSpec: input.buildSpec }),
    ...(input.description != null && { description: input.description }),
    ...(input.displayName != null && { displayName: input.displayName }),
    ...(input.enableAutoBuild != null && { enableAutoBuild: input.enableAutoBuild }),
    ...(input.enableBasicAuth != null && { enableBasicAuth: input.enableBasicAuth }),
    ...(input.enableNotification != null && { enableNotification: input.enableNotification }),
    ...(input.enablePerformanceMode != null && { enablePerformanceMode: input.enablePerformanceMode }),
    ...(input.enablePullRequestPreview != null && { enablePullRequestPreview: input.enablePullRequestPreview }),
    ...(input.environmentVariables != null && {
      environmentVariables: se_EnvironmentVariables(input.environmentVariables, context),
    }),
    ...(input.framework != null && { framework: input.framework }),
    ...(input.pullRequestEnvironmentName != null && { pullRequestEnvironmentName: input.pullRequestEnvironmentName }),
    ...(input.stage != null && { stage: input.stage }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
    ...(input.ttl != null && { ttl: input.ttl }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateDeploymentCommand
 */
export const se_CreateDeploymentCommand = async (
  input: CreateDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/apps/{appId}/branches/{branchName}/deployments";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "branchName", () => input.branchName!, "{branchName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.fileMap != null && { fileMap: se_FileMap(input.fileMap, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateDomainAssociationCommand
 */
export const se_CreateDomainAssociationCommand = async (
  input: CreateDomainAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apps/{appId}/domains";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.autoSubDomainCreationPatterns != null && {
      autoSubDomainCreationPatterns: se_AutoSubDomainCreationPatterns(input.autoSubDomainCreationPatterns, context),
    }),
    ...(input.autoSubDomainIAMRole != null && { autoSubDomainIAMRole: input.autoSubDomainIAMRole }),
    ...(input.domainName != null && { domainName: input.domainName }),
    ...(input.enableAutoSubDomain != null && { enableAutoSubDomain: input.enableAutoSubDomain }),
    ...(input.subDomainSettings != null && {
      subDomainSettings: se_SubDomainSettings(input.subDomainSettings, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateWebhookCommand
 */
export const se_CreateWebhookCommand = async (
  input: CreateWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apps/{appId}/webhooks";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.branchName != null && { branchName: input.branchName }),
    ...(input.description != null && { description: input.description }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteAppCommand
 */
export const se_DeleteAppCommand = async (
  input: DeleteAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apps/{appId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteBackendEnvironmentCommand
 */
export const se_DeleteBackendEnvironmentCommand = async (
  input: DeleteBackendEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/apps/{appId}/backendenvironments/{environmentName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteBranchCommand
 */
export const se_DeleteBranchCommand = async (
  input: DeleteBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apps/{appId}/branches/{branchName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "branchName", () => input.branchName!, "{branchName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteDomainAssociationCommand
 */
export const se_DeleteDomainAssociationCommand = async (
  input: DeleteDomainAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apps/{appId}/domains/{domainName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "domainName", () => input.domainName!, "{domainName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteJobCommand
 */
export const se_DeleteJobCommand = async (
  input: DeleteJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/apps/{appId}/branches/{branchName}/jobs/{jobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "branchName", () => input.branchName!, "{branchName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteWebhookCommand
 */
export const se_DeleteWebhookCommand = async (
  input: DeleteWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/webhooks/{webhookId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "webhookId", () => input.webhookId!, "{webhookId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GenerateAccessLogsCommand
 */
export const se_GenerateAccessLogsCommand = async (
  input: GenerateAccessLogsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apps/{appId}/accesslogs";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.domainName != null && { domainName: input.domainName }),
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetAppCommand
 */
export const se_GetAppCommand = async (input: GetAppCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apps/{appId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetArtifactUrlCommand
 */
export const se_GetArtifactUrlCommand = async (
  input: GetArtifactUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/artifacts/{artifactId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "artifactId", () => input.artifactId!, "{artifactId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetBackendEnvironmentCommand
 */
export const se_GetBackendEnvironmentCommand = async (
  input: GetBackendEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/apps/{appId}/backendenvironments/{environmentName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetBranchCommand
 */
export const se_GetBranchCommand = async (
  input: GetBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apps/{appId}/branches/{branchName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "branchName", () => input.branchName!, "{branchName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetDomainAssociationCommand
 */
export const se_GetDomainAssociationCommand = async (
  input: GetDomainAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apps/{appId}/domains/{domainName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "domainName", () => input.domainName!, "{domainName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetJobCommand
 */
export const se_GetJobCommand = async (input: GetJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/apps/{appId}/branches/{branchName}/jobs/{jobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "branchName", () => input.branchName!, "{branchName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetWebhookCommand
 */
export const se_GetWebhookCommand = async (
  input: GetWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/webhooks/{webhookId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "webhookId", () => input.webhookId!, "{webhookId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListAppsCommand
 */
export const se_ListAppsCommand = async (
  input: ListAppsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apps";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListArtifactsCommand
 */
export const se_ListArtifactsCommand = async (
  input: ListArtifactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/apps/{appId}/branches/{branchName}/jobs/{jobId}/artifacts";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "branchName", () => input.branchName!, "{branchName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "jobId", () => input.jobId!, "{jobId}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListBackendEnvironmentsCommand
 */
export const se_ListBackendEnvironmentsCommand = async (
  input: ListBackendEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apps/{appId}/backendenvironments";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  const query: any = map({
    environmentName: [, input.environmentName!],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListBranchesCommand
 */
export const se_ListBranchesCommand = async (
  input: ListBranchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apps/{appId}/branches";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListDomainAssociationsCommand
 */
export const se_ListDomainAssociationsCommand = async (
  input: ListDomainAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apps/{appId}/domains";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListJobsCommand
 */
export const se_ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apps/{appId}/branches/{branchName}/jobs";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "branchName", () => input.branchName!, "{branchName}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListWebhooksCommand
 */
export const se_ListWebhooksCommand = async (
  input: ListWebhooksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apps/{appId}/webhooks";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1StartDeploymentCommand
 */
export const se_StartDeploymentCommand = async (
  input: StartDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/apps/{appId}/branches/{branchName}/deployments/start";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "branchName", () => input.branchName!, "{branchName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.jobId != null && { jobId: input.jobId }),
    ...(input.sourceUrl != null && { sourceUrl: input.sourceUrl }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartJobCommand
 */
export const se_StartJobCommand = async (
  input: StartJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apps/{appId}/branches/{branchName}/jobs";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "branchName", () => input.branchName!, "{branchName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.commitId != null && { commitId: input.commitId }),
    ...(input.commitMessage != null && { commitMessage: input.commitMessage }),
    ...(input.commitTime != null && { commitTime: Math.round(input.commitTime.getTime() / 1000) }),
    ...(input.jobId != null && { jobId: input.jobId }),
    ...(input.jobReason != null && { jobReason: input.jobReason }),
    ...(input.jobType != null && { jobType: input.jobType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StopJobCommand
 */
export const se_StopJobCommand = async (
  input: StopJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/apps/{appId}/branches/{branchName}/jobs/{jobId}/stop";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "branchName", () => input.branchName!, "{branchName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateAppCommand
 */
export const se_UpdateAppCommand = async (
  input: UpdateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apps/{appId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.accessToken != null && { accessToken: input.accessToken }),
    ...(input.autoBranchCreationConfig != null && {
      autoBranchCreationConfig: se_AutoBranchCreationConfig(input.autoBranchCreationConfig, context),
    }),
    ...(input.autoBranchCreationPatterns != null && {
      autoBranchCreationPatterns: se_AutoBranchCreationPatterns(input.autoBranchCreationPatterns, context),
    }),
    ...(input.basicAuthCredentials != null && { basicAuthCredentials: input.basicAuthCredentials }),
    ...(input.buildSpec != null && { buildSpec: input.buildSpec }),
    ...(input.customHeaders != null && { customHeaders: input.customHeaders }),
    ...(input.customRules != null && { customRules: se_CustomRules(input.customRules, context) }),
    ...(input.description != null && { description: input.description }),
    ...(input.enableAutoBranchCreation != null && { enableAutoBranchCreation: input.enableAutoBranchCreation }),
    ...(input.enableBasicAuth != null && { enableBasicAuth: input.enableBasicAuth }),
    ...(input.enableBranchAutoBuild != null && { enableBranchAutoBuild: input.enableBranchAutoBuild }),
    ...(input.enableBranchAutoDeletion != null && { enableBranchAutoDeletion: input.enableBranchAutoDeletion }),
    ...(input.environmentVariables != null && {
      environmentVariables: se_EnvironmentVariables(input.environmentVariables, context),
    }),
    ...(input.iamServiceRoleArn != null && { iamServiceRoleArn: input.iamServiceRoleArn }),
    ...(input.name != null && { name: input.name }),
    ...(input.oauthToken != null && { oauthToken: input.oauthToken }),
    ...(input.platform != null && { platform: input.platform }),
    ...(input.repository != null && { repository: input.repository }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateBranchCommand
 */
export const se_UpdateBranchCommand = async (
  input: UpdateBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apps/{appId}/branches/{branchName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "branchName", () => input.branchName!, "{branchName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.backendEnvironmentArn != null && { backendEnvironmentArn: input.backendEnvironmentArn }),
    ...(input.basicAuthCredentials != null && { basicAuthCredentials: input.basicAuthCredentials }),
    ...(input.buildSpec != null && { buildSpec: input.buildSpec }),
    ...(input.description != null && { description: input.description }),
    ...(input.displayName != null && { displayName: input.displayName }),
    ...(input.enableAutoBuild != null && { enableAutoBuild: input.enableAutoBuild }),
    ...(input.enableBasicAuth != null && { enableBasicAuth: input.enableBasicAuth }),
    ...(input.enableNotification != null && { enableNotification: input.enableNotification }),
    ...(input.enablePerformanceMode != null && { enablePerformanceMode: input.enablePerformanceMode }),
    ...(input.enablePullRequestPreview != null && { enablePullRequestPreview: input.enablePullRequestPreview }),
    ...(input.environmentVariables != null && {
      environmentVariables: se_EnvironmentVariables(input.environmentVariables, context),
    }),
    ...(input.framework != null && { framework: input.framework }),
    ...(input.pullRequestEnvironmentName != null && { pullRequestEnvironmentName: input.pullRequestEnvironmentName }),
    ...(input.stage != null && { stage: input.stage }),
    ...(input.ttl != null && { ttl: input.ttl }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateDomainAssociationCommand
 */
export const se_UpdateDomainAssociationCommand = async (
  input: UpdateDomainAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apps/{appId}/domains/{domainName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "domainName", () => input.domainName!, "{domainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.autoSubDomainCreationPatterns != null && {
      autoSubDomainCreationPatterns: se_AutoSubDomainCreationPatterns(input.autoSubDomainCreationPatterns, context),
    }),
    ...(input.autoSubDomainIAMRole != null && { autoSubDomainIAMRole: input.autoSubDomainIAMRole }),
    ...(input.enableAutoSubDomain != null && { enableAutoSubDomain: input.enableAutoSubDomain }),
    ...(input.subDomainSettings != null && {
      subDomainSettings: se_SubDomainSettings(input.subDomainSettings, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateWebhookCommand
 */
export const se_UpdateWebhookCommand = async (
  input: UpdateWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/webhooks/{webhookId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "webhookId", () => input.webhookId!, "{webhookId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.branchName != null && { branchName: input.branchName }),
    ...(input.description != null && { description: input.description }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1CreateAppCommand
 */
export const de_CreateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAppCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.app != null) {
    contents.app = de_App(data.app, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAppCommandError
 */
const de_CreateAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      throw await de_DependentServiceFailureExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateBackendEnvironmentCommand
 */
export const de_CreateBackendEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackendEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateBackendEnvironmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.backendEnvironment != null) {
    contents.backendEnvironment = de_BackendEnvironment(data.backendEnvironment, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateBackendEnvironmentCommandError
 */
const de_CreateBackendEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackendEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateBranchCommand
 */
export const de_CreateBranchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBranchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateBranchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.branch != null) {
    contents.branch = de_Branch(data.branch, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateBranchCommandError
 */
const de_CreateBranchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBranchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      throw await de_DependentServiceFailureExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateDeploymentCommand
 */
export const de_CreateDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.fileUploadUrls != null) {
    contents.fileUploadUrls = de_FileUploadUrls(data.fileUploadUrls, context);
  }
  if (data.jobId != null) {
    contents.jobId = __expectString(data.jobId);
  }
  if (data.zipUploadUrl != null) {
    contents.zipUploadUrl = __expectString(data.zipUploadUrl);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDeploymentCommandError
 */
const de_CreateDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateDomainAssociationCommand
 */
export const de_CreateDomainAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDomainAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.domainAssociation != null) {
    contents.domainAssociation = de_DomainAssociation(data.domainAssociation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDomainAssociationCommandError
 */
const de_CreateDomainAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      throw await de_DependentServiceFailureExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateWebhookCommand
 */
export const de_CreateWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebhookCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateWebhookCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.webhook != null) {
    contents.webhook = de_Webhook(data.webhook, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateWebhookCommandError
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
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      throw await de_DependentServiceFailureExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteAppCommand
 */
export const de_DeleteAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAppCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.app != null) {
    contents.app = de_App(data.app, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAppCommandError
 */
const de_DeleteAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      throw await de_DependentServiceFailureExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteBackendEnvironmentCommand
 */
export const de_DeleteBackendEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackendEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteBackendEnvironmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.backendEnvironment != null) {
    contents.backendEnvironment = de_BackendEnvironment(data.backendEnvironment, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBackendEnvironmentCommandError
 */
const de_DeleteBackendEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackendEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      throw await de_DependentServiceFailureExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteBranchCommand
 */
export const de_DeleteBranchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBranchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteBranchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.branch != null) {
    contents.branch = de_Branch(data.branch, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBranchCommandError
 */
const de_DeleteBranchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBranchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      throw await de_DependentServiceFailureExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteDomainAssociationCommand
 */
export const de_DeleteDomainAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDomainAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.domainAssociation != null) {
    contents.domainAssociation = de_DomainAssociation(data.domainAssociation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDomainAssociationCommandError
 */
const de_DeleteDomainAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      throw await de_DependentServiceFailureExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteJobCommand
 */
export const de_DeleteJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobSummary != null) {
    contents.jobSummary = de_JobSummary(data.jobSummary, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteJobCommandError
 */
const de_DeleteJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteWebhookCommand
 */
export const de_DeleteWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebhookCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteWebhookCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.webhook != null) {
    contents.webhook = de_Webhook(data.webhook, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWebhookCommandError
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
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GenerateAccessLogsCommand
 */
export const de_GenerateAccessLogsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateAccessLogsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GenerateAccessLogsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.logUrl != null) {
    contents.logUrl = __expectString(data.logUrl);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GenerateAccessLogsCommandError
 */
const de_GenerateAccessLogsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateAccessLogsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetAppCommand
 */
export const de_GetAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAppCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.app != null) {
    contents.app = de_App(data.app, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAppCommandError
 */
const de_GetAppCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<GetAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetArtifactUrlCommand
 */
export const de_GetArtifactUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArtifactUrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetArtifactUrlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.artifactId != null) {
    contents.artifactId = __expectString(data.artifactId);
  }
  if (data.artifactUrl != null) {
    contents.artifactUrl = __expectString(data.artifactUrl);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetArtifactUrlCommandError
 */
const de_GetArtifactUrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArtifactUrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetBackendEnvironmentCommand
 */
export const de_GetBackendEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBackendEnvironmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.backendEnvironment != null) {
    contents.backendEnvironment = de_BackendEnvironment(data.backendEnvironment, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetBackendEnvironmentCommandError
 */
const de_GetBackendEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetBranchCommand
 */
export const de_GetBranchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBranchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBranchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.branch != null) {
    contents.branch = de_Branch(data.branch, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetBranchCommandError
 */
const de_GetBranchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBranchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetDomainAssociationCommand
 */
export const de_GetDomainAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDomainAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.domainAssociation != null) {
    contents.domainAssociation = de_DomainAssociation(data.domainAssociation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDomainAssociationCommandError
 */
const de_GetDomainAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetJobCommand
 */
export const de_GetJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.job != null) {
    contents.job = de_Job(data.job, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetJobCommandError
 */
const de_GetJobCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<GetJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetWebhookCommand
 */
export const de_GetWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWebhookCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWebhookCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.webhook != null) {
    contents.webhook = de_Webhook(data.webhook, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetWebhookCommandError
 */
const de_GetWebhookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWebhookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAppsCommand
 */
export const de_ListAppsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAppsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apps != null) {
    contents.apps = de_Apps(data.apps, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAppsCommandError
 */
const de_ListAppsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListArtifactsCommand
 */
export const de_ListArtifactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArtifactsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListArtifactsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.artifacts != null) {
    contents.artifacts = de_Artifacts(data.artifacts, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListArtifactsCommandError
 */
const de_ListArtifactsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArtifactsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListBackendEnvironmentsCommand
 */
export const de_ListBackendEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackendEnvironmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBackendEnvironmentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.backendEnvironments != null) {
    contents.backendEnvironments = de_BackendEnvironments(data.backendEnvironments, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListBackendEnvironmentsCommandError
 */
const de_ListBackendEnvironmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackendEnvironmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListBranchesCommand
 */
export const de_ListBranchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBranchesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBranchesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.branches != null) {
    contents.branches = de_Branches(data.branches, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListBranchesCommandError
 */
const de_ListBranchesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBranchesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListDomainAssociationsCommand
 */
export const de_ListDomainAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDomainAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.domainAssociations != null) {
    contents.domainAssociations = de_DomainAssociations(data.domainAssociations, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDomainAssociationsCommandError
 */
const de_ListDomainAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListJobsCommand
 */
export const de_ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobSummaries != null) {
    contents.jobSummaries = de_JobSummaries(data.jobSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListJobsCommandError
 */
const de_ListJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.amplify#ResourceNotFoundException":
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
 * deserializeAws_restJson1ListWebhooksCommand
 */
export const de_ListWebhooksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebhooksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWebhooksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.webhooks != null) {
    contents.webhooks = de_Webhooks(data.webhooks, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListWebhooksCommandError
 */
const de_ListWebhooksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebhooksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartDeploymentCommand
 */
export const de_StartDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobSummary != null) {
    contents.jobSummary = de_JobSummary(data.jobSummary, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartDeploymentCommandError
 */
const de_StartDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartJobCommand
 */
export const de_StartJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobSummary != null) {
    contents.jobSummary = de_JobSummary(data.jobSummary, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartJobCommandError
 */
const de_StartJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StopJobCommand
 */
export const de_StopJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobSummary != null) {
    contents.jobSummary = de_JobSummary(data.jobSummary, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StopJobCommandError
 */
const de_StopJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.amplify#ResourceNotFoundException":
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.amplify#ResourceNotFoundException":
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
 * deserializeAws_restJson1UpdateAppCommand
 */
export const de_UpdateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAppCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.app != null) {
    contents.app = de_App(data.app, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAppCommandError
 */
const de_UpdateAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateBranchCommand
 */
export const de_UpdateBranchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBranchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateBranchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.branch != null) {
    contents.branch = de_Branch(data.branch, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBranchCommandError
 */
const de_UpdateBranchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBranchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      throw await de_DependentServiceFailureExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateDomainAssociationCommand
 */
export const de_UpdateDomainAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDomainAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.domainAssociation != null) {
    contents.domainAssociation = de_DomainAssociation(data.domainAssociation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDomainAssociationCommandError
 */
const de_UpdateDomainAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      throw await de_DependentServiceFailureExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateWebhookCommand
 */
export const de_UpdateWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWebhookCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateWebhookCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.webhook != null) {
    contents.webhook = de_Webhook(data.webhook, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWebhookCommandError
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
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      throw await de_DependentServiceFailureExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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

const map = __map;
/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DependentServiceFailureExceptionRes
 */
const de_DependentServiceFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependentServiceFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new DependentServiceFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalFailureExceptionRes
 */
const de_InternalFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnauthorizedExceptionRes
 */
const de_UnauthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AutoBranchCreationConfig
 */
const se_AutoBranchCreationConfig = (input: AutoBranchCreationConfig, context: __SerdeContext): any => {
  return {
    ...(input.basicAuthCredentials != null && { basicAuthCredentials: input.basicAuthCredentials }),
    ...(input.buildSpec != null && { buildSpec: input.buildSpec }),
    ...(input.enableAutoBuild != null && { enableAutoBuild: input.enableAutoBuild }),
    ...(input.enableBasicAuth != null && { enableBasicAuth: input.enableBasicAuth }),
    ...(input.enablePerformanceMode != null && { enablePerformanceMode: input.enablePerformanceMode }),
    ...(input.enablePullRequestPreview != null && { enablePullRequestPreview: input.enablePullRequestPreview }),
    ...(input.environmentVariables != null && {
      environmentVariables: se_EnvironmentVariables(input.environmentVariables, context),
    }),
    ...(input.framework != null && { framework: input.framework }),
    ...(input.pullRequestEnvironmentName != null && { pullRequestEnvironmentName: input.pullRequestEnvironmentName }),
    ...(input.stage != null && { stage: input.stage }),
  };
};

/**
 * serializeAws_restJson1AutoBranchCreationPatterns
 */
const se_AutoBranchCreationPatterns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1AutoSubDomainCreationPatterns
 */
const se_AutoSubDomainCreationPatterns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1CustomRule
 */
const se_CustomRule = (input: CustomRule, context: __SerdeContext): any => {
  return {
    ...(input.condition != null && { condition: input.condition }),
    ...(input.source != null && { source: input.source }),
    ...(input.status != null && { status: input.status }),
    ...(input.target != null && { target: input.target }),
  };
};

/**
 * serializeAws_restJson1CustomRules
 */
const se_CustomRules = (input: CustomRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CustomRule(entry, context);
    });
};

/**
 * serializeAws_restJson1EnvironmentVariables
 */
const se_EnvironmentVariables = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1FileMap
 */
const se_FileMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1SubDomainSetting
 */
const se_SubDomainSetting = (input: SubDomainSetting, context: __SerdeContext): any => {
  return {
    ...(input.branchName != null && { branchName: input.branchName }),
    ...(input.prefix != null && { prefix: input.prefix }),
  };
};

/**
 * serializeAws_restJson1SubDomainSettings
 */
const se_SubDomainSettings = (input: SubDomainSetting[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SubDomainSetting(entry, context);
    });
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1App
 */
const de_App = (output: any, context: __SerdeContext): App => {
  return {
    appArn: __expectString(output.appArn),
    appId: __expectString(output.appId),
    autoBranchCreationConfig:
      output.autoBranchCreationConfig != null
        ? de_AutoBranchCreationConfig(output.autoBranchCreationConfig, context)
        : undefined,
    autoBranchCreationPatterns:
      output.autoBranchCreationPatterns != null
        ? de_AutoBranchCreationPatterns(output.autoBranchCreationPatterns, context)
        : undefined,
    basicAuthCredentials: __expectString(output.basicAuthCredentials),
    buildSpec: __expectString(output.buildSpec),
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    customHeaders: __expectString(output.customHeaders),
    customRules: output.customRules != null ? de_CustomRules(output.customRules, context) : undefined,
    defaultDomain: __expectString(output.defaultDomain),
    description: __expectString(output.description),
    enableAutoBranchCreation: __expectBoolean(output.enableAutoBranchCreation),
    enableBasicAuth: __expectBoolean(output.enableBasicAuth),
    enableBranchAutoBuild: __expectBoolean(output.enableBranchAutoBuild),
    enableBranchAutoDeletion: __expectBoolean(output.enableBranchAutoDeletion),
    environmentVariables:
      output.environmentVariables != null ? de_EnvironmentVariables(output.environmentVariables, context) : undefined,
    iamServiceRoleArn: __expectString(output.iamServiceRoleArn),
    name: __expectString(output.name),
    platform: __expectString(output.platform),
    productionBranch:
      output.productionBranch != null ? de_ProductionBranch(output.productionBranch, context) : undefined,
    repository: __expectString(output.repository),
    repositoryCloneMethod: __expectString(output.repositoryCloneMethod),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Apps
 */
const de_Apps = (output: any, context: __SerdeContext): App[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_App(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Artifact
 */
const de_Artifact = (output: any, context: __SerdeContext): Artifact => {
  return {
    artifactFileName: __expectString(output.artifactFileName),
    artifactId: __expectString(output.artifactId),
  } as any;
};

/**
 * deserializeAws_restJson1Artifacts
 */
const de_Artifacts = (output: any, context: __SerdeContext): Artifact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Artifact(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssociatedResources
 */
const de_AssociatedResources = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1AutoBranchCreationConfig
 */
const de_AutoBranchCreationConfig = (output: any, context: __SerdeContext): AutoBranchCreationConfig => {
  return {
    basicAuthCredentials: __expectString(output.basicAuthCredentials),
    buildSpec: __expectString(output.buildSpec),
    enableAutoBuild: __expectBoolean(output.enableAutoBuild),
    enableBasicAuth: __expectBoolean(output.enableBasicAuth),
    enablePerformanceMode: __expectBoolean(output.enablePerformanceMode),
    enablePullRequestPreview: __expectBoolean(output.enablePullRequestPreview),
    environmentVariables:
      output.environmentVariables != null ? de_EnvironmentVariables(output.environmentVariables, context) : undefined,
    framework: __expectString(output.framework),
    pullRequestEnvironmentName: __expectString(output.pullRequestEnvironmentName),
    stage: __expectString(output.stage),
  } as any;
};

/**
 * deserializeAws_restJson1AutoBranchCreationPatterns
 */
const de_AutoBranchCreationPatterns = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1AutoSubDomainCreationPatterns
 */
const de_AutoSubDomainCreationPatterns = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1BackendEnvironment
 */
const de_BackendEnvironment = (output: any, context: __SerdeContext): BackendEnvironment => {
  return {
    backendEnvironmentArn: __expectString(output.backendEnvironmentArn),
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    deploymentArtifacts: __expectString(output.deploymentArtifacts),
    environmentName: __expectString(output.environmentName),
    stackName: __expectString(output.stackName),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BackendEnvironments
 */
const de_BackendEnvironments = (output: any, context: __SerdeContext): BackendEnvironment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BackendEnvironment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Branch
 */
const de_Branch = (output: any, context: __SerdeContext): Branch => {
  return {
    activeJobId: __expectString(output.activeJobId),
    associatedResources:
      output.associatedResources != null ? de_AssociatedResources(output.associatedResources, context) : undefined,
    backendEnvironmentArn: __expectString(output.backendEnvironmentArn),
    basicAuthCredentials: __expectString(output.basicAuthCredentials),
    branchArn: __expectString(output.branchArn),
    branchName: __expectString(output.branchName),
    buildSpec: __expectString(output.buildSpec),
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    customDomains: output.customDomains != null ? de_CustomDomains(output.customDomains, context) : undefined,
    description: __expectString(output.description),
    destinationBranch: __expectString(output.destinationBranch),
    displayName: __expectString(output.displayName),
    enableAutoBuild: __expectBoolean(output.enableAutoBuild),
    enableBasicAuth: __expectBoolean(output.enableBasicAuth),
    enableNotification: __expectBoolean(output.enableNotification),
    enablePerformanceMode: __expectBoolean(output.enablePerformanceMode),
    enablePullRequestPreview: __expectBoolean(output.enablePullRequestPreview),
    environmentVariables:
      output.environmentVariables != null ? de_EnvironmentVariables(output.environmentVariables, context) : undefined,
    framework: __expectString(output.framework),
    pullRequestEnvironmentName: __expectString(output.pullRequestEnvironmentName),
    sourceBranch: __expectString(output.sourceBranch),
    stage: __expectString(output.stage),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    thumbnailUrl: __expectString(output.thumbnailUrl),
    totalNumberOfJobs: __expectString(output.totalNumberOfJobs),
    ttl: __expectString(output.ttl),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Branches
 */
const de_Branches = (output: any, context: __SerdeContext): Branch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Branch(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CustomDomains
 */
const de_CustomDomains = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1CustomRule
 */
const de_CustomRule = (output: any, context: __SerdeContext): CustomRule => {
  return {
    condition: __expectString(output.condition),
    source: __expectString(output.source),
    status: __expectString(output.status),
    target: __expectString(output.target),
  } as any;
};

/**
 * deserializeAws_restJson1CustomRules
 */
const de_CustomRules = (output: any, context: __SerdeContext): CustomRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CustomRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DomainAssociation
 */
const de_DomainAssociation = (output: any, context: __SerdeContext): DomainAssociation => {
  return {
    autoSubDomainCreationPatterns:
      output.autoSubDomainCreationPatterns != null
        ? de_AutoSubDomainCreationPatterns(output.autoSubDomainCreationPatterns, context)
        : undefined,
    autoSubDomainIAMRole: __expectString(output.autoSubDomainIAMRole),
    certificateVerificationDNSRecord: __expectString(output.certificateVerificationDNSRecord),
    domainAssociationArn: __expectString(output.domainAssociationArn),
    domainName: __expectString(output.domainName),
    domainStatus: __expectString(output.domainStatus),
    enableAutoSubDomain: __expectBoolean(output.enableAutoSubDomain),
    statusReason: __expectString(output.statusReason),
    subDomains: output.subDomains != null ? de_SubDomains(output.subDomains, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DomainAssociations
 */
const de_DomainAssociations = (output: any, context: __SerdeContext): DomainAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DomainAssociation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EnvironmentVariables
 */
const de_EnvironmentVariables = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1FileUploadUrls
 */
const de_FileUploadUrls = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Job
 */
const de_Job = (output: any, context: __SerdeContext): Job => {
  return {
    steps: output.steps != null ? de_Steps(output.steps, context) : undefined,
    summary: output.summary != null ? de_JobSummary(output.summary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1JobSummaries
 */
const de_JobSummaries = (output: any, context: __SerdeContext): JobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JobSummary
 */
const de_JobSummary = (output: any, context: __SerdeContext): JobSummary => {
  return {
    commitId: __expectString(output.commitId),
    commitMessage: __expectString(output.commitMessage),
    commitTime:
      output.commitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.commitTime))) : undefined,
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    jobArn: __expectString(output.jobArn),
    jobId: __expectString(output.jobId),
    jobType: __expectString(output.jobType),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1ProductionBranch
 */
const de_ProductionBranch = (output: any, context: __SerdeContext): ProductionBranch => {
  return {
    branchName: __expectString(output.branchName),
    lastDeployTime:
      output.lastDeployTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastDeployTime)))
        : undefined,
    status: __expectString(output.status),
    thumbnailUrl: __expectString(output.thumbnailUrl),
  } as any;
};

/**
 * deserializeAws_restJson1Screenshots
 */
const de_Screenshots = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Step
 */
const de_Step = (output: any, context: __SerdeContext): Step => {
  return {
    artifactsUrl: __expectString(output.artifactsUrl),
    context: __expectString(output.context),
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    logUrl: __expectString(output.logUrl),
    screenshots: output.screenshots != null ? de_Screenshots(output.screenshots, context) : undefined,
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
    stepName: __expectString(output.stepName),
    testArtifactsUrl: __expectString(output.testArtifactsUrl),
    testConfigUrl: __expectString(output.testConfigUrl),
  } as any;
};

/**
 * deserializeAws_restJson1Steps
 */
const de_Steps = (output: any, context: __SerdeContext): Step[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Step(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SubDomain
 */
const de_SubDomain = (output: any, context: __SerdeContext): SubDomain => {
  return {
    dnsRecord: __expectString(output.dnsRecord),
    subDomainSetting:
      output.subDomainSetting != null ? de_SubDomainSetting(output.subDomainSetting, context) : undefined,
    verified: __expectBoolean(output.verified),
  } as any;
};

/**
 * deserializeAws_restJson1SubDomains
 */
const de_SubDomains = (output: any, context: __SerdeContext): SubDomain[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SubDomain(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SubDomainSetting
 */
const de_SubDomainSetting = (output: any, context: __SerdeContext): SubDomainSetting => {
  return {
    branchName: __expectString(output.branchName),
    prefix: __expectString(output.prefix),
  } as any;
};

/**
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Webhook
 */
const de_Webhook = (output: any, context: __SerdeContext): Webhook => {
  return {
    branchName: __expectString(output.branchName),
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    description: __expectString(output.description),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateTime))) : undefined,
    webhookArn: __expectString(output.webhookArn),
    webhookId: __expectString(output.webhookId),
    webhookUrl: __expectString(output.webhookUrl),
  } as any;
};

/**
 * deserializeAws_restJson1Webhooks
 */
const de_Webhooks = (output: any, context: __SerdeContext): Webhook[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Webhook(entry, context);
    });
  return retVal;
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
