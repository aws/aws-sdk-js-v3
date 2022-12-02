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
  parseRfc3339DateTime as __parseRfc3339DateTime,
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

export const serializeAws_restJson1CreateAccessTokenCommand = async (
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

export const serializeAws_restJson1CreateDevEnvironmentCommand = async (
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
    ...(input.ides != null && { ides: serializeAws_restJson1IdeConfigurationList(input.ides, context) }),
    ...(input.inactivityTimeoutMinutes != null && { inactivityTimeoutMinutes: input.inactivityTimeoutMinutes }),
    ...(input.instanceType != null && { instanceType: input.instanceType }),
    ...(input.persistentStorage != null && {
      persistentStorage: serializeAws_restJson1PersistentStorageConfiguration(input.persistentStorage, context),
    }),
    ...(input.repositories != null && {
      repositories: serializeAws_restJson1RepositoriesInput(input.repositories, context),
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

export const serializeAws_restJson1CreateProjectCommand = async (
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

export const serializeAws_restJson1CreateSourceRepositoryBranchCommand = async (
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

export const serializeAws_restJson1DeleteAccessTokenCommand = async (
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

export const serializeAws_restJson1DeleteDevEnvironmentCommand = async (
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

export const serializeAws_restJson1GetDevEnvironmentCommand = async (
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

export const serializeAws_restJson1GetProjectCommand = async (
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

export const serializeAws_restJson1GetSourceRepositoryCloneUrlsCommand = async (
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

export const serializeAws_restJson1GetSpaceCommand = async (
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

export const serializeAws_restJson1GetSubscriptionCommand = async (
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

export const serializeAws_restJson1GetUserDetailsCommand = async (
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

export const serializeAws_restJson1ListAccessTokensCommand = async (
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

export const serializeAws_restJson1ListDevEnvironmentsCommand = async (
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
    ...(input.filters != null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
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

export const serializeAws_restJson1ListEventLogsCommand = async (
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

export const serializeAws_restJson1ListProjectsCommand = async (
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
    ...(input.filters != null && { filters: serializeAws_restJson1ProjectListFilters(input.filters, context) }),
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

export const serializeAws_restJson1ListSourceRepositoriesCommand = async (
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

export const serializeAws_restJson1ListSourceRepositoryBranchesCommand = async (
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

export const serializeAws_restJson1ListSpacesCommand = async (
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

export const serializeAws_restJson1StartDevEnvironmentCommand = async (
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
    ...(input.ides != null && { ides: serializeAws_restJson1IdeConfigurationList(input.ides, context) }),
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

export const serializeAws_restJson1StartDevEnvironmentSessionCommand = async (
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
      sessionConfiguration: serializeAws_restJson1DevEnvironmentSessionConfiguration(
        input.sessionConfiguration,
        context
      ),
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

export const serializeAws_restJson1StopDevEnvironmentCommand = async (
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

export const serializeAws_restJson1UpdateDevEnvironmentCommand = async (
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
    ...(input.ides != null && { ides: serializeAws_restJson1IdeConfigurationList(input.ides, context) }),
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

export const serializeAws_restJson1VerifySessionCommand = async (
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

export const deserializeAws_restJson1CreateAccessTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessTokenCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAccessTokenCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.expiresTime != null) {
    contents.expiresTime = __expectNonNull(__parseRfc3339DateTime(data.expiresTime));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.secret != null) {
    contents.secret = __expectString(data.secret);
  }
  return contents;
};

const deserializeAws_restJson1CreateAccessTokenCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateDevEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDevEnvironmentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDevEnvironmentCommandError(output, context);
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

const deserializeAws_restJson1CreateDevEnvironmentCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateProjectCommandError(output, context);
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

const deserializeAws_restJson1CreateProjectCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateSourceRepositoryBranchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSourceRepositoryBranchCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSourceRepositoryBranchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.headCommitId != null) {
    contents.headCommitId = __expectString(data.headCommitId);
  }
  if (data.lastUpdatedTime != null) {
    contents.lastUpdatedTime = __expectNonNull(__parseRfc3339DateTime(data.lastUpdatedTime));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.ref != null) {
    contents.ref = __expectString(data.ref);
  }
  return contents;
};

const deserializeAws_restJson1CreateSourceRepositoryBranchCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteAccessTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAccessTokenCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteAccessTokenCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteDevEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDevEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDevEnvironmentCommandError(output, context);
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

const deserializeAws_restJson1DeleteDevEnvironmentCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDevEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDevEnvironmentCommandError(output, context);
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
    contents.ides = deserializeAws_restJson1Ides(data.ides, context);
  }
  if (data.inactivityTimeoutMinutes != null) {
    contents.inactivityTimeoutMinutes = __expectInt32(data.inactivityTimeoutMinutes);
  }
  if (data.instanceType != null) {
    contents.instanceType = __expectString(data.instanceType);
  }
  if (data.lastUpdatedTime != null) {
    contents.lastUpdatedTime = __expectNonNull(__parseRfc3339DateTime(data.lastUpdatedTime));
  }
  if (data.persistentStorage != null) {
    contents.persistentStorage = deserializeAws_restJson1PersistentStorage(data.persistentStorage, context);
  }
  if (data.projectName != null) {
    contents.projectName = __expectString(data.projectName);
  }
  if (data.repositories != null) {
    contents.repositories = deserializeAws_restJson1DevEnvironmentRepositorySummaries(data.repositories, context);
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

const deserializeAws_restJson1GetDevEnvironmentCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetProjectCommandError(output, context);
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

const deserializeAws_restJson1GetProjectCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSourceRepositoryCloneUrlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSourceRepositoryCloneUrlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSourceRepositoryCloneUrlsCommandError(output, context);
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

const deserializeAws_restJson1GetSourceRepositoryCloneUrlsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSpaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSpaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSpaceCommandError(output, context);
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

const deserializeAws_restJson1GetSpaceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSubscriptionCommandError(output, context);
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

const deserializeAws_restJson1GetSubscriptionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetUserDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUserDetailsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.displayName != null) {
    contents.displayName = __expectString(data.displayName);
  }
  if (data.primaryEmail != null) {
    contents.primaryEmail = deserializeAws_restJson1EmailAddress(data.primaryEmail, context);
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

const deserializeAws_restJson1GetUserDetailsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListAccessTokensCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessTokensCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAccessTokensCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = deserializeAws_restJson1AccessTokenSummaries(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAccessTokensCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListDevEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevEnvironmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDevEnvironmentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = deserializeAws_restJson1DevEnvironmentSummaryList(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDevEnvironmentsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListEventLogsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventLogsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEventLogsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = deserializeAws_restJson1EventLogEntries(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListEventLogsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProjectsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = deserializeAws_restJson1ProjectSummaries(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListProjectsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListSourceRepositoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceRepositoriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSourceRepositoriesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = deserializeAws_restJson1ListSourceRepositoriesItems(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListSourceRepositoriesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListSourceRepositoryBranchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceRepositoryBranchesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSourceRepositoryBranchesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = deserializeAws_restJson1ListSourceRepositoryBranchesItems(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListSourceRepositoryBranchesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListSpacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSpacesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSpacesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = deserializeAws_restJson1SpaceSummaries(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListSpacesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartDevEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDevEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartDevEnvironmentCommandError(output, context);
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

const deserializeAws_restJson1StartDevEnvironmentCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartDevEnvironmentSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDevEnvironmentSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartDevEnvironmentSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accessDetails != null) {
    contents.accessDetails = deserializeAws_restJson1DevEnvironmentAccessDetails(data.accessDetails, context);
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

const deserializeAws_restJson1StartDevEnvironmentSessionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StopDevEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDevEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopDevEnvironmentCommandError(output, context);
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

const deserializeAws_restJson1StopDevEnvironmentCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateDevEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDevEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDevEnvironmentCommandError(output, context);
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
    contents.ides = deserializeAws_restJson1IdeConfigurationList(data.ides, context);
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

const deserializeAws_restJson1UpdateDevEnvironmentCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1VerifySessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifySessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1VerifySessionCommandError(output, context);
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

const deserializeAws_restJson1VerifySessionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codecatalyst#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codecatalyst#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codecatalyst#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codecatalyst#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codecatalyst#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
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

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
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

const serializeAws_restJson1DevEnvironmentSessionConfiguration = (
  input: DevEnvironmentSessionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.executeCommandSessionConfiguration != null && {
      executeCommandSessionConfiguration: serializeAws_restJson1ExecuteCommandSessionConfiguration(
        input.executeCommandSessionConfiguration,
        context
      ),
    }),
    ...(input.sessionType != null && { sessionType: input.sessionType }),
  };
};

const serializeAws_restJson1ExecuteCommandSessionConfiguration = (
  input: ExecuteCommandSessionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.arguments != null && {
      arguments: serializeAws_restJson1ExecuteCommandSessionConfigurationArguments(input.arguments, context),
    }),
    ...(input.command != null && { command: input.command }),
  };
};

const serializeAws_restJson1ExecuteCommandSessionConfigurationArguments = (
  input: string[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.comparisonOperator != null && { comparisonOperator: input.comparisonOperator }),
    ...(input.key != null && { key: input.key }),
    ...(input.values != null && { values: serializeAws_restJson1StringList(input.values, context) }),
  };
};

const serializeAws_restJson1Filters = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Filter(entry, context);
    });
};

const serializeAws_restJson1IdeConfiguration = (input: IdeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.runtime != null && { runtime: input.runtime }),
  };
};

const serializeAws_restJson1IdeConfigurationList = (input: IdeConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1IdeConfiguration(entry, context);
    });
};

const serializeAws_restJson1PersistentStorageConfiguration = (
  input: PersistentStorageConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.sizeInGiB != null && { sizeInGiB: input.sizeInGiB }),
  };
};

const serializeAws_restJson1ProjectListFilter = (input: ProjectListFilter, context: __SerdeContext): any => {
  return {
    ...(input.comparisonOperator != null && { comparisonOperator: input.comparisonOperator }),
    ...(input.key != null && { key: input.key }),
    ...(input.values != null && { values: serializeAws_restJson1StringList(input.values, context) }),
  };
};

const serializeAws_restJson1ProjectListFilters = (input: ProjectListFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ProjectListFilter(entry, context);
    });
};

const serializeAws_restJson1RepositoriesInput = (input: RepositoryInput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RepositoryInput(entry, context);
    });
};

const serializeAws_restJson1RepositoryInput = (input: RepositoryInput, context: __SerdeContext): any => {
  return {
    ...(input.branchName != null && { branchName: input.branchName }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_restJson1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const deserializeAws_restJson1AccessTokenSummaries = (output: any, context: __SerdeContext): AccessTokenSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AccessTokenSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AccessTokenSummary = (output: any, context: __SerdeContext): AccessTokenSummary => {
  return {
    expiresTime: output.expiresTime != null ? __expectNonNull(__parseRfc3339DateTime(output.expiresTime)) : undefined,
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1DevEnvironmentAccessDetails = (
  output: any,
  context: __SerdeContext
): DevEnvironmentAccessDetails => {
  return {
    streamUrl: __expectString(output.streamUrl),
    tokenValue: __expectString(output.tokenValue),
  } as any;
};

const deserializeAws_restJson1DevEnvironmentRepositorySummaries = (
  output: any,
  context: __SerdeContext
): DevEnvironmentRepositorySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DevEnvironmentRepositorySummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DevEnvironmentRepositorySummary = (
  output: any,
  context: __SerdeContext
): DevEnvironmentRepositorySummary => {
  return {
    branchName: __expectString(output.branchName),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_restJson1DevEnvironmentSummary = (output: any, context: __SerdeContext): DevEnvironmentSummary => {
  return {
    alias: __expectString(output.alias),
    creatorId: __expectString(output.creatorId),
    id: __expectString(output.id),
    ides: output.ides != null ? deserializeAws_restJson1Ides(output.ides, context) : undefined,
    inactivityTimeoutMinutes: __expectInt32(output.inactivityTimeoutMinutes),
    instanceType: __expectString(output.instanceType),
    lastUpdatedTime:
      output.lastUpdatedTime != null ? __expectNonNull(__parseRfc3339DateTime(output.lastUpdatedTime)) : undefined,
    persistentStorage:
      output.persistentStorage != null
        ? deserializeAws_restJson1PersistentStorage(output.persistentStorage, context)
        : undefined,
    projectName: __expectString(output.projectName),
    repositories:
      output.repositories != null
        ? deserializeAws_restJson1DevEnvironmentRepositorySummaries(output.repositories, context)
        : undefined,
    spaceName: __expectString(output.spaceName),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
  } as any;
};

const deserializeAws_restJson1DevEnvironmentSummaryList = (
  output: any,
  context: __SerdeContext
): DevEnvironmentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DevEnvironmentSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EmailAddress = (output: any, context: __SerdeContext): EmailAddress => {
  return {
    email: __expectString(output.email),
    verified: __expectBoolean(output.verified),
  } as any;
};

const deserializeAws_restJson1EventLogEntries = (output: any, context: __SerdeContext): EventLogEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EventLogEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EventLogEntry = (output: any, context: __SerdeContext): EventLogEntry => {
  return {
    errorCode: __expectString(output.errorCode),
    eventCategory: __expectString(output.eventCategory),
    eventName: __expectString(output.eventName),
    eventSource: __expectString(output.eventSource),
    eventTime: output.eventTime != null ? __expectNonNull(__parseRfc3339DateTime(output.eventTime)) : undefined,
    eventType: __expectString(output.eventType),
    id: __expectString(output.id),
    operationType: __expectString(output.operationType),
    projectInformation:
      output.projectInformation != null
        ? deserializeAws_restJson1ProjectInformation(output.projectInformation, context)
        : undefined,
    requestId: __expectString(output.requestId),
    requestPayload:
      output.requestPayload != null ? deserializeAws_restJson1EventPayload(output.requestPayload, context) : undefined,
    responsePayload:
      output.responsePayload != null
        ? deserializeAws_restJson1EventPayload(output.responsePayload, context)
        : undefined,
    sourceIpAddress: __expectString(output.sourceIpAddress),
    userAgent: __expectString(output.userAgent),
    userIdentity:
      output.userIdentity != null ? deserializeAws_restJson1UserIdentity(output.userIdentity, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EventPayload = (output: any, context: __SerdeContext): EventPayload => {
  return {
    contentType: __expectString(output.contentType),
    data: __expectString(output.data),
  } as any;
};

const deserializeAws_restJson1Ide = (output: any, context: __SerdeContext): Ide => {
  return {
    name: __expectString(output.name),
    runtime: __expectString(output.runtime),
  } as any;
};

const deserializeAws_restJson1IdeConfiguration = (output: any, context: __SerdeContext): IdeConfiguration => {
  return {
    name: __expectString(output.name),
    runtime: __expectString(output.runtime),
  } as any;
};

const deserializeAws_restJson1IdeConfigurationList = (output: any, context: __SerdeContext): IdeConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IdeConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Ides = (output: any, context: __SerdeContext): Ide[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Ide(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListSourceRepositoriesItem = (
  output: any,
  context: __SerdeContext
): ListSourceRepositoriesItem => {
  return {
    createdTime: output.createdTime != null ? __expectNonNull(__parseRfc3339DateTime(output.createdTime)) : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastUpdatedTime:
      output.lastUpdatedTime != null ? __expectNonNull(__parseRfc3339DateTime(output.lastUpdatedTime)) : undefined,
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ListSourceRepositoriesItems = (
  output: any,
  context: __SerdeContext
): ListSourceRepositoriesItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListSourceRepositoriesItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListSourceRepositoryBranchesItem = (
  output: any,
  context: __SerdeContext
): ListSourceRepositoryBranchesItem => {
  return {
    headCommitId: __expectString(output.headCommitId),
    lastUpdatedTime:
      output.lastUpdatedTime != null ? __expectNonNull(__parseRfc3339DateTime(output.lastUpdatedTime)) : undefined,
    name: __expectString(output.name),
    ref: __expectString(output.ref),
  } as any;
};

const deserializeAws_restJson1ListSourceRepositoryBranchesItems = (
  output: any,
  context: __SerdeContext
): ListSourceRepositoryBranchesItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListSourceRepositoryBranchesItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PersistentStorage = (output: any, context: __SerdeContext): PersistentStorage => {
  return {
    sizeInGiB: __expectInt32(output.sizeInGiB),
  } as any;
};

const deserializeAws_restJson1ProjectInformation = (output: any, context: __SerdeContext): ProjectInformation => {
  return {
    name: __expectString(output.name),
    projectId: __expectString(output.projectId),
  } as any;
};

const deserializeAws_restJson1ProjectSummaries = (output: any, context: __SerdeContext): ProjectSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ProjectSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ProjectSummary = (output: any, context: __SerdeContext): ProjectSummary => {
  return {
    description: __expectString(output.description),
    displayName: __expectString(output.displayName),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1SpaceSummaries = (output: any, context: __SerdeContext): SpaceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SpaceSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SpaceSummary = (output: any, context: __SerdeContext): SpaceSummary => {
  return {
    description: __expectString(output.description),
    displayName: __expectString(output.displayName),
    name: __expectString(output.name),
    regionName: __expectString(output.regionName),
  } as any;
};

const deserializeAws_restJson1UserIdentity = (output: any, context: __SerdeContext): UserIdentity => {
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
