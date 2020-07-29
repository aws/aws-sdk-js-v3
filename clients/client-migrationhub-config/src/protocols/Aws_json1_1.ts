import {
  CreateHomeRegionControlCommandInput,
  CreateHomeRegionControlCommandOutput,
} from "../commands/CreateHomeRegionControlCommand";
import {
  DescribeHomeRegionControlsCommandInput,
  DescribeHomeRegionControlsCommandOutput,
} from "../commands/DescribeHomeRegionControlsCommand";
import { GetHomeRegionCommandInput, GetHomeRegionCommandOutput } from "../commands/GetHomeRegionCommand";
import {
  AccessDeniedException,
  CreateHomeRegionControlRequest,
  CreateHomeRegionControlResult,
  DescribeHomeRegionControlsRequest,
  DescribeHomeRegionControlsResult,
  DryRunOperation,
  GetHomeRegionRequest,
  GetHomeRegionResult,
  HomeRegionControl,
  InternalServerError,
  InvalidInputException,
  ServiceUnavailableException,
  Target,
} from "../models/index";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_json1_1CreateHomeRegionControlCommand = async (
  input: CreateHomeRegionControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMigrationHubMultiAccountService.CreateHomeRegionControl",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateHomeRegionControlRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeHomeRegionControlsCommand = async (
  input: DescribeHomeRegionControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMigrationHubMultiAccountService.DescribeHomeRegionControls",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeHomeRegionControlsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetHomeRegionCommand = async (
  input: GetHomeRegionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMigrationHubMultiAccountService.GetHomeRegion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetHomeRegionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateHomeRegionControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHomeRegionControlCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateHomeRegionControlCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateHomeRegionControlResult(data, context);
  const response: CreateHomeRegionControlCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateHomeRegionControlResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateHomeRegionControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHomeRegionControlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubconfig#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DryRunOperation":
    case "com.amazonaws.migrationhubconfig#DryRunOperation":
      response = {
        ...(await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.migrationhubconfig#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.migrationhubconfig#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhubconfig#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeHomeRegionControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHomeRegionControlsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeHomeRegionControlsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeHomeRegionControlsResult(data, context);
  const response: DescribeHomeRegionControlsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeHomeRegionControlsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeHomeRegionControlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHomeRegionControlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubconfig#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.migrationhubconfig#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.migrationhubconfig#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhubconfig#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetHomeRegionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHomeRegionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetHomeRegionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetHomeRegionResult(data, context);
  const response: GetHomeRegionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetHomeRegionResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetHomeRegionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHomeRegionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubconfig#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.migrationhubconfig#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.migrationhubconfig#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhubconfig#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DryRunOperationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DryRunOperation> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DryRunOperation(body, context);
  const contents: DryRunOperation = {
    name: "DryRunOperation",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerError(body, context);
  const contents: InternalServerError = {
    name: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(body, context);
  const contents: InvalidInputException = {
    name: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableException(body, context);
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1CreateHomeRegionControlRequest = (
  input: CreateHomeRegionControlRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DryRun !== undefined && { DryRun: input.DryRun }),
    ...(input.HomeRegion !== undefined && { HomeRegion: input.HomeRegion }),
    ...(input.Target !== undefined && { Target: serializeAws_json1_1Target(input.Target, context) }),
  };
};

const serializeAws_json1_1DescribeHomeRegionControlsRequest = (
  input: DescribeHomeRegionControlsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ControlId !== undefined && { ControlId: input.ControlId }),
    ...(input.HomeRegion !== undefined && { HomeRegion: input.HomeRegion }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.Target !== undefined && { Target: serializeAws_json1_1Target(input.Target, context) }),
  };
};

const serializeAws_json1_1GetHomeRegionRequest = (input: GetHomeRegionRequest, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1Target = (input: Target, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.Type !== undefined && { Type: input.Type }),
  };
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    __type: "AccessDeniedException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1CreateHomeRegionControlResult = (
  output: any,
  context: __SerdeContext
): CreateHomeRegionControlResult => {
  return {
    __type: "CreateHomeRegionControlResult",
    HomeRegionControl:
      output.HomeRegionControl !== undefined && output.HomeRegionControl !== null
        ? deserializeAws_json1_1HomeRegionControl(output.HomeRegionControl, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeHomeRegionControlsResult = (
  output: any,
  context: __SerdeContext
): DescribeHomeRegionControlsResult => {
  return {
    __type: "DescribeHomeRegionControlsResult",
    HomeRegionControls:
      output.HomeRegionControls !== undefined && output.HomeRegionControls !== null
        ? deserializeAws_json1_1HomeRegionControls(output.HomeRegionControls, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1DryRunOperation = (output: any, context: __SerdeContext): DryRunOperation => {
  return {
    __type: "DryRunOperation",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1GetHomeRegionResult = (output: any, context: __SerdeContext): GetHomeRegionResult => {
  return {
    __type: "GetHomeRegionResult",
    HomeRegion: output.HomeRegion !== undefined && output.HomeRegion !== null ? output.HomeRegion : undefined,
  } as any;
};

const deserializeAws_json1_1HomeRegionControl = (output: any, context: __SerdeContext): HomeRegionControl => {
  return {
    __type: "HomeRegionControl",
    ControlId: output.ControlId !== undefined && output.ControlId !== null ? output.ControlId : undefined,
    HomeRegion: output.HomeRegion !== undefined && output.HomeRegion !== null ? output.HomeRegion : undefined,
    RequestedTime:
      output.RequestedTime !== undefined && output.RequestedTime !== null
        ? new Date(Math.round(output.RequestedTime * 1000))
        : undefined,
    Target:
      output.Target !== undefined && output.Target !== null
        ? deserializeAws_json1_1Target(output.Target, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1HomeRegionControls = (output: any, context: __SerdeContext): HomeRegionControl[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1HomeRegionControl(entry, context));
};

const deserializeAws_json1_1InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    __type: "InternalServerError",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    __type: "InvalidInputException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  return {
    __type: "ServiceUnavailableException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1Target = (output: any, context: __SerdeContext): Target => {
  return {
    __type: "Target",
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"],
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
