// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectString as __expectString,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  DeleteReportDefinitionResponse,
  DescribeReportDefinitionsRequest,
  DescribeReportDefinitionsResponse,
  DuplicateReportNameException,
  InternalErrorException,
  ModifyReportDefinitionRequest,
  ModifyReportDefinitionResponse,
  PutReportDefinitionRequest,
  PutReportDefinitionResponse,
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrigamiServiceGatewayService.DeleteReportDefinition",
  };
  let body: any;
  body = JSON.stringify(se_DeleteReportDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeReportDefinitionsCommand
 */
export const se_DescribeReportDefinitionsCommand = async (
  input: DescribeReportDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrigamiServiceGatewayService.DescribeReportDefinitions",
  };
  let body: any;
  body = JSON.stringify(se_DescribeReportDefinitionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyReportDefinitionCommand
 */
export const se_ModifyReportDefinitionCommand = async (
  input: ModifyReportDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrigamiServiceGatewayService.ModifyReportDefinition",
  };
  let body: any;
  body = JSON.stringify(se_ModifyReportDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutReportDefinitionCommand
 */
export const se_PutReportDefinitionCommand = async (
  input: PutReportDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrigamiServiceGatewayService.PutReportDefinition",
  };
  let body: any;
  body = JSON.stringify(se_PutReportDefinitionRequest(input, context));
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
  contents = de_DeleteReportDefinitionResponse(data, context);
  const response: DeleteReportDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeReportDefinitionsResponse(data, context);
  const response: DescribeReportDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ModifyReportDefinitionResponse(data, context);
  const response: ModifyReportDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_PutReportDefinitionResponse(data, context);
  const response: PutReportDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  const deserialized: any = de_DuplicateReportNameException(body, context);
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
  const deserialized: any = de_InternalErrorException(body, context);
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
  const deserialized: any = de_ReportLimitReachedException(body, context);
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
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AdditionalArtifactList
 */
const se_AdditionalArtifactList = (input: (AdditionalArtifact | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DeleteReportDefinitionRequest
 */
const se_DeleteReportDefinitionRequest = (input: DeleteReportDefinitionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ReportName != null && { ReportName: input.ReportName }),
  };
};

/**
 * serializeAws_json1_1DescribeReportDefinitionsRequest
 */
const se_DescribeReportDefinitionsRequest = (input: DescribeReportDefinitionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ModifyReportDefinitionRequest
 */
const se_ModifyReportDefinitionRequest = (input: ModifyReportDefinitionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ReportDefinition != null && { ReportDefinition: se_ReportDefinition(input.ReportDefinition, context) }),
    ...(input.ReportName != null && { ReportName: input.ReportName }),
  };
};

/**
 * serializeAws_json1_1PutReportDefinitionRequest
 */
const se_PutReportDefinitionRequest = (input: PutReportDefinitionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ReportDefinition != null && { ReportDefinition: se_ReportDefinition(input.ReportDefinition, context) }),
  };
};

/**
 * serializeAws_json1_1ReportDefinition
 */
const se_ReportDefinition = (input: ReportDefinition, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalArtifacts != null && {
      AdditionalArtifacts: se_AdditionalArtifactList(input.AdditionalArtifacts, context),
    }),
    ...(input.AdditionalSchemaElements != null && {
      AdditionalSchemaElements: se_SchemaElementList(input.AdditionalSchemaElements, context),
    }),
    ...(input.BillingViewArn != null && { BillingViewArn: input.BillingViewArn }),
    ...(input.Compression != null && { Compression: input.Compression }),
    ...(input.Format != null && { Format: input.Format }),
    ...(input.RefreshClosedReports != null && { RefreshClosedReports: input.RefreshClosedReports }),
    ...(input.ReportName != null && { ReportName: input.ReportName }),
    ...(input.ReportVersioning != null && { ReportVersioning: input.ReportVersioning }),
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
    ...(input.S3Prefix != null && { S3Prefix: input.S3Prefix }),
    ...(input.S3Region != null && { S3Region: input.S3Region }),
    ...(input.TimeUnit != null && { TimeUnit: input.TimeUnit }),
  };
};

/**
 * serializeAws_json1_1SchemaElementList
 */
const se_SchemaElementList = (input: (SchemaElement | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_json1_1AdditionalArtifactList
 */
const de_AdditionalArtifactList = (output: any, context: __SerdeContext): (AdditionalArtifact | string)[] => {
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
 * deserializeAws_json1_1DeleteReportDefinitionResponse
 */
const de_DeleteReportDefinitionResponse = (output: any, context: __SerdeContext): DeleteReportDefinitionResponse => {
  return {
    ResponseMessage: __expectString(output.ResponseMessage),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeReportDefinitionsResponse
 */
const de_DescribeReportDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeReportDefinitionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ReportDefinitions:
      output.ReportDefinitions != null ? de_ReportDefinitionList(output.ReportDefinitions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DuplicateReportNameException
 */
const de_DuplicateReportNameException = (output: any, context: __SerdeContext): DuplicateReportNameException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InternalErrorException
 */
const de_InternalErrorException = (output: any, context: __SerdeContext): InternalErrorException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ModifyReportDefinitionResponse
 */
const de_ModifyReportDefinitionResponse = (output: any, context: __SerdeContext): ModifyReportDefinitionResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutReportDefinitionResponse
 */
const de_PutReportDefinitionResponse = (output: any, context: __SerdeContext): PutReportDefinitionResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ReportDefinition
 */
const de_ReportDefinition = (output: any, context: __SerdeContext): ReportDefinition => {
  return {
    AdditionalArtifacts:
      output.AdditionalArtifacts != null ? de_AdditionalArtifactList(output.AdditionalArtifacts, context) : undefined,
    AdditionalSchemaElements:
      output.AdditionalSchemaElements != null
        ? de_SchemaElementList(output.AdditionalSchemaElements, context)
        : undefined,
    BillingViewArn: __expectString(output.BillingViewArn),
    Compression: __expectString(output.Compression),
    Format: __expectString(output.Format),
    RefreshClosedReports: __expectBoolean(output.RefreshClosedReports),
    ReportName: __expectString(output.ReportName),
    ReportVersioning: __expectString(output.ReportVersioning),
    S3Bucket: __expectString(output.S3Bucket),
    S3Prefix: __expectString(output.S3Prefix),
    S3Region: __expectString(output.S3Region),
    TimeUnit: __expectString(output.TimeUnit),
  } as any;
};

/**
 * deserializeAws_json1_1ReportDefinitionList
 */
const de_ReportDefinitionList = (output: any, context: __SerdeContext): ReportDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReportDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReportLimitReachedException
 */
const de_ReportLimitReachedException = (output: any, context: __SerdeContext): ReportLimitReachedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1SchemaElementList
 */
const de_SchemaElementList = (output: any, context: __SerdeContext): (SchemaElement | string)[] => {
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
 * deserializeAws_json1_1ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: __expectString(output.Message),
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
