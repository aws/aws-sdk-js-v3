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

import {
  CreateLifecyclePolicyCommandInput,
  CreateLifecyclePolicyCommandOutput,
} from "../commands/CreateLifecyclePolicyCommand";
import {
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput,
} from "../commands/DeleteLifecyclePolicyCommand";
import {
  GetLifecyclePoliciesCommandInput,
  GetLifecyclePoliciesCommandOutput,
} from "../commands/GetLifecyclePoliciesCommand";
import { GetLifecyclePolicyCommandInput, GetLifecyclePolicyCommandOutput } from "../commands/GetLifecyclePolicyCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateLifecyclePolicyCommandInput,
  UpdateLifecyclePolicyCommandOutput,
} from "../commands/UpdateLifecyclePolicyCommand";
import { DLMServiceException as __BaseException } from "../models/DLMServiceException";
import {
  _Parameters,
  Action,
  ArchiveRetainRule,
  ArchiveRule,
  CreateRule,
  CrossRegionCopyAction,
  CrossRegionCopyDeprecateRule,
  CrossRegionCopyRetainRule,
  CrossRegionCopyRule,
  DeprecateRule,
  EncryptionConfiguration,
  EventParameters,
  EventSource,
  FastRestoreRule,
  InternalServerException,
  InvalidRequestException,
  LifecyclePolicy,
  LifecyclePolicySummary,
  LimitExceededException,
  PolicyDetails,
  ResourceLocationValues,
  ResourceNotFoundException,
  ResourceTypeValues,
  RetainRule,
  RetentionArchiveTier,
  Schedule,
  ShareRule,
  Tag,
} from "../models/models_0";

export const serializeAws_restJson1CreateLifecyclePolicyCommand = async (
  input: CreateLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policies";
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ExecutionRoleArn != null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.PolicyDetails != null && {
      PolicyDetails: serializeAws_restJson1PolicyDetails(input.PolicyDetails, context),
    }),
    ...(input.State != null && { State: input.State }),
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

export const serializeAws_restJson1DeleteLifecyclePolicyCommand = async (
  input: DeleteLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policies/{PolicyId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "PolicyId", () => input.PolicyId!, "{PolicyId}", false);
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

export const serializeAws_restJson1GetLifecyclePoliciesCommand = async (
  input: GetLifecyclePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policies";
  const query: any = map({
    policyIds: [() => input.PolicyIds !== void 0, () => (input.PolicyIds! || []).map((_entry) => _entry as any)],
    state: [, input.State!],
    resourceTypes: [
      () => input.ResourceTypes !== void 0,
      () => (input.ResourceTypes! || []).map((_entry) => _entry as any),
    ],
    targetTags: [() => input.TargetTags !== void 0, () => (input.TargetTags! || []).map((_entry) => _entry as any)],
    tagsToAdd: [() => input.TagsToAdd !== void 0, () => (input.TagsToAdd! || []).map((_entry) => _entry as any)],
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

export const serializeAws_restJson1GetLifecyclePolicyCommand = async (
  input: GetLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policies/{PolicyId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "PolicyId", () => input.PolicyId!, "{PolicyId}", false);
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
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

export const serializeAws_restJson1UpdateLifecyclePolicyCommand = async (
  input: UpdateLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policies/{PolicyId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "PolicyId", () => input.PolicyId!, "{PolicyId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ExecutionRoleArn != null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.PolicyDetails != null && {
      PolicyDetails: serializeAws_restJson1PolicyDetails(input.PolicyDetails, context),
    }),
    ...(input.State != null && { State: input.State }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1CreateLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateLifecyclePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PolicyId != null) {
    contents.PolicyId = __expectString(data.PolicyId);
  }
  return contents;
};

const deserializeAws_restJson1CreateLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteLifecyclePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetLifecyclePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLifecyclePoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Policies != null) {
    contents.Policies = deserializeAws_restJson1LifecyclePolicySummaryList(data.Policies, context);
  }
  return contents;
};

const deserializeAws_restJson1GetLifecyclePoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLifecyclePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Policy != null) {
    contents.Policy = deserializeAws_restJson1LifecyclePolicy(data.Policy, context);
  }
  return contents;
};

