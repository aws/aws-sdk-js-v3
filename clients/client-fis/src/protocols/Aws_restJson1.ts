// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectLong as __expectLong,
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

import {
  CreateExperimentTemplateCommandInput,
  CreateExperimentTemplateCommandOutput,
} from "../commands/CreateExperimentTemplateCommand";
import {
  CreateTargetAccountConfigurationCommandInput,
  CreateTargetAccountConfigurationCommandOutput,
} from "../commands/CreateTargetAccountConfigurationCommand";
import {
  DeleteExperimentTemplateCommandInput,
  DeleteExperimentTemplateCommandOutput,
} from "../commands/DeleteExperimentTemplateCommand";
import {
  DeleteTargetAccountConfigurationCommandInput,
  DeleteTargetAccountConfigurationCommandOutput,
} from "../commands/DeleteTargetAccountConfigurationCommand";
import { GetActionCommandInput, GetActionCommandOutput } from "../commands/GetActionCommand";
import { GetExperimentCommandInput, GetExperimentCommandOutput } from "../commands/GetExperimentCommand";
import {
  GetExperimentTargetAccountConfigurationCommandInput,
  GetExperimentTargetAccountConfigurationCommandOutput,
} from "../commands/GetExperimentTargetAccountConfigurationCommand";
import {
  GetExperimentTemplateCommandInput,
  GetExperimentTemplateCommandOutput,
} from "../commands/GetExperimentTemplateCommand";
import { GetSafetyLeverCommandInput, GetSafetyLeverCommandOutput } from "../commands/GetSafetyLeverCommand";
import {
  GetTargetAccountConfigurationCommandInput,
  GetTargetAccountConfigurationCommandOutput,
} from "../commands/GetTargetAccountConfigurationCommand";
import {
  GetTargetResourceTypeCommandInput,
  GetTargetResourceTypeCommandOutput,
} from "../commands/GetTargetResourceTypeCommand";
import { ListActionsCommandInput, ListActionsCommandOutput } from "../commands/ListActionsCommand";
import {
  ListExperimentResolvedTargetsCommandInput,
  ListExperimentResolvedTargetsCommandOutput,
} from "../commands/ListExperimentResolvedTargetsCommand";
import { ListExperimentsCommandInput, ListExperimentsCommandOutput } from "../commands/ListExperimentsCommand";
import {
  ListExperimentTargetAccountConfigurationsCommandInput,
  ListExperimentTargetAccountConfigurationsCommandOutput,
} from "../commands/ListExperimentTargetAccountConfigurationsCommand";
import {
  ListExperimentTemplatesCommandInput,
  ListExperimentTemplatesCommandOutput,
} from "../commands/ListExperimentTemplatesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTargetAccountConfigurationsCommandInput,
  ListTargetAccountConfigurationsCommandOutput,
} from "../commands/ListTargetAccountConfigurationsCommand";
import {
  ListTargetResourceTypesCommandInput,
  ListTargetResourceTypesCommandOutput,
} from "../commands/ListTargetResourceTypesCommand";
import { StartExperimentCommandInput, StartExperimentCommandOutput } from "../commands/StartExperimentCommand";
import { StopExperimentCommandInput, StopExperimentCommandOutput } from "../commands/StopExperimentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateExperimentTemplateCommandInput,
  UpdateExperimentTemplateCommandOutput,
} from "../commands/UpdateExperimentTemplateCommand";
import {
  UpdateSafetyLeverStateCommandInput,
  UpdateSafetyLeverStateCommandOutput,
} from "../commands/UpdateSafetyLeverStateCommand";
import {
  UpdateTargetAccountConfigurationCommandInput,
  UpdateTargetAccountConfigurationCommandOutput,
} from "../commands/UpdateTargetAccountConfigurationCommand";
import { FisServiceException as __BaseException } from "../models/FisServiceException";
import {
  ConflictException,
  CreateExperimentTemplateActionInput,
  CreateExperimentTemplateExperimentOptionsInput,
  CreateExperimentTemplateLogConfigurationInput,
  CreateExperimentTemplateReportConfigurationInput,
  CreateExperimentTemplateStopConditionInput,
  CreateExperimentTemplateTargetInput,
  Experiment,
  ExperimentAction,
  ExperimentSummary,
  ExperimentTemplate,
  ExperimentTemplateCloudWatchLogsLogConfigurationInput,
  ExperimentTemplateReportConfigurationDataSourcesInput,
  ExperimentTemplateReportConfigurationOutputsInput,
  ExperimentTemplateS3LogConfigurationInput,
  ExperimentTemplateSummary,
  ExperimentTemplateTargetInputFilter,
  ReportConfigurationCloudWatchDashboardInput,
  ReportConfigurationS3OutputInput,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  StartExperimentExperimentOptionsInput,
  UpdateExperimentTemplateActionInputItem,
  UpdateExperimentTemplateExperimentOptionsInput,
  UpdateExperimentTemplateLogConfigurationInput,
  UpdateExperimentTemplateReportConfigurationInput,
  UpdateExperimentTemplateStopConditionInput,
  UpdateExperimentTemplateTargetInput,
  UpdateSafetyLeverStateInput,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateExperimentTemplateCommand
 */
export const se_CreateExperimentTemplateCommand = async (
  input: CreateExperimentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/experimentTemplates");
  let body: any;
  body = JSON.stringify(
    take(input, {
      actions: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      experimentOptions: (_) => _json(_),
      experimentReportConfiguration: (_) => _json(_),
      logConfiguration: (_) => _json(_),
      roleArn: [],
      stopConditions: (_) => _json(_),
      tags: (_) => _json(_),
      targets: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTargetAccountConfigurationCommand
 */
export const se_CreateTargetAccountConfigurationCommand = async (
  input: CreateTargetAccountConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/experimentTemplates/{experimentTemplateId}/targetAccountConfigurations/{accountId}");
  b.p("experimentTemplateId", () => input.experimentTemplateId!, "{experimentTemplateId}", false);
  b.p("accountId", () => input.accountId!, "{accountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      roleArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteExperimentTemplateCommand
 */
export const se_DeleteExperimentTemplateCommand = async (
  input: DeleteExperimentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/experimentTemplates/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTargetAccountConfigurationCommand
 */
export const se_DeleteTargetAccountConfigurationCommand = async (
  input: DeleteTargetAccountConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/experimentTemplates/{experimentTemplateId}/targetAccountConfigurations/{accountId}");
  b.p("experimentTemplateId", () => input.experimentTemplateId!, "{experimentTemplateId}", false);
  b.p("accountId", () => input.accountId!, "{accountId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetActionCommand
 */
export const se_GetActionCommand = async (
  input: GetActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/actions/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetExperimentCommand
 */
export const se_GetExperimentCommand = async (
  input: GetExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/experiments/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetExperimentTargetAccountConfigurationCommand
 */
export const se_GetExperimentTargetAccountConfigurationCommand = async (
  input: GetExperimentTargetAccountConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/experiments/{experimentId}/targetAccountConfigurations/{accountId}");
  b.p("experimentId", () => input.experimentId!, "{experimentId}", false);
  b.p("accountId", () => input.accountId!, "{accountId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetExperimentTemplateCommand
 */
export const se_GetExperimentTemplateCommand = async (
  input: GetExperimentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/experimentTemplates/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSafetyLeverCommand
 */
export const se_GetSafetyLeverCommand = async (
  input: GetSafetyLeverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/safetyLevers/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTargetAccountConfigurationCommand
 */
export const se_GetTargetAccountConfigurationCommand = async (
  input: GetTargetAccountConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/experimentTemplates/{experimentTemplateId}/targetAccountConfigurations/{accountId}");
  b.p("experimentTemplateId", () => input.experimentTemplateId!, "{experimentTemplateId}", false);
  b.p("accountId", () => input.accountId!, "{accountId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTargetResourceTypeCommand
 */
export const se_GetTargetResourceTypeCommand = async (
  input: GetTargetResourceTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/targetResourceTypes/{resourceType}");
  b.p("resourceType", () => input.resourceType!, "{resourceType}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListActionsCommand
 */
export const se_ListActionsCommand = async (
  input: ListActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/actions");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListExperimentResolvedTargetsCommand
 */
export const se_ListExperimentResolvedTargetsCommand = async (
  input: ListExperimentResolvedTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/experiments/{experimentId}/resolvedTargets");
  b.p("experimentId", () => input.experimentId!, "{experimentId}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_tN]: [, input[_tN]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListExperimentsCommand
 */
export const se_ListExperimentsCommand = async (
  input: ListExperimentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/experiments");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_eTI]: [, input[_eTI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListExperimentTargetAccountConfigurationsCommand
 */
export const se_ListExperimentTargetAccountConfigurationsCommand = async (
  input: ListExperimentTargetAccountConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/experiments/{experimentId}/targetAccountConfigurations");
  b.p("experimentId", () => input.experimentId!, "{experimentId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListExperimentTemplatesCommand
 */
export const se_ListExperimentTemplatesCommand = async (
  input: ListExperimentTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/experimentTemplates");
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
 * serializeAws_restJson1ListTargetAccountConfigurationsCommand
 */
export const se_ListTargetAccountConfigurationsCommand = async (
  input: ListTargetAccountConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/experimentTemplates/{experimentTemplateId}/targetAccountConfigurations");
  b.p("experimentTemplateId", () => input.experimentTemplateId!, "{experimentTemplateId}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTargetResourceTypesCommand
 */
export const se_ListTargetResourceTypesCommand = async (
  input: ListTargetResourceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/targetResourceTypes");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartExperimentCommand
 */
export const se_StartExperimentCommand = async (
  input: StartExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/experiments");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      experimentOptions: (_) => _json(_),
      experimentTemplateId: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopExperimentCommand
 */
export const se_StopExperimentCommand = async (
  input: StopExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/experiments/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
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
    [_tK]: [() => input.tagKeys !== void 0, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateExperimentTemplateCommand
 */
export const se_UpdateExperimentTemplateCommand = async (
  input: UpdateExperimentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/experimentTemplates/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      actions: (_) => _json(_),
      description: [],
      experimentOptions: (_) => _json(_),
      experimentReportConfiguration: (_) => _json(_),
      logConfiguration: (_) => _json(_),
      roleArn: [],
      stopConditions: (_) => _json(_),
      targets: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSafetyLeverStateCommand
 */
export const se_UpdateSafetyLeverStateCommand = async (
  input: UpdateSafetyLeverStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/safetyLevers/{id}/state");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      state: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTargetAccountConfigurationCommand
 */
export const se_UpdateTargetAccountConfigurationCommand = async (
  input: UpdateTargetAccountConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/experimentTemplates/{experimentTemplateId}/targetAccountConfigurations/{accountId}");
  b.p("experimentTemplateId", () => input.experimentTemplateId!, "{experimentTemplateId}", false);
  b.p("accountId", () => input.accountId!, "{accountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      roleArn: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateExperimentTemplateCommand
 */
export const de_CreateExperimentTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExperimentTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    experimentTemplate: (_) => de_ExperimentTemplate(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTargetAccountConfigurationCommand
 */
export const de_CreateTargetAccountConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTargetAccountConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    targetAccountConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteExperimentTemplateCommand
 */
export const de_DeleteExperimentTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExperimentTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    experimentTemplate: (_) => de_ExperimentTemplate(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTargetAccountConfigurationCommand
 */
export const de_DeleteTargetAccountConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTargetAccountConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    targetAccountConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetActionCommand
 */
export const de_GetActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    action: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetExperimentCommand
 */
export const de_GetExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    experiment: (_) => de_Experiment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetExperimentTargetAccountConfigurationCommand
 */
export const de_GetExperimentTargetAccountConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExperimentTargetAccountConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    targetAccountConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetExperimentTemplateCommand
 */
export const de_GetExperimentTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExperimentTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    experimentTemplate: (_) => de_ExperimentTemplate(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSafetyLeverCommand
 */
export const de_GetSafetyLeverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSafetyLeverCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    safetyLever: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTargetAccountConfigurationCommand
 */
export const de_GetTargetAccountConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTargetAccountConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    targetAccountConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTargetResourceTypeCommand
 */
export const de_GetTargetResourceTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTargetResourceTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    targetResourceType: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListActionsCommand
 */
export const de_ListActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actions: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListExperimentResolvedTargetsCommand
 */
export const de_ListExperimentResolvedTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExperimentResolvedTargetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    resolvedTargets: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListExperimentsCommand
 */
export const de_ListExperimentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExperimentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    experiments: (_) => de_ExperimentSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListExperimentTargetAccountConfigurationsCommand
 */
export const de_ListExperimentTargetAccountConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExperimentTargetAccountConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    targetAccountConfigurations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListExperimentTemplatesCommand
 */
export const de_ListExperimentTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExperimentTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    experimentTemplates: (_) => de_ExperimentTemplateSummaryList(_, context),
    nextToken: __expectString,
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
 * deserializeAws_restJson1ListTargetAccountConfigurationsCommand
 */
export const de_ListTargetAccountConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetAccountConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    targetAccountConfigurations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTargetResourceTypesCommand
 */
export const de_ListTargetResourceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetResourceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    targetResourceTypes: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartExperimentCommand
 */
export const de_StartExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    experiment: (_) => de_Experiment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopExperimentCommand
 */
export const de_StopExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    experiment: (_) => de_Experiment(_, context),
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
 * deserializeAws_restJson1UpdateExperimentTemplateCommand
 */
export const de_UpdateExperimentTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExperimentTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    experimentTemplate: (_) => de_ExperimentTemplate(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSafetyLeverStateCommand
 */
export const de_UpdateSafetyLeverStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSafetyLeverStateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    safetyLever: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTargetAccountConfigurationCommand
 */
export const de_UpdateTargetAccountConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTargetAccountConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    targetAccountConfiguration: _json,
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
    case "ConflictException":
    case "com.amazonaws.fis#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fis#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.fis#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.fis#ValidationException":
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

// se_CreateExperimentTemplateActionInput omitted.

// se_CreateExperimentTemplateActionInputMap omitted.

// se_CreateExperimentTemplateExperimentOptionsInput omitted.

// se_CreateExperimentTemplateLogConfigurationInput omitted.

// se_CreateExperimentTemplateReportConfigurationInput omitted.

// se_CreateExperimentTemplateStopConditionInput omitted.

// se_CreateExperimentTemplateStopConditionInputList omitted.

// se_CreateExperimentTemplateTargetInput omitted.

// se_CreateExperimentTemplateTargetInputMap omitted.

// se_ExperimentTemplateActionParameterMap omitted.

// se_ExperimentTemplateActionStartAfterList omitted.

// se_ExperimentTemplateActionTargetMap omitted.

// se_ExperimentTemplateCloudWatchLogsLogConfigurationInput omitted.

// se_ExperimentTemplateReportConfigurationDataSourcesInput omitted.

// se_ExperimentTemplateReportConfigurationOutputsInput omitted.

// se_ExperimentTemplateS3LogConfigurationInput omitted.

// se_ExperimentTemplateTargetFilterInputList omitted.

// se_ExperimentTemplateTargetFilterValues omitted.

// se_ExperimentTemplateTargetInputFilter omitted.

// se_ExperimentTemplateTargetParameterMap omitted.

// se_ReportConfigurationCloudWatchDashboardInput omitted.

// se_ReportConfigurationCloudWatchDashboardInputList omitted.

// se_ReportConfigurationS3OutputInput omitted.

// se_ResourceArnList omitted.

// se_StartExperimentExperimentOptionsInput omitted.

// se_TagMap omitted.

// se_UpdateExperimentTemplateActionInputItem omitted.

// se_UpdateExperimentTemplateActionInputMap omitted.

// se_UpdateExperimentTemplateExperimentOptionsInput omitted.

// se_UpdateExperimentTemplateLogConfigurationInput omitted.

// se_UpdateExperimentTemplateReportConfigurationInput omitted.

// se_UpdateExperimentTemplateStopConditionInput omitted.

// se_UpdateExperimentTemplateStopConditionInputList omitted.

// se_UpdateExperimentTemplateTargetInput omitted.

// se_UpdateExperimentTemplateTargetInputMap omitted.

// se_UpdateSafetyLeverStateInput omitted.

// de_Action omitted.

// de_ActionParameter omitted.

// de_ActionParameterMap omitted.

// de_ActionSummary omitted.

// de_ActionSummaryList omitted.

// de_ActionTarget omitted.

// de_ActionTargetMap omitted.

/**
 * deserializeAws_restJson1Experiment
 */
const de_Experiment = (output: any, context: __SerdeContext): Experiment => {
  return take(output, {
    actions: (_: any) => de_ExperimentActionMap(_, context),
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    experimentOptions: _json,
    experimentReport: _json,
    experimentReportConfiguration: _json,
    experimentTemplateId: __expectString,
    id: __expectString,
    logConfiguration: _json,
    roleArn: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    state: _json,
    stopConditions: _json,
    tags: _json,
    targetAccountConfigurationsCount: __expectLong,
    targets: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ExperimentAction
 */
const de_ExperimentAction = (output: any, context: __SerdeContext): ExperimentAction => {
  return take(output, {
    actionId: __expectString,
    description: __expectString,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    parameters: _json,
    startAfter: _json,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    state: _json,
    targets: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ExperimentActionMap
 */
const de_ExperimentActionMap = (output: any, context: __SerdeContext): Record<string, ExperimentAction> => {
  return Object.entries(output).reduce((acc: Record<string, ExperimentAction>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_ExperimentAction(value, context);
    return acc;
  }, {} as Record<string, ExperimentAction>);
};

// de_ExperimentActionParameterMap omitted.

// de_ExperimentActionStartAfterList omitted.

// de_ExperimentActionState omitted.

// de_ExperimentActionTargetMap omitted.

// de_ExperimentCloudWatchLogsLogConfiguration omitted.

// de_ExperimentError omitted.

// de_ExperimentLogConfiguration omitted.

// de_ExperimentOptions omitted.

// de_ExperimentReport omitted.

// de_ExperimentReportConfiguration omitted.

// de_ExperimentReportConfigurationCloudWatchDashboard omitted.

// de_ExperimentReportConfigurationCloudWatchDashboardList omitted.

// de_ExperimentReportConfigurationDataSources omitted.

// de_ExperimentReportConfigurationOutputs omitted.

// de_ExperimentReportConfigurationOutputsS3Configuration omitted.

// de_ExperimentReportError omitted.

// de_ExperimentReportS3Report omitted.

// de_ExperimentReportS3ReportList omitted.

// de_ExperimentReportState omitted.

// de_ExperimentS3LogConfiguration omitted.

// de_ExperimentState omitted.

// de_ExperimentStopCondition omitted.

// de_ExperimentStopConditionList omitted.

/**
 * deserializeAws_restJson1ExperimentSummary
 */
const de_ExperimentSummary = (output: any, context: __SerdeContext): ExperimentSummary => {
  return take(output, {
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    experimentOptions: _json,
    experimentTemplateId: __expectString,
    id: __expectString,
    state: _json,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ExperimentSummaryList
 */
const de_ExperimentSummaryList = (output: any, context: __SerdeContext): ExperimentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExperimentSummary(entry, context);
    });
  return retVal;
};

// de_ExperimentTarget omitted.

// de_ExperimentTargetAccountConfiguration omitted.

// de_ExperimentTargetAccountConfigurationList omitted.

// de_ExperimentTargetAccountConfigurationSummary omitted.

// de_ExperimentTargetFilter omitted.

// de_ExperimentTargetFilterList omitted.

// de_ExperimentTargetFilterValues omitted.

// de_ExperimentTargetMap omitted.

// de_ExperimentTargetParameterMap omitted.

/**
 * deserializeAws_restJson1ExperimentTemplate
 */
const de_ExperimentTemplate = (output: any, context: __SerdeContext): ExperimentTemplate => {
  return take(output, {
    actions: _json,
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    experimentOptions: _json,
    experimentReportConfiguration: _json,
    id: __expectString,
    lastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    logConfiguration: _json,
    roleArn: __expectString,
    stopConditions: _json,
    tags: _json,
    targetAccountConfigurationsCount: __expectLong,
    targets: _json,
  }) as any;
};

// de_ExperimentTemplateAction omitted.

// de_ExperimentTemplateActionMap omitted.

// de_ExperimentTemplateActionParameterMap omitted.

// de_ExperimentTemplateActionStartAfterList omitted.

// de_ExperimentTemplateActionTargetMap omitted.

// de_ExperimentTemplateCloudWatchLogsLogConfiguration omitted.

// de_ExperimentTemplateExperimentOptions omitted.

// de_ExperimentTemplateLogConfiguration omitted.

// de_ExperimentTemplateReportConfiguration omitted.

// de_ExperimentTemplateReportConfigurationCloudWatchDashboard omitted.

// de_ExperimentTemplateReportConfigurationCloudWatchDashboardList omitted.

// de_ExperimentTemplateReportConfigurationDataSources omitted.

// de_ExperimentTemplateReportConfigurationOutputs omitted.

// de_ExperimentTemplateS3LogConfiguration omitted.

// de_ExperimentTemplateStopCondition omitted.

// de_ExperimentTemplateStopConditionList omitted.

/**
 * deserializeAws_restJson1ExperimentTemplateSummary
 */
const de_ExperimentTemplateSummary = (output: any, context: __SerdeContext): ExperimentTemplateSummary => {
  return take(output, {
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    lastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ExperimentTemplateSummaryList
 */
const de_ExperimentTemplateSummaryList = (output: any, context: __SerdeContext): ExperimentTemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExperimentTemplateSummary(entry, context);
    });
  return retVal;
};

// de_ExperimentTemplateTarget omitted.

// de_ExperimentTemplateTargetFilter omitted.

// de_ExperimentTemplateTargetFilterList omitted.

// de_ExperimentTemplateTargetFilterValues omitted.

// de_ExperimentTemplateTargetMap omitted.

// de_ExperimentTemplateTargetParameterMap omitted.

// de_ReportConfigurationS3Output omitted.

// de_ResolvedTarget omitted.

// de_ResolvedTargetList omitted.

// de_ResourceArnList omitted.

// de_SafetyLever omitted.

// de_SafetyLeverState omitted.

// de_TagMap omitted.

// de_TargetAccountConfiguration omitted.

// de_TargetAccountConfigurationList omitted.

// de_TargetAccountConfigurationSummary omitted.

// de_TargetInformationMap omitted.

// de_TargetResourceType omitted.

// de_TargetResourceTypeParameter omitted.

// de_TargetResourceTypeParameterMap omitted.

// de_TargetResourceTypeSummary omitted.

// de_TargetResourceTypeSummaryList omitted.

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

const _eTI = "experimentTemplateId";
const _mR = "maxResults";
const _nT = "nextToken";
const _tK = "tagKeys";
const _tN = "targetName";
