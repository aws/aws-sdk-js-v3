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
import {
  GetPriceListFileUrlCommandInput,
  GetPriceListFileUrlCommandOutput,
} from "../commands/GetPriceListFileUrlCommand";
import { GetProductsCommandInput, GetProductsCommandOutput } from "../commands/GetProductsCommand";
import { ListPriceListsCommandInput, ListPriceListsCommandOutput } from "../commands/ListPriceListsCommand";
import {
  AccessDeniedException,
  AttributeValue,
  DescribeServicesRequest,
  DescribeServicesResponse,
  ExpiredNextTokenException,
  Filter,
  GetAttributeValuesRequest,
  GetAttributeValuesResponse,
  GetPriceListFileUrlRequest,
  GetPriceListFileUrlResponse,
  GetProductsRequest,
  GetProductsResponse,
  InternalErrorException,
  InvalidNextTokenException,
  InvalidParameterException,
  ListPriceListsRequest,
  ListPriceListsResponse,
  NotFoundException,
  PriceList,
  Service,
} from "../models/models_0";
import { PricingServiceException as __BaseException } from "../models/PricingServiceException";

/**
 * serializeAws_json1_1DescribeServicesCommand
 */
export const se_DescribeServicesCommand = async (
  input: DescribeServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeServices");
  let body: any;
  body = JSON.stringify(se_DescribeServicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAttributeValuesCommand
 */
export const se_GetAttributeValuesCommand = async (
  input: GetAttributeValuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAttributeValues");
  let body: any;
  body = JSON.stringify(se_GetAttributeValuesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPriceListFileUrlCommand
 */
export const se_GetPriceListFileUrlCommand = async (
  input: GetPriceListFileUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPriceListFileUrl");
  let body: any;
  body = JSON.stringify(se_GetPriceListFileUrlRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetProductsCommand
 */
export const se_GetProductsCommand = async (
  input: GetProductsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetProducts");
  let body: any;
  body = JSON.stringify(se_GetProductsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPriceListsCommand
 */
export const se_ListPriceListsCommand = async (
  input: ListPriceListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPriceLists");
  let body: any;
  body = JSON.stringify(se_ListPriceListsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1DescribeServicesCommand
 */
export const de_DescribeServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeServicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeServicesResponse(data, context);
  const response: DescribeServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeServicesCommandError
 */
const de_DescribeServicesCommandError = async (
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
      throw await de_ExpiredNextTokenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.pricing#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.pricing#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.pricing#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pricing#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetAttributeValuesCommand
 */
export const de_GetAttributeValuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAttributeValuesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAttributeValuesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAttributeValuesResponse(data, context);
  const response: GetAttributeValuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAttributeValuesCommandError
 */
const de_GetAttributeValuesCommandError = async (
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
      throw await de_ExpiredNextTokenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.pricing#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.pricing#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.pricing#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pricing#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetPriceListFileUrlCommand
 */
export const de_GetPriceListFileUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPriceListFileUrlCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPriceListFileUrlCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPriceListFileUrlResponse(data, context);
  const response: GetPriceListFileUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetPriceListFileUrlCommandError
 */
const de_GetPriceListFileUrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPriceListFileUrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pricing#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.pricing#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.pricing#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pricing#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetProductsCommand
 */
export const de_GetProductsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProductsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetProductsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetProductsResponse(data, context);
  const response: GetProductsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetProductsCommandError
 */
const de_GetProductsCommandError = async (
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
      throw await de_ExpiredNextTokenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.pricing#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.pricing#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.pricing#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pricing#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListPriceListsCommand
 */
export const de_ListPriceListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPriceListsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPriceListsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPriceListsResponse(data, context);
  const response: ListPriceListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListPriceListsCommandError
 */
const de_ListPriceListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPriceListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pricing#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ExpiredNextTokenException":
    case "com.amazonaws.pricing#ExpiredNextTokenException":
      throw await de_ExpiredNextTokenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.pricing#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.pricing#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.pricing#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pricing#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ExpiredNextTokenExceptionRes
 */
const de_ExpiredNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ExpiredNextTokenException(body, context);
  const exception = new ExpiredNextTokenException({
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
 * deserializeAws_json1_1InvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidNextTokenException(body, context);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NotFoundException(body, context);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1DescribeServicesRequest
 */
const se_DescribeServicesRequest = (input: DescribeServicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.FormatVersion != null && { FormatVersion: input.FormatVersion }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
  };
};

/**
 * serializeAws_json1_1Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Field != null && { Field: input.Field }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1Filters
 */
const se_Filters = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Filter(entry, context);
    });
};

/**
 * serializeAws_json1_1GetAttributeValuesRequest
 */
const se_GetAttributeValuesRequest = (input: GetAttributeValuesRequest, context: __SerdeContext): any => {
  return {
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
  };
};

/**
 * serializeAws_json1_1GetPriceListFileUrlRequest
 */
const se_GetPriceListFileUrlRequest = (input: GetPriceListFileUrlRequest, context: __SerdeContext): any => {
  return {
    ...(input.FileFormat != null && { FileFormat: input.FileFormat }),
    ...(input.PriceListArn != null && { PriceListArn: input.PriceListArn }),
  };
};

/**
 * serializeAws_json1_1GetProductsRequest
 */
const se_GetProductsRequest = (input: GetProductsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.FormatVersion != null && { FormatVersion: input.FormatVersion }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
  };
};

/**
 * serializeAws_json1_1ListPriceListsRequest
 */
const se_ListPriceListsRequest = (input: ListPriceListsRequest, context: __SerdeContext): any => {
  return {
    ...(input.CurrencyCode != null && { CurrencyCode: input.CurrencyCode }),
    ...(input.EffectiveDate != null && { EffectiveDate: Math.round(input.EffectiveDate.getTime() / 1000) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.RegionCode != null && { RegionCode: input.RegionCode }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
  };
};

/**
 * deserializeAws_json1_1AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AttributeNameList
 */
const de_AttributeNameList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1AttributeValue
 */
const de_AttributeValue = (output: any, context: __SerdeContext): AttributeValue => {
  return {
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1AttributeValueList
 */
const de_AttributeValueList = (output: any, context: __SerdeContext): AttributeValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AttributeValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DescribeServicesResponse
 */
const de_DescribeServicesResponse = (output: any, context: __SerdeContext): DescribeServicesResponse => {
  return {
    FormatVersion: __expectString(output.FormatVersion),
    NextToken: __expectString(output.NextToken),
    Services: output.Services != null ? de_ServiceList(output.Services, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ExpiredNextTokenException
 */
const de_ExpiredNextTokenException = (output: any, context: __SerdeContext): ExpiredNextTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1FileFormats
 */
const de_FileFormats = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1GetAttributeValuesResponse
 */
const de_GetAttributeValuesResponse = (output: any, context: __SerdeContext): GetAttributeValuesResponse => {
  return {
    AttributeValues:
      output.AttributeValues != null ? de_AttributeValueList(output.AttributeValues, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetPriceListFileUrlResponse
 */
const de_GetPriceListFileUrlResponse = (output: any, context: __SerdeContext): GetPriceListFileUrlResponse => {
  return {
    Url: __expectString(output.Url),
  } as any;
};

/**
 * deserializeAws_json1_1GetProductsResponse
 */
const de_GetProductsResponse = (output: any, context: __SerdeContext): GetProductsResponse => {
  return {
    FormatVersion: __expectString(output.FormatVersion),
    NextToken: __expectString(output.NextToken),
    PriceList: output.PriceList != null ? de_PriceListJsonItems(output.PriceList, context) : undefined,
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
 * deserializeAws_json1_1InvalidNextTokenException
 */
const de_InvalidNextTokenException = (output: any, context: __SerdeContext): InvalidNextTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterException
 */
const de_InvalidParameterException = (output: any, context: __SerdeContext): InvalidParameterException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListPriceListsResponse
 */
const de_ListPriceListsResponse = (output: any, context: __SerdeContext): ListPriceListsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PriceLists: output.PriceLists != null ? de_PriceLists(output.PriceLists, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1NotFoundException
 */
const de_NotFoundException = (output: any, context: __SerdeContext): NotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1PriceList
 */
const de_PriceList = (output: any, context: __SerdeContext): PriceList => {
  return {
    CurrencyCode: __expectString(output.CurrencyCode),
    FileFormats: output.FileFormats != null ? de_FileFormats(output.FileFormats, context) : undefined,
    PriceListArn: __expectString(output.PriceListArn),
    RegionCode: __expectString(output.RegionCode),
  } as any;
};

/**
 * deserializeAws_json1_1PriceListJsonItems
 */
const de_PriceListJsonItems = (output: any, context: __SerdeContext): (__LazyJsonString | string)[] => {
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

/**
 * deserializeAws_json1_1PriceLists
 */
const de_PriceLists = (output: any, context: __SerdeContext): PriceList[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PriceList(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Service
 */
const de_Service = (output: any, context: __SerdeContext): Service => {
  return {
    AttributeNames: output.AttributeNames != null ? de_AttributeNameList(output.AttributeNames, context) : undefined,
    ServiceCode: __expectString(output.ServiceCode),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceList
 */
const de_ServiceList = (output: any, context: __SerdeContext): Service[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Service(entry, context);
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AWSPriceListService.${operation}`,
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
