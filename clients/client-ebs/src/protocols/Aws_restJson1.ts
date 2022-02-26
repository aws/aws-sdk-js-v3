import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  parseEpochTimestamp as __parseEpochTimestamp,
  strictParseInt32 as __strictParseInt32,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
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
  Block,
  ChangedBlock,
  ConcurrentLimitExceededException,
  ConflictException,
  InternalServerException,
  RequestThrottledException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  Tag,
  ValidationException,
} from "../models/models_0";

export const serializeAws_restJson1CompleteSnapshotCommand = async (
  input: CompleteSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChangedBlocksCount) && {
      "x-amz-changedblockscount": input.ChangedBlocksCount!.toString(),
    }),
    ...(isSerializableHeaderValue(input.Checksum) && { "x-amz-checksum": input.Checksum! }),
    ...(isSerializableHeaderValue(input.ChecksumAlgorithm) && { "x-amz-checksum-algorithm": input.ChecksumAlgorithm! }),
    ...(isSerializableHeaderValue(input.ChecksumAggregationMethod) && {
      "x-amz-checksum-aggregation-method": input.ChecksumAggregationMethod!,
    }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/snapshots/completion/{SnapshotId}";
  if (input.SnapshotId !== undefined) {
    const labelValue: string = input.SnapshotId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SnapshotId.");
    }
    resolvedPath = resolvedPath.replace("{SnapshotId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SnapshotId.");
  }
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

export const serializeAws_restJson1GetSnapshotBlockCommand = async (
  input: GetSnapshotBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/snapshots/{SnapshotId}/blocks/{BlockIndex}";
  if (input.SnapshotId !== undefined) {
    const labelValue: string = input.SnapshotId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SnapshotId.");
    }
    resolvedPath = resolvedPath.replace("{SnapshotId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SnapshotId.");
  }
  if (input.BlockIndex !== undefined) {
    const labelValue: string = input.BlockIndex.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BlockIndex.");
    }
    resolvedPath = resolvedPath.replace("{BlockIndex}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BlockIndex.");
  }
  const query: any = {
    ...(input.BlockToken !== undefined && { blockToken: input.BlockToken }),
  };
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

