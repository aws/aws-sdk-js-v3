// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  LazyJsonString as __LazyJsonString,
  limitedParseDouble as __limitedParseDouble,
  map,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  ConflictException,
  DependencyFailedException,
  DialogAction,
  IntentConfidence,
  IntentSummary,
  InternalFailureException,
  LimitExceededException,
  LoopDetectedException,
  NotAcceptableException,
  NotFoundException,
  PredictedIntent,
  RequestTimeoutException,
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
  body = JSON.stringify(
    take(input, {
      activeContexts: (_) => _json(_),
      inputText: [],
      requestAttributes: (_) => _json(_),
      sessionAttributes: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      activeContexts: (_) => _json(_),
      dialogAction: (_) => _json(_),
      recentIntentSummaryView: (_) => _json(_),
      sessionAttributes: (_) => _json(_),
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
  const doc = take(data, {
    botAlias: __expectString,
    botName: __expectString,
    sessionId: __expectString,
    userId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    activeContexts: _json,
    dialogAction: _json,
    recentIntentSummaryView: _json,
    sessionAttributes: _json,
    sessionId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    activeContexts: _json,
    alternativeIntents: (_) => de_IntentList(_, context),
    botVersion: __expectString,
    dialogState: __expectString,
    intentName: __expectString,
    message: __expectString,
    messageFormat: __expectString,
    nluIntentConfidence: (_) => de_IntentConfidence(_, context),
    responseCard: _json,
    sentimentResponse: _json,
    sessionAttributes: _json,
    sessionId: __expectString,
    slotToElicit: __expectString,
    slots: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1BadGatewayExceptionRes
 */
const de_BadGatewayExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadGatewayException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnsupportedMediaTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_ActiveContext omitted.

// se_ActiveContextParametersMap omitted.

// se_ActiveContextsList omitted.

// se_ActiveContextTimeToLive omitted.

// se_DialogAction omitted.

// se_IntentSummary omitted.

// se_IntentSummaryList omitted.

// se_StringMap omitted.

// de_ActiveContext omitted.

// de_ActiveContextParametersMap omitted.

// de_ActiveContextsList omitted.

// de_ActiveContextTimeToLive omitted.

// de_Button omitted.

// de_DialogAction omitted.

// de_GenericAttachment omitted.

// de_genericAttachmentList omitted.

/**
 * deserializeAws_restJson1IntentConfidence
 */
const de_IntentConfidence = (output: any, context: __SerdeContext): IntentConfidence => {
  return take(output, {
    score: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1IntentList
 */
const de_IntentList = (output: any, context: __SerdeContext): PredictedIntent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PredictedIntent(entry, context);
    });
  return retVal;
};

// de_IntentSummary omitted.

// de_IntentSummaryList omitted.

// de_listOfButtons omitted.

/**
 * deserializeAws_restJson1PredictedIntent
 */
const de_PredictedIntent = (output: any, context: __SerdeContext): PredictedIntent => {
  return take(output, {
    intentName: __expectString,
    nluIntentConfidence: (_: any) => de_IntentConfidence(_, context),
    slots: _json,
  }) as any;
};

// de_ResponseCard omitted.

// de_SentimentResponse omitted.

// de_StringMap omitted.

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
