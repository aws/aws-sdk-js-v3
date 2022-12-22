// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { BatchGetRecordCommandInput, BatchGetRecordCommandOutput } from "../commands/BatchGetRecordCommand";
import { DeleteRecordCommandInput, DeleteRecordCommandOutput } from "../commands/DeleteRecordCommand";
import { GetRecordCommandInput, GetRecordCommandOutput } from "../commands/GetRecordCommand";
import { PutRecordCommandInput, PutRecordCommandOutput } from "../commands/PutRecordCommand";
import {
  AccessForbidden,
  BatchGetRecordError,
  BatchGetRecordIdentifier,
  BatchGetRecordResultDetail,
  FeatureValue,
  InternalFailure,
  ResourceNotFound,
  ServiceUnavailable,
  TargetStore,
  ValidationError,
} from "../models/models_0";
import { SageMakerFeatureStoreRuntimeServiceException as __BaseException } from "../models/SageMakerFeatureStoreRuntimeServiceException";

export const serializeAws_restJson1BatchGetRecordCommand = async (
  input: BatchGetRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/BatchGetRecord";
  let body: any;
  body = JSON.stringify({
    ...(input.Identifiers != null && {
      Identifiers: serializeAws_restJson1BatchGetRecordIdentifiers(input.Identifiers, context),
    }),
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

export const serializeAws_restJson1DeleteRecordCommand = async (
  input: DeleteRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/FeatureGroup/{FeatureGroupName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FeatureGroupName",
    () => input.FeatureGroupName!,
    "{FeatureGroupName}",
    false
  );
  const query: any = map({
    RecordIdentifierValueAsString: [
      ,
      __expectNonNull(input.RecordIdentifierValueAsString!, `RecordIdentifierValueAsString`),
    ],
    EventTime: [, __expectNonNull(input.EventTime!, `EventTime`)],
    TargetStores: [
      () => input.TargetStores !== void 0,
      () => (input.TargetStores! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetRecordCommand = async (
  input: GetRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/FeatureGroup/{FeatureGroupName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FeatureGroupName",
    () => input.FeatureGroupName!,
    "{FeatureGroupName}",
    false
  );
  const query: any = map({
    RecordIdentifierValueAsString: [
      ,
      __expectNonNull(input.RecordIdentifierValueAsString!, `RecordIdentifierValueAsString`),
    ],
    FeatureName: [
      () => input.FeatureNames !== void 0,
      () => (input.FeatureNames! || []).map((_entry) => _entry as any),
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

export const serializeAws_restJson1PutRecordCommand = async (
  input: PutRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/FeatureGroup/{FeatureGroupName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FeatureGroupName",
    () => input.FeatureGroupName!,
    "{FeatureGroupName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Record != null && { Record: serializeAws_restJson1Record(input.Record, context) }),
    ...(input.TargetStores != null && {
      TargetStores: serializeAws_restJson1TargetStores(input.TargetStores, context),
    }),
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

export const deserializeAws_restJson1BatchGetRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetRecordCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchGetRecordCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Errors != null) {
    contents.Errors = deserializeAws_restJson1BatchGetRecordErrors(data.Errors, context);
  }
  if (data.Records != null) {
    contents.Records = deserializeAws_restJson1BatchGetRecordResultDetails(data.Records, context);
  }
  if (data.UnprocessedIdentifiers != null) {
    contents.UnprocessedIdentifiers = deserializeAws_restJson1UnprocessedIdentifiers(
      data.UnprocessedIdentifiers,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1BatchGetRecordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetRecordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessForbidden":
    case "com.amazonaws.sagemakerfeaturestoreruntime#AccessForbidden":
      throw await deserializeAws_restJson1AccessForbiddenResponse(parsedOutput, context);
    case "InternalFailure":
    case "com.amazonaws.sagemakerfeaturestoreruntime#InternalFailure":
      throw await deserializeAws_restJson1InternalFailureResponse(parsedOutput, context);
    case "ServiceUnavailable":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ServiceUnavailable":
      throw await deserializeAws_restJson1ServiceUnavailableResponse(parsedOutput, context);
    case "ValidationError":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ValidationError":
      throw await deserializeAws_restJson1ValidationErrorResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecordCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRecordCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteRecordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessForbidden":
    case "com.amazonaws.sagemakerfeaturestoreruntime#AccessForbidden":
      throw await deserializeAws_restJson1AccessForbiddenResponse(parsedOutput, context);
    case "InternalFailure":
    case "com.amazonaws.sagemakerfeaturestoreruntime#InternalFailure":
      throw await deserializeAws_restJson1InternalFailureResponse(parsedOutput, context);
    case "ServiceUnavailable":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ServiceUnavailable":
      throw await deserializeAws_restJson1ServiceUnavailableResponse(parsedOutput, context);
    case "ValidationError":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ValidationError":
      throw await deserializeAws_restJson1ValidationErrorResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecordCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRecordCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Record != null) {
    contents.Record = deserializeAws_restJson1Record(data.Record, context);
  }
  return contents;
};

const deserializeAws_restJson1GetRecordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessForbidden":
    case "com.amazonaws.sagemakerfeaturestoreruntime#AccessForbidden":
      throw await deserializeAws_restJson1AccessForbiddenResponse(parsedOutput, context);
    case "InternalFailure":
    case "com.amazonaws.sagemakerfeaturestoreruntime#InternalFailure":
      throw await deserializeAws_restJson1InternalFailureResponse(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ResourceNotFound":
      throw await deserializeAws_restJson1ResourceNotFoundResponse(parsedOutput, context);
    case "ServiceUnavailable":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ServiceUnavailable":
      throw await deserializeAws_restJson1ServiceUnavailableResponse(parsedOutput, context);
    case "ValidationError":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ValidationError":
      throw await deserializeAws_restJson1ValidationErrorResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutRecordCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutRecordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessForbidden":
    case "com.amazonaws.sagemakerfeaturestoreruntime#AccessForbidden":
      throw await deserializeAws_restJson1AccessForbiddenResponse(parsedOutput, context);
    case "InternalFailure":
    case "com.amazonaws.sagemakerfeaturestoreruntime#InternalFailure":
      throw await deserializeAws_restJson1InternalFailureResponse(parsedOutput, context);
    case "ServiceUnavailable":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ServiceUnavailable":
      throw await deserializeAws_restJson1ServiceUnavailableResponse(parsedOutput, context);
    case "ValidationError":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ValidationError":
      throw await deserializeAws_restJson1ValidationErrorResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessForbiddenResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessForbidden> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessForbidden({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalFailureResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailure> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalFailure({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFound> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceUnavailableResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailable> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceUnavailable({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ValidationErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationError> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ValidationError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1BatchGetRecordIdentifier = (
  input: BatchGetRecordIdentifier,
  context: __SerdeContext
): any => {
  return {
    ...(input.FeatureGroupName != null && { FeatureGroupName: input.FeatureGroupName }),
    ...(input.FeatureNames != null && {
      FeatureNames: serializeAws_restJson1FeatureNames(input.FeatureNames, context),
    }),
    ...(input.RecordIdentifiersValueAsString != null && {
      RecordIdentifiersValueAsString: serializeAws_restJson1RecordIdentifiers(
        input.RecordIdentifiersValueAsString,
        context
      ),
    }),
  };
};

const serializeAws_restJson1BatchGetRecordIdentifiers = (
  input: BatchGetRecordIdentifier[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1BatchGetRecordIdentifier(entry, context);
    });
};

const serializeAws_restJson1FeatureNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1FeatureValue = (input: FeatureValue, context: __SerdeContext): any => {
  return {
    ...(input.FeatureName != null && { FeatureName: input.FeatureName }),
    ...(input.ValueAsString != null && { ValueAsString: input.ValueAsString }),
  };
};

const serializeAws_restJson1Record = (input: FeatureValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1FeatureValue(entry, context);
    });
};

const serializeAws_restJson1RecordIdentifiers = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TargetStores = (input: (TargetStore | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const deserializeAws_restJson1BatchGetRecordError = (output: any, context: __SerdeContext): BatchGetRecordError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    FeatureGroupName: __expectString(output.FeatureGroupName),
    RecordIdentifierValueAsString: __expectString(output.RecordIdentifierValueAsString),
  } as any;
};

const deserializeAws_restJson1BatchGetRecordErrors = (output: any, context: __SerdeContext): BatchGetRecordError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchGetRecordError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BatchGetRecordIdentifier = (
  output: any,
  context: __SerdeContext
): BatchGetRecordIdentifier => {
  return {
    FeatureGroupName: __expectString(output.FeatureGroupName),
    FeatureNames:
      output.FeatureNames != null ? deserializeAws_restJson1FeatureNames(output.FeatureNames, context) : undefined,
    RecordIdentifiersValueAsString:
      output.RecordIdentifiersValueAsString != null
        ? deserializeAws_restJson1RecordIdentifiers(output.RecordIdentifiersValueAsString, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BatchGetRecordResultDetail = (
  output: any,
  context: __SerdeContext
): BatchGetRecordResultDetail => {
  return {
    FeatureGroupName: __expectString(output.FeatureGroupName),
    Record: output.Record != null ? deserializeAws_restJson1Record(output.Record, context) : undefined,
    RecordIdentifierValueAsString: __expectString(output.RecordIdentifierValueAsString),
  } as any;
};

const deserializeAws_restJson1BatchGetRecordResultDetails = (
  output: any,
  context: __SerdeContext
): BatchGetRecordResultDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchGetRecordResultDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FeatureNames = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1FeatureValue = (output: any, context: __SerdeContext): FeatureValue => {
  return {
    FeatureName: __expectString(output.FeatureName),
    ValueAsString: __expectString(output.ValueAsString),
  } as any;
};

const deserializeAws_restJson1Record = (output: any, context: __SerdeContext): FeatureValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FeatureValue(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RecordIdentifiers = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1UnprocessedIdentifiers = (
  output: any,
  context: __SerdeContext
): BatchGetRecordIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchGetRecordIdentifier(entry, context);
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
