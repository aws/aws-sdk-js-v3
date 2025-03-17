// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
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
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  BatchGetServiceLevelObjectiveBudgetReportCommandInput,
  BatchGetServiceLevelObjectiveBudgetReportCommandOutput,
} from "../commands/BatchGetServiceLevelObjectiveBudgetReportCommand";
import {
  BatchUpdateExclusionWindowsCommandInput,
  BatchUpdateExclusionWindowsCommandOutput,
} from "../commands/BatchUpdateExclusionWindowsCommand";
import {
  CreateServiceLevelObjectiveCommandInput,
  CreateServiceLevelObjectiveCommandOutput,
} from "../commands/CreateServiceLevelObjectiveCommand";
import {
  DeleteServiceLevelObjectiveCommandInput,
  DeleteServiceLevelObjectiveCommandOutput,
} from "../commands/DeleteServiceLevelObjectiveCommand";
import { GetServiceCommandInput, GetServiceCommandOutput } from "../commands/GetServiceCommand";
import {
  GetServiceLevelObjectiveCommandInput,
  GetServiceLevelObjectiveCommandOutput,
} from "../commands/GetServiceLevelObjectiveCommand";
import {
  ListServiceDependenciesCommandInput,
  ListServiceDependenciesCommandOutput,
} from "../commands/ListServiceDependenciesCommand";
import {
  ListServiceDependentsCommandInput,
  ListServiceDependentsCommandOutput,
} from "../commands/ListServiceDependentsCommand";
import {
  ListServiceLevelObjectiveExclusionWindowsCommandInput,
  ListServiceLevelObjectiveExclusionWindowsCommandOutput,
} from "../commands/ListServiceLevelObjectiveExclusionWindowsCommand";
import {
  ListServiceLevelObjectivesCommandInput,
  ListServiceLevelObjectivesCommandOutput,
} from "../commands/ListServiceLevelObjectivesCommand";
import {
  ListServiceOperationsCommandInput,
  ListServiceOperationsCommandOutput,
} from "../commands/ListServiceOperationsCommand";
import { ListServicesCommandInput, ListServicesCommandOutput } from "../commands/ListServicesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartDiscoveryCommandInput, StartDiscoveryCommandOutput } from "../commands/StartDiscoveryCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateServiceLevelObjectiveCommandInput,
  UpdateServiceLevelObjectiveCommandOutput,
} from "../commands/UpdateServiceLevelObjectiveCommand";
import { ApplicationSignalsServiceException as __BaseException } from "../models/ApplicationSignalsServiceException";
import {
  AccessDeniedException,
  BurnRateConfiguration,
  CalendarInterval,
  ConflictException,
  Dimension,
  ExclusionWindow,
  Goal,
  Interval,
  Metric,
  MetricDataQuery,
  MetricStat,
  MonitoredRequestCountMetricDataQueries,
  RecurrenceRule,
  RequestBasedServiceLevelIndicator,
  RequestBasedServiceLevelIndicatorConfig,
  RequestBasedServiceLevelIndicatorMetricConfig,
  ResourceNotFoundException,
  RollingInterval,
  ServiceLevelIndicator,
  ServiceLevelIndicatorConfig,
  ServiceLevelIndicatorMetricConfig,
  ServiceLevelObjective,
  ServiceLevelObjectiveBudgetReport,
  ServiceLevelObjectiveSummary,
  ServiceQuotaExceededException,
  Tag,
  ThrottlingException,
  ValidationException,
  Window,
} from "../models/models_0";

/**
 * serializeAws_restJson1BatchGetServiceLevelObjectiveBudgetReportCommand
 */
