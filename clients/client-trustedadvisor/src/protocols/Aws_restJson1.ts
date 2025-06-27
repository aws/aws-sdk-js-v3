// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
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

import {
  BatchUpdateRecommendationResourceExclusionCommandInput,
  BatchUpdateRecommendationResourceExclusionCommandOutput,
} from "../commands/BatchUpdateRecommendationResourceExclusionCommand";
import {
  GetOrganizationRecommendationCommandInput,
  GetOrganizationRecommendationCommandOutput,
} from "../commands/GetOrganizationRecommendationCommand";
import { GetRecommendationCommandInput, GetRecommendationCommandOutput } from "../commands/GetRecommendationCommand";
import { ListChecksCommandInput, ListChecksCommandOutput } from "../commands/ListChecksCommand";
import {
  ListOrganizationRecommendationAccountsCommandInput,
  ListOrganizationRecommendationAccountsCommandOutput,
} from "../commands/ListOrganizationRecommendationAccountsCommand";
import {
  ListOrganizationRecommendationResourcesCommandInput,
  ListOrganizationRecommendationResourcesCommandOutput,
} from "../commands/ListOrganizationRecommendationResourcesCommand";
import {
  ListOrganizationRecommendationsCommandInput,
  ListOrganizationRecommendationsCommandOutput,
} from "../commands/ListOrganizationRecommendationsCommand";
import {
  ListRecommendationResourcesCommandInput,
  ListRecommendationResourcesCommandOutput,
} from "../commands/ListRecommendationResourcesCommand";
import {
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "../commands/ListRecommendationsCommand";
import {
  UpdateOrganizationRecommendationLifecycleCommandInput,
  UpdateOrganizationRecommendationLifecycleCommandOutput,
} from "../commands/UpdateOrganizationRecommendationLifecycleCommand";
import {
  UpdateRecommendationLifecycleCommandInput,
  UpdateRecommendationLifecycleCommandOutput,
} from "../commands/UpdateRecommendationLifecycleCommand";
import {
  AccessDeniedException,
  AccountRecommendationLifecycleSummary,
  ConflictException,
  InternalServerException,
  OrganizationRecommendation,
  OrganizationRecommendationResourceSummary,
  OrganizationRecommendationSummary,
  Recommendation,
  RecommendationCostOptimizingAggregates,
  RecommendationPillarSpecificAggregates,
  RecommendationResourceExclusion,
  RecommendationResourceSummary,
  RecommendationSummary,
  ResourceNotFoundException,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";
import { TrustedAdvisorServiceException as __BaseException } from "../models/TrustedAdvisorServiceException";

/**
 * serializeAws_restJson1BatchUpdateRecommendationResourceExclusionCommand
 */
export const se_BatchUpdateRecommendationResourceExclusionCommand = async (
  input: BatchUpdateRecommendationResourceExclusionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/batch-update-recommendation-resource-exclusion");
  let body: any;
  body = JSON.stringify(
    take(input, {
      recommendationResourceExclusions: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetOrganizationRecommendationCommand
 */
export const se_GetOrganizationRecommendationCommand = async (
  input: GetOrganizationRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/organization-recommendations/{organizationRecommendationIdentifier}");
  b.p(
    "organizationRecommendationIdentifier",
    () => input.organizationRecommendationIdentifier!,
    "{organizationRecommendationIdentifier}",
    false
  );
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRecommendationCommand
 */
export const se_GetRecommendationCommand = async (
  input: GetRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/recommendations/{recommendationIdentifier}");
  b.p("recommendationIdentifier", () => input.recommendationIdentifier!, "{recommendationIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListChecksCommand
 */
export const se_ListChecksCommand = async (
  input: ListChecksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/checks");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_p]: [, input[_p]!],
    [_aS]: [, input[_aS]!],
    [_s]: [, input[_s]!],
    [_l]: [, input[_l]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListOrganizationRecommendationAccountsCommand
 */
export const se_ListOrganizationRecommendationAccountsCommand = async (
  input: ListOrganizationRecommendationAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/organization-recommendations/{organizationRecommendationIdentifier}/accounts");
  b.p(
    "organizationRecommendationIdentifier",
    () => input.organizationRecommendationIdentifier!,
    "{organizationRecommendationIdentifier}",
    false
  );
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_aAI]: [, input[_aAI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListOrganizationRecommendationResourcesCommand
 */
export const se_ListOrganizationRecommendationResourcesCommand = async (
  input: ListOrganizationRecommendationResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/organization-recommendations/{organizationRecommendationIdentifier}/resources");
  b.p(
    "organizationRecommendationIdentifier",
    () => input.organizationRecommendationIdentifier!,
    "{organizationRecommendationIdentifier}",
    false
  );
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_st]: [, input[_st]!],
    [_eS]: [, input[_eS]!],
    [_rC]: [, input[_rC]!],
    [_aAI]: [, input[_aAI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListOrganizationRecommendationsCommand
 */
export const se_ListOrganizationRecommendationsCommand = async (
  input: ListOrganizationRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/organization-recommendations");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_t]: [, input[_t]!],
    [_st]: [, input[_st]!],
    [_p]: [, input[_p]!],
    [_aS]: [, input[_aS]!],
    [_s]: [, input[_s]!],
    [_cI]: [, input[_cI]!],
    [_aLUA]: [() => input.afterLastUpdatedAt !== void 0, () => __serializeDateTime(input[_aLUA]!).toString()],
    [_bLUA]: [() => input.beforeLastUpdatedAt !== void 0, () => __serializeDateTime(input[_bLUA]!).toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRecommendationResourcesCommand
 */
export const se_ListRecommendationResourcesCommand = async (
  input: ListRecommendationResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/recommendations/{recommendationIdentifier}/resources");
  b.p("recommendationIdentifier", () => input.recommendationIdentifier!, "{recommendationIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_st]: [, input[_st]!],
    [_eS]: [, input[_eS]!],
    [_rC]: [, input[_rC]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRecommendationsCommand
 */
export const se_ListRecommendationsCommand = async (
  input: ListRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/recommendations");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_t]: [, input[_t]!],
    [_st]: [, input[_st]!],
    [_p]: [, input[_p]!],
    [_aS]: [, input[_aS]!],
    [_s]: [, input[_s]!],
    [_cI]: [, input[_cI]!],
    [_aLUA]: [() => input.afterLastUpdatedAt !== void 0, () => __serializeDateTime(input[_aLUA]!).toString()],
    [_bLUA]: [() => input.beforeLastUpdatedAt !== void 0, () => __serializeDateTime(input[_bLUA]!).toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateOrganizationRecommendationLifecycleCommand
 */
export const se_UpdateOrganizationRecommendationLifecycleCommand = async (
  input: UpdateOrganizationRecommendationLifecycleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/organization-recommendations/{organizationRecommendationIdentifier}/lifecycle");
  b.p(
    "organizationRecommendationIdentifier",
    () => input.organizationRecommendationIdentifier!,
    "{organizationRecommendationIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      lifecycleStage: [],
      updateReason: [],
      updateReasonCode: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRecommendationLifecycleCommand
 */
export const se_UpdateRecommendationLifecycleCommand = async (
  input: UpdateRecommendationLifecycleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/recommendations/{recommendationIdentifier}/lifecycle");
  b.p("recommendationIdentifier", () => input.recommendationIdentifier!, "{recommendationIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      lifecycleStage: [],
      updateReason: [],
      updateReasonCode: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchUpdateRecommendationResourceExclusionCommand
 */
export const de_BatchUpdateRecommendationResourceExclusionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateRecommendationResourceExclusionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    batchUpdateRecommendationResourceExclusionErrors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetOrganizationRecommendationCommand
 */
export const de_GetOrganizationRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrganizationRecommendationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    organizationRecommendation: (_) => de_OrganizationRecommendation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRecommendationCommand
 */
export const de_GetRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    recommendation: (_) => de_Recommendation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChecksCommand
 */
export const de_ListChecksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChecksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    checkSummaries: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListOrganizationRecommendationAccountsCommand
 */
export const de_ListOrganizationRecommendationAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationRecommendationAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accountRecommendationLifecycleSummaries: (_) => de_AccountRecommendationLifecycleSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListOrganizationRecommendationResourcesCommand
 */
export const de_ListOrganizationRecommendationResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationRecommendationResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    organizationRecommendationResourceSummaries: (_) => de_OrganizationRecommendationResourceSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListOrganizationRecommendationsCommand
 */
export const de_ListOrganizationRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    organizationRecommendationSummaries: (_) => de_OrganizationRecommendationSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRecommendationResourcesCommand
 */
export const de_ListRecommendationResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    recommendationResourceSummaries: (_) => de_RecommendationResourceSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRecommendationsCommand
 */
export const de_ListRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    recommendationSummaries: (_) => de_RecommendationSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateOrganizationRecommendationLifecycleCommand
 */
export const de_UpdateOrganizationRecommendationLifecycleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOrganizationRecommendationLifecycleCommandOutput> => {
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
 * deserializeAws_restJson1UpdateRecommendationLifecycleCommand
 */
export const de_UpdateRecommendationLifecycleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecommendationLifecycleCommandOutput> => {
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
    case "com.amazonaws.trustedadvisor#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.trustedadvisor#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.trustedadvisor#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.trustedadvisor#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.trustedadvisor#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.trustedadvisor#ResourceNotFoundException":
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

// se_RecommendationResourceExclusion omitted.

// se_RecommendationResourceExclusionList omitted.

/**
 * deserializeAws_restJson1AccountRecommendationLifecycleSummary
 */
const de_AccountRecommendationLifecycleSummary = (
  output: any,
  context: __SerdeContext
): AccountRecommendationLifecycleSummary => {
  return take(output, {
    accountId: __expectString,
    accountRecommendationArn: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lifecycleStage: __expectString,
    updateReason: __expectString,
    updateReasonCode: __expectString,
    updatedOnBehalfOf: __expectString,
    updatedOnBehalfOfJobTitle: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AccountRecommendationLifecycleSummaryList
 */
const de_AccountRecommendationLifecycleSummaryList = (
  output: any,
  context: __SerdeContext
): AccountRecommendationLifecycleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccountRecommendationLifecycleSummary(entry, context);
    });
  return retVal;
};

// de_CheckSummary omitted.

// de_CheckSummaryList omitted.

/**
 * deserializeAws_restJson1OrganizationRecommendation
 */
const de_OrganizationRecommendation = (output: any, context: __SerdeContext): OrganizationRecommendation => {
  return take(output, {
    arn: __expectString,
    awsServices: _json,
    checkArn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    id: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lifecycleStage: __expectString,
    name: __expectString,
    pillarSpecificAggregates: (_: any) => de_RecommendationPillarSpecificAggregates(_, context),
    pillars: _json,
    resolvedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    resourcesAggregates: _json,
    source: __expectString,
    status: __expectString,
    type: __expectString,
    updateReason: __expectString,
    updateReasonCode: __expectString,
    updatedOnBehalfOf: __expectString,
    updatedOnBehalfOfJobTitle: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1OrganizationRecommendationResourceSummary
 */
const de_OrganizationRecommendationResourceSummary = (
  output: any,
  context: __SerdeContext
): OrganizationRecommendationResourceSummary => {
  return take(output, {
    accountId: __expectString,
    arn: __expectString,
    awsResourceId: __expectString,
    exclusionStatus: __expectString,
    id: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    metadata: _json,
    recommendationArn: __expectString,
    regionCode: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1OrganizationRecommendationResourceSummaryList
 */
const de_OrganizationRecommendationResourceSummaryList = (
  output: any,
  context: __SerdeContext
): OrganizationRecommendationResourceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OrganizationRecommendationResourceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1OrganizationRecommendationSummary
 */
const de_OrganizationRecommendationSummary = (
  output: any,
  context: __SerdeContext
): OrganizationRecommendationSummary => {
  return take(output, {
    arn: __expectString,
    awsServices: _json,
    checkArn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lifecycleStage: __expectString,
    name: __expectString,
    pillarSpecificAggregates: (_: any) => de_RecommendationPillarSpecificAggregates(_, context),
    pillars: _json,
    resourcesAggregates: _json,
    source: __expectString,
    status: __expectString,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1OrganizationRecommendationSummaryList
 */
const de_OrganizationRecommendationSummaryList = (
  output: any,
  context: __SerdeContext
): OrganizationRecommendationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OrganizationRecommendationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Recommendation
 */
const de_Recommendation = (output: any, context: __SerdeContext): Recommendation => {
  return take(output, {
    arn: __expectString,
    awsServices: _json,
    checkArn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    id: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lifecycleStage: __expectString,
    name: __expectString,
    pillarSpecificAggregates: (_: any) => de_RecommendationPillarSpecificAggregates(_, context),
    pillars: _json,
    resolvedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    resourcesAggregates: _json,
    source: __expectString,
    status: __expectString,
    type: __expectString,
    updateReason: __expectString,
    updateReasonCode: __expectString,
    updatedOnBehalfOf: __expectString,
    updatedOnBehalfOfJobTitle: __expectString,
  }) as any;
};

// de_RecommendationAwsServiceList omitted.

/**
 * deserializeAws_restJson1RecommendationCostOptimizingAggregates
 */
const de_RecommendationCostOptimizingAggregates = (
  output: any,
  context: __SerdeContext
): RecommendationCostOptimizingAggregates => {
  return take(output, {
    estimatedMonthlySavings: __limitedParseDouble,
    estimatedPercentMonthlySavings: __limitedParseDouble,
  }) as any;
};

// de_RecommendationPillarList omitted.

/**
 * deserializeAws_restJson1RecommendationPillarSpecificAggregates
 */
const de_RecommendationPillarSpecificAggregates = (
  output: any,
  context: __SerdeContext
): RecommendationPillarSpecificAggregates => {
  return take(output, {
    costOptimizing: (_: any) => de_RecommendationCostOptimizingAggregates(_, context),
  }) as any;
};

// de_RecommendationResourcesAggregates omitted.

/**
 * deserializeAws_restJson1RecommendationResourceSummary
 */
const de_RecommendationResourceSummary = (output: any, context: __SerdeContext): RecommendationResourceSummary => {
  return take(output, {
    arn: __expectString,
    awsResourceId: __expectString,
    exclusionStatus: __expectString,
    id: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    metadata: _json,
    recommendationArn: __expectString,
    regionCode: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RecommendationResourceSummaryList
 */
const de_RecommendationResourceSummaryList = (
  output: any,
  context: __SerdeContext
): RecommendationResourceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RecommendationResourceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RecommendationSummary
 */
const de_RecommendationSummary = (output: any, context: __SerdeContext): RecommendationSummary => {
  return take(output, {
    arn: __expectString,
    awsServices: _json,
    checkArn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lifecycleStage: __expectString,
    name: __expectString,
    pillarSpecificAggregates: (_: any) => de_RecommendationPillarSpecificAggregates(_, context),
    pillars: _json,
    resourcesAggregates: _json,
    source: __expectString,
    status: __expectString,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RecommendationSummaryList
 */
const de_RecommendationSummaryList = (output: any, context: __SerdeContext): RecommendationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RecommendationSummary(entry, context);
    });
  return retVal;
};

// de_StringMap omitted.

// de_UpdateRecommendationResourceExclusionError omitted.

// de_UpdateRecommendationResourceExclusionErrorList omitted.

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

const _aAI = "affectedAccountId";
const _aLUA = "afterLastUpdatedAt";
const _aS = "awsService";
const _bLUA = "beforeLastUpdatedAt";
const _cI = "checkIdentifier";
const _eS = "exclusionStatus";
const _l = "language";
const _mR = "maxResults";
const _nT = "nextToken";
const _p = "pillar";
const _rC = "regionCode";
const _s = "source";
const _st = "status";
const _t = "type";
