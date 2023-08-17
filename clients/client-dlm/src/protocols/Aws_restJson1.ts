// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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

/**
 * serializeAws_restJson1CreateLifecyclePolicyCommand
 */
export const se_CreateLifecyclePolicyCommand = async (
  input: CreateLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policies";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      ExecutionRoleArn: [],
      PolicyDetails: (_) => _json(_),
      State: [],
      Tags: (_) => _json(_),
    })
  );
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

/**
 * serializeAws_restJson1DeleteLifecyclePolicyCommand
 */
export const se_DeleteLifecyclePolicyCommand = async (
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

/**
 * serializeAws_restJson1GetLifecyclePoliciesCommand
 */
export const se_GetLifecyclePoliciesCommand = async (
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

/**
 * serializeAws_restJson1GetLifecyclePolicyCommand
 */
export const se_GetLifecyclePolicyCommand = async (
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

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
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

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
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
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
    })
  );
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

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
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

/**
 * serializeAws_restJson1UpdateLifecyclePolicyCommand
 */
export const se_UpdateLifecyclePolicyCommand = async (
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
  body = JSON.stringify(
    take(input, {
      Description: [],
      ExecutionRoleArn: [],
      PolicyDetails: (_) => _json(_),
      State: [],
    })
  );
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

/**
 * deserializeAws_restJson1CreateLifecyclePolicyCommand
 */
export const de_CreateLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateLifecyclePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PolicyId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateLifecyclePolicyCommandError
 */
const de_CreateLifecyclePolicyCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteLifecyclePolicyCommand
 */
export const de_DeleteLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteLifecyclePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLifecyclePolicyCommandError
 */
const de_DeleteLifecyclePolicyCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetLifecyclePoliciesCommand
 */
export const de_GetLifecyclePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLifecyclePoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Policies: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLifecyclePoliciesCommandError
 */
const de_GetLifecyclePoliciesCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetLifecyclePolicyCommand
 */
export const de_GetLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLifecyclePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Policy: (_) => de_LifecyclePolicy(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLifecyclePolicyCommandError
 */
const de_GetLifecyclePolicyCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
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
 * deserializeAws_restJson1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateLifecyclePolicyCommand
 */
export const de_UpdateLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateLifecyclePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLifecyclePolicyCommandError
 */
const de_UpdateLifecyclePolicyCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
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
    Code: __expectString,
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
 * deserializeAws_restJson1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
    MutuallyExclusiveParameters: _json,
    RequiredParameters: _json,
  });
  Object.assign(contents, doc);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LimitExceededException({
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
    Code: __expectString,
    Message: __expectString,
    ResourceIds: _json,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_Action omitted.

// se_ActionList omitted.

// se_ArchiveRetainRule omitted.

// se_ArchiveRule omitted.

// se_AvailabilityZoneList omitted.

// se_CreateRule omitted.

// se_CrossRegionCopyAction omitted.

// se_CrossRegionCopyActionList omitted.

// se_CrossRegionCopyDeprecateRule omitted.

// se_CrossRegionCopyRetainRule omitted.

// se_CrossRegionCopyRule omitted.

// se_CrossRegionCopyRules omitted.

// se_DeprecateRule omitted.

// se_EncryptionConfiguration omitted.

// se_EventParameters omitted.

// se_EventSource omitted.

// se_ExcludeDataVolumeTagList omitted.

// se_FastRestoreRule omitted.

// se__Parameters omitted.

// se_PolicyDetails omitted.

// se_ResourceLocationList omitted.

// se_ResourceTypeValuesList omitted.

// se_RetainRule omitted.

// se_RetentionArchiveTier omitted.

// se_Schedule omitted.

// se_ScheduleList omitted.

// se_ShareRule omitted.

// se_ShareRules omitted.

// se_ShareTargetAccountList omitted.

// se_SnapshotOwnerList omitted.

// se_Tag omitted.

// se_TagMap omitted.

// se_TagsToAddList omitted.

// se_TargetTagList omitted.

// se_TimesList omitted.

// se_VariableTagsList omitted.

// de_Action omitted.

// de_ActionList omitted.

// de_ArchiveRetainRule omitted.

// de_ArchiveRule omitted.

// de_AvailabilityZoneList omitted.

// de_CreateRule omitted.

// de_CrossRegionCopyAction omitted.

// de_CrossRegionCopyActionList omitted.

// de_CrossRegionCopyDeprecateRule omitted.

// de_CrossRegionCopyRetainRule omitted.

// de_CrossRegionCopyRule omitted.

// de_CrossRegionCopyRules omitted.

// de_DeprecateRule omitted.

// de_EncryptionConfiguration omitted.

// de_EventParameters omitted.

// de_EventSource omitted.

// de_ExcludeDataVolumeTagList omitted.

// de_FastRestoreRule omitted.

/**
 * deserializeAws_restJson1LifecyclePolicy
 */
const de_LifecyclePolicy = (output: any, context: __SerdeContext): LifecyclePolicy => {
  return take(output, {
    DateCreated: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DateModified: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Description: __expectString,
    ExecutionRoleArn: __expectString,
    PolicyArn: __expectString,
    PolicyDetails: _json,
    PolicyId: __expectString,
    State: __expectString,
    StatusMessage: __expectString,
    Tags: _json,
  }) as any;
};

// de_LifecyclePolicySummary omitted.

// de_LifecyclePolicySummaryList omitted.

// de_ParameterList omitted.

// de__Parameters omitted.

// de_PolicyDetails omitted.

// de_PolicyIdList omitted.

// de_ResourceLocationList omitted.

// de_ResourceTypeValuesList omitted.

// de_RetainRule omitted.

// de_RetentionArchiveTier omitted.

// de_Schedule omitted.

// de_ScheduleList omitted.

// de_ShareRule omitted.

// de_ShareRules omitted.

// de_ShareTargetAccountList omitted.

// de_SnapshotOwnerList omitted.

// de_Tag omitted.

// de_TagMap omitted.

// de_TagsToAddList omitted.

// de_TargetTagList omitted.

// de_TimesList omitted.

// de_VariableTagsList omitted.

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
