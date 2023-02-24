// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
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
  Metrics,
  MetricsSummary,
  NotFoundException,
  Reaction,
  RecommendationFeedback,
  RecommendationFeedbackSummary,
  RecommendationSummary,
  Repository,
  RepositoryAnalysis,
  RepositoryAssociation,
  RepositoryAssociationSummary,
  RepositoryHeadSourceCodeType,
  RequestMetadata,
  ResourceNotFoundException,
  RuleMetadata,
  S3BucketRepository,
  S3Repository,
  S3RepositoryDetails,
  SourceCodeType,
  ThirdPartySourceRepository,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

export const serializeAws_restJson1AssociateRepositoryCommand = async (
  input: AssociateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/associations";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.KMSKeyDetails != null && {
      KMSKeyDetails: serializeAws_restJson1KMSKeyDetails(input.KMSKeyDetails, context),
    }),
    ...(input.Repository != null && { Repository: serializeAws_restJson1Repository(input.Repository, context) }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1CreateCodeReviewCommand = async (
  input: CreateCodeReviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/codereviews";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RepositoryAssociationArn != null && { RepositoryAssociationArn: input.RepositoryAssociationArn }),
    ...(input.Type != null && { Type: serializeAws_restJson1CodeReviewType(input.Type, context) }),
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

export const serializeAws_restJson1DescribeCodeReviewCommand = async (
  input: DescribeCodeReviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/codereviews/{CodeReviewArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CodeReviewArn",
    () => input.CodeReviewArn!,
    "{CodeReviewArn}",
    false
  );
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

export const serializeAws_restJson1DescribeRecommendationFeedbackCommand = async (
  input: DescribeRecommendationFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/feedback/{CodeReviewArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CodeReviewArn",
    () => input.CodeReviewArn!,
    "{CodeReviewArn}",
    false
  );
  const query: any = map({
    RecommendationId: [, __expectNonNull(input.RecommendationId!, `RecommendationId`)],
    UserId: [, input.UserId!],
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

export const serializeAws_restJson1DescribeRepositoryAssociationCommand = async (
  input: DescribeRepositoryAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/associations/{AssociationArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AssociationArn",
    () => input.AssociationArn!,
    "{AssociationArn}",
    false
  );
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

export const serializeAws_restJson1DisassociateRepositoryCommand = async (
  input: DisassociateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/associations/{AssociationArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AssociationArn",
    () => input.AssociationArn!,
    "{AssociationArn}",
    false
  );
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

export const serializeAws_restJson1ListCodeReviewsCommand = async (
  input: ListCodeReviewsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/codereviews";
  const query: any = map({
    ProviderTypes: [
      () => input.ProviderTypes !== void 0,
      () => (input.ProviderTypes! || []).map((_entry) => _entry as any),
    ],
    States: [() => input.States !== void 0, () => (input.States! || []).map((_entry) => _entry as any)],
    RepositoryNames: [
      () => input.RepositoryNames !== void 0,
      () => (input.RepositoryNames! || []).map((_entry) => _entry as any),
    ],
    Type: [, __expectNonNull(input.Type!, `Type`)],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    NextToken: [, input.NextToken!],
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

export const serializeAws_restJson1ListRecommendationFeedbackCommand = async (
  input: ListRecommendationFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/feedback/{CodeReviewArn}/RecommendationFeedback";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CodeReviewArn",
    () => input.CodeReviewArn!,
    "{CodeReviewArn}",
    false
  );
  const query: any = map({
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    UserIds: [() => input.UserIds !== void 0, () => (input.UserIds! || []).map((_entry) => _entry as any)],
    RecommendationIds: [
      () => input.RecommendationIds !== void 0,
      () => (input.RecommendationIds! || []).map((_entry) => _entry as any),
    ],
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

export const serializeAws_restJson1ListRecommendationsCommand = async (
  input: ListRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/codereviews/{CodeReviewArn}/Recommendations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CodeReviewArn",
    () => input.CodeReviewArn!,
    "{CodeReviewArn}",
    false
  );
  const query: any = map({
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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

export const serializeAws_restJson1ListRepositoryAssociationsCommand = async (
  input: ListRepositoryAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/associations";
  const query: any = map({
    ProviderType: [
      () => input.ProviderTypes !== void 0,
      () => (input.ProviderTypes! || []).map((_entry) => _entry as any),
    ],
    State: [() => input.States !== void 0, () => (input.States! || []).map((_entry) => _entry as any)],
    Name: [() => input.Names !== void 0, () => (input.Names! || []).map((_entry) => _entry as any)],
    Owner: [() => input.Owners !== void 0, () => (input.Owners! || []).map((_entry) => _entry as any)],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    NextToken: [, input.NextToken!],
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

export const serializeAws_restJson1PutRecommendationFeedbackCommand = async (
  input: PutRecommendationFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/feedback";
  let body: any;
  body = JSON.stringify({
    ...(input.CodeReviewArn != null && { CodeReviewArn: input.CodeReviewArn }),
    ...(input.Reactions != null && { Reactions: serializeAws_restJson1Reactions(input.Reactions, context) }),
    ...(input.RecommendationId != null && { RecommendationId: input.RecommendationId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
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

export const deserializeAws_restJson1AssociateRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateRepositoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateRepositoryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RepositoryAssociation != null) {
    contents.RepositoryAssociation = deserializeAws_restJson1RepositoryAssociation(data.RepositoryAssociation, context);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1AssociateRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codegurureviewer#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
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

export const deserializeAws_restJson1CreateCodeReviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCodeReviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCodeReviewCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CodeReview != null) {
    contents.CodeReview = deserializeAws_restJson1CodeReview(data.CodeReview, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateCodeReviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCodeReviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codegurureviewer#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
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

export const deserializeAws_restJson1DescribeCodeReviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCodeReviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeCodeReviewCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CodeReview != null) {
    contents.CodeReview = deserializeAws_restJson1CodeReview(data.CodeReview, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeCodeReviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCodeReviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
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

export const deserializeAws_restJson1DescribeRecommendationFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecommendationFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRecommendationFeedbackCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RecommendationFeedback != null) {
    contents.RecommendationFeedback = deserializeAws_restJson1RecommendationFeedback(
      data.RecommendationFeedback,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribeRecommendationFeedbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecommendationFeedbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
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

export const deserializeAws_restJson1DescribeRepositoryAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRepositoryAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRepositoryAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RepositoryAssociation != null) {
    contents.RepositoryAssociation = deserializeAws_restJson1RepositoryAssociation(data.RepositoryAssociation, context);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeRepositoryAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRepositoryAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.codegurureviewer#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
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

export const deserializeAws_restJson1DisassociateRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRepositoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateRepositoryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RepositoryAssociation != null) {
    contents.RepositoryAssociation = deserializeAws_restJson1RepositoryAssociation(data.RepositoryAssociation, context);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1DisassociateRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codegurureviewer#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.codegurureviewer#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
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

export const deserializeAws_restJson1ListCodeReviewsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCodeReviewsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCodeReviewsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CodeReviewSummaries != null) {
    contents.CodeReviewSummaries = deserializeAws_restJson1CodeReviewSummaries(data.CodeReviewSummaries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListCodeReviewsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCodeReviewsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
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

export const deserializeAws_restJson1ListRecommendationFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRecommendationFeedbackCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RecommendationFeedbackSummaries != null) {
    contents.RecommendationFeedbackSummaries = deserializeAws_restJson1RecommendationFeedbackSummaries(
      data.RecommendationFeedbackSummaries,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListRecommendationFeedbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationFeedbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
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

export const deserializeAws_restJson1ListRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRecommendationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RecommendationSummaries != null) {
    contents.RecommendationSummaries = deserializeAws_restJson1RecommendationSummaries(
      data.RecommendationSummaries,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
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

export const deserializeAws_restJson1ListRepositoryAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoryAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRepositoryAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RepositoryAssociationSummaries != null) {
    contents.RepositoryAssociationSummaries = deserializeAws_restJson1RepositoryAssociationSummaries(
      data.RepositoryAssociationSummaries,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListRepositoryAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoryAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
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
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
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
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
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

export const deserializeAws_restJson1PutRecommendationFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecommendationFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutRecommendationFeedbackCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutRecommendationFeedbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecommendationFeedbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ConflictException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new NotFoundException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1AnalysisTypes = (input: (AnalysisType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1BranchDiffSourceCodeType = (
  input: BranchDiffSourceCodeType,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationBranchName != null && { DestinationBranchName: input.DestinationBranchName }),
    ...(input.SourceBranchName != null && { SourceBranchName: input.SourceBranchName }),
  };
};

const serializeAws_restJson1CodeArtifacts = (input: CodeArtifacts, context: __SerdeContext): any => {
  return {
    ...(input.BuildArtifactsObjectKey != null && { BuildArtifactsObjectKey: input.BuildArtifactsObjectKey }),
    ...(input.SourceCodeArtifactsObjectKey != null && {
      SourceCodeArtifactsObjectKey: input.SourceCodeArtifactsObjectKey,
    }),
  };
};

const serializeAws_restJson1CodeCommitRepository = (input: CodeCommitRepository, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_restJson1CodeReviewType = (input: CodeReviewType, context: __SerdeContext): any => {
  return {
    ...(input.AnalysisTypes != null && {
      AnalysisTypes: serializeAws_restJson1AnalysisTypes(input.AnalysisTypes, context),
    }),
    ...(input.RepositoryAnalysis != null && {
      RepositoryAnalysis: serializeAws_restJson1RepositoryAnalysis(input.RepositoryAnalysis, context),
    }),
  };
};

const serializeAws_restJson1CommitDiffSourceCodeType = (
  input: CommitDiffSourceCodeType,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationCommit != null && { DestinationCommit: input.DestinationCommit }),
    ...(input.MergeBaseCommit != null && { MergeBaseCommit: input.MergeBaseCommit }),
    ...(input.SourceCommit != null && { SourceCommit: input.SourceCommit }),
  };
};

const serializeAws_restJson1EventInfo = (input: EventInfo, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.State != null && { State: input.State }),
  };
};

const serializeAws_restJson1KMSKeyDetails = (input: KMSKeyDetails, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionOption != null && { EncryptionOption: input.EncryptionOption }),
    ...(input.KMSKeyId != null && { KMSKeyId: input.KMSKeyId }),
  };
};

const serializeAws_restJson1Reactions = (input: (Reaction | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Repository = (input: Repository, context: __SerdeContext): any => {
  return {
    ...(input.Bitbucket != null && {
      Bitbucket: serializeAws_restJson1ThirdPartySourceRepository(input.Bitbucket, context),
    }),
    ...(input.CodeCommit != null && {
      CodeCommit: serializeAws_restJson1CodeCommitRepository(input.CodeCommit, context),
    }),
    ...(input.GitHubEnterpriseServer != null && {
      GitHubEnterpriseServer: serializeAws_restJson1ThirdPartySourceRepository(input.GitHubEnterpriseServer, context),
    }),
    ...(input.S3Bucket != null && { S3Bucket: serializeAws_restJson1S3Repository(input.S3Bucket, context) }),
  };
};

const serializeAws_restJson1RepositoryAnalysis = (input: RepositoryAnalysis, context: __SerdeContext): any => {
  return {
    ...(input.RepositoryHead != null && {
      RepositoryHead: serializeAws_restJson1RepositoryHeadSourceCodeType(input.RepositoryHead, context),
    }),
    ...(input.SourceCodeType != null && {
      SourceCodeType: serializeAws_restJson1SourceCodeType(input.SourceCodeType, context),
    }),
  };
};

const serializeAws_restJson1RepositoryHeadSourceCodeType = (
  input: RepositoryHeadSourceCodeType,
  context: __SerdeContext
): any => {
  return {
    ...(input.BranchName != null && { BranchName: input.BranchName }),
  };
};

const serializeAws_restJson1RequestMetadata = (input: RequestMetadata, context: __SerdeContext): any => {
  return {
    ...(input.EventInfo != null && { EventInfo: serializeAws_restJson1EventInfo(input.EventInfo, context) }),
    ...(input.RequestId != null && { RequestId: input.RequestId }),
    ...(input.Requester != null && { Requester: input.Requester }),
    ...(input.VendorName != null && { VendorName: input.VendorName }),
  };
};

const serializeAws_restJson1S3BucketRepository = (input: S3BucketRepository, context: __SerdeContext): any => {
  return {
    ...(input.Details != null && { Details: serializeAws_restJson1S3RepositoryDetails(input.Details, context) }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_restJson1S3Repository = (input: S3Repository, context: __SerdeContext): any => {
  return {
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_restJson1S3RepositoryDetails = (input: S3RepositoryDetails, context: __SerdeContext): any => {
  return {
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.CodeArtifacts != null && {
      CodeArtifacts: serializeAws_restJson1CodeArtifacts(input.CodeArtifacts, context),
    }),
  };
};

const serializeAws_restJson1SourceCodeType = (input: SourceCodeType, context: __SerdeContext): any => {
  return {
    ...(input.BranchDiff != null && {
      BranchDiff: serializeAws_restJson1BranchDiffSourceCodeType(input.BranchDiff, context),
    }),
    ...(input.CommitDiff != null && {
      CommitDiff: serializeAws_restJson1CommitDiffSourceCodeType(input.CommitDiff, context),
    }),
    ...(input.RepositoryHead != null && {
      RepositoryHead: serializeAws_restJson1RepositoryHeadSourceCodeType(input.RepositoryHead, context),
    }),
    ...(input.RequestMetadata != null && {
      RequestMetadata: serializeAws_restJson1RequestMetadata(input.RequestMetadata, context),
    }),
    ...(input.S3BucketRepository != null && {
      S3BucketRepository: serializeAws_restJson1S3BucketRepository(input.S3BucketRepository, context),
    }),
  };
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

const serializeAws_restJson1ThirdPartySourceRepository = (
  input: ThirdPartySourceRepository,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConnectionArn != null && { ConnectionArn: input.ConnectionArn }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Owner != null && { Owner: input.Owner }),
  };
};

const deserializeAws_restJson1AnalysisTypes = (output: any, context: __SerdeContext): (AnalysisType | string)[] => {
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

const deserializeAws_restJson1BranchDiffSourceCodeType = (
  output: any,
  context: __SerdeContext
): BranchDiffSourceCodeType => {
  return {
    DestinationBranchName: __expectString(output.DestinationBranchName),
    SourceBranchName: __expectString(output.SourceBranchName),
  } as any;
};

const deserializeAws_restJson1CodeArtifacts = (output: any, context: __SerdeContext): CodeArtifacts => {
  return {
    BuildArtifactsObjectKey: __expectString(output.BuildArtifactsObjectKey),
    SourceCodeArtifactsObjectKey: __expectString(output.SourceCodeArtifactsObjectKey),
  } as any;
};

const deserializeAws_restJson1CodeReview = (output: any, context: __SerdeContext): CodeReview => {
  return {
    AnalysisTypes:
      output.AnalysisTypes != null ? deserializeAws_restJson1AnalysisTypes(output.AnalysisTypes, context) : undefined,
    AssociationArn: __expectString(output.AssociationArn),
    CodeReviewArn: __expectString(output.CodeReviewArn),
    ConfigFileState: __expectString(output.ConfigFileState),
    CreatedTimeStamp:
      output.CreatedTimeStamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimeStamp)))
        : undefined,
    LastUpdatedTimeStamp:
      output.LastUpdatedTimeStamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimeStamp)))
        : undefined,
    Metrics: output.Metrics != null ? deserializeAws_restJson1Metrics(output.Metrics, context) : undefined,
    Name: __expectString(output.Name),
    Owner: __expectString(output.Owner),
    ProviderType: __expectString(output.ProviderType),
    PullRequestId: __expectString(output.PullRequestId),
    RepositoryName: __expectString(output.RepositoryName),
    SourceCodeType:
      output.SourceCodeType != null
        ? deserializeAws_restJson1SourceCodeType(output.SourceCodeType, context)
        : undefined,
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1CodeReviewSummaries = (output: any, context: __SerdeContext): CodeReviewSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CodeReviewSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CodeReviewSummary = (output: any, context: __SerdeContext): CodeReviewSummary => {
  return {
    CodeReviewArn: __expectString(output.CodeReviewArn),
    CreatedTimeStamp:
      output.CreatedTimeStamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimeStamp)))
        : undefined,
    LastUpdatedTimeStamp:
      output.LastUpdatedTimeStamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimeStamp)))
        : undefined,
    MetricsSummary:
      output.MetricsSummary != null
        ? deserializeAws_restJson1MetricsSummary(output.MetricsSummary, context)
        : undefined,
    Name: __expectString(output.Name),
    Owner: __expectString(output.Owner),
    ProviderType: __expectString(output.ProviderType),
    PullRequestId: __expectString(output.PullRequestId),
    RepositoryName: __expectString(output.RepositoryName),
    SourceCodeType:
      output.SourceCodeType != null
        ? deserializeAws_restJson1SourceCodeType(output.SourceCodeType, context)
        : undefined,
    State: __expectString(output.State),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1CommitDiffSourceCodeType = (
  output: any,
  context: __SerdeContext
): CommitDiffSourceCodeType => {
  return {
    DestinationCommit: __expectString(output.DestinationCommit),
    MergeBaseCommit: __expectString(output.MergeBaseCommit),
    SourceCommit: __expectString(output.SourceCommit),
  } as any;
};

const deserializeAws_restJson1EventInfo = (output: any, context: __SerdeContext): EventInfo => {
  return {
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1KMSKeyDetails = (output: any, context: __SerdeContext): KMSKeyDetails => {
  return {
    EncryptionOption: __expectString(output.EncryptionOption),
    KMSKeyId: __expectString(output.KMSKeyId),
  } as any;
};

const deserializeAws_restJson1Metrics = (output: any, context: __SerdeContext): Metrics => {
  return {
    FindingsCount: __expectLong(output.FindingsCount),
    MeteredLinesOfCodeCount: __expectLong(output.MeteredLinesOfCodeCount),
    SuppressedLinesOfCodeCount: __expectLong(output.SuppressedLinesOfCodeCount),
  } as any;
};

const deserializeAws_restJson1MetricsSummary = (output: any, context: __SerdeContext): MetricsSummary => {
  return {
    FindingsCount: __expectLong(output.FindingsCount),
    MeteredLinesOfCodeCount: __expectLong(output.MeteredLinesOfCodeCount),
    SuppressedLinesOfCodeCount: __expectLong(output.SuppressedLinesOfCodeCount),
  } as any;
};

const deserializeAws_restJson1Reactions = (output: any, context: __SerdeContext): (Reaction | string)[] => {
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

const deserializeAws_restJson1RecommendationFeedback = (
  output: any,
  context: __SerdeContext
): RecommendationFeedback => {
  return {
    CodeReviewArn: __expectString(output.CodeReviewArn),
    CreatedTimeStamp:
      output.CreatedTimeStamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimeStamp)))
        : undefined,
    LastUpdatedTimeStamp:
      output.LastUpdatedTimeStamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimeStamp)))
        : undefined,
    Reactions: output.Reactions != null ? deserializeAws_restJson1Reactions(output.Reactions, context) : undefined,
    RecommendationId: __expectString(output.RecommendationId),
    UserId: __expectString(output.UserId),
  } as any;
};

const deserializeAws_restJson1RecommendationFeedbackSummaries = (
  output: any,
  context: __SerdeContext
): RecommendationFeedbackSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecommendationFeedbackSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RecommendationFeedbackSummary = (
  output: any,
  context: __SerdeContext
): RecommendationFeedbackSummary => {
  return {
    Reactions: output.Reactions != null ? deserializeAws_restJson1Reactions(output.Reactions, context) : undefined,
    RecommendationId: __expectString(output.RecommendationId),
    UserId: __expectString(output.UserId),
  } as any;
};

const deserializeAws_restJson1RecommendationSummaries = (
  output: any,
  context: __SerdeContext
): RecommendationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecommendationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RecommendationSummary = (output: any, context: __SerdeContext): RecommendationSummary => {
  return {
    Description: __expectString(output.Description),
    EndLine: __expectInt32(output.EndLine),
    FilePath: __expectString(output.FilePath),
    RecommendationCategory: __expectString(output.RecommendationCategory),
    RecommendationId: __expectString(output.RecommendationId),
    RuleMetadata:
      output.RuleMetadata != null ? deserializeAws_restJson1RuleMetadata(output.RuleMetadata, context) : undefined,
    Severity: __expectString(output.Severity),
    StartLine: __expectInt32(output.StartLine),
  } as any;
};

const deserializeAws_restJson1RepositoryAssociation = (output: any, context: __SerdeContext): RepositoryAssociation => {
  return {
    AssociationArn: __expectString(output.AssociationArn),
    AssociationId: __expectString(output.AssociationId),
    ConnectionArn: __expectString(output.ConnectionArn),
    CreatedTimeStamp:
      output.CreatedTimeStamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimeStamp)))
        : undefined,
    KMSKeyDetails:
      output.KMSKeyDetails != null ? deserializeAws_restJson1KMSKeyDetails(output.KMSKeyDetails, context) : undefined,
    LastUpdatedTimeStamp:
      output.LastUpdatedTimeStamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimeStamp)))
        : undefined,
    Name: __expectString(output.Name),
    Owner: __expectString(output.Owner),
    ProviderType: __expectString(output.ProviderType),
    S3RepositoryDetails:
      output.S3RepositoryDetails != null
        ? deserializeAws_restJson1S3RepositoryDetails(output.S3RepositoryDetails, context)
        : undefined,
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
  } as any;
};

const deserializeAws_restJson1RepositoryAssociationSummaries = (
  output: any,
  context: __SerdeContext
): RepositoryAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RepositoryAssociationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RepositoryAssociationSummary = (
  output: any,
  context: __SerdeContext
): RepositoryAssociationSummary => {
  return {
    AssociationArn: __expectString(output.AssociationArn),
    AssociationId: __expectString(output.AssociationId),
    ConnectionArn: __expectString(output.ConnectionArn),
    LastUpdatedTimeStamp:
      output.LastUpdatedTimeStamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimeStamp)))
        : undefined,
    Name: __expectString(output.Name),
    Owner: __expectString(output.Owner),
    ProviderType: __expectString(output.ProviderType),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1RepositoryHeadSourceCodeType = (
  output: any,
  context: __SerdeContext
): RepositoryHeadSourceCodeType => {
  return {
    BranchName: __expectString(output.BranchName),
  } as any;
};

const deserializeAws_restJson1RequestMetadata = (output: any, context: __SerdeContext): RequestMetadata => {
  return {
    EventInfo: output.EventInfo != null ? deserializeAws_restJson1EventInfo(output.EventInfo, context) : undefined,
    RequestId: __expectString(output.RequestId),
    Requester: __expectString(output.Requester),
    VendorName: __expectString(output.VendorName),
  } as any;
};

const deserializeAws_restJson1RuleMetadata = (output: any, context: __SerdeContext): RuleMetadata => {
  return {
    LongDescription: __expectString(output.LongDescription),
    RuleId: __expectString(output.RuleId),
    RuleName: __expectString(output.RuleName),
    RuleTags: output.RuleTags != null ? deserializeAws_restJson1RuleTags(output.RuleTags, context) : undefined,
    ShortDescription: __expectString(output.ShortDescription),
  } as any;
};

const deserializeAws_restJson1RuleTags = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1S3BucketRepository = (output: any, context: __SerdeContext): S3BucketRepository => {
  return {
    Details: output.Details != null ? deserializeAws_restJson1S3RepositoryDetails(output.Details, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1S3RepositoryDetails = (output: any, context: __SerdeContext): S3RepositoryDetails => {
  return {
    BucketName: __expectString(output.BucketName),
    CodeArtifacts:
      output.CodeArtifacts != null ? deserializeAws_restJson1CodeArtifacts(output.CodeArtifacts, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SourceCodeType = (output: any, context: __SerdeContext): SourceCodeType => {
  return {
    BranchDiff:
      output.BranchDiff != null
        ? deserializeAws_restJson1BranchDiffSourceCodeType(output.BranchDiff, context)
        : undefined,
    CommitDiff:
      output.CommitDiff != null
        ? deserializeAws_restJson1CommitDiffSourceCodeType(output.CommitDiff, context)
        : undefined,
    RepositoryHead:
      output.RepositoryHead != null
        ? deserializeAws_restJson1RepositoryHeadSourceCodeType(output.RepositoryHead, context)
        : undefined,
    RequestMetadata:
      output.RequestMetadata != null
        ? deserializeAws_restJson1RequestMetadata(output.RequestMetadata, context)
        : undefined,
    S3BucketRepository:
      output.S3BucketRepository != null
        ? deserializeAws_restJson1S3BucketRepository(output.S3BucketRepository, context)
        : undefined,
  } as any;
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
