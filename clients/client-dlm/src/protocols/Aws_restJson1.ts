// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
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
  CrossRegionCopyTarget,
  DeprecateRule,
  EncryptionConfiguration,
  EventParameters,
  EventSource,
  Exclusions,
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
  Script,
  ShareRule,
  StageValues,
  Tag,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateLifecyclePolicyCommand
 */
export const se_CreateLifecyclePolicyCommand = async (
  input: CreateLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/policies");
  let body: any;
  body = JSON.stringify(
    take(input, {
      CopyTags: [],
      CreateInterval: [],
      CrossRegionCopyTargets: (_) => _json(_),
      DefaultPolicy: [],
      Description: [],
      Exclusions: (_) => _json(_),
      ExecutionRoleArn: [],
      ExtendDeletion: [],
      PolicyDetails: (_) => _json(_),
      RetainInterval: [],
      State: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteLifecyclePolicyCommand
 */
export const se_DeleteLifecyclePolicyCommand = async (
  input: DeleteLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/policies/{PolicyId}");
  b.p("PolicyId", () => input.PolicyId!, "{PolicyId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLifecyclePoliciesCommand
 */
export const se_GetLifecyclePoliciesCommand = async (
  input: GetLifecyclePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/policies");
  const query: any = map({
    [_pI]: [() => input.PolicyIds !== void 0, () => input[_PI]! || []],
    [_s]: [, input[_S]!],
    [_rT]: [() => input.ResourceTypes !== void 0, () => input[_RT]! || []],
    [_tT]: [() => input.TargetTags !== void 0, () => input[_TT]! || []],
    [_tTA]: [() => input.TagsToAdd !== void 0, () => input[_TTA]! || []],
    [_dPT]: [, input[_DPT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLifecyclePolicyCommand
 */
export const se_GetLifecyclePolicyCommand = async (
  input: GetLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/policies/{PolicyId}");
  b.p("PolicyId", () => input.PolicyId!, "{PolicyId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
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
 * serializeAws_restJson1UpdateLifecyclePolicyCommand
 */
export const se_UpdateLifecyclePolicyCommand = async (
  input: UpdateLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/policies/{PolicyId}");
  b.p("PolicyId", () => input.PolicyId!, "{PolicyId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      CopyTags: [],
      CreateInterval: [],
      CrossRegionCopyTargets: (_) => _json(_),
      Description: [],
      Exclusions: (_) => _json(_),
      ExecutionRoleArn: [],
      ExtendDeletion: [],
      PolicyDetails: (_) => _json(_),
      RetainInterval: [],
      State: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateLifecyclePolicyCommand
 */
export const de_CreateLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DeleteLifecyclePolicyCommand
 */
export const de_DeleteLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> => {
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
 * deserializeAws_restJson1GetLifecyclePoliciesCommand
 */
export const de_GetLifecyclePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetLifecyclePolicyCommand
 */
export const de_GetLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateLifecyclePolicyCommand
 */
export const de_UpdateLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLifecyclePolicyCommandOutput> => {
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
      }) as never;
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

// se_CrossRegionCopyTarget omitted.

// se_CrossRegionCopyTargetList omitted.

// se_DeprecateRule omitted.

// se_EncryptionConfiguration omitted.

// se_EventParameters omitted.

// se_EventSource omitted.

// se_ExcludeDataVolumeTagList omitted.

// se_ExcludeTagsList omitted.

// se_ExcludeVolumeTypesList omitted.

// se_Exclusions omitted.

// se_FastRestoreRule omitted.

// se__Parameters omitted.

// se_PolicyDetails omitted.

// se_ResourceLocationList omitted.

// se_ResourceTypeValuesList omitted.

// se_RetainRule omitted.

// se_RetentionArchiveTier omitted.

// se_Schedule omitted.

// se_ScheduleList omitted.

// se_Script omitted.

// se_ScriptsList omitted.

// se_ShareRule omitted.

// se_ShareRules omitted.

// se_ShareTargetAccountList omitted.

// se_SnapshotOwnerList omitted.

// se_StagesList omitted.

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

// de_CrossRegionCopyTarget omitted.

// de_CrossRegionCopyTargetList omitted.

// de_DeprecateRule omitted.

// de_EncryptionConfiguration omitted.

// de_EventParameters omitted.

// de_EventSource omitted.

// de_ExcludeDataVolumeTagList omitted.

// de_ExcludeTagsList omitted.

// de_ExcludeVolumeTypesList omitted.

// de_Exclusions omitted.

// de_FastRestoreRule omitted.

/**
 * deserializeAws_restJson1LifecyclePolicy
 */
const de_LifecyclePolicy = (output: any, context: __SerdeContext): LifecyclePolicy => {
  return take(output, {
    DateCreated: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DateModified: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DefaultPolicy: __expectBoolean,
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

// de_Script omitted.

// de_ScriptsList omitted.

// de_ShareRule omitted.

// de_ShareRules omitted.

// de_ShareTargetAccountList omitted.

// de_SnapshotOwnerList omitted.

// de_StagesList omitted.

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

const _DPT = "DefaultPolicyType";
const _PI = "PolicyIds";
const _RT = "ResourceTypes";
const _S = "State";
const _TK = "TagKeys";
const _TT = "TargetTags";
const _TTA = "TagsToAdd";
const _dPT = "defaultPolicyType";
const _pI = "policyIds";
const _rT = "resourceTypes";
const _s = "state";
const _tK = "tagKeys";
const _tT = "targetTags";
const _tTA = "tagsToAdd";
