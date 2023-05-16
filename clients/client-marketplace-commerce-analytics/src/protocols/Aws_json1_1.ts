// smithy-typescript generated code
import {
  _json,
  decorateServiceException as __decorateServiceException,
  take,
  withBaseException,
} from "@aws-sdk/smithy-client";
import { HeaderBag as __HeaderBag, ResponseMetadata as __ResponseMetadata } from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Endpoint as __Endpoint, SerdeContext as __SerdeContext } from "@smithy/types";

import { GenerateDataSetCommandInput, GenerateDataSetCommandOutput } from "../commands/GenerateDataSetCommand";
import {
  StartSupportDataExportCommandInput,
  StartSupportDataExportCommandOutput,
} from "../commands/StartSupportDataExportCommand";
import { MarketplaceCommerceAnalyticsServiceException as __BaseException } from "../models/MarketplaceCommerceAnalyticsServiceException";
import {
  GenerateDataSetRequest,
  MarketplaceCommerceAnalyticsException,
  StartSupportDataExportRequest,
} from "../models/models_0";

/**
 * serializeAws_json1_1GenerateDataSetCommand
 */
export const se_GenerateDataSetCommand = async (
  input: GenerateDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GenerateDataSet");
  let body: any;
  body = JSON.stringify(se_GenerateDataSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartSupportDataExportCommand
 */
export const se_StartSupportDataExportCommand = async (
  input: StartSupportDataExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartSupportDataExport");
  let body: any;
  body = JSON.stringify(se_StartSupportDataExportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1GenerateDataSetCommand
 */
export const de_GenerateDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GenerateDataSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GenerateDataSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GenerateDataSetCommandError
 */
const de_GenerateDataSetCommandError = async (
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
      throw await de_MarketplaceCommerceAnalyticsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartSupportDataExportCommand
 */
export const de_StartSupportDataExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSupportDataExportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartSupportDataExportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartSupportDataExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartSupportDataExportCommandError
 */
const de_StartSupportDataExportCommandError = async (
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
      throw await de_MarketplaceCommerceAnalyticsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1MarketplaceCommerceAnalyticsExceptionRes
 */
const de_MarketplaceCommerceAnalyticsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MarketplaceCommerceAnalyticsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MarketplaceCommerceAnalyticsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_CustomerDefinedValues omitted.

/**
 * serializeAws_json1_1GenerateDataSetRequest
 */
const se_GenerateDataSetRequest = (input: GenerateDataSetRequest, context: __SerdeContext): any => {
  return take(input, {
    customerDefinedValues: _json,
    dataSetPublicationDate: (_) => Math.round(_.getTime() / 1000),
    dataSetType: [],
    destinationS3BucketName: [],
    destinationS3Prefix: [],
    roleNameArn: [],
    snsTopicArn: [],
  });
};

/**
 * serializeAws_json1_1StartSupportDataExportRequest
 */
const se_StartSupportDataExportRequest = (input: StartSupportDataExportRequest, context: __SerdeContext): any => {
  return take(input, {
    customerDefinedValues: _json,
    dataSetType: [],
    destinationS3BucketName: [],
    destinationS3Prefix: [],
    fromDate: (_) => Math.round(_.getTime() / 1000),
    roleNameArn: [],
    snsTopicArn: [],
  });
};

// de_GenerateDataSetResult omitted.

// de_MarketplaceCommerceAnalyticsException omitted.

// de_StartSupportDataExportResult omitted.

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
    "x-amz-target": `MarketplaceCommerceAnalytics20150701.${operation}`,
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