const deserializeAws_restJson1GetLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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
    case "com.amazonaws.dlm#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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
    case "com.amazonaws.dlm#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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
    case "com.amazonaws.dlm#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateLifecyclePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.MutuallyExclusiveParameters != null) {
    contents.MutuallyExclusiveParameters = deserializeAws_restJson1ParameterList(
      data.MutuallyExclusiveParameters,
      context
    );
  }
  if (data.RequiredParameters != null) {
    contents.RequiredParameters = deserializeAws_restJson1ParameterList(data.RequiredParameters, context);
  }
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new LimitExceededException({
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
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceIds != null) {
    contents.ResourceIds = deserializeAws_restJson1PolicyIdList(data.ResourceIds, context);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1Action = (input: Action, context: __SerdeContext): any => {
  return {
    ...(input.CrossRegionCopy != null && {
      CrossRegionCopy: serializeAws_restJson1CrossRegionCopyActionList(input.CrossRegionCopy, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_restJson1ActionList = (input: Action[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Action(entry, context);
    });
};

const serializeAws_restJson1ArchiveRetainRule = (input: ArchiveRetainRule, context: __SerdeContext): any => {
  return {
    ...(input.RetentionArchiveTier != null && {
      RetentionArchiveTier: serializeAws_restJson1RetentionArchiveTier(input.RetentionArchiveTier, context),
    }),
  };
};

const serializeAws_restJson1ArchiveRule = (input: ArchiveRule, context: __SerdeContext): any => {
  return {
    ...(input.RetainRule != null && { RetainRule: serializeAws_restJson1ArchiveRetainRule(input.RetainRule, context) }),
  };
};

const serializeAws_restJson1AvailabilityZoneList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1CreateRule = (input: CreateRule, context: __SerdeContext): any => {
  return {
    ...(input.CronExpression != null && { CronExpression: input.CronExpression }),
    ...(input.Interval != null && { Interval: input.Interval }),
    ...(input.IntervalUnit != null && { IntervalUnit: input.IntervalUnit }),
    ...(input.Location != null && { Location: input.Location }),
    ...(input.Times != null && { Times: serializeAws_restJson1TimesList(input.Times, context) }),
  };
};

const serializeAws_restJson1CrossRegionCopyAction = (input: CrossRegionCopyAction, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: serializeAws_restJson1EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.RetainRule != null && {
      RetainRule: serializeAws_restJson1CrossRegionCopyRetainRule(input.RetainRule, context),
    }),
    ...(input.Target != null && { Target: input.Target }),
  };
};

const serializeAws_restJson1CrossRegionCopyActionList = (
  input: CrossRegionCopyAction[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CrossRegionCopyAction(entry, context);
    });
};

const serializeAws_restJson1CrossRegionCopyDeprecateRule = (
  input: CrossRegionCopyDeprecateRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.Interval != null && { Interval: input.Interval }),
    ...(input.IntervalUnit != null && { IntervalUnit: input.IntervalUnit }),
  };
};

const serializeAws_restJson1CrossRegionCopyRetainRule = (
  input: CrossRegionCopyRetainRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.Interval != null && { Interval: input.Interval }),
    ...(input.IntervalUnit != null && { IntervalUnit: input.IntervalUnit }),
  };
};

const serializeAws_restJson1CrossRegionCopyRule = (input: CrossRegionCopyRule, context: __SerdeContext): any => {
  return {
    ...(input.CmkArn != null && { CmkArn: input.CmkArn }),
    ...(input.CopyTags != null && { CopyTags: input.CopyTags }),
    ...(input.DeprecateRule != null && {
      DeprecateRule: serializeAws_restJson1CrossRegionCopyDeprecateRule(input.DeprecateRule, context),
    }),
    ...(input.Encrypted != null && { Encrypted: input.Encrypted }),
    ...(input.RetainRule != null && {
      RetainRule: serializeAws_restJson1CrossRegionCopyRetainRule(input.RetainRule, context),
    }),
    ...(input.Target != null && { Target: input.Target }),
    ...(input.TargetRegion != null && { TargetRegion: input.TargetRegion }),
  };
};

const serializeAws_restJson1CrossRegionCopyRules = (input: CrossRegionCopyRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CrossRegionCopyRule(entry, context);
    });
};

const serializeAws_restJson1DeprecateRule = (input: DeprecateRule, context: __SerdeContext): any => {
  return {
    ...(input.Count != null && { Count: input.Count }),
    ...(input.Interval != null && { Interval: input.Interval }),
    ...(input.IntervalUnit != null && { IntervalUnit: input.IntervalUnit }),
  };
};

