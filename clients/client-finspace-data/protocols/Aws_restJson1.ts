import { CreateChangesetCommandInput, CreateChangesetCommandOutput } from "../commands/CreateChangesetCommand";
import {
  GetProgrammaticAccessCredentialsCommandInput,
  GetProgrammaticAccessCredentialsCommandOutput,
} from "../commands/GetProgrammaticAccessCredentialsCommand";
import { GetWorkingLocationCommandInput, GetWorkingLocationCommandOutput } from "../commands/GetWorkingLocationCommand";
import {
  AccessDeniedException,
  ChangesetInfo,
  Credentials,
  ErrorInfo,
  InternalServerException,
  ResourceNotFoundException,
  ThrottlingException,
  ValidationException,
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

export const serializeAws_restJson1CreateChangesetCommand = async (
  input: CreateChangesetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/datasets/{datasetId}/changesets";
  if (input.datasetId !== undefined) {
    const labelValue: string = input.datasetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: datasetId.");
    }
    resolvedPath = resolvedPath.replace("{datasetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: datasetId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.changeType !== undefined && input.changeType !== null && { changeType: input.changeType }),
    ...(input.formatParams !== undefined &&
      input.formatParams !== null && { formatParams: serializeAws_restJson1stringMap(input.formatParams, context) }),
    ...(input.formatType !== undefined && input.formatType !== null && { formatType: input.formatType }),
    ...(input.sourceParams !== undefined &&
      input.sourceParams !== null && { sourceParams: serializeAws_restJson1stringMap(input.sourceParams, context) }),
    ...(input.sourceType !== undefined && input.sourceType !== null && { sourceType: input.sourceType }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1stringMap(input.tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1GetProgrammaticAccessCredentialsCommand = async (
  input: GetProgrammaticAccessCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/credentials/programmatic";
  const query: any = {
    ...(input.durationInMinutes !== undefined && { durationInMinutes: input.durationInMinutes.toString() }),
    ...(input.environmentId !== undefined && { environmentId: input.environmentId }),
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

export const serializeAws_restJson1GetWorkingLocationCommand = async (
  input: GetWorkingLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/workingLocationV1";
  let body: any;
  body = JSON.stringify({
    ...(input.locationType !== undefined && input.locationType !== null && { locationType: input.locationType }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const deserializeAws_restJson1CreateChangesetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChangesetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateChangesetCommandError(output, context);
  }
  const contents: CreateChangesetCommandOutput = {
    $metadata: deserializeMetadata(output),
    changeset: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.changeset !== undefined && data.changeset !== null) {
    contents.changeset = deserializeAws_restJson1ChangesetInfo(data.changeset, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateChangesetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChangesetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetProgrammaticAccessCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProgrammaticAccessCredentialsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetProgrammaticAccessCredentialsCommandError(output, context);
  }
  const contents: GetProgrammaticAccessCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    credentials: undefined,
    durationInMinutes: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.credentials !== undefined && data.credentials !== null) {
    contents.credentials = deserializeAws_restJson1Credentials(data.credentials, context);
  }
  if (data.durationInMinutes !== undefined && data.durationInMinutes !== null) {
    contents.durationInMinutes = data.durationInMinutes;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetProgrammaticAccessCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProgrammaticAccessCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetWorkingLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkingLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetWorkingLocationCommandError(output, context);
  }
  const contents: GetWorkingLocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    s3Bucket: undefined,
    s3Path: undefined,
    s3Uri: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.s3Bucket !== undefined && data.s3Bucket !== null) {
    contents.s3Bucket = data.s3Bucket;
  }
  if (data.s3Path !== undefined && data.s3Path !== null) {
    contents.s3Path = data.s3Path;
  }
  if (data.s3Uri !== undefined && data.s3Uri !== null) {
    contents.s3Uri = data.s3Uri;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetWorkingLocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkingLocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data: any = parsedOutput.body;
  return contents;
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1stringMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1ChangesetInfo = (output: any, context: __SerdeContext): ChangesetInfo => {
  return {
    changeType: output.changeType !== undefined && output.changeType !== null ? output.changeType : undefined,
    changesetArn: output.changesetArn !== undefined && output.changesetArn !== null ? output.changesetArn : undefined,
    changesetLabels:
      output.changesetLabels !== undefined && output.changesetLabels !== null
        ? deserializeAws_restJson1stringMap(output.changesetLabels, context)
        : undefined,
    createTimestamp:
      output.createTimestamp !== undefined && output.createTimestamp !== null
        ? new Date(Math.round(output.createTimestamp * 1000))
        : undefined,
    datasetId: output.datasetId !== undefined && output.datasetId !== null ? output.datasetId : undefined,
    errorInfo:
      output.errorInfo !== undefined && output.errorInfo !== null
        ? deserializeAws_restJson1ErrorInfo(output.errorInfo, context)
        : undefined,
    formatParams:
      output.formatParams !== undefined && output.formatParams !== null
        ? deserializeAws_restJson1stringMap(output.formatParams, context)
        : undefined,
    formatType: output.formatType !== undefined && output.formatType !== null ? output.formatType : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    sourceParams:
      output.sourceParams !== undefined && output.sourceParams !== null
        ? deserializeAws_restJson1stringMap(output.sourceParams, context)
        : undefined,
    sourceType: output.sourceType !== undefined && output.sourceType !== null ? output.sourceType : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    updatedByChangesetId:
      output.updatedByChangesetId !== undefined && output.updatedByChangesetId !== null
        ? output.updatedByChangesetId
        : undefined,
    updatesChangesetId:
      output.updatesChangesetId !== undefined && output.updatesChangesetId !== null
        ? output.updatesChangesetId
        : undefined,
  } as any;
};

const deserializeAws_restJson1Credentials = (output: any, context: __SerdeContext): Credentials => {
  return {
    accessKeyId: output.accessKeyId !== undefined && output.accessKeyId !== null ? output.accessKeyId : undefined,
    secretAccessKey:
      output.secretAccessKey !== undefined && output.secretAccessKey !== null ? output.secretAccessKey : undefined,
    sessionToken: output.sessionToken !== undefined && output.sessionToken !== null ? output.sessionToken : undefined,
  } as any;
};

const deserializeAws_restJson1ErrorInfo = (output: any, context: __SerdeContext): ErrorInfo => {
  return {
    errorCategory:
      output.errorCategory !== undefined && output.errorCategory !== null ? output.errorCategory : undefined,
    errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
  } as any;
};

const deserializeAws_restJson1stringMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
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
