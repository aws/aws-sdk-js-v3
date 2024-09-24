// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
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
  GetActionRecommendationsCommandInput,
  GetActionRecommendationsCommandOutput,
} from "../commands/GetActionRecommendationsCommand";
import {
  GetPersonalizedRankingCommandInput,
  GetPersonalizedRankingCommandOutput,
} from "../commands/GetPersonalizedRankingCommand";
import { GetRecommendationsCommandInput, GetRecommendationsCommandOutput } from "../commands/GetRecommendationsCommand";
import {
  InvalidInputException,
  PredictedAction,
  PredictedItem,
  Promotion,
  ResourceNotFoundException,
} from "../models/models_0";
import { PersonalizeRuntimeServiceException as __BaseException } from "../models/PersonalizeRuntimeServiceException";

/**
 * serializeAws_restJson1GetActionRecommendationsCommand
 */
export const se_GetActionRecommendationsCommand = async (
  input: GetActionRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/action-recommendations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      campaignArn: [],
      filterArn: [],
      filterValues: (_) => _json(_),
      numResults: [],
      userId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPersonalizedRankingCommand
 */
export const se_GetPersonalizedRankingCommand = async (
  input: GetPersonalizedRankingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/personalize-ranking");
  let body: any;
  body = JSON.stringify(
    take(input, {
      campaignArn: [],
      context: (_) => _json(_),
      filterArn: [],
      filterValues: (_) => _json(_),
      inputList: (_) => _json(_),
      metadataColumns: (_) => _json(_),
      userId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRecommendationsCommand
 */
export const se_GetRecommendationsCommand = async (
  input: GetRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/recommendations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      campaignArn: [],
      context: (_) => _json(_),
      filterArn: [],
      filterValues: (_) => _json(_),
      itemId: [],
      metadataColumns: (_) => _json(_),
      numResults: [],
      promotions: (_) => _json(_),
      recommenderArn: [],
      userId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1GetActionRecommendationsCommand
 */
export const de_GetActionRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetActionRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actionList: (_) => de_ActionList(_, context),
    recommendationId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPersonalizedRankingCommand
 */
export const de_GetPersonalizedRankingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPersonalizedRankingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetRecommendationsCommand
 */
export const de_GetRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
      }) as never;
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

// se_ColumnNamesList omitted.

// se_Context omitted.

// se_FilterValues omitted.

// se_InputList omitted.

// se_MetadataColumns omitted.

// se_Promotion omitted.

// se_PromotionList omitted.

/**
 * deserializeAws_restJson1ActionList
 */
const de_ActionList = (output: any, context: __SerdeContext): PredictedAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PredictedAction(entry, context);
    });
  return retVal;
};

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

// de_Metadata omitted.

/**
 * deserializeAws_restJson1PredictedAction
 */
const de_PredictedAction = (output: any, context: __SerdeContext): PredictedAction => {
  return take(output, {
    actionId: __expectString,
    score: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1PredictedItem
 */
const de_PredictedItem = (output: any, context: __SerdeContext): PredictedItem => {
  return take(output, {
    itemId: __expectString,
    metadata: _json,
    promotionName: __expectString,
    reason: _json,
    score: __limitedParseDouble,
  }) as any;
};

// de_ReasonList omitted.

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
