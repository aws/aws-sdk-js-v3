import {
  GetPersonalizedRankingCommandInput,
  GetPersonalizedRankingCommandOutput,
} from "../commands/GetPersonalizedRankingCommand";
import { GetRecommendationsCommandInput, GetRecommendationsCommandOutput } from "../commands/GetRecommendationsCommand";
import { InvalidInputException, PredictedItem, ResourceNotFoundException } from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1GetPersonalizedRankingCommand = async (
  input: GetPersonalizedRankingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/personalize-ranking";
  let body: any;
  body = JSON.stringify({
    ...(input.campaignArn !== undefined && input.campaignArn !== null && { campaignArn: input.campaignArn }),
    ...(input.context !== undefined &&
      input.context !== null && { context: serializeAws_restJson1Context(input.context, context) }),
    ...(input.filterArn !== undefined && input.filterArn !== null && { filterArn: input.filterArn }),
    ...(input.filterValues !== undefined &&
      input.filterValues !== null && { filterValues: serializeAws_restJson1FilterValues(input.filterValues, context) }),
    ...(input.inputList !== undefined &&
      input.inputList !== null && { inputList: serializeAws_restJson1InputList(input.inputList, context) }),
    ...(input.userId !== undefined && input.userId !== null && { userId: input.userId }),
  });
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

export const serializeAws_restJson1GetRecommendationsCommand = async (
  input: GetRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recommendations";
  let body: any;
  body = JSON.stringify({
    ...(input.campaignArn !== undefined && input.campaignArn !== null && { campaignArn: input.campaignArn }),
    ...(input.context !== undefined &&
      input.context !== null && { context: serializeAws_restJson1Context(input.context, context) }),
    ...(input.filterArn !== undefined && input.filterArn !== null && { filterArn: input.filterArn }),
    ...(input.filterValues !== undefined &&
      input.filterValues !== null && { filterValues: serializeAws_restJson1FilterValues(input.filterValues, context) }),
    ...(input.itemId !== undefined && input.itemId !== null && { itemId: input.itemId }),
    ...(input.numResults !== undefined && input.numResults !== null && { numResults: input.numResults }),
    ...(input.userId !== undefined && input.userId !== null && { userId: input.userId }),
  });
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

export const deserializeAws_restJson1GetPersonalizedRankingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPersonalizedRankingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPersonalizedRankingCommandError(output, context);
  }
  const contents: GetPersonalizedRankingCommandOutput = {
    $metadata: deserializeMetadata(output),
    personalizedRanking: undefined,
    recommendationId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.personalizedRanking !== undefined && data.personalizedRanking !== null) {
    contents.personalizedRanking = deserializeAws_restJson1ItemList(data.personalizedRanking, context);
  }
  if (data.recommendationId !== undefined && data.recommendationId !== null) {
    contents.recommendationId = __expectString(data.recommendationId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetPersonalizedRankingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPersonalizedRankingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalizeruntime#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalizeruntime#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRecommendationsCommandError(output, context);
  }
  const contents: GetRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    itemList: undefined,
    recommendationId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.itemList !== undefined && data.itemList !== null) {
    contents.itemList = deserializeAws_restJson1ItemList(data.itemList, context);
  }
  if (data.recommendationId !== undefined && data.recommendationId !== null) {
    contents.recommendationId = __expectString(data.recommendationId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalizeruntime#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalizeruntime#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const contents: InvalidInputException = {
    name: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const serializeAws_restJson1Context = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1FilterValues = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1InputList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1ItemList = (output: any, context: __SerdeContext): PredictedItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PredictedItem(entry, context);
    });
};

const deserializeAws_restJson1PredictedItem = (output: any, context: __SerdeContext): PredictedItem => {
  return {
    itemId: __expectString(output.itemId),
    score: __limitedParseDouble(output.score),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
