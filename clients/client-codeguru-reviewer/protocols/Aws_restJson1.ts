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
  S3BucketRepository,
  S3Repository,
  S3RepositoryDetails,
  SourceCodeType,
  ThirdPartySourceRepository,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restJson1AssociateRepositoryCommand = async (
  input: AssociateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/associations";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.KMSKeyDetails !== undefined &&
      input.KMSKeyDetails !== null && {
        KMSKeyDetails: serializeAws_restJson1KMSKeyDetails(input.KMSKeyDetails, context),
      }),
    ...(input.Repository !== undefined &&
      input.Repository !== null && { Repository: serializeAws_restJson1Repository(input.Repository, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/codereviews";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RepositoryAssociationArn !== undefined &&
      input.RepositoryAssociationArn !== null && { RepositoryAssociationArn: input.RepositoryAssociationArn }),
    ...(input.Type !== undefined &&
      input.Type !== null && { Type: serializeAws_restJson1CodeReviewType(input.Type, context) }),
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
  if (input.CodeReviewArn !== undefined) {
    const labelValue: string = input.CodeReviewArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CodeReviewArn.");
    }
    resolvedPath = resolvedPath.replace("{CodeReviewArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CodeReviewArn.");
  }
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
  if (input.CodeReviewArn !== undefined) {
    const labelValue: string = input.CodeReviewArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CodeReviewArn.");
    }
    resolvedPath = resolvedPath.replace("{CodeReviewArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CodeReviewArn.");
  }
  const query: any = {
    ...(input.RecommendationId !== undefined && { RecommendationId: input.RecommendationId }),
    ...(input.UserId !== undefined && { UserId: input.UserId }),
  };
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
  if (input.AssociationArn !== undefined) {
    const labelValue: string = input.AssociationArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AssociationArn.");
    }
    resolvedPath = resolvedPath.replace("{AssociationArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AssociationArn.");
  }
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
  if (input.AssociationArn !== undefined) {
    const labelValue: string = input.AssociationArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AssociationArn.");
    }
    resolvedPath = resolvedPath.replace("{AssociationArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AssociationArn.");
  }
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/codereviews";
  const query: any = {
    ...(input.ProviderTypes !== undefined && {
      ProviderTypes: (input.ProviderTypes || []).map((_entry) => _entry as any),
    }),
    ...(input.States !== undefined && { States: (input.States || []).map((_entry) => _entry as any) }),
    ...(input.RepositoryNames !== undefined && {
      RepositoryNames: (input.RepositoryNames || []).map((_entry) => _entry as any),
    }),
    ...(input.Type !== undefined && { Type: input.Type }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
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
  if (input.CodeReviewArn !== undefined) {
    const labelValue: string = input.CodeReviewArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CodeReviewArn.");
    }
    resolvedPath = resolvedPath.replace("{CodeReviewArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CodeReviewArn.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.UserIds !== undefined && { UserIds: (input.UserIds || []).map((_entry) => _entry as any) }),
    ...(input.RecommendationIds !== undefined && {
      RecommendationIds: (input.RecommendationIds || []).map((_entry) => _entry as any),
    }),
  };
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
  if (input.CodeReviewArn !== undefined) {
    const labelValue: string = input.CodeReviewArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CodeReviewArn.");
    }
    resolvedPath = resolvedPath.replace("{CodeReviewArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CodeReviewArn.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
  };
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/associations";
  const query: any = {
    ...(input.ProviderTypes !== undefined && {
      ProviderType: (input.ProviderTypes || []).map((_entry) => _entry as any),
    }),
    ...(input.States !== undefined && { State: (input.States || []).map((_entry) => _entry as any) }),
    ...(input.Names !== undefined && { Name: (input.Names || []).map((_entry) => _entry as any) }),
    ...(input.Owners !== undefined && { Owner: (input.Owners || []).map((_entry) => _entry as any) }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
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
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/feedback";
  let body: any;
  body = JSON.stringify({
    ...(input.CodeReviewArn !== undefined && input.CodeReviewArn !== null && { CodeReviewArn: input.CodeReviewArn }),
    ...(input.Reactions !== undefined &&
      input.Reactions !== null && { Reactions: serializeAws_restJson1Reactions(input.Reactions, context) }),
    ...(input.RecommendationId !== undefined &&
      input.RecommendationId !== null && { RecommendationId: input.RecommendationId }),
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
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry as any) }),
  };
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
  const contents: AssociateRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    RepositoryAssociation: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RepositoryAssociation !== undefined && data.RepositoryAssociation !== null) {
    contents.RepositoryAssociation = deserializeAws_restJson1RepositoryAssociation(data.RepositoryAssociation, context);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AssociateRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.codegurureviewer#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateCodeReviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCodeReviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCodeReviewCommandError(output, context);
  }
  const contents: CreateCodeReviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    CodeReview: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CodeReview !== undefined && data.CodeReview !== null) {
    contents.CodeReview = deserializeAws_restJson1CodeReview(data.CodeReview, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateCodeReviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCodeReviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.codegurureviewer#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeCodeReviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCodeReviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeCodeReviewCommandError(output, context);
  }
  const contents: DescribeCodeReviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    CodeReview: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CodeReview !== undefined && data.CodeReview !== null) {
    contents.CodeReview = deserializeAws_restJson1CodeReview(data.CodeReview, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeCodeReviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCodeReviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeRecommendationFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecommendationFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRecommendationFeedbackCommandError(output, context);
  }
  const contents: DescribeRecommendationFeedbackCommandOutput = {
    $metadata: deserializeMetadata(output),
    RecommendationFeedback: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RecommendationFeedback !== undefined && data.RecommendationFeedback !== null) {
    contents.RecommendationFeedback = deserializeAws_restJson1RecommendationFeedback(
      data.RecommendationFeedback,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeRecommendationFeedbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecommendationFeedbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeRepositoryAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRepositoryAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRepositoryAssociationCommandError(output, context);
  }
  const contents: DescribeRepositoryAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    RepositoryAssociation: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RepositoryAssociation !== undefined && data.RepositoryAssociation !== null) {
    contents.RepositoryAssociation = deserializeAws_restJson1RepositoryAssociation(data.RepositoryAssociation, context);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeRepositoryAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRepositoryAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.codegurureviewer#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisassociateRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRepositoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateRepositoryCommandError(output, context);
  }
  const contents: DisassociateRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    RepositoryAssociation: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RepositoryAssociation !== undefined && data.RepositoryAssociation !== null) {
    contents.RepositoryAssociation = deserializeAws_restJson1RepositoryAssociation(data.RepositoryAssociation, context);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.codegurureviewer#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.codegurureviewer#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListCodeReviewsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCodeReviewsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCodeReviewsCommandError(output, context);
  }
  const contents: ListCodeReviewsCommandOutput = {
    $metadata: deserializeMetadata(output),
    CodeReviewSummaries: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CodeReviewSummaries !== undefined && data.CodeReviewSummaries !== null) {
    contents.CodeReviewSummaries = deserializeAws_restJson1CodeReviewSummaries(data.CodeReviewSummaries, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListCodeReviewsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCodeReviewsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListRecommendationFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRecommendationFeedbackCommandError(output, context);
  }
  const contents: ListRecommendationFeedbackCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    RecommendationFeedbackSummaries: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RecommendationFeedbackSummaries !== undefined && data.RecommendationFeedbackSummaries !== null) {
    contents.RecommendationFeedbackSummaries = deserializeAws_restJson1RecommendationFeedbackSummaries(
      data.RecommendationFeedbackSummaries,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListRecommendationFeedbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationFeedbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRecommendationsCommandError(output, context);
  }
  const contents: ListRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    RecommendationSummaries: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RecommendationSummaries !== undefined && data.RecommendationSummaries !== null) {
    contents.RecommendationSummaries = deserializeAws_restJson1RecommendationSummaries(
      data.RecommendationSummaries,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListRepositoryAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoryAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRepositoryAssociationsCommandError(output, context);
  }
  const contents: ListRepositoryAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    RepositoryAssociationSummaries: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RepositoryAssociationSummaries !== undefined && data.RepositoryAssociationSummaries !== null) {
    contents.RepositoryAssociationSummaries = deserializeAws_restJson1RepositoryAssociationSummaries(
      data.RepositoryAssociationSummaries,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListRepositoryAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoryAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PutRecommendationFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecommendationFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutRecommendationFeedbackCommandError(output, context);
  }
  const contents: PutRecommendationFeedbackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutRecommendationFeedbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecommendationFeedbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const serializeAws_restJson1AnalysisTypes = (input: (AnalysisType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1BranchDiffSourceCodeType = (
  input: BranchDiffSourceCodeType,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationBranchName !== undefined &&
      input.DestinationBranchName !== null && { DestinationBranchName: input.DestinationBranchName }),
    ...(input.SourceBranchName !== undefined &&
      input.SourceBranchName !== null && { SourceBranchName: input.SourceBranchName }),
  };
};

const serializeAws_restJson1CodeArtifacts = (input: CodeArtifacts, context: __SerdeContext): any => {
  return {
    ...(input.BuildArtifactsObjectKey !== undefined &&
      input.BuildArtifactsObjectKey !== null && { BuildArtifactsObjectKey: input.BuildArtifactsObjectKey }),
    ...(input.SourceCodeArtifactsObjectKey !== undefined &&
      input.SourceCodeArtifactsObjectKey !== null && {
        SourceCodeArtifactsObjectKey: input.SourceCodeArtifactsObjectKey,
      }),
  };
};

const serializeAws_restJson1CodeCommitRepository = (input: CodeCommitRepository, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_restJson1CodeReviewType = (input: CodeReviewType, context: __SerdeContext): any => {
  return {
    ...(input.AnalysisTypes !== undefined &&
      input.AnalysisTypes !== null && {
        AnalysisTypes: serializeAws_restJson1AnalysisTypes(input.AnalysisTypes, context),
      }),
    ...(input.RepositoryAnalysis !== undefined &&
      input.RepositoryAnalysis !== null && {
        RepositoryAnalysis: serializeAws_restJson1RepositoryAnalysis(input.RepositoryAnalysis, context),
      }),
  };
};

const serializeAws_restJson1CommitDiffSourceCodeType = (
  input: CommitDiffSourceCodeType,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationCommit !== undefined &&
      input.DestinationCommit !== null && { DestinationCommit: input.DestinationCommit }),
    ...(input.MergeBaseCommit !== undefined &&
      input.MergeBaseCommit !== null && { MergeBaseCommit: input.MergeBaseCommit }),
    ...(input.SourceCommit !== undefined && input.SourceCommit !== null && { SourceCommit: input.SourceCommit }),
  };
};

