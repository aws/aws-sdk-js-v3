// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  DeleteReportDefinitionCommandInput,
  DeleteReportDefinitionCommandOutput,
} from "../commands/DeleteReportDefinitionCommand";
import {
  DescribeReportDefinitionsCommandInput,
  DescribeReportDefinitionsCommandOutput,
} from "../commands/DescribeReportDefinitionsCommand";
import {
  ModifyReportDefinitionCommandInput,
  ModifyReportDefinitionCommandOutput,
} from "../commands/ModifyReportDefinitionCommand";
import {
  PutReportDefinitionCommandInput,
  PutReportDefinitionCommandOutput,
} from "../commands/PutReportDefinitionCommand";
import { CostAndUsageReportServiceServiceException as __BaseException } from "../models/CostAndUsageReportServiceServiceException";
import {
  AdditionalArtifact,
  DeleteReportDefinitionRequest,
  DescribeReportDefinitionsRequest,
  DuplicateReportNameException,
  InternalErrorException,
  ModifyReportDefinitionRequest,
  PutReportDefinitionRequest,
  ReportDefinition,
  ReportLimitReachedException,
  SchemaElement,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_json1_1DeleteReportDefinitionCommand
 */
export const se_DeleteReportDefinitionCommand = async (
  input: DeleteReportDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteReportDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeReportDefinitionsCommand
 */
export const se_DescribeReportDefinitionsCommand = async (
  input: DescribeReportDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeReportDefinitions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyReportDefinitionCommand
 */
export const se_ModifyReportDefinitionCommand = async (
  input: ModifyReportDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyReportDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutReportDefinitionCommand
 */
export const se_PutReportDefinitionCommand = async (
  input: PutReportDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutReportDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1DeleteReportDefinitionCommand
 */
export const de_DeleteReportDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReportDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteReportDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteReportDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteReportDefinitionCommandError
 */
const de_DeleteReportDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReportDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.costandusagereportservice#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.costandusagereportservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeReportDefinitionsCommand
 */
export const de_DescribeReportDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReportDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReportDefinitionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeReportDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeReportDefinitionsCommandError
 */
const de_DescribeReportDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReportDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.costandusagereportservice#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ModifyReportDefinitionCommand
 */
export const de_ModifyReportDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReportDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyReportDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ModifyReportDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ModifyReportDefinitionCommandError
 */
const de_ModifyReportDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReportDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.costandusagereportservice#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.costandusagereportservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutReportDefinitionCommand
 */
export const de_PutReportDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutReportDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutReportDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutReportDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutReportDefinitionCommandError
 */
const de_PutReportDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutReportDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateReportNameException":
    case "com.amazonaws.costandusagereportservice#DuplicateReportNameException":
      throw await de_DuplicateReportNameExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.costandusagereportservice#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "ReportLimitReachedException":
    case "com.amazonaws.costandusagereportservice#ReportLimitReachedException":
      throw await de_ReportLimitReachedExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.costandusagereportservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DuplicateReportNameExceptionRes
 */
const de_DuplicateReportNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateReportNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DuplicateReportNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalErrorExceptionRes
 */
const de_InternalErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ReportLimitReachedExceptionRes
 */
const de_ReportLimitReachedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReportLimitReachedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ReportLimitReachedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AdditionalArtifactList omitted.

// se_DeleteReportDefinitionRequest omitted.

// se_DescribeReportDefinitionsRequest omitted.

// se_ModifyReportDefinitionRequest omitted.

// se_PutReportDefinitionRequest omitted.

// se_ReportDefinition omitted.

// se_SchemaElementList omitted.

// de_AdditionalArtifactList omitted.

// de_DeleteReportDefinitionResponse omitted.

// de_DescribeReportDefinitionsResponse omitted.

// de_DuplicateReportNameException omitted.

// de_InternalErrorException omitted.

// de_ModifyReportDefinitionResponse omitted.

// de_PutReportDefinitionResponse omitted.

// de_ReportDefinition omitted.

// de_ReportDefinitionList omitted.

// de_ReportLimitReachedException omitted.

// de_SchemaElementList omitted.

// de_ValidationException omitted.

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
    "x-amz-target": `AWSOrigamiServiceGatewayService.${operation}`,
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
