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
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  Message as __Message,
  MessageHeaders as __MessageHeaders,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { DeleteSessionCommandInput, DeleteSessionCommandOutput } from "../commands/DeleteSessionCommand";
import { GetSessionCommandInput, GetSessionCommandOutput } from "../commands/GetSessionCommand";
import { PutSessionCommandInput, PutSessionCommandOutput } from "../commands/PutSessionCommand";
import { RecognizeTextCommandInput, RecognizeTextCommandOutput } from "../commands/RecognizeTextCommand";
import { RecognizeUtteranceCommandInput, RecognizeUtteranceCommandOutput } from "../commands/RecognizeUtteranceCommand";
import { StartConversationCommandInput, StartConversationCommandOutput } from "../commands/StartConversationCommand";
import { LexRuntimeV2ServiceException as __BaseException } from "../models/LexRuntimeV2ServiceException";
import {
  AccessDeniedException,
  ActiveContext,
  ActiveContextTimeToLive,
  AudioInputEvent,
  AudioResponseEvent,
  BadGatewayException,
  Button,
  ConfidenceScore,
  ConfigurationEvent,
  ConflictException,
  DependencyFailedException,
  DialogAction,
  DisconnectionEvent,
  DTMFInputEvent,
  ElicitSubSlot,
  HeartbeatEvent,
  ImageResponseCard,
  Intent,
  IntentResultEvent,
  InternalServerException,
  Interpretation,
  Message,
  PlaybackCompletionEvent,
  PlaybackInterruptionEvent,
  ResourceNotFoundException,
  RuntimeHintDetails,
  RuntimeHints,
  RuntimeHintValue,
  SentimentResponse,
  SentimentScore,
  SessionState,
  Slot,
  StartConversationRequestEventStream,
  StartConversationResponseEventStream,
  TextInputEvent,
  TextResponseEvent,
  ThrottlingException,
  TranscriptEvent,
  ValidationException,
  Value,
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
    "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botAliasId", () => input.botAliasId!, "{botAliasId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "sessionId", () => input.sessionId!, "{sessionId}", false);
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
    "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botAliasId", () => input.botAliasId!, "{botAliasId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "sessionId", () => input.sessionId!, "{sessionId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
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
    responsecontenttype: input.responseContentType!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botAliasId", () => input.botAliasId!, "{botAliasId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "sessionId", () => input.sessionId!, "{sessionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      messages: (_) => _json(_),
      requestAttributes: (_) => _json(_),
      sessionState: (_) => se_SessionState(_, context),
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
 * serializeAws_restJson1RecognizeTextCommand
 */
export const se_RecognizeTextCommand = async (
  input: RecognizeTextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/text";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botAliasId", () => input.botAliasId!, "{botAliasId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "sessionId", () => input.sessionId!, "{sessionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      requestAttributes: (_) => _json(_),
      sessionState: (_) => se_SessionState(_, context),
      text: [],
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
 * serializeAws_restJson1RecognizeUtteranceCommand
 */
export const se_RecognizeUtteranceCommand = async (
  input: RecognizeUtteranceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
    "content-type": input.requestContentType! || "application/octet-stream",
    "x-amz-lex-session-state": input.sessionState!,
    "x-amz-lex-request-attributes": input.requestAttributes!,
    "response-content-type": input.responseContentType!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/utterance";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botAliasId", () => input.botAliasId!, "{botAliasId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "sessionId", () => input.sessionId!, "{sessionId}", false);
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
 * serializeAws_restJson1StartConversationCommand
 */
export const se_StartConversationCommand = async (
  input: StartConversationCommandInput,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-lex-conversation-mode": input.conversationMode!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/conversation";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botAliasId", () => input.botAliasId!, "{botAliasId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "sessionId", () => input.sessionId!, "{sessionId}", false);
  let body: any;
  if (input.requestEventStream !== undefined) {
    body = se_StartConversationRequestEventStream(input.requestEventStream, context);
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
    botAliasId: __expectString,
    botId: __expectString,
    localeId: __expectString,
    sessionId: __expectString,
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
    case "AccessDeniedException":
    case "com.amazonaws.lexruntimev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexruntimev2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexruntimev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexruntimev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexruntimev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexruntimev2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    interpretations: (_) => de_Interpretations(_, context),
    messages: _json,
    sessionId: __expectString,
    sessionState: (_) => de_SessionState(_, context),
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
    case "AccessDeniedException":
    case "com.amazonaws.lexruntimev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexruntimev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexruntimev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexruntimev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexruntimev2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    messages: [, output.headers["x-amz-lex-messages"]],
    sessionState: [, output.headers["x-amz-lex-session-state"]],
    requestAttributes: [, output.headers["x-amz-lex-request-attributes"]],
    sessionId: [, output.headers["x-amz-lex-session-id"]],
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
    case "AccessDeniedException":
    case "com.amazonaws.lexruntimev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadGatewayException":
    case "com.amazonaws.lexruntimev2#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexruntimev2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "DependencyFailedException":
    case "com.amazonaws.lexruntimev2#DependencyFailedException":
      throw await de_DependencyFailedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexruntimev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexruntimev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexruntimev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexruntimev2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RecognizeTextCommand
 */
export const de_RecognizeTextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecognizeTextCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RecognizeTextCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    interpretations: (_) => de_Interpretations(_, context),
    messages: _json,
    recognizedBotMember: _json,
    requestAttributes: _json,
    sessionId: __expectString,
    sessionState: (_) => de_SessionState(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RecognizeTextCommandError
 */
const de_RecognizeTextCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecognizeTextCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lexruntimev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadGatewayException":
    case "com.amazonaws.lexruntimev2#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexruntimev2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "DependencyFailedException":
    case "com.amazonaws.lexruntimev2#DependencyFailedException":
      throw await de_DependencyFailedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexruntimev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexruntimev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexruntimev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexruntimev2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RecognizeUtteranceCommand
 */
export const de_RecognizeUtteranceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<RecognizeUtteranceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RecognizeUtteranceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    inputMode: [, output.headers["x-amz-lex-input-mode"]],
    contentType: [, output.headers["content-type"]],
    messages: [, output.headers["x-amz-lex-messages"]],
    interpretations: [, output.headers["x-amz-lex-interpretations"]],
    sessionState: [, output.headers["x-amz-lex-session-state"]],
    requestAttributes: [, output.headers["x-amz-lex-request-attributes"]],
    sessionId: [, output.headers["x-amz-lex-session-id"]],
    inputTranscript: [, output.headers["x-amz-lex-input-transcript"]],
    recognizedBotMember: [, output.headers["x-amz-lex-recognized-bot-member"]],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.audioStream = data;
  return contents;
};

/**
 * deserializeAws_restJson1RecognizeUtteranceCommandError
 */
const de_RecognizeUtteranceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecognizeUtteranceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lexruntimev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadGatewayException":
    case "com.amazonaws.lexruntimev2#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexruntimev2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "DependencyFailedException":
    case "com.amazonaws.lexruntimev2#DependencyFailedException":
      throw await de_DependencyFailedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexruntimev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexruntimev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexruntimev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexruntimev2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartConversationCommand
 */
export const de_StartConversationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<StartConversationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartConversationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = output.body;
  contents.responseEventStream = de_StartConversationResponseEventStream(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartConversationCommandError
 */
const de_StartConversationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartConversationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lexruntimev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexruntimev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexruntimev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexruntimev2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1BadGatewayExceptionRes
 */
const de_BadGatewayExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadGatewayException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BadGatewayException({
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
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DependencyFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
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
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1StartConversationRequestEventStream
 */
const se_StartConversationRequestEventStream = (
  input: any,
  context: __SerdeContext & __EventStreamSerdeContext
): any => {
  const eventMarshallingVisitor = (event: any): __Message =>
    StartConversationRequestEventStream.visit(event, {
      ConfigurationEvent: (value) => se_ConfigurationEvent_event(value, context),
      AudioInputEvent: (value) => se_AudioInputEvent_event(value, context),
      DTMFInputEvent: (value) => se_DTMFInputEvent_event(value, context),
      TextInputEvent: (value) => se_TextInputEvent_event(value, context),
      PlaybackCompletionEvent: (value) => se_PlaybackCompletionEvent_event(value, context),
      DisconnectionEvent: (value) => se_DisconnectionEvent_event(value, context),
      _: (value) => value as any,
    });
  return context.eventStreamMarshaller.serialize(input, eventMarshallingVisitor);
};
const se_AudioInputEvent_event = (input: AudioInputEvent, context: __SerdeContext): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "AudioInputEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = se_AudioInputEvent(input, context);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
const se_ConfigurationEvent_event = (input: ConfigurationEvent, context: __SerdeContext): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "ConfigurationEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = se_ConfigurationEvent(input, context);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
const se_DisconnectionEvent_event = (input: DisconnectionEvent, context: __SerdeContext): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "DisconnectionEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = _json(input);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
const se_DTMFInputEvent_event = (input: DTMFInputEvent, context: __SerdeContext): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "DTMFInputEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = _json(input);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
const se_PlaybackCompletionEvent_event = (input: PlaybackCompletionEvent, context: __SerdeContext): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "PlaybackCompletionEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = _json(input);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
const se_TextInputEvent_event = (input: TextInputEvent, context: __SerdeContext): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "TextInputEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = _json(input);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
/**
 * deserializeAws_restJson1StartConversationResponseEventStream
 */
const de_StartConversationResponseEventStream = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<StartConversationResponseEventStream> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["PlaybackInterruptionEvent"] != null) {
      return {
        PlaybackInterruptionEvent: await de_PlaybackInterruptionEvent_event(
          event["PlaybackInterruptionEvent"],
          context
        ),
      };
    }
    if (event["TranscriptEvent"] != null) {
      return {
        TranscriptEvent: await de_TranscriptEvent_event(event["TranscriptEvent"], context),
      };
    }
    if (event["IntentResultEvent"] != null) {
      return {
        IntentResultEvent: await de_IntentResultEvent_event(event["IntentResultEvent"], context),
      };
    }
    if (event["TextResponseEvent"] != null) {
      return {
        TextResponseEvent: await de_TextResponseEvent_event(event["TextResponseEvent"], context),
      };
    }
    if (event["AudioResponseEvent"] != null) {
      return {
        AudioResponseEvent: await de_AudioResponseEvent_event(event["AudioResponseEvent"], context),
      };
    }
    if (event["HeartbeatEvent"] != null) {
      return {
        HeartbeatEvent: await de_HeartbeatEvent_event(event["HeartbeatEvent"], context),
      };
    }
    if (event["AccessDeniedException"] != null) {
      return {
        AccessDeniedException: await de_AccessDeniedException_event(event["AccessDeniedException"], context),
      };
    }
    if (event["ResourceNotFoundException"] != null) {
      return {
        ResourceNotFoundException: await de_ResourceNotFoundException_event(
          event["ResourceNotFoundException"],
          context
        ),
      };
    }
    if (event["ValidationException"] != null) {
      return {
        ValidationException: await de_ValidationException_event(event["ValidationException"], context),
      };
    }
    if (event["ThrottlingException"] != null) {
      return {
        ThrottlingException: await de_ThrottlingException_event(event["ThrottlingException"], context),
      };
    }
    if (event["InternalServerException"] != null) {
      return {
        InternalServerException: await de_InternalServerException_event(event["InternalServerException"], context),
      };
    }
    if (event["ConflictException"] != null) {
      return {
        ConflictException: await de_ConflictException_event(event["ConflictException"], context),
      };
    }
    if (event["DependencyFailedException"] != null) {
      return {
        DependencyFailedException: await de_DependencyFailedException_event(
          event["DependencyFailedException"],
          context
        ),
      };
    }
    if (event["BadGatewayException"] != null) {
      return {
        BadGatewayException: await de_BadGatewayException_event(event["BadGatewayException"], context),
      };
    }
    return { $unknown: output };
  });
};
const de_AccessDeniedException_event = async (output: any, context: __SerdeContext): Promise<AccessDeniedException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_AccessDeniedExceptionRes(parsedOutput, context);
};
const de_AudioResponseEvent_event = async (output: any, context: __SerdeContext): Promise<AudioResponseEvent> => {
  const contents: AudioResponseEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_AudioResponseEvent(data, context));
  return contents;
};
const de_BadGatewayException_event = async (output: any, context: __SerdeContext): Promise<BadGatewayException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_BadGatewayExceptionRes(parsedOutput, context);
};
const de_ConflictException_event = async (output: any, context: __SerdeContext): Promise<ConflictException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ConflictExceptionRes(parsedOutput, context);
};
const de_DependencyFailedException_event = async (
  output: any,
  context: __SerdeContext
): Promise<DependencyFailedException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_DependencyFailedExceptionRes(parsedOutput, context);
};
const de_HeartbeatEvent_event = async (output: any, context: __SerdeContext): Promise<HeartbeatEvent> => {
  const contents: HeartbeatEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
  return contents;
};
const de_IntentResultEvent_event = async (output: any, context: __SerdeContext): Promise<IntentResultEvent> => {
  const contents: IntentResultEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_IntentResultEvent(data, context));
  return contents;
};
const de_InternalServerException_event = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_InternalServerExceptionRes(parsedOutput, context);
};
const de_PlaybackInterruptionEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<PlaybackInterruptionEvent> => {
  const contents: PlaybackInterruptionEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
  return contents;
};
const de_ResourceNotFoundException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ResourceNotFoundExceptionRes(parsedOutput, context);
};
const de_TextResponseEvent_event = async (output: any, context: __SerdeContext): Promise<TextResponseEvent> => {
  const contents: TextResponseEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
  return contents;
};
const de_ThrottlingException_event = async (output: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ThrottlingExceptionRes(parsedOutput, context);
};
const de_TranscriptEvent_event = async (output: any, context: __SerdeContext): Promise<TranscriptEvent> => {
  const contents: TranscriptEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
  return contents;
};
const de_ValidationException_event = async (output: any, context: __SerdeContext): Promise<ValidationException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ValidationExceptionRes(parsedOutput, context);
};
// se_ActiveContext omitted.

