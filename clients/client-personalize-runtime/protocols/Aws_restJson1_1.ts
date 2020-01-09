import {
  GetPersonalizedRankingCommandInput,
  GetPersonalizedRankingCommandOutput
} from "../commands/GetPersonalizedRankingCommand";
import {
  GetRecommendationsCommandInput,
  GetRecommendationsCommandOutput
} from "../commands/GetRecommendationsCommand";
import {
  InvalidInputException,
  PredictedItem,
  ResourceNotFoundException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1GetPersonalizedRankingCommand(
  input: GetPersonalizedRankingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/personalize-ranking";
  let body: any = {};
  const bodyParams: any = {};
  if (input.campaignArn !== undefined) {
    bodyParams["campaignArn"] = input.campaignArn;
  }
  if (input.inputList !== undefined) {
    bodyParams["inputList"] = serializeAws_restJson1_1InputList(
      input.inputList,
      context
    );
  }
  if (input.userId !== undefined) {
    bodyParams["userId"] = input.userId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetRecommendationsCommand(
  input: GetRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/recommendations";
  let body: any = {};
  const bodyParams: any = {};
  if (input.campaignArn !== undefined) {
    bodyParams["campaignArn"] = input.campaignArn;
  }
  if (input.itemId !== undefined) {
    bodyParams["itemId"] = input.itemId;
  }
  if (input.numResults !== undefined) {
    bodyParams["numResults"] = input.numResults;
  }
  if (input.userId !== undefined) {
    bodyParams["userId"] = input.userId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1GetPersonalizedRankingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPersonalizedRankingCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetPersonalizedRankingCommandError(
      output,
      context
    );
  }
  const contents: GetPersonalizedRankingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPersonalizedRankingResponse",
    personalizedRanking: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.personalizedRanking !== undefined) {
    contents.personalizedRanking = deserializeAws_restJson1_1ItemList(
      data.personalizedRanking,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetPersonalizedRankingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPersonalizedRankingCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.runtime.exceptions#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.runtime.exceptions#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.services.personalize.runtime#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetRecommendationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetRecommendationsCommandError(
      output,
      context
    );
  }
  const contents: GetRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRecommendationsResponse",
    itemList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.itemList !== undefined) {
    contents.itemList = deserializeAws_restJson1_1ItemList(
      data.itemList,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetRecommendationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.runtime.exceptions#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.runtime.exceptions#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.services.personalize.runtime#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1InvalidInputExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const contents: InvalidInputException = {
    __type: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1InputList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const deserializeAws_restJson1_1ItemList = (
  output: any,
  context: __SerdeContext
): Array<PredictedItem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PredictedItem(entry, context)
  );
};

const deserializeAws_restJson1_1PredictedItem = (
  output: any,
  context: __SerdeContext
): PredictedItem => {
  let contents: any = {
    __type: "PredictedItem",
    itemId: undefined
  };
  if (output.itemId !== undefined) {
    contents.itemId = output.itemId;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
