// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
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
  PluginSummary,
  ResourceNotFoundException,
  StepAutomationConfiguration,
  StepInput,
  StepOutput,
  TemplateInput,
  TemplateStepGroupSummary,
  TemplateStepSummary,
  TemplateSummary,
  ThrottlingException,
  Tool,
  ValidationException,
  WorkflowStepAutomationConfiguration,
  WorkflowStepGroupSummary,
  WorkflowStepOutput,
  WorkflowStepOutputUnion,
  WorkflowStepSummary,
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
  body = JSON.stringify({
    ...(input.applicationConfigurationId != null && { applicationConfigurationId: input.applicationConfigurationId }),
    ...(input.description != null && { description: input.description }),
    ...(input.inputParameters != null && { inputParameters: se_StepInputParameters(input.inputParameters, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.stepTargets != null && { stepTargets: se_StringList(input.stepTargets, context) }),
    ...(input.tags != null && { tags: se_StringMap(input.tags, context) }),
    ...(input.templateId != null && { templateId: input.templateId }),
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
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.next != null && { next: se_StringList(input.next, context) }),
    ...(input.outputs != null && { outputs: se_WorkflowStepOutputList(input.outputs, context) }),
    ...(input.previous != null && { previous: se_StringList(input.previous, context) }),
    ...(input.stepActionType != null && { stepActionType: input.stepActionType }),
    ...(input.stepGroupId != null && { stepGroupId: input.stepGroupId }),
    ...(input.stepTarget != null && { stepTarget: se_StringList(input.stepTarget, context) }),
    ...(input.workflowId != null && { workflowId: input.workflowId }),
    ...(input.workflowStepAutomationConfiguration != null && {
      workflowStepAutomationConfiguration: se_WorkflowStepAutomationConfiguration(
        input.workflowStepAutomationConfiguration,
        context
      ),
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
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.next != null && { next: se_StringList(input.next, context) }),
    ...(input.previous != null && { previous: se_StringList(input.previous, context) }),
    ...(input.workflowId != null && { workflowId: input.workflowId }),
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
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.inputParameters != null && { inputParameters: se_StepInputParameters(input.inputParameters, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.stepTargets != null && { stepTargets: se_StringList(input.stepTargets, context) }),
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
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.next != null && { next: se_StringList(input.next, context) }),
    ...(input.outputs != null && { outputs: se_WorkflowStepOutputList(input.outputs, context) }),
    ...(input.previous != null && { previous: se_StringList(input.previous, context) }),
    ...(input.status != null && { status: input.status }),
    ...(input.stepActionType != null && { stepActionType: input.stepActionType }),
    ...(input.stepGroupId != null && { stepGroupId: input.stepGroupId }),
    ...(input.stepTarget != null && { stepTarget: se_StringList(input.stepTarget, context) }),
    ...(input.workflowId != null && { workflowId: input.workflowId }),
    ...(input.workflowStepAutomationConfiguration != null && {
      workflowStepAutomationConfiguration: se_WorkflowStepAutomationConfiguration(
        input.workflowStepAutomationConfiguration,
        context
      ),
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
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.next != null && { next: se_StringList(input.next, context) }),
    ...(input.previous != null && { previous: se_StringList(input.previous, context) }),
  });
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
  if (data.adsApplicationConfigurationId != null) {
    contents.adsApplicationConfigurationId = __expectString(data.adsApplicationConfigurationId);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.stepTargets != null) {
    contents.stepTargets = de_StringList(data.stepTargets, context);
  }
  if (data.tags != null) {
    contents.tags = de_StringMap(data.tags, context);
  }
  if (data.templateId != null) {
    contents.templateId = __expectString(data.templateId);
  }
  if (data.workflowInputs != null) {
    contents.workflowInputs = de_StepInputParameters(data.workflowInputs, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.stepGroupId != null) {
    contents.stepGroupId = __expectString(data.stepGroupId);
  }
  if (data.workflowId != null) {
    contents.workflowId = __expectString(data.workflowId);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.next != null) {
    contents.next = de_StringList(data.next, context);
  }
  if (data.previous != null) {
    contents.previous = de_StringList(data.previous, context);
  }
  if (data.tools != null) {
    contents.tools = de_ToolsList(data.tools, context);
  }
  if (data.workflowId != null) {
    contents.workflowId = __expectString(data.workflowId);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.inputs != null) {
    contents.inputs = de_TemplateInputList(data.inputs, context);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tools != null) {
    contents.tools = de_ToolsList(data.tools, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.creationTime != null) {
    contents.creationTime = __expectString(data.creationTime);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.next != null) {
    contents.next = de_StringList(data.next, context);
  }
  if (data.outputs != null) {
    contents.outputs = de_StepOutputList(data.outputs, context);
  }
  if (data.previous != null) {
    contents.previous = de_StringList(data.previous, context);
  }
  if (data.stepActionType != null) {
    contents.stepActionType = __expectString(data.stepActionType);
  }
  if (data.stepAutomationConfiguration != null) {
    contents.stepAutomationConfiguration = de_StepAutomationConfiguration(data.stepAutomationConfiguration, context);
  }
  if (data.stepGroupId != null) {
    contents.stepGroupId = __expectString(data.stepGroupId);
  }
  if (data.templateId != null) {
    contents.templateId = __expectString(data.templateId);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.lastModifiedTime != null) {
    contents.lastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastModifiedTime)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.next != null) {
    contents.next = de_StringList(data.next, context);
  }
  if (data.previous != null) {
    contents.previous = de_StringList(data.previous, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.templateId != null) {
    contents.templateId = __expectString(data.templateId);
  }
  if (data.tools != null) {
    contents.tools = de_ToolsList(data.tools, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.adsApplicationConfigurationId != null) {
    contents.adsApplicationConfigurationId = __expectString(data.adsApplicationConfigurationId);
  }
  if (data.adsApplicationName != null) {
    contents.adsApplicationName = __expectString(data.adsApplicationName);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.completedSteps != null) {
    contents.completedSteps = __expectInt32(data.completedSteps);
  }
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.endTime != null) {
    contents.endTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.endTime)));
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.lastModifiedTime != null) {
    contents.lastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastModifiedTime)));
  }
  if (data.lastStartTime != null) {
    contents.lastStartTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastStartTime)));
  }
  if (data.lastStopTime != null) {
    contents.lastStopTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastStopTime)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusMessage != null) {
    contents.statusMessage = __expectString(data.statusMessage);
  }
  if (data.tags != null) {
    contents.tags = de_StringMap(data.tags, context);
  }
  if (data.templateId != null) {
    contents.templateId = __expectString(data.templateId);
  }
  if (data.tools != null) {
    contents.tools = de_ToolsList(data.tools, context);
  }
  if (data.totalSteps != null) {
    contents.totalSteps = __expectInt32(data.totalSteps);
  }
  if (data.workflowBucket != null) {
    contents.workflowBucket = __expectString(data.workflowBucket);
  }
  if (data.workflowInputs != null) {
    contents.workflowInputs = de_StepInputParameters(data.workflowInputs, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.endTime != null) {
    contents.endTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.endTime)));
  }
  if (data.lastStartTime != null) {
    contents.lastStartTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastStartTime)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.next != null) {
    contents.next = de_StringList(data.next, context);
  }
  if (data.noOfSrvCompleted != null) {
    contents.noOfSrvCompleted = __expectInt32(data.noOfSrvCompleted);
  }
  if (data.noOfSrvFailed != null) {
    contents.noOfSrvFailed = __expectInt32(data.noOfSrvFailed);
  }
  if (data.outputs != null) {
    contents.outputs = de_WorkflowStepOutputList(data.outputs, context);
  }
  if (data.owner != null) {
    contents.owner = __expectString(data.owner);
  }
  if (data.previous != null) {
    contents.previous = de_StringList(data.previous, context);
  }
  if (data.scriptOutputLocation != null) {
    contents.scriptOutputLocation = __expectString(data.scriptOutputLocation);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusMessage != null) {
    contents.statusMessage = __expectString(data.statusMessage);
  }
  if (data.stepActionType != null) {
    contents.stepActionType = __expectString(data.stepActionType);
  }
  if (data.stepGroupId != null) {
    contents.stepGroupId = __expectString(data.stepGroupId);
  }
  if (data.stepId != null) {
    contents.stepId = __expectString(data.stepId);
  }
  if (data.stepTarget != null) {
    contents.stepTarget = de_StringList(data.stepTarget, context);
  }
  if (data.totalNoOfSrv != null) {
    contents.totalNoOfSrv = __expectInt32(data.totalNoOfSrv);
  }
  if (data.workflowId != null) {
    contents.workflowId = __expectString(data.workflowId);
  }
  if (data.workflowStepAutomationConfiguration != null) {
    contents.workflowStepAutomationConfiguration = de_WorkflowStepAutomationConfiguration(
      data.workflowStepAutomationConfiguration,
      context
    );
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.endTime != null) {
    contents.endTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.endTime)));
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.lastModifiedTime != null) {
    contents.lastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastModifiedTime)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.next != null) {
    contents.next = de_StringList(data.next, context);
  }
  if (data.owner != null) {
    contents.owner = __expectString(data.owner);
  }
  if (data.previous != null) {
    contents.previous = de_StringList(data.previous, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tools != null) {
    contents.tools = de_ToolsList(data.tools, context);
  }
  if (data.workflowId != null) {
    contents.workflowId = __expectString(data.workflowId);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.plugins != null) {
    contents.plugins = de_PluginSummaries(data.plugins, context);
  }
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
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.templateSummary != null) {
    contents.templateSummary = de_TemplateSummaryList(data.templateSummary, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.templateStepGroupSummary != null) {
    contents.templateStepGroupSummary = de_TemplateStepGroupSummaryList(data.templateStepGroupSummary, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.templateStepSummaryList != null) {
    contents.templateStepSummaryList = de_TemplateStepSummaryList(data.templateStepSummaryList, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.migrationWorkflowSummary != null) {
    contents.migrationWorkflowSummary = de_MigrationWorkflowSummaryList(data.migrationWorkflowSummary, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.workflowStepGroupsSummary != null) {
    contents.workflowStepGroupsSummary = de_WorkflowStepGroupsSummaryList(data.workflowStepGroupsSummary, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.workflowStepsSummary != null) {
    contents.workflowStepsSummary = de_WorkflowStepsSummaryList(data.workflowStepsSummary, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.stepGroupId != null) {
    contents.stepGroupId = __expectString(data.stepGroupId);
  }
  if (data.workflowId != null) {
    contents.workflowId = __expectString(data.workflowId);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.lastStartTime != null) {
    contents.lastStartTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastStartTime)));
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusMessage != null) {
    contents.statusMessage = __expectString(data.statusMessage);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.lastStopTime != null) {
    contents.lastStopTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastStopTime)));
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusMessage != null) {
    contents.statusMessage = __expectString(data.statusMessage);
  }
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
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.adsApplicationConfigurationId != null) {
    contents.adsApplicationConfigurationId = __expectString(data.adsApplicationConfigurationId);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.lastModifiedTime != null) {
    contents.lastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastModifiedTime)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.stepTargets != null) {
    contents.stepTargets = de_StringList(data.stepTargets, context);
  }
  if (data.tags != null) {
    contents.tags = de_StringMap(data.tags, context);
  }
  if (data.templateId != null) {
    contents.templateId = __expectString(data.templateId);
  }
  if (data.workflowInputs != null) {
    contents.workflowInputs = de_StepInputParameters(data.workflowInputs, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.stepGroupId != null) {
    contents.stepGroupId = __expectString(data.stepGroupId);
  }
  if (data.workflowId != null) {
    contents.workflowId = __expectString(data.workflowId);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.lastModifiedTime != null) {
    contents.lastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastModifiedTime)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.next != null) {
    contents.next = de_StringList(data.next, context);
  }
  if (data.previous != null) {
    contents.previous = de_StringList(data.previous, context);
  }
  if (data.tools != null) {
    contents.tools = de_ToolsList(data.tools, context);
  }
  if (data.workflowId != null) {
    contents.workflowId = __expectString(data.workflowId);
  }
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
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
 * serializeAws_restJson1PlatformCommand
 */
