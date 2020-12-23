import { DeleteRecordCommandInput, DeleteRecordCommandOutput } from "../commands/DeleteRecordCommand";
import { GetRecordCommandInput, GetRecordCommandOutput } from "../commands/GetRecordCommand";
import { PutRecordCommandInput, PutRecordCommandOutput } from "../commands/PutRecordCommand";
import {
  AccessForbidden,
  FeatureValue,
  InternalFailure,
  ResourceNotFound,
  ServiceUnavailable,
  ValidationError,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_restJson1DeleteRecordCommand = async (
  input: DeleteRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/FeatureGroup/{FeatureGroupName}";
  if (input.FeatureGroupName !== undefined) {
    const labelValue: string = input.FeatureGroupName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FeatureGroupName.");
    }
    resolvedPath = resolvedPath.replace("{FeatureGroupName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FeatureGroupName.");
  }
  const query: any = {
    ...(input.RecordIdentifierValueAsString !== undefined && {
      RecordIdentifierValueAsString: input.RecordIdentifierValueAsString,
    }),
    ...(input.EventTime !== undefined && { EventTime: input.EventTime }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/FeatureGroup/{FeatureGroupName}";
  if (input.FeatureGroupName !== undefined) {
    const labelValue: string = input.FeatureGroupName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FeatureGroupName.");
    }
    resolvedPath = resolvedPath.replace("{FeatureGroupName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FeatureGroupName.");
  }
  const query: any = {
    ...(input.RecordIdentifierValueAsString !== undefined && {
      RecordIdentifierValueAsString: input.RecordIdentifierValueAsString,
    }),
    ...(input.FeatureNames !== undefined && { FeatureName: (input.FeatureNames || []).map((_entry) => _entry) }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/FeatureGroup/{FeatureGroupName}";
  if (input.FeatureGroupName !== undefined) {
    const labelValue: string = input.FeatureGroupName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FeatureGroupName.");
    }
    resolvedPath = resolvedPath.replace("{FeatureGroupName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FeatureGroupName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Record !== undefined &&
      input.Record !== null && { Record: serializeAws_restJson1Record(input.Record, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const deserializeAws_restJson1DeleteRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecordCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRecordCommandError(output, context);
  }
  const contents: DeleteRecordCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteRecordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessForbidden":
    case "com.amazonaws.sagemakerfeaturestoreruntime#AccessForbidden":
      response = {
        ...(await deserializeAws_restJson1AccessForbiddenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailure":
    case "com.amazonaws.sagemakerfeaturestoreruntime#InternalFailure":
      response = {
        ...(await deserializeAws_restJson1InternalFailureResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailable":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ServiceUnavailable":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationError":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ValidationError":
      response = {
        ...(await deserializeAws_restJson1ValidationErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecordCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRecordCommandError(output, context);
  }
  const contents: GetRecordCommandOutput = {
    $metadata: deserializeMetadata(output),
    Record: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Record !== undefined && data.Record !== null) {
    contents.Record = deserializeAws_restJson1Record(data.Record, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetRecordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessForbidden":
    case "com.amazonaws.sagemakerfeaturestoreruntime#AccessForbidden":
      response = {
        ...(await deserializeAws_restJson1AccessForbiddenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailure":
    case "com.amazonaws.sagemakerfeaturestoreruntime#InternalFailure":
      response = {
        ...(await deserializeAws_restJson1InternalFailureResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFound":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ResourceNotFound":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailable":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ServiceUnavailable":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationError":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ValidationError":
      response = {
        ...(await deserializeAws_restJson1ValidationErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PutRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutRecordCommandError(output, context);
  }
  const contents: PutRecordCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutRecordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessForbidden":
    case "com.amazonaws.sagemakerfeaturestoreruntime#AccessForbidden":
      response = {
        ...(await deserializeAws_restJson1AccessForbiddenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailure":
    case "com.amazonaws.sagemakerfeaturestoreruntime#InternalFailure":
      response = {
        ...(await deserializeAws_restJson1InternalFailureResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailable":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ServiceUnavailable":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationError":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ValidationError":
      response = {
        ...(await deserializeAws_restJson1ValidationErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1AccessForbiddenResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessForbidden> => {
  const contents: AccessForbidden = {
    name: "AccessForbidden",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InternalFailureResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailure> => {
  const contents: InternalFailure = {
    name: "InternalFailure",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFound> => {
  const contents: ResourceNotFound = {
    name: "ResourceNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ServiceUnavailableResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailable> => {
  const contents: ServiceUnavailable = {
    name: "ServiceUnavailable",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ValidationErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationError> => {
  const contents: ValidationError = {
    name: "ValidationError",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1FeatureValue = (input: FeatureValue, context: __SerdeContext): any => {
  return {
    ...(input.FeatureName !== undefined && input.FeatureName !== null && { FeatureName: input.FeatureName }),
    ...(input.ValueAsString !== undefined && input.ValueAsString !== null && { ValueAsString: input.ValueAsString }),
  };
};

const serializeAws_restJson1Record = (input: FeatureValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1FeatureValue(entry, context);
    });
};

const deserializeAws_restJson1FeatureValue = (output: any, context: __SerdeContext): FeatureValue => {
  return {
    FeatureName: output.FeatureName !== undefined && output.FeatureName !== null ? output.FeatureName : undefined,
    ValueAsString:
      output.ValueAsString !== undefined && output.ValueAsString !== null ? output.ValueAsString : undefined,
  } as any;
};

const deserializeAws_restJson1Record = (output: any, context: __SerdeContext): FeatureValue[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FeatureValue(entry, context);
    });
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

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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
