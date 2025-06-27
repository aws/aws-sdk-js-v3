// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
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
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AssociateRepositoryCommandInput,
  AssociateRepositoryCommandOutput,
} from "../commands/AssociateRepositoryCommand";
import { CreateCodeReviewCommandInput, CreateCodeReviewCommandOutput } from "../commands/CreateCodeReviewCommand";
import { DescribeCodeReviewCommandInput, DescribeCodeReviewCommandOutput } from "../commands/DescribeCodeReviewCommand";
import {
  DescribeRecommendationFeedbackCommandInput,
  DescribeRecommendationFeedbackCommandOutput,
} from "../commands/DescribeRecommendationFeedbackCommand";
import {
  DescribeRepositoryAssociationCommandInput,
  DescribeRepositoryAssociationCommandOutput,
} from "../commands/DescribeRepositoryAssociationCommand";
import {
  DisassociateRepositoryCommandInput,
  DisassociateRepositoryCommandOutput,
} from "../commands/DisassociateRepositoryCommand";
import { ListCodeReviewsCommandInput, ListCodeReviewsCommandOutput } from "../commands/ListCodeReviewsCommand";
import {
  ListRecommendationFeedbackCommandInput,
  ListRecommendationFeedbackCommandOutput,
} from "../commands/ListRecommendationFeedbackCommand";
import {
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "../commands/ListRecommendationsCommand";
import {
  ListRepositoryAssociationsCommandInput,
  ListRepositoryAssociationsCommandOutput,
} from "../commands/ListRepositoryAssociationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PutRecommendationFeedbackCommandInput,
  PutRecommendationFeedbackCommandOutput,
} from "../commands/PutRecommendationFeedbackCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { CodeGuruReviewerServiceException as __BaseException } from "../models/CodeGuruReviewerServiceException";
import {
  AccessDeniedException,
  AnalysisType,
  BranchDiffSourceCodeType,
  CodeArtifacts,
  CodeCommitRepository,
  CodeReview,
  CodeReviewSummary,
  CodeReviewType,
  CommitDiffSourceCodeType,
  ConflictException,
  EventInfo,
  InternalServerException,
  KMSKeyDetails,
  NotFoundException,
  Reaction,
  RecommendationFeedback,
  Repository,
  RepositoryAnalysis,
  RepositoryAssociation,
  RepositoryAssociationSummary,
  RepositoryHeadSourceCodeType,
  RequestMetadata,
  ResourceNotFoundException,
  S3BucketRepository,
  S3Repository,
  S3RepositoryDetails,
  SourceCodeType,
  ThirdPartySourceRepository,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateRepositoryCommand
 */
export const se_AssociateRepositoryCommand = async (
  input: AssociateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/associations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      KMSKeyDetails: (_) => _json(_),
      Repository: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCodeReviewCommand
 */
export const se_CreateCodeReviewCommand = async (
  input: CreateCodeReviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/codereviews");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Name: [],
      RepositoryAssociationArn: [],
      Type: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeCodeReviewCommand
 */
export const se_DescribeCodeReviewCommand = async (
  input: DescribeCodeReviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/codereviews/{CodeReviewArn}");
  b.p("CodeReviewArn", () => input.CodeReviewArn!, "{CodeReviewArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeRecommendationFeedbackCommand
 */
export const se_DescribeRecommendationFeedbackCommand = async (
  input: DescribeRecommendationFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/feedback/{CodeReviewArn}");
  b.p("CodeReviewArn", () => input.CodeReviewArn!, "{CodeReviewArn}", false);
  const query: any = map({
    [_RI]: [, __expectNonNull(input[_RI]!, `RecommendationId`)],
    [_UI]: [, input[_UI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeRepositoryAssociationCommand
 */
export const se_DescribeRepositoryAssociationCommand = async (
  input: DescribeRepositoryAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/associations/{AssociationArn}");
  b.p("AssociationArn", () => input.AssociationArn!, "{AssociationArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateRepositoryCommand
 */
export const se_DisassociateRepositoryCommand = async (
  input: DisassociateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/associations/{AssociationArn}");
  b.p("AssociationArn", () => input.AssociationArn!, "{AssociationArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCodeReviewsCommand
 */
export const se_ListCodeReviewsCommand = async (
  input: ListCodeReviewsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/codereviews");
  const query: any = map({
    [_PT]: [() => input.ProviderTypes !== void 0, () => input[_PT]! || []],
    [_S]: [() => input.States !== void 0, () => input[_S]! || []],
    [_RN]: [() => input.RepositoryNames !== void 0, () => input[_RN]! || []],
    [_T]: [, __expectNonNull(input[_T]!, `Type`)],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRecommendationFeedbackCommand
 */
export const se_ListRecommendationFeedbackCommand = async (
  input: ListRecommendationFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/feedback/{CodeReviewArn}/RecommendationFeedback");
  b.p("CodeReviewArn", () => input.CodeReviewArn!, "{CodeReviewArn}", false);
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_UIs]: [() => input.UserIds !== void 0, () => input[_UIs]! || []],
    [_RIe]: [() => input.RecommendationIds !== void 0, () => input[_RIe]! || []],
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
  b.bp("/codereviews/{CodeReviewArn}/Recommendations");
  b.p("CodeReviewArn", () => input.CodeReviewArn!, "{CodeReviewArn}", false);
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRepositoryAssociationsCommand
 */
export const se_ListRepositoryAssociationsCommand = async (
  input: ListRepositoryAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/associations");
  const query: any = map({
    [_PTr]: [() => input.ProviderTypes !== void 0, () => input[_PT]! || []],
    [_St]: [() => input.States !== void 0, () => input[_S]! || []],
    [_Na]: [() => input.Names !== void 0, () => input[_N]! || []],
    [_Ow]: [() => input.Owners !== void 0, () => input[_O]! || []],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
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
 * serializeAws_restJson1PutRecommendationFeedbackCommand
 */
export const se_PutRecommendationFeedbackCommand = async (
  input: PutRecommendationFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/feedback");
  let body: any;
  body = JSON.stringify(
    take(input, {
      CodeReviewArn: [],
      Reactions: (_) => _json(_),
      RecommendationId: [],
    })
  );
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
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
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.TagKeys, `TagKeys`) != null, () => input[_TK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateRepositoryCommand
 */
export const de_AssociateRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateRepositoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RepositoryAssociation: (_) => de_RepositoryAssociation(_, context),
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCodeReviewCommand
 */
export const de_CreateCodeReviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCodeReviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CodeReview: (_) => de_CodeReview(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeCodeReviewCommand
 */
export const de_DescribeCodeReviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCodeReviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CodeReview: (_) => de_CodeReview(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRecommendationFeedbackCommand
 */
export const de_DescribeRecommendationFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecommendationFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RecommendationFeedback: (_) => de_RecommendationFeedback(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRepositoryAssociationCommand
 */
export const de_DescribeRepositoryAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRepositoryAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RepositoryAssociation: (_) => de_RepositoryAssociation(_, context),
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateRepositoryCommand
 */
export const de_DisassociateRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRepositoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RepositoryAssociation: (_) => de_RepositoryAssociation(_, context),
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCodeReviewsCommand
 */
export const de_ListCodeReviewsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCodeReviewsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CodeReviewSummaries: (_) => de_CodeReviewSummaries(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRecommendationFeedbackCommand
 */
export const de_ListRecommendationFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RecommendationFeedbackSummaries: _json,
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
    NextToken: __expectString,
    RecommendationSummaries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRepositoryAssociationsCommand
 */
export const de_ListRepositoryAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoryAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RepositoryAssociationSummaries: (_) => de_RepositoryAssociationSummaries(_, context),
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
 * deserializeAws_restJson1PutRecommendationFeedbackCommand
 */
export const de_PutRecommendationFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecommendationFeedbackCommandOutput> => {
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
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codegurureviewer#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.codegurureviewer#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotFoundException({
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
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AnalysisTypes omitted.

// se_BranchDiffSourceCodeType omitted.

// se_CodeArtifacts omitted.

// se_CodeCommitRepository omitted.

// se_CodeReviewType omitted.

// se_CommitDiffSourceCodeType omitted.

// se_EventInfo omitted.

// se_KMSKeyDetails omitted.

// se_Reactions omitted.

// se_Repository omitted.

// se_RepositoryAnalysis omitted.

// se_RepositoryHeadSourceCodeType omitted.

// se_RequestMetadata omitted.

// se_S3BucketRepository omitted.

// se_S3Repository omitted.

// se_S3RepositoryDetails omitted.

// se_SourceCodeType omitted.

// se_TagMap omitted.

// se_ThirdPartySourceRepository omitted.

// de_AnalysisTypes omitted.

// de_BranchDiffSourceCodeType omitted.

// de_CodeArtifacts omitted.

/**
 * deserializeAws_restJson1CodeReview
 */
const de_CodeReview = (output: any, context: __SerdeContext): CodeReview => {
  return take(output, {
    AnalysisTypes: _json,
    AssociationArn: __expectString,
    CodeReviewArn: __expectString,
    ConfigFileState: __expectString,
    CreatedTimeStamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTimeStamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Metrics: _json,
    Name: __expectString,
    Owner: __expectString,
    ProviderType: __expectString,
    PullRequestId: __expectString,
    RepositoryName: __expectString,
    SourceCodeType: _json,
    State: __expectString,
    StateReason: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CodeReviewSummaries
 */
const de_CodeReviewSummaries = (output: any, context: __SerdeContext): CodeReviewSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CodeReviewSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CodeReviewSummary
 */
const de_CodeReviewSummary = (output: any, context: __SerdeContext): CodeReviewSummary => {
  return take(output, {
    CodeReviewArn: __expectString,
    CreatedTimeStamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTimeStamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MetricsSummary: _json,
    Name: __expectString,
    Owner: __expectString,
    ProviderType: __expectString,
    PullRequestId: __expectString,
    RepositoryName: __expectString,
    SourceCodeType: _json,
    State: __expectString,
    Type: __expectString,
  }) as any;
};

// de_CommitDiffSourceCodeType omitted.

// de_EventInfo omitted.

// de_KMSKeyDetails omitted.

// de_Metrics omitted.

// de_MetricsSummary omitted.

// de_Reactions omitted.

/**
 * deserializeAws_restJson1RecommendationFeedback
 */
const de_RecommendationFeedback = (output: any, context: __SerdeContext): RecommendationFeedback => {
  return take(output, {
    CodeReviewArn: __expectString,
    CreatedTimeStamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTimeStamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Reactions: _json,
    RecommendationId: __expectString,
    UserId: __expectString,
  }) as any;
};

// de_RecommendationFeedbackSummaries omitted.

// de_RecommendationFeedbackSummary omitted.

// de_RecommendationSummaries omitted.

// de_RecommendationSummary omitted.

/**
 * deserializeAws_restJson1RepositoryAssociation
 */
const de_RepositoryAssociation = (output: any, context: __SerdeContext): RepositoryAssociation => {
  return take(output, {
    AssociationArn: __expectString,
    AssociationId: __expectString,
    ConnectionArn: __expectString,
    CreatedTimeStamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    KMSKeyDetails: _json,
    LastUpdatedTimeStamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Owner: __expectString,
    ProviderType: __expectString,
    S3RepositoryDetails: _json,
    State: __expectString,
    StateReason: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RepositoryAssociationSummaries
 */
const de_RepositoryAssociationSummaries = (output: any, context: __SerdeContext): RepositoryAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RepositoryAssociationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RepositoryAssociationSummary
 */
const de_RepositoryAssociationSummary = (output: any, context: __SerdeContext): RepositoryAssociationSummary => {
  return take(output, {
    AssociationArn: __expectString,
    AssociationId: __expectString,
    ConnectionArn: __expectString,
    LastUpdatedTimeStamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Owner: __expectString,
    ProviderType: __expectString,
    State: __expectString,
  }) as any;
};

// de_RepositoryHeadSourceCodeType omitted.

// de_RequestMetadata omitted.

// de_RuleMetadata omitted.

// de_RuleTags omitted.

// de_S3BucketRepository omitted.

// de_S3RepositoryDetails omitted.

// de_SourceCodeType omitted.

// de_TagMap omitted.

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

const _MR = "MaxResults";
const _N = "Names";
const _NT = "NextToken";
const _Na = "Name";
const _O = "Owners";
const _Ow = "Owner";
const _PT = "ProviderTypes";
const _PTr = "ProviderType";
const _RI = "RecommendationId";
const _RIe = "RecommendationIds";
const _RN = "RepositoryNames";
const _S = "States";
const _St = "State";
const _T = "Type";
const _TK = "TagKeys";
const _UI = "UserId";
const _UIs = "UserIds";
const _tK = "tagKeys";
