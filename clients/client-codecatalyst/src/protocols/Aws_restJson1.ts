// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

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
import {
  CreateSourceRepositoryCommandInput,
  CreateSourceRepositoryCommandOutput,
} from "../commands/CreateSourceRepositoryCommand";
import { DeleteAccessTokenCommandInput, DeleteAccessTokenCommandOutput } from "../commands/DeleteAccessTokenCommand";
import {
  DeleteDevEnvironmentCommandInput,
  DeleteDevEnvironmentCommandOutput,
} from "../commands/DeleteDevEnvironmentCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "../commands/DeleteProjectCommand";
import {
  DeleteSourceRepositoryCommandInput,
  DeleteSourceRepositoryCommandOutput,
} from "../commands/DeleteSourceRepositoryCommand";
import { DeleteSpaceCommandInput, DeleteSpaceCommandOutput } from "../commands/DeleteSpaceCommand";
import { GetDevEnvironmentCommandInput, GetDevEnvironmentCommandOutput } from "../commands/GetDevEnvironmentCommand";
import { GetProjectCommandInput, GetProjectCommandOutput } from "../commands/GetProjectCommand";
import {
  GetSourceRepositoryCloneUrlsCommandInput,
  GetSourceRepositoryCloneUrlsCommandOutput,
} from "../commands/GetSourceRepositoryCloneUrlsCommand";
import {
  GetSourceRepositoryCommandInput,
  GetSourceRepositoryCommandOutput,
} from "../commands/GetSourceRepositoryCommand";
import { GetSpaceCommandInput, GetSpaceCommandOutput } from "../commands/GetSpaceCommand";
import { GetSubscriptionCommandInput, GetSubscriptionCommandOutput } from "../commands/GetSubscriptionCommand";
import { GetUserDetailsCommandInput, GetUserDetailsCommandOutput } from "../commands/GetUserDetailsCommand";
import { GetWorkflowCommandInput, GetWorkflowCommandOutput } from "../commands/GetWorkflowCommand";
import { GetWorkflowRunCommandInput, GetWorkflowRunCommandOutput } from "../commands/GetWorkflowRunCommand";
import { ListAccessTokensCommandInput, ListAccessTokensCommandOutput } from "../commands/ListAccessTokensCommand";
import {
  ListDevEnvironmentsCommandInput,
  ListDevEnvironmentsCommandOutput,
} from "../commands/ListDevEnvironmentsCommand";
import {
  ListDevEnvironmentSessionsCommandInput,
  ListDevEnvironmentSessionsCommandOutput,
} from "../commands/ListDevEnvironmentSessionsCommand";
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
import { ListWorkflowRunsCommandInput, ListWorkflowRunsCommandOutput } from "../commands/ListWorkflowRunsCommand";
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "../commands/ListWorkflowsCommand";
import {
  StartDevEnvironmentCommandInput,
  StartDevEnvironmentCommandOutput,
} from "../commands/StartDevEnvironmentCommand";
import {
  StartDevEnvironmentSessionCommandInput,
  StartDevEnvironmentSessionCommandOutput,
} from "../commands/StartDevEnvironmentSessionCommand";
import { StartWorkflowRunCommandInput, StartWorkflowRunCommandOutput } from "../commands/StartWorkflowRunCommand";
import { StopDevEnvironmentCommandInput, StopDevEnvironmentCommandOutput } from "../commands/StopDevEnvironmentCommand";
import {
  StopDevEnvironmentSessionCommandInput,
  StopDevEnvironmentSessionCommandOutput,
} from "../commands/StopDevEnvironmentSessionCommand";
import {
  UpdateDevEnvironmentCommandInput,
  UpdateDevEnvironmentCommandOutput,
} from "../commands/UpdateDevEnvironmentCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "../commands/UpdateProjectCommand";
import { UpdateSpaceCommandInput, UpdateSpaceCommandOutput } from "../commands/UpdateSpaceCommand";
import { VerifySessionCommandInput, VerifySessionCommandOutput } from "../commands/VerifySessionCommand";
import { CodeCatalystServiceException as __BaseException } from "../models/CodeCatalystServiceException";
import {
  AccessDeniedException,
  AccessTokenSummary,
  ConflictException,
  DevEnvironmentSessionConfiguration,
  DevEnvironmentSessionSummary,
  DevEnvironmentSummary,
  EventLogEntry,
  ExecuteCommandSessionConfiguration,
  Filter,
  IdeConfiguration,
  ListSourceRepositoriesItem,
  ListSourceRepositoryBranchesItem,
  PersistentStorageConfiguration,
  ProjectListFilter,
  RepositoryInput,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
  WorkflowRunSortCriteria,
  WorkflowRunSummary,
  WorkflowSortCriteria,
  WorkflowSummary,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateAccessTokenCommand
 */
export const se_CreateAccessTokenCommand = async (
  input: CreateAccessTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/accessTokens");
  let body: any;
  body = JSON.stringify(
    take(input, {
      expiresTime: (_) => __serializeDateTime(_),
      name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDevEnvironmentCommand
 */
export const se_CreateDevEnvironmentCommand = async (
  input: CreateDevEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  b.p("projectName", () => input.projectName!, "{projectName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      alias: [],
      clientToken: [],
      ides: (_) => _json(_),
      inactivityTimeoutMinutes: [],
      instanceType: [],
      persistentStorage: (_) => _json(_),
      repositories: (_) => _json(_),
      vpcConnectionName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateProjectCommand
 */
export const se_CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/spaces/{spaceName}/projects");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      displayName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSourceRepositoryCommand
 */
export const se_CreateSourceRepositoryCommand = async (
  input: CreateSourceRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{name}");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  b.p("projectName", () => input.projectName!, "{projectName}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSourceRepositoryBranchCommand
 */
export const se_CreateSourceRepositoryBranchCommand = async (
  input: CreateSourceRepositoryBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{sourceRepositoryName}/branches/{name}");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  b.p("projectName", () => input.projectName!, "{projectName}", false);
  b.p("sourceRepositoryName", () => input.sourceRepositoryName!, "{sourceRepositoryName}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      headCommitId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAccessTokenCommand
 */
export const se_DeleteAccessTokenCommand = async (
  input: DeleteAccessTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/accessTokens/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDevEnvironmentCommand
 */
export const se_DeleteDevEnvironmentCommand = async (
  input: DeleteDevEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  b.p("projectName", () => input.projectName!, "{projectName}", false);
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteProjectCommand
 */
export const se_DeleteProjectCommand = async (
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/spaces/{spaceName}/projects/{name}");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSourceRepositoryCommand
 */
export const se_DeleteSourceRepositoryCommand = async (
  input: DeleteSourceRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{name}");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  b.p("projectName", () => input.projectName!, "{projectName}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSpaceCommand
 */
export const se_DeleteSpaceCommand = async (
  input: DeleteSpaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/spaces/{name}");
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDevEnvironmentCommand
 */
export const se_GetDevEnvironmentCommand = async (
  input: GetDevEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  b.p("projectName", () => input.projectName!, "{projectName}", false);
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetProjectCommand
 */
export const se_GetProjectCommand = async (
  input: GetProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/spaces/{spaceName}/projects/{name}");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSourceRepositoryCommand
 */
export const se_GetSourceRepositoryCommand = async (
  input: GetSourceRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{name}");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  b.p("projectName", () => input.projectName!, "{projectName}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSourceRepositoryCloneUrlsCommand
 */
export const se_GetSourceRepositoryCloneUrlsCommand = async (
  input: GetSourceRepositoryCloneUrlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{sourceRepositoryName}/cloneUrls");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  b.p("projectName", () => input.projectName!, "{projectName}", false);
  b.p("sourceRepositoryName", () => input.sourceRepositoryName!, "{sourceRepositoryName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSpaceCommand
 */
export const se_GetSpaceCommand = async (
  input: GetSpaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/spaces/{name}");
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSubscriptionCommand
 */
export const se_GetSubscriptionCommand = async (
  input: GetSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/spaces/{spaceName}/subscription");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetUserDetailsCommand
 */
export const se_GetUserDetailsCommand = async (
  input: GetUserDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/userDetails");
  const query: any = map({
    [_i]: [, input[_i]!],
    [_uN]: [, input[_uN]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWorkflowCommand
 */
export const se_GetWorkflowCommand = async (
  input: GetWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/spaces/{spaceName}/projects/{projectName}/workflows/{id}");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  b.p("id", () => input.id!, "{id}", false);
  b.p("projectName", () => input.projectName!, "{projectName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWorkflowRunCommand
 */
export const se_GetWorkflowRunCommand = async (
  input: GetWorkflowRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/spaces/{spaceName}/projects/{projectName}/workflowRuns/{id}");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  b.p("id", () => input.id!, "{id}", false);
  b.p("projectName", () => input.projectName!, "{projectName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAccessTokensCommand
 */
export const se_ListAccessTokensCommand = async (
  input: ListAccessTokensCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/accessTokens");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDevEnvironmentsCommand
 */
export const se_ListDevEnvironmentsCommand = async (
  input: ListDevEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/spaces/{spaceName}/devEnvironments");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      projectName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDevEnvironmentSessionsCommand
 */
export const se_ListDevEnvironmentSessionsCommand = async (
  input: ListDevEnvironmentSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{devEnvironmentId}/sessions");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  b.p("projectName", () => input.projectName!, "{projectName}", false);
  b.p("devEnvironmentId", () => input.devEnvironmentId!, "{devEnvironmentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEventLogsCommand
 */
export const se_ListEventLogsCommand = async (
  input: ListEventLogsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/spaces/{spaceName}/eventLogs");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      endTime: (_) => __serializeDateTime(_),
      eventName: [],
      maxResults: [],
      nextToken: [],
      startTime: (_) => __serializeDateTime(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProjectsCommand
 */
export const se_ListProjectsCommand = async (
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/spaces/{spaceName}/projects");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSourceRepositoriesCommand
 */
export const se_ListSourceRepositoriesCommand = async (
  input: ListSourceRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  b.p("projectName", () => input.projectName!, "{projectName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSourceRepositoryBranchesCommand
 */
export const se_ListSourceRepositoryBranchesCommand = async (
  input: ListSourceRepositoryBranchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{sourceRepositoryName}/branches");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  b.p("projectName", () => input.projectName!, "{projectName}", false);
  b.p("sourceRepositoryName", () => input.sourceRepositoryName!, "{sourceRepositoryName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSpacesCommand
 */
export const se_ListSpacesCommand = async (
  input: ListSpacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/spaces");
  let body: any;
  body = JSON.stringify(
    take(input, {
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWorkflowRunsCommand
 */
export const se_ListWorkflowRunsCommand = async (
  input: ListWorkflowRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/spaces/{spaceName}/projects/{projectName}/workflowRuns");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  b.p("projectName", () => input.projectName!, "{projectName}", false);
  const query: any = map({
    [_wI]: [, input[_wI]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      sortBy: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWorkflowsCommand
 */
export const se_ListWorkflowsCommand = async (
  input: ListWorkflowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/spaces/{spaceName}/projects/{projectName}/workflows");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  b.p("projectName", () => input.projectName!, "{projectName}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      sortBy: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartDevEnvironmentCommand
 */
export const se_StartDevEnvironmentCommand = async (
  input: StartDevEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/start");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  b.p("projectName", () => input.projectName!, "{projectName}", false);
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ides: (_) => _json(_),
      inactivityTimeoutMinutes: [],
      instanceType: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartDevEnvironmentSessionCommand
 */
export const se_StartDevEnvironmentSessionCommand = async (
  input: StartDevEnvironmentSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/session");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  b.p("projectName", () => input.projectName!, "{projectName}", false);
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      sessionConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartWorkflowRunCommand
 */
export const se_StartWorkflowRunCommand = async (
  input: StartWorkflowRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/spaces/{spaceName}/projects/{projectName}/workflowRuns");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  b.p("projectName", () => input.projectName!, "{projectName}", false);
  const query: any = map({
    [_wI]: [, __expectNonNull(input[_wI]!, `workflowId`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopDevEnvironmentCommand
 */
export const se_StopDevEnvironmentCommand = async (
  input: StopDevEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/stop");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  b.p("projectName", () => input.projectName!, "{projectName}", false);
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopDevEnvironmentSessionCommand
 */
export const se_StopDevEnvironmentSessionCommand = async (
  input: StopDevEnvironmentSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/session/{sessionId}");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  b.p("projectName", () => input.projectName!, "{projectName}", false);
  b.p("id", () => input.id!, "{id}", false);
  b.p("sessionId", () => input.sessionId!, "{sessionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDevEnvironmentCommand
 */
export const se_UpdateDevEnvironmentCommand = async (
  input: UpdateDevEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  b.p("projectName", () => input.projectName!, "{projectName}", false);
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      alias: [],
      clientToken: [],
      ides: (_) => _json(_),
      inactivityTimeoutMinutes: [],
      instanceType: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateProjectCommand
 */
export const se_UpdateProjectCommand = async (
  input: UpdateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/spaces/{spaceName}/projects/{name}");
  b.p("spaceName", () => input.spaceName!, "{spaceName}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSpaceCommand
 */
export const se_UpdateSpaceCommand = async (
  input: UpdateSpaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/spaces/{name}");
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1VerifySessionCommand
 */
export const se_VerifySessionCommand = async (
  input: VerifySessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/session");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateAccessTokenCommand
 */
export const de_CreateAccessTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessTokenCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accessTokenId: __expectString,
    expiresTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    secret: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDevEnvironmentCommand
 */
export const de_CreateDevEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDevEnvironmentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    projectName: __expectString,
    spaceName: __expectString,
    vpcConnectionName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateProjectCommand
 */
export const de_CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    displayName: __expectString,
    name: __expectString,
    spaceName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSourceRepositoryCommand
 */
export const de_CreateSourceRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSourceRepositoryCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    name: __expectString,
    projectName: __expectString,
    spaceName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSourceRepositoryBranchCommand
 */
export const de_CreateSourceRepositoryBranchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSourceRepositoryBranchCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    headCommitId: __expectString,
    lastUpdatedTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    ref: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAccessTokenCommand
 */
export const de_DeleteAccessTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDevEnvironmentCommand
 */
export const de_DeleteDevEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDevEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    projectName: __expectString,
    spaceName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProjectCommand
 */
export const de_DeleteProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    displayName: __expectString,
    name: __expectString,
    spaceName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSourceRepositoryCommand
 */
export const de_DeleteSourceRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSourceRepositoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    name: __expectString,
    projectName: __expectString,
    spaceName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSpaceCommand
 */
export const de_DeleteSpaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSpaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    displayName: __expectString,
    name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDevEnvironmentCommand
 */
export const de_GetDevEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    alias: __expectString,
    creatorId: __expectString,
    id: __expectString,
    ides: _json,
    inactivityTimeoutMinutes: __expectInt32,
    instanceType: __expectString,
    lastUpdatedTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    persistentStorage: _json,
    projectName: __expectString,
    repositories: _json,
    spaceName: __expectString,
    status: __expectString,
    statusReason: __expectString,
    vpcConnectionName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetProjectCommand
 */
export const de_GetProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    displayName: __expectString,
    name: __expectString,
    spaceName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSourceRepositoryCommand
 */
export const de_GetSourceRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSourceRepositoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    lastUpdatedTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    projectName: __expectString,
    spaceName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSourceRepositoryCloneUrlsCommand
 */
export const de_GetSourceRepositoryCloneUrlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSourceRepositoryCloneUrlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    https: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSpaceCommand
 */
export const de_GetSpaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSpaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    displayName: __expectString,
    name: __expectString,
    regionName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSubscriptionCommand
 */
export const de_GetSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    awsAccountName: __expectString,
    pendingSubscriptionStartTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    pendingSubscriptionType: __expectString,
    subscriptionType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetUserDetailsCommand
 */
export const de_GetUserDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    displayName: __expectString,
    primaryEmail: _json,
    userId: __expectString,
    userName: __expectString,
    version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkflowCommand
 */
export const de_GetWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    definition: _json,
    id: __expectString,
    lastUpdatedTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    projectName: __expectString,
    runMode: __expectString,
    sourceBranchName: __expectString,
    sourceRepositoryName: __expectString,
    spaceName: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkflowRunCommand
 */
export const de_GetWorkflowRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    endTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    lastUpdatedTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    projectName: __expectString,
    spaceName: __expectString,
    startTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
    statusReasons: _json,
    workflowId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAccessTokensCommand
 */
export const de_ListAccessTokensCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessTokensCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_AccessTokenSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDevEnvironmentsCommand
 */
export const de_ListDevEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevEnvironmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_DevEnvironmentSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDevEnvironmentSessionsCommand
 */
export const de_ListDevEnvironmentSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevEnvironmentSessionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_DevEnvironmentSessionsSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEventLogsCommand
 */
export const de_ListEventLogsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventLogsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_EventLogEntries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProjectsCommand
 */
export const de_ListProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSourceRepositoriesCommand
 */
export const de_ListSourceRepositoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceRepositoriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_ListSourceRepositoriesItems(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSourceRepositoryBranchesCommand
 */
export const de_ListSourceRepositoryBranchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceRepositoryBranchesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_ListSourceRepositoryBranchesItems(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSpacesCommand
 */
export const de_ListSpacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSpacesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkflowRunsCommand
 */
export const de_ListWorkflowRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowRunsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_WorkflowRunSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkflowsCommand
 */
export const de_ListWorkflowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_WorkflowSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartDevEnvironmentCommand
 */
export const de_StartDevEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDevEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    projectName: __expectString,
    spaceName: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartDevEnvironmentSessionCommand
 */
export const de_StartDevEnvironmentSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDevEnvironmentSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accessDetails: _json,
    id: __expectString,
    projectName: __expectString,
    sessionId: __expectString,
    spaceName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartWorkflowRunCommand
 */
export const de_StartWorkflowRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkflowRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    projectName: __expectString,
    spaceName: __expectString,
    workflowId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopDevEnvironmentCommand
 */
export const de_StopDevEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDevEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    projectName: __expectString,
    spaceName: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopDevEnvironmentSessionCommand
 */
export const de_StopDevEnvironmentSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDevEnvironmentSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    projectName: __expectString,
    sessionId: __expectString,
    spaceName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDevEnvironmentCommand
 */
export const de_UpdateDevEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDevEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    alias: __expectString,
    clientToken: __expectString,
    id: __expectString,
    ides: _json,
    inactivityTimeoutMinutes: __expectInt32,
    instanceType: __expectString,
    projectName: __expectString,
    spaceName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateProjectCommand
 */
export const de_UpdateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    displayName: __expectString,
    name: __expectString,
    spaceName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSpaceCommand
 */
export const de_UpdateSpaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSpaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    displayName: __expectString,
    name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1VerifySessionCommand
 */
export const de_VerifySessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifySessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    identity: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_DevEnvironmentSessionConfiguration omitted.

// se_ExecuteCommandSessionConfiguration omitted.

// se_ExecuteCommandSessionConfigurationArguments omitted.

// se_Filter omitted.

// se_Filters omitted.

// se_IdeConfiguration omitted.

// se_IdeConfigurationList omitted.

// se_PersistentStorageConfiguration omitted.

// se_ProjectListFilter omitted.

// se_ProjectListFilters omitted.

// se_RepositoriesInput omitted.

// se_RepositoryInput omitted.

// se_StringList omitted.

// se_WorkflowRunSortCriteria omitted.

// se_WorkflowRunSortCriteriaList omitted.

// se_WorkflowSortCriteria omitted.

// se_WorkflowSortCriteriaList omitted.

/**
 * deserializeAws_restJson1AccessTokenSummaries
 */
const de_AccessTokenSummaries = (output: any, context: __SerdeContext): AccessTokenSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccessTokenSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AccessTokenSummary
 */
const de_AccessTokenSummary = (output: any, context: __SerdeContext): AccessTokenSummary => {
  return take(output, {
    expiresTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    name: __expectString,
  }) as any;
};

// de_DevEnvironmentAccessDetails omitted.

// de_DevEnvironmentRepositorySummaries omitted.

// de_DevEnvironmentRepositorySummary omitted.

/**
 * deserializeAws_restJson1DevEnvironmentSessionsSummaryList
 */
const de_DevEnvironmentSessionsSummaryList = (output: any, context: __SerdeContext): DevEnvironmentSessionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DevEnvironmentSessionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DevEnvironmentSessionSummary
 */
const de_DevEnvironmentSessionSummary = (output: any, context: __SerdeContext): DevEnvironmentSessionSummary => {
  return take(output, {
    devEnvironmentId: __expectString,
    id: __expectString,
    projectName: __expectString,
    spaceName: __expectString,
    startedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1DevEnvironmentSummary
 */
const de_DevEnvironmentSummary = (output: any, context: __SerdeContext): DevEnvironmentSummary => {
  return take(output, {
    alias: __expectString,
    creatorId: __expectString,
    id: __expectString,
    ides: _json,
    inactivityTimeoutMinutes: __expectInt32,
    instanceType: __expectString,
    lastUpdatedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    persistentStorage: _json,
    projectName: __expectString,
    repositories: _json,
    spaceName: __expectString,
    status: __expectString,
    statusReason: __expectString,
    vpcConnectionName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DevEnvironmentSummaryList
 */
const de_DevEnvironmentSummaryList = (output: any, context: __SerdeContext): DevEnvironmentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DevEnvironmentSummary(entry, context);
    });
  return retVal;
};

// de_EmailAddress omitted.

/**
 * deserializeAws_restJson1EventLogEntries
 */
const de_EventLogEntries = (output: any, context: __SerdeContext): EventLogEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EventLogEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EventLogEntry
 */
const de_EventLogEntry = (output: any, context: __SerdeContext): EventLogEntry => {
  return take(output, {
    errorCode: __expectString,
    eventCategory: __expectString,
    eventName: __expectString,
    eventSource: __expectString,
    eventTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    eventType: __expectString,
    id: __expectString,
    operationType: __expectString,
    projectInformation: _json,
    requestId: __expectString,
    requestPayload: _json,
    responsePayload: _json,
    sourceIpAddress: __expectString,
    userAgent: __expectString,
    userIdentity: _json,
  }) as any;
};

// de_EventPayload omitted.

// de_Ide omitted.

// de_IdeConfiguration omitted.

// de_IdeConfigurationList omitted.

// de_Ides omitted.

/**
 * deserializeAws_restJson1ListSourceRepositoriesItem
 */
const de_ListSourceRepositoriesItem = (output: any, context: __SerdeContext): ListSourceRepositoriesItem => {
  return take(output, {
    createdTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    lastUpdatedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ListSourceRepositoriesItems
 */
const de_ListSourceRepositoriesItems = (output: any, context: __SerdeContext): ListSourceRepositoriesItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
  return take(output, {
    headCommitId: __expectString,
    lastUpdatedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    ref: __expectString,
  }) as any;
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
      return de_ListSourceRepositoryBranchesItem(entry, context);
    });
  return retVal;
};

// de_PersistentStorage omitted.

// de_ProjectInformation omitted.

// de_ProjectSummaries omitted.

// de_ProjectSummary omitted.

// de_SpaceSummaries omitted.

// de_SpaceSummary omitted.

// de_UserIdentity omitted.

// de_WorkflowDefinition omitted.

// de_WorkflowDefinitionSummary omitted.

// de_WorkflowRunStatusReason omitted.

// de_WorkflowRunStatusReasons omitted.

/**
 * deserializeAws_restJson1WorkflowRunSummaries
 */
const de_WorkflowRunSummaries = (output: any, context: __SerdeContext): WorkflowRunSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorkflowRunSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorkflowRunSummary
 */
const de_WorkflowRunSummary = (output: any, context: __SerdeContext): WorkflowRunSummary => {
  return take(output, {
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    lastUpdatedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
    statusReasons: _json,
    workflowId: __expectString,
    workflowName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1WorkflowSummaries
 */
const de_WorkflowSummaries = (output: any, context: __SerdeContext): WorkflowSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorkflowSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorkflowSummary
 */
const de_WorkflowSummary = (output: any, context: __SerdeContext): WorkflowSummary => {
  return take(output, {
    createdTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    definition: _json,
    id: __expectString,
    lastUpdatedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    runMode: __expectString,
    sourceBranchName: __expectString,
    sourceRepositoryName: __expectString,
    status: __expectString,
  }) as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _i = "id";
const _mR = "maxResults";
const _nT = "nextToken";
const _uN = "userName";
const _wI = "workflowId";