const serializeAws_restJson1EncryptionConfiguration = (
  input: EncryptionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CmkArn != null && { CmkArn: input.CmkArn }),
    ...(input.Encrypted != null && { Encrypted: input.Encrypted }),
  };
};

const serializeAws_restJson1EventParameters = (input: EventParameters, context: __SerdeContext): any => {
  return {
    ...(input.DescriptionRegex != null && { DescriptionRegex: input.DescriptionRegex }),
    ...(input.EventType != null && { EventType: input.EventType }),
    ...(input.SnapshotOwner != null && {
      SnapshotOwner: serializeAws_restJson1SnapshotOwnerList(input.SnapshotOwner, context),
    }),
  };
};

const serializeAws_restJson1EventSource = (input: EventSource, context: __SerdeContext): any => {
  return {
    ...(input.Parameters != null && { Parameters: serializeAws_restJson1EventParameters(input.Parameters, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1ExcludeDataVolumeTagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1FastRestoreRule = (input: FastRestoreRule, context: __SerdeContext): any => {
  return {
    ...(input.AvailabilityZones != null && {
      AvailabilityZones: serializeAws_restJson1AvailabilityZoneList(input.AvailabilityZones, context),
    }),
    ...(input.Count != null && { Count: input.Count }),
    ...(input.Interval != null && { Interval: input.Interval }),
    ...(input.IntervalUnit != null && { IntervalUnit: input.IntervalUnit }),
  };
};

const serializeAws_restJson1_Parameters = (input: _Parameters, context: __SerdeContext): any => {
  return {
    ...(input.ExcludeBootVolume != null && { ExcludeBootVolume: input.ExcludeBootVolume }),
    ...(input.ExcludeDataVolumeTags != null && {
      ExcludeDataVolumeTags: serializeAws_restJson1ExcludeDataVolumeTagList(input.ExcludeDataVolumeTags, context),
    }),
    ...(input.NoReboot != null && { NoReboot: input.NoReboot }),
  };
};

const serializeAws_restJson1PolicyDetails = (input: PolicyDetails, context: __SerdeContext): any => {
  return {
    ...(input.Actions != null && { Actions: serializeAws_restJson1ActionList(input.Actions, context) }),
    ...(input.EventSource != null && { EventSource: serializeAws_restJson1EventSource(input.EventSource, context) }),
    ...(input.Parameters != null && { Parameters: serializeAws_restJson1_Parameters(input.Parameters, context) }),
    ...(input.PolicyType != null && { PolicyType: input.PolicyType }),
    ...(input.ResourceLocations != null && {
      ResourceLocations: serializeAws_restJson1ResourceLocationList(input.ResourceLocations, context),
    }),
    ...(input.ResourceTypes != null && {
      ResourceTypes: serializeAws_restJson1ResourceTypeValuesList(input.ResourceTypes, context),
    }),
    ...(input.Schedules != null && { Schedules: serializeAws_restJson1ScheduleList(input.Schedules, context) }),
    ...(input.TargetTags != null && { TargetTags: serializeAws_restJson1TargetTagList(input.TargetTags, context) }),
  };
};

const serializeAws_restJson1ResourceLocationList = (
  input: (ResourceLocationValues | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ResourceTypeValuesList = (
  input: (ResourceTypeValues | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1RetainRule = (input: RetainRule, context: __SerdeContext): any => {
  return {
    ...(input.Count != null && { Count: input.Count }),
    ...(input.Interval != null && { Interval: input.Interval }),
    ...(input.IntervalUnit != null && { IntervalUnit: input.IntervalUnit }),
  };
};

const serializeAws_restJson1RetentionArchiveTier = (input: RetentionArchiveTier, context: __SerdeContext): any => {
  return {
    ...(input.Count != null && { Count: input.Count }),
    ...(input.Interval != null && { Interval: input.Interval }),
    ...(input.IntervalUnit != null && { IntervalUnit: input.IntervalUnit }),
  };
};

const serializeAws_restJson1Schedule = (input: Schedule, context: __SerdeContext): any => {
  return {
    ...(input.ArchiveRule != null && { ArchiveRule: serializeAws_restJson1ArchiveRule(input.ArchiveRule, context) }),
    ...(input.CopyTags != null && { CopyTags: input.CopyTags }),
    ...(input.CreateRule != null && { CreateRule: serializeAws_restJson1CreateRule(input.CreateRule, context) }),
    ...(input.CrossRegionCopyRules != null && {
      CrossRegionCopyRules: serializeAws_restJson1CrossRegionCopyRules(input.CrossRegionCopyRules, context),
    }),
    ...(input.DeprecateRule != null && {
      DeprecateRule: serializeAws_restJson1DeprecateRule(input.DeprecateRule, context),
    }),
    ...(input.FastRestoreRule != null && {
      FastRestoreRule: serializeAws_restJson1FastRestoreRule(input.FastRestoreRule, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RetainRule != null && { RetainRule: serializeAws_restJson1RetainRule(input.RetainRule, context) }),
    ...(input.ShareRules != null && { ShareRules: serializeAws_restJson1ShareRules(input.ShareRules, context) }),
    ...(input.TagsToAdd != null && { TagsToAdd: serializeAws_restJson1TagsToAddList(input.TagsToAdd, context) }),
    ...(input.VariableTags != null && {
      VariableTags: serializeAws_restJson1VariableTagsList(input.VariableTags, context),
    }),
  };
};

const serializeAws_restJson1ScheduleList = (input: Schedule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Schedule(entry, context);
    });
};

const serializeAws_restJson1ShareRule = (input: ShareRule, context: __SerdeContext): any => {
  return {
    ...(input.TargetAccounts != null && {
      TargetAccounts: serializeAws_restJson1ShareTargetAccountList(input.TargetAccounts, context),
    }),
    ...(input.UnshareInterval != null && { UnshareInterval: input.UnshareInterval }),
    ...(input.UnshareIntervalUnit != null && { UnshareIntervalUnit: input.UnshareIntervalUnit }),
  };
};

const serializeAws_restJson1ShareRules = (input: ShareRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ShareRule(entry, context);
    });
};

const serializeAws_restJson1ShareTargetAccountList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SnapshotOwnerList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
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

const serializeAws_restJson1TagsToAddList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1TargetTagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1TimesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1VariableTagsList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const deserializeAws_restJson1Action = (output: any, context: __SerdeContext): Action => {
  return {
    CrossRegionCopy:
      output.CrossRegionCopy != null
        ? deserializeAws_restJson1CrossRegionCopyActionList(output.CrossRegionCopy, context)
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1ActionList = (output: any, context: __SerdeContext): Action[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Action(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ArchiveRetainRule = (output: any, context: __SerdeContext): ArchiveRetainRule => {
  return {
    RetentionArchiveTier:
      output.RetentionArchiveTier != null
        ? deserializeAws_restJson1RetentionArchiveTier(output.RetentionArchiveTier, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ArchiveRule = (output: any, context: __SerdeContext): ArchiveRule => {
  return {
    RetainRule:
      output.RetainRule != null ? deserializeAws_restJson1ArchiveRetainRule(output.RetainRule, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AvailabilityZoneList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1CreateRule = (output: any, context: __SerdeContext): CreateRule => {
  return {
    CronExpression: __expectString(output.CronExpression),
    Interval: __expectInt32(output.Interval),
    IntervalUnit: __expectString(output.IntervalUnit),
    Location: __expectString(output.Location),
    Times: output.Times != null ? deserializeAws_restJson1TimesList(output.Times, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CrossRegionCopyAction = (output: any, context: __SerdeContext): CrossRegionCopyAction => {
  return {
    EncryptionConfiguration:
      output.EncryptionConfiguration != null
        ? deserializeAws_restJson1EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    RetainRule:
      output.RetainRule != null
        ? deserializeAws_restJson1CrossRegionCopyRetainRule(output.RetainRule, context)
        : undefined,
    Target: __expectString(output.Target),
  } as any;
};

const deserializeAws_restJson1CrossRegionCopyActionList = (
  output: any,
  context: __SerdeContext
): CrossRegionCopyAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CrossRegionCopyAction(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CrossRegionCopyDeprecateRule = (
  output: any,
  context: __SerdeContext
): CrossRegionCopyDeprecateRule => {
  return {
    Interval: __expectInt32(output.Interval),
    IntervalUnit: __expectString(output.IntervalUnit),
  } as any;
};

const deserializeAws_restJson1CrossRegionCopyRetainRule = (
  output: any,
  context: __SerdeContext
): CrossRegionCopyRetainRule => {
  return {
    Interval: __expectInt32(output.Interval),
    IntervalUnit: __expectString(output.IntervalUnit),
  } as any;
};

const deserializeAws_restJson1CrossRegionCopyRule = (output: any, context: __SerdeContext): CrossRegionCopyRule => {
  return {
    CmkArn: __expectString(output.CmkArn),
    CopyTags: __expectBoolean(output.CopyTags),
    DeprecateRule:
      output.DeprecateRule != null
        ? deserializeAws_restJson1CrossRegionCopyDeprecateRule(output.DeprecateRule, context)
        : undefined,
    Encrypted: __expectBoolean(output.Encrypted),
    RetainRule:
      output.RetainRule != null
        ? deserializeAws_restJson1CrossRegionCopyRetainRule(output.RetainRule, context)
        : undefined,
    Target: __expectString(output.Target),
    TargetRegion: __expectString(output.TargetRegion),
  } as any;
};

const deserializeAws_restJson1CrossRegionCopyRules = (output: any, context: __SerdeContext): CrossRegionCopyRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CrossRegionCopyRule(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DeprecateRule = (output: any, context: __SerdeContext): DeprecateRule => {
  return {
    Count: __expectInt32(output.Count),
    Interval: __expectInt32(output.Interval),
    IntervalUnit: __expectString(output.IntervalUnit),
  } as any;
};

const deserializeAws_restJson1EncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): EncryptionConfiguration => {
  return {
    CmkArn: __expectString(output.CmkArn),
    Encrypted: __expectBoolean(output.Encrypted),
  } as any;
};

const deserializeAws_restJson1EventParameters = (output: any, context: __SerdeContext): EventParameters => {
  return {
    DescriptionRegex: __expectString(output.DescriptionRegex),
    EventType: __expectString(output.EventType),
    SnapshotOwner:
      output.SnapshotOwner != null
        ? deserializeAws_restJson1SnapshotOwnerList(output.SnapshotOwner, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EventSource = (output: any, context: __SerdeContext): EventSource => {
  return {
    Parameters:
      output.Parameters != null ? deserializeAws_restJson1EventParameters(output.Parameters, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ExcludeDataVolumeTagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FastRestoreRule = (output: any, context: __SerdeContext): FastRestoreRule => {
  return {
    AvailabilityZones:
      output.AvailabilityZones != null
        ? deserializeAws_restJson1AvailabilityZoneList(output.AvailabilityZones, context)
        : undefined,
    Count: __expectInt32(output.Count),
    Interval: __expectInt32(output.Interval),
    IntervalUnit: __expectString(output.IntervalUnit),
  } as any;
};

const deserializeAws_restJson1LifecyclePolicy = (output: any, context: __SerdeContext): LifecyclePolicy => {
  return {
    DateCreated:
      output.DateCreated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateCreated)))
        : undefined,
    DateModified:
      output.DateModified != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateModified)))
        : undefined,
    Description: __expectString(output.Description),
    ExecutionRoleArn: __expectString(output.ExecutionRoleArn),
    PolicyArn: __expectString(output.PolicyArn),
    PolicyDetails:
      output.PolicyDetails != null ? deserializeAws_restJson1PolicyDetails(output.PolicyDetails, context) : undefined,
    PolicyId: __expectString(output.PolicyId),
    State: __expectString(output.State),
    StatusMessage: __expectString(output.StatusMessage),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LifecyclePolicySummary = (
  output: any,
  context: __SerdeContext
): LifecyclePolicySummary => {
  return {
    Description: __expectString(output.Description),
    PolicyId: __expectString(output.PolicyId),
    PolicyType: __expectString(output.PolicyType),
    State: __expectString(output.State),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LifecyclePolicySummaryList = (
  output: any,
  context: __SerdeContext
): LifecyclePolicySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LifecyclePolicySummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ParameterList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1_Parameters = (output: any, context: __SerdeContext): _Parameters => {
  return {
    ExcludeBootVolume: __expectBoolean(output.ExcludeBootVolume),
    ExcludeDataVolumeTags:
      output.ExcludeDataVolumeTags != null
        ? deserializeAws_restJson1ExcludeDataVolumeTagList(output.ExcludeDataVolumeTags, context)
        : undefined,
    NoReboot: __expectBoolean(output.NoReboot),
  } as any;
};

const deserializeAws_restJson1PolicyDetails = (output: any, context: __SerdeContext): PolicyDetails => {
  return {
    Actions: output.Actions != null ? deserializeAws_restJson1ActionList(output.Actions, context) : undefined,
    EventSource:
      output.EventSource != null ? deserializeAws_restJson1EventSource(output.EventSource, context) : undefined,
    Parameters: output.Parameters != null ? deserializeAws_restJson1_Parameters(output.Parameters, context) : undefined,
    PolicyType: __expectString(output.PolicyType),
    ResourceLocations:
      output.ResourceLocations != null
        ? deserializeAws_restJson1ResourceLocationList(output.ResourceLocations, context)
        : undefined,
    ResourceTypes:
      output.ResourceTypes != null
        ? deserializeAws_restJson1ResourceTypeValuesList(output.ResourceTypes, context)
        : undefined,
    Schedules: output.Schedules != null ? deserializeAws_restJson1ScheduleList(output.Schedules, context) : undefined,
    TargetTags:
      output.TargetTags != null ? deserializeAws_restJson1TargetTagList(output.TargetTags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1PolicyIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ResourceLocationList = (
  output: any,
  context: __SerdeContext
): (ResourceLocationValues | string)[] => {
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

const deserializeAws_restJson1ResourceTypeValuesList = (
  output: any,
  context: __SerdeContext
): (ResourceTypeValues | string)[] => {
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

const deserializeAws_restJson1RetainRule = (output: any, context: __SerdeContext): RetainRule => {
  return {
    Count: __expectInt32(output.Count),
    Interval: __expectInt32(output.Interval),
    IntervalUnit: __expectString(output.IntervalUnit),
  } as any;
};

const deserializeAws_restJson1RetentionArchiveTier = (output: any, context: __SerdeContext): RetentionArchiveTier => {
  return {
    Count: __expectInt32(output.Count),
    Interval: __expectInt32(output.Interval),
    IntervalUnit: __expectString(output.IntervalUnit),
  } as any;
};

const deserializeAws_restJson1Schedule = (output: any, context: __SerdeContext): Schedule => {
  return {
    ArchiveRule:
      output.ArchiveRule != null ? deserializeAws_restJson1ArchiveRule(output.ArchiveRule, context) : undefined,
    CopyTags: __expectBoolean(output.CopyTags),
    CreateRule: output.CreateRule != null ? deserializeAws_restJson1CreateRule(output.CreateRule, context) : undefined,
    CrossRegionCopyRules:
      output.CrossRegionCopyRules != null
        ? deserializeAws_restJson1CrossRegionCopyRules(output.CrossRegionCopyRules, context)
        : undefined,
    DeprecateRule:
      output.DeprecateRule != null ? deserializeAws_restJson1DeprecateRule(output.DeprecateRule, context) : undefined,
    FastRestoreRule:
      output.FastRestoreRule != null
        ? deserializeAws_restJson1FastRestoreRule(output.FastRestoreRule, context)
        : undefined,
    Name: __expectString(output.Name),
    RetainRule: output.RetainRule != null ? deserializeAws_restJson1RetainRule(output.RetainRule, context) : undefined,
    ShareRules: output.ShareRules != null ? deserializeAws_restJson1ShareRules(output.ShareRules, context) : undefined,
    TagsToAdd: output.TagsToAdd != null ? deserializeAws_restJson1TagsToAddList(output.TagsToAdd, context) : undefined,
    VariableTags:
      output.VariableTags != null ? deserializeAws_restJson1VariableTagsList(output.VariableTags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ScheduleList = (output: any, context: __SerdeContext): Schedule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Schedule(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ShareRule = (output: any, context: __SerdeContext): ShareRule => {
  return {
    TargetAccounts:
      output.TargetAccounts != null
        ? deserializeAws_restJson1ShareTargetAccountList(output.TargetAccounts, context)
        : undefined,
    UnshareInterval: __expectInt32(output.UnshareInterval),
    UnshareIntervalUnit: __expectString(output.UnshareIntervalUnit),
  } as any;
};

const deserializeAws_restJson1ShareRules = (output: any, context: __SerdeContext): ShareRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ShareRule(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ShareTargetAccountList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SnapshotOwnerList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
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

const deserializeAws_restJson1TagsToAddList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TargetTagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TimesList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1VariableTagsList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
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
