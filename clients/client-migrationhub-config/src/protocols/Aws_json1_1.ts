// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateHomeRegionControlCommandInput,
  CreateHomeRegionControlCommandOutput,
} from "../commands/CreateHomeRegionControlCommand";
import {
  DescribeHomeRegionControlsCommandInput,
  DescribeHomeRegionControlsCommandOutput,
} from "../commands/DescribeHomeRegionControlsCommand";
import { GetHomeRegionCommandInput, GetHomeRegionCommandOutput } from "../commands/GetHomeRegionCommand";
import { MigrationHubConfigServiceException as __BaseException } from "../models/MigrationHubConfigServiceException";
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
  ThrottlingException,
} from "../models/models_0";

export const serializeAws_json1_1CreateHomeRegionControlCommand = async (
  input: CreateHomeRegionControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMigrationHubMultiAccountService.CreateHomeRegionControl",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMigrationHubMultiAccountService.DescribeHomeRegionControls",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMigrationHubMultiAccountService.GetHomeRegion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetHomeRegionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateHomeRegionControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHomeRegionControlCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateHomeRegionControlCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateHomeRegionControlResult(data, context);
  const response: CreateHomeRegionControlCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubconfig#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DryRunOperation":
    case "com.amazonaws.migrationhubconfig#DryRunOperation":
      throw await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhubconfig#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhubconfig#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhubconfig#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubconfig#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeHomeRegionControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHomeRegionControlsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeHomeRegionControlsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeHomeRegionControlsResult(data, context);
  const response: DescribeHomeRegionControlsCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubconfig#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhubconfig#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhubconfig#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhubconfig#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubconfig#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetHomeRegionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHomeRegionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetHomeRegionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetHomeRegionResult(data, context);
  const response: GetHomeRegionCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubconfig#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhubconfig#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhubconfig#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhubconfig#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubconfig#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DryRunOperationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DryRunOperation> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DryRunOperation(body, context);
  const exception = new DryRunOperation({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerError(body, context);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(body, context);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableException(body, context);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1CreateHomeRegionControlRequest = (
  input: CreateHomeRegionControlRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.HomeRegion != null && { HomeRegion: input.HomeRegion }),
    ...(input.Target != null && { Target: serializeAws_json1_1Target(input.Target, context) }),
  };
};

const serializeAws_json1_1DescribeHomeRegionControlsRequest = (
  input: DescribeHomeRegionControlsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ControlId != null && { ControlId: input.ControlId }),
    ...(input.HomeRegion != null && { HomeRegion: input.HomeRegion }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Target != null && { Target: serializeAws_json1_1Target(input.Target, context) }),
  };
};

const serializeAws_json1_1GetHomeRegionRequest = (input: GetHomeRegionRequest, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1Target = (input: Target, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CreateHomeRegionControlResult = (
  output: any,
  context: __SerdeContext
): CreateHomeRegionControlResult => {
  return {
    HomeRegionControl:
      output.HomeRegionControl != null
        ? deserializeAws_json1_1HomeRegionControl(output.HomeRegionControl, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeHomeRegionControlsResult = (
  output: any,
  context: __SerdeContext
): DescribeHomeRegionControlsResult => {
  return {
    HomeRegionControls:
      output.HomeRegionControls != null
        ? deserializeAws_json1_1HomeRegionControls(output.HomeRegionControls, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DryRunOperation = (output: any, context: __SerdeContext): DryRunOperation => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1GetHomeRegionResult = (output: any, context: __SerdeContext): GetHomeRegionResult => {
  return {
    HomeRegion: __expectString(output.HomeRegion),
  } as any;
};

const deserializeAws_json1_1HomeRegionControl = (output: any, context: __SerdeContext): HomeRegionControl => {
  return {
    ControlId: __expectString(output.ControlId),
    HomeRegion: __expectString(output.HomeRegion),
    RequestedTime:
      output.RequestedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RequestedTime)))
        : undefined,
    Target: output.Target != null ? deserializeAws_json1_1Target(output.Target, context) : undefined,
  } as any;
};

const deserializeAws_json1_1HomeRegionControls = (output: any, context: __SerdeContext): HomeRegionControl[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1HomeRegionControl(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Target = (output: any, context: __SerdeContext): Target => {
  return {
    Id: __expectString(output.Id),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
    RetryAfterSeconds: __expectInt32(output.RetryAfterSeconds),
  } as any;
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
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
