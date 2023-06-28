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
  resolvedPath as __resolvedPath,
  strictParseLong as __strictParseLong,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { DeleteObjectCommandInput, DeleteObjectCommandOutput } from "../commands/DeleteObjectCommand";
import { GetChunkCommandInput, GetChunkCommandOutput } from "../commands/GetChunkCommand";
import { GetObjectMetadataCommandInput, GetObjectMetadataCommandOutput } from "../commands/GetObjectMetadataCommand";
import { ListChunksCommandInput, ListChunksCommandOutput } from "../commands/ListChunksCommand";
import { ListObjectsCommandInput, ListObjectsCommandOutput } from "../commands/ListObjectsCommand";
import {
  NotifyObjectCompleteCommandInput,
  NotifyObjectCompleteCommandOutput,
} from "../commands/NotifyObjectCompleteCommand";
import { PutChunkCommandInput, PutChunkCommandOutput } from "../commands/PutChunkCommand";
import { PutObjectCommandInput, PutObjectCommandOutput } from "../commands/PutObjectCommand";
import { StartObjectCommandInput, StartObjectCommandOutput } from "../commands/StartObjectCommand";
import { BackupStorageServiceException as __BaseException } from "../models/BackupStorageServiceException";
import {
  AccessDeniedException,
  DataAlreadyExistsException,
  IllegalArgumentException,
  KMSInvalidKeyUsageException,
  NotReadableInputStreamException,
  ResourceNotFoundException,
  RetryableException,
  ServiceInternalException,
  ServiceUnavailableException,
  ThrottlingException,
} from "../models/models_0";

/**
 * serializeAws_restJson1DeleteObjectCommand
 */
