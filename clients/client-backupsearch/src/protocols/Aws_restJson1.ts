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
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { GetSearchJobCommandInput, GetSearchJobCommandOutput } from "../commands/GetSearchJobCommand";
import {
  GetSearchResultExportJobCommandInput,
  GetSearchResultExportJobCommandOutput,
} from "../commands/GetSearchResultExportJobCommand";
import {
  ListSearchJobBackupsCommandInput,
  ListSearchJobBackupsCommandOutput,
} from "../commands/ListSearchJobBackupsCommand";
import {
  ListSearchJobResultsCommandInput,
  ListSearchJobResultsCommandOutput,
} from "../commands/ListSearchJobResultsCommand";
import { ListSearchJobsCommandInput, ListSearchJobsCommandOutput } from "../commands/ListSearchJobsCommand";
import {
  ListSearchResultExportJobsCommandInput,
  ListSearchResultExportJobsCommandOutput,
} from "../commands/ListSearchResultExportJobsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartSearchJobCommandInput, StartSearchJobCommandOutput } from "../commands/StartSearchJobCommand";
import {
  StartSearchResultExportJobCommandInput,
  StartSearchResultExportJobCommandOutput,
} from "../commands/StartSearchResultExportJobCommand";
import { StopSearchJobCommandInput, StopSearchJobCommandOutput } from "../commands/StopSearchJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { BackupSearchServiceException as __BaseException } from "../models/BackupSearchServiceException";
import {
  AccessDeniedException,
  BackupCreationTimeFilter,
  ConflictException,
  EBSItemFilter,
  EBSResultItem,
  ExportJobSummary,
  ExportSpecification,
  InternalServerException,
  ItemFilters,
  LongCondition,
  ResourceNotFoundException,
  ResourceType,
  ResultItem,
  S3ExportSpecification,
  S3ItemFilter,
  S3ResultItem,
  SearchJobBackupsResult,
  SearchJobSummary,
  SearchScope,
  ServiceQuotaExceededException,
  StringCondition,
  ThrottlingException,
  TimeCondition,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1GetSearchJobCommand
 */
export const se_GetSearchJobCommand = async (
  input: GetSearchJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/search-jobs/{SearchJobIdentifier}");
  b.p("SearchJobIdentifier", () => input.SearchJobIdentifier!, "{SearchJobIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSearchResultExportJobCommand
 */
export const se_GetSearchResultExportJobCommand = async (
  input: GetSearchResultExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/export-search-jobs/{ExportJobIdentifier}");
  b.p("ExportJobIdentifier", () => input.ExportJobIdentifier!, "{ExportJobIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSearchJobBackupsCommand
 */
export const se_ListSearchJobBackupsCommand = async (
  input: ListSearchJobBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/search-jobs/{SearchJobIdentifier}/backups");
  b.p("SearchJobIdentifier", () => input.SearchJobIdentifier!, "{SearchJobIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSearchJobResultsCommand
 */
export const se_ListSearchJobResultsCommand = async (
  input: ListSearchJobResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/search-jobs/{SearchJobIdentifier}/search-results");
  b.p("SearchJobIdentifier", () => input.SearchJobIdentifier!, "{SearchJobIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSearchJobsCommand
 */
export const se_ListSearchJobsCommand = async (
  input: ListSearchJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/search-jobs");
  const query: any = map({
    [_S]: [, input[_BS]!],
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSearchResultExportJobsCommand
 */
export const se_ListSearchResultExportJobsCommand = async (
  input: ListSearchResultExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/export-search-jobs");
  const query: any = map({
    [_S]: [, input[_S]!],
    [_SJI]: [, input[_SJI]!],
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
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
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartSearchJobCommand
 */
export const se_StartSearchJobCommand = async (
  input: StartSearchJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/search-jobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [],
      EncryptionKeyArn: [],
      ItemFilters: (_) => se_ItemFilters(_, context),
      Name: [],
      SearchScope: (_) => se_SearchScope(_, context),
      Tags: (_) => se_TagMap(_, context),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartSearchResultExportJobCommand
 */
export const se_StartSearchResultExportJobCommand = async (
  input: StartSearchResultExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/export-search-jobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [],
      ExportSpecification: (_) => _json(_),
      RoleArn: [],
      SearchJobIdentifier: [],
      Tags: (_) => se_TagMap(_, context),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopSearchJobCommand
 */
export const se_StopSearchJobCommand = async (
  input: StopSearchJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/search-jobs/{SearchJobIdentifier}/actions/cancel");
  b.p("SearchJobIdentifier", () => input.SearchJobIdentifier!, "{SearchJobIdentifier}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
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
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => se_TagMap(_, context),
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
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.TagKeys, `TagKeys`) != null, () => input[_TK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1GetSearchJobCommand
 */
export const de_GetSearchJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSearchJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CompletionTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CurrentSearchProgress: _json,
    EncryptionKeyArn: __expectString,
    ItemFilters: (_) => de_ItemFilters(_, context),
    Name: __expectString,
    SearchJobArn: __expectString,
    SearchJobIdentifier: __expectString,
    SearchScope: (_) => de_SearchScope(_, context),
    SearchScopeSummary: _json,
    Status: __expectString,
    StatusMessage: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSearchResultExportJobCommand
 */
export const de_GetSearchResultExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSearchResultExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CompletionTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExportJobArn: __expectString,
    ExportJobIdentifier: __expectString,
    ExportSpecification: (_) => _json(__expectUnion(_)),
    SearchJobArn: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSearchJobBackupsCommand
 */
export const de_ListSearchJobBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSearchJobBackupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Results: (_) => de_SearchJobBackupsResults(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSearchJobResultsCommand
 */
export const de_ListSearchJobResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSearchJobResultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Results: (_) => de_Results(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSearchJobsCommand
 */
export const de_ListSearchJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSearchJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    SearchJobs: (_) => de_SearchJobs(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSearchResultExportJobsCommand
 */
export const de_ListSearchResultExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSearchResultExportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ExportJobs: (_) => de_ExportJobSummaries(_, context),
    NextToken: __expectString,
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
    Tags: (_) => de_TagMap(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartSearchJobCommand
 */
export const de_StartSearchJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSearchJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SearchJobArn: __expectString,
    SearchJobIdentifier: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartSearchResultExportJobCommand
 */
export const de_StartSearchResultExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSearchResultExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ExportJobArn: __expectString,
    ExportJobIdentifier: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopSearchJobCommand
 */
export const de_StopSearchJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopSearchJobCommandOutput> => {
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
    case "com.amazonaws.backupsearch#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.backupsearch#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupsearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupsearch#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupsearch#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.backupsearch#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.backupsearch#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
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
    resourceId: __expectString,
    resourceType: __expectString,
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
  const contents: any = map({
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
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
    resourceId: __expectString,
    resourceType: __expectString,
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
    quotaCode: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
    serviceCode: __expectString,
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
  const contents: any = map({
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    quotaCode: __expectString,
    serviceCode: __expectString,
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

/**
 * serializeAws_restJson1BackupCreationTimeFilter
 */
const se_BackupCreationTimeFilter = (input: BackupCreationTimeFilter, context: __SerdeContext): any => {
  return take(input, {
    CreatedAfter: (_) => _.getTime() / 1_000,
    CreatedBefore: (_) => _.getTime() / 1_000,
  });
};

/**
 * serializeAws_restJson1EBSItemFilter
 */
const se_EBSItemFilter = (input: EBSItemFilter, context: __SerdeContext): any => {
  return take(input, {
    CreationTimes: (_) => se_TimeConditionList(_, context),
    FilePaths: _json,
    LastModificationTimes: (_) => se_TimeConditionList(_, context),
    Sizes: _json,
  });
};

/**
 * serializeAws_restJson1EBSItemFilters
 */
const se_EBSItemFilters = (input: EBSItemFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EBSItemFilter(entry, context);
    });
};

// se_ExportSpecification omitted.

/**
 * serializeAws_restJson1ItemFilters
 */
const se_ItemFilters = (input: ItemFilters, context: __SerdeContext): any => {
  return take(input, {
    EBSItemFilters: (_) => se_EBSItemFilters(_, context),
    S3ItemFilters: (_) => se_S3ItemFilters(_, context),
  });
};

// se_LongCondition omitted.

// se_LongConditionList omitted.

// se_RecoveryPointArnList omitted.

// se_ResourceArnList omitted.

// se_ResourceTypeList omitted.

// se_S3ExportSpecification omitted.

/**
 * serializeAws_restJson1S3ItemFilter
 */
const se_S3ItemFilter = (input: S3ItemFilter, context: __SerdeContext): any => {
  return take(input, {
    CreationTimes: (_) => se_TimeConditionList(_, context),
    ETags: _json,
    ObjectKeys: _json,
    Sizes: _json,
    VersionIds: _json,
  });
};

/**
 * serializeAws_restJson1S3ItemFilters
 */
const se_S3ItemFilters = (input: S3ItemFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_S3ItemFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1SearchScope
 */
const se_SearchScope = (input: SearchScope, context: __SerdeContext): any => {
  return take(input, {
    BackupResourceArns: _json,
    BackupResourceCreationTime: (_) => se_BackupCreationTimeFilter(_, context),
    BackupResourceTags: (_) => se_TagMap(_, context),
    BackupResourceTypes: _json,
    SourceResourceArns: _json,
  });
};

// se_StringCondition omitted.

// se_StringConditionList omitted.

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1TimeCondition
 */
const se_TimeCondition = (input: TimeCondition, context: __SerdeContext): any => {
  return take(input, {
    Operator: [],
    Value: (_) => _.getTime() / 1_000,
  });
};

/**
 * serializeAws_restJson1TimeConditionList
 */
const se_TimeConditionList = (input: TimeCondition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TimeCondition(entry, context);
    });
};

/**
 * deserializeAws_restJson1BackupCreationTimeFilter
 */
const de_BackupCreationTimeFilter = (output: any, context: __SerdeContext): BackupCreationTimeFilter => {
  return take(output, {
    CreatedAfter: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatedBefore: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_CurrentSearchProgress omitted.

/**
 * deserializeAws_restJson1EBSItemFilter
 */
const de_EBSItemFilter = (output: any, context: __SerdeContext): EBSItemFilter => {
  return take(output, {
    CreationTimes: (_: any) => de_TimeConditionList(_, context),
    FilePaths: _json,
    LastModificationTimes: (_: any) => de_TimeConditionList(_, context),
    Sizes: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1EBSItemFilters
 */
const de_EBSItemFilters = (output: any, context: __SerdeContext): EBSItemFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EBSItemFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EBSResultItem
 */
const de_EBSResultItem = (output: any, context: __SerdeContext): EBSResultItem => {
  return take(output, {
    BackupResourceArn: __expectString,
    BackupVaultName: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FilePath: __expectString,
    FileSize: __expectLong,
    FileSystemIdentifier: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SourceResourceArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ExportJobSummaries
 */
const de_ExportJobSummaries = (output: any, context: __SerdeContext): ExportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExportJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ExportJobSummary
 */
const de_ExportJobSummary = (output: any, context: __SerdeContext): ExportJobSummary => {
  return take(output, {
    CompletionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExportJobArn: __expectString,
    ExportJobIdentifier: __expectString,
    SearchJobArn: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

// de_ExportSpecification omitted.

/**
 * deserializeAws_restJson1ItemFilters
 */
const de_ItemFilters = (output: any, context: __SerdeContext): ItemFilters => {
  return take(output, {
    EBSItemFilters: (_: any) => de_EBSItemFilters(_, context),
    S3ItemFilters: (_: any) => de_S3ItemFilters(_, context),
  }) as any;
};

// de_LongCondition omitted.

// de_LongConditionList omitted.

// de_RecoveryPointArnList omitted.

// de_ResourceArnList omitted.

// de_ResourceTypeList omitted.

/**
 * deserializeAws_restJson1ResultItem
 */
const de_ResultItem = (output: any, context: __SerdeContext): ResultItem => {
  if (output.EBSResultItem != null) {
    return {
      EBSResultItem: de_EBSResultItem(output.EBSResultItem, context),
    };
  }
  if (output.S3ResultItem != null) {
    return {
      S3ResultItem: de_S3ResultItem(output.S3ResultItem, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1Results
 */
const de_Results = (output: any, context: __SerdeContext): ResultItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResultItem(__expectUnion(entry), context);
    });
  return retVal;
};

// de_S3ExportSpecification omitted.

/**
 * deserializeAws_restJson1S3ItemFilter
 */
const de_S3ItemFilter = (output: any, context: __SerdeContext): S3ItemFilter => {
  return take(output, {
    CreationTimes: (_: any) => de_TimeConditionList(_, context),
    ETags: _json,
    ObjectKeys: _json,
    Sizes: _json,
    VersionIds: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1S3ItemFilters
 */
const de_S3ItemFilters = (output: any, context: __SerdeContext): S3ItemFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_S3ItemFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1S3ResultItem
 */
const de_S3ResultItem = (output: any, context: __SerdeContext): S3ResultItem => {
  return take(output, {
    BackupResourceArn: __expectString,
    BackupVaultName: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ETag: __expectString,
    ObjectKey: __expectString,
    ObjectSize: __expectLong,
    SourceResourceArn: __expectString,
    VersionId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SearchJobBackupsResult
 */
const de_SearchJobBackupsResult = (output: any, context: __SerdeContext): SearchJobBackupsResult => {
  return take(output, {
    BackupCreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    BackupResourceArn: __expectString,
    IndexCreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResourceType: __expectString,
    SourceResourceArn: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SearchJobBackupsResults
 */
const de_SearchJobBackupsResults = (output: any, context: __SerdeContext): SearchJobBackupsResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SearchJobBackupsResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SearchJobs
 */
const de_SearchJobs = (output: any, context: __SerdeContext): SearchJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SearchJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SearchJobSummary
 */
const de_SearchJobSummary = (output: any, context: __SerdeContext): SearchJobSummary => {
  return take(output, {
    CompletionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    SearchJobArn: __expectString,
    SearchJobIdentifier: __expectString,
    SearchScopeSummary: _json,
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SearchScope
 */
const de_SearchScope = (output: any, context: __SerdeContext): SearchScope => {
  return take(output, {
    BackupResourceArns: _json,
    BackupResourceCreationTime: (_: any) => de_BackupCreationTimeFilter(_, context),
    BackupResourceTags: (_: any) => de_TagMap(_, context),
    BackupResourceTypes: _json,
    SourceResourceArns: _json,
  }) as any;
};

// de_SearchScopeSummary omitted.

// de_StringCondition omitted.

// de_StringConditionList omitted.

/**
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key as string] = null as any;
      return acc;
    }
    acc[key as string] = __expectString(value) as any;
    return acc;
  }, {} as Record<string, string>);
};

/**
 * deserializeAws_restJson1TimeCondition
 */
const de_TimeCondition = (output: any, context: __SerdeContext): TimeCondition => {
  return take(output, {
    Operator: __expectString,
    Value: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1TimeConditionList
 */
const de_TimeConditionList = (output: any, context: __SerdeContext): TimeCondition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TimeCondition(entry, context);
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

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _BS = "ByStatus";
const _MR = "MaxResults";
const _NT = "NextToken";
const _S = "Status";
const _SJI = "SearchJobIdentifier";
const _TK = "TagKeys";
const _mR = "maxResults";
const _nT = "nextToken";
const _rAS = "retryAfterSeconds";
const _ra = "retry-after";
const _tK = "tagKeys";