export const serializeAws_restJson1ListChangedBlocksCommand = async (
  input: ListChangedBlocksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/snapshots/{SecondSnapshotId}/changedblocks";
  if (input.SecondSnapshotId !== undefined) {
    const labelValue: string = input.SecondSnapshotId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SecondSnapshotId.");
    }
    resolvedPath = resolvedPath.replace("{SecondSnapshotId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SecondSnapshotId.");
  }
  const query: any = {
    ...(input.FirstSnapshotId !== undefined && { firstSnapshotId: input.FirstSnapshotId }),
    ...(input.NextToken !== undefined && { pageToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.StartingBlockIndex !== undefined && { startingBlockIndex: input.StartingBlockIndex.toString() }),
  };
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

export const serializeAws_restJson1ListSnapshotBlocksCommand = async (
  input: ListSnapshotBlocksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/snapshots/{SnapshotId}/blocks";
  if (input.SnapshotId !== undefined) {
    const labelValue: string = input.SnapshotId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SnapshotId.");
    }
    resolvedPath = resolvedPath.replace("{SnapshotId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SnapshotId.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { pageToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.StartingBlockIndex !== undefined && { startingBlockIndex: input.StartingBlockIndex.toString() }),
  };
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

export const serializeAws_restJson1PutSnapshotBlockCommand = async (
  input: PutSnapshotBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/octet-stream",
    "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
    ...(isSerializableHeaderValue(input.DataLength) && { "x-amz-data-length": input.DataLength!.toString() }),
    ...(isSerializableHeaderValue(input.Progress) && { "x-amz-progress": input.Progress!.toString() }),
    ...(isSerializableHeaderValue(input.Checksum) && { "x-amz-checksum": input.Checksum! }),
    ...(isSerializableHeaderValue(input.ChecksumAlgorithm) && { "x-amz-checksum-algorithm": input.ChecksumAlgorithm! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/snapshots/{SnapshotId}/blocks/{BlockIndex}";
  if (input.SnapshotId !== undefined) {
    const labelValue: string = input.SnapshotId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SnapshotId.");
    }
    resolvedPath = resolvedPath.replace("{SnapshotId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SnapshotId.");
  }
  if (input.BlockIndex !== undefined) {
    const labelValue: string = input.BlockIndex.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BlockIndex.");
    }
    resolvedPath = resolvedPath.replace("{BlockIndex}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BlockIndex.");
  }
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

export const serializeAws_restJson1StartSnapshotCommand = async (
  input: StartSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/snapshots";
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Encrypted !== undefined && input.Encrypted !== null && { Encrypted: input.Encrypted }),
    ...(input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { KmsKeyArn: input.KmsKeyArn }),
    ...(input.ParentSnapshotId !== undefined &&
      input.ParentSnapshotId !== null && { ParentSnapshotId: input.ParentSnapshotId }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
    ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
    ...(input.VolumeSize !== undefined && input.VolumeSize !== null && { VolumeSize: input.VolumeSize }),
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

export const deserializeAws_restJson1CompleteSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteSnapshotCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CompleteSnapshotCommandError(output, context);
  }
  const contents: CompleteSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    Status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = __expectString(data.Status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CompleteSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ebs#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ebs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "RequestThrottledException":
    case "com.amazonaws.ebs#RequestThrottledException":
      throw await deserializeAws_restJson1RequestThrottledExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ebs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ebs#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ebs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetSnapshotBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotBlockCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSnapshotBlockCommandError(output, context);
  }
  const contents: GetSnapshotBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
    BlockData: undefined,
    Checksum: undefined,
    ChecksumAlgorithm: undefined,
    DataLength: undefined,
  };
  if (output.headers["x-amz-data-length"] !== undefined) {
    contents.DataLength = __strictParseInt32(output.headers["x-amz-data-length"]);
  }
  if (output.headers["x-amz-checksum"] !== undefined) {
    contents.Checksum = output.headers["x-amz-checksum"];
  }
  if (output.headers["x-amz-checksum-algorithm"] !== undefined) {
    contents.ChecksumAlgorithm = output.headers["x-amz-checksum-algorithm"];
  }
  const data: any = output.body;
  contents.BlockData = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSnapshotBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ebs#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ebs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "RequestThrottledException":
    case "com.amazonaws.ebs#RequestThrottledException":
      throw await deserializeAws_restJson1RequestThrottledExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ebs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ebs#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ebs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListChangedBlocksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChangedBlocksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChangedBlocksCommandError(output, context);
  }
  const contents: ListChangedBlocksCommandOutput = {
    $metadata: deserializeMetadata(output),
    BlockSize: undefined,
    ChangedBlocks: undefined,
    ExpiryTime: undefined,
    NextToken: undefined,
    VolumeSize: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BlockSize !== undefined && data.BlockSize !== null) {
    contents.BlockSize = __expectInt32(data.BlockSize);
  }
  if (data.ChangedBlocks !== undefined && data.ChangedBlocks !== null) {
    contents.ChangedBlocks = deserializeAws_restJson1ChangedBlocks(data.ChangedBlocks, context);
  }
  if (data.ExpiryTime !== undefined && data.ExpiryTime !== null) {
    contents.ExpiryTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.ExpiryTime)));
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.VolumeSize !== undefined && data.VolumeSize !== null) {
    contents.VolumeSize = __expectLong(data.VolumeSize);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListChangedBlocksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChangedBlocksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ebs#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ebs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "RequestThrottledException":
    case "com.amazonaws.ebs#RequestThrottledException":
      throw await deserializeAws_restJson1RequestThrottledExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ebs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ebs#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ebs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListSnapshotBlocksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSnapshotBlocksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSnapshotBlocksCommandError(output, context);
  }
  const contents: ListSnapshotBlocksCommandOutput = {
    $metadata: deserializeMetadata(output),
    BlockSize: undefined,
    Blocks: undefined,
    ExpiryTime: undefined,
    NextToken: undefined,
    VolumeSize: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BlockSize !== undefined && data.BlockSize !== null) {
    contents.BlockSize = __expectInt32(data.BlockSize);
  }
  if (data.Blocks !== undefined && data.Blocks !== null) {
    contents.Blocks = deserializeAws_restJson1Blocks(data.Blocks, context);
  }
  if (data.ExpiryTime !== undefined && data.ExpiryTime !== null) {
    contents.ExpiryTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.ExpiryTime)));
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.VolumeSize !== undefined && data.VolumeSize !== null) {
    contents.VolumeSize = __expectLong(data.VolumeSize);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListSnapshotBlocksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSnapshotBlocksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ebs#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ebs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "RequestThrottledException":
    case "com.amazonaws.ebs#RequestThrottledException":
      throw await deserializeAws_restJson1RequestThrottledExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ebs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ebs#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ebs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1PutSnapshotBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSnapshotBlockCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutSnapshotBlockCommandError(output, context);
  }
  const contents: PutSnapshotBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
    Checksum: undefined,
    ChecksumAlgorithm: undefined,
  };
  if (output.headers["x-amz-checksum"] !== undefined) {
    contents.Checksum = output.headers["x-amz-checksum"];
  }
  if (output.headers["x-amz-checksum-algorithm"] !== undefined) {
    contents.ChecksumAlgorithm = output.headers["x-amz-checksum-algorithm"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutSnapshotBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSnapshotBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ebs#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ebs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "RequestThrottledException":
    case "com.amazonaws.ebs#RequestThrottledException":
      throw await deserializeAws_restJson1RequestThrottledExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ebs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ebs#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ebs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StartSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSnapshotCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartSnapshotCommandError(output, context);
  }
  const contents: StartSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    BlockSize: undefined,
    Description: undefined,
    KmsKeyArn: undefined,
    OwnerId: undefined,
    ParentSnapshotId: undefined,
    SnapshotId: undefined,
    StartTime: undefined,
    Status: undefined,
    Tags: undefined,
    VolumeSize: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BlockSize !== undefined && data.BlockSize !== null) {
    contents.BlockSize = __expectInt32(data.BlockSize);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.KmsKeyArn !== undefined && data.KmsKeyArn !== null) {
    contents.KmsKeyArn = __expectString(data.KmsKeyArn);
  }
  if (data.OwnerId !== undefined && data.OwnerId !== null) {
    contents.OwnerId = __expectString(data.OwnerId);
  }
  if (data.ParentSnapshotId !== undefined && data.ParentSnapshotId !== null) {
    contents.ParentSnapshotId = __expectString(data.ParentSnapshotId);
  }
  if (data.SnapshotId !== undefined && data.SnapshotId !== null) {
    contents.SnapshotId = __expectString(data.SnapshotId);
  }
  if (data.StartTime !== undefined && data.StartTime !== null) {
    contents.StartTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.StartTime)));
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  if (data.VolumeSize !== undefined && data.VolumeSize !== null) {
    contents.VolumeSize = __expectLong(data.VolumeSize);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ebs#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentLimitExceededException":
    case "com.amazonaws.ebs#ConcurrentLimitExceededException":
      throw await deserializeAws_restJson1ConcurrentLimitExceededExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ebs#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ebs#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "RequestThrottledException":
    case "com.amazonaws.ebs#RequestThrottledException":
      throw await deserializeAws_restJson1RequestThrottledExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ebs#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ebs#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ebs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Reason !== undefined && data.Reason !== null) {
    contents.Reason = __expectString(data.Reason);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConcurrentLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentLimitExceededException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ConcurrentLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1RequestThrottledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestThrottledException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Reason !== undefined && data.Reason !== null) {
    contents.Reason = __expectString(data.Reason);
  }
  const exception = new RequestThrottledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Reason !== undefined && data.Reason !== null) {
    contents.Reason = __expectString(data.Reason);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Reason !== undefined && data.Reason !== null) {
    contents.Reason = __expectString(data.Reason);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Reason !== undefined && data.Reason !== null) {
    contents.Reason = __expectString(data.Reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Tag(entry, context);
    });
};

const deserializeAws_restJson1Block = (output: any, context: __SerdeContext): Block => {
  return {
    BlockIndex: __expectInt32(output.BlockIndex),
    BlockToken: __expectString(output.BlockToken),
  } as any;
};

const deserializeAws_restJson1Blocks = (output: any, context: __SerdeContext): Block[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Block(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChangedBlock = (output: any, context: __SerdeContext): ChangedBlock => {
  return {
    BlockIndex: __expectInt32(output.BlockIndex),
    FirstBlockToken: __expectString(output.FirstBlockToken),
    SecondBlockToken: __expectString(output.SecondBlockToken),
  } as any;
};

const deserializeAws_restJson1ChangedBlocks = (output: any, context: __SerdeContext): ChangedBlock[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChangedBlock(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1Tags = (output: any, context: __SerdeContext): Tag[] => {
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
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
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

  return "";
};
