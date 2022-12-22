// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  resolvedPath as __resolvedPath,
  strictParseLong as __strictParseLong,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  BackupObject,
  Chunk,
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

export const serializeAws_restJson1DeleteObjectCommand = async (
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

export const serializeAws_restJson1GetChunkCommand = async (
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

export const serializeAws_restJson1GetObjectMetadataCommand = async (
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

export const serializeAws_restJson1ListChunksCommand = async (
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

export const serializeAws_restJson1ListObjectsCommand = async (
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

export const serializeAws_restJson1NotifyObjectCompleteCommand = async (
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

export const serializeAws_restJson1PutChunkCommand = async (
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

export const serializeAws_restJson1PutObjectCommand = async (
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

export const serializeAws_restJson1StartObjectCommand = async (
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
  body = JSON.stringify({
    ...(input.ThrowOnDuplicate != null && { ThrowOnDuplicate: input.ThrowOnDuplicate }),
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

export const deserializeAws_restJson1DeleteObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteObjectCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.backupstorage#IllegalArgumentException":
      throw await deserializeAws_restJson1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupstorage#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableException":
    case "com.amazonaws.backupstorage#RetryableException":
      throw await deserializeAws_restJson1RetryableExceptionResponse(parsedOutput, context);
    case "ServiceInternalException":
    case "com.amazonaws.backupstorage#ServiceInternalException":
      throw await deserializeAws_restJson1ServiceInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backupstorage#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupstorage#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetChunkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetChunkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetChunkCommandError(output, context);
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

const deserializeAws_restJson1GetChunkCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.backupstorage#IllegalArgumentException":
      throw await deserializeAws_restJson1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "KMSInvalidKeyUsageException":
    case "com.amazonaws.backupstorage#KMSInvalidKeyUsageException":
      throw await deserializeAws_restJson1KMSInvalidKeyUsageExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupstorage#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableException":
    case "com.amazonaws.backupstorage#RetryableException":
      throw await deserializeAws_restJson1RetryableExceptionResponse(parsedOutput, context);
    case "ServiceInternalException":
    case "com.amazonaws.backupstorage#ServiceInternalException":
      throw await deserializeAws_restJson1ServiceInternalExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupstorage#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetObjectMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetObjectMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetObjectMetadataCommandError(output, context);
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

const deserializeAws_restJson1GetObjectMetadataCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.backupstorage#IllegalArgumentException":
      throw await deserializeAws_restJson1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "KMSInvalidKeyUsageException":
    case "com.amazonaws.backupstorage#KMSInvalidKeyUsageException":
      throw await deserializeAws_restJson1KMSInvalidKeyUsageExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupstorage#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableException":
    case "com.amazonaws.backupstorage#RetryableException":
      throw await deserializeAws_restJson1RetryableExceptionResponse(parsedOutput, context);
    case "ServiceInternalException":
    case "com.amazonaws.backupstorage#ServiceInternalException":
      throw await deserializeAws_restJson1ServiceInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backupstorage#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupstorage#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListChunksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChunksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChunksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChunkList != null) {
    contents.ChunkList = deserializeAws_restJson1ChunkList(data.ChunkList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListChunksCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.backupstorage#IllegalArgumentException":
      throw await deserializeAws_restJson1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupstorage#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableException":
    case "com.amazonaws.backupstorage#RetryableException":
      throw await deserializeAws_restJson1RetryableExceptionResponse(parsedOutput, context);
    case "ServiceInternalException":
    case "com.amazonaws.backupstorage#ServiceInternalException":
      throw await deserializeAws_restJson1ServiceInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backupstorage#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListObjectsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ObjectList != null) {
    contents.ObjectList = deserializeAws_restJson1ObjectList(data.ObjectList, context);
  }
  return contents;
};

const deserializeAws_restJson1ListObjectsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.backupstorage#IllegalArgumentException":
      throw await deserializeAws_restJson1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "KMSInvalidKeyUsageException":
    case "com.amazonaws.backupstorage#KMSInvalidKeyUsageException":
      throw await deserializeAws_restJson1KMSInvalidKeyUsageExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupstorage#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableException":
    case "com.amazonaws.backupstorage#RetryableException":
      throw await deserializeAws_restJson1RetryableExceptionResponse(parsedOutput, context);
    case "ServiceInternalException":
    case "com.amazonaws.backupstorage#ServiceInternalException":
      throw await deserializeAws_restJson1ServiceInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backupstorage#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupstorage#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1NotifyObjectCompleteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyObjectCompleteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1NotifyObjectCompleteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ObjectChecksum != null) {
    contents.ObjectChecksum = __expectString(data.ObjectChecksum);
  }
  if (data.ObjectChecksumAlgorithm != null) {
    contents.ObjectChecksumAlgorithm = __expectString(data.ObjectChecksumAlgorithm);
  }
  return contents;
};

const deserializeAws_restJson1NotifyObjectCompleteCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.backupstorage#IllegalArgumentException":
      throw await deserializeAws_restJson1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "KMSInvalidKeyUsageException":
    case "com.amazonaws.backupstorage#KMSInvalidKeyUsageException":
      throw await deserializeAws_restJson1KMSInvalidKeyUsageExceptionResponse(parsedOutput, context);
    case "NotReadableInputStreamException":
    case "com.amazonaws.backupstorage#NotReadableInputStreamException":
      throw await deserializeAws_restJson1NotReadableInputStreamExceptionResponse(parsedOutput, context);
    case "RetryableException":
    case "com.amazonaws.backupstorage#RetryableException":
      throw await deserializeAws_restJson1RetryableExceptionResponse(parsedOutput, context);
    case "ServiceInternalException":
    case "com.amazonaws.backupstorage#ServiceInternalException":
      throw await deserializeAws_restJson1ServiceInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backupstorage#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupstorage#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutChunkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutChunkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutChunkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChunkChecksum != null) {
    contents.ChunkChecksum = __expectString(data.ChunkChecksum);
  }
  if (data.ChunkChecksumAlgorithm != null) {
    contents.ChunkChecksumAlgorithm = __expectString(data.ChunkChecksumAlgorithm);
  }
  return contents;
};

const deserializeAws_restJson1PutChunkCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.backupstorage#IllegalArgumentException":
      throw await deserializeAws_restJson1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "KMSInvalidKeyUsageException":
    case "com.amazonaws.backupstorage#KMSInvalidKeyUsageException":
      throw await deserializeAws_restJson1KMSInvalidKeyUsageExceptionResponse(parsedOutput, context);
    case "NotReadableInputStreamException":
    case "com.amazonaws.backupstorage#NotReadableInputStreamException":
      throw await deserializeAws_restJson1NotReadableInputStreamExceptionResponse(parsedOutput, context);
    case "RetryableException":
    case "com.amazonaws.backupstorage#RetryableException":
      throw await deserializeAws_restJson1RetryableExceptionResponse(parsedOutput, context);
    case "ServiceInternalException":
    case "com.amazonaws.backupstorage#ServiceInternalException":
      throw await deserializeAws_restJson1ServiceInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backupstorage#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupstorage#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InlineChunkChecksum != null) {
    contents.InlineChunkChecksum = __expectString(data.InlineChunkChecksum);
  }
  if (data.InlineChunkChecksumAlgorithm != null) {
    contents.InlineChunkChecksumAlgorithm = __expectString(data.InlineChunkChecksumAlgorithm);
  }
  if (data.ObjectChecksum != null) {
    contents.ObjectChecksum = __expectString(data.ObjectChecksum);
  }
  if (data.ObjectChecksumAlgorithm != null) {
    contents.ObjectChecksumAlgorithm = __expectString(data.ObjectChecksumAlgorithm);
  }
  return contents;
};

const deserializeAws_restJson1PutObjectCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.backupstorage#IllegalArgumentException":
      throw await deserializeAws_restJson1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "KMSInvalidKeyUsageException":
    case "com.amazonaws.backupstorage#KMSInvalidKeyUsageException":
      throw await deserializeAws_restJson1KMSInvalidKeyUsageExceptionResponse(parsedOutput, context);
    case "NotReadableInputStreamException":
    case "com.amazonaws.backupstorage#NotReadableInputStreamException":
      throw await deserializeAws_restJson1NotReadableInputStreamExceptionResponse(parsedOutput, context);
    case "RetryableException":
    case "com.amazonaws.backupstorage#RetryableException":
      throw await deserializeAws_restJson1RetryableExceptionResponse(parsedOutput, context);
    case "ServiceInternalException":
    case "com.amazonaws.backupstorage#ServiceInternalException":
      throw await deserializeAws_restJson1ServiceInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backupstorage#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupstorage#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.UploadId != null) {
    contents.UploadId = __expectString(data.UploadId);
  }
  return contents;
};

const deserializeAws_restJson1StartObjectCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DataAlreadyExistsException":
    case "com.amazonaws.backupstorage#DataAlreadyExistsException":
      throw await deserializeAws_restJson1DataAlreadyExistsExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.backupstorage#IllegalArgumentException":
      throw await deserializeAws_restJson1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupstorage#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "RetryableException":
    case "com.amazonaws.backupstorage#RetryableException":
      throw await deserializeAws_restJson1RetryableExceptionResponse(parsedOutput, context);
    case "ServiceInternalException":
    case "com.amazonaws.backupstorage#ServiceInternalException":
      throw await deserializeAws_restJson1ServiceInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backupstorage#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupstorage#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1DataAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DataAlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Checksum != null) {
    contents.Checksum = __expectString(data.Checksum);
  }
  if (data.ChecksumAlgorithm != null) {
    contents.ChecksumAlgorithm = __expectString(data.ChecksumAlgorithm);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new DataAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1IllegalArgumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalArgumentException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new IllegalArgumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1KMSInvalidKeyUsageExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInvalidKeyUsageException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new KMSInvalidKeyUsageException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1NotReadableInputStreamExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotReadableInputStreamException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new NotReadableInputStreamException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1RetryableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RetryableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new RetryableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceInternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceInternalException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceInternalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1BackupObject = (output: any, context: __SerdeContext): BackupObject => {
  return {
    ChunksCount: __expectLong(output.ChunksCount),
    MetadataString: __expectString(output.MetadataString),
    Name: __expectString(output.Name),
    ObjectChecksum: __expectString(output.ObjectChecksum),
    ObjectChecksumAlgorithm: __expectString(output.ObjectChecksumAlgorithm),
    ObjectToken: __expectString(output.ObjectToken),
  } as any;
};

const deserializeAws_restJson1Chunk = (output: any, context: __SerdeContext): Chunk => {
  return {
    Checksum: __expectString(output.Checksum),
    ChecksumAlgorithm: __expectString(output.ChecksumAlgorithm),
    ChunkToken: __expectString(output.ChunkToken),
    Index: __expectLong(output.Index),
    Length: __expectLong(output.Length),
  } as any;
};

const deserializeAws_restJson1ChunkList = (output: any, context: __SerdeContext): Chunk[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Chunk(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ObjectList = (output: any, context: __SerdeContext): BackupObject[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BackupObject(entry, context);
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
