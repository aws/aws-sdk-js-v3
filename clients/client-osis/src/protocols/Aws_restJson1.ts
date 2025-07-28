// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
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

import { CreatePipelineCommandInput, CreatePipelineCommandOutput } from "../commands/CreatePipelineCommand";
import { DeletePipelineCommandInput, DeletePipelineCommandOutput } from "../commands/DeletePipelineCommand";
import {
  GetPipelineBlueprintCommandInput,
  GetPipelineBlueprintCommandOutput,
} from "../commands/GetPipelineBlueprintCommand";
import {
  GetPipelineChangeProgressCommandInput,
  GetPipelineChangeProgressCommandOutput,
} from "../commands/GetPipelineChangeProgressCommand";
import { GetPipelineCommandInput, GetPipelineCommandOutput } from "../commands/GetPipelineCommand";
import {
  ListPipelineBlueprintsCommandInput,
  ListPipelineBlueprintsCommandOutput,
} from "../commands/ListPipelineBlueprintsCommand";
import { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "../commands/ListPipelinesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartPipelineCommandInput, StartPipelineCommandOutput } from "../commands/StartPipelineCommand";
import { StopPipelineCommandInput, StopPipelineCommandOutput } from "../commands/StopPipelineCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdatePipelineCommandInput, UpdatePipelineCommandOutput } from "../commands/UpdatePipelineCommand";
import { ValidatePipelineCommandInput, ValidatePipelineCommandOutput } from "../commands/ValidatePipelineCommand";
import {
  AccessDeniedException,
  BufferOptions,
  ChangeProgressStage,
  ChangeProgressStatus,
  CloudWatchLogDestination,
  ConflictException,
  DisabledOperationException,
  EncryptionAtRestOptions,
  InternalException,
  InvalidPaginationTokenException,
  LimitExceededException,
  LogPublishingOptions,
  Pipeline,
  PipelineSummary,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  Tag,
  ValidationException,
  VpcAttachmentOptions,
  VpcOptions,
} from "../models/models_0";
import { OSISServiceException as __BaseException } from "../models/OSISServiceException";

/**
 * serializeAws_restJson1CreatePipelineCommand
 */
export const se_CreatePipelineCommand = async (
  input: CreatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2022-01-01/osis/createPipeline");
  let body: any;
  body = JSON.stringify(
    take(input, {
      BufferOptions: (_) => _json(_),
      EncryptionAtRestOptions: (_) => _json(_),
      LogPublishingOptions: (_) => _json(_),
      MaxUnits: [],
      MinUnits: [],
      PipelineConfigurationBody: [],
      PipelineName: [],
      PipelineRoleArn: [],
      Tags: (_) => _json(_),
      VpcOptions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePipelineCommand
 */
export const se_DeletePipelineCommand = async (
  input: DeletePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2022-01-01/osis/deletePipeline/{PipelineName}");
  b.p("PipelineName", () => input.PipelineName!, "{PipelineName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPipelineCommand
 */
export const se_GetPipelineCommand = async (
  input: GetPipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2022-01-01/osis/getPipeline/{PipelineName}");
  b.p("PipelineName", () => input.PipelineName!, "{PipelineName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPipelineBlueprintCommand
 */
export const se_GetPipelineBlueprintCommand = async (
  input: GetPipelineBlueprintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2022-01-01/osis/getPipelineBlueprint/{BlueprintName}");
  b.p("BlueprintName", () => input.BlueprintName!, "{BlueprintName}", false);
  const query: any = map({
    [_f]: [, input[_F]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPipelineChangeProgressCommand
 */
export const se_GetPipelineChangeProgressCommand = async (
  input: GetPipelineChangeProgressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2022-01-01/osis/getPipelineChangeProgress/{PipelineName}");
  b.p("PipelineName", () => input.PipelineName!, "{PipelineName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPipelineBlueprintsCommand
 */
export const se_ListPipelineBlueprintsCommand = async (
  input: ListPipelineBlueprintsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2022-01-01/osis/listPipelineBlueprints");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPipelinesCommand
 */
export const se_ListPipelinesCommand = async (
  input: ListPipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2022-01-01/osis/listPipelines");
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
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
  b.bp("/2022-01-01/osis/listTagsForResource");
  const query: any = map({
    [_a]: [, __expectNonNull(input[_A]!, `Arn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartPipelineCommand
 */
export const se_StartPipelineCommand = async (
  input: StartPipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2022-01-01/osis/startPipeline/{PipelineName}");
  b.p("PipelineName", () => input.PipelineName!, "{PipelineName}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopPipelineCommand
 */
export const se_StopPipelineCommand = async (
  input: StopPipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2022-01-01/osis/stopPipeline/{PipelineName}");
  b.p("PipelineName", () => input.PipelineName!, "{PipelineName}", false);
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
  b.bp("/2022-01-01/osis/tagResource");
  const query: any = map({
    [_a]: [, __expectNonNull(input[_A]!, `Arn`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
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
  b.bp("/2022-01-01/osis/untagResource");
  const query: any = map({
    [_a]: [, __expectNonNull(input[_A]!, `Arn`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      TagKeys: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePipelineCommand
 */
export const se_UpdatePipelineCommand = async (
  input: UpdatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2022-01-01/osis/updatePipeline/{PipelineName}");
  b.p("PipelineName", () => input.PipelineName!, "{PipelineName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      BufferOptions: (_) => _json(_),
      EncryptionAtRestOptions: (_) => _json(_),
      LogPublishingOptions: (_) => _json(_),
      MaxUnits: [],
      MinUnits: [],
      PipelineConfigurationBody: [],
      PipelineRoleArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ValidatePipelineCommand
 */
export const se_ValidatePipelineCommand = async (
  input: ValidatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2022-01-01/osis/validatePipeline");
  let body: any;
  body = JSON.stringify(
    take(input, {
      PipelineConfigurationBody: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreatePipelineCommand
 */
export const de_CreatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Pipeline: (_) => de_Pipeline(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePipelineCommand
 */
export const de_DeletePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> => {
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
 * deserializeAws_restJson1GetPipelineCommand
 */
export const de_GetPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Pipeline: (_) => de_Pipeline(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPipelineBlueprintCommand
 */
export const de_GetPipelineBlueprintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineBlueprintCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Blueprint: _json,
    Format: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPipelineChangeProgressCommand
 */
export const de_GetPipelineChangeProgressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineChangeProgressCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChangeProgressStatuses: (_) => de_ChangeProgressStatusList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPipelineBlueprintsCommand
 */
export const de_ListPipelineBlueprintsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelineBlueprintsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Blueprints: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPipelinesCommand
 */
export const de_ListPipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Pipelines: (_) => de_PipelineSummaryList(_, context),
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
 * deserializeAws_restJson1StartPipelineCommand
 */
export const de_StartPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Pipeline: (_) => de_Pipeline(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopPipelineCommand
 */
export const de_StopPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Pipeline: (_) => de_Pipeline(_, context),
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
 * deserializeAws_restJson1UpdatePipelineCommand
 */
export const de_UpdatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Pipeline: (_) => de_Pipeline(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ValidatePipelineCommand
 */
export const de_ValidatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidatePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Errors: _json,
    isValid: __expectBoolean,
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
    case "com.amazonaws.osis#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.osis#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.osis#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.osis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.osis#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.osis#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.osis#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.osis#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.osis#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DisabledOperationExceptionRes
 */
const de_DisabledOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DisabledOperationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DisabledOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalExceptionRes
 */
const de_InternalExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidPaginationTokenExceptionRes
 */
const de_InvalidPaginationTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationTokenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidPaginationTokenException({
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
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceAlreadyExistsException({
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

// se_BufferOptions omitted.

// se_CloudWatchLogDestination omitted.

// se_EncryptionAtRestOptions omitted.

// se_LogPublishingOptions omitted.

// se_SecurityGroupIds omitted.

// se_StringList omitted.

// se_SubnetIds omitted.

// se_Tag omitted.

// se_TagList omitted.

// se_VpcAttachmentOptions omitted.

// se_VpcOptions omitted.

// de_BufferOptions omitted.

/**
 * deserializeAws_restJson1ChangeProgressStage
 */
const de_ChangeProgressStage = (output: any, context: __SerdeContext): ChangeProgressStage => {
  return take(output, {
    Description: __expectString,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ChangeProgressStageList
 */
const de_ChangeProgressStageList = (output: any, context: __SerdeContext): ChangeProgressStage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ChangeProgressStage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ChangeProgressStatus
 */
const de_ChangeProgressStatus = (output: any, context: __SerdeContext): ChangeProgressStatus => {
  return take(output, {
    ChangeProgressStages: (_: any) => de_ChangeProgressStageList(_, context),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    TotalNumberOfStages: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1ChangeProgressStatusList
 */
const de_ChangeProgressStatusList = (output: any, context: __SerdeContext): ChangeProgressStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ChangeProgressStatus(entry, context);
    });
  return retVal;
};

// de_CloudWatchLogDestination omitted.

// de_EncryptionAtRestOptions omitted.

// de_IngestEndpointUrlsList omitted.

// de_LogPublishingOptions omitted.

/**
 * deserializeAws_restJson1Pipeline
 */
const de_Pipeline = (output: any, context: __SerdeContext): Pipeline => {
  return take(output, {
    BufferOptions: _json,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Destinations: _json,
    EncryptionAtRestOptions: _json,
    IngestEndpointUrls: _json,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LogPublishingOptions: _json,
    MaxUnits: __expectInt32,
    MinUnits: __expectInt32,
    PipelineArn: __expectString,
    PipelineConfigurationBody: __expectString,
    PipelineName: __expectString,
    PipelineRoleArn: __expectString,
    ServiceVpcEndpoints: _json,
    Status: __expectString,
    StatusReason: _json,
    Tags: _json,
    VpcEndpointService: __expectString,
    VpcEndpoints: _json,
  }) as any;
};

// de_PipelineBlueprint omitted.

// de_PipelineBlueprintsSummaryList omitted.

// de_PipelineBlueprintSummary omitted.

// de_PipelineDestination omitted.

// de_PipelineDestinationList omitted.

// de_PipelineStatusReason omitted.

/**
 * deserializeAws_restJson1PipelineSummary
 */
const de_PipelineSummary = (output: any, context: __SerdeContext): PipelineSummary => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Destinations: _json,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MaxUnits: __expectInt32,
    MinUnits: __expectInt32,
    PipelineArn: __expectString,
    PipelineName: __expectString,
    Status: __expectString,
    StatusReason: _json,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1PipelineSummaryList
 */
const de_PipelineSummaryList = (output: any, context: __SerdeContext): PipelineSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PipelineSummary(entry, context);
    });
  return retVal;
};

// de_SecurityGroupIds omitted.

// de_ServiceVpcEndpoint omitted.

// de_ServiceVpcEndpointsList omitted.

// de_SubnetIds omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_ValidationMessage omitted.

// de_ValidationMessageList omitted.

// de_VpcAttachmentOptions omitted.

// de_VpcEndpoint omitted.

// de_VpcEndpointsList omitted.

// de_VpcOptions omitted.

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

const _A = "Arn";
const _F = "Format";
const _MR = "MaxResults";
const _NT = "NextToken";
const _a = "arn";
const _f = "format";
const _mR = "maxResults";
const _nT = "nextToken";