const se_PlatformCommand = (input: PlatformCommand, context: __SerdeContext): any => {
  return {
    ...(input.linux != null && { linux: input.linux }),
    ...(input.windows != null && { windows: input.windows }),
  };
};

/**
 * serializeAws_restJson1PlatformScriptKey
 */
const se_PlatformScriptKey = (input: PlatformScriptKey, context: __SerdeContext): any => {
  return {
    ...(input.linux != null && { linux: input.linux }),
    ...(input.windows != null && { windows: input.windows }),
  };
};

/**
 * serializeAws_restJson1StepInput
 */
const se_StepInput = (input: StepInput, context: __SerdeContext): any => {
  return StepInput.visit(input, {
    integerValue: (value) => ({ integerValue: value }),
    listOfStringsValue: (value) => ({ listOfStringsValue: se_StringList(value, context) }),
    mapOfStringValue: (value) => ({ mapOfStringValue: se_StringMap(value, context) }),
    stringValue: (value) => ({ stringValue: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1StepInputParameters
 */
const se_StepInputParameters = (input: Record<string, StepInput>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_StepInput(value, context);
    return acc;
  }, {});
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
 * serializeAws_restJson1StringMap
 */
const se_StringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
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
 * serializeAws_restJson1WorkflowStepAutomationConfiguration
 */
const se_WorkflowStepAutomationConfiguration = (
  input: WorkflowStepAutomationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.command != null && { command: se_PlatformCommand(input.command, context) }),
    ...(input.runEnvironment != null && { runEnvironment: input.runEnvironment }),
    ...(input.scriptLocationS3Bucket != null && { scriptLocationS3Bucket: input.scriptLocationS3Bucket }),
    ...(input.scriptLocationS3Key != null && {
      scriptLocationS3Key: se_PlatformScriptKey(input.scriptLocationS3Key, context),
    }),
    ...(input.targetType != null && { targetType: input.targetType }),
  };
};

/**
 * serializeAws_restJson1WorkflowStepOutput
 */
const se_WorkflowStepOutput = (input: WorkflowStepOutput, context: __SerdeContext): any => {
  return {
    ...(input.dataType != null && { dataType: input.dataType }),
    ...(input.name != null && { name: input.name }),
    ...(input.required != null && { required: input.required }),
    ...(input.value != null && { value: se_WorkflowStepOutputUnion(input.value, context) }),
  };
};

/**
 * serializeAws_restJson1WorkflowStepOutputList
 */
const se_WorkflowStepOutputList = (input: WorkflowStepOutput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WorkflowStepOutput(entry, context);
    });
};

