// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  LazyJsonString as __LazyJsonString,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DeleteSessionCommandInput, DeleteSessionCommandOutput } from "../commands/DeleteSessionCommand";
import { GetSessionCommandInput, GetSessionCommandOutput } from "../commands/GetSessionCommand";
import { PostContentCommandInput, PostContentCommandOutput } from "../commands/PostContentCommand";
import { PostTextCommandInput, PostTextCommandOutput } from "../commands/PostTextCommand";
import { PutSessionCommandInput, PutSessionCommandOutput } from "../commands/PutSessionCommand";
import { LexRuntimeServiceServiceException as __BaseException } from "../models/LexRuntimeServiceServiceException";
import {
  ActiveContext,
  ActiveContextTimeToLive,
  BadGatewayException,
  BadRequestException,
  Button,
  ConflictException,
  DependencyFailedException,
  DialogAction,
  GenericAttachment,
  IntentConfidence,
  IntentSummary,
  InternalFailureException,
  LimitExceededException,
  LoopDetectedException,
  NotAcceptableException,
  NotFoundException,
  PredictedIntent,
  RequestTimeoutException,
  ResponseCard,
  SentimentResponse,
  UnsupportedMediaTypeException,
} from "../models/models_0";

/**
 * serializeAws_restJson1DeleteSessionCommand
 */