// se_ActiveContextParametersMap omitted.

// se_ActiveContextsList omitted.

// se_ActiveContextTimeToLive omitted.

/**
 * serializeAws_restJson1AudioInputEvent
 */
const se_AudioInputEvent = (input: AudioInputEvent, context: __SerdeContext): any => {
  return take(input, {
    audioChunk: context.base64Encoder,
    clientTimestampMillis: [],
    contentType: [],
    eventId: [],
  });
};

// se_Button omitted.

// se_ButtonsList omitted.

/**
 * serializeAws_restJson1ConfigurationEvent
 */
const se_ConfigurationEvent = (input: ConfigurationEvent, context: __SerdeContext): any => {
  return take(input, {
    clientTimestampMillis: [],
    disablePlayback: [],
    eventId: [],
    requestAttributes: _json,
    responseContentType: [],
    sessionState: (_) => se_SessionState(_, context),
    welcomeMessages: _json,
  });
};

/**
 * serializeAws_restJson1DialogAction
 */
const se_DialogAction = (input: DialogAction, context: __SerdeContext): any => {
  return take(input, {
    slotElicitationStyle: [],
    slotToElicit: [],
    subSlotToElicit: (_) => se_ElicitSubSlot(_, context),
    type: [],
  });
};

// se_DisconnectionEvent omitted.

