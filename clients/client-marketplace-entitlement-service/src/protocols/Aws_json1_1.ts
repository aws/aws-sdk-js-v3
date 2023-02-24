// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GetEntitlementsCommandInput, GetEntitlementsCommandOutput } from "../commands/GetEntitlementsCommand";
import { MarketplaceEntitlementServiceServiceException as __BaseException } from "../models/MarketplaceEntitlementServiceServiceException";
import {
  Entitlement,
  EntitlementValue,
  GetEntitlementFilterName,
  GetEntitlementsRequest,
  GetEntitlementsResult,
  InternalServiceErrorException,
  InvalidParameterException,
  ThrottlingException,
} from "../models/models_0";

export const serializeAws_json1_1GetEntitlementsCommand = async (
  input: GetEntitlementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMPEntitlementService.GetEntitlements",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetEntitlementsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1GetEntitlementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEntitlementsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetEntitlementsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetEntitlementsResult(data, context);
  const response: GetEntitlementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetEntitlementsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEntitlementsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.marketplaceentitlementservice#InternalServiceErrorException":
      throw await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.marketplaceentitlementservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.marketplaceentitlementservice#ThrottlingException":
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

const deserializeAws_json1_1InternalServiceErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceErrorException(body, context);
  const exception = new InternalServiceErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
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

const serializeAws_json1_1FilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1GetEntitlementFilters = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: Record<string, any>, [key, value]: [GetEntitlementFilterName | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = serializeAws_json1_1FilterValueList(value, context);
      return acc;
    },
    {}
  );
};

const serializeAws_json1_1GetEntitlementsRequest = (input: GetEntitlementsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1GetEntitlementFilters(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ProductCode != null && { ProductCode: input.ProductCode }),
  };
};

const deserializeAws_json1_1Entitlement = (output: any, context: __SerdeContext): Entitlement => {
  return {
    CustomerIdentifier: __expectString(output.CustomerIdentifier),
    Dimension: __expectString(output.Dimension),
    ExpirationDate:
      output.ExpirationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpirationDate)))
        : undefined,
    ProductCode: __expectString(output.ProductCode),
    Value: output.Value != null ? deserializeAws_json1_1EntitlementValue(output.Value, context) : undefined,
  } as any;
};

const deserializeAws_json1_1EntitlementList = (output: any, context: __SerdeContext): Entitlement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Entitlement(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EntitlementValue = (output: any, context: __SerdeContext): EntitlementValue => {
  return {
    BooleanValue: __expectBoolean(output.BooleanValue),
    DoubleValue: __limitedParseDouble(output.DoubleValue),
    IntegerValue: __expectInt32(output.IntegerValue),
    StringValue: __expectString(output.StringValue),
  } as any;
};

const deserializeAws_json1_1GetEntitlementsResult = (output: any, context: __SerdeContext): GetEntitlementsResult => {
  return {
    Entitlements:
      output.Entitlements != null ? deserializeAws_json1_1EntitlementList(output.Entitlements, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1InternalServiceErrorException = (
  output: any,
  context: __SerdeContext
): InternalServiceErrorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    message: __expectString(output.message),
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
