// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectString as __expectString,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GenerateDataSetCommandInput, GenerateDataSetCommandOutput } from "../commands/GenerateDataSetCommand";
import {
  StartSupportDataExportCommandInput,
  StartSupportDataExportCommandOutput,
} from "../commands/StartSupportDataExportCommand";
import { MarketplaceCommerceAnalyticsServiceException as __BaseException } from "../models/MarketplaceCommerceAnalyticsServiceException";
import {
  GenerateDataSetRequest,
  GenerateDataSetResult,
  MarketplaceCommerceAnalyticsException,
  StartSupportDataExportRequest,
  StartSupportDataExportResult,
} from "../models/models_0";

export const serializeAws_json1_1GenerateDataSetCommand = async (
  input: GenerateDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MarketplaceCommerceAnalytics20150701.GenerateDataSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GenerateDataSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartSupportDataExportCommand = async (
  input: StartSupportDataExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MarketplaceCommerceAnalytics20150701.StartSupportDataExport",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartSupportDataExportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1GenerateDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GenerateDataSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GenerateDataSetResult(data, context);
  const response: GenerateDataSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GenerateDataSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "MarketplaceCommerceAnalyticsException":
    case "com.amazonaws.marketplacecommerceanalytics#MarketplaceCommerceAnalyticsException":
      throw await deserializeAws_json1_1MarketplaceCommerceAnalyticsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartSupportDataExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSupportDataExportCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartSupportDataExportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartSupportDataExportResult(data, context);
  const response: StartSupportDataExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartSupportDataExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSupportDataExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "MarketplaceCommerceAnalyticsException":
    case "com.amazonaws.marketplacecommerceanalytics#MarketplaceCommerceAnalyticsException":
      throw await deserializeAws_json1_1MarketplaceCommerceAnalyticsExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1MarketplaceCommerceAnalyticsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MarketplaceCommerceAnalyticsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MarketplaceCommerceAnalyticsException(body, context);
  const exception = new MarketplaceCommerceAnalyticsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1CustomerDefinedValues = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1GenerateDataSetRequest = (input: GenerateDataSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.customerDefinedValues != null && {
      customerDefinedValues: serializeAws_json1_1CustomerDefinedValues(input.customerDefinedValues, context),
    }),
    ...(input.dataSetPublicationDate != null && {
      dataSetPublicationDate: Math.round(input.dataSetPublicationDate.getTime() / 1000),
    }),
    ...(input.dataSetType != null && { dataSetType: input.dataSetType }),
    ...(input.destinationS3BucketName != null && { destinationS3BucketName: input.destinationS3BucketName }),
    ...(input.destinationS3Prefix != null && { destinationS3Prefix: input.destinationS3Prefix }),
    ...(input.roleNameArn != null && { roleNameArn: input.roleNameArn }),
    ...(input.snsTopicArn != null && { snsTopicArn: input.snsTopicArn }),
  };
};

const serializeAws_json1_1StartSupportDataExportRequest = (
  input: StartSupportDataExportRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.customerDefinedValues != null && {
      customerDefinedValues: serializeAws_json1_1CustomerDefinedValues(input.customerDefinedValues, context),
    }),
    ...(input.dataSetType != null && { dataSetType: input.dataSetType }),
    ...(input.destinationS3BucketName != null && { destinationS3BucketName: input.destinationS3BucketName }),
    ...(input.destinationS3Prefix != null && { destinationS3Prefix: input.destinationS3Prefix }),
    ...(input.fromDate != null && { fromDate: Math.round(input.fromDate.getTime() / 1000) }),
    ...(input.roleNameArn != null && { roleNameArn: input.roleNameArn }),
    ...(input.snsTopicArn != null && { snsTopicArn: input.snsTopicArn }),
  };
};

const deserializeAws_json1_1GenerateDataSetResult = (output: any, context: __SerdeContext): GenerateDataSetResult => {
  return {
    dataSetRequestId: __expectString(output.dataSetRequestId),
  } as any;
};

const deserializeAws_json1_1MarketplaceCommerceAnalyticsException = (
  output: any,
  context: __SerdeContext
): MarketplaceCommerceAnalyticsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1StartSupportDataExportResult = (
  output: any,
  context: __SerdeContext
): StartSupportDataExportResult => {
  return {
    dataSetRequestId: __expectString(output.dataSetRequestId),
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
