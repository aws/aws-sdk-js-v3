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
import { v4 as generateIdempotencyToken } from "@smithy/uuid";

import { CreateTemplateCommandInput, CreateTemplateCommandOutput } from "../commands/CreateTemplateCommand";
import { CreateWorkflowCommandInput, CreateWorkflowCommandOutput } from "../commands/CreateWorkflowCommand";
import { CreateWorkflowStepCommandInput, CreateWorkflowStepCommandOutput } from "../commands/CreateWorkflowStepCommand";
import {
  CreateWorkflowStepGroupCommandInput,
  CreateWorkflowStepGroupCommandOutput,
} from "../commands/CreateWorkflowStepGroupCommand";
import { DeleteTemplateCommandInput, DeleteTemplateCommandOutput } from "../commands/DeleteTemplateCommand";
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
import { UpdateTemplateCommandInput, UpdateTemplateCommandOutput } from "../commands/UpdateTemplateCommand";
import { UpdateWorkflowCommandInput, UpdateWorkflowCommandOutput } from "../commands/UpdateWorkflowCommand";
import { UpdateWorkflowStepCommandInput, UpdateWorkflowStepCommandOutput } from "../commands/UpdateWorkflowStepCommand";
import {
  UpdateWorkflowStepGroupCommandInput,
  UpdateWorkflowStepGroupCommandOutput,
} from "../commands/UpdateWorkflowStepGroupCommand";
import { MigrationHubOrchestratorServiceException as __BaseException } from "../models/MigrationHubOrchestratorServiceException";
import {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  MigrationWorkflowSummary,
  PlatformCommand,
  PlatformScriptKey,
  ResourceNotFoundException,
  StepInput,
  TemplateSource,
  ThrottlingException,
  ValidationException,
  WorkflowStepAutomationConfiguration,
  WorkflowStepOutput,
  WorkflowStepOutputUnion,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateTemplateCommand
 */
export const se_CreateTemplateCommand = async (
  input: CreateTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/template");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      tags: (_) => _json(_),
      templateDescription: [],
      templateName: [],
      templateSource: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateWorkflowCommand
 */
export const se_CreateWorkflowCommand = async (
  input: CreateWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/migrationworkflow");
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateWorkflowStepCommand
 */
export const se_CreateWorkflowStepCommand = async (
  input: CreateWorkflowStepCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workflowstep");
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateWorkflowStepGroupCommand
 */
export const se_CreateWorkflowStepGroupCommand = async (
  input: CreateWorkflowStepGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workflowstepgroups");
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTemplateCommand
 */
export const se_DeleteTemplateCommand = async (
  input: DeleteTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/template/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteWorkflowCommand
 */
export const se_DeleteWorkflowCommand = async (
  input: DeleteWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/migrationworkflow/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteWorkflowStepCommand
 */
export const se_DeleteWorkflowStepCommand = async (
  input: DeleteWorkflowStepCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workflowstep/{id}");
  b.p("id", () => input.id!, "{id}", false);
  const query: any = map({
    [_sGI]: [, __expectNonNull(input[_sGI]!, `stepGroupId`)],
    [_wI]: [, __expectNonNull(input[_wI]!, `workflowId`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteWorkflowStepGroupCommand
 */
export const se_DeleteWorkflowStepGroupCommand = async (
  input: DeleteWorkflowStepGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workflowstepgroup/{id}");
  b.p("id", () => input.id!, "{id}", false);
  const query: any = map({
    [_wI]: [, __expectNonNull(input[_wI]!, `workflowId`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTemplateCommand
 */
export const se_GetTemplateCommand = async (
  input: GetTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/migrationworkflowtemplate/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTemplateStepCommand
 */
export const se_GetTemplateStepCommand = async (
  input: GetTemplateStepCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/templatestep/{id}");
  b.p("id", () => input.id!, "{id}", false);
  const query: any = map({
    [_tI]: [, __expectNonNull(input[_tI]!, `templateId`)],
    [_sGI]: [, __expectNonNull(input[_sGI]!, `stepGroupId`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTemplateStepGroupCommand
 */
export const se_GetTemplateStepGroupCommand = async (
  input: GetTemplateStepGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/templates/{templateId}/stepgroups/{id}");
  b.p("templateId", () => input.templateId!, "{templateId}", false);
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
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
  b.bp("/migrationworkflow/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWorkflowStepCommand
 */
export const se_GetWorkflowStepCommand = async (
  input: GetWorkflowStepCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workflowstep/{id}");
  b.p("id", () => input.id!, "{id}", false);
  const query: any = map({
    [_wI]: [, __expectNonNull(input[_wI]!, `workflowId`)],
    [_sGI]: [, __expectNonNull(input[_sGI]!, `stepGroupId`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWorkflowStepGroupCommand
 */
export const se_GetWorkflowStepGroupCommand = async (
  input: GetWorkflowStepGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workflowstepgroup/{id}");
  b.p("id", () => input.id!, "{id}", false);
  const query: any = map({
    [_wI]: [, __expectNonNull(input[_wI]!, `workflowId`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPluginsCommand
 */
export const se_ListPluginsCommand = async (
  input: ListPluginsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/plugins");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTemplatesCommand
 */
export const se_ListTemplatesCommand = async (
  input: ListTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/migrationworkflowtemplates");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_n]: [, input[_n]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTemplateStepGroupsCommand
 */
export const se_ListTemplateStepGroupsCommand = async (
  input: ListTemplateStepGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/templatestepgroups/{templateId}");
  b.p("templateId", () => input.templateId!, "{templateId}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTemplateStepsCommand
 */
export const se_ListTemplateStepsCommand = async (
  input: ListTemplateStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/templatesteps");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_tI]: [, __expectNonNull(input[_tI]!, `templateId`)],
    [_sGI]: [, __expectNonNull(input[_sGI]!, `stepGroupId`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
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
  const headers: any = {};
  b.bp("/migrationworkflows");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_tI]: [, input[_tI]!],
    [_aACN]: [, input[_aACN]!],
    [_s]: [, input[_s]!],
    [_n]: [, input[_n]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWorkflowStepGroupsCommand
 */
export const se_ListWorkflowStepGroupsCommand = async (
  input: ListWorkflowStepGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workflowstepgroups");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_wI]: [, __expectNonNull(input[_wI]!, `workflowId`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWorkflowStepsCommand
 */
export const se_ListWorkflowStepsCommand = async (
  input: ListWorkflowStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workflow/{workflowId}/workflowstepgroups/{stepGroupId}/workflowsteps");
  b.p("workflowId", () => input.workflowId!, "{workflowId}", false);
  b.p("stepGroupId", () => input.stepGroupId!, "{stepGroupId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RetryWorkflowStepCommand
 */
export const se_RetryWorkflowStepCommand = async (
  input: RetryWorkflowStepCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/retryworkflowstep/{id}");
  b.p("id", () => input.id!, "{id}", false);
  const query: any = map({
    [_wI]: [, __expectNonNull(input[_wI]!, `workflowId`)],
    [_sGI]: [, __expectNonNull(input[_sGI]!, `stepGroupId`)],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartWorkflowCommand
 */
export const se_StartWorkflowCommand = async (
  input: StartWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/migrationworkflow/{id}/start");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopWorkflowCommand
 */
export const se_StopWorkflowCommand = async (
  input: StopWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/migrationworkflow/{id}/stop");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTemplateCommand
 */
export const se_UpdateTemplateCommand = async (
  input: UpdateTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/template/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      templateDescription: [],
      templateName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateWorkflowCommand
 */
export const se_UpdateWorkflowCommand = async (
  input: UpdateWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/migrationworkflow/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      inputParameters: (_) => _json(_),
      name: [],
      stepTargets: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateWorkflowStepCommand
 */
export const se_UpdateWorkflowStepCommand = async (
  input: UpdateWorkflowStepCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workflowstep/{id}");
  b.p("id", () => input.id!, "{id}", false);
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateWorkflowStepGroupCommand
 */
export const se_UpdateWorkflowStepGroupCommand = async (
  input: UpdateWorkflowStepGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workflowstepgroup/{id}");
  b.p("id", () => input.id!, "{id}", false);
  const query: any = map({
    [_wI]: [, __expectNonNull(input[_wI]!, `workflowId`)],
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
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateTemplateCommand
 */
export const de_CreateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
    templateArn: __expectString,
    templateId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorkflowCommand
 */
export const de_CreateWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateWorkflowStepCommand
 */
export const de_CreateWorkflowStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowStepCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateWorkflowStepGroupCommand
 */
export const de_CreateWorkflowStepGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowStepGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DeleteTemplateCommand
 */
export const de_DeleteTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTemplateCommandOutput> => {
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
 * deserializeAws_restJson1DeleteWorkflowCommand
 */
export const de_DeleteWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DeleteWorkflowStepCommand
 */
export const de_DeleteWorkflowStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowStepCommandOutput> => {
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
 * deserializeAws_restJson1DeleteWorkflowStepGroupCommand
 */
export const de_DeleteWorkflowStepGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowStepGroupCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetTemplateCommand
 */
export const de_GetTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
    owner: __expectString,
    status: __expectString,
    statusMessage: __expectString,
    tags: _json,
    templateArn: __expectString,
    templateClass: __expectString,
    tools: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTemplateStepCommand
 */
export const de_GetTemplateStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateStepCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetTemplateStepGroupCommand
 */
export const de_GetTemplateStepGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateStepGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetWorkflowStepCommand
 */
export const de_GetWorkflowStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowStepCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetWorkflowStepGroupCommand
 */
export const de_GetWorkflowStepGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowStepGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListPluginsCommand
 */
export const de_ListPluginsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPluginsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListTemplatesCommand
 */
export const de_ListTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListTemplateStepGroupsCommand
 */
export const de_ListTemplateStepGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateStepGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListTemplateStepsCommand
 */
export const de_ListTemplateStepsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateStepsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
    migrationWorkflowSummary: (_) => de_MigrationWorkflowSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkflowStepGroupsCommand
 */
export const de_ListWorkflowStepGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowStepGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListWorkflowStepsCommand
 */
export const de_ListWorkflowStepsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowStepsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1RetryWorkflowStepCommand
 */
export const de_RetryWorkflowStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryWorkflowStepCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1StartWorkflowCommand
 */
export const de_StartWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1StopWorkflowCommand
 */
export const de_StopWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
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
 * deserializeAws_restJson1UpdateTemplateCommand
 */
export const de_UpdateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
    templateArn: __expectString,
    templateId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWorkflowCommand
 */
export const de_UpdateWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateWorkflowStepCommand
 */
export const de_UpdateWorkflowStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkflowStepCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateWorkflowStepGroupCommand
 */
export const de_UpdateWorkflowStepGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkflowStepGroupCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
    case "com.amazonaws.migrationhuborchestrator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhuborchestrator#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhuborchestrator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhuborchestrator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhuborchestrator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhuborchestrator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

// se_MaxStringList omitted.

// se_PlatformCommand omitted.

// se_PlatformScriptKey omitted.

// se_StepInput omitted.

// se_StepInputParameters omitted.

// se_StringList omitted.

// se_StringMap omitted.

// se_TagMap omitted.

// se_TemplateSource omitted.

// se_WorkflowStepAutomationConfiguration omitted.

// se_WorkflowStepOutput omitted.

// se_WorkflowStepOutputList omitted.

// se_WorkflowStepOutputUnion omitted.

// de_MaxStringList omitted.

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

const _aACN = "adsApplicationConfigurationName";
const _mR = "maxResults";
const _n = "name";
const _nT = "nextToken";
const _s = "status";
const _sGI = "stepGroupId";
const _tI = "templateId";
const _tK = "tagKeys";
const _wI = "workflowId";
