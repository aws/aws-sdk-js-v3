// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectString as __expectString,
  LazyJsonString as __LazyJsonString,
  map,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  PutActionInteractionsCommandInput,
  PutActionInteractionsCommandOutput,
} from "../commands/PutActionInteractionsCommand";
import { PutActionsCommandInput, PutActionsCommandOutput } from "../commands/PutActionsCommand";
import { PutEventsCommandInput, PutEventsCommandOutput } from "../commands/PutEventsCommand";
import { PutItemsCommandInput, PutItemsCommandOutput } from "../commands/PutItemsCommand";
import { PutUsersCommandInput, PutUsersCommandOutput } from "../commands/PutUsersCommand";
import {
  Action,
  ActionInteraction,
  Event,
  InvalidInputException,
  Item,
  MetricAttribution,
  ResourceInUseException,
  ResourceNotFoundException,
  User,
} from "../models/models_0";
import { PersonalizeEventsServiceException as __BaseException } from "../models/PersonalizeEventsServiceException";

/**
 * serializeAws_restJson1PutActionInteractionsCommand
 */
export const se_PutActionInteractionsCommand = async (
  input: PutActionInteractionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/action-interactions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      actionInteractions: (_) => se_ActionInteractionsList(_, context),
      trackingId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutActionsCommand
 */
export const se_PutActionsCommand = async (
  input: PutActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/actions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      actions: (_) => se_ActionList(_, context),
      datasetArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutEventsCommand
 */
export const se_PutEventsCommand = async (
  input: PutEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/events");
  let body: any;
  body = JSON.stringify(
    take(input, {
      eventList: (_) => se_EventList(_, context),
      sessionId: [],
      trackingId: [],
      userId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutItemsCommand
 */
export const se_PutItemsCommand = async (
  input: PutItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/items");
  let body: any;
  body = JSON.stringify(
    take(input, {
      datasetArn: [],
      items: (_) => se_ItemList(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutUsersCommand
 */
export const se_PutUsersCommand = async (
  input: PutUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/users");
  let body: any;
  body = JSON.stringify(
    take(input, {
      datasetArn: [],
      users: (_) => se_UserList(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1PutActionInteractionsCommand
 */
export const de_PutActionInteractionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutActionInteractionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutActionsCommand
 */
export const de_PutActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutActionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutEventsCommand
 */
export const de_PutEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutItemsCommand
 */
export const de_PutItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutUsersCommand
 */
export const de_PutUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
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
    case "com.amazonaws.personalizeevents#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalizeevents#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalizeevents#ResourceNotFoundException":
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
 * deserializeAws_restJson1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceInUseException({
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

/**
 * serializeAws_restJson1Action
 */
const se_Action = (input: Action, context: __SerdeContext): any => {
  return take(input, {
    actionId: [],
    properties: __LazyJsonString.from,
  });
};

// se_ActionImpression omitted.

/**
 * serializeAws_restJson1ActionInteraction
 */
const se_ActionInteraction = (input: ActionInteraction, context: __SerdeContext): any => {
  return take(input, {
    actionId: [],
    eventId: [],
    eventType: [],
    impression: _json,
    properties: __LazyJsonString.from,
    recommendationId: [],
    sessionId: [],
    timestamp: (_) => _.getTime() / 1_000,
    userId: [],
  });
};

/**
 * serializeAws_restJson1ActionInteractionsList
 */
const se_ActionInteractionsList = (input: ActionInteraction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ActionInteraction(entry, context);
    });
};

/**
 * serializeAws_restJson1ActionList
 */
const se_ActionList = (input: Action[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Action(entry, context);
    });
};

/**
 * serializeAws_restJson1Event
 */
const se_Event = (input: Event, context: __SerdeContext): any => {
  return take(input, {
    eventId: [],
    eventType: [],
    eventValue: __serializeFloat,
    impression: _json,
    itemId: [],
    metricAttribution: _json,
    properties: __LazyJsonString.from,
    recommendationId: [],
    sentAt: (_) => _.getTime() / 1_000,
  });
};

/**
 * serializeAws_restJson1EventList
 */
const se_EventList = (input: Event[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Event(entry, context);
    });
};

// se_Impression omitted.

/**
 * serializeAws_restJson1Item
 */
const se_Item = (input: Item, context: __SerdeContext): any => {
  return take(input, {
    itemId: [],
    properties: __LazyJsonString.from,
  });
};

/**
 * serializeAws_restJson1ItemList
 */
const se_ItemList = (input: Item[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Item(entry, context);
    });
};

// se_MetricAttribution omitted.

/**
 * serializeAws_restJson1User
 */
const se_User = (input: User, context: __SerdeContext): any => {
  return take(input, {
    properties: __LazyJsonString.from,
    userId: [],
  });
};

/**
 * serializeAws_restJson1UserList
 */
const se_UserList = (input: User[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_User(entry, context);
    });
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