/**
 * serializeAws_restJson1WorkflowStepOutputUnion
 */
const se_WorkflowStepOutputUnion = (input: WorkflowStepOutputUnion, context: __SerdeContext): any => {
  return WorkflowStepOutputUnion.visit(input, {
    integerValue: (value) => ({ integerValue: value }),
    listOfStringValue: (value) => ({ listOfStringValue: se_StringList(value, context) }),
    stringValue: (value) => ({ stringValue: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * deserializeAws_restJson1MigrationWorkflowSummary
 */
const de_MigrationWorkflowSummary = (output: any, context: __SerdeContext): MigrationWorkflowSummary => {
  return {
    adsApplicationConfigurationName: __expectString(output.adsApplicationConfigurationName),
    completedSteps: __expectInt32(output.completedSteps),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    id: __expectString(output.id),
    name: __expectString(output.name),
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
    templateId: __expectString(output.templateId),
    totalSteps: __expectInt32(output.totalSteps),
  } as any;
};

/**
 * deserializeAws_restJson1MigrationWorkflowSummaryList
 */
const de_MigrationWorkflowSummaryList = (output: any, context: __SerdeContext): MigrationWorkflowSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MigrationWorkflowSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PlatformCommand
 */
const de_PlatformCommand = (output: any, context: __SerdeContext): PlatformCommand => {
  return {
    linux: __expectString(output.linux),
    windows: __expectString(output.windows),
  } as any;
};

/**
 * deserializeAws_restJson1PlatformScriptKey
 */
const de_PlatformScriptKey = (output: any, context: __SerdeContext): PlatformScriptKey => {
  return {
    linux: __expectString(output.linux),
    windows: __expectString(output.windows),
  } as any;
};

/**
 * deserializeAws_restJson1PluginSummaries
 */
const de_PluginSummaries = (output: any, context: __SerdeContext): PluginSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PluginSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PluginSummary
 */
const de_PluginSummary = (output: any, context: __SerdeContext): PluginSummary => {
  return {
    hostname: __expectString(output.hostname),
    ipAddress: __expectString(output.ipAddress),
    pluginId: __expectString(output.pluginId),
    registeredTime: __expectString(output.registeredTime),
    status: __expectString(output.status),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1StepAutomationConfiguration
 */
const de_StepAutomationConfiguration = (output: any, context: __SerdeContext): StepAutomationConfiguration => {
  return {
    command: output.command != null ? de_PlatformCommand(output.command, context) : undefined,
    runEnvironment: __expectString(output.runEnvironment),
    scriptLocationS3Bucket: __expectString(output.scriptLocationS3Bucket),
    scriptLocationS3Key:
      output.scriptLocationS3Key != null ? de_PlatformScriptKey(output.scriptLocationS3Key, context) : undefined,
    targetType: __expectString(output.targetType),
  } as any;
};

/**
 * deserializeAws_restJson1StepInput
 */
const de_StepInput = (output: any, context: __SerdeContext): StepInput => {
  if (__expectInt32(output.integerValue) !== undefined) {
    return { integerValue: __expectInt32(output.integerValue) as any };
  }
  if (output.listOfStringsValue != null) {
    return {
      listOfStringsValue: de_StringList(output.listOfStringsValue, context),
    };
  }
  if (output.mapOfStringValue != null) {
    return {
      mapOfStringValue: de_StringMap(output.mapOfStringValue, context),
    };
  }
  if (__expectString(output.stringValue) !== undefined) {
    return { stringValue: __expectString(output.stringValue) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1StepInputParameters
 */
const de_StepInputParameters = (output: any, context: __SerdeContext): Record<string, StepInput> => {
  return Object.entries(output).reduce((acc: Record<string, StepInput>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_StepInput(__expectUnion(value), context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1StepOutput
 */
const de_StepOutput = (output: any, context: __SerdeContext): StepOutput => {
  return {
    dataType: __expectString(output.dataType),
    name: __expectString(output.name),
    required: __expectBoolean(output.required),
  } as any;
};

/**
 * deserializeAws_restJson1StepOutputList
 */
const de_StepOutputList = (output: any, context: __SerdeContext): StepOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StepOutput(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1StringMap
 */
const de_StringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
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
 * deserializeAws_restJson1TemplateInput
 */
const de_TemplateInput = (output: any, context: __SerdeContext): TemplateInput => {
  return {
    dataType: __expectString(output.dataType),
    inputName: __expectString(output.inputName),
    required: __expectBoolean(output.required),
  } as any;
};

/**
 * deserializeAws_restJson1TemplateInputList
 */
const de_TemplateInputList = (output: any, context: __SerdeContext): TemplateInput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TemplateInput(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TemplateStepGroupSummary
 */
const de_TemplateStepGroupSummary = (output: any, context: __SerdeContext): TemplateStepGroupSummary => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
    next: output.next != null ? de_StringList(output.next, context) : undefined,
    previous: output.previous != null ? de_StringList(output.previous, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TemplateStepGroupSummaryList
 */
const de_TemplateStepGroupSummaryList = (output: any, context: __SerdeContext): TemplateStepGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TemplateStepGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TemplateStepSummary
 */
const de_TemplateStepSummary = (output: any, context: __SerdeContext): TemplateStepSummary => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
    next: output.next != null ? de_StringList(output.next, context) : undefined,
    owner: __expectString(output.owner),
    previous: output.previous != null ? de_StringList(output.previous, context) : undefined,
    stepActionType: __expectString(output.stepActionType),
    stepGroupId: __expectString(output.stepGroupId),
    targetType: __expectString(output.targetType),
    templateId: __expectString(output.templateId),
  } as any;
};

/**
 * deserializeAws_restJson1TemplateStepSummaryList
 */
const de_TemplateStepSummaryList = (output: any, context: __SerdeContext): TemplateStepSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TemplateStepSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TemplateSummary
 */
const de_TemplateSummary = (output: any, context: __SerdeContext): TemplateSummary => {
  return {
    arn: __expectString(output.arn),
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1TemplateSummaryList
 */
const de_TemplateSummaryList = (output: any, context: __SerdeContext): TemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TemplateSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Tool
 */
const de_Tool = (output: any, context: __SerdeContext): Tool => {
  return {
    name: __expectString(output.name),
    url: __expectString(output.url),
  } as any;
};

/**
 * deserializeAws_restJson1ToolsList
 */
const de_ToolsList = (output: any, context: __SerdeContext): Tool[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tool(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorkflowStepAutomationConfiguration
 */
const de_WorkflowStepAutomationConfiguration = (
  output: any,
  context: __SerdeContext
): WorkflowStepAutomationConfiguration => {
  return {
    command: output.command != null ? de_PlatformCommand(output.command, context) : undefined,
    runEnvironment: __expectString(output.runEnvironment),
    scriptLocationS3Bucket: __expectString(output.scriptLocationS3Bucket),
    scriptLocationS3Key:
      output.scriptLocationS3Key != null ? de_PlatformScriptKey(output.scriptLocationS3Key, context) : undefined,
    targetType: __expectString(output.targetType),
  } as any;
};

/**
 * deserializeAws_restJson1WorkflowStepGroupsSummaryList
 */
const de_WorkflowStepGroupsSummaryList = (output: any, context: __SerdeContext): WorkflowStepGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorkflowStepGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorkflowStepGroupSummary
 */
const de_WorkflowStepGroupSummary = (output: any, context: __SerdeContext): WorkflowStepGroupSummary => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
    next: output.next != null ? de_StringList(output.next, context) : undefined,
    owner: __expectString(output.owner),
    previous: output.previous != null ? de_StringList(output.previous, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1WorkflowStepOutput
 */
const de_WorkflowStepOutput = (output: any, context: __SerdeContext): WorkflowStepOutput => {
  return {
    dataType: __expectString(output.dataType),
    name: __expectString(output.name),
    required: __expectBoolean(output.required),
    value: output.value != null ? de_WorkflowStepOutputUnion(__expectUnion(output.value), context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1WorkflowStepOutputList
 */
const de_WorkflowStepOutputList = (output: any, context: __SerdeContext): WorkflowStepOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorkflowStepOutput(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorkflowStepOutputUnion
 */
const de_WorkflowStepOutputUnion = (output: any, context: __SerdeContext): WorkflowStepOutputUnion => {
  if (__expectInt32(output.integerValue) !== undefined) {
    return { integerValue: __expectInt32(output.integerValue) as any };
  }
  if (output.listOfStringValue != null) {
    return {
      listOfStringValue: de_StringList(output.listOfStringValue, context),
    };
  }
  if (__expectString(output.stringValue) !== undefined) {
    return { stringValue: __expectString(output.stringValue) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1WorkflowStepsSummaryList
 */
const de_WorkflowStepsSummaryList = (output: any, context: __SerdeContext): WorkflowStepSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorkflowStepSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorkflowStepSummary
 */
const de_WorkflowStepSummary = (output: any, context: __SerdeContext): WorkflowStepSummary => {
  return {
    description: __expectString(output.description),
    name: __expectString(output.name),
    next: output.next != null ? de_StringList(output.next, context) : undefined,
    noOfSrvCompleted: __expectInt32(output.noOfSrvCompleted),
    noOfSrvFailed: __expectInt32(output.noOfSrvFailed),
    owner: __expectString(output.owner),
    previous: output.previous != null ? de_StringList(output.previous, context) : undefined,
    scriptLocation: __expectString(output.scriptLocation),
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
    stepActionType: __expectString(output.stepActionType),
    stepId: __expectString(output.stepId),
    totalNoOfSrv: __expectInt32(output.totalNoOfSrv),
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
