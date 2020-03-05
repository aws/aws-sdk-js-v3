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
  let body: any;
  const bodyParams: any = {};
  if (input.campaignArn !== undefined) {
    bodyParams["campaignArn"] = input.campaignArn;
  }
  if (input.context !== undefined) {
    bodyParams["context"] = serializeAws_restJson1_1Context(
      input.context,
      context
    );
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
  let body: any;
  const bodyParams: any = {};
  if (input.campaignArn !== undefined) {
    bodyParams["campaignArn"] = input.campaignArn;
  }
  if (input.context !== undefined) {
    bodyParams["context"] = serializeAws_restJson1_1Context(
      input.context,
      context
    );
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (
    data.personalizedRanking !== undefined &&
    data.personalizedRanking !== null
  ) {
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.runtime.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.runtime.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetRecommendationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (data.itemList !== undefined && data.itemList !== null) {
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.runtime.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.runtime.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_restJson1_1InvalidInputExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const contents: InvalidInputException = {
    name: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1Context = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1InputList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
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
  if (output.itemId !== undefined && output.itemId !== null) {
    contents.itemId = output.itemId;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
