// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  HomeRegionControl,
  InternalServerError,
  InvalidInputException,
  ServiceUnavailableException,
  Target,
  ThrottlingException,
} from "../models/models_0";

/**
 * serializeAws_json1_1CreateHomeRegionControlCommand
 */
export const se_CreateHomeRegionControlCommand = async (
  input: CreateHomeRegionControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateHomeRegionControl");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeHomeRegionControlsCommand
 */
export const se_DescribeHomeRegionControlsCommand = async (
  input: DescribeHomeRegionControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeHomeRegionControls");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetHomeRegionCommand
 */
export const se_GetHomeRegionCommand = async (
  input: GetHomeRegionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetHomeRegion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CreateHomeRegionControlCommand
 */
export const de_CreateHomeRegionControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHomeRegionControlCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateHomeRegionControlCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateHomeRegionControlResult(data, context);
  const response: CreateHomeRegionControlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateHomeRegionControlCommandError
 */
const de_CreateHomeRegionControlCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DryRunOperation":
    case "com.amazonaws.migrationhubconfig#DryRunOperation":
      throw await de_DryRunOperationRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhubconfig#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhubconfig#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhubconfig#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubconfig#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeHomeRegionControlsCommand
 */
export const de_DescribeHomeRegionControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHomeRegionControlsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeHomeRegionControlsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeHomeRegionControlsResult(data, context);
  const response: DescribeHomeRegionControlsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeHomeRegionControlsCommandError
 */
const de_DescribeHomeRegionControlsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhubconfig#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhubconfig#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhubconfig#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubconfig#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetHomeRegionCommand
 */
export const de_GetHomeRegionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHomeRegionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetHomeRegionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetHomeRegionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetHomeRegionCommandError
 */
const de_GetHomeRegionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhubconfig#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhubconfig#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhubconfig#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubconfig#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DryRunOperationRes
 */
const de_DryRunOperationRes = async (parsedOutput: any, context: __SerdeContext): Promise<DryRunOperation> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DryRunOperation({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServerErrorRes
 */
const de_InternalServerErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidInputExceptionRes
 */
const de_InvalidInputExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_CreateHomeRegionControlRequest omitted.

// se_DescribeHomeRegionControlsRequest omitted.

// se_GetHomeRegionRequest omitted.

// se_Target omitted.

// de_AccessDeniedException omitted.

/**
 * deserializeAws_json1_1CreateHomeRegionControlResult
 */
const de_CreateHomeRegionControlResult = (output: any, context: __SerdeContext): CreateHomeRegionControlResult => {
  return take(output, {
    HomeRegionControl: (_: any) => de_HomeRegionControl(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeHomeRegionControlsResult
 */
const de_DescribeHomeRegionControlsResult = (
  output: any,
  context: __SerdeContext
): DescribeHomeRegionControlsResult => {
  return take(output, {
    HomeRegionControls: (_: any) => de_HomeRegionControls(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_DryRunOperation omitted.

// de_GetHomeRegionResult omitted.

/**
 * deserializeAws_json1_1HomeRegionControl
 */
const de_HomeRegionControl = (output: any, context: __SerdeContext): HomeRegionControl => {
  return take(output, {
    ControlId: __expectString,
    HomeRegion: __expectString,
    RequestedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Target: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1HomeRegionControls
 */
const de_HomeRegionControls = (output: any, context: __SerdeContext): HomeRegionControl[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HomeRegionControl(entry, context);
    });
  return retVal;
};

// de_InternalServerError omitted.

// de_InvalidInputException omitted.

// de_ServiceUnavailableException omitted.

// de_Target omitted.

// de_ThrottlingException omitted.

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

const throwDefaultError = withBaseException(__BaseException);
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AWSMigrationHubMultiAccountService.${operation}`,
  };
}

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
