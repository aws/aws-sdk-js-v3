// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
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
  isSerializableHeaderValue,
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
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/{Path+}");
  b.p("Path", () => input.Path!, "{Path+}", true);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeObjectCommand
 */
export const se_DescribeObjectCommand = async (
  input: DescribeObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/{Path+}");
  b.p("Path", () => input.Path!, "{Path+}", true);
  let body: any;
  b.m("HEAD").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetObjectCommand
 */
export const se_GetObjectCommand = async (
  input: GetObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_r]: input[_R]!,
  });
  b.bp("/{Path+}");
  b.p("Path", () => input.Path!, "{Path+}", true);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListItemsCommand
 */
export const se_ListItemsCommand = async (
  input: ListItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/");
  const query: any = map({
    [_P]: [, input[_P]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutObjectCommand
 */
export const se_PutObjectCommand = async (
  input: PutObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
    [_ct]: input[_CT] || "application/octet-stream",
    [_cc]: input[_CC]!,
    [_xasc]: input[_SC]!,
    [_xaua]: input[_UA]!,
  });
  b.bp("/{Path+}");
  b.p("Path", () => input.Path!, "{Path+}", true);
  let body: any;
  if (input.Body !== undefined) {
    body = input.Body;
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1DeleteObjectCommand
 */
export const de_DeleteObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> => {
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
 * deserializeAws_restJson1DescribeObjectCommand
 */
export const de_DescribeObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
    [_CT]: [, output.headers[_ct]],
    [_CL]: [() => void 0 !== output.headers[_cl], () => __strictParseLong(output.headers[_cl])],
    [_CC]: [, output.headers[_cc]],
    [_LM]: [() => void 0 !== output.headers[_lm], () => __expectNonNull(__parseRfc7231DateTime(output.headers[_lm]))],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetObjectCommand
 */
export const de_GetObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_CC]: [, output.headers[_cc]],
    [_CR]: [, output.headers[_cr]],
    [_CL]: [() => void 0 !== output.headers[_cl], () => __strictParseLong(output.headers[_cl])],
    [_CT]: [, output.headers[_ct]],
    [_ET]: [, output.headers[_e]],
    [_LM]: [() => void 0 !== output.headers[_lm], () => __expectNonNull(__parseRfc7231DateTime(output.headers[_lm]))],
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
 * deserializeAws_restJson1ListItemsCommand
 */
export const de_ListItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1PutObjectCommand
 */
export const de_PutObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
      }) as never;
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

const _CC = "CacheControl";
const _CL = "ContentLength";
const _CR = "ContentRange";
const _CT = "ContentType";
const _ET = "ETag";
const _LM = "LastModified";
const _MR = "MaxResults";
const _NT = "NextToken";
const _P = "Path";
const _R = "Range";
const _SC = "StorageClass";
const _UA = "UploadAvailability";
const _cc = "cache-control";
const _cl = "content-length";
const _cr = "content-range";
const _ct = "content-type";
const _e = "etag";
const _lm = "last-modified";
const _r = "range";
const _xasc = "x-amz-storage-class";
const _xaua = "x-amz-upload-availability";
