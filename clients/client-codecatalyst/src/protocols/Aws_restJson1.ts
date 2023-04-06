// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateAccessTokenCommandInput, CreateAccessTokenCommandOutput } from "../commands/CreateAccessTokenCommand";
import {
  CreateDevEnvironmentCommandInput,
  CreateDevEnvironmentCommandOutput,
} from "../commands/CreateDevEnvironmentCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "../commands/CreateProjectCommand";
import {
  CreateSourceRepositoryBranchCommandInput,
  CreateSourceRepositoryBranchCommandOutput,
} from "../commands/CreateSourceRepositoryBranchCommand";
import { DeleteAccessTokenCommandInput, DeleteAccessTokenCommandOutput } from "../commands/DeleteAccessTokenCommand";
import {
  DeleteDevEnvironmentCommandInput,
  DeleteDevEnvironmentCommandOutput,
} from "../commands/DeleteDevEnvironmentCommand";
import { GetDevEnvironmentCommandInput, GetDevEnvironmentCommandOutput } from "../commands/GetDevEnvironmentCommand";
import { GetProjectCommandInput, GetProjectCommandOutput } from "../commands/GetProjectCommand";
import {
  GetSourceRepositoryCloneUrlsCommandInput,
  GetSourceRepositoryCloneUrlsCommandOutput,
} from "../commands/GetSourceRepositoryCloneUrlsCommand";
import { GetSpaceCommandInput, GetSpaceCommandOutput } from "../commands/GetSpaceCommand";
import { GetSubscriptionCommandInput, GetSubscriptionCommandOutput } from "../commands/GetSubscriptionCommand";
import { GetUserDetailsCommandInput, GetUserDetailsCommandOutput } from "../commands/GetUserDetailsCommand";
import { ListAccessTokensCommandInput, ListAccessTokensCommandOutput } from "../commands/ListAccessTokensCommand";
import {
  ListDevEnvironmentsCommandInput,
  ListDevEnvironmentsCommandOutput,
} from "../commands/ListDevEnvironmentsCommand";
import { ListEventLogsCommandInput, ListEventLogsCommandOutput } from "../commands/ListEventLogsCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "../commands/ListProjectsCommand";
import {
  ListSourceRepositoriesCommandInput,
  ListSourceRepositoriesCommandOutput,
} from "../commands/ListSourceRepositoriesCommand";
import {
  ListSourceRepositoryBranchesCommandInput,
  ListSourceRepositoryBranchesCommandOutput,
} from "../commands/ListSourceRepositoryBranchesCommand";
import { ListSpacesCommandInput, ListSpacesCommandOutput } from "../commands/ListSpacesCommand";
import {
  StartDevEnvironmentCommandInput,
  StartDevEnvironmentCommandOutput,
} from "../commands/StartDevEnvironmentCommand";
import {
  StartDevEnvironmentSessionCommandInput,
  StartDevEnvironmentSessionCommandOutput,
} from "../commands/StartDevEnvironmentSessionCommand";
import { StopDevEnvironmentCommandInput, StopDevEnvironmentCommandOutput } from "../commands/StopDevEnvironmentCommand";
import {
  StopDevEnvironmentSessionCommandInput,
  StopDevEnvironmentSessionCommandOutput,
} from "../commands/StopDevEnvironmentSessionCommand";
import {
  UpdateDevEnvironmentCommandInput,
  UpdateDevEnvironmentCommandOutput,
} from "../commands/UpdateDevEnvironmentCommand";
import { VerifySessionCommandInput, VerifySessionCommandOutput } from "../commands/VerifySessionCommand";
import { CodeCatalystServiceException as __BaseException } from "../models/CodeCatalystServiceException";
import {
  AccessDeniedException,
  AccessTokenSummary,
  ConflictException,
  DevEnvironmentAccessDetails,
  DevEnvironmentRepositorySummary,
  DevEnvironmentSessionConfiguration,
  DevEnvironmentSummary,
  EmailAddress,
  EventLogEntry,
  EventPayload,
  ExecuteCommandSessionConfiguration,
  Filter,
  Ide,
  IdeConfiguration,
  ListSourceRepositoriesItem,
  ListSourceRepositoryBranchesItem,
  PersistentStorage,
  PersistentStorageConfiguration,
  ProjectInformation,
  ProjectListFilter,
  ProjectSummary,
  RepositoryInput,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  SpaceSummary,
  ThrottlingException,
  UserIdentity,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateAccessTokenCommand
 */
export const se_CreateAccessTokenCommand = async (
  input: CreateAccessTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/accessTokens";
  let body: any;
  body = JSON.stringify({
    ...(input.expiresTime != null && { expiresTime: input.expiresTime.toISOString().split(".")[0] + "Z" }),
    ...(input.name != null && { name: input.name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateDevEnvironmentCommand
 */
export const se_CreateDevEnvironmentCommand = async (
  input: CreateDevEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments";
  resolvedPath = __resolvedPath(resolvedPath, input, "spaceName", () => input.spaceName!, "{spaceName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "projectName", () => input.projectName!, "{projectName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.alias != null && { alias: input.alias }),
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.ides != null && { ides: se_IdeConfigurationList(input.ides, context) }),
    ...(input.inactivityTimeoutMinutes != null && { inactivityTimeoutMinutes: input.inactivityTimeoutMinutes }),
    ...(input.instanceType != null && { instanceType: input.instanceType }),
    ...(input.persistentStorage != null && {
      persistentStorage: se_PersistentStorageConfiguration(input.persistentStorage, context),
    }),
    ...(input.repositories != null && { repositories: se_RepositoriesInput(input.repositories, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateProjectCommand
 */
export const se_CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/spaces/{spaceName}/projects";
  resolvedPath = __resolvedPath(resolvedPath, input, "spaceName", () => input.spaceName!, "{spaceName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.displayName != null && { displayName: input.displayName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateSourceRepositoryBranchCommand
 */
export const se_CreateSourceRepositoryBranchCommand = async (
  input: CreateSourceRepositoryBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{sourceRepositoryName}/branches/{name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "spaceName", () => input.spaceName!, "{spaceName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "projectName", () => input.projectName!, "{projectName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "sourceRepositoryName",
    () => input.sourceRepositoryName!,
    "{sourceRepositoryName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.headCommitId != null && { headCommitId: input.headCommitId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteAccessTokenCommand
 */
export const se_DeleteAccessTokenCommand = async (
  input: DeleteAccessTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/accessTokens/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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
 * serializeAws_restJson1DeleteDevEnvironmentCommand
 */
export const se_DeleteDevEnvironmentCommand = async (
  input: DeleteDevEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "spaceName", () => input.spaceName!, "{spaceName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "projectName", () => input.projectName!, "{projectName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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
 * serializeAws_restJson1GetDevEnvironmentCommand
 */
export const se_GetDevEnvironmentCommand = async (
  input: GetDevEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "spaceName", () => input.spaceName!, "{spaceName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "projectName", () => input.projectName!, "{projectName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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
 * serializeAws_restJson1GetProjectCommand
 */
export const se_GetProjectCommand = async (
  input: GetProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/spaces/{spaceName}/projects/{name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "spaceName", () => input.spaceName!, "{spaceName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
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
 * serializeAws_restJson1GetSourceRepositoryCloneUrlsCommand
 */
export const se_GetSourceRepositoryCloneUrlsCommand = async (
  input: GetSourceRepositoryCloneUrlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{sourceRepositoryName}/cloneUrls";
  resolvedPath = __resolvedPath(resolvedPath, input, "spaceName", () => input.spaceName!, "{spaceName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "projectName", () => input.projectName!, "{projectName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "sourceRepositoryName",
    () => input.sourceRepositoryName!,
    "{sourceRepositoryName}",
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
 * serializeAws_restJson1GetSpaceCommand
 */
export const se_GetSpaceCommand = async (
  input: GetSpaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/spaces/{name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
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
 * serializeAws_restJson1GetSubscriptionCommand
 */
export const se_GetSubscriptionCommand = async (
  input: GetSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/spaces/{spaceName}/subscription";
  resolvedPath = __resolvedPath(resolvedPath, input, "spaceName", () => input.spaceName!, "{spaceName}", false);
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
 * serializeAws_restJson1GetUserDetailsCommand
 */
export const se_GetUserDetailsCommand = async (
  input: GetUserDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/userDetails";
  const query: any = map({
    id: [, input.id!],
    userName: [, input.userName!],
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
 * serializeAws_restJson1ListAccessTokensCommand
 */
export const se_ListAccessTokensCommand = async (
  input: ListAccessTokensCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/accessTokens";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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
 * serializeAws_restJson1ListDevEnvironmentsCommand
 */
export const se_ListDevEnvironmentsCommand = async (
  input: ListDevEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments";
  resolvedPath = __resolvedPath(resolvedPath, input, "spaceName", () => input.spaceName!, "{spaceName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "projectName", () => input.projectName!, "{projectName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_Filters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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
 * serializeAws_restJson1ListEventLogsCommand
 */
export const se_ListEventLogsCommand = async (
  input: ListEventLogsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/spaces/{spaceName}/eventLogs";
  resolvedPath = __resolvedPath(resolvedPath, input, "spaceName", () => input.spaceName!, "{spaceName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.endTime != null && { endTime: input.endTime.toISOString().split(".")[0] + "Z" }),
    ...(input.eventName != null && { eventName: input.eventName }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.startTime != null && { startTime: input.startTime.toISOString().split(".")[0] + "Z" }),
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
 * serializeAws_restJson1ListProjectsCommand
 */
export const se_ListProjectsCommand = async (
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/spaces/{spaceName}/projects";
  resolvedPath = __resolvedPath(resolvedPath, input, "spaceName", () => input.spaceName!, "{spaceName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_ProjectListFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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
 * serializeAws_restJson1ListSourceRepositoriesCommand
 */
export const se_ListSourceRepositoriesCommand = async (
  input: ListSourceRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories";
  resolvedPath = __resolvedPath(resolvedPath, input, "spaceName", () => input.spaceName!, "{spaceName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "projectName", () => input.projectName!, "{projectName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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
 * serializeAws_restJson1ListSourceRepositoryBranchesCommand
 */
export const se_ListSourceRepositoryBranchesCommand = async (
  input: ListSourceRepositoryBranchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{sourceRepositoryName}/branches";
  resolvedPath = __resolvedPath(resolvedPath, input, "spaceName", () => input.spaceName!, "{spaceName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "projectName", () => input.projectName!, "{projectName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "sourceRepositoryName",
    () => input.sourceRepositoryName!,
    "{sourceRepositoryName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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
 * serializeAws_restJson1ListSpacesCommand
 */
export const se_ListSpacesCommand = async (
  input: ListSpacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/spaces";
  let body: any;
  body = JSON.stringify({
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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
 * serializeAws_restJson1StartDevEnvironmentCommand
 */
export const se_StartDevEnvironmentCommand = async (
  input: StartDevEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/start";
  resolvedPath = __resolvedPath(resolvedPath, input, "spaceName", () => input.spaceName!, "{spaceName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "projectName", () => input.projectName!, "{projectName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ides != null && { ides: se_IdeConfigurationList(input.ides, context) }),
    ...(input.inactivityTimeoutMinutes != null && { inactivityTimeoutMinutes: input.inactivityTimeoutMinutes }),
    ...(input.instanceType != null && { instanceType: input.instanceType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartDevEnvironmentSessionCommand
 */
export const se_StartDevEnvironmentSessionCommand = async (
  input: StartDevEnvironmentSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/session";
  resolvedPath = __resolvedPath(resolvedPath, input, "spaceName", () => input.spaceName!, "{spaceName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "projectName", () => input.projectName!, "{projectName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.sessionConfiguration != null && {
      sessionConfiguration: se_DevEnvironmentSessionConfiguration(input.sessionConfiguration, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StopDevEnvironmentCommand
 */
export const se_StopDevEnvironmentCommand = async (
  input: StopDevEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/stop";
  resolvedPath = __resolvedPath(resolvedPath, input, "spaceName", () => input.spaceName!, "{spaceName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "projectName", () => input.projectName!, "{projectName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StopDevEnvironmentSessionCommand
 */
export const se_StopDevEnvironmentSessionCommand = async (
  input: StopDevEnvironmentSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/session/{sessionId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "spaceName", () => input.spaceName!, "{spaceName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "projectName", () => input.projectName!, "{projectName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "sessionId", () => input.sessionId!, "{sessionId}", false);
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
 * serializeAws_restJson1UpdateDevEnvironmentCommand
 */
export const se_UpdateDevEnvironmentCommand = async (
  input: UpdateDevEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "spaceName", () => input.spaceName!, "{spaceName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "projectName", () => input.projectName!, "{projectName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.alias != null && { alias: input.alias }),
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.ides != null && { ides: se_IdeConfigurationList(input.ides, context) }),
    ...(input.inactivityTimeoutMinutes != null && { inactivityTimeoutMinutes: input.inactivityTimeoutMinutes }),
    ...(input.instanceType != null && { instanceType: input.instanceType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1VerifySessionCommand
 */
export const se_VerifySessionCommand = async (
  input: VerifySessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/session";
  let body: any;
  body = "";
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
 * deserializeAws_restJson1CreateAccessTokenCommand
 */
export const de_CreateAccessTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessTokenCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateAccessTokenCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accessTokenId != null) {
    contents.accessTokenId = __expectString(data.accessTokenId);
  }
  if (data.expiresTime != null) {
    contents.expiresTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.expiresTime));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.secret != null) {
    contents.secret = __expectString(data.secret);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAccessTokenCommandError
 */
const de_CreateAccessTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateDevEnvironmentCommand
 */
export const de_CreateDevEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDevEnvironmentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateDevEnvironmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.projectName != null) {
    contents.projectName = __expectString(data.projectName);
  }
  if (data.spaceName != null) {
    contents.spaceName = __expectString(data.spaceName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDevEnvironmentCommandError
 */
const de_CreateDevEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDevEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateProjectCommand
 */
export const de_CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateProjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.displayName != null) {
    contents.displayName = __expectString(data.displayName);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.spaceName != null) {
    contents.spaceName = __expectString(data.spaceName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateProjectCommandError
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
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateSourceRepositoryBranchCommand
 */
export const de_CreateSourceRepositoryBranchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSourceRepositoryBranchCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateSourceRepositoryBranchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.headCommitId != null) {
    contents.headCommitId = __expectString(data.headCommitId);
  }
  if (data.lastUpdatedTime != null) {
    contents.lastUpdatedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.lastUpdatedTime));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.ref != null) {
    contents.ref = __expectString(data.ref);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateSourceRepositoryBranchCommandError
 */
const de_CreateSourceRepositoryBranchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSourceRepositoryBranchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteAccessTokenCommand
 */
export const de_DeleteAccessTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAccessTokenCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAccessTokenCommandError
 */
const de_DeleteAccessTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteDevEnvironmentCommand
 */
export const de_DeleteDevEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDevEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDevEnvironmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.projectName != null) {
    contents.projectName = __expectString(data.projectName);
  }
  if (data.spaceName != null) {
    contents.spaceName = __expectString(data.spaceName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDevEnvironmentCommandError
 */
const de_DeleteDevEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDevEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetDevEnvironmentCommand
 */
export const de_GetDevEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDevEnvironmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alias != null) {
    contents.alias = __expectString(data.alias);
  }
  if (data.creatorId != null) {
    contents.creatorId = __expectString(data.creatorId);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.ides != null) {
    contents.ides = de_Ides(data.ides, context);
  }
  if (data.inactivityTimeoutMinutes != null) {
    contents.inactivityTimeoutMinutes = __expectInt32(data.inactivityTimeoutMinutes);
  }
  if (data.instanceType != null) {
    contents.instanceType = __expectString(data.instanceType);
  }
  if (data.lastUpdatedTime != null) {
    contents.lastUpdatedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.lastUpdatedTime));
  }
  if (data.persistentStorage != null) {
    contents.persistentStorage = de_PersistentStorage(data.persistentStorage, context);
  }
  if (data.projectName != null) {
    contents.projectName = __expectString(data.projectName);
  }
  if (data.repositories != null) {
    contents.repositories = de_DevEnvironmentRepositorySummaries(data.repositories, context);
  }
  if (data.spaceName != null) {
    contents.spaceName = __expectString(data.spaceName);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusReason != null) {
    contents.statusReason = __expectString(data.statusReason);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDevEnvironmentCommandError
 */
const de_GetDevEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetProjectCommand
 */
export const de_GetProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetProjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.displayName != null) {
    contents.displayName = __expectString(data.displayName);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.spaceName != null) {
    contents.spaceName = __expectString(data.spaceName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetProjectCommandError
 */
const de_GetProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetSourceRepositoryCloneUrlsCommand
 */
export const de_GetSourceRepositoryCloneUrlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSourceRepositoryCloneUrlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSourceRepositoryCloneUrlsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.https != null) {
    contents.https = __expectString(data.https);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSourceRepositoryCloneUrlsCommandError
 */
const de_GetSourceRepositoryCloneUrlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSourceRepositoryCloneUrlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetSpaceCommand
 */
export const de_GetSpaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSpaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSpaceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.displayName != null) {
    contents.displayName = __expectString(data.displayName);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.regionName != null) {
    contents.regionName = __expectString(data.regionName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSpaceCommandError
 */
const de_GetSpaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSpaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetSubscriptionCommand
 */
export const de_GetSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSubscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.awsAccountName != null) {
    contents.awsAccountName = __expectString(data.awsAccountName);
  }
  if (data.subscriptionType != null) {
    contents.subscriptionType = __expectString(data.subscriptionType);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSubscriptionCommandError
 */
const de_GetSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetUserDetailsCommand
 */
export const de_GetUserDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetUserDetailsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.displayName != null) {
    contents.displayName = __expectString(data.displayName);
  }
  if (data.primaryEmail != null) {
    contents.primaryEmail = de_EmailAddress(data.primaryEmail, context);
  }
  if (data.userId != null) {
    contents.userId = __expectString(data.userId);
  }
  if (data.userName != null) {
    contents.userName = __expectString(data.userName);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetUserDetailsCommandError
 */
const de_GetUserDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAccessTokensCommand
 */
export const de_ListAccessTokensCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessTokensCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAccessTokensCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_AccessTokenSummaries(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAccessTokensCommandError
 */
const de_ListAccessTokensCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessTokensCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListDevEnvironmentsCommand
 */
export const de_ListDevEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevEnvironmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDevEnvironmentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_DevEnvironmentSummaryList(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDevEnvironmentsCommandError
 */
const de_ListDevEnvironmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevEnvironmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListEventLogsCommand
 */
export const de_ListEventLogsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventLogsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListEventLogsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_EventLogEntries(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListEventLogsCommandError
 */
const de_ListEventLogsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventLogsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListProjectsCommand
 */
export const de_ListProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListProjectsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_ProjectSummaries(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListProjectsCommandError
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
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListSourceRepositoriesCommand
 */
export const de_ListSourceRepositoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceRepositoriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSourceRepositoriesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_ListSourceRepositoriesItems(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSourceRepositoriesCommandError
 */
const de_ListSourceRepositoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceRepositoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListSourceRepositoryBranchesCommand
 */
export const de_ListSourceRepositoryBranchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceRepositoryBranchesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSourceRepositoryBranchesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_ListSourceRepositoryBranchesItems(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSourceRepositoryBranchesCommandError
 */
const de_ListSourceRepositoryBranchesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceRepositoryBranchesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListSpacesCommand
 */
export const de_ListSpacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSpacesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSpacesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_SpaceSummaries(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSpacesCommandError
 */
const de_ListSpacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSpacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartDevEnvironmentCommand
 */
export const de_StartDevEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDevEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartDevEnvironmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.projectName != null) {
    contents.projectName = __expectString(data.projectName);
  }
  if (data.spaceName != null) {
    contents.spaceName = __expectString(data.spaceName);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartDevEnvironmentCommandError
 */
const de_StartDevEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDevEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartDevEnvironmentSessionCommand
 */
export const de_StartDevEnvironmentSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDevEnvironmentSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartDevEnvironmentSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accessDetails != null) {
    contents.accessDetails = de_DevEnvironmentAccessDetails(data.accessDetails, context);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.projectName != null) {
    contents.projectName = __expectString(data.projectName);
  }
  if (data.sessionId != null) {
    contents.sessionId = __expectString(data.sessionId);
  }
  if (data.spaceName != null) {
    contents.spaceName = __expectString(data.spaceName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartDevEnvironmentSessionCommandError
 */
const de_StartDevEnvironmentSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDevEnvironmentSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StopDevEnvironmentCommand
 */
export const de_StopDevEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDevEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopDevEnvironmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.projectName != null) {
    contents.projectName = __expectString(data.projectName);
  }
  if (data.spaceName != null) {
    contents.spaceName = __expectString(data.spaceName);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StopDevEnvironmentCommandError
 */
const de_StopDevEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDevEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StopDevEnvironmentSessionCommand
 */
export const de_StopDevEnvironmentSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDevEnvironmentSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopDevEnvironmentSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.projectName != null) {
    contents.projectName = __expectString(data.projectName);
  }
  if (data.sessionId != null) {
    contents.sessionId = __expectString(data.sessionId);
  }
  if (data.spaceName != null) {
    contents.spaceName = __expectString(data.spaceName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StopDevEnvironmentSessionCommandError
 */
const de_StopDevEnvironmentSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDevEnvironmentSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateDevEnvironmentCommand
 */
export const de_UpdateDevEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDevEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDevEnvironmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alias != null) {
    contents.alias = __expectString(data.alias);
  }
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.ides != null) {
    contents.ides = de_IdeConfigurationList(data.ides, context);
  }
  if (data.inactivityTimeoutMinutes != null) {
    contents.inactivityTimeoutMinutes = __expectInt32(data.inactivityTimeoutMinutes);
  }
  if (data.instanceType != null) {
    contents.instanceType = __expectString(data.instanceType);
  }
  if (data.projectName != null) {
    contents.projectName = __expectString(data.projectName);
  }
  if (data.spaceName != null) {
    contents.spaceName = __expectString(data.spaceName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDevEnvironmentCommandError
 */
const de_UpdateDevEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDevEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1VerifySessionCommand
 */
export const de_VerifySessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifySessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_VerifySessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.identity != null) {
    contents.identity = __expectString(data.identity);
  }
  return contents;
};

/**
 * deserializeAws_restJson1VerifySessionCommandError
 */
const de_VerifySessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifySessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codecatalyst#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConflictException({
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
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1DevEnvironmentSessionConfiguration
 */
const se_DevEnvironmentSessionConfiguration = (
  input: DevEnvironmentSessionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.executeCommandSessionConfiguration != null && {
      executeCommandSessionConfiguration: se_ExecuteCommandSessionConfiguration(
        input.executeCommandSessionConfiguration,
        context
      ),
    }),
    ...(input.sessionType != null && { sessionType: input.sessionType }),
  };
};

/**
 * serializeAws_restJson1ExecuteCommandSessionConfiguration
 */
const se_ExecuteCommandSessionConfiguration = (
  input: ExecuteCommandSessionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.arguments != null && {
      arguments: se_ExecuteCommandSessionConfigurationArguments(input.arguments, context),
    }),
    ...(input.command != null && { command: input.command }),
  };
};

/**
 * serializeAws_restJson1ExecuteCommandSessionConfigurationArguments
 */
const se_ExecuteCommandSessionConfigurationArguments = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.comparisonOperator != null && { comparisonOperator: input.comparisonOperator }),
    ...(input.key != null && { key: input.key }),
    ...(input.values != null && { values: se_StringList(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1Filters
 */
const se_Filters = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Filter(entry, context);
    });
};

/**
 * serializeAws_restJson1IdeConfiguration
 */
const se_IdeConfiguration = (input: IdeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.runtime != null && { runtime: input.runtime }),
  };
};

/**
 * serializeAws_restJson1IdeConfigurationList
 */
const se_IdeConfigurationList = (input: IdeConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_IdeConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1PersistentStorageConfiguration
 */
const se_PersistentStorageConfiguration = (input: PersistentStorageConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.sizeInGiB != null && { sizeInGiB: input.sizeInGiB }),
  };
};

/**
 * serializeAws_restJson1ProjectListFilter
 */
const se_ProjectListFilter = (input: ProjectListFilter, context: __SerdeContext): any => {
  return {
    ...(input.comparisonOperator != null && { comparisonOperator: input.comparisonOperator }),
    ...(input.key != null && { key: input.key }),
    ...(input.values != null && { values: se_StringList(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1ProjectListFilters
 */
const se_ProjectListFilters = (input: ProjectListFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ProjectListFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1RepositoriesInput
 */
const se_RepositoriesInput = (input: RepositoryInput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RepositoryInput(entry, context);
    });
};

/**
 * serializeAws_restJson1RepositoryInput
 */
const se_RepositoryInput = (input: RepositoryInput, context: __SerdeContext): any => {
  return {
    ...(input.branchName != null && { branchName: input.branchName }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_restJson1StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_restJson1AccessTokenSummaries
 */
const de_AccessTokenSummaries = (output: any, context: __SerdeContext): AccessTokenSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccessTokenSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AccessTokenSummary
 */
const de_AccessTokenSummary = (output: any, context: __SerdeContext): AccessTokenSummary => {
  return {
    expiresTime:
      output.expiresTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.expiresTime)) : undefined,
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1DevEnvironmentAccessDetails
 */
const de_DevEnvironmentAccessDetails = (output: any, context: __SerdeContext): DevEnvironmentAccessDetails => {
  return {
    streamUrl: __expectString(output.streamUrl),
    tokenValue: __expectString(output.tokenValue),
  } as any;
};

/**
 * deserializeAws_restJson1DevEnvironmentRepositorySummaries
 */
const de_DevEnvironmentRepositorySummaries = (
  output: any,
  context: __SerdeContext
): DevEnvironmentRepositorySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DevEnvironmentRepositorySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DevEnvironmentRepositorySummary
 */
const de_DevEnvironmentRepositorySummary = (output: any, context: __SerdeContext): DevEnvironmentRepositorySummary => {
  return {
    branchName: __expectString(output.branchName),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

/**
 * deserializeAws_restJson1DevEnvironmentSummary
 */
const de_DevEnvironmentSummary = (output: any, context: __SerdeContext): DevEnvironmentSummary => {
  return {
    alias: __expectString(output.alias),
    creatorId: __expectString(output.creatorId),
    id: __expectString(output.id),
    ides: output.ides != null ? de_Ides(output.ides, context) : undefined,
    inactivityTimeoutMinutes: __expectInt32(output.inactivityTimeoutMinutes),
    instanceType: __expectString(output.instanceType),
    lastUpdatedTime:
      output.lastUpdatedTime != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.lastUpdatedTime))
        : undefined,
    persistentStorage:
      output.persistentStorage != null ? de_PersistentStorage(output.persistentStorage, context) : undefined,
    projectName: __expectString(output.projectName),
    repositories:
      output.repositories != null ? de_DevEnvironmentRepositorySummaries(output.repositories, context) : undefined,
    spaceName: __expectString(output.spaceName),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
  } as any;
};

/**
 * deserializeAws_restJson1DevEnvironmentSummaryList
 */
const de_DevEnvironmentSummaryList = (output: any, context: __SerdeContext): DevEnvironmentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DevEnvironmentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EmailAddress
 */
const de_EmailAddress = (output: any, context: __SerdeContext): EmailAddress => {
  return {
    email: __expectString(output.email),
    verified: __expectBoolean(output.verified),
  } as any;
};

/**
 * deserializeAws_restJson1EventLogEntries
 */
const de_EventLogEntries = (output: any, context: __SerdeContext): EventLogEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventLogEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EventLogEntry
 */
const de_EventLogEntry = (output: any, context: __SerdeContext): EventLogEntry => {
  return {
    errorCode: __expectString(output.errorCode),
    eventCategory: __expectString(output.eventCategory),
    eventName: __expectString(output.eventName),
    eventSource: __expectString(output.eventSource),
    eventTime:
      output.eventTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.eventTime)) : undefined,
    eventType: __expectString(output.eventType),
    id: __expectString(output.id),
    operationType: __expectString(output.operationType),
    projectInformation:
      output.projectInformation != null ? de_ProjectInformation(output.projectInformation, context) : undefined,
    requestId: __expectString(output.requestId),
    requestPayload: output.requestPayload != null ? de_EventPayload(output.requestPayload, context) : undefined,
    responsePayload: output.responsePayload != null ? de_EventPayload(output.responsePayload, context) : undefined,
    sourceIpAddress: __expectString(output.sourceIpAddress),
    userAgent: __expectString(output.userAgent),
    userIdentity: output.userIdentity != null ? de_UserIdentity(output.userIdentity, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EventPayload
 */
const de_EventPayload = (output: any, context: __SerdeContext): EventPayload => {
  return {
    contentType: __expectString(output.contentType),
    data: __expectString(output.data),
  } as any;
};

/**
 * deserializeAws_restJson1Ide
 */
const de_Ide = (output: any, context: __SerdeContext): Ide => {
  return {
    name: __expectString(output.name),
    runtime: __expectString(output.runtime),
  } as any;
};

/**
 * deserializeAws_restJson1IdeConfiguration
 */
const de_IdeConfiguration = (output: any, context: __SerdeContext): IdeConfiguration => {
  return {
    name: __expectString(output.name),
    runtime: __expectString(output.runtime),
  } as any;
};

/**
 * deserializeAws_restJson1IdeConfigurationList
 */
const de_IdeConfigurationList = (output: any, context: __SerdeContext): IdeConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IdeConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Ides
 */
const de_Ides = (output: any, context: __SerdeContext): Ide[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Ide(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListSourceRepositoriesItem
 */
const de_ListSourceRepositoriesItem = (output: any, context: __SerdeContext): ListSourceRepositoriesItem => {
  return {
    createdTime:
      output.createdTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdTime)) : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastUpdatedTime:
      output.lastUpdatedTime != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.lastUpdatedTime))
        : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ListSourceRepositoriesItems
 */
const de_ListSourceRepositoriesItems = (output: any, context: __SerdeContext): ListSourceRepositoriesItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListSourceRepositoriesItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListSourceRepositoryBranchesItem
 */
const de_ListSourceRepositoryBranchesItem = (
  output: any,
  context: __SerdeContext
): ListSourceRepositoryBranchesItem => {
  return {
    headCommitId: __expectString(output.headCommitId),
    lastUpdatedTime:
      output.lastUpdatedTime != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.lastUpdatedTime))
        : undefined,
    name: __expectString(output.name),
    ref: __expectString(output.ref),
  } as any;
};

/**
 * deserializeAws_restJson1ListSourceRepositoryBranchesItems
 */
const de_ListSourceRepositoryBranchesItems = (
  output: any,
  context: __SerdeContext
): ListSourceRepositoryBranchesItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListSourceRepositoryBranchesItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PersistentStorage
 */
const de_PersistentStorage = (output: any, context: __SerdeContext): PersistentStorage => {
  return {
    sizeInGiB: __expectInt32(output.sizeInGiB),
  } as any;
};

/**
 * deserializeAws_restJson1ProjectInformation
 */
const de_ProjectInformation = (output: any, context: __SerdeContext): ProjectInformation => {
  return {
    name: __expectString(output.name),
    projectId: __expectString(output.projectId),
  } as any;
};

/**
 * deserializeAws_restJson1ProjectSummaries
 */
const de_ProjectSummaries = (output: any, context: __SerdeContext): ProjectSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProjectSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProjectSummary
 */
const de_ProjectSummary = (output: any, context: __SerdeContext): ProjectSummary => {
  return {
    description: __expectString(output.description),
    displayName: __expectString(output.displayName),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1SpaceSummaries
 */
const de_SpaceSummaries = (output: any, context: __SerdeContext): SpaceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SpaceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SpaceSummary
 */
const de_SpaceSummary = (output: any, context: __SerdeContext): SpaceSummary => {
  return {
    description: __expectString(output.description),
    displayName: __expectString(output.displayName),
    name: __expectString(output.name),
    regionName: __expectString(output.regionName),
  } as any;
};

/**
 * deserializeAws_restJson1UserIdentity
 */
const de_UserIdentity = (output: any, context: __SerdeContext): UserIdentity => {
  return {
    awsAccountId: __expectString(output.awsAccountId),
    principalId: __expectString(output.principalId),
    userName: __expectString(output.userName),
    userType: __expectString(output.userType),
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