export const se_DeleteObjectCommand = async (
  input: DeleteObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-jobs/{BackupJobId}/object/{ObjectName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "BackupJobId", () => input.BackupJobId!, "{BackupJobId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "ObjectName", () => input.ObjectName!, "{ObjectName}", false);
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
 * serializeAws_restJson1GetChunkCommand
 */
export const se_GetChunkCommand = async (
  input: GetChunkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restore-jobs/{StorageJobId}/chunk/{ChunkToken}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "StorageJobId",
    () => input.StorageJobId!,
    "{StorageJobId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "ChunkToken", () => input.ChunkToken!, "{ChunkToken}", false);
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
 * serializeAws_restJson1GetObjectMetadataCommand
 */
export const se_GetObjectMetadataCommand = async (
  input: GetObjectMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restore-jobs/{StorageJobId}/object/{ObjectToken}/metadata";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "StorageJobId",
    () => input.StorageJobId!,
    "{StorageJobId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "ObjectToken", () => input.ObjectToken!, "{ObjectToken}", false);
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
 * serializeAws_restJson1ListChunksCommand
 */
export const se_ListChunksCommand = async (
  input: ListChunksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restore-jobs/{StorageJobId}/chunks/{ObjectToken}/list";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "StorageJobId",
    () => input.StorageJobId!,
    "{StorageJobId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "ObjectToken", () => input.ObjectToken!, "{ObjectToken}", false);
  const query: any = map({
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
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
 * serializeAws_restJson1ListObjectsCommand
 */
export const se_ListObjectsCommand = async (
  input: ListObjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restore-jobs/{StorageJobId}/objects/list";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "StorageJobId",
    () => input.StorageJobId!,
    "{StorageJobId}",
    false
  );
  const query: any = map({
    "starting-object-name": [, input.StartingObjectName!],
    "starting-object-prefix": [, input.StartingObjectPrefix!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
    "created-before": [
      () => input.CreatedBefore !== void 0,
      () => (input.CreatedBefore!.toISOString().split(".")[0] + "Z").toString(),
    ],
    "created-after": [
      () => input.CreatedAfter !== void 0,
      () => (input.CreatedAfter!.toISOString().split(".")[0] + "Z").toString(),
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

/**
 * serializeAws_restJson1NotifyObjectCompleteCommand
 */
export const se_NotifyObjectCompleteCommand = async (
  input: NotifyObjectCompleteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
    "content-type": "application/octet-stream",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-jobs/{BackupJobId}/object/{UploadId}/complete";
  resolvedPath = __resolvedPath(resolvedPath, input, "BackupJobId", () => input.BackupJobId!, "{BackupJobId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "UploadId", () => input.UploadId!, "{UploadId}", false);
  const query: any = map({
    checksum: [, __expectNonNull(input.ObjectChecksum!, `ObjectChecksum`)],
    "checksum-algorithm": [, __expectNonNull(input.ObjectChecksumAlgorithm!, `ObjectChecksumAlgorithm`)],
    "metadata-string": [, input.MetadataString!],
    "metadata-blob-length": [() => input.MetadataBlobLength !== void 0, () => input.MetadataBlobLength!.toString()],
    "metadata-checksum": [, input.MetadataBlobChecksum!],
    "metadata-checksum-algorithm": [, input.MetadataBlobChecksumAlgorithm!],
  });
  let body: any;
  if (input.MetadataBlob !== undefined) {
    body = input.MetadataBlob;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1PutChunkCommand
 */
export const se_PutChunkCommand = async (
  input: PutChunkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
    "content-type": "application/octet-stream",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-jobs/{BackupJobId}/chunk/{UploadId}/{ChunkIndex}";
  resolvedPath = __resolvedPath(resolvedPath, input, "BackupJobId", () => input.BackupJobId!, "{BackupJobId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "UploadId", () => input.UploadId!, "{UploadId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ChunkIndex",
    () => input.ChunkIndex!.toString(),
    "{ChunkIndex}",
    false
  );
  const query: any = map({
    length: [__expectNonNull(input.Length, `Length`) != null, () => input.Length!.toString()],
    checksum: [, __expectNonNull(input.Checksum!, `Checksum`)],
    "checksum-algorithm": [, __expectNonNull(input.ChecksumAlgorithm!, `ChecksumAlgorithm`)],
  });
  let body: any;
  if (input.Data !== undefined) {
    body = input.Data;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1PutObjectCommand
 */
export const se_PutObjectCommand = async (
  input: PutObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
    "content-type": "application/octet-stream",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-jobs/{BackupJobId}/object/{ObjectName}/put-object";
  resolvedPath = __resolvedPath(resolvedPath, input, "BackupJobId", () => input.BackupJobId!, "{BackupJobId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "ObjectName", () => input.ObjectName!, "{ObjectName}", false);
  const query: any = map({
    "metadata-string": [, input.MetadataString!],
    length: [() => input.InlineChunkLength !== void 0, () => input.InlineChunkLength!.toString()],
    checksum: [, input.InlineChunkChecksum!],
    "checksum-algorithm": [, input.InlineChunkChecksumAlgorithm!],
    "object-checksum": [, input.ObjectChecksum!],
    "object-checksum-algorithm": [, input.ObjectChecksumAlgorithm!],
    throwOnDuplicate: [() => input.ThrowOnDuplicate !== void 0, () => input.ThrowOnDuplicate!.toString()],
  });
  let body: any;
  if (input.InlineChunk !== undefined) {
    body = input.InlineChunk;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1StartObjectCommand
 */
export const se_StartObjectCommand = async (
  input: StartObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-jobs/{BackupJobId}/object/{ObjectName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "BackupJobId", () => input.BackupJobId!, "{BackupJobId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "ObjectName", () => input.ObjectName!, "{ObjectName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ThrowOnDuplicate: [],
    })
  );
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
 * deserializeAws_restJson1DeleteObjectCommand
 */
export const de_DeleteObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteObjectCommandError
 */
const de_DeleteObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.backupstorage#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.backupstorage#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupstorage#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableException":
    case "com.amazonaws.backupstorage#RetryableException":
      throw await de_RetryableExceptionRes(parsedOutput, context);
    case "ServiceInternalException":
    case "com.amazonaws.backupstorage#ServiceInternalException":
      throw await de_ServiceInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backupstorage#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupstorage#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetChunkCommand
 */
export const de_GetChunkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetChunkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetChunkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Length: [
      () => void 0 !== output.headers["x-amz-data-length"],
      () => __strictParseLong(output.headers["x-amz-data-length"]),
    ],
    Checksum: [, output.headers["x-amz-checksum"]],
    ChecksumAlgorithm: [, output.headers["x-amz-checksum-algorithm"]],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.Data = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetChunkCommandError
 */
const de_GetChunkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChunkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.backupstorage#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.backupstorage#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "KMSInvalidKeyUsageException":
    case "com.amazonaws.backupstorage#KMSInvalidKeyUsageException":
      throw await de_KMSInvalidKeyUsageExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupstorage#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableException":
    case "com.amazonaws.backupstorage#RetryableException":
      throw await de_RetryableExceptionRes(parsedOutput, context);
    case "ServiceInternalException":
    case "com.amazonaws.backupstorage#ServiceInternalException":
      throw await de_ServiceInternalExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupstorage#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetObjectMetadataCommand
 */
export const de_GetObjectMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetObjectMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetObjectMetadataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    MetadataString: [, output.headers["x-amz-metadata-string"]],
    MetadataBlobLength: [
      () => void 0 !== output.headers["x-amz-data-length"],
      () => __strictParseLong(output.headers["x-amz-data-length"]),
    ],
    MetadataBlobChecksum: [, output.headers["x-amz-checksum"]],
    MetadataBlobChecksumAlgorithm: [, output.headers["x-amz-checksum-algorithm"]],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.MetadataBlob = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetObjectMetadataCommandError
 */
const de_GetObjectMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.backupstorage#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.backupstorage#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "KMSInvalidKeyUsageException":
    case "com.amazonaws.backupstorage#KMSInvalidKeyUsageException":
      throw await de_KMSInvalidKeyUsageExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupstorage#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableException":
    case "com.amazonaws.backupstorage#RetryableException":
      throw await de_RetryableExceptionRes(parsedOutput, context);
    case "ServiceInternalException":
    case "com.amazonaws.backupstorage#ServiceInternalException":
      throw await de_ServiceInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backupstorage#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupstorage#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListChunksCommand
 */
export const de_ListChunksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChunksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListChunksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChunkList: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChunksCommandError
 */
const de_ListChunksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChunksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.backupstorage#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.backupstorage#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupstorage#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableException":
    case "com.amazonaws.backupstorage#RetryableException":
      throw await de_RetryableExceptionRes(parsedOutput, context);
    case "ServiceInternalException":
    case "com.amazonaws.backupstorage#ServiceInternalException":
      throw await de_ServiceInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backupstorage#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListObjectsCommand
 */
export const de_ListObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListObjectsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ObjectList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListObjectsCommandError
 */
const de_ListObjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.backupstorage#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.backupstorage#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "KMSInvalidKeyUsageException":
    case "com.amazonaws.backupstorage#KMSInvalidKeyUsageException":
      throw await de_KMSInvalidKeyUsageExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupstorage#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableException":
    case "com.amazonaws.backupstorage#RetryableException":
      throw await de_RetryableExceptionRes(parsedOutput, context);
    case "ServiceInternalException":
    case "com.amazonaws.backupstorage#ServiceInternalException":
      throw await de_ServiceInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backupstorage#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupstorage#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1NotifyObjectCompleteCommand
 */
export const de_NotifyObjectCompleteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyObjectCompleteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_NotifyObjectCompleteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ObjectChecksum: __expectString,
    ObjectChecksumAlgorithm: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1NotifyObjectCompleteCommandError
 */
const de_NotifyObjectCompleteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyObjectCompleteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.backupstorage#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.backupstorage#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "KMSInvalidKeyUsageException":
    case "com.amazonaws.backupstorage#KMSInvalidKeyUsageException":
      throw await de_KMSInvalidKeyUsageExceptionRes(parsedOutput, context);
    case "NotReadableInputStreamException":
    case "com.amazonaws.backupstorage#NotReadableInputStreamException":
      throw await de_NotReadableInputStreamExceptionRes(parsedOutput, context);
    case "RetryableException":
    case "com.amazonaws.backupstorage#RetryableException":
      throw await de_RetryableExceptionRes(parsedOutput, context);
    case "ServiceInternalException":
    case "com.amazonaws.backupstorage#ServiceInternalException":
      throw await de_ServiceInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backupstorage#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupstorage#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutChunkCommand
 */
export const de_PutChunkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutChunkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutChunkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChunkChecksum: __expectString,
    ChunkChecksumAlgorithm: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutChunkCommandError
 */
const de_PutChunkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutChunkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.backupstorage#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.backupstorage#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "KMSInvalidKeyUsageException":
    case "com.amazonaws.backupstorage#KMSInvalidKeyUsageException":
      throw await de_KMSInvalidKeyUsageExceptionRes(parsedOutput, context);
    case "NotReadableInputStreamException":
    case "com.amazonaws.backupstorage#NotReadableInputStreamException":
      throw await de_NotReadableInputStreamExceptionRes(parsedOutput, context);
    case "RetryableException":
    case "com.amazonaws.backupstorage#RetryableException":
      throw await de_RetryableExceptionRes(parsedOutput, context);
    case "ServiceInternalException":
    case "com.amazonaws.backupstorage#ServiceInternalException":
      throw await de_ServiceInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backupstorage#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupstorage#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutObjectCommand
 */
export const de_PutObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InlineChunkChecksum: __expectString,
    InlineChunkChecksumAlgorithm: __expectString,
    ObjectChecksum: __expectString,
    ObjectChecksumAlgorithm: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutObjectCommandError
 */
const de_PutObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.backupstorage#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.backupstorage#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "KMSInvalidKeyUsageException":
    case "com.amazonaws.backupstorage#KMSInvalidKeyUsageException":
      throw await de_KMSInvalidKeyUsageExceptionRes(parsedOutput, context);
    case "NotReadableInputStreamException":
    case "com.amazonaws.backupstorage#NotReadableInputStreamException":
      throw await de_NotReadableInputStreamExceptionRes(parsedOutput, context);
    case "RetryableException":
    case "com.amazonaws.backupstorage#RetryableException":
      throw await de_RetryableExceptionRes(parsedOutput, context);
    case "ServiceInternalException":
    case "com.amazonaws.backupstorage#ServiceInternalException":
      throw await de_ServiceInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backupstorage#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupstorage#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartObjectCommand
 */
export const de_StartObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    UploadId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartObjectCommandError
 */
const de_StartObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.backupstorage#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DataAlreadyExistsException":
    case "com.amazonaws.backupstorage#DataAlreadyExistsException":
      throw await de_DataAlreadyExistsExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.backupstorage#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupstorage#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RetryableException":
    case "com.amazonaws.backupstorage#RetryableException":
      throw await de_RetryableExceptionRes(parsedOutput, context);
    case "ServiceInternalException":
    case "com.amazonaws.backupstorage#ServiceInternalException":
      throw await de_ServiceInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backupstorage#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupstorage#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DataAlreadyExistsExceptionRes
 */
const de_DataAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DataAlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Checksum: __expectString,
    ChecksumAlgorithm: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DataAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1IllegalArgumentExceptionRes
 */
const de_IllegalArgumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalArgumentException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new IllegalArgumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1KMSInvalidKeyUsageExceptionRes
 */
const de_KMSInvalidKeyUsageExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInvalidKeyUsageException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new KMSInvalidKeyUsageException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotReadableInputStreamExceptionRes
 */
const de_NotReadableInputStreamExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotReadableInputStreamException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotReadableInputStreamException({
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
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1RetryableExceptionRes
 */
const de_RetryableExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<RetryableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new RetryableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceInternalExceptionRes
 */
const de_ServiceInternalExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceInternalException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceInternalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceUnavailableException({
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
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// de_BackupObject omitted.

// de_Chunk omitted.

// de_ChunkList omitted.

// de_ObjectList omitted.

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