const serializeAws_restJson1EventInfo = (input: EventInfo, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.State !== undefined && input.State !== null && { State: input.State }),
  };
};

const serializeAws_restJson1KMSKeyDetails = (input: KMSKeyDetails, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionOption !== undefined &&
      input.EncryptionOption !== null && { EncryptionOption: input.EncryptionOption }),
    ...(input.KMSKeyId !== undefined && input.KMSKeyId !== null && { KMSKeyId: input.KMSKeyId }),
  };
};

const serializeAws_restJson1Reactions = (input: (Reaction | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Repository = (input: Repository, context: __SerdeContext): any => {
  return {
    ...(input.Bitbucket !== undefined &&
      input.Bitbucket !== null && {
        Bitbucket: serializeAws_restJson1ThirdPartySourceRepository(input.Bitbucket, context),
      }),
    ...(input.CodeCommit !== undefined &&
      input.CodeCommit !== null && {
        CodeCommit: serializeAws_restJson1CodeCommitRepository(input.CodeCommit, context),
      }),
    ...(input.GitHubEnterpriseServer !== undefined &&
      input.GitHubEnterpriseServer !== null && {
        GitHubEnterpriseServer: serializeAws_restJson1ThirdPartySourceRepository(input.GitHubEnterpriseServer, context),
      }),
    ...(input.S3Bucket !== undefined &&
      input.S3Bucket !== null && { S3Bucket: serializeAws_restJson1S3Repository(input.S3Bucket, context) }),
  };
};

const serializeAws_restJson1RepositoryAnalysis = (input: RepositoryAnalysis, context: __SerdeContext): any => {
  return {
    ...(input.RepositoryHead !== undefined &&
      input.RepositoryHead !== null && {
        RepositoryHead: serializeAws_restJson1RepositoryHeadSourceCodeType(input.RepositoryHead, context),
      }),
    ...(input.SourceCodeType !== undefined &&
      input.SourceCodeType !== null && {
        SourceCodeType: serializeAws_restJson1SourceCodeType(input.SourceCodeType, context),
      }),
  };
};

const serializeAws_restJson1RepositoryHeadSourceCodeType = (
  input: RepositoryHeadSourceCodeType,
  context: __SerdeContext
): any => {
  return {
    ...(input.BranchName !== undefined && input.BranchName !== null && { BranchName: input.BranchName }),
  };
};

const serializeAws_restJson1RequestMetadata = (input: RequestMetadata, context: __SerdeContext): any => {
  return {
    ...(input.EventInfo !== undefined &&
      input.EventInfo !== null && { EventInfo: serializeAws_restJson1EventInfo(input.EventInfo, context) }),
    ...(input.RequestId !== undefined && input.RequestId !== null && { RequestId: input.RequestId }),
    ...(input.Requester !== undefined && input.Requester !== null && { Requester: input.Requester }),
    ...(input.VendorName !== undefined && input.VendorName !== null && { VendorName: input.VendorName }),
  };
};

const serializeAws_restJson1S3BucketRepository = (input: S3BucketRepository, context: __SerdeContext): any => {
  return {
    ...(input.Details !== undefined &&
      input.Details !== null && { Details: serializeAws_restJson1S3RepositoryDetails(input.Details, context) }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_restJson1S3Repository = (input: S3Repository, context: __SerdeContext): any => {
  return {
    ...(input.BucketName !== undefined && input.BucketName !== null && { BucketName: input.BucketName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_restJson1S3RepositoryDetails = (input: S3RepositoryDetails, context: __SerdeContext): any => {
  return {
    ...(input.BucketName !== undefined && input.BucketName !== null && { BucketName: input.BucketName }),
    ...(input.CodeArtifacts !== undefined &&
      input.CodeArtifacts !== null && {
        CodeArtifacts: serializeAws_restJson1CodeArtifacts(input.CodeArtifacts, context),
      }),
  };
};

const serializeAws_restJson1SourceCodeType = (input: SourceCodeType, context: __SerdeContext): any => {
  return {
    ...(input.BranchDiff !== undefined &&
      input.BranchDiff !== null && {
        BranchDiff: serializeAws_restJson1BranchDiffSourceCodeType(input.BranchDiff, context),
      }),
    ...(input.CommitDiff !== undefined &&
      input.CommitDiff !== null && {
        CommitDiff: serializeAws_restJson1CommitDiffSourceCodeType(input.CommitDiff, context),
      }),
    ...(input.RepositoryHead !== undefined &&
      input.RepositoryHead !== null && {
        RepositoryHead: serializeAws_restJson1RepositoryHeadSourceCodeType(input.RepositoryHead, context),
      }),
    ...(input.RequestMetadata !== undefined &&
      input.RequestMetadata !== null && {
        RequestMetadata: serializeAws_restJson1RequestMetadata(input.RequestMetadata, context),
      }),
    ...(input.S3BucketRepository !== undefined &&
      input.S3BucketRepository !== null && {
        S3BucketRepository: serializeAws_restJson1S3BucketRepository(input.S3BucketRepository, context),
      }),
  };
};

const serializeAws_restJson1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1ThirdPartySourceRepository = (
  input: ThirdPartySourceRepository,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConnectionArn !== undefined && input.ConnectionArn !== null && { ConnectionArn: input.ConnectionArn }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Owner !== undefined && input.Owner !== null && { Owner: input.Owner }),
  };
};

const deserializeAws_restJson1AnalysisTypes = (output: any, context: __SerdeContext): (AnalysisType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
      output.AnalysisTypes !== undefined && output.AnalysisTypes !== null
        ? deserializeAws_restJson1AnalysisTypes(output.AnalysisTypes, context)
        : undefined,
    AssociationArn: __expectString(output.AssociationArn),
    CodeReviewArn: __expectString(output.CodeReviewArn),
    CreatedTimeStamp:
      output.CreatedTimeStamp !== undefined && output.CreatedTimeStamp !== null
        ? new Date(Math.round(output.CreatedTimeStamp * 1000))
        : undefined,
    LastUpdatedTimeStamp:
      output.LastUpdatedTimeStamp !== undefined && output.LastUpdatedTimeStamp !== null
        ? new Date(Math.round(output.LastUpdatedTimeStamp * 1000))
        : undefined,
    Metrics:
      output.Metrics !== undefined && output.Metrics !== null
        ? deserializeAws_restJson1Metrics(output.Metrics, context)
        : undefined,
    Name: __expectString(output.Name),
    Owner: __expectString(output.Owner),
    ProviderType: __expectString(output.ProviderType),
    PullRequestId: __expectString(output.PullRequestId),
    RepositoryName: __expectString(output.RepositoryName),
    SourceCodeType:
      output.SourceCodeType !== undefined && output.SourceCodeType !== null
        ? deserializeAws_restJson1SourceCodeType(output.SourceCodeType, context)
        : undefined,
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1CodeReviewSummaries = (output: any, context: __SerdeContext): CodeReviewSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CodeReviewSummary(entry, context);
    });
};

const deserializeAws_restJson1CodeReviewSummary = (output: any, context: __SerdeContext): CodeReviewSummary => {
  return {
    CodeReviewArn: __expectString(output.CodeReviewArn),
    CreatedTimeStamp:
      output.CreatedTimeStamp !== undefined && output.CreatedTimeStamp !== null
        ? new Date(Math.round(output.CreatedTimeStamp * 1000))
        : undefined,
    LastUpdatedTimeStamp:
      output.LastUpdatedTimeStamp !== undefined && output.LastUpdatedTimeStamp !== null
        ? new Date(Math.round(output.LastUpdatedTimeStamp * 1000))
        : undefined,
    MetricsSummary:
      output.MetricsSummary !== undefined && output.MetricsSummary !== null
        ? deserializeAws_restJson1MetricsSummary(output.MetricsSummary, context)
        : undefined,
    Name: __expectString(output.Name),
    Owner: __expectString(output.Owner),
    ProviderType: __expectString(output.ProviderType),
    PullRequestId: __expectString(output.PullRequestId),
    RepositoryName: __expectString(output.RepositoryName),
    SourceCodeType:
      output.SourceCodeType !== undefined && output.SourceCodeType !== null
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
  } as any;
};

const deserializeAws_restJson1MetricsSummary = (output: any, context: __SerdeContext): MetricsSummary => {
  return {
    FindingsCount: __expectLong(output.FindingsCount),
    MeteredLinesOfCodeCount: __expectLong(output.MeteredLinesOfCodeCount),
  } as any;
};

const deserializeAws_restJson1Reactions = (output: any, context: __SerdeContext): (Reaction | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1RecommendationFeedback = (
  output: any,
  context: __SerdeContext
): RecommendationFeedback => {
  return {
    CodeReviewArn: __expectString(output.CodeReviewArn),
    CreatedTimeStamp:
      output.CreatedTimeStamp !== undefined && output.CreatedTimeStamp !== null
        ? new Date(Math.round(output.CreatedTimeStamp * 1000))
        : undefined,
    LastUpdatedTimeStamp:
      output.LastUpdatedTimeStamp !== undefined && output.LastUpdatedTimeStamp !== null
        ? new Date(Math.round(output.LastUpdatedTimeStamp * 1000))
        : undefined,
    Reactions:
      output.Reactions !== undefined && output.Reactions !== null
        ? deserializeAws_restJson1Reactions(output.Reactions, context)
        : undefined,
    RecommendationId: __expectString(output.RecommendationId),
    UserId: __expectString(output.UserId),
  } as any;
};

const deserializeAws_restJson1RecommendationFeedbackSummaries = (
  output: any,
  context: __SerdeContext
): RecommendationFeedbackSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecommendationFeedbackSummary(entry, context);
    });
};

const deserializeAws_restJson1RecommendationFeedbackSummary = (
  output: any,
  context: __SerdeContext
): RecommendationFeedbackSummary => {
  return {
    Reactions:
      output.Reactions !== undefined && output.Reactions !== null
        ? deserializeAws_restJson1Reactions(output.Reactions, context)
        : undefined,
    RecommendationId: __expectString(output.RecommendationId),
    UserId: __expectString(output.UserId),
  } as any;
};

const deserializeAws_restJson1RecommendationSummaries = (
  output: any,
  context: __SerdeContext
): RecommendationSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecommendationSummary(entry, context);
    });
};

