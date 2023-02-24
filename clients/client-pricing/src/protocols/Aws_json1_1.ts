// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectString as __expectString,
  LazyJsonString as __LazyJsonString,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DescribeServicesCommandInput, DescribeServicesCommandOutput } from "../commands/DescribeServicesCommand";
import { GetAttributeValuesCommandInput, GetAttributeValuesCommandOutput } from "../commands/GetAttributeValuesCommand";
import { GetProductsCommandInput, GetProductsCommandOutput } from "../commands/GetProductsCommand";
import {
  AttributeValue,
  DescribeServicesRequest,
  DescribeServicesResponse,
  ExpiredNextTokenException,
  Filter,
  GetAttributeValuesRequest,
  GetAttributeValuesResponse,
  GetProductsRequest,
  GetProductsResponse,
  InternalErrorException,
  InvalidNextTokenException,
  InvalidParameterException,
  NotFoundException,
  Service,
} from "../models/models_0";
import { PricingServiceException as __BaseException } from "../models/PricingServiceException";

export const serializeAws_json1_1DescribeServicesCommand = async (
  input: DescribeServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPriceListService.DescribeServices",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeServicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAttributeValuesCommand = async (
  input: GetAttributeValuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPriceListService.GetAttributeValues",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAttributeValuesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetProductsCommand = async (
  input: GetProductsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPriceListService.GetProducts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetProductsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1DescribeServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeServicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeServicesResponse(data, context);
  const response: DescribeServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeServicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExpiredNextTokenException":
    case "com.amazonaws.pricing#ExpiredNextTokenException":
      throw await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.pricing#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.pricing#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.pricing#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pricing#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetAttributeValuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAttributeValuesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAttributeValuesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAttributeValuesResponse(data, context);
  const response: GetAttributeValuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAttributeValuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAttributeValuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExpiredNextTokenException":
    case "com.amazonaws.pricing#ExpiredNextTokenException":
      throw await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.pricing#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.pricing#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.pricing#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pricing#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetProductsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProductsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetProductsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetProductsResponse(data, context);
  const response: GetProductsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetProductsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProductsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExpiredNextTokenException":
    case "com.amazonaws.pricing#ExpiredNextTokenException":
      throw await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.pricing#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.pricing#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.pricing#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pricing#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1ExpiredNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ExpiredNextTokenException(body, context);
  const exception = new ExpiredNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalErrorException(body, context);
  const exception = new InternalErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(body, context);
  const exception = new InvalidNextTokenException({
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

const deserializeAws_json1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotFoundException(body, context);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1DescribeServicesRequest = (input: DescribeServicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.FormatVersion != null && { FormatVersion: input.FormatVersion }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
  };
};

const serializeAws_json1_1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Field != null && { Field: input.Field }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1Filters = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Filter(entry, context);
    });
};

const serializeAws_json1_1GetAttributeValuesRequest = (
  input: GetAttributeValuesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
  };
};

const serializeAws_json1_1GetProductsRequest = (input: GetProductsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
    ...(input.FormatVersion != null && { FormatVersion: input.FormatVersion }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
  };
};

const deserializeAws_json1_1AttributeNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1AttributeValue = (output: any, context: __SerdeContext): AttributeValue => {
  return {
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1AttributeValueList = (output: any, context: __SerdeContext): AttributeValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AttributeValue(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DescribeServicesResponse = (
  output: any,
  context: __SerdeContext
): DescribeServicesResponse => {
  return {
    FormatVersion: __expectString(output.FormatVersion),
    NextToken: __expectString(output.NextToken),
    Services: output.Services != null ? deserializeAws_json1_1ServiceList(output.Services, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ExpiredNextTokenException = (
  output: any,
  context: __SerdeContext
): ExpiredNextTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1GetAttributeValuesResponse = (
  output: any,
  context: __SerdeContext
): GetAttributeValuesResponse => {
  return {
    AttributeValues:
      output.AttributeValues != null
        ? deserializeAws_json1_1AttributeValueList(output.AttributeValues, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetProductsResponse = (output: any, context: __SerdeContext): GetProductsResponse => {
  return {
    FormatVersion: __expectString(output.FormatVersion),
    NextToken: __expectString(output.NextToken),
    PriceList:
      output.PriceList != null ? deserializeAws_json1_1PriceListJsonItems(output.PriceList, context) : undefined,
  } as any;
};

const deserializeAws_json1_1InternalErrorException = (output: any, context: __SerdeContext): InternalErrorException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1NotFoundException = (output: any, context: __SerdeContext): NotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1PriceListJsonItems = (
  output: any,
  context: __SerdeContext
): (__LazyJsonString | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return new __LazyJsonString(entry);
    });
  return retVal;
};

const deserializeAws_json1_1Service = (output: any, context: __SerdeContext): Service => {
  return {
    AttributeNames:
      output.AttributeNames != null
        ? deserializeAws_json1_1AttributeNameList(output.AttributeNames, context)
        : undefined,
    ServiceCode: __expectString(output.ServiceCode),
  } as any;
};

const deserializeAws_json1_1ServiceList = (output: any, context: __SerdeContext): Service[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Service(entry, context);
    });
  return retVal;
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
