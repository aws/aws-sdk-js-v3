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
  map,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CancelJobCommandInput, CancelJobCommandOutput } from "../commands/CancelJobCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "../commands/CreateJobCommand";
import { CreatePipelineCommandInput, CreatePipelineCommandOutput } from "../commands/CreatePipelineCommand";
import { CreatePresetCommandInput, CreatePresetCommandOutput } from "../commands/CreatePresetCommand";
import { DeletePipelineCommandInput, DeletePipelineCommandOutput } from "../commands/DeletePipelineCommand";
import { DeletePresetCommandInput, DeletePresetCommandOutput } from "../commands/DeletePresetCommand";
import { ListJobsByPipelineCommandInput, ListJobsByPipelineCommandOutput } from "../commands/ListJobsByPipelineCommand";
import { ListJobsByStatusCommandInput, ListJobsByStatusCommandOutput } from "../commands/ListJobsByStatusCommand";
import { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "../commands/ListPipelinesCommand";
import { ListPresetsCommandInput, ListPresetsCommandOutput } from "../commands/ListPresetsCommand";
import { ReadJobCommandInput, ReadJobCommandOutput } from "../commands/ReadJobCommand";
import { ReadPipelineCommandInput, ReadPipelineCommandOutput } from "../commands/ReadPipelineCommand";
import { ReadPresetCommandInput, ReadPresetCommandOutput } from "../commands/ReadPresetCommand";
import { TestRoleCommandInput, TestRoleCommandOutput } from "../commands/TestRoleCommand";
import { UpdatePipelineCommandInput, UpdatePipelineCommandOutput } from "../commands/UpdatePipelineCommand";
import {
  UpdatePipelineNotificationsCommandInput,
  UpdatePipelineNotificationsCommandOutput,
} from "../commands/UpdatePipelineNotificationsCommand";
import {
  UpdatePipelineStatusCommandInput,
  UpdatePipelineStatusCommandOutput,
} from "../commands/UpdatePipelineStatusCommand";
import { ElasticTranscoderServiceException as __BaseException } from "../models/ElasticTranscoderServiceException";
import {
  AccessDeniedException,
  Artwork,
  AudioCodecOptions,
  AudioParameters,
  CaptionFormat,
  Captions,
  CaptionSource,
  Clip,
  CreateJobOutput,
  CreateJobPlaylist,
  DetectedProperties,
  Encryption,
  HlsContentProtection,
  IncompatibleVersionException,
  InputCaptions,
  InternalServiceException,
  JobAlbumArt,
  JobInput,
  JobWatermark,
  LimitExceededException,
  Notifications,
  Permission,
  PipelineOutputConfig,
  PlayReadyDrm,
  PresetWatermark,
  ResourceInUseException,
  ResourceNotFoundException,
  Thumbnails,
  TimeSpan,
  ValidationException,
  VideoParameters,
} from "../models/models_0";

/**
 * serializeAws_restJson1CancelJobCommand
 */
export const se_CancelJobCommand = async (
  input: CancelJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2012-09-25/jobs/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateJobCommand
 */
export const se_CreateJobCommand = async (
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2012-09-25/jobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Input: (_) => _json(_),
      Inputs: (_) => _json(_),
      Output: (_) => _json(_),
      OutputKeyPrefix: [],
      Outputs: (_) => _json(_),
      PipelineId: [],
      Playlists: (_) => _json(_),
      UserMetadata: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

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
  b.bp("/2012-09-25/pipelines");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AwsKmsKeyArn: [],
      ContentConfig: (_) => _json(_),
      InputBucket: [],
      Name: [],
      Notifications: (_) => _json(_),
      OutputBucket: [],
      Role: [],
      ThumbnailConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePresetCommand
 */
export const se_CreatePresetCommand = async (
  input: CreatePresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2012-09-25/presets");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Audio: (_) => _json(_),
      Container: [],
      Description: [],
      Name: [],
      Thumbnails: (_) => _json(_),
      Video: (_) => _json(_),
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
  b.bp("/2012-09-25/pipelines/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePresetCommand
 */
export const se_DeletePresetCommand = async (
  input: DeletePresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2012-09-25/presets/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListJobsByPipelineCommand
 */
export const se_ListJobsByPipelineCommand = async (
  input: ListJobsByPipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2012-09-25/jobsByPipeline/{PipelineId}");
  b.p("PipelineId", () => input.PipelineId!, "{PipelineId}", false);
  const query: any = map({
    [_A]: [, input[_A]!],
    [_PT]: [, input[_PT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListJobsByStatusCommand
 */
export const se_ListJobsByStatusCommand = async (
  input: ListJobsByStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2012-09-25/jobsByStatus/{Status}");
  b.p("Status", () => input.Status!, "{Status}", false);
  const query: any = map({
    [_A]: [, input[_A]!],
    [_PT]: [, input[_PT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
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
  b.bp("/2012-09-25/pipelines");
  const query: any = map({
    [_A]: [, input[_A]!],
    [_PT]: [, input[_PT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPresetsCommand
 */
export const se_ListPresetsCommand = async (
  input: ListPresetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2012-09-25/presets");
  const query: any = map({
    [_A]: [, input[_A]!],
    [_PT]: [, input[_PT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ReadJobCommand
 */
export const se_ReadJobCommand = async (
  input: ReadJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2012-09-25/jobs/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ReadPipelineCommand
 */
export const se_ReadPipelineCommand = async (
  input: ReadPipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2012-09-25/pipelines/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ReadPresetCommand
 */
export const se_ReadPresetCommand = async (
  input: ReadPresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2012-09-25/presets/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TestRoleCommand
 */
export const se_TestRoleCommand = async (
  input: TestRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2012-09-25/roleTests");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InputBucket: [],
      OutputBucket: [],
      Role: [],
      Topics: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
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
  b.bp("/2012-09-25/pipelines/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AwsKmsKeyArn: [],
      ContentConfig: (_) => _json(_),
      InputBucket: [],
      Name: [],
      Notifications: (_) => _json(_),
      Role: [],
      ThumbnailConfig: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePipelineNotificationsCommand
 */
export const se_UpdatePipelineNotificationsCommand = async (
  input: UpdatePipelineNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2012-09-25/pipelines/{Id}/notifications");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Notifications: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePipelineStatusCommand
 */
export const se_UpdatePipelineStatusCommand = async (
  input: UpdatePipelineStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2012-09-25/pipelines/{Id}/status");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Status: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CancelJobCommand
 */
export const de_CancelJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateJobCommand
 */
export const de_CreateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Job: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePipelineCommand
 */
export const de_CreatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Pipeline: _json,
    Warnings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePresetCommand
 */
export const de_CreatePresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Preset: _json,
    Warning: __expectString,
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
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePresetCommand
 */
export const de_DeletePresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePresetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ListJobsByPipelineCommand
 */
export const de_ListJobsByPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsByPipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Jobs: _json,
    NextPageToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListJobsByStatusCommand
 */
export const de_ListJobsByStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsByStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Jobs: _json,
    NextPageToken: __expectString,
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
    NextPageToken: __expectString,
    Pipelines: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPresetsCommand
 */
export const de_ListPresetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPresetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextPageToken: __expectString,
    Presets: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ReadJobCommand
 */
export const de_ReadJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReadJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Job: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ReadPipelineCommand
 */
export const de_ReadPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReadPipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Pipeline: _json,
    Warnings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ReadPresetCommand
 */
export const de_ReadPresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReadPresetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Preset: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TestRoleCommand
 */
export const de_TestRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestRoleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Messages: _json,
    Success: __expectString,
  });
  Object.assign(contents, doc);
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
    Pipeline: _json,
    Warnings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePipelineNotificationsCommand
 */
export const de_UpdatePipelineNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Pipeline: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePipelineStatusCommand
 */
export const de_UpdatePipelineStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Pipeline: _json,
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
    case "com.amazonaws.elastictranscoder#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await de_IncompatibleVersionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.elastictranscoder#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.elastictranscoder#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1IncompatibleVersionExceptionRes
 */
const de_IncompatibleVersionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatibleVersionException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new IncompatibleVersionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServiceExceptionRes
 */
const de_InternalServiceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServiceException({
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
 * deserializeAws_restJson1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceInUseException({
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

// se_AccessControls omitted.

// se_Artwork omitted.

// se_Artworks omitted.

// se_AudioCodecOptions omitted.

// se_AudioParameters omitted.

// se_CaptionFormat omitted.

// se_CaptionFormats omitted.

// se_Captions omitted.

// se_CaptionSource omitted.

// se_CaptionSources omitted.

// se_Clip omitted.

// se_CodecOptions omitted.

// se_Composition omitted.

// se_CreateJobOutput omitted.

// se_CreateJobOutputs omitted.

// se_CreateJobPlaylist omitted.

// se_CreateJobPlaylists omitted.

// se_DetectedProperties omitted.

// se_Encryption omitted.

// se_HlsContentProtection omitted.

// se_InputCaptions omitted.

// se_JobAlbumArt omitted.

// se_JobInput omitted.

// se_JobInputs omitted.

// se_JobWatermark omitted.

// se_JobWatermarks omitted.

// se_Notifications omitted.

// se_OutputKeys omitted.

// se_Permission omitted.

// se_Permissions omitted.

// se_PipelineOutputConfig omitted.

// se_PlayReadyDrm omitted.

// se_PresetWatermark omitted.

// se_PresetWatermarks omitted.

// se_SnsTopics omitted.

// se_Thumbnails omitted.

// se_TimeSpan omitted.

// se_UserMetadata omitted.

// se_VideoParameters omitted.

// de_AccessControls omitted.

// de_Artwork omitted.

// de_Artworks omitted.

// de_AudioCodecOptions omitted.

// de_AudioParameters omitted.

// de_CaptionFormat omitted.

// de_CaptionFormats omitted.

// de_Captions omitted.

// de_CaptionSource omitted.

// de_CaptionSources omitted.

// de_Clip omitted.

// de_CodecOptions omitted.

// de_Composition omitted.

// de_DetectedProperties omitted.

// de_Encryption omitted.

// de_ExceptionMessages omitted.

// de_HlsContentProtection omitted.

// de_InputCaptions omitted.

// de_Job omitted.

// de_JobAlbumArt omitted.

// de_JobInput omitted.

// de_JobInputs omitted.

// de_JobOutput omitted.

// de_JobOutputs omitted.

// de_Jobs omitted.

// de_JobWatermark omitted.

// de_JobWatermarks omitted.

// de_Notifications omitted.

// de_OutputKeys omitted.

// de_Permission omitted.

// de_Permissions omitted.

// de_Pipeline omitted.

// de_PipelineOutputConfig omitted.

// de_Pipelines omitted.

// de_Playlist omitted.

// de_Playlists omitted.

// de_PlayReadyDrm omitted.

// de_Preset omitted.

// de_Presets omitted.

// de_PresetWatermark omitted.

// de_PresetWatermarks omitted.

// de_Thumbnails omitted.

// de_TimeSpan omitted.

// de_Timing omitted.

// de_UserMetadata omitted.

// de_VideoParameters omitted.

// de_Warning omitted.

// de_Warnings omitted.

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

const _A = "Ascending";
const _PT = "PageToken";