const deserializeAws_restJson1RecommendationSummary = (output: any, context: __SerdeContext): RecommendationSummary => {
  return {
    Description: __expectString(output.Description),
    EndLine: __expectInt32(output.EndLine),
    FilePath: __expectString(output.FilePath),
    RecommendationCategory: __expectString(output.RecommendationCategory),
    RecommendationId: __expectString(output.RecommendationId),
    StartLine: __expectInt32(output.StartLine),
  } as any;
};

const deserializeAws_restJson1RepositoryAssociation = (output: any, context: __SerdeContext): RepositoryAssociation => {
  return {
    AssociationArn: __expectString(output.AssociationArn),
    AssociationId: __expectString(output.AssociationId),
    ConnectionArn: __expectString(output.ConnectionArn),
    CreatedTimeStamp:
      output.CreatedTimeStamp !== undefined && output.CreatedTimeStamp !== null
        ? new Date(Math.round(output.CreatedTimeStamp * 1000))
        : undefined,
    KMSKeyDetails:
      output.KMSKeyDetails !== undefined && output.KMSKeyDetails !== null
        ? deserializeAws_restJson1KMSKeyDetails(output.KMSKeyDetails, context)
        : undefined,
    LastUpdatedTimeStamp:
      output.LastUpdatedTimeStamp !== undefined && output.LastUpdatedTimeStamp !== null
        ? new Date(Math.round(output.LastUpdatedTimeStamp * 1000))
        : undefined,
    Name: __expectString(output.Name),
    Owner: __expectString(output.Owner),
    ProviderType: __expectString(output.ProviderType),
    S3RepositoryDetails:
      output.S3RepositoryDetails !== undefined && output.S3RepositoryDetails !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RepositoryAssociationSummary(entry, context);
    });
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
      output.LastUpdatedTimeStamp !== undefined && output.LastUpdatedTimeStamp !== null
        ? new Date(Math.round(output.LastUpdatedTimeStamp * 1000))
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
    EventInfo:
      output.EventInfo !== undefined && output.EventInfo !== null
        ? deserializeAws_restJson1EventInfo(output.EventInfo, context)
        : undefined,
    RequestId: __expectString(output.RequestId),
    Requester: __expectString(output.Requester),
    VendorName: __expectString(output.VendorName),
  } as any;
};