export const se_BatchGetServiceLevelObjectiveBudgetReportCommand = async (
  input: BatchGetServiceLevelObjectiveBudgetReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/budget-report");
  let body: any;
  body = JSON.stringify(
    take(input, {
      SloIds: (_) => _json(_),
      Timestamp: (_) => _.getTime() / 1_000,
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchUpdateExclusionWindowsCommand
 */
export const se_BatchUpdateExclusionWindowsCommand = async (
  input: BatchUpdateExclusionWindowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/exclusion-windows");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AddExclusionWindows: (_) => se_ExclusionWindows(_, context),
      RemoveExclusionWindows: (_) => se_ExclusionWindows(_, context),
      SloIds: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateServiceLevelObjectiveCommand
 */
export const se_CreateServiceLevelObjectiveCommand = async (
  input: CreateServiceLevelObjectiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/slo");
  let body: any;
  body = JSON.stringify(
    take(input, {
      BurnRateConfigurations: (_) => _json(_),
      Description: [],
      Goal: (_) => se_Goal(_, context),
      Name: [],
      RequestBasedSliConfig: (_) => se_RequestBasedServiceLevelIndicatorConfig(_, context),
      SliConfig: (_) => se_ServiceLevelIndicatorConfig(_, context),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteServiceLevelObjectiveCommand
 */
export const se_DeleteServiceLevelObjectiveCommand = async (
  input: DeleteServiceLevelObjectiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/slo/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetServiceCommand
 */
export const se_GetServiceCommand = async (
  input: GetServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/service");
  const query: any = map({
    [_ST]: [__expectNonNull(input.StartTime, `StartTime`) != null, () => __serializeDateTime(input[_ST]!).toString()],
    [_ET]: [__expectNonNull(input.EndTime, `EndTime`) != null, () => __serializeDateTime(input[_ET]!).toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      KeyAttributes: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetServiceLevelObjectiveCommand
 */
export const se_GetServiceLevelObjectiveCommand = async (
  input: GetServiceLevelObjectiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/slo/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListServiceDependenciesCommand
 */
export const se_ListServiceDependenciesCommand = async (
  input: ListServiceDependenciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/service-dependencies");
  const query: any = map({
    [_ST]: [__expectNonNull(input.StartTime, `StartTime`) != null, () => __serializeDateTime(input[_ST]!).toString()],
    [_ET]: [__expectNonNull(input.EndTime, `EndTime`) != null, () => __serializeDateTime(input[_ET]!).toString()],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      KeyAttributes: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListServiceDependentsCommand
 */
export const se_ListServiceDependentsCommand = async (
  input: ListServiceDependentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/service-dependents");
  const query: any = map({
    [_ST]: [__expectNonNull(input.StartTime, `StartTime`) != null, () => __serializeDateTime(input[_ST]!).toString()],
    [_ET]: [__expectNonNull(input.EndTime, `EndTime`) != null, () => __serializeDateTime(input[_ET]!).toString()],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      KeyAttributes: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListServiceLevelObjectiveExclusionWindowsCommand
 */
export const se_ListServiceLevelObjectiveExclusionWindowsCommand = async (
  input: ListServiceLevelObjectiveExclusionWindowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/slo/{Id}/exclusion-windows");
  b.p("Id", () => input.Id!, "{Id}", false);
  const query: any = map({
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListServiceLevelObjectivesCommand
 */
export const se_ListServiceLevelObjectivesCommand = async (
  input: ListServiceLevelObjectivesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/slos");
  const query: any = map({
    [_ON]: [, input[_ON]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
    [_ILA]: [() => input.IncludeLinkedAccounts !== void 0, () => input[_ILA]!.toString()],
    [_SOAAI]: [, input[_SOAAI]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      KeyAttributes: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListServiceOperationsCommand
 */
export const se_ListServiceOperationsCommand = async (
  input: ListServiceOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/service-operations");
  const query: any = map({
    [_ST]: [__expectNonNull(input.StartTime, `StartTime`) != null, () => __serializeDateTime(input[_ST]!).toString()],
    [_ET]: [__expectNonNull(input.EndTime, `EndTime`) != null, () => __serializeDateTime(input[_ET]!).toString()],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      KeyAttributes: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListServicesCommand
 */
export const se_ListServicesCommand = async (
  input: ListServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/services");
  const query: any = map({
    [_ST]: [__expectNonNull(input.StartTime, `StartTime`) != null, () => __serializeDateTime(input[_ST]!).toString()],
    [_ET]: [__expectNonNull(input.EndTime, `EndTime`) != null, () => __serializeDateTime(input[_ET]!).toString()],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
    [_ILA]: [() => input.IncludeLinkedAccounts !== void 0, () => input[_ILA]!.toString()],
    [_AAI]: [, input[_AAI]!],
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
  b.bp("/tags");
  const query: any = map({
    [_RA]: [, __expectNonNull(input[_RA]!, `ResourceArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartDiscoveryCommand
 */
export const se_StartDiscoveryCommand = async (
  input: StartDiscoveryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/start-discovery");
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
  b.bp("/tag-resource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceArn: [],
      Tags: (_) => _json(_),
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
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/untag-resource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceArn: [],
      TagKeys: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateServiceLevelObjectiveCommand
 */
export const se_UpdateServiceLevelObjectiveCommand = async (
  input: UpdateServiceLevelObjectiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/slo/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      BurnRateConfigurations: (_) => _json(_),
      Description: [],
      Goal: (_) => se_Goal(_, context),
      RequestBasedSliConfig: (_) => se_RequestBasedServiceLevelIndicatorConfig(_, context),
      SliConfig: (_) => se_ServiceLevelIndicatorConfig(_, context),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchGetServiceLevelObjectiveBudgetReportCommand
 */
export const de_BatchGetServiceLevelObjectiveBudgetReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetServiceLevelObjectiveBudgetReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Errors: _json,
    Reports: (_) => de_ServiceLevelObjectiveBudgetReports(_, context),
    Timestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchUpdateExclusionWindowsCommand
 */
export const de_BatchUpdateExclusionWindowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateExclusionWindowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Errors: _json,
    SloIds: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateServiceLevelObjectiveCommand
 */
export const de_CreateServiceLevelObjectiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceLevelObjectiveCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Slo: (_) => de_ServiceLevelObjective(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteServiceLevelObjectiveCommand
 */
export const de_DeleteServiceLevelObjectiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceLevelObjectiveCommandOutput> => {
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
 * deserializeAws_restJson1GetServiceCommand
 */
export const de_GetServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EndTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LogGroupReferences: _json,
    Service: _json,
    StartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetServiceLevelObjectiveCommand
 */
export const de_GetServiceLevelObjectiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceLevelObjectiveCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Slo: (_) => de_ServiceLevelObjective(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListServiceDependenciesCommand
 */
export const de_ListServiceDependenciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceDependenciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EndTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NextToken: __expectString,
    ServiceDependencies: _json,
    StartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListServiceDependentsCommand
 */
export const de_ListServiceDependentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceDependentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EndTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NextToken: __expectString,
    ServiceDependents: _json,
    StartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListServiceLevelObjectiveExclusionWindowsCommand
 */
export const de_ListServiceLevelObjectiveExclusionWindowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceLevelObjectiveExclusionWindowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ExclusionWindows: (_) => de_ExclusionWindows(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListServiceLevelObjectivesCommand
 */
export const de_ListServiceLevelObjectivesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceLevelObjectivesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    SloSummaries: (_) => de_ServiceLevelObjectiveSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListServiceOperationsCommand
 */
export const de_ListServiceOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceOperationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EndTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NextToken: __expectString,
    ServiceOperations: _json,
    StartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListServicesCommand
 */
export const de_ListServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EndTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NextToken: __expectString,
    ServiceSummaries: _json,
    StartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
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
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartDiscoveryCommand
 */
export const de_StartDiscoveryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDiscoveryCommandOutput> => {
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
 * deserializeAws_restJson1UpdateServiceLevelObjectiveCommand
 */
export const de_UpdateServiceLevelObjectiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceLevelObjectiveCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Slo: (_) => de_ServiceLevelObjective(_, context),
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
    case "ThrottlingException":
    case "com.amazonaws.applicationsignals#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationsignals#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationsignals#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.applicationsignals#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.applicationsignals#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.applicationsignals#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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
    Message: __expectString,
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
    Message: __expectString,
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
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
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
    Message: __expectString,
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
    Message: __expectString,
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

// se_Attributes omitted.

// se_BurnRateConfiguration omitted.

// se_BurnRateConfigurations omitted.

/**
 * serializeAws_restJson1CalendarInterval
 */
const se_CalendarInterval = (input: CalendarInterval, context: __SerdeContext): any => {
  return take(input, {
    Duration: [],
    DurationUnit: [],
    StartTime: (_) => _.getTime() / 1_000,
  });
};

// se_Dimension omitted.

// se_Dimensions omitted.

/**
 * serializeAws_restJson1ExclusionWindow
 */
const se_ExclusionWindow = (input: ExclusionWindow, context: __SerdeContext): any => {
  return take(input, {
    Reason: [],
    RecurrenceRule: _json,
    StartTime: (_) => _.getTime() / 1_000,
    Window: _json,
  });
};

/**
 * serializeAws_restJson1ExclusionWindows
 */
const se_ExclusionWindows = (input: ExclusionWindow[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ExclusionWindow(entry, context);
    });
};

/**
 * serializeAws_restJson1Goal
 */
const se_Goal = (input: Goal, context: __SerdeContext): any => {
  return take(input, {
    AttainmentGoal: __serializeFloat,
    Interval: (_) => se_Interval(_, context),
    WarningThreshold: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1Interval
 */
const se_Interval = (input: Interval, context: __SerdeContext): any => {
  return Interval.visit(input, {
    CalendarInterval: (value) => ({ CalendarInterval: se_CalendarInterval(value, context) }),
    RollingInterval: (value) => ({ RollingInterval: _json(value) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_Metric omitted.

// se_MetricDataQueries omitted.

// se_MetricDataQuery omitted.

// se_MetricStat omitted.

// se_MonitoredRequestCountMetricDataQueries omitted.

// se_RecurrenceRule omitted.

/**
 * serializeAws_restJson1RequestBasedServiceLevelIndicatorConfig
 */
const se_RequestBasedServiceLevelIndicatorConfig = (
  input: RequestBasedServiceLevelIndicatorConfig,
  context: __SerdeContext
): any => {
  return take(input, {
    ComparisonOperator: [],
    MetricThreshold: __serializeFloat,
    RequestBasedSliMetricConfig: _json,
  });
};

// se_RequestBasedServiceLevelIndicatorMetricConfig omitted.

// se_RollingInterval omitted.

/**
 * serializeAws_restJson1ServiceLevelIndicatorConfig
 */
const se_ServiceLevelIndicatorConfig = (input: ServiceLevelIndicatorConfig, context: __SerdeContext): any => {
  return take(input, {
    ComparisonOperator: [],
    MetricThreshold: __serializeFloat,
    SliMetricConfig: _json,
  });
};

// se_ServiceLevelIndicatorMetricConfig omitted.

// se_ServiceLevelObjectiveIds omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_Window omitted.

// de_AttributeMap omitted.

// de_AttributeMaps omitted.

// de_Attributes omitted.

// de_BatchUpdateExclusionWindowsError omitted.

// de_BatchUpdateExclusionWindowsErrors omitted.

// de_BurnRateConfiguration omitted.

// de_BurnRateConfigurations omitted.

/**
 * deserializeAws_restJson1CalendarInterval
 */
const de_CalendarInterval = (output: any, context: __SerdeContext): CalendarInterval => {
  return take(output, {
    Duration: __expectInt32,
    DurationUnit: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_Dimension omitted.

// de_Dimensions omitted.

/**
 * deserializeAws_restJson1ExclusionWindow
 */
const de_ExclusionWindow = (output: any, context: __SerdeContext): ExclusionWindow => {
  return take(output, {
    Reason: __expectString,
    RecurrenceRule: _json,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Window: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ExclusionWindows
 */
const de_ExclusionWindows = (output: any, context: __SerdeContext): ExclusionWindow[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExclusionWindow(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Goal
 */
const de_Goal = (output: any, context: __SerdeContext): Goal => {
  return take(output, {
    AttainmentGoal: __limitedParseDouble,
    Interval: (_: any) => de_Interval(__expectUnion(_), context),
    WarningThreshold: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1Interval
 */
const de_Interval = (output: any, context: __SerdeContext): Interval => {
  if (output.CalendarInterval != null) {
    return {
      CalendarInterval: de_CalendarInterval(output.CalendarInterval, context),
    };
  }
  if (output.RollingInterval != null) {
    return {
      RollingInterval: _json(output.RollingInterval),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_LogGroupReferences omitted.

// de_Metric omitted.

// de_MetricDataQueries omitted.

// de_MetricDataQuery omitted.

// de_MetricReference omitted.

// de_MetricReferences omitted.

// de_MetricStat omitted.

// de_MonitoredRequestCountMetricDataQueries omitted.

// de_RecurrenceRule omitted.

/**
 * deserializeAws_restJson1RequestBasedServiceLevelIndicator
 */
const de_RequestBasedServiceLevelIndicator = (
  output: any,
  context: __SerdeContext
): RequestBasedServiceLevelIndicator => {
  return take(output, {
    ComparisonOperator: __expectString,
    MetricThreshold: __limitedParseDouble,
    RequestBasedSliMetric: _json,
  }) as any;
};

// de_RequestBasedServiceLevelIndicatorMetric omitted.

// de_RollingInterval omitted.

// de_Service omitted.

// de_ServiceDependencies omitted.

// de_ServiceDependency omitted.

// de_ServiceDependent omitted.

// de_ServiceDependents omitted.

/**
 * deserializeAws_restJson1ServiceLevelIndicator
 */
const de_ServiceLevelIndicator = (output: any, context: __SerdeContext): ServiceLevelIndicator => {
  return take(output, {
    ComparisonOperator: __expectString,
    MetricThreshold: __limitedParseDouble,
    SliMetric: _json,
  }) as any;
};

// de_ServiceLevelIndicatorMetric omitted.

/**
 * deserializeAws_restJson1ServiceLevelObjective
 */
const de_ServiceLevelObjective = (output: any, context: __SerdeContext): ServiceLevelObjective => {
  return take(output, {
    Arn: __expectString,
    BurnRateConfigurations: _json,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EvaluationType: __expectString,
    Goal: (_: any) => de_Goal(_, context),
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    RequestBasedSli: (_: any) => de_RequestBasedServiceLevelIndicator(_, context),
    Sli: (_: any) => de_ServiceLevelIndicator(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ServiceLevelObjectiveBudgetReport
 */
const de_ServiceLevelObjectiveBudgetReport = (
  output: any,
  context: __SerdeContext
): ServiceLevelObjectiveBudgetReport => {
  return take(output, {
    Arn: __expectString,
    Attainment: __limitedParseDouble,
    BudgetRequestsRemaining: __expectInt32,
    BudgetSecondsRemaining: __expectInt32,
    BudgetStatus: __expectString,
    EvaluationType: __expectString,
    Goal: (_: any) => de_Goal(_, context),
    Name: __expectString,
    RequestBasedSli: (_: any) => de_RequestBasedServiceLevelIndicator(_, context),
    Sli: (_: any) => de_ServiceLevelIndicator(_, context),
    TotalBudgetRequests: __expectInt32,
    TotalBudgetSeconds: __expectInt32,
  }) as any;
};

// de_ServiceLevelObjectiveBudgetReportError omitted.

// de_ServiceLevelObjectiveBudgetReportErrors omitted.

/**
 * deserializeAws_restJson1ServiceLevelObjectiveBudgetReports
 */
const de_ServiceLevelObjectiveBudgetReports = (
  output: any,
  context: __SerdeContext
): ServiceLevelObjectiveBudgetReport[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceLevelObjectiveBudgetReport(entry, context);
    });
  return retVal;
};

// de_ServiceLevelObjectiveIds omitted.

/**
 * deserializeAws_restJson1ServiceLevelObjectiveSummaries
 */
const de_ServiceLevelObjectiveSummaries = (output: any, context: __SerdeContext): ServiceLevelObjectiveSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceLevelObjectiveSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ServiceLevelObjectiveSummary
 */
const de_ServiceLevelObjectiveSummary = (output: any, context: __SerdeContext): ServiceLevelObjectiveSummary => {
  return take(output, {
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    KeyAttributes: _json,
    Name: __expectString,
    OperationName: __expectString,
  }) as any;
};

// de_ServiceOperation omitted.

// de_ServiceOperations omitted.

// de_ServiceSummaries omitted.

// de_ServiceSummary omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_Window omitted.

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

const _AAI = "AwsAccountId";
const _ET = "EndTime";
const _ILA = "IncludeLinkedAccounts";
const _MR = "MaxResults";
const _NT = "NextToken";
const _ON = "OperationName";
const _RA = "ResourceArn";
const _SOAAI = "SloOwnerAwsAccountId";
const _ST = "StartTime";
