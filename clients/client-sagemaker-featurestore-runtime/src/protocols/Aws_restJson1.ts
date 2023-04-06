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

/**
 * serializeAws_restJson1BatchGetRecordCommand
 */
export const se_BatchGetRecordCommand = async (
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
    ...(input.Identifiers != null && { Identifiers: se_BatchGetRecordIdentifiers(input.Identifiers, context) }),
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

/**
 * serializeAws_restJson1DeleteRecordCommand
 */
export const se_DeleteRecordCommand = async (
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
    DeletionMode: [, input.DeletionMode!],
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

/**
 * serializeAws_restJson1GetRecordCommand
 */
export const se_GetRecordCommand = async (
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

/**
 * serializeAws_restJson1PutRecordCommand
 */
export const se_PutRecordCommand = async (
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
    ...(input.Record != null && { Record: se_Record(input.Record, context) }),
    ...(input.TargetStores != null && { TargetStores: se_TargetStores(input.TargetStores, context) }),
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

/**
 * deserializeAws_restJson1BatchGetRecordCommand
 */
export const de_BatchGetRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetRecordCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchGetRecordCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Errors != null) {
    contents.Errors = de_BatchGetRecordErrors(data.Errors, context);
  }
  if (data.Records != null) {
    contents.Records = de_BatchGetRecordResultDetails(data.Records, context);
  }
  if (data.UnprocessedIdentifiers != null) {
    contents.UnprocessedIdentifiers = de_UnprocessedIdentifiers(data.UnprocessedIdentifiers, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetRecordCommandError
 */
const de_BatchGetRecordCommandError = async (
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
      throw await de_AccessForbiddenRes(parsedOutput, context);
    case "InternalFailure":
    case "com.amazonaws.sagemakerfeaturestoreruntime#InternalFailure":
      throw await de_InternalFailureRes(parsedOutput, context);
    case "ServiceUnavailable":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ServiceUnavailable":
      throw await de_ServiceUnavailableRes(parsedOutput, context);
    case "ValidationError":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ValidationError":
      throw await de_ValidationErrorRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteRecordCommand
 */
export const de_DeleteRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecordCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteRecordCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRecordCommandError
 */
const de_DeleteRecordCommandError = async (
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
      throw await de_AccessForbiddenRes(parsedOutput, context);
    case "InternalFailure":
    case "com.amazonaws.sagemakerfeaturestoreruntime#InternalFailure":
      throw await de_InternalFailureRes(parsedOutput, context);
    case "ServiceUnavailable":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ServiceUnavailable":
      throw await de_ServiceUnavailableRes(parsedOutput, context);
    case "ValidationError":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ValidationError":
      throw await de_ValidationErrorRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetRecordCommand
 */
export const de_GetRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecordCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRecordCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Record != null) {
    contents.Record = de_Record(data.Record, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetRecordCommandError
 */
const de_GetRecordCommandError = async (
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
      throw await de_AccessForbiddenRes(parsedOutput, context);
    case "InternalFailure":
    case "com.amazonaws.sagemakerfeaturestoreruntime#InternalFailure":
      throw await de_InternalFailureRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    case "ServiceUnavailable":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ServiceUnavailable":
      throw await de_ServiceUnavailableRes(parsedOutput, context);
    case "ValidationError":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ValidationError":
      throw await de_ValidationErrorRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutRecordCommand
 */
export const de_PutRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutRecordCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutRecordCommandError
 */
const de_PutRecordCommandError = async (
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
      throw await de_AccessForbiddenRes(parsedOutput, context);
    case "InternalFailure":
    case "com.amazonaws.sagemakerfeaturestoreruntime#InternalFailure":
      throw await de_InternalFailureRes(parsedOutput, context);
    case "ServiceUnavailable":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ServiceUnavailable":
      throw await de_ServiceUnavailableRes(parsedOutput, context);
    case "ValidationError":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ValidationError":
      throw await de_ValidationErrorRes(parsedOutput, context);
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
/**
 * deserializeAws_restJson1AccessForbiddenRes
 */
const de_AccessForbiddenRes = async (parsedOutput: any, context: __SerdeContext): Promise<AccessForbidden> => {
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

/**
 * deserializeAws_restJson1InternalFailureRes
 */
const de_InternalFailureRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalFailure> => {
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

/**
 * deserializeAws_restJson1ResourceNotFoundRes
 */
const de_ResourceNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<ResourceNotFound> => {
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

/**
 * deserializeAws_restJson1ServiceUnavailableRes
 */
const de_ServiceUnavailableRes = async (parsedOutput: any, context: __SerdeContext): Promise<ServiceUnavailable> => {
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

/**
 * deserializeAws_restJson1ValidationErrorRes
 */
const de_ValidationErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationError> => {
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

/**
 * serializeAws_restJson1BatchGetRecordIdentifier
 */
const se_BatchGetRecordIdentifier = (input: BatchGetRecordIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.FeatureGroupName != null && { FeatureGroupName: input.FeatureGroupName }),
    ...(input.FeatureNames != null && { FeatureNames: se_FeatureNames(input.FeatureNames, context) }),
    ...(input.RecordIdentifiersValueAsString != null && {
      RecordIdentifiersValueAsString: se_RecordIdentifiers(input.RecordIdentifiersValueAsString, context),
    }),
  };
};

/**
 * serializeAws_restJson1BatchGetRecordIdentifiers
 */
const se_BatchGetRecordIdentifiers = (input: BatchGetRecordIdentifier[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BatchGetRecordIdentifier(entry, context);
    });
};

/**
 * serializeAws_restJson1FeatureNames
 */
const se_FeatureNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1FeatureValue
 */
const se_FeatureValue = (input: FeatureValue, context: __SerdeContext): any => {
  return {
    ...(input.FeatureName != null && { FeatureName: input.FeatureName }),
    ...(input.ValueAsString != null && { ValueAsString: input.ValueAsString }),
  };
};

/**
 * serializeAws_restJson1Record
 */
const se_Record = (input: FeatureValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FeatureValue(entry, context);
    });
};

/**
 * serializeAws_restJson1RecordIdentifiers
 */
const se_RecordIdentifiers = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TargetStores
 */
const se_TargetStores = (input: (TargetStore | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_restJson1BatchGetRecordError
 */
const de_BatchGetRecordError = (output: any, context: __SerdeContext): BatchGetRecordError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    FeatureGroupName: __expectString(output.FeatureGroupName),
    RecordIdentifierValueAsString: __expectString(output.RecordIdentifierValueAsString),
  } as any;
};

/**
 * deserializeAws_restJson1BatchGetRecordErrors
 */
const de_BatchGetRecordErrors = (output: any, context: __SerdeContext): BatchGetRecordError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchGetRecordError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchGetRecordIdentifier
 */
const de_BatchGetRecordIdentifier = (output: any, context: __SerdeContext): BatchGetRecordIdentifier => {
  return {
    FeatureGroupName: __expectString(output.FeatureGroupName),
    FeatureNames: output.FeatureNames != null ? de_FeatureNames(output.FeatureNames, context) : undefined,
    RecordIdentifiersValueAsString:
      output.RecordIdentifiersValueAsString != null
        ? de_RecordIdentifiers(output.RecordIdentifiersValueAsString, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchGetRecordResultDetail
 */
const de_BatchGetRecordResultDetail = (output: any, context: __SerdeContext): BatchGetRecordResultDetail => {
  return {
    FeatureGroupName: __expectString(output.FeatureGroupName),
    Record: output.Record != null ? de_Record(output.Record, context) : undefined,
    RecordIdentifierValueAsString: __expectString(output.RecordIdentifierValueAsString),
  } as any;
};

/**
 * deserializeAws_restJson1BatchGetRecordResultDetails
 */
const de_BatchGetRecordResultDetails = (output: any, context: __SerdeContext): BatchGetRecordResultDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchGetRecordResultDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FeatureNames
 */
const de_FeatureNames = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1FeatureValue
 */
const de_FeatureValue = (output: any, context: __SerdeContext): FeatureValue => {
  return {
    FeatureName: __expectString(output.FeatureName),
    ValueAsString: __expectString(output.ValueAsString),
  } as any;
};

/**
 * deserializeAws_restJson1Record
 */
const de_Record = (output: any, context: __SerdeContext): FeatureValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FeatureValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RecordIdentifiers
 */
const de_RecordIdentifiers = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1UnprocessedIdentifiers
 */
const de_UnprocessedIdentifiers = (output: any, context: __SerdeContext): BatchGetRecordIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchGetRecordIdentifier(entry, context);
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
