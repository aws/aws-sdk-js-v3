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

export const serializeAws_restJson1CreateWorkflowCommand = async (
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
    ...(input.inputParameters != null && {
      inputParameters: serializeAws_restJson1StepInputParameters(input.inputParameters, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.stepTargets != null && { stepTargets: serializeAws_restJson1StringList(input.stepTargets, context) }),
    ...(input.tags != null && { tags: serializeAws_restJson1StringMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateWorkflowStepCommand = async (
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
    ...(input.next != null && { next: serializeAws_restJson1StringList(input.next, context) }),
    ...(input.outputs != null && { outputs: serializeAws_restJson1WorkflowStepOutputList(input.outputs, context) }),
    ...(input.previous != null && { previous: serializeAws_restJson1StringList(input.previous, context) }),
    ...(input.stepActionType != null && { stepActionType: input.stepActionType }),
    ...(input.stepGroupId != null && { stepGroupId: input.stepGroupId }),
    ...(input.stepTarget != null && { stepTarget: serializeAws_restJson1StringList(input.stepTarget, context) }),
    ...(input.workflowId != null && { workflowId: input.workflowId }),
    ...(input.workflowStepAutomationConfiguration != null && {
      workflowStepAutomationConfiguration: serializeAws_restJson1WorkflowStepAutomationConfiguration(
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

export const serializeAws_restJson1CreateWorkflowStepGroupCommand = async (
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
    ...(input.next != null && { next: serializeAws_restJson1StringList(input.next, context) }),
    ...(input.previous != null && { previous: serializeAws_restJson1StringList(input.previous, context) }),
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

export const serializeAws_restJson1DeleteWorkflowCommand = async (
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

export const serializeAws_restJson1DeleteWorkflowStepCommand = async (
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

export const serializeAws_restJson1DeleteWorkflowStepGroupCommand = async (
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

export const serializeAws_restJson1GetTemplateCommand = async (
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

export const serializeAws_restJson1GetTemplateStepCommand = async (
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

export const serializeAws_restJson1GetTemplateStepGroupCommand = async (
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

export const serializeAws_restJson1GetWorkflowCommand = async (
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

export const serializeAws_restJson1GetWorkflowStepCommand = async (
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

export const serializeAws_restJson1GetWorkflowStepGroupCommand = async (
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

export const serializeAws_restJson1ListPluginsCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1ListTemplatesCommand = async (
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

export const serializeAws_restJson1ListTemplateStepGroupsCommand = async (
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

export const serializeAws_restJson1ListTemplateStepsCommand = async (
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

export const serializeAws_restJson1ListWorkflowsCommand = async (
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

export const serializeAws_restJson1ListWorkflowStepGroupsCommand = async (
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

export const serializeAws_restJson1ListWorkflowStepsCommand = async (
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

export const serializeAws_restJson1RetryWorkflowStepCommand = async (
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

export const serializeAws_restJson1StartWorkflowCommand = async (
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

export const serializeAws_restJson1StopWorkflowCommand = async (
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
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

export const serializeAws_restJson1UpdateWorkflowCommand = async (
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
    ...(input.inputParameters != null && {
      inputParameters: serializeAws_restJson1StepInputParameters(input.inputParameters, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.stepTargets != null && { stepTargets: serializeAws_restJson1StringList(input.stepTargets, context) }),
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

export const serializeAws_restJson1UpdateWorkflowStepCommand = async (
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
    ...(input.next != null && { next: serializeAws_restJson1StringList(input.next, context) }),
    ...(input.outputs != null && { outputs: serializeAws_restJson1WorkflowStepOutputList(input.outputs, context) }),
    ...(input.previous != null && { previous: serializeAws_restJson1StringList(input.previous, context) }),
    ...(input.status != null && { status: input.status }),
    ...(input.stepActionType != null && { stepActionType: input.stepActionType }),
    ...(input.stepGroupId != null && { stepGroupId: input.stepGroupId }),
    ...(input.stepTarget != null && { stepTarget: serializeAws_restJson1StringList(input.stepTarget, context) }),
    ...(input.workflowId != null && { workflowId: input.workflowId }),
    ...(input.workflowStepAutomationConfiguration != null && {
      workflowStepAutomationConfiguration: serializeAws_restJson1WorkflowStepAutomationConfiguration(
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

export const serializeAws_restJson1UpdateWorkflowStepGroupCommand = async (
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
    ...(input.next != null && { next: serializeAws_restJson1StringList(input.next, context) }),
    ...(input.previous != null && { previous: serializeAws_restJson1StringList(input.previous, context) }),
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

export const deserializeAws_restJson1CreateWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateWorkflowCommandError(output, context);
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
    contents.stepTargets = deserializeAws_restJson1StringList(data.stepTargets, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1StringMap(data.tags, context);
  }
  if (data.templateId != null) {
    contents.templateId = __expectString(data.templateId);
  }
  if (data.workflowInputs != null) {
    contents.workflowInputs = deserializeAws_restJson1StepInputParameters(data.workflowInputs, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateWorkflowCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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

export const deserializeAws_restJson1CreateWorkflowStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowStepCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateWorkflowStepCommandError(output, context);
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

const deserializeAws_restJson1CreateWorkflowStepCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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

export const deserializeAws_restJson1CreateWorkflowStepGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowStepGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateWorkflowStepGroupCommandError(output, context);
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
    contents.next = deserializeAws_restJson1StringList(data.next, context);
  }
  if (data.previous != null) {
    contents.previous = deserializeAws_restJson1StringList(data.previous, context);
  }
  if (data.tools != null) {
    contents.tools = deserializeAws_restJson1ToolsList(data.tools, context);
  }
  if (data.workflowId != null) {
    contents.workflowId = __expectString(data.workflowId);
  }
  return contents;
};

const deserializeAws_restJson1CreateWorkflowStepGroupCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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

export const deserializeAws_restJson1DeleteWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteWorkflowCommandError(output, context);
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

const deserializeAws_restJson1DeleteWorkflowCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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

export const deserializeAws_restJson1DeleteWorkflowStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowStepCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteWorkflowStepCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteWorkflowStepCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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

export const deserializeAws_restJson1DeleteWorkflowStepGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowStepGroupCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteWorkflowStepGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteWorkflowStepGroupCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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

export const deserializeAws_restJson1GetTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTemplateCommandError(output, context);
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
    contents.inputs = deserializeAws_restJson1TemplateInputList(data.inputs, context);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tools != null) {
    contents.tools = deserializeAws_restJson1ToolsList(data.tools, context);
  }
  return contents;
};

const deserializeAws_restJson1GetTemplateCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetTemplateStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateStepCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTemplateStepCommandError(output, context);
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
    contents.next = deserializeAws_restJson1StringList(data.next, context);
  }
  if (data.outputs != null) {
    contents.outputs = deserializeAws_restJson1StepOutputList(data.outputs, context);
  }
  if (data.previous != null) {
    contents.previous = deserializeAws_restJson1StringList(data.previous, context);
  }
  if (data.stepActionType != null) {
    contents.stepActionType = __expectString(data.stepActionType);
  }
  if (data.stepAutomationConfiguration != null) {
    contents.stepAutomationConfiguration = deserializeAws_restJson1StepAutomationConfiguration(
      data.stepAutomationConfiguration,
      context
    );
  }
  if (data.stepGroupId != null) {
    contents.stepGroupId = __expectString(data.stepGroupId);
  }
  if (data.templateId != null) {
    contents.templateId = __expectString(data.templateId);
  }
  return contents;
};

const deserializeAws_restJson1GetTemplateStepCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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

export const deserializeAws_restJson1GetTemplateStepGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateStepGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTemplateStepGroupCommandError(output, context);
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
    contents.next = deserializeAws_restJson1StringList(data.next, context);
  }
  if (data.previous != null) {
    contents.previous = deserializeAws_restJson1StringList(data.previous, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.templateId != null) {
    contents.templateId = __expectString(data.templateId);
  }
  if (data.tools != null) {
    contents.tools = deserializeAws_restJson1ToolsList(data.tools, context);
  }
  return contents;
};

const deserializeAws_restJson1GetTemplateStepGroupCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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

export const deserializeAws_restJson1GetWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetWorkflowCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1StringMap(data.tags, context);
  }
  if (data.templateId != null) {
    contents.templateId = __expectString(data.templateId);
  }
  if (data.tools != null) {
    contents.tools = deserializeAws_restJson1ToolsList(data.tools, context);
  }
  if (data.totalSteps != null) {
    contents.totalSteps = __expectInt32(data.totalSteps);
  }
  if (data.workflowBucket != null) {
    contents.workflowBucket = __expectString(data.workflowBucket);
  }
  if (data.workflowInputs != null) {
    contents.workflowInputs = deserializeAws_restJson1StepInputParameters(data.workflowInputs, context);
  }
  return contents;
};

const deserializeAws_restJson1GetWorkflowCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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

export const deserializeAws_restJson1GetWorkflowStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowStepCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetWorkflowStepCommandError(output, context);
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
    contents.next = deserializeAws_restJson1StringList(data.next, context);
  }
  if (data.noOfSrvCompleted != null) {
    contents.noOfSrvCompleted = __expectInt32(data.noOfSrvCompleted);
  }
  if (data.noOfSrvFailed != null) {
    contents.noOfSrvFailed = __expectInt32(data.noOfSrvFailed);
  }
  if (data.outputs != null) {
    contents.outputs = deserializeAws_restJson1WorkflowStepOutputList(data.outputs, context);
  }
  if (data.owner != null) {
    contents.owner = __expectString(data.owner);
  }
  if (data.previous != null) {
    contents.previous = deserializeAws_restJson1StringList(data.previous, context);
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
    contents.stepTarget = deserializeAws_restJson1StringList(data.stepTarget, context);
  }
  if (data.totalNoOfSrv != null) {
    contents.totalNoOfSrv = __expectInt32(data.totalNoOfSrv);
  }
  if (data.workflowId != null) {
    contents.workflowId = __expectString(data.workflowId);
  }
  if (data.workflowStepAutomationConfiguration != null) {
    contents.workflowStepAutomationConfiguration = deserializeAws_restJson1WorkflowStepAutomationConfiguration(
      data.workflowStepAutomationConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetWorkflowStepCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetWorkflowStepGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowStepGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetWorkflowStepGroupCommandError(output, context);
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
    contents.next = deserializeAws_restJson1StringList(data.next, context);
  }
  if (data.owner != null) {
    contents.owner = __expectString(data.owner);
  }
  if (data.previous != null) {
    contents.previous = deserializeAws_restJson1StringList(data.previous, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tools != null) {
    contents.tools = deserializeAws_restJson1ToolsList(data.tools, context);
  }
  if (data.workflowId != null) {
    contents.workflowId = __expectString(data.workflowId);
  }
  return contents;
};

const deserializeAws_restJson1GetWorkflowStepGroupCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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

export const deserializeAws_restJson1ListPluginsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPluginsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPluginsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.plugins != null) {
    contents.plugins = deserializeAws_restJson1PluginSummaries(data.plugins, context);
  }
  return contents;
};

const deserializeAws_restJson1ListPluginsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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

export const deserializeAws_restJson1ListTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.templateSummary != null) {
    contents.templateSummary = deserializeAws_restJson1TemplateSummaryList(data.templateSummary, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTemplatesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTemplateStepGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateStepGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTemplateStepGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.templateStepGroupSummary != null) {
    contents.templateStepGroupSummary = deserializeAws_restJson1TemplateStepGroupSummaryList(
      data.templateStepGroupSummary,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListTemplateStepGroupsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTemplateStepsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateStepsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTemplateStepsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.templateStepSummaryList != null) {
    contents.templateStepSummaryList = deserializeAws_restJson1TemplateStepSummaryList(
      data.templateStepSummaryList,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListTemplateStepsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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

export const deserializeAws_restJson1ListWorkflowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWorkflowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.migrationWorkflowSummary != null) {
    contents.migrationWorkflowSummary = deserializeAws_restJson1MigrationWorkflowSummaryList(
      data.migrationWorkflowSummary,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListWorkflowsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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

export const deserializeAws_restJson1ListWorkflowStepGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowStepGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWorkflowStepGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.workflowStepGroupsSummary != null) {
    contents.workflowStepGroupsSummary = deserializeAws_restJson1WorkflowStepGroupsSummaryList(
      data.workflowStepGroupsSummary,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListWorkflowStepGroupsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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

export const deserializeAws_restJson1ListWorkflowStepsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowStepsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWorkflowStepsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.workflowStepsSummary != null) {
    contents.workflowStepsSummary = deserializeAws_restJson1WorkflowStepsSummaryList(
      data.workflowStepsSummary,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListWorkflowStepsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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

export const deserializeAws_restJson1RetryWorkflowStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryWorkflowStepCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RetryWorkflowStepCommandError(output, context);
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

const deserializeAws_restJson1RetryWorkflowStepCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartWorkflowCommandError(output, context);
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

const deserializeAws_restJson1StartWorkflowCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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

export const deserializeAws_restJson1StopWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopWorkflowCommandError(output, context);
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

const deserializeAws_restJson1StopWorkflowCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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

export const deserializeAws_restJson1UpdateWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateWorkflowCommandError(output, context);
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
    contents.stepTargets = deserializeAws_restJson1StringList(data.stepTargets, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1StringMap(data.tags, context);
  }
  if (data.templateId != null) {
    contents.templateId = __expectString(data.templateId);
  }
  if (data.workflowInputs != null) {
    contents.workflowInputs = deserializeAws_restJson1StepInputParameters(data.workflowInputs, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateWorkflowCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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

export const deserializeAws_restJson1UpdateWorkflowStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkflowStepCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateWorkflowStepCommandError(output, context);
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

const deserializeAws_restJson1UpdateWorkflowStepCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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

export const deserializeAws_restJson1UpdateWorkflowStepGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkflowStepGroupCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateWorkflowStepGroupCommandError(output, context);
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
    contents.next = deserializeAws_restJson1StringList(data.next, context);
  }
  if (data.previous != null) {
    contents.previous = deserializeAws_restJson1StringList(data.previous, context);
  }
  if (data.tools != null) {
    contents.tools = deserializeAws_restJson1ToolsList(data.tools, context);
  }
  if (data.workflowId != null) {
    contents.workflowId = __expectString(data.workflowId);
  }
  return contents;
};

const deserializeAws_restJson1UpdateWorkflowStepGroupCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
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

const serializeAws_restJson1PlatformCommand = (input: PlatformCommand, context: __SerdeContext): any => {
  return {
    ...(input.linux != null && { linux: input.linux }),
    ...(input.windows != null && { windows: input.windows }),
  };
};

const serializeAws_restJson1PlatformScriptKey = (input: PlatformScriptKey, context: __SerdeContext): any => {
  return {
    ...(input.linux != null && { linux: input.linux }),
    ...(input.windows != null && { windows: input.windows }),
  };
};

const serializeAws_restJson1StepInput = (input: StepInput, context: __SerdeContext): any => {
  return StepInput.visit(input, {
    integerValue: (value) => ({ integerValue: value }),
    listOfStringsValue: (value) => ({ listOfStringsValue: serializeAws_restJson1StringList(value, context) }),
    mapOfStringValue: (value) => ({ mapOfStringValue: serializeAws_restJson1StringMap(value, context) }),
    stringValue: (value) => ({ stringValue: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1StepInputParameters = (input: Record<string, StepInput>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1StepInput(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1StringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1WorkflowStepAutomationConfiguration = (
  input: WorkflowStepAutomationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.command != null && { command: serializeAws_restJson1PlatformCommand(input.command, context) }),
    ...(input.runEnvironment != null && { runEnvironment: input.runEnvironment }),
    ...(input.scriptLocationS3Bucket != null && { scriptLocationS3Bucket: input.scriptLocationS3Bucket }),
    ...(input.scriptLocationS3Key != null && {
      scriptLocationS3Key: serializeAws_restJson1PlatformScriptKey(input.scriptLocationS3Key, context),
    }),
    ...(input.targetType != null && { targetType: input.targetType }),
  };
};

const serializeAws_restJson1WorkflowStepOutput = (input: WorkflowStepOutput, context: __SerdeContext): any => {
  return {
    ...(input.dataType != null && { dataType: input.dataType }),
    ...(input.name != null && { name: input.name }),
    ...(input.required != null && { required: input.required }),
    ...(input.value != null && { value: serializeAws_restJson1WorkflowStepOutputUnion(input.value, context) }),
  };
};

const serializeAws_restJson1WorkflowStepOutputList = (input: WorkflowStepOutput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1WorkflowStepOutput(entry, context);
    });
};

const serializeAws_restJson1WorkflowStepOutputUnion = (
  input: WorkflowStepOutputUnion,
  context: __SerdeContext
): any => {
  return WorkflowStepOutputUnion.visit(input, {
    integerValue: (value) => ({ integerValue: value }),
    listOfStringValue: (value) => ({ listOfStringValue: serializeAws_restJson1StringList(value, context) }),
    stringValue: (value) => ({ stringValue: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const deserializeAws_restJson1MigrationWorkflowSummary = (
  output: any,
  context: __SerdeContext
): MigrationWorkflowSummary => {
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

const deserializeAws_restJson1MigrationWorkflowSummaryList = (
  output: any,
  context: __SerdeContext
): MigrationWorkflowSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MigrationWorkflowSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PlatformCommand = (output: any, context: __SerdeContext): PlatformCommand => {
  return {
    linux: __expectString(output.linux),
    windows: __expectString(output.windows),
  } as any;
};

const deserializeAws_restJson1PlatformScriptKey = (output: any, context: __SerdeContext): PlatformScriptKey => {
  return {
    linux: __expectString(output.linux),
    windows: __expectString(output.windows),
  } as any;
};

const deserializeAws_restJson1PluginSummaries = (output: any, context: __SerdeContext): PluginSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PluginSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PluginSummary = (output: any, context: __SerdeContext): PluginSummary => {
  return {
    hostname: __expectString(output.hostname),
    ipAddress: __expectString(output.ipAddress),
    pluginId: __expectString(output.pluginId),
    registeredTime: __expectString(output.registeredTime),
    status: __expectString(output.status),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1StepAutomationConfiguration = (
  output: any,
  context: __SerdeContext
): StepAutomationConfiguration => {
  return {
    command: output.command != null ? deserializeAws_restJson1PlatformCommand(output.command, context) : undefined,
    runEnvironment: __expectString(output.runEnvironment),
    scriptLocationS3Bucket: __expectString(output.scriptLocationS3Bucket),
    scriptLocationS3Key:
      output.scriptLocationS3Key != null
        ? deserializeAws_restJson1PlatformScriptKey(output.scriptLocationS3Key, context)
        : undefined,
    targetType: __expectString(output.targetType),
  } as any;
};

const deserializeAws_restJson1StepInput = (output: any, context: __SerdeContext): StepInput => {
  if (__expectInt32(output.integerValue) !== undefined) {
    return { integerValue: __expectInt32(output.integerValue) as any };
  }
  if (output.listOfStringsValue != null) {
    return {
      listOfStringsValue: deserializeAws_restJson1StringList(output.listOfStringsValue, context),
    };
  }
  if (output.mapOfStringValue != null) {
    return {
      mapOfStringValue: deserializeAws_restJson1StringMap(output.mapOfStringValue, context),
    };
  }
  if (__expectString(output.stringValue) !== undefined) {
    return { stringValue: __expectString(output.stringValue) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1StepInputParameters = (
  output: any,
  context: __SerdeContext
): Record<string, StepInput> => {
  return Object.entries(output).reduce((acc: Record<string, StepInput>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1StepInput(__expectUnion(value), context);
    return acc;
  }, {});
};

const deserializeAws_restJson1StepOutput = (output: any, context: __SerdeContext): StepOutput => {
  return {
    dataType: __expectString(output.dataType),
    name: __expectString(output.name),
    required: __expectBoolean(output.required),
  } as any;
};

const deserializeAws_restJson1StepOutputList = (output: any, context: __SerdeContext): StepOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StepOutput(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1StringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TemplateInput = (output: any, context: __SerdeContext): TemplateInput => {
  return {
    dataType: __expectString(output.dataType),
    inputName: __expectString(output.inputName),
    required: __expectBoolean(output.required),
  } as any;
};

const deserializeAws_restJson1TemplateInputList = (output: any, context: __SerdeContext): TemplateInput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TemplateInput(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TemplateStepGroupSummary = (
  output: any,
  context: __SerdeContext
): TemplateStepGroupSummary => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
    next: output.next != null ? deserializeAws_restJson1StringList(output.next, context) : undefined,
    previous: output.previous != null ? deserializeAws_restJson1StringList(output.previous, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TemplateStepGroupSummaryList = (
  output: any,
  context: __SerdeContext
): TemplateStepGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TemplateStepGroupSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TemplateStepSummary = (output: any, context: __SerdeContext): TemplateStepSummary => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
    next: output.next != null ? deserializeAws_restJson1StringList(output.next, context) : undefined,
    owner: __expectString(output.owner),
    previous: output.previous != null ? deserializeAws_restJson1StringList(output.previous, context) : undefined,
    stepActionType: __expectString(output.stepActionType),
    stepGroupId: __expectString(output.stepGroupId),
    targetType: __expectString(output.targetType),
    templateId: __expectString(output.templateId),
  } as any;
};

const deserializeAws_restJson1TemplateStepSummaryList = (
  output: any,
  context: __SerdeContext
): TemplateStepSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TemplateStepSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TemplateSummary = (output: any, context: __SerdeContext): TemplateSummary => {
  return {
    arn: __expectString(output.arn),
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1TemplateSummaryList = (output: any, context: __SerdeContext): TemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TemplateSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Tool = (output: any, context: __SerdeContext): Tool => {
  return {
    name: __expectString(output.name),
    url: __expectString(output.url),
  } as any;
};

const deserializeAws_restJson1ToolsList = (output: any, context: __SerdeContext): Tool[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tool(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1WorkflowStepAutomationConfiguration = (
  output: any,
  context: __SerdeContext
): WorkflowStepAutomationConfiguration => {
  return {
    command: output.command != null ? deserializeAws_restJson1PlatformCommand(output.command, context) : undefined,
    runEnvironment: __expectString(output.runEnvironment),
    scriptLocationS3Bucket: __expectString(output.scriptLocationS3Bucket),
    scriptLocationS3Key:
      output.scriptLocationS3Key != null
        ? deserializeAws_restJson1PlatformScriptKey(output.scriptLocationS3Key, context)
        : undefined,
    targetType: __expectString(output.targetType),
  } as any;
};

const deserializeAws_restJson1WorkflowStepGroupsSummaryList = (
  output: any,
  context: __SerdeContext
): WorkflowStepGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WorkflowStepGroupSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1WorkflowStepGroupSummary = (
  output: any,
  context: __SerdeContext
): WorkflowStepGroupSummary => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
    next: output.next != null ? deserializeAws_restJson1StringList(output.next, context) : undefined,
    owner: __expectString(output.owner),
    previous: output.previous != null ? deserializeAws_restJson1StringList(output.previous, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1WorkflowStepOutput = (output: any, context: __SerdeContext): WorkflowStepOutput => {
  return {
    dataType: __expectString(output.dataType),
    name: __expectString(output.name),
    required: __expectBoolean(output.required),
    value:
      output.value != null
        ? deserializeAws_restJson1WorkflowStepOutputUnion(__expectUnion(output.value), context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1WorkflowStepOutputList = (output: any, context: __SerdeContext): WorkflowStepOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WorkflowStepOutput(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1WorkflowStepOutputUnion = (
  output: any,
  context: __SerdeContext
): WorkflowStepOutputUnion => {
  if (__expectInt32(output.integerValue) !== undefined) {
    return { integerValue: __expectInt32(output.integerValue) as any };
  }
  if (output.listOfStringValue != null) {
    return {
      listOfStringValue: deserializeAws_restJson1StringList(output.listOfStringValue, context),
    };
  }
  if (__expectString(output.stringValue) !== undefined) {
    return { stringValue: __expectString(output.stringValue) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1WorkflowStepsSummaryList = (
  output: any,
  context: __SerdeContext
): WorkflowStepSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WorkflowStepSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1WorkflowStepSummary = (output: any, context: __SerdeContext): WorkflowStepSummary => {
  return {
    description: __expectString(output.description),
    name: __expectString(output.name),
    next: output.next != null ? deserializeAws_restJson1StringList(output.next, context) : undefined,
    noOfSrvCompleted: __expectInt32(output.noOfSrvCompleted),
    noOfSrvFailed: __expectInt32(output.noOfSrvFailed),
    owner: __expectString(output.owner),
    previous: output.previous != null ? deserializeAws_restJson1StringList(output.previous, context) : undefined,
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
