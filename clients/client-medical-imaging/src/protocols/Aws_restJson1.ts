// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@smithy/protocol-http";
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
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "@smithy/uuid";

import { CopyImageSetCommandInput, CopyImageSetCommandOutput } from "../commands/CopyImageSetCommand";
import { CreateDatastoreCommandInput, CreateDatastoreCommandOutput } from "../commands/CreateDatastoreCommand";
import { DeleteDatastoreCommandInput, DeleteDatastoreCommandOutput } from "../commands/DeleteDatastoreCommand";
import { DeleteImageSetCommandInput, DeleteImageSetCommandOutput } from "../commands/DeleteImageSetCommand";
import { GetDatastoreCommandInput, GetDatastoreCommandOutput } from "../commands/GetDatastoreCommand";
import { GetDICOMImportJobCommandInput, GetDICOMImportJobCommandOutput } from "../commands/GetDICOMImportJobCommand";
import { GetImageFrameCommandInput, GetImageFrameCommandOutput } from "../commands/GetImageFrameCommand";
import { GetImageSetCommandInput, GetImageSetCommandOutput } from "../commands/GetImageSetCommand";
import {
  GetImageSetMetadataCommandInput,
  GetImageSetMetadataCommandOutput,
} from "../commands/GetImageSetMetadataCommand";
import { ListDatastoresCommandInput, ListDatastoresCommandOutput } from "../commands/ListDatastoresCommand";
import {
  ListDICOMImportJobsCommandInput,
  ListDICOMImportJobsCommandOutput,
} from "../commands/ListDICOMImportJobsCommand";
import {
  ListImageSetVersionsCommandInput,
  ListImageSetVersionsCommandOutput,
} from "../commands/ListImageSetVersionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { SearchImageSetsCommandInput, SearchImageSetsCommandOutput } from "../commands/SearchImageSetsCommand";
import {
  StartDICOMImportJobCommandInput,
  StartDICOMImportJobCommandOutput,
} from "../commands/StartDICOMImportJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateImageSetMetadataCommandInput,
  UpdateImageSetMetadataCommandOutput,
} from "../commands/UpdateImageSetMetadataCommand";
import { MedicalImagingServiceException as __BaseException } from "../models/MedicalImagingServiceException";
import {
  AccessDeniedException,
  ConflictException,
  CopyDestinationImageSet,
  CopyDestinationImageSetProperties,
  CopyImageSetInformation,
  CopySourceImageSetInformation,
  CopySourceImageSetProperties,
  DatastoreProperties,
  DatastoreSummary,
  DICOMImportJobProperties,
  DICOMImportJobSummary,
  DICOMStudyDateAndTime,
  DICOMUpdates,
  ImageFrameInformation,
  ImageSetProperties,
  ImageSetsMetadataSummary,
  InternalServerException,
  MetadataCopies,
  MetadataUpdates,
  ResourceNotFoundException,
  SearchByAttributeValue,
  SearchCriteria,
  SearchFilter,
  ServiceQuotaExceededException,
  Sort,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CopyImageSetCommand
 */
export const se_CopyImageSetCommand = async (
  input: CopyImageSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/datastore/{datastoreId}/imageSet/{sourceImageSetId}/copyImageSet");
  b.p("datastoreId", () => input.datastoreId!, "{datastoreId}", false);
  b.p("sourceImageSetId", () => input.sourceImageSetId!, "{sourceImageSetId}", false);
  const query: any = map({
    [_f]: [() => input.force !== void 0, () => input[_f]!.toString()],
    [_pTP]: [() => input.promoteToPrimary !== void 0, () => input[_pTP]!.toString()],
  });
  let body: any;
  if (input.copyImageSetInformation !== undefined) {
    body = _json(input.copyImageSetInformation);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "runtime-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDatastoreCommand
 */
export const se_CreateDatastoreCommand = async (
  input: CreateDatastoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/datastore");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      datastoreName: [],
      kmsKeyArn: [],
      lambdaAuthorizerArn: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDatastoreCommand
 */
export const se_DeleteDatastoreCommand = async (
  input: DeleteDatastoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/datastore/{datastoreId}");
  b.p("datastoreId", () => input.datastoreId!, "{datastoreId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteImageSetCommand
 */
export const se_DeleteImageSetCommand = async (
  input: DeleteImageSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/datastore/{datastoreId}/imageSet/{imageSetId}/deleteImageSet");
  b.p("datastoreId", () => input.datastoreId!, "{datastoreId}", false);
  b.p("imageSetId", () => input.imageSetId!, "{imageSetId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "runtime-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDatastoreCommand
 */
export const se_GetDatastoreCommand = async (
  input: GetDatastoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/datastore/{datastoreId}");
  b.p("datastoreId", () => input.datastoreId!, "{datastoreId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDICOMImportJobCommand
 */
export const se_GetDICOMImportJobCommand = async (
  input: GetDICOMImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/getDICOMImportJob/datastore/{datastoreId}/job/{jobId}");
  b.p("datastoreId", () => input.datastoreId!, "{datastoreId}", false);
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetImageFrameCommand
 */
export const se_GetImageFrameCommand = async (
  input: GetImageFrameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/datastore/{datastoreId}/imageSet/{imageSetId}/getImageFrame");
  b.p("datastoreId", () => input.datastoreId!, "{datastoreId}", false);
  b.p("imageSetId", () => input.imageSetId!, "{imageSetId}", false);
  let body: any;
  if (input.imageFrameInformation !== undefined) {
    body = _json(input.imageFrameInformation);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "runtime-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetImageSetCommand
 */
export const se_GetImageSetCommand = async (
  input: GetImageSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/datastore/{datastoreId}/imageSet/{imageSetId}/getImageSet");
  b.p("datastoreId", () => input.datastoreId!, "{datastoreId}", false);
  b.p("imageSetId", () => input.imageSetId!, "{imageSetId}", false);
  const query: any = map({
    [_v]: [, input[_vI]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "runtime-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetImageSetMetadataCommand
 */
export const se_GetImageSetMetadataCommand = async (
  input: GetImageSetMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/datastore/{datastoreId}/imageSet/{imageSetId}/getImageSetMetadata");
  b.p("datastoreId", () => input.datastoreId!, "{datastoreId}", false);
  b.p("imageSetId", () => input.imageSetId!, "{imageSetId}", false);
  const query: any = map({
    [_v]: [, input[_vI]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "runtime-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDatastoresCommand
 */
export const se_ListDatastoresCommand = async (
  input: ListDatastoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/datastore");
  const query: any = map({
    [_dS]: [, input[_dS]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDICOMImportJobsCommand
 */
export const se_ListDICOMImportJobsCommand = async (
  input: ListDICOMImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/listDICOMImportJobs/datastore/{datastoreId}");
  b.p("datastoreId", () => input.datastoreId!, "{datastoreId}", false);
  const query: any = map({
    [_jS]: [, input[_jS]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListImageSetVersionsCommand
 */
export const se_ListImageSetVersionsCommand = async (
  input: ListImageSetVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/datastore/{datastoreId}/imageSet/{imageSetId}/listImageSetVersions");
  b.p("datastoreId", () => input.datastoreId!, "{datastoreId}", false);
  b.p("imageSetId", () => input.imageSetId!, "{imageSetId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "runtime-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).q(query).b(body);
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
 * serializeAws_restJson1SearchImageSetsCommand
 */
export const se_SearchImageSetsCommand = async (
  input: SearchImageSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/datastore/{datastoreId}/searchImageSets");
  b.p("datastoreId", () => input.datastoreId!, "{datastoreId}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  if (input.searchCriteria !== undefined) {
    body = se_SearchCriteria(input.searchCriteria, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "runtime-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartDICOMImportJobCommand
 */
export const se_StartDICOMImportJobCommand = async (
  input: StartDICOMImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/startDICOMImportJob/datastore/{datastoreId}");
  b.p("datastoreId", () => input.datastoreId!, "{datastoreId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      dataAccessRoleArn: [],
      inputOwnerAccountId: [],
      inputS3Uri: [],
      jobName: [],
      outputS3Uri: [],
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
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
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateImageSetMetadataCommand
 */
export const se_UpdateImageSetMetadataCommand = async (
  input: UpdateImageSetMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/datastore/{datastoreId}/imageSet/{imageSetId}/updateImageSetMetadata");
  b.p("datastoreId", () => input.datastoreId!, "{datastoreId}", false);
  b.p("imageSetId", () => input.imageSetId!, "{imageSetId}", false);
  const query: any = map({
    [_lV]: [, __expectNonNull(input[_lVI]!, `latestVersionId`)],
    [_f]: [() => input.force !== void 0, () => input[_f]!.toString()],
  });
  let body: any;
  if (input.updateImageSetMetadataUpdates !== undefined) {
    body = se_MetadataUpdates(input.updateImageSetMetadataUpdates, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "runtime-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CopyImageSetCommand
 */
export const de_CopyImageSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyImageSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    datastoreId: __expectString,
    destinationImageSetProperties: (_) => de_CopyDestinationImageSetProperties(_, context),
    sourceImageSetProperties: (_) => de_CopySourceImageSetProperties(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDatastoreCommand
 */
export const de_CreateDatastoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatastoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    datastoreId: __expectString,
    datastoreStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDatastoreCommand
 */
export const de_DeleteDatastoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatastoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    datastoreId: __expectString,
    datastoreStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteImageSetCommand
 */
export const de_DeleteImageSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    datastoreId: __expectString,
    imageSetId: __expectString,
    imageSetState: __expectString,
    imageSetWorkflowStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDatastoreCommand
 */
export const de_GetDatastoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatastoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    datastoreProperties: (_) => de_DatastoreProperties(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDICOMImportJobCommand
 */
export const de_GetDICOMImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDICOMImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobProperties: (_) => de_DICOMImportJobProperties(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetImageFrameCommand
 */
export const de_GetImageFrameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetImageFrameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_cT]: [, output.headers[_ct]],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.imageFrameBlob = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetImageSetCommand
 */
export const de_GetImageSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    datastoreId: __expectString,
    deletedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    imageSetArn: __expectString,
    imageSetId: __expectString,
    imageSetState: __expectString,
    imageSetWorkflowStatus: __expectString,
    isPrimary: __expectBoolean,
    message: __expectString,
    overrides: _json,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    versionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetImageSetMetadataCommand
 */
export const de_GetImageSetMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetImageSetMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_cT]: [, output.headers[_ct]],
    [_cE]: [, output.headers[_ce]],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.imageSetMetadataBlob = data;
  return contents;
};

/**
 * deserializeAws_restJson1ListDatastoresCommand
 */
export const de_ListDatastoresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatastoresCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    datastoreSummaries: (_) => de_DatastoreSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDICOMImportJobsCommand
 */
export const de_ListDICOMImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDICOMImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobSummaries: (_) => de_DICOMImportJobSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListImageSetVersionsCommand
 */
export const de_ListImageSetVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageSetVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    imageSetPropertiesList: (_) => de_ImageSetPropertiesList(_, context),
    nextToken: __expectString,
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
 * deserializeAws_restJson1SearchImageSetsCommand
 */
export const de_SearchImageSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchImageSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    imageSetsMetadataSummaries: (_) => de_ImageSetsMetadataSummaries(_, context),
    nextToken: __expectString,
    sort: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartDICOMImportJobCommand
 */
export const de_StartDICOMImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDICOMImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    datastoreId: __expectString,
    jobId: __expectString,
    jobStatus: __expectString,
    submittedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
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
 * deserializeAws_restJson1UpdateImageSetMetadataCommand
 */
export const de_UpdateImageSetMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImageSetMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    datastoreId: __expectString,
    imageSetId: __expectString,
    imageSetState: __expectString,
    imageSetWorkflowStatus: __expectString,
    latestVersionId: __expectString,
    message: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
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
    case "com.amazonaws.medicalimaging#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medicalimaging#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.medicalimaging#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.medicalimaging#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.medicalimaging#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.medicalimaging#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.medicalimaging#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_CopyDestinationImageSet omitted.

// se_CopyImageSetInformation omitted.

// se_CopySourceImageSetInformation omitted.

// se_DICOMStudyDateAndTime omitted.

/**
 * serializeAws_restJson1DICOMUpdates
 */
const se_DICOMUpdates = (input: DICOMUpdates, context: __SerdeContext): any => {
  return take(input, {
    removableAttributes: context.base64Encoder,
    updatableAttributes: context.base64Encoder,
  });
};

// se_ImageFrameInformation omitted.

// se_MetadataCopies omitted.

/**
 * serializeAws_restJson1MetadataUpdates
 */
const se_MetadataUpdates = (input: MetadataUpdates, context: __SerdeContext): any => {
  return MetadataUpdates.visit(input, {
    DICOMUpdates: (value) => ({ DICOMUpdates: se_DICOMUpdates(value, context) }),
    revertToVersionId: (value) => ({ revertToVersionId: value }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1SearchByAttributeValue
 */
const se_SearchByAttributeValue = (input: SearchByAttributeValue, context: __SerdeContext): any => {
  return SearchByAttributeValue.visit(input, {
    DICOMAccessionNumber: (value) => ({ DICOMAccessionNumber: value }),
    DICOMPatientId: (value) => ({ DICOMPatientId: value }),
    DICOMSeriesInstanceUID: (value) => ({ DICOMSeriesInstanceUID: value }),
    DICOMStudyDateAndTime: (value) => ({ DICOMStudyDateAndTime: _json(value) }),
    DICOMStudyId: (value) => ({ DICOMStudyId: value }),
    DICOMStudyInstanceUID: (value) => ({ DICOMStudyInstanceUID: value }),
    createdAt: (value) => ({ createdAt: value.getTime() / 1_000 }),
    isPrimary: (value) => ({ isPrimary: value }),
    updatedAt: (value) => ({ updatedAt: value.getTime() / 1_000 }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1SearchByAttributeValues
 */
const se_SearchByAttributeValues = (input: SearchByAttributeValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SearchByAttributeValue(entry, context);
    });
};

/**
 * serializeAws_restJson1SearchCriteria
 */
const se_SearchCriteria = (input: SearchCriteria, context: __SerdeContext): any => {
  return take(input, {
    filters: (_) => se_SearchFilters(_, context),
    sort: _json,
  });
};

/**
 * serializeAws_restJson1SearchFilter
 */
const se_SearchFilter = (input: SearchFilter, context: __SerdeContext): any => {
  return take(input, {
    operator: [],
    values: (_) => se_SearchByAttributeValues(_, context),
  });
};

/**
 * serializeAws_restJson1SearchFilters
 */
const se_SearchFilters = (input: SearchFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SearchFilter(entry, context);
    });
};

// se_Sort omitted.

// se_TagMap omitted.

/**
 * deserializeAws_restJson1CopyDestinationImageSetProperties
 */
const de_CopyDestinationImageSetProperties = (
  output: any,
  context: __SerdeContext
): CopyDestinationImageSetProperties => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    imageSetArn: __expectString,
    imageSetId: __expectString,
    imageSetState: __expectString,
    imageSetWorkflowStatus: __expectString,
    latestVersionId: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1CopySourceImageSetProperties
 */
const de_CopySourceImageSetProperties = (output: any, context: __SerdeContext): CopySourceImageSetProperties => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    imageSetArn: __expectString,
    imageSetId: __expectString,
    imageSetState: __expectString,
    imageSetWorkflowStatus: __expectString,
    latestVersionId: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1DatastoreProperties
 */
const de_DatastoreProperties = (output: any, context: __SerdeContext): DatastoreProperties => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    datastoreArn: __expectString,
    datastoreId: __expectString,
    datastoreName: __expectString,
    datastoreStatus: __expectString,
    kmsKeyArn: __expectString,
    lambdaAuthorizerArn: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1DatastoreSummaries
 */
const de_DatastoreSummaries = (output: any, context: __SerdeContext): DatastoreSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DatastoreSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DatastoreSummary
 */
const de_DatastoreSummary = (output: any, context: __SerdeContext): DatastoreSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    datastoreArn: __expectString,
    datastoreId: __expectString,
    datastoreName: __expectString,
    datastoreStatus: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1DICOMImportJobProperties
 */
const de_DICOMImportJobProperties = (output: any, context: __SerdeContext): DICOMImportJobProperties => {
  return take(output, {
    dataAccessRoleArn: __expectString,
    datastoreId: __expectString,
    endedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    inputS3Uri: __expectString,
    jobId: __expectString,
    jobName: __expectString,
    jobStatus: __expectString,
    message: __expectString,
    outputS3Uri: __expectString,
    submittedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1DICOMImportJobSummaries
 */
const de_DICOMImportJobSummaries = (output: any, context: __SerdeContext): DICOMImportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DICOMImportJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DICOMImportJobSummary
 */
const de_DICOMImportJobSummary = (output: any, context: __SerdeContext): DICOMImportJobSummary => {
  return take(output, {
    dataAccessRoleArn: __expectString,
    datastoreId: __expectString,
    endedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    jobId: __expectString,
    jobName: __expectString,
    jobStatus: __expectString,
    message: __expectString,
    submittedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_DICOMTags omitted.

/**
 * deserializeAws_restJson1ImageSetProperties
 */
const de_ImageSetProperties = (output: any, context: __SerdeContext): ImageSetProperties => {
  return take(output, {
    ImageSetWorkflowStatus: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deletedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    imageSetId: __expectString,
    imageSetState: __expectString,
    isPrimary: __expectBoolean,
    message: __expectString,
    overrides: _json,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    versionId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ImageSetPropertiesList
 */
const de_ImageSetPropertiesList = (output: any, context: __SerdeContext): ImageSetProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImageSetProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImageSetsMetadataSummaries
 */
const de_ImageSetsMetadataSummaries = (output: any, context: __SerdeContext): ImageSetsMetadataSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImageSetsMetadataSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImageSetsMetadataSummary
 */
const de_ImageSetsMetadataSummary = (output: any, context: __SerdeContext): ImageSetsMetadataSummary => {
  return take(output, {
    DICOMTags: _json,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    imageSetId: __expectString,
    isPrimary: __expectBoolean,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    version: __expectInt32,
  }) as any;
};

// de_Overrides omitted.

// de_Sort omitted.

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

const _cE = "contentEncoding";
const _cT = "contentType";
const _ce = "content-encoding";
const _ct = "content-type";
const _dS = "datastoreStatus";
const _f = "force";
const _jS = "jobStatus";
const _lV = "latestVersion";
const _lVI = "latestVersionId";
const _mR = "maxResults";
const _nT = "nextToken";
const _pTP = "promoteToPrimary";
const _tK = "tagKeys";
const _v = "version";
const _vI = "versionId";
