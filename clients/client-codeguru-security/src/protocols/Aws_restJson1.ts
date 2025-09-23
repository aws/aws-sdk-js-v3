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
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
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

import { BatchGetFindingsCommandInput, BatchGetFindingsCommandOutput } from "../commands/BatchGetFindingsCommand";
import { CreateScanCommandInput, CreateScanCommandOutput } from "../commands/CreateScanCommand";
import { CreateUploadUrlCommandInput, CreateUploadUrlCommandOutput } from "../commands/CreateUploadUrlCommand";
import {
  GetAccountConfigurationCommandInput,
  GetAccountConfigurationCommandOutput,
} from "../commands/GetAccountConfigurationCommand";
import { GetFindingsCommandInput, GetFindingsCommandOutput } from "../commands/GetFindingsCommand";
import { GetMetricsSummaryCommandInput, GetMetricsSummaryCommandOutput } from "../commands/GetMetricsSummaryCommand";
import { GetScanCommandInput, GetScanCommandOutput } from "../commands/GetScanCommand";
import {
  ListFindingsMetricsCommandInput,
  ListFindingsMetricsCommandOutput,
} from "../commands/ListFindingsMetricsCommand";
import { ListScansCommandInput, ListScansCommandOutput } from "../commands/ListScansCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateAccountConfigurationCommandInput,
  UpdateAccountConfigurationCommandOutput,
} from "../commands/UpdateAccountConfigurationCommand";
import { CodeGuruSecurityServiceException as __BaseException } from "../models/CodeGuruSecurityServiceException";
import {
  AccessDeniedException,
  AccountFindingsMetric,
  ConflictException,
  EncryptionConfig,
  Finding,
  FindingIdentifier,
  FindingMetricsValuePerSeverity,
  InternalServerException,
  MetricsSummary,
  ResourceId,
  ResourceNotFoundException,
  ScanSummary,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1BatchGetFindingsCommand
 */
export const se_BatchGetFindingsCommand = async (
  input: BatchGetFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/batchGetFindings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      findingIdentifiers: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateScanCommand
 */
export const se_CreateScanCommand = async (
  input: CreateScanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/scans");
  let body: any;
  body = JSON.stringify(
    take(input, {
      analysisType: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      resourceId: (_) => _json(_),
      scanName: [],
      scanType: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateUploadUrlCommand
 */
export const se_CreateUploadUrlCommand = async (
  input: CreateUploadUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/uploadUrl");
  let body: any;
  body = JSON.stringify(
    take(input, {
      scanName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAccountConfigurationCommand
 */
export const se_GetAccountConfigurationCommand = async (
  input: GetAccountConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accountConfiguration/get");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFindingsCommand
 */
export const se_GetFindingsCommand = async (
  input: GetFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/findings/{scanName}");
  b.p("scanName", () => input.scanName!, "{scanName}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_s]: [, input[_s]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMetricsSummaryCommand
 */
export const se_GetMetricsSummaryCommand = async (
  input: GetMetricsSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/metrics/summary");
  const query: any = map({
    [_d]: [__expectNonNull(input.date, `date`) != null, () => __serializeDateTime(input[_d]!).toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetScanCommand
 */
export const se_GetScanCommand = async (
  input: GetScanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/scans/{scanName}");
  b.p("scanName", () => input.scanName!, "{scanName}", false);
  const query: any = map({
    [_rI]: [, input[_rI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFindingsMetricsCommand
 */
export const se_ListFindingsMetricsCommand = async (
  input: ListFindingsMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/metrics/findings");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_sD]: [__expectNonNull(input.startDate, `startDate`) != null, () => __serializeDateTime(input[_sD]!).toString()],
    [_eD]: [__expectNonNull(input.endDate, `endDate`) != null, () => __serializeDateTime(input[_eD]!).toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListScansCommand
 */
export const se_ListScansCommand = async (
  input: ListScansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/scans");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
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
 * serializeAws_restJson1UpdateAccountConfigurationCommand
 */
export const se_UpdateAccountConfigurationCommand = async (
  input: UpdateAccountConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/updateAccountConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      encryptionConfig: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchGetFindingsCommand
 */
export const de_BatchGetFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failedFindings: _json,
    findings: (_) => de_Findings(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateScanCommand
 */
export const de_CreateScanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    resourceId: (_) => _json(__expectUnion(_)),
    runId: __expectString,
    scanName: __expectString,
    scanNameArn: __expectString,
    scanState: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateUploadUrlCommand
 */
export const de_CreateUploadUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUploadUrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    codeArtifactId: __expectString,
    requestHeaders: _json,
    s3Url: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAccountConfigurationCommand
 */
export const de_GetAccountConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    encryptionConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFindingsCommand
 */
export const de_GetFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    findings: (_) => de_Findings(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMetricsSummaryCommand
 */
export const de_GetMetricsSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricsSummaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    metricsSummary: (_) => de_MetricsSummary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetScanCommand
 */
export const de_GetScanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetScanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    analysisType: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    errorMessage: __expectString,
    numberOfRevisions: __expectLong,
    runId: __expectString,
    scanName: __expectString,
    scanNameArn: __expectString,
    scanState: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFindingsMetricsCommand
 */
export const de_ListFindingsMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    findingsMetrics: (_) => de_FindingsMetricList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListScansCommand
 */
export const de_ListScansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListScansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    summaries: (_) => de_ScanSummaries(_, context),
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAccountConfigurationCommand
 */
export const de_UpdateAccountConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    encryptionConfig: _json,
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
    case "com.amazonaws.codegurusecurity#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codegurusecurity#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codegurusecurity#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codegurusecurity#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codegurusecurity#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurusecurity#ResourceNotFoundException":
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
    errorCode: __expectString,
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
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
    errorCode: __expectString,
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    error: __expectString,
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
    errorCode: __expectString,
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
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    errorCode: __expectString,
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
    errorCode: __expectString,
    fieldList: _json,
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_EncryptionConfig omitted.

// se_FindingIdentifier omitted.

// se_FindingIdentifiers omitted.

// se_ResourceId omitted.

// se_TagMap omitted.

/**
 * deserializeAws_restJson1AccountFindingsMetric
 */
const de_AccountFindingsMetric = (output: any, context: __SerdeContext): AccountFindingsMetric => {
  return take(output, {
    closedFindings: (_: any) => de_FindingMetricsValuePerSeverity(_, context),
    date: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    meanTimeToClose: (_: any) => de_FindingMetricsValuePerSeverity(_, context),
    newFindings: (_: any) => de_FindingMetricsValuePerSeverity(_, context),
    openFindings: (_: any) => de_FindingMetricsValuePerSeverity(_, context),
  }) as any;
};

// de_BatchGetFindingsError omitted.

// de_BatchGetFindingsErrors omitted.

// de_CategoriesWithMostFindings omitted.

// de_CategoryWithFindingNum omitted.

// de_CodeLine omitted.

// de_CodeSnippet omitted.

// de_DetectorTags omitted.

// de_EncryptionConfig omitted.

// de_FilePath omitted.

/**
 * deserializeAws_restJson1Finding
 */
const de_Finding = (output: any, context: __SerdeContext): Finding => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    detectorId: __expectString,
    detectorName: __expectString,
    detectorTags: _json,
    generatorId: __expectString,
    id: __expectString,
    remediation: _json,
    resource: _json,
    ruleId: __expectString,
    severity: __expectString,
    status: __expectString,
    title: __expectString,
    type: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    vulnerability: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1FindingMetricsValuePerSeverity
 */
const de_FindingMetricsValuePerSeverity = (output: any, context: __SerdeContext): FindingMetricsValuePerSeverity => {
  return take(output, {
    critical: __limitedParseDouble,
    high: __limitedParseDouble,
    info: __limitedParseDouble,
    low: __limitedParseDouble,
    medium: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1Findings
 */
const de_Findings = (output: any, context: __SerdeContext): Finding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Finding(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FindingsMetricList
 */
const de_FindingsMetricList = (output: any, context: __SerdeContext): AccountFindingsMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccountFindingsMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MetricsSummary
 */
const de_MetricsSummary = (output: any, context: __SerdeContext): MetricsSummary => {
  return take(output, {
    categoriesWithMostFindings: _json,
    date: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    openFindings: (_: any) => de_FindingMetricsValuePerSeverity(_, context),
    scansWithMostOpenCriticalFindings: _json,
    scansWithMostOpenFindings: _json,
  }) as any;
};

// de_Recommendation omitted.

// de_ReferenceUrls omitted.

// de_RelatedVulnerabilities omitted.

// de_Remediation omitted.

// de_RequestHeaderMap omitted.

// de_Resource omitted.

// de_ResourceId omitted.

// de_ScanNameWithFindingNum omitted.

/**
 * deserializeAws_restJson1ScanSummaries
 */
const de_ScanSummaries = (output: any, context: __SerdeContext): ScanSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ScanSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ScanSummary
 */
const de_ScanSummary = (output: any, context: __SerdeContext): ScanSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    runId: __expectString,
    scanName: __expectString,
    scanNameArn: __expectString,
    scanState: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ScansWithMostOpenCriticalFindings omitted.

// de_ScansWithMostOpenFindings omitted.

// de_SuggestedFix omitted.

// de_SuggestedFixes omitted.

// de_TagMap omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_Vulnerability omitted.

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

const _d = "date";
const _eD = "endDate";
const _mR = "maxResults";
const _nT = "nextToken";
const _rI = "runId";
const _s = "status";
const _sD = "startDate";
const _tK = "tagKeys";
