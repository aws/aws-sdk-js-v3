// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreateWorkflowCommandInput, CreateWorkflowCommandOutput } from "../commands/CreateWorkflowCommand";
import { CreateWorkflowStepCommandInput, CreateWorkflowStepCommandOutput } from "../commands/CreateWorkflowStepCommand";
import {
  CreateWorkflowStepGroupCommandInput,
  CreateWorkflowStepGroupCommandOutput,
} from "../commands/CreateWorkflowStepGroupCommand";
import { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "../commands/DeleteWorkflowCommand";
import { DeleteWorkflowStepCommandInput, DeleteWorkflowStepCommandOutput } from "../commands/DeleteWorkflowStepCommand";
import {
  DeleteWorkflowStepGroupCommandInput,
  DeleteWorkflowStepGroupCommandOutput,
} from "../commands/DeleteWorkflowStepGroupCommand";
import { GetTemplateCommandInput, GetTemplateCommandOutput } from "../commands/GetTemplateCommand";
import { GetTemplateStepCommandInput, GetTemplateStepCommandOutput } from "../commands/GetTemplateStepCommand";
import {
  GetTemplateStepGroupCommandInput,
  GetTemplateStepGroupCommandOutput,
} from "../commands/GetTemplateStepGroupCommand";
import { GetWorkflowCommandInput, GetWorkflowCommandOutput } from "../commands/GetWorkflowCommand";
import { GetWorkflowStepCommandInput, GetWorkflowStepCommandOutput } from "../commands/GetWorkflowStepCommand";
import {
  GetWorkflowStepGroupCommandInput,
  GetWorkflowStepGroupCommandOutput,
} from "../commands/GetWorkflowStepGroupCommand";
import { ListPluginsCommandInput, ListPluginsCommandOutput } from "../commands/ListPluginsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTemplatesCommandInput, ListTemplatesCommandOutput } from "../commands/ListTemplatesCommand";
import {
  ListTemplateStepGroupsCommandInput,
  ListTemplateStepGroupsCommandOutput,
} from "../commands/ListTemplateStepGroupsCommand";
import { ListTemplateStepsCommandInput, ListTemplateStepsCommandOutput } from "../commands/ListTemplateStepsCommand";
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "../commands/ListWorkflowsCommand";
import {
  ListWorkflowStepGroupsCommandInput,
  ListWorkflowStepGroupsCommandOutput,
} from "../commands/ListWorkflowStepGroupsCommand";
import { ListWorkflowStepsCommandInput, ListWorkflowStepsCommandOutput } from "../commands/ListWorkflowStepsCommand";
import { RetryWorkflowStepCommandInput, RetryWorkflowStepCommandOutput } from "../commands/RetryWorkflowStepCommand";
import { StartWorkflowCommandInput, StartWorkflowCommandOutput } from "../commands/StartWorkflowCommand";
import { StopWorkflowCommandInput, StopWorkflowCommandOutput } from "../commands/StopWorkflowCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateWorkflowCommandInput, UpdateWorkflowCommandOutput } from "../commands/UpdateWorkflowCommand";
import { UpdateWorkflowStepCommandInput, UpdateWorkflowStepCommandOutput } from "../commands/UpdateWorkflowStepCommand";
import {
  UpdateWorkflowStepGroupCommandInput,
  UpdateWorkflowStepGroupCommandOutput,
} from "../commands/UpdateWorkflowStepGroupCommand";
import { MigrationHubOrchestratorServiceException as __BaseException } from "../models/MigrationHubOrchestratorServiceException";
import {
  AccessDeniedException,
  InternalServerException,
  MigrationWorkflowSummary,
  PlatformCommand,
  PlatformScriptKey,
  ResourceNotFoundException,
  StepInput,
  ThrottlingException,
  ValidationException,
  WorkflowStepAutomationConfiguration,
  WorkflowStepOutput,
  WorkflowStepOutputUnion,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateWorkflowCommand
 */
export const se_CreateWorkflowCommand = async (
  input: CreateWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/migrationworkflow";
  let body: any;
  body = JSON.stringify(
    take(input, {
      applicationConfigurationId: [],
      description: [],
      inputParameters: (_) => _json(_),
      name: [],
      stepTargets: (_) => _json(_),
      tags: (_) => _json(_),
      templateId: [],
    })
  );
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
 * serializeAws_restJson1CreateWorkflowStepCommand
 */
export const se_CreateWorkflowStepCommand = async (
  input: CreateWorkflowStepCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workflowstep";
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
      next: (_) => _json(_),
      outputs: (_) => _json(_),
      previous: (_) => _json(_),
      stepActionType: [],
      stepGroupId: [],
      stepTarget: (_) => _json(_),
      workflowId: [],
      workflowStepAutomationConfiguration: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1CreateWorkflowStepGroupCommand
 */
export const se_CreateWorkflowStepGroupCommand = async (
  input: CreateWorkflowStepGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workflowstepgroups";
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
      next: (_) => _json(_),
      previous: (_) => _json(_),
      workflowId: [],
    })
  );
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
 * serializeAws_restJson1DeleteWorkflowCommand
 */
export const se_DeleteWorkflowCommand = async (
  input: DeleteWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/migrationworkflow/{id}";
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
 * serializeAws_restJson1DeleteWorkflowStepCommand
 */
export const se_DeleteWorkflowStepCommand = async (
  input: DeleteWorkflowStepCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workflowstep/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  const query: any = map({
    stepGroupId: [, __expectNonNull(input.stepGroupId!, `stepGroupId`)],
    workflowId: [, __expectNonNull(input.workflowId!, `workflowId`)],
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
 * serializeAws_restJson1DeleteWorkflowStepGroupCommand
 */
export const se_DeleteWorkflowStepGroupCommand = async (
  input: DeleteWorkflowStepGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workflowstepgroup/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  const query: any = map({
    workflowId: [, __expectNonNull(input.workflowId!, `workflowId`)],
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
 * serializeAws_restJson1GetTemplateCommand
 */
export const se_GetTemplateCommand = async (
  input: GetTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/migrationworkflowtemplate/{id}";
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
 * serializeAws_restJson1GetTemplateStepCommand
 */
export const se_GetTemplateStepCommand = async (
  input: GetTemplateStepCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/templatestep/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  const query: any = map({
    templateId: [, __expectNonNull(input.templateId!, `templateId`)],
    stepGroupId: [, __expectNonNull(input.stepGroupId!, `stepGroupId`)],
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
 * serializeAws_restJson1GetTemplateStepGroupCommand
 */
export const se_GetTemplateStepGroupCommand = async (
  input: GetTemplateStepGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/templates/{templateId}/stepgroups/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "templateId", () => input.templateId!, "{templateId}", false);
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
 * serializeAws_restJson1GetWorkflowCommand
 */
export const se_GetWorkflowCommand = async (
  input: GetWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/migrationworkflow/{id}";
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
 * serializeAws_restJson1GetWorkflowStepCommand
 */
export const se_GetWorkflowStepCommand = async (
  input: GetWorkflowStepCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workflowstep/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  const query: any = map({
    workflowId: [, __expectNonNull(input.workflowId!, `workflowId`)],
    stepGroupId: [, __expectNonNull(input.stepGroupId!, `stepGroupId`)],
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
 * serializeAws_restJson1GetWorkflowStepGroupCommand
 */
export const se_GetWorkflowStepGroupCommand = async (
  input: GetWorkflowStepGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workflowstepgroup/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  const query: any = map({
    workflowId: [, __expectNonNull(input.workflowId!, `workflowId`)],
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
 * serializeAws_restJson1ListPluginsCommand
 */
export const se_ListPluginsCommand = async (
  input: ListPluginsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/plugins";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
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
 * serializeAws_restJson1ListTemplatesCommand
 */
export const se_ListTemplatesCommand = async (
  input: ListTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/migrationworkflowtemplates";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
    name: [, input.name!],
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
 * serializeAws_restJson1ListTemplateStepGroupsCommand
 */
export const se_ListTemplateStepGroupsCommand = async (
  input: ListTemplateStepGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/templatestepgroups/{templateId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "templateId", () => input.templateId!, "{templateId}", false);
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
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
 * serializeAws_restJson1ListTemplateStepsCommand
 */
export const se_ListTemplateStepsCommand = async (
  input: ListTemplateStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/templatesteps";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
    templateId: [, __expectNonNull(input.templateId!, `templateId`)],
    stepGroupId: [, __expectNonNull(input.stepGroupId!, `stepGroupId`)],
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
 * serializeAws_restJson1ListWorkflowsCommand
 */
export const se_ListWorkflowsCommand = async (
  input: ListWorkflowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/migrationworkflows";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
    templateId: [, input.templateId!],
    adsApplicationConfigurationName: [, input.adsApplicationConfigurationName!],
    status: [, input.status!],
    name: [, input.name!],
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
 * serializeAws_restJson1ListWorkflowStepGroupsCommand
 */
export const se_ListWorkflowStepGroupsCommand = async (
  input: ListWorkflowStepGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workflowstepgroups";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    workflowId: [, __expectNonNull(input.workflowId!, `workflowId`)],
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
 * serializeAws_restJson1ListWorkflowStepsCommand
 */
export const se_ListWorkflowStepsCommand = async (
  input: ListWorkflowStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workflow/{workflowId}/workflowstepgroups/{stepGroupId}/workflowsteps";
  resolvedPath = __resolvedPath(resolvedPath, input, "workflowId", () => input.workflowId!, "{workflowId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "stepGroupId", () => input.stepGroupId!, "{stepGroupId}", false);
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
 * serializeAws_restJson1RetryWorkflowStepCommand
 */
export const se_RetryWorkflowStepCommand = async (
  input: RetryWorkflowStepCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/retryworkflowstep/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  const query: any = map({
    workflowId: [, __expectNonNull(input.workflowId!, `workflowId`)],
    stepGroupId: [, __expectNonNull(input.stepGroupId!, `stepGroupId`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1StartWorkflowCommand
 */
export const se_StartWorkflowCommand = async (
  input: StartWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/migrationworkflow/{id}/start";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
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
 * serializeAws_restJson1StopWorkflowCommand
 */
export const se_StopWorkflowCommand = async (
  input: StopWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/migrationworkflow/{id}/stop";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
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
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1UpdateWorkflowCommand
 */
export const se_UpdateWorkflowCommand = async (
  input: UpdateWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/migrationworkflow/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      inputParameters: (_) => _json(_),
      name: [],
      stepTargets: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1UpdateWorkflowStepCommand
 */
export const se_UpdateWorkflowStepCommand = async (
  input: UpdateWorkflowStepCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workflowstep/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
      next: (_) => _json(_),
      outputs: (_) => _json(_),
      previous: (_) => _json(_),
      status: [],
      stepActionType: [],
      stepGroupId: [],
      stepTarget: (_) => _json(_),
      workflowId: [],
      workflowStepAutomationConfiguration: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1UpdateWorkflowStepGroupCommand
 */
export const se_UpdateWorkflowStepGroupCommand = async (
  input: UpdateWorkflowStepGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workflowstepgroup/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  const query: any = map({
    workflowId: [, __expectNonNull(input.workflowId!, `workflowId`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
      next: (_) => _json(_),
      previous: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * deserializeAws_restJson1CreateWorkflowCommand
 */
export const de_CreateWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateWorkflowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    adsApplicationConfigurationId: __expectString,
    arn: __expectString,
    creationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
    stepTargets: _json,
    tags: _json,
    templateId: __expectString,
    workflowInputs: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorkflowCommandError
 */
const de_CreateWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateWorkflowStepCommand
 */
export const de_CreateWorkflowStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowStepCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateWorkflowStepCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    name: __expectString,
    stepGroupId: __expectString,
    workflowId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorkflowStepCommandError
 */
const de_CreateWorkflowStepCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowStepCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateWorkflowStepGroupCommand
 */
export const de_CreateWorkflowStepGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowStepGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateWorkflowStepGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    next: _json,
    previous: _json,
    tools: _json,
    workflowId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorkflowStepGroupCommandError
 */
const de_CreateWorkflowStepGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowStepGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteWorkflowCommand
 */
export const de_DeleteWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteWorkflowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWorkflowCommandError
 */
const de_DeleteWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteWorkflowStepCommand
 */
export const de_DeleteWorkflowStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowStepCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteWorkflowStepCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWorkflowStepCommandError
 */
const de_DeleteWorkflowStepCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowStepCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteWorkflowStepGroupCommand
 */
export const de_DeleteWorkflowStepGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowStepGroupCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteWorkflowStepGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWorkflowStepGroupCommandError
 */
const de_DeleteWorkflowStepGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowStepGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetTemplateCommand
 */
export const de_GetTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    inputs: _json,
    name: __expectString,
    status: __expectString,
    tools: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTemplateCommandError
 */
const de_GetTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetTemplateStepCommand
 */
export const de_GetTemplateStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateStepCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTemplateStepCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationTime: __expectString,
    description: __expectString,
    id: __expectString,
    name: __expectString,
    next: _json,
    outputs: _json,
    previous: _json,
    stepActionType: __expectString,
    stepAutomationConfiguration: _json,
    stepGroupId: __expectString,
    templateId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTemplateStepCommandError
 */
const de_GetTemplateStepCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateStepCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetTemplateStepGroupCommand
 */
export const de_GetTemplateStepGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateStepGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTemplateStepGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    lastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    next: _json,
    previous: _json,
    status: __expectString,
    templateId: __expectString,
    tools: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTemplateStepGroupCommandError
 */
const de_GetTemplateStepGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateStepGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetWorkflowCommand
 */
export const de_GetWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWorkflowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    adsApplicationConfigurationId: __expectString,
    adsApplicationName: __expectString,
    arn: __expectString,
    completedSteps: __expectInt32,
    creationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    endTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    lastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastStartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastStopTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    status: __expectString,
    statusMessage: __expectString,
    tags: _json,
    templateId: __expectString,
    tools: _json,
    totalSteps: __expectInt32,
    workflowBucket: __expectString,
    workflowInputs: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkflowCommandError
 */
const de_GetWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetWorkflowStepCommand
 */
export const de_GetWorkflowStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowStepCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWorkflowStepCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    endTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastStartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    next: _json,
    noOfSrvCompleted: __expectInt32,
    noOfSrvFailed: __expectInt32,
    outputs: _json,
    owner: __expectString,
    previous: _json,
    scriptOutputLocation: __expectString,
    status: __expectString,
    statusMessage: __expectString,
    stepActionType: __expectString,
    stepGroupId: __expectString,
    stepId: __expectString,
    stepTarget: _json,
    totalNoOfSrv: __expectInt32,
    workflowId: __expectString,
    workflowStepAutomationConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkflowStepCommandError
 */
const de_GetWorkflowStepCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowStepCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetWorkflowStepGroupCommand
 */
export const de_GetWorkflowStepGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowStepGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWorkflowStepGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    endTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    lastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    next: _json,
    owner: __expectString,
    previous: _json,
    status: __expectString,
    tools: _json,
    workflowId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkflowStepGroupCommandError
 */
const de_GetWorkflowStepGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowStepGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListPluginsCommand
 */
export const de_ListPluginsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPluginsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPluginsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    plugins: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPluginsCommandError
 */
const de_ListPluginsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPluginsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
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
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTemplatesCommand
 */
export const de_ListTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    templateSummary: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTemplatesCommandError
 */
const de_ListTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTemplateStepGroupsCommand
 */
export const de_ListTemplateStepGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateStepGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTemplateStepGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    templateStepGroupSummary: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTemplateStepGroupsCommandError
 */
const de_ListTemplateStepGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateStepGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTemplateStepsCommand
 */
export const de_ListTemplateStepsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateStepsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTemplateStepsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    templateStepSummaryList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTemplateStepsCommandError
 */
const de_ListTemplateStepsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateStepsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListWorkflowsCommand
 */
export const de_ListWorkflowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWorkflowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    migrationWorkflowSummary: (_) => de_MigrationWorkflowSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkflowsCommandError
 */
const de_ListWorkflowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListWorkflowStepGroupsCommand
 */
export const de_ListWorkflowStepGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowStepGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWorkflowStepGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    workflowStepGroupsSummary: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkflowStepGroupsCommandError
 */
const de_ListWorkflowStepGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowStepGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListWorkflowStepsCommand
 */
export const de_ListWorkflowStepsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowStepsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWorkflowStepsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    workflowStepsSummary: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkflowStepsCommandError
 */
const de_ListWorkflowStepsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowStepsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1RetryWorkflowStepCommand
 */
export const de_RetryWorkflowStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryWorkflowStepCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RetryWorkflowStepCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    status: __expectString,
    stepGroupId: __expectString,
    workflowId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RetryWorkflowStepCommandError
 */
const de_RetryWorkflowStepCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryWorkflowStepCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartWorkflowCommand
 */
export const de_StartWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartWorkflowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    lastStartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    statusMessage: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartWorkflowCommandError
 */
const de_StartWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StopWorkflowCommand
 */
export const de_StopWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopWorkflowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    lastStopTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    statusMessage: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopWorkflowCommandError
 */
const de_StopWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateWorkflowCommand
 */
export const de_UpdateWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateWorkflowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    adsApplicationConfigurationId: __expectString,
    arn: __expectString,
    creationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    lastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    status: __expectString,
    stepTargets: _json,
    tags: _json,
    templateId: __expectString,
    workflowInputs: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWorkflowCommandError
 */
const de_UpdateWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateWorkflowStepCommand
 */
export const de_UpdateWorkflowStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkflowStepCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateWorkflowStepCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    name: __expectString,
    stepGroupId: __expectString,
    workflowId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWorkflowStepCommandError
 */
const de_UpdateWorkflowStepCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkflowStepCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateWorkflowStepGroupCommand
 */
export const de_UpdateWorkflowStepGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkflowStepGroupCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateWorkflowStepGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    id: __expectString,
    lastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    next: _json,
    previous: _json,
    tools: _json,
    workflowId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWorkflowStepGroupCommandError
 */
const de_UpdateWorkflowStepGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkflowStepGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
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
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
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

// se_PlatformCommand omitted.

// se_PlatformScriptKey omitted.

// se_StepInput omitted.

// se_StepInputParameters omitted.

// se_StringList omitted.

// se_StringMap omitted.

// se_TagMap omitted.

// se_WorkflowStepAutomationConfiguration omitted.

// se_WorkflowStepOutput omitted.

// se_WorkflowStepOutputList omitted.

// se_WorkflowStepOutputUnion omitted.

/**
 * deserializeAws_restJson1MigrationWorkflowSummary
 */
const de_MigrationWorkflowSummary = (output: any, context: __SerdeContext): MigrationWorkflowSummary => {
  return take(output, {
    adsApplicationConfigurationName: __expectString,
    completedSteps: __expectInt32,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    name: __expectString,
    status: __expectString,
    statusMessage: __expectString,
    templateId: __expectString,
    totalSteps: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1MigrationWorkflowSummaryList
 */
const de_MigrationWorkflowSummaryList = (output: any, context: __SerdeContext): MigrationWorkflowSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MigrationWorkflowSummary(entry, context);
    });
  return retVal;
};

// de_PlatformCommand omitted.

// de_PlatformScriptKey omitted.

// de_PluginSummaries omitted.

// de_PluginSummary omitted.

// de_StepAutomationConfiguration omitted.

// de_StepInput omitted.

// de_StepInputParameters omitted.

// de_StepOutput omitted.

// de_StepOutputList omitted.

// de_StringList omitted.

// de_StringMap omitted.

// de_TagMap omitted.

// de_TemplateInput omitted.

// de_TemplateInputList omitted.

// de_TemplateStepGroupSummary omitted.

// de_TemplateStepGroupSummaryList omitted.

// de_TemplateStepSummary omitted.

// de_TemplateStepSummaryList omitted.

// de_TemplateSummary omitted.

// de_TemplateSummaryList omitted.

// de_Tool omitted.

// de_ToolsList omitted.

// de_WorkflowStepAutomationConfiguration omitted.

// de_WorkflowStepGroupsSummaryList omitted.

// de_WorkflowStepGroupSummary omitted.

// de_WorkflowStepOutput omitted.

// de_WorkflowStepOutputList omitted.

// de_WorkflowStepOutputUnion omitted.

// de_WorkflowStepsSummaryList omitted.

// de_WorkflowStepSummary omitted.

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
