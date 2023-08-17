// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc7231DateTime as __parseRfc7231DateTime,
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
import { DescribeObjectCommandInput, DescribeObjectCommandOutput } from "../commands/DescribeObjectCommand";
import { GetObjectCommandInput, GetObjectCommandOutput } from "../commands/GetObjectCommand";
import { ListItemsCommandInput, ListItemsCommandOutput } from "../commands/ListItemsCommand";
import { PutObjectCommandInput, PutObjectCommandOutput } from "../commands/PutObjectCommand";
import { MediaStoreDataServiceException as __BaseException } from "../models/MediaStoreDataServiceException";
import {
  ContainerNotFoundException,
  InternalServerError,
  Item,
  ObjectNotFoundException,
  RequestedRangeNotSatisfiableException,
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Path+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Path", () => input.Path!, "{Path+}", true);
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
 * serializeAws_restJson1DescribeObjectCommand
 */
export const se_DescribeObjectCommand = async (
  input: DescribeObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Path+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Path", () => input.Path!, "{Path+}", true);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "HEAD",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetObjectCommand
 */
export const se_GetObjectCommand = async (
  input: GetObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    range: input.Range!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Path+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Path", () => input.Path!, "{Path+}", true);
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
 * serializeAws_restJson1ListItemsCommand
 */
export const se_ListItemsCommand = async (
  input: ListItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  const query: any = map({
    Path: [, input.Path!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    NextToken: [, input.NextToken!],
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
 * serializeAws_restJson1PutObjectCommand
 */
export const se_PutObjectCommand = async (
  input: PutObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
    "content-type": input.ContentType! || "application/octet-stream",
    "cache-control": input.CacheControl!,
    "x-amz-storage-class": input.StorageClass!,
    "x-amz-upload-availability": input.UploadAvailability!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Path+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Path", () => input.Path!, "{Path+}", true);
  let body: any;
  if (input.Body !== undefined) {
    body = input.Body;
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
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastoredata#ContainerNotFoundException":
      throw await de_ContainerNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastoredata#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ObjectNotFoundException":
    case "com.amazonaws.mediastoredata#ObjectNotFoundException":
      throw await de_ObjectNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeObjectCommand
 */
export const de_DescribeObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
    ContentType: [, output.headers["content-type"]],
    ContentLength: [
      () => void 0 !== output.headers["content-length"],
      () => __strictParseLong(output.headers["content-length"]),
    ],
    CacheControl: [, output.headers["cache-control"]],
    LastModified: [
      () => void 0 !== output.headers["last-modified"],
      () => __expectNonNull(__parseRfc7231DateTime(output.headers["last-modified"])),
    ],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeObjectCommandError
 */
const de_DescribeObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastoredata#ContainerNotFoundException":
      throw await de_ContainerNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastoredata#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ObjectNotFoundException":
    case "com.amazonaws.mediastoredata#ObjectNotFoundException":
      throw await de_ObjectNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetObjectCommand
 */
export const de_GetObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    CacheControl: [, output.headers["cache-control"]],
    ContentRange: [, output.headers["content-range"]],
    ContentLength: [
      () => void 0 !== output.headers["content-length"],
      () => __strictParseLong(output.headers["content-length"]),
    ],
    ContentType: [, output.headers["content-type"]],
    ETag: [, output.headers["etag"]],
    LastModified: [
      () => void 0 !== output.headers["last-modified"],
      () => __expectNonNull(__parseRfc7231DateTime(output.headers["last-modified"])),
    ],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.Body = data;
  map(contents, {
    StatusCode: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1GetObjectCommandError
 */
const de_GetObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastoredata#ContainerNotFoundException":
      throw await de_ContainerNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastoredata#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ObjectNotFoundException":
    case "com.amazonaws.mediastoredata#ObjectNotFoundException":
      throw await de_ObjectNotFoundExceptionRes(parsedOutput, context);
    case "RequestedRangeNotSatisfiableException":
    case "com.amazonaws.mediastoredata#RequestedRangeNotSatisfiableException":
      throw await de_RequestedRangeNotSatisfiableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListItemsCommand
 */
export const de_ListItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListItemsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de_ItemList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListItemsCommandError
 */
const de_ListItemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListItemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastoredata#ContainerNotFoundException":
      throw await de_ContainerNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastoredata#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
    ContentSHA256: __expectString,
    ETag: __expectString,
    StorageClass: __expectString,
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
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastoredata#ContainerNotFoundException":
      throw await de_ContainerNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastoredata#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_restJson1ContainerNotFoundExceptionRes
 */
const de_ContainerNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ContainerNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ContainerNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerErrorRes
 */
const de_InternalServerErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalServerError> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ObjectNotFoundExceptionRes
 */
const de_ObjectNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ObjectNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ObjectNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1RequestedRangeNotSatisfiableExceptionRes
 */
const de_RequestedRangeNotSatisfiableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestedRangeNotSatisfiableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new RequestedRangeNotSatisfiableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1Item
 */
const de_Item = (output: any, context: __SerdeContext): Item => {
  return take(output, {
    ContentLength: __expectLong,
    ContentType: __expectString,
    ETag: __expectString,
    LastModified: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ItemList
 */
const de_ItemList = (output: any, context: __SerdeContext): Item[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Item(entry, context);
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