export const se_DeleteSessionCommand = async (
  input: DeleteSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bot/{botName}/alias/{botAlias}/user/{userId}/session";
  resolvedPath = __resolvedPath(resolvedPath, input, "botName", () => input.botName!, "{botName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botAlias", () => input.botAlias!, "{botAlias}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "userId", () => input.userId!, "{userId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetSessionCommand
 */
export const se_GetSessionCommand = async (
  input: GetSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bot/{botName}/alias/{botAlias}/user/{userId}/session";
  resolvedPath = __resolvedPath(resolvedPath, input, "botName", () => input.botName!, "{botName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botAlias", () => input.botAlias!, "{botAlias}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "userId", () => input.userId!, "{userId}", false);
  const query: any = map({
    checkpointLabelFilter: [, input.checkpointLabelFilter!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1PostContentCommand
 */
export const se_PostContentCommand = async (
  input: PostContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
    "content-type": input.contentType! || "application/octet-stream",
    "x-amz-lex-session-attributes": [
      () => isSerializableHeaderValue(input.sessionAttributes),
      () => context.base64Encoder(Buffer.from(__LazyJsonString.fromObject(input.sessionAttributes!))),
    ],
    "x-amz-lex-request-attributes": [
      () => isSerializableHeaderValue(input.requestAttributes),
      () => context.base64Encoder(Buffer.from(__LazyJsonString.fromObject(input.requestAttributes!))),
    ],
    accept: input.accept!,
    "x-amz-lex-active-contexts": [
      () => isSerializableHeaderValue(input.activeContexts),
      () => context.base64Encoder(Buffer.from(__LazyJsonString.fromObject(input.activeContexts!))),
    ],
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bot/{botName}/alias/{botAlias}/user/{userId}/content";
  resolvedPath = __resolvedPath(resolvedPath, input, "botName", () => input.botName!, "{botName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botAlias", () => input.botAlias!, "{botAlias}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "userId", () => input.userId!, "{userId}", false);
  let body: any;
  if (input.inputStream !== undefined) {
    body = input.inputStream;
  }
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
 * serializeAws_restJson1PostTextCommand
 */
export const se_PostTextCommand = async (
  input: PostTextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bot/{botName}/alias/{botAlias}/user/{userId}/text";
  resolvedPath = __resolvedPath(resolvedPath, input, "botName", () => input.botName!, "{botName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botAlias", () => input.botAlias!, "{botAlias}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "userId", () => input.userId!, "{userId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.activeContexts != null && { activeContexts: se_ActiveContextsList(input.activeContexts, context) }),
    ...(input.inputText != null && { inputText: input.inputText }),
    ...(input.requestAttributes != null && { requestAttributes: se_StringMap(input.requestAttributes, context) }),
    ...(input.sessionAttributes != null && { sessionAttributes: se_StringMap(input.sessionAttributes, context) }),
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

/**
 * serializeAws_restJson1PutSessionCommand
 */
export const se_PutSessionCommand = async (
  input: PutSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    accept: input.accept!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bot/{botName}/alias/{botAlias}/user/{userId}/session";
  resolvedPath = __resolvedPath(resolvedPath, input, "botName", () => input.botName!, "{botName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botAlias", () => input.botAlias!, "{botAlias}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "userId", () => input.userId!, "{userId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.activeContexts != null && { activeContexts: se_ActiveContextsList(input.activeContexts, context) }),
    ...(input.dialogAction != null && { dialogAction: se_DialogAction(input.dialogAction, context) }),
    ...(input.recentIntentSummaryView != null && {
      recentIntentSummaryView: se_IntentSummaryList(input.recentIntentSummaryView, context),
    }),
    ...(input.sessionAttributes != null && { sessionAttributes: se_StringMap(input.sessionAttributes, context) }),
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

/**
 * deserializeAws_restJson1DeleteSessionCommand
 */
export const de_DeleteSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botAlias != null) {
    contents.botAlias = __expectString(data.botAlias);
  }
  if (data.botName != null) {
    contents.botName = __expectString(data.botName);
  }
  if (data.sessionId != null) {
    contents.sessionId = __expectString(data.sessionId);
  }
  if (data.userId != null) {
    contents.userId = __expectString(data.userId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSessionCommandError
 */
const de_DeleteSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexruntimeservice#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexruntimeservice#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexruntimeservice#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexruntimeservice#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexruntimeservice#NotFoundException":
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
 * deserializeAws_restJson1GetSessionCommand
 */
export const de_GetSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.activeContexts != null) {
    contents.activeContexts = de_ActiveContextsList(data.activeContexts, context);
  }
  if (data.dialogAction != null) {
    contents.dialogAction = de_DialogAction(data.dialogAction, context);
  }
  if (data.recentIntentSummaryView != null) {
    contents.recentIntentSummaryView = de_IntentSummaryList(data.recentIntentSummaryView, context);
  }
  if (data.sessionAttributes != null) {
    contents.sessionAttributes = de_StringMap(data.sessionAttributes, context);
  }
  if (data.sessionId != null) {
    contents.sessionId = __expectString(data.sessionId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSessionCommandError
 */
const de_GetSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexruntimeservice#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexruntimeservice#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexruntimeservice#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexruntimeservice#NotFoundException":
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
 * deserializeAws_restJson1PostContentCommand
 */
export const de_PostContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<PostContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PostContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    contentType: [, output.headers["content-type"]],
    intentName: [, output.headers["x-amz-lex-intent-name"]],
    nluIntentConfidence: [
      () => void 0 !== output.headers["x-amz-lex-nlu-intent-confidence"],
      () =>
        new __LazyJsonString(
          Buffer.from(context.base64Decoder(output.headers["x-amz-lex-nlu-intent-confidence"])).toString("utf8")
        ),
    ],
    alternativeIntents: [
      () => void 0 !== output.headers["x-amz-lex-alternative-intents"],
      () =>
        new __LazyJsonString(
          Buffer.from(context.base64Decoder(output.headers["x-amz-lex-alternative-intents"])).toString("utf8")
        ),
    ],
    slots: [
      () => void 0 !== output.headers["x-amz-lex-slots"],
      () =>
        new __LazyJsonString(Buffer.from(context.base64Decoder(output.headers["x-amz-lex-slots"])).toString("utf8")),
    ],
    sessionAttributes: [
      () => void 0 !== output.headers["x-amz-lex-session-attributes"],
      () =>
        new __LazyJsonString(
          Buffer.from(context.base64Decoder(output.headers["x-amz-lex-session-attributes"])).toString("utf8")
        ),
    ],
    sentimentResponse: [, output.headers["x-amz-lex-sentiment"]],
    message: [, output.headers["x-amz-lex-message"]],
    encodedMessage: [, output.headers["x-amz-lex-encoded-message"]],
    messageFormat: [, output.headers["x-amz-lex-message-format"]],
    dialogState: [, output.headers["x-amz-lex-dialog-state"]],
    slotToElicit: [, output.headers["x-amz-lex-slot-to-elicit"]],
    inputTranscript: [, output.headers["x-amz-lex-input-transcript"]],
    encodedInputTranscript: [, output.headers["x-amz-lex-encoded-input-transcript"]],
    botVersion: [, output.headers["x-amz-lex-bot-version"]],
    sessionId: [, output.headers["x-amz-lex-session-id"]],
    activeContexts: [
      () => void 0 !== output.headers["x-amz-lex-active-contexts"],
      () =>
        new __LazyJsonString(
          Buffer.from(context.base64Decoder(output.headers["x-amz-lex-active-contexts"])).toString("utf8")
        ),
    ],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.audioStream = data;
  return contents;
};

/**
 * deserializeAws_restJson1PostContentCommandError
 */
const de_PostContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.lexruntimeservice#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.lexruntimeservice#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexruntimeservice#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "DependencyFailedException":
    case "com.amazonaws.lexruntimeservice#DependencyFailedException":
      throw await de_DependencyFailedExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexruntimeservice#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexruntimeservice#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "LoopDetectedException":
    case "com.amazonaws.lexruntimeservice#LoopDetectedException":
      throw await de_LoopDetectedExceptionRes(parsedOutput, context);
    case "NotAcceptableException":
    case "com.amazonaws.lexruntimeservice#NotAcceptableException":
      throw await de_NotAcceptableExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexruntimeservice#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.lexruntimeservice#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "UnsupportedMediaTypeException":
    case "com.amazonaws.lexruntimeservice#UnsupportedMediaTypeException":
      throw await de_UnsupportedMediaTypeExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PostTextCommand
 */
export const de_PostTextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostTextCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PostTextCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.activeContexts != null) {
    contents.activeContexts = de_ActiveContextsList(data.activeContexts, context);
  }
  if (data.alternativeIntents != null) {
    contents.alternativeIntents = de_IntentList(data.alternativeIntents, context);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.dialogState != null) {
    contents.dialogState = __expectString(data.dialogState);
  }
  if (data.intentName != null) {
    contents.intentName = __expectString(data.intentName);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.messageFormat != null) {
    contents.messageFormat = __expectString(data.messageFormat);
  }
  if (data.nluIntentConfidence != null) {
    contents.nluIntentConfidence = de_IntentConfidence(data.nluIntentConfidence, context);
  }
  if (data.responseCard != null) {
    contents.responseCard = de_ResponseCard(data.responseCard, context);
  }
  if (data.sentimentResponse != null) {
    contents.sentimentResponse = de_SentimentResponse(data.sentimentResponse, context);
  }
  if (data.sessionAttributes != null) {
    contents.sessionAttributes = de_StringMap(data.sessionAttributes, context);
  }
  if (data.sessionId != null) {
    contents.sessionId = __expectString(data.sessionId);
  }
  if (data.slotToElicit != null) {
    contents.slotToElicit = __expectString(data.slotToElicit);
  }
  if (data.slots != null) {
    contents.slots = de_StringMap(data.slots, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PostTextCommandError
 */
const de_PostTextCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostTextCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.lexruntimeservice#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.lexruntimeservice#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexruntimeservice#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "DependencyFailedException":
    case "com.amazonaws.lexruntimeservice#DependencyFailedException":
      throw await de_DependencyFailedExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexruntimeservice#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexruntimeservice#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "LoopDetectedException":
    case "com.amazonaws.lexruntimeservice#LoopDetectedException":
      throw await de_LoopDetectedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexruntimeservice#NotFoundException":
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
 * deserializeAws_restJson1PutSessionCommand
 */
export const de_PutSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<PutSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    contentType: [, output.headers["content-type"]],
    intentName: [, output.headers["x-amz-lex-intent-name"]],
    slots: [
      () => void 0 !== output.headers["x-amz-lex-slots"],
      () =>
        new __LazyJsonString(Buffer.from(context.base64Decoder(output.headers["x-amz-lex-slots"])).toString("utf8")),
    ],
    sessionAttributes: [
      () => void 0 !== output.headers["x-amz-lex-session-attributes"],
      () =>
        new __LazyJsonString(
          Buffer.from(context.base64Decoder(output.headers["x-amz-lex-session-attributes"])).toString("utf8")
        ),
    ],
    message: [, output.headers["x-amz-lex-message"]],
    encodedMessage: [, output.headers["x-amz-lex-encoded-message"]],
    messageFormat: [, output.headers["x-amz-lex-message-format"]],
    dialogState: [, output.headers["x-amz-lex-dialog-state"]],
    slotToElicit: [, output.headers["x-amz-lex-slot-to-elicit"]],
    sessionId: [, output.headers["x-amz-lex-session-id"]],
    activeContexts: [
      () => void 0 !== output.headers["x-amz-lex-active-contexts"],
      () =>
        new __LazyJsonString(
          Buffer.from(context.base64Decoder(output.headers["x-amz-lex-active-contexts"])).toString("utf8")
        ),
    ],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.audioStream = data;
  return contents;
};

/**
 * deserializeAws_restJson1PutSessionCommandError
 */
const de_PutSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.lexruntimeservice#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.lexruntimeservice#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexruntimeservice#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "DependencyFailedException":
    case "com.amazonaws.lexruntimeservice#DependencyFailedException":
      throw await de_DependencyFailedExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexruntimeservice#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexruntimeservice#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotAcceptableException":
    case "com.amazonaws.lexruntimeservice#NotAcceptableException":
      throw await de_NotAcceptableExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexruntimeservice#NotFoundException":
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

const map = __map;
/**
 * deserializeAws_restJson1BadGatewayExceptionRes
 */
const de_BadGatewayExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadGatewayException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new BadGatewayException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DependencyFailedExceptionRes
 */
const de_DependencyFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependencyFailedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new DependencyFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalFailureExceptionRes
 */
const de_InternalFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({
    retryAfterSeconds: [, parsedOutput.headers["retry-after"]],
  });
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LoopDetectedExceptionRes
 */
const de_LoopDetectedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LoopDetectedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new LoopDetectedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotAcceptableExceptionRes
 */
const de_NotAcceptableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotAcceptableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new NotAcceptableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1RequestTimeoutExceptionRes
 */
const de_RequestTimeoutExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestTimeoutException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new RequestTimeoutException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnsupportedMediaTypeExceptionRes
 */
const de_UnsupportedMediaTypeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedMediaTypeException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new UnsupportedMediaTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1ActiveContext
 */
const se_ActiveContext = (input: ActiveContext, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.parameters != null && { parameters: se_ActiveContextParametersMap(input.parameters, context) }),
    ...(input.timeToLive != null && { timeToLive: se_ActiveContextTimeToLive(input.timeToLive, context) }),
  };
};

/**
 * serializeAws_restJson1ActiveContextParametersMap
 */
const se_ActiveContextParametersMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ActiveContextsList
 */
const se_ActiveContextsList = (input: ActiveContext[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ActiveContext(entry, context);
    });
};

/**
 * serializeAws_restJson1ActiveContextTimeToLive
 */
const se_ActiveContextTimeToLive = (input: ActiveContextTimeToLive, context: __SerdeContext): any => {
  return {
    ...(input.timeToLiveInSeconds != null && { timeToLiveInSeconds: input.timeToLiveInSeconds }),
    ...(input.turnsToLive != null && { turnsToLive: input.turnsToLive }),
  };
};

/**
 * serializeAws_restJson1DialogAction
 */
const se_DialogAction = (input: DialogAction, context: __SerdeContext): any => {
  return {
    ...(input.fulfillmentState != null && { fulfillmentState: input.fulfillmentState }),
    ...(input.intentName != null && { intentName: input.intentName }),
    ...(input.message != null && { message: input.message }),
    ...(input.messageFormat != null && { messageFormat: input.messageFormat }),
    ...(input.slotToElicit != null && { slotToElicit: input.slotToElicit }),
    ...(input.slots != null && { slots: se_StringMap(input.slots, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1IntentSummary
 */
const se_IntentSummary = (input: IntentSummary, context: __SerdeContext): any => {
  return {
    ...(input.checkpointLabel != null && { checkpointLabel: input.checkpointLabel }),
    ...(input.confirmationStatus != null && { confirmationStatus: input.confirmationStatus }),
    ...(input.dialogActionType != null && { dialogActionType: input.dialogActionType }),
    ...(input.fulfillmentState != null && { fulfillmentState: input.fulfillmentState }),
    ...(input.intentName != null && { intentName: input.intentName }),
    ...(input.slotToElicit != null && { slotToElicit: input.slotToElicit }),
    ...(input.slots != null && { slots: se_StringMap(input.slots, context) }),
  };
};

/**
 * serializeAws_restJson1IntentSummaryList
 */
const se_IntentSummaryList = (input: IntentSummary[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_IntentSummary(entry, context);
    });
};

/**
 * serializeAws_restJson1StringMap
 */
const se_StringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ActiveContext
 */
const de_ActiveContext = (output: any, context: __SerdeContext): ActiveContext => {
  return {
    name: __expectString(output.name),
    parameters: output.parameters != null ? de_ActiveContextParametersMap(output.parameters, context) : undefined,
    timeToLive: output.timeToLive != null ? de_ActiveContextTimeToLive(output.timeToLive, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ActiveContextParametersMap
 */
const de_ActiveContextParametersMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ActiveContextsList
 */
const de_ActiveContextsList = (output: any, context: __SerdeContext): ActiveContext[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ActiveContext(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ActiveContextTimeToLive
 */
const de_ActiveContextTimeToLive = (output: any, context: __SerdeContext): ActiveContextTimeToLive => {
  return {
    timeToLiveInSeconds: __expectInt32(output.timeToLiveInSeconds),
    turnsToLive: __expectInt32(output.turnsToLive),
  } as any;
};

/**
 * deserializeAws_restJson1Button
 */
const de_Button = (output: any, context: __SerdeContext): Button => {
  return {
    text: __expectString(output.text),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1DialogAction
 */
const de_DialogAction = (output: any, context: __SerdeContext): DialogAction => {
  return {
    fulfillmentState: __expectString(output.fulfillmentState),
    intentName: __expectString(output.intentName),
    message: __expectString(output.message),
    messageFormat: __expectString(output.messageFormat),
    slotToElicit: __expectString(output.slotToElicit),
    slots: output.slots != null ? de_StringMap(output.slots, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1GenericAttachment
 */
const de_GenericAttachment = (output: any, context: __SerdeContext): GenericAttachment => {
  return {
    attachmentLinkUrl: __expectString(output.attachmentLinkUrl),
    buttons: output.buttons != null ? de_listOfButtons(output.buttons, context) : undefined,
    imageUrl: __expectString(output.imageUrl),
    subTitle: __expectString(output.subTitle),
    title: __expectString(output.title),
  } as any;
};

/**
 * deserializeAws_restJson1genericAttachmentList
 */
const de_genericAttachmentList = (output: any, context: __SerdeContext): GenericAttachment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GenericAttachment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IntentConfidence
 */
const de_IntentConfidence = (output: any, context: __SerdeContext): IntentConfidence => {
  return {
    score: __limitedParseDouble(output.score),
  } as any;
};

/**
 * deserializeAws_restJson1IntentList
 */
const de_IntentList = (output: any, context: __SerdeContext): PredictedIntent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PredictedIntent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IntentSummary
 */
const de_IntentSummary = (output: any, context: __SerdeContext): IntentSummary => {
  return {
    checkpointLabel: __expectString(output.checkpointLabel),
    confirmationStatus: __expectString(output.confirmationStatus),
    dialogActionType: __expectString(output.dialogActionType),
    fulfillmentState: __expectString(output.fulfillmentState),
    intentName: __expectString(output.intentName),
    slotToElicit: __expectString(output.slotToElicit),
    slots: output.slots != null ? de_StringMap(output.slots, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1IntentSummaryList
 */
const de_IntentSummaryList = (output: any, context: __SerdeContext): IntentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IntentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1listOfButtons
 */
const de_listOfButtons = (output: any, context: __SerdeContext): Button[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Button(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PredictedIntent
 */
const de_PredictedIntent = (output: any, context: __SerdeContext): PredictedIntent => {
  return {
    intentName: __expectString(output.intentName),
    nluIntentConfidence:
      output.nluIntentConfidence != null ? de_IntentConfidence(output.nluIntentConfidence, context) : undefined,
    slots: output.slots != null ? de_StringMap(output.slots, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ResponseCard
 */
const de_ResponseCard = (output: any, context: __SerdeContext): ResponseCard => {
  return {
    contentType: __expectString(output.contentType),
    genericAttachments:
      output.genericAttachments != null ? de_genericAttachmentList(output.genericAttachments, context) : undefined,
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1SentimentResponse
 */
const de_SentimentResponse = (output: any, context: __SerdeContext): SentimentResponse => {
  return {
    sentimentLabel: __expectString(output.sentimentLabel),
    sentimentScore: __expectString(output.sentimentScore),
  } as any;
};

/**
 * deserializeAws_restJson1StringMap
 */
const de_StringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
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
