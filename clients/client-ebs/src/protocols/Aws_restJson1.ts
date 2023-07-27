// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { CompleteSnapshotCommandInput, CompleteSnapshotCommandOutput } from "../commands/CompleteSnapshotCommand";
import { GetSnapshotBlockCommandInput, GetSnapshotBlockCommandOutput } from "../commands/GetSnapshotBlockCommand";
import { ListChangedBlocksCommandInput, ListChangedBlocksCommandOutput } from "../commands/ListChangedBlocksCommand";
import { ListSnapshotBlocksCommandInput, ListSnapshotBlocksCommandOutput } from "../commands/ListSnapshotBlocksCommand";
import { PutSnapshotBlockCommandInput, PutSnapshotBlockCommandOutput } from "../commands/PutSnapshotBlockCommand";
import { StartSnapshotCommandInput, StartSnapshotCommandOutput } from "../commands/StartSnapshotCommand";
import { EBSServiceException as __BaseException } from "../models/EBSServiceException";
import {
  AccessDeniedException,
  ConcurrentLimitExceededException,
  ConflictException,
  InternalServerException,
  RequestThrottledException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  Tag,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CompleteSnapshotCommand
 */
export const se_CompleteSnapshotCommand = async (
  input: CompleteSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-changedblockscount": [
      () => isSerializableHeaderValue(input.ChangedBlocksCount),
      () => input.ChangedBlocksCount!.toString(),
    ],
    "x-amz-checksum": input.Checksum!,
    "x-amz-checksum-algorithm": input.ChecksumAlgorithm!,
    "x-amz-checksum-aggregation-method": input.ChecksumAggregationMethod!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/snapshots/completion/{SnapshotId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "SnapshotId", () => input.SnapshotId!, "{SnapshotId}", false);
  let body: any;
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
 * serializeAws_restJson1GetSnapshotBlockCommand
 */
export const se_GetSnapshotBlockCommand = async (
  input: GetSnapshotBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/snapshots/{SnapshotId}/blocks/{BlockIndex}";
  resolvedPath = __resolvedPath(resolvedPath, input, "SnapshotId", () => input.SnapshotId!, "{SnapshotId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BlockIndex",
    () => input.BlockIndex!.toString(),
    "{BlockIndex}",
    false
  );
  const query: any = map({
    blockToken: [, __expectNonNull(input.BlockToken!, `BlockToken`)],
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
 * serializeAws_restJson1ListChangedBlocksCommand
 */
export const se_ListChangedBlocksCommand = async (
  input: ListChangedBlocksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/snapshots/{SecondSnapshotId}/changedblocks";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SecondSnapshotId",
    () => input.SecondSnapshotId!,
    "{SecondSnapshotId}",
    false
  );
  const query: any = map({
    firstSnapshotId: [, input.FirstSnapshotId!],
    pageToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    startingBlockIndex: [() => input.StartingBlockIndex !== void 0, () => input.StartingBlockIndex!.toString()],
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
 * serializeAws_restJson1ListSnapshotBlocksCommand
 */
export const se_ListSnapshotBlocksCommand = async (
  input: ListSnapshotBlocksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/snapshots/{SnapshotId}/blocks";
  resolvedPath = __resolvedPath(resolvedPath, input, "SnapshotId", () => input.SnapshotId!, "{SnapshotId}", false);
  const query: any = map({
    pageToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    startingBlockIndex: [() => input.StartingBlockIndex !== void 0, () => input.StartingBlockIndex!.toString()],
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
 * serializeAws_restJson1PutSnapshotBlockCommand
 */
export const se_PutSnapshotBlockCommand = async (
  input: PutSnapshotBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
    "content-type": "application/octet-stream",
    "x-amz-data-length": [() => isSerializableHeaderValue(input.DataLength), () => input.DataLength!.toString()],
    "x-amz-progress": [() => isSerializableHeaderValue(input.Progress), () => input.Progress!.toString()],
    "x-amz-checksum": input.Checksum!,
    "x-amz-checksum-algorithm": input.ChecksumAlgorithm!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/snapshots/{SnapshotId}/blocks/{BlockIndex}";
  resolvedPath = __resolvedPath(resolvedPath, input, "SnapshotId", () => input.SnapshotId!, "{SnapshotId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BlockIndex",
    () => input.BlockIndex!.toString(),
    "{BlockIndex}",
    false
  );
  let body: any;
  if (input.BlockData !== undefined) {
    body = input.BlockData;
  }
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

/**
 * serializeAws_restJson1StartSnapshotCommand
 */
export const se_StartSnapshotCommand = async (
  input: StartSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/snapshots";
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      Encrypted: [],
      KmsKeyArn: [],
      ParentSnapshotId: [],
      Tags: (_) => _json(_),
      Timeout: [],
      VolumeSize: [],
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
 * deserializeAws_restJson1CompleteSnapshotCommand
 */
export const de_CompleteSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteSnapshotCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CompleteSnapshotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CompleteSnapshotCommandError
 */
const de_CompleteSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ebs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ebs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestThrottledException":
    case "com.amazonaws.ebs#RequestThrottledException":
      throw await de_RequestThrottledExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ebs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ebs#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ebs#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetSnapshotBlockCommand
 */
export const de_GetSnapshotBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetSnapshotBlockCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSnapshotBlockCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    DataLength: [
      () => void 0 !== output.headers["x-amz-data-length"],
      () => __strictParseInt32(output.headers["x-amz-data-length"]),
    ],
    Checksum: [, output.headers["x-amz-checksum"]],
    ChecksumAlgorithm: [, output.headers["x-amz-checksum-algorithm"]],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.BlockData = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetSnapshotBlockCommandError
 */
const de_GetSnapshotBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ebs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ebs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestThrottledException":
    case "com.amazonaws.ebs#RequestThrottledException":
      throw await de_RequestThrottledExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ebs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ebs#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ebs#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListChangedBlocksCommand
 */
export const de_ListChangedBlocksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChangedBlocksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListChangedBlocksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BlockSize: __expectInt32,
    ChangedBlocks: _json,
    ExpiryTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NextToken: __expectString,
    VolumeSize: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChangedBlocksCommandError
 */
const de_ListChangedBlocksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChangedBlocksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ebs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ebs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestThrottledException":
    case "com.amazonaws.ebs#RequestThrottledException":
      throw await de_RequestThrottledExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ebs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ebs#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ebs#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListSnapshotBlocksCommand
 */
export const de_ListSnapshotBlocksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSnapshotBlocksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSnapshotBlocksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BlockSize: __expectInt32,
    Blocks: _json,
    ExpiryTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NextToken: __expectString,
    VolumeSize: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSnapshotBlocksCommandError
 */
const de_ListSnapshotBlocksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSnapshotBlocksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ebs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ebs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestThrottledException":
    case "com.amazonaws.ebs#RequestThrottledException":
      throw await de_RequestThrottledExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ebs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ebs#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ebs#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutSnapshotBlockCommand
 */
export const de_PutSnapshotBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSnapshotBlockCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_PutSnapshotBlockCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Checksum: [, output.headers["x-amz-checksum"]],
    ChecksumAlgorithm: [, output.headers["x-amz-checksum-algorithm"]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutSnapshotBlockCommandError
 */
const de_PutSnapshotBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSnapshotBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ebs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ebs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestThrottledException":
    case "com.amazonaws.ebs#RequestThrottledException":
      throw await de_RequestThrottledExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ebs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ebs#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ebs#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartSnapshotCommand
 */
export const de_StartSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSnapshotCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_StartSnapshotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BlockSize: __expectInt32,
    Description: __expectString,
    KmsKeyArn: __expectString,
    OwnerId: __expectString,
    ParentSnapshotId: __expectString,
    SnapshotId: __expectString,
    SseType: __expectString,
    StartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    Tags: _json,
    VolumeSize: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartSnapshotCommandError
 */
const de_StartSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ebs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentLimitExceededException":
    case "com.amazonaws.ebs#ConcurrentLimitExceededException":
      throw await de_ConcurrentLimitExceededExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ebs#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ebs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestThrottledException":
    case "com.amazonaws.ebs#RequestThrottledException":
      throw await de_RequestThrottledExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ebs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ebs#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ebs#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    Reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConcurrentLimitExceededExceptionRes
 */
const de_ConcurrentLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConcurrentLimitExceededException({
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
 * deserializeAws_restJson1RequestThrottledExceptionRes
 */
const de_RequestThrottledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestThrottledException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    Reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new RequestThrottledException({
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
    Reason: __expectString,
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
    Message: __expectString,
    Reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
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
    Reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_Tag omitted.

// se_Tags omitted.

// de_Block omitted.

// de_Blocks omitted.

// de_ChangedBlock omitted.

// de_ChangedBlocks omitted.

// de_Tag omitted.

// de_Tags omitted.

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
