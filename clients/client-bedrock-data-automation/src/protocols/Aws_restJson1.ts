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
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateBlueprintCommandInput, CreateBlueprintCommandOutput } from "../commands/CreateBlueprintCommand";
import {
  CreateBlueprintVersionCommandInput,
  CreateBlueprintVersionCommandOutput,
} from "../commands/CreateBlueprintVersionCommand";
import {
  CreateDataAutomationProjectCommandInput,
  CreateDataAutomationProjectCommandOutput,
} from "../commands/CreateDataAutomationProjectCommand";
import { DeleteBlueprintCommandInput, DeleteBlueprintCommandOutput } from "../commands/DeleteBlueprintCommand";
import {
  DeleteDataAutomationProjectCommandInput,
  DeleteDataAutomationProjectCommandOutput,
} from "../commands/DeleteDataAutomationProjectCommand";
import { GetBlueprintCommandInput, GetBlueprintCommandOutput } from "../commands/GetBlueprintCommand";
import {
  GetDataAutomationProjectCommandInput,
  GetDataAutomationProjectCommandOutput,
} from "../commands/GetDataAutomationProjectCommand";
import { ListBlueprintsCommandInput, ListBlueprintsCommandOutput } from "../commands/ListBlueprintsCommand";
import {
  ListDataAutomationProjectsCommandInput,
  ListDataAutomationProjectsCommandOutput,
} from "../commands/ListDataAutomationProjectsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateBlueprintCommandInput, UpdateBlueprintCommandOutput } from "../commands/UpdateBlueprintCommand";
import {
  UpdateDataAutomationProjectCommandInput,
  UpdateDataAutomationProjectCommandOutput,
} from "../commands/UpdateDataAutomationProjectCommand";
import { BedrockDataAutomationServiceException as __BaseException } from "../models/BedrockDataAutomationServiceException";
import {
  AccessDeniedException,
  AudioExtractionCategory,
  AudioExtractionCategoryType,
  AudioOverrideConfiguration,
  AudioStandardExtraction,
  AudioStandardGenerativeField,
  AudioStandardGenerativeFieldType,
  AudioStandardOutputConfiguration,
  Blueprint,
  BlueprintFilter,
  BlueprintItem,
  BlueprintSummary,
  ConflictException,
  CustomOutputConfiguration,
  DataAutomationProject,
  DataAutomationProjectFilter,
  DataAutomationProjectSummary,
  DocumentBoundingBox,
  DocumentExtractionGranularity,
  DocumentExtractionGranularityType,
  DocumentOutputAdditionalFileFormat,
  DocumentOutputFormat,
  DocumentOutputTextFormat,
  DocumentOutputTextFormatType,
  DocumentOverrideConfiguration,
  DocumentStandardExtraction,
  DocumentStandardGenerativeField,
  DocumentStandardOutputConfiguration,
  EncryptionConfiguration,
  ImageBoundingBox,
  ImageExtractionCategory,
  ImageExtractionCategoryType,
  ImageOverrideConfiguration,
  ImageStandardExtraction,
  ImageStandardGenerativeField,
  ImageStandardGenerativeFieldType,
  ImageStandardOutputConfiguration,
  InternalServerException,
  ModalityProcessingConfiguration,
  ModalityRoutingConfiguration,
  OverrideConfiguration,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  SplitterConfiguration,
  StandardOutputConfiguration,
  Tag,
  ThrottlingException,
  ValidationException,
  VideoBoundingBox,
  VideoExtractionCategory,
  VideoExtractionCategoryType,
  VideoOverrideConfiguration,
  VideoStandardExtraction,
  VideoStandardGenerativeField,
  VideoStandardGenerativeFieldType,
  VideoStandardOutputConfiguration,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateBlueprintCommand
 */
export const se_CreateBlueprintCommand = async (
  input: CreateBlueprintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/blueprints");
  let body: any;
  body = JSON.stringify(
    take(input, {
      blueprintName: [],
      blueprintStage: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      encryptionConfiguration: (_) => _json(_),
      schema: [],
      tags: (_) => _json(_),
      type: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateBlueprintVersionCommand
 */
export const se_CreateBlueprintVersionCommand = async (
  input: CreateBlueprintVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/blueprints/{blueprintArn}/versions");
  b.p("blueprintArn", () => input.blueprintArn!, "{blueprintArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDataAutomationProjectCommand
 */
export const se_CreateDataAutomationProjectCommand = async (
  input: CreateDataAutomationProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/data-automation-projects");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      customOutputConfiguration: (_) => _json(_),
      encryptionConfiguration: (_) => _json(_),
      overrideConfiguration: (_) => _json(_),
      projectDescription: [],
      projectName: [],
      projectStage: [],
      standardOutputConfiguration: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteBlueprintCommand
 */
export const se_DeleteBlueprintCommand = async (
  input: DeleteBlueprintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/blueprints/{blueprintArn}");
  b.p("blueprintArn", () => input.blueprintArn!, "{blueprintArn}", false);
  const query: any = map({
    [_bV]: [, input[_bV]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDataAutomationProjectCommand
 */
export const se_DeleteDataAutomationProjectCommand = async (
  input: DeleteDataAutomationProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/data-automation-projects/{projectArn}");
  b.p("projectArn", () => input.projectArn!, "{projectArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetBlueprintCommand
 */
export const se_GetBlueprintCommand = async (
  input: GetBlueprintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/blueprints/{blueprintArn}");
  b.p("blueprintArn", () => input.blueprintArn!, "{blueprintArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      blueprintStage: [],
      blueprintVersion: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDataAutomationProjectCommand
 */
export const se_GetDataAutomationProjectCommand = async (
  input: GetDataAutomationProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/data-automation-projects/{projectArn}");
  b.p("projectArn", () => input.projectArn!, "{projectArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      projectStage: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListBlueprintsCommand
 */
export const se_ListBlueprintsCommand = async (
  input: ListBlueprintsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/blueprints");
  let body: any;
  body = JSON.stringify(
    take(input, {
      blueprintArn: [],
      blueprintStageFilter: [],
      maxResults: [],
      nextToken: [],
      projectFilter: (_) => _json(_),
      resourceOwner: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDataAutomationProjectsCommand
 */
export const se_ListDataAutomationProjectsCommand = async (
  input: ListDataAutomationProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/data-automation-projects");
  let body: any;
  body = JSON.stringify(
    take(input, {
      blueprintFilter: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      projectStageFilter: [],
      resourceOwner: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listTagsForResource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceARN: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
  b.bp("/tagResource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceARN: [],
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
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/untagResource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceARN: [],
      tagKeys: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateBlueprintCommand
 */
export const se_UpdateBlueprintCommand = async (
  input: UpdateBlueprintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/blueprints/{blueprintArn}");
  b.p("blueprintArn", () => input.blueprintArn!, "{blueprintArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      blueprintStage: [],
      encryptionConfiguration: (_) => _json(_),
      schema: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDataAutomationProjectCommand
 */
export const se_UpdateDataAutomationProjectCommand = async (
  input: UpdateDataAutomationProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/data-automation-projects/{projectArn}");
  b.p("projectArn", () => input.projectArn!, "{projectArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      customOutputConfiguration: (_) => _json(_),
      encryptionConfiguration: (_) => _json(_),
      overrideConfiguration: (_) => _json(_),
      projectDescription: [],
      projectStage: [],
      standardOutputConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateBlueprintCommand
 */
export const de_CreateBlueprintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBlueprintCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    blueprint: (_) => de_Blueprint(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateBlueprintVersionCommand
 */
export const de_CreateBlueprintVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBlueprintVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    blueprint: (_) => de_Blueprint(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDataAutomationProjectCommand
 */
export const de_CreateDataAutomationProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataAutomationProjectCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    projectArn: __expectString,
    projectStage: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBlueprintCommand
 */
export const de_DeleteBlueprintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBlueprintCommandOutput> => {
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
 * deserializeAws_restJson1DeleteDataAutomationProjectCommand
 */
export const de_DeleteDataAutomationProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataAutomationProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    projectArn: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetBlueprintCommand
 */
export const de_GetBlueprintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlueprintCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    blueprint: (_) => de_Blueprint(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDataAutomationProjectCommand
 */
export const de_GetDataAutomationProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataAutomationProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    project: (_) => de_DataAutomationProject(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListBlueprintsCommand
 */
export const de_ListBlueprintsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBlueprintsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    blueprints: (_) => de_Blueprints(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDataAutomationProjectsCommand
 */
export const de_ListDataAutomationProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataAutomationProjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    projects: (_) => de_DataAutomationProjectSummaries(_, context),
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
 * deserializeAws_restJson1UpdateBlueprintCommand
 */
export const de_UpdateBlueprintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBlueprintCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    blueprint: (_) => de_Blueprint(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDataAutomationProjectCommand
 */
export const de_UpdateDataAutomationProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataAutomationProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    projectArn: __expectString,
    projectStage: __expectString,
    status: __expectString,
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
    case "com.amazonaws.bedrockdataautomation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.bedrockdataautomation#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.bedrockdataautomation#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.bedrockdataautomation#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.bedrockdataautomation#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.bedrockdataautomation#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.bedrockdataautomation#ResourceNotFoundException":
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
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
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
    fieldList: _json,
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AudioExtractionCategory omitted.

// se_AudioExtractionCategoryTypes omitted.

// se_AudioOverrideConfiguration omitted.

// se_AudioStandardExtraction omitted.

// se_AudioStandardGenerativeField omitted.

// se_AudioStandardGenerativeFieldTypes omitted.

// se_AudioStandardOutputConfiguration omitted.

// se_BlueprintFilter omitted.

// se_BlueprintItem omitted.

// se_BlueprintItems omitted.

// se_CustomOutputConfiguration omitted.

// se_DataAutomationProjectFilter omitted.

// se_DocumentBoundingBox omitted.

// se_DocumentExtractionGranularity omitted.

// se_DocumentExtractionGranularityTypes omitted.

// se_DocumentOutputAdditionalFileFormat omitted.

// se_DocumentOutputFormat omitted.

// se_DocumentOutputTextFormat omitted.

// se_DocumentOutputTextFormatTypes omitted.

// se_DocumentOverrideConfiguration omitted.

// se_DocumentStandardExtraction omitted.

// se_DocumentStandardGenerativeField omitted.

// se_DocumentStandardOutputConfiguration omitted.

// se_EncryptionConfiguration omitted.

// se_ImageBoundingBox omitted.

// se_ImageExtractionCategory omitted.

// se_ImageExtractionCategoryTypes omitted.

// se_ImageOverrideConfiguration omitted.

// se_ImageStandardExtraction omitted.

// se_ImageStandardGenerativeField omitted.

// se_ImageStandardGenerativeFieldTypes omitted.

// se_ImageStandardOutputConfiguration omitted.

// se_KmsEncryptionContext omitted.

// se_ModalityProcessingConfiguration omitted.

// se_ModalityRoutingConfiguration omitted.

// se_OverrideConfiguration omitted.

// se_SplitterConfiguration omitted.

// se_StandardOutputConfiguration omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_VideoBoundingBox omitted.

// se_VideoExtractionCategory omitted.

// se_VideoExtractionCategoryTypes omitted.

// se_VideoOverrideConfiguration omitted.

// se_VideoStandardExtraction omitted.

// se_VideoStandardGenerativeField omitted.

// se_VideoStandardGenerativeFieldTypes omitted.

// se_VideoStandardOutputConfiguration omitted.

// de_AudioExtractionCategory omitted.

// de_AudioExtractionCategoryTypes omitted.

// de_AudioOverrideConfiguration omitted.

// de_AudioStandardExtraction omitted.

// de_AudioStandardGenerativeField omitted.

// de_AudioStandardGenerativeFieldTypes omitted.

// de_AudioStandardOutputConfiguration omitted.

/**
 * deserializeAws_restJson1Blueprint
 */
const de_Blueprint = (output: any, context: __SerdeContext): Blueprint => {
  return take(output, {
    blueprintArn: __expectString,
    blueprintName: __expectString,
    blueprintStage: __expectString,
    blueprintVersion: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    kmsEncryptionContext: _json,
    kmsKeyId: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    schema: __expectString,
    type: __expectString,
  }) as any;
};

// de_BlueprintItem omitted.

// de_BlueprintItems omitted.

/**
 * deserializeAws_restJson1Blueprints
 */
const de_Blueprints = (output: any, context: __SerdeContext): BlueprintSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BlueprintSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BlueprintSummary
 */
const de_BlueprintSummary = (output: any, context: __SerdeContext): BlueprintSummary => {
  return take(output, {
    blueprintArn: __expectString,
    blueprintName: __expectString,
    blueprintStage: __expectString,
    blueprintVersion: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastModifiedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_CustomOutputConfiguration omitted.

/**
 * deserializeAws_restJson1DataAutomationProject
 */
const de_DataAutomationProject = (output: any, context: __SerdeContext): DataAutomationProject => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customOutputConfiguration: _json,
    kmsEncryptionContext: _json,
    kmsKeyId: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    overrideConfiguration: _json,
    projectArn: __expectString,
    projectDescription: __expectString,
    projectName: __expectString,
    projectStage: __expectString,
    standardOutputConfiguration: _json,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DataAutomationProjectSummaries
 */
const de_DataAutomationProjectSummaries = (output: any, context: __SerdeContext): DataAutomationProjectSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataAutomationProjectSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataAutomationProjectSummary
 */
const de_DataAutomationProjectSummary = (output: any, context: __SerdeContext): DataAutomationProjectSummary => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    projectArn: __expectString,
    projectName: __expectString,
    projectStage: __expectString,
  }) as any;
};

// de_DocumentBoundingBox omitted.

// de_DocumentExtractionGranularity omitted.

// de_DocumentExtractionGranularityTypes omitted.

// de_DocumentOutputAdditionalFileFormat omitted.

// de_DocumentOutputFormat omitted.

// de_DocumentOutputTextFormat omitted.

// de_DocumentOutputTextFormatTypes omitted.

// de_DocumentOverrideConfiguration omitted.

// de_DocumentStandardExtraction omitted.

// de_DocumentStandardGenerativeField omitted.

// de_DocumentStandardOutputConfiguration omitted.

// de_ImageBoundingBox omitted.

// de_ImageExtractionCategory omitted.

// de_ImageExtractionCategoryTypes omitted.

// de_ImageOverrideConfiguration omitted.

// de_ImageStandardExtraction omitted.

// de_ImageStandardGenerativeField omitted.

// de_ImageStandardGenerativeFieldTypes omitted.

// de_ImageStandardOutputConfiguration omitted.

// de_KmsEncryptionContext omitted.

// de_ModalityProcessingConfiguration omitted.

// de_ModalityRoutingConfiguration omitted.

// de_OverrideConfiguration omitted.

// de_SplitterConfiguration omitted.

// de_StandardOutputConfiguration omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_VideoBoundingBox omitted.

// de_VideoExtractionCategory omitted.

// de_VideoExtractionCategoryTypes omitted.

// de_VideoOverrideConfiguration omitted.

// de_VideoStandardExtraction omitted.

// de_VideoStandardGenerativeField omitted.

// de_VideoStandardGenerativeFieldTypes omitted.

// de_VideoStandardOutputConfiguration omitted.

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

const _bV = "blueprintVersion";