// se_DTMFInputEvent omitted.

/**
 * serializeAws_restJson1ElicitSubSlot
 */
const se_ElicitSubSlot = (input: ElicitSubSlot, context: __SerdeContext): any => {
  return take(input, {
    name: [],
    subSlotToElicit: (_) => se_ElicitSubSlot(_, context),
  });
};

// se_ImageResponseCard omitted.

/**
 * serializeAws_restJson1Intent
 */
const se_Intent = (input: Intent, context: __SerdeContext): any => {
  return take(input, {
    confirmationState: [],
    name: [],
    slots: (_) => se_Slots(_, context),
    state: [],
  });
};

// se_Message omitted.

// se_Messages omitted.

// se_PlaybackCompletionEvent omitted.

/**
 * serializeAws_restJson1RuntimeHintDetails
 */
const se_RuntimeHintDetails = (input: RuntimeHintDetails, context: __SerdeContext): any => {
  return take(input, {
    runtimeHintValues: _json,
    subSlotHints: (_) => se_SlotHintsSlotMap(_, context),
  });
};

/**
 * serializeAws_restJson1RuntimeHints
 */
const se_RuntimeHints = (input: RuntimeHints, context: __SerdeContext): any => {
  return take(input, {
    slotHints: (_) => se_SlotHintsIntentMap(_, context),
  });
};

