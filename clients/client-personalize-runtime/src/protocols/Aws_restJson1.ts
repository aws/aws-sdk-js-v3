// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  map,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  GetPersonalizedRankingCommandInput,
  GetPersonalizedRankingCommandOutput,
} from "../commands/GetPersonalizedRankingCommand";
import { GetRecommendationsCommandInput, GetRecommendationsCommandOutput } from "../commands/GetRecommendationsCommand";
import { InvalidInputException, PredictedItem, Promotion, ResourceNotFoundException } from "../models/models_0";
import { PersonalizeRuntimeServiceException as __BaseException } from "../models/PersonalizeRuntimeServiceException";

/**
 * serializeAws_restJson1GetPersonalizedRankingCommand
 */
export const se_GetPersonalizedRankingCommand = async (
  input: GetPersonalizedRankingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/personalize-ranking";
  let body: any;
  body = JSON.stringify(
    take(input, {
      campaignArn: [],
      context: (_) => _json(_),
      filterArn: [],
      filterValues: (_) => _json(_),
      inputList: (_) => _json(_),
      userId: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetRecommendationsCommand
 */
export const se_GetRecommendationsCommand = async (
  input: GetRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recommendations";
  let body: any;
  body = JSON.stringify(
    take(input, {
      campaignArn: [],
      context: (_) => _json(_),
      filterArn: [],
      filterValues: (_) => _json(_),
      itemId: [],
      numResults: [],
      promotions: (_) => _json(_),
      recommenderArn: [],
      userId: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1GetPersonalizedRankingCommand
 */
export const de_GetPersonalizedRankingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPersonalizedRankingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPersonalizedRankingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    personalizedRanking: (_) => de_ItemList(_, context),
    recommendationId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPersonalizedRankingCommandError
 */
const de_GetPersonalizedRankingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPersonalizedRankingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalizeruntime#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalizeruntime#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetRecommendationsCommand
 */
export const de_GetRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRecommendationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    itemList: (_) => de_ItemList(_, context),
    recommendationId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRecommendationsCommandError
 */
const de_GetRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalizeruntime#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalizeruntime#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1InvalidInputExceptionRes
 */
const de_InvalidInputExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_Context omitted.

// se_FilterValues omitted.

// se_InputList omitted.

// se_Promotion omitted.

// se_PromotionList omitted.

/**
 * deserializeAws_restJson1ItemList
 */
const de_ItemList = (output: any, context: __SerdeContext): PredictedItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PredictedItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PredictedItem
 */
const de_PredictedItem = (output: any, context: __SerdeContext): PredictedItem => {
  return take(output, {
    itemId: __expectString,
    promotionName: __expectString,
    score: __limitedParseDouble,
  }) as any;
};

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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