const deserializeAws_restJson1S3BucketRepository = (output: any, context: __SerdeContext): S3BucketRepository => {
  return {
    Details:
      output.Details !== undefined && output.Details !== null
        ? deserializeAws_restJson1S3RepositoryDetails(output.Details, context)
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1S3RepositoryDetails = (output: any, context: __SerdeContext): S3RepositoryDetails => {
  return {
    BucketName: __expectString(output.BucketName),
    CodeArtifacts:
      output.CodeArtifacts !== undefined && output.CodeArtifacts !== null
        ? deserializeAws_restJson1CodeArtifacts(output.CodeArtifacts, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SourceCodeType = (output: any, context: __SerdeContext): SourceCodeType => {
  return {
    BranchDiff:
      output.BranchDiff !== undefined && output.BranchDiff !== null
        ? deserializeAws_restJson1BranchDiffSourceCodeType(output.BranchDiff, context)
        : undefined,
    CommitDiff:
      output.CommitDiff !== undefined && output.CommitDiff !== null
        ? deserializeAws_restJson1CommitDiffSourceCodeType(output.CommitDiff, context)
        : undefined,
    RepositoryHead:
      output.RepositoryHead !== undefined && output.RepositoryHead !== null
        ? deserializeAws_restJson1RepositoryHeadSourceCodeType(output.RepositoryHead, context)
        : undefined,
    RequestMetadata:
      output.RequestMetadata !== undefined && output.RequestMetadata !== null
        ? deserializeAws_restJson1RequestMetadata(output.RequestMetadata, context)
        : undefined,
    S3BucketRepository:
      output.S3BucketRepository !== undefined && output.S3BucketRepository !== null
        ? deserializeAws_restJson1S3BucketRepository(output.S3BucketRepository, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