// se_RuntimeHintValue omitted.

// se_RuntimeHintValuesList omitted.

/**
 * serializeAws_restJson1SessionState
 */
const se_SessionState = (input: SessionState, context: __SerdeContext): any => {
  return take(input, {
    activeContexts: _json,
    dialogAction: (_) => se_DialogAction(_, context),
    intent: (_) => se_Intent(_, context),
    originatingRequestId: [],
    runtimeHints: (_) => se_RuntimeHints(_, context),
    sessionAttributes: _json,
  });
};

/**
 * serializeAws_restJson1Slot
 */
const se_Slot = (input: Slot, context: __SerdeContext): any => {
  return take(input, {
    shape: [],
    subSlots: (_) => se_Slots(_, context),
    value: _json,
    values: (_) => se_Values(_, context),
  });
};

/**
 * serializeAws_restJson1SlotHintsIntentMap
 */
const se_SlotHintsIntentMap = (
  input: Record<string, Record<string, RuntimeHintDetails>>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_SlotHintsSlotMap(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1SlotHintsSlotMap
 */
const se_SlotHintsSlotMap = (input: Record<string, RuntimeHintDetails>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_RuntimeHintDetails(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1Slots
 */
const se_Slots = (input: Record<string, Slot>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_Slot(value, context);
    return acc;
  }, {});
};

// se_StringList omitted.

// se_StringMap omitted.

// se_TextInputEvent omitted.

// se_Value omitted.

/**
 * serializeAws_restJson1Values
 */
const se_Values = (input: Slot[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Slot(entry, context);
    });
};

// de_ActiveContext omitted.

// de_ActiveContextParametersMap omitted.

// de_ActiveContextsList omitted.

// de_ActiveContextTimeToLive omitted.

/**
 * deserializeAws_restJson1AudioResponseEvent
 */
const de_AudioResponseEvent = (output: any, context: __SerdeContext): AudioResponseEvent => {
  return take(output, {
    audioChunk: context.base64Decoder,
    contentType: __expectString,
    eventId: __expectString,
  }) as any;
};

// de_Button omitted.

// de_ButtonsList omitted.

/**
 * deserializeAws_restJson1ConfidenceScore
 */
const de_ConfidenceScore = (output: any, context: __SerdeContext): ConfidenceScore => {
  return take(output, {
    score: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1DialogAction
 */
const de_DialogAction = (output: any, context: __SerdeContext): DialogAction => {
  return take(output, {
    slotElicitationStyle: __expectString,
    slotToElicit: __expectString,
    subSlotToElicit: (_: any) => de_ElicitSubSlot(_, context),
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ElicitSubSlot
 */
const de_ElicitSubSlot = (output: any, context: __SerdeContext): ElicitSubSlot => {
  return take(output, {
    name: __expectString,
    subSlotToElicit: (_: any) => de_ElicitSubSlot(_, context),
  }) as any;
};

// de_HeartbeatEvent omitted.

// de_ImageResponseCard omitted.

/**
 * deserializeAws_restJson1Intent
 */
const de_Intent = (output: any, context: __SerdeContext): Intent => {
  return take(output, {
    confirmationState: __expectString,
    name: __expectString,
    slots: (_: any) => de_Slots(_, context),
    state: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1IntentResultEvent
 */
const de_IntentResultEvent = (output: any, context: __SerdeContext): IntentResultEvent => {
  return take(output, {
    eventId: __expectString,
    inputMode: __expectString,
    interpretations: (_: any) => de_Interpretations(_, context),
    recognizedBotMember: _json,
    requestAttributes: _json,
    sessionId: __expectString,
    sessionState: (_: any) => de_SessionState(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1Interpretation
 */
const de_Interpretation = (output: any, context: __SerdeContext): Interpretation => {
  return take(output, {
    intent: (_: any) => de_Intent(_, context),
    nluConfidence: (_: any) => de_ConfidenceScore(_, context),
    sentimentResponse: (_: any) => de_SentimentResponse(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1Interpretations
 */
const de_Interpretations = (output: any, context: __SerdeContext): Interpretation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Interpretation(entry, context);
    });
  return retVal;
};

// de_Message omitted.

// de_Messages omitted.

// de_PlaybackInterruptionEvent omitted.

// de_RecognizedBotMember omitted.

/**
 * deserializeAws_restJson1RuntimeHintDetails
 */
const de_RuntimeHintDetails = (output: any, context: __SerdeContext): RuntimeHintDetails => {
  return take(output, {
    runtimeHintValues: _json,
    subSlotHints: (_: any) => de_SlotHintsSlotMap(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1RuntimeHints
 */
const de_RuntimeHints = (output: any, context: __SerdeContext): RuntimeHints => {
  return take(output, {
    slotHints: (_: any) => de_SlotHintsIntentMap(_, context),
  }) as any;
};

// de_RuntimeHintValue omitted.

// de_RuntimeHintValuesList omitted.

/**
 * deserializeAws_restJson1SentimentResponse
 */
const de_SentimentResponse = (output: any, context: __SerdeContext): SentimentResponse => {
  return take(output, {
    sentiment: __expectString,
    sentimentScore: (_: any) => de_SentimentScore(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1SentimentScore
 */
const de_SentimentScore = (output: any, context: __SerdeContext): SentimentScore => {
  return take(output, {
    mixed: __limitedParseDouble,
    negative: __limitedParseDouble,
    neutral: __limitedParseDouble,
    positive: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1SessionState
 */
const de_SessionState = (output: any, context: __SerdeContext): SessionState => {
  return take(output, {
    activeContexts: _json,
    dialogAction: (_: any) => de_DialogAction(_, context),
    intent: (_: any) => de_Intent(_, context),
    originatingRequestId: __expectString,
    runtimeHints: (_: any) => de_RuntimeHints(_, context),
    sessionAttributes: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1Slot
 */
const de_Slot = (output: any, context: __SerdeContext): Slot => {
  return take(output, {
    shape: __expectString,
    subSlots: (_: any) => de_Slots(_, context),
    value: _json,
    values: (_: any) => de_Values(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1SlotHintsIntentMap
 */
const de_SlotHintsIntentMap = (
  output: any,
  context: __SerdeContext
): Record<string, Record<string, RuntimeHintDetails>> => {
  return Object.entries(output).reduce(
    (acc: Record<string, Record<string, RuntimeHintDetails>>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key as string] = de_SlotHintsSlotMap(value, context);
      return acc;
    },
    {} as Record<string, Record<string, RuntimeHintDetails>>
  );
};

/**
 * deserializeAws_restJson1SlotHintsSlotMap
 */
const de_SlotHintsSlotMap = (output: any, context: __SerdeContext): Record<string, RuntimeHintDetails> => {
  return Object.entries(output).reduce((acc: Record<string, RuntimeHintDetails>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_RuntimeHintDetails(value, context);
    return acc;
  }, {} as Record<string, RuntimeHintDetails>);
};

/**
 * deserializeAws_restJson1Slots
 */
const de_Slots = (output: any, context: __SerdeContext): Record<string, Slot> => {
  return Object.entries(output).reduce((acc: Record<string, Slot>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_Slot(value, context);
    return acc;
  }, {} as Record<string, Slot>);
};

// de_StringList omitted.

// de_StringMap omitted.

// de_TextResponseEvent omitted.

// de_TranscriptEvent omitted.

// de_Value omitted.

/**
 * deserializeAws_restJson1Values
 */
const de_Values = (output: any, context: __SerdeContext): Slot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Slot(entry, context);
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
