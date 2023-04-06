// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  Message as __Message,
  MessageHeaders as __MessageHeaders,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  RecognizedBotMember,
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
  body = JSON.stringify({
    ...(input.messages != null && { messages: se_Messages(input.messages, context) }),
    ...(input.requestAttributes != null && { requestAttributes: se_StringMap(input.requestAttributes, context) }),
    ...(input.sessionState != null && { sessionState: se_SessionState(input.sessionState, context) }),
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
  body = JSON.stringify({
    ...(input.requestAttributes != null && { requestAttributes: se_StringMap(input.requestAttributes, context) }),
    ...(input.sessionState != null && { sessionState: se_SessionState(input.sessionState, context) }),
    ...(input.text != null && { text: input.text }),
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
  if (data.botAliasId != null) {
    contents.botAliasId = __expectString(data.botAliasId);
  }
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.sessionId != null) {
    contents.sessionId = __expectString(data.sessionId);
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
  if (data.interpretations != null) {
    contents.interpretations = de_Interpretations(data.interpretations, context);
  }
  if (data.messages != null) {
    contents.messages = de_Messages(data.messages, context);
  }
  if (data.sessionId != null) {
    contents.sessionId = __expectString(data.sessionId);
  }
  if (data.sessionState != null) {
    contents.sessionState = de_SessionState(data.sessionState, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.interpretations != null) {
    contents.interpretations = de_Interpretations(data.interpretations, context);
  }
  if (data.messages != null) {
    contents.messages = de_Messages(data.messages, context);
  }
  if (data.recognizedBotMember != null) {
    contents.recognizedBotMember = de_RecognizedBotMember(data.recognizedBotMember, context);
  }
  if (data.requestAttributes != null) {
    contents.requestAttributes = de_StringMap(data.requestAttributes, context);
  }
  if (data.sessionId != null) {
    contents.sessionId = __expectString(data.sessionId);
  }
  if (data.sessionState != null) {
    contents.sessionState = de_SessionState(data.sessionState, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  body = se_DisconnectionEvent(input, context);
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
  body = se_DTMFInputEvent(input, context);
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
  body = se_PlaybackCompletionEvent(input, context);
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
  body = se_TextInputEvent(input, context);
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
  Object.assign(contents, de_HeartbeatEvent(data, context));
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
  Object.assign(contents, de_PlaybackInterruptionEvent(data, context));
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
  Object.assign(contents, de_TextResponseEvent(data, context));
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
  Object.assign(contents, de_TranscriptEvent(data, context));
  return contents;
};
const de_ValidationException_event = async (output: any, context: __SerdeContext): Promise<ValidationException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ValidationExceptionRes(parsedOutput, context);
};
/**
 * serializeAws_restJson1ActiveContext
 */
const se_ActiveContext = (input: ActiveContext, context: __SerdeContext): any => {
  return {
    ...(input.contextAttributes != null && {
      contextAttributes: se_ActiveContextParametersMap(input.contextAttributes, context),
    }),
    ...(input.name != null && { name: input.name }),
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
 * serializeAws_restJson1AudioInputEvent
 */
const se_AudioInputEvent = (input: AudioInputEvent, context: __SerdeContext): any => {
  return {
    ...(input.audioChunk != null && { audioChunk: context.base64Encoder(input.audioChunk) }),
    ...(input.clientTimestampMillis != null && { clientTimestampMillis: input.clientTimestampMillis }),
    ...(input.contentType != null && { contentType: input.contentType }),
    ...(input.eventId != null && { eventId: input.eventId }),
  };
};

/**
 * serializeAws_restJson1Button
 */
const se_Button = (input: Button, context: __SerdeContext): any => {
  return {
    ...(input.text != null && { text: input.text }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1ButtonsList
 */
const se_ButtonsList = (input: Button[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Button(entry, context);
    });
};

/**
 * serializeAws_restJson1ConfigurationEvent
 */
const se_ConfigurationEvent = (input: ConfigurationEvent, context: __SerdeContext): any => {
  return {
    ...(input.clientTimestampMillis != null && { clientTimestampMillis: input.clientTimestampMillis }),
    ...(input.disablePlayback != null && { disablePlayback: input.disablePlayback }),
    ...(input.eventId != null && { eventId: input.eventId }),
    ...(input.requestAttributes != null && { requestAttributes: se_StringMap(input.requestAttributes, context) }),
    ...(input.responseContentType != null && { responseContentType: input.responseContentType }),
    ...(input.sessionState != null && { sessionState: se_SessionState(input.sessionState, context) }),
    ...(input.welcomeMessages != null && { welcomeMessages: se_Messages(input.welcomeMessages, context) }),
  };
};

/**
 * serializeAws_restJson1DialogAction
 */
const se_DialogAction = (input: DialogAction, context: __SerdeContext): any => {
  return {
    ...(input.slotElicitationStyle != null && { slotElicitationStyle: input.slotElicitationStyle }),
    ...(input.slotToElicit != null && { slotToElicit: input.slotToElicit }),
    ...(input.subSlotToElicit != null && { subSlotToElicit: se_ElicitSubSlot(input.subSlotToElicit, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1DisconnectionEvent
 */
const se_DisconnectionEvent = (input: DisconnectionEvent, context: __SerdeContext): any => {
  return {
    ...(input.clientTimestampMillis != null && { clientTimestampMillis: input.clientTimestampMillis }),
    ...(input.eventId != null && { eventId: input.eventId }),
  };
};

/**
 * serializeAws_restJson1DTMFInputEvent
 */
const se_DTMFInputEvent = (input: DTMFInputEvent, context: __SerdeContext): any => {
  return {
    ...(input.clientTimestampMillis != null && { clientTimestampMillis: input.clientTimestampMillis }),
    ...(input.eventId != null && { eventId: input.eventId }),
    ...(input.inputCharacter != null && { inputCharacter: input.inputCharacter }),
  };
};

/**
 * serializeAws_restJson1ElicitSubSlot
 */
const se_ElicitSubSlot = (input: ElicitSubSlot, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.subSlotToElicit != null && { subSlotToElicit: se_ElicitSubSlot(input.subSlotToElicit, context) }),
  };
};

/**
 * serializeAws_restJson1ImageResponseCard
 */
const se_ImageResponseCard = (input: ImageResponseCard, context: __SerdeContext): any => {
  return {
    ...(input.buttons != null && { buttons: se_ButtonsList(input.buttons, context) }),
    ...(input.imageUrl != null && { imageUrl: input.imageUrl }),
    ...(input.subtitle != null && { subtitle: input.subtitle }),
    ...(input.title != null && { title: input.title }),
  };
};

/**
 * serializeAws_restJson1Intent
 */
const se_Intent = (input: Intent, context: __SerdeContext): any => {
  return {
    ...(input.confirmationState != null && { confirmationState: input.confirmationState }),
    ...(input.name != null && { name: input.name }),
    ...(input.slots != null && { slots: se_Slots(input.slots, context) }),
    ...(input.state != null && { state: input.state }),
  };
};

/**
 * serializeAws_restJson1Message
 */
const se_Message = (input: Message, context: __SerdeContext): any => {
  return {
    ...(input.content != null && { content: input.content }),
    ...(input.contentType != null && { contentType: input.contentType }),
    ...(input.imageResponseCard != null && {
      imageResponseCard: se_ImageResponseCard(input.imageResponseCard, context),
    }),
  };
};

/**
 * serializeAws_restJson1Messages
 */
const se_Messages = (input: Message[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Message(entry, context);
    });
};

/**
 * serializeAws_restJson1PlaybackCompletionEvent
 */
const se_PlaybackCompletionEvent = (input: PlaybackCompletionEvent, context: __SerdeContext): any => {
  return {
    ...(input.clientTimestampMillis != null && { clientTimestampMillis: input.clientTimestampMillis }),
    ...(input.eventId != null && { eventId: input.eventId }),
  };
};

/**
 * serializeAws_restJson1RuntimeHintDetails
 */
const se_RuntimeHintDetails = (input: RuntimeHintDetails, context: __SerdeContext): any => {
  return {
    ...(input.runtimeHintValues != null && {
      runtimeHintValues: se_RuntimeHintValuesList(input.runtimeHintValues, context),
    }),
    ...(input.subSlotHints != null && { subSlotHints: se_SlotHintsSlotMap(input.subSlotHints, context) }),
  };
};

/**
 * serializeAws_restJson1RuntimeHints
 */
const se_RuntimeHints = (input: RuntimeHints, context: __SerdeContext): any => {
  return {
    ...(input.slotHints != null && { slotHints: se_SlotHintsIntentMap(input.slotHints, context) }),
  };
};

/**
 * serializeAws_restJson1RuntimeHintValue
 */
const se_RuntimeHintValue = (input: RuntimeHintValue, context: __SerdeContext): any => {
  return {
    ...(input.phrase != null && { phrase: input.phrase }),
  };
};

/**
 * serializeAws_restJson1RuntimeHintValuesList
 */
const se_RuntimeHintValuesList = (input: RuntimeHintValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RuntimeHintValue(entry, context);
    });
};

/**
 * serializeAws_restJson1SessionState
 */
const se_SessionState = (input: SessionState, context: __SerdeContext): any => {
  return {
    ...(input.activeContexts != null && { activeContexts: se_ActiveContextsList(input.activeContexts, context) }),
    ...(input.dialogAction != null && { dialogAction: se_DialogAction(input.dialogAction, context) }),
    ...(input.intent != null && { intent: se_Intent(input.intent, context) }),
    ...(input.originatingRequestId != null && { originatingRequestId: input.originatingRequestId }),
    ...(input.runtimeHints != null && { runtimeHints: se_RuntimeHints(input.runtimeHints, context) }),
    ...(input.sessionAttributes != null && { sessionAttributes: se_StringMap(input.sessionAttributes, context) }),
  };
};

/**
 * serializeAws_restJson1Slot
 */
const se_Slot = (input: Slot, context: __SerdeContext): any => {
  return {
    ...(input.shape != null && { shape: input.shape }),
    ...(input.subSlots != null && { subSlots: se_Slots(input.subSlots, context) }),
    ...(input.value != null && { value: se_Value(input.value, context) }),
    ...(input.values != null && { values: se_Values(input.values, context) }),
  };
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

/**
 * serializeAws_restJson1StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
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
 * serializeAws_restJson1TextInputEvent
 */
const se_TextInputEvent = (input: TextInputEvent, context: __SerdeContext): any => {
  return {
    ...(input.clientTimestampMillis != null && { clientTimestampMillis: input.clientTimestampMillis }),
    ...(input.eventId != null && { eventId: input.eventId }),
    ...(input.text != null && { text: input.text }),
  };
};

/**
 * serializeAws_restJson1Value
 */
const se_Value = (input: Value, context: __SerdeContext): any => {
  return {
    ...(input.interpretedValue != null && { interpretedValue: input.interpretedValue }),
    ...(input.originalValue != null && { originalValue: input.originalValue }),
    ...(input.resolvedValues != null && { resolvedValues: se_StringList(input.resolvedValues, context) }),
  };
};

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

/**
 * deserializeAws_restJson1ActiveContext
 */
const de_ActiveContext = (output: any, context: __SerdeContext): ActiveContext => {
  return {
    contextAttributes:
      output.contextAttributes != null ? de_ActiveContextParametersMap(output.contextAttributes, context) : undefined,
    name: __expectString(output.name),
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
 * deserializeAws_restJson1AudioResponseEvent
 */
const de_AudioResponseEvent = (output: any, context: __SerdeContext): AudioResponseEvent => {
  return {
    audioChunk: output.audioChunk != null ? context.base64Decoder(output.audioChunk) : undefined,
    contentType: __expectString(output.contentType),
    eventId: __expectString(output.eventId),
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
 * deserializeAws_restJson1ButtonsList
 */
const de_ButtonsList = (output: any, context: __SerdeContext): Button[] => {
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
 * deserializeAws_restJson1ConfidenceScore
 */
const de_ConfidenceScore = (output: any, context: __SerdeContext): ConfidenceScore => {
  return {
    score: __limitedParseDouble(output.score),
  } as any;
};

/**
 * deserializeAws_restJson1DialogAction
 */
const de_DialogAction = (output: any, context: __SerdeContext): DialogAction => {
  return {
    slotElicitationStyle: __expectString(output.slotElicitationStyle),
    slotToElicit: __expectString(output.slotToElicit),
    subSlotToElicit: output.subSlotToElicit != null ? de_ElicitSubSlot(output.subSlotToElicit, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1ElicitSubSlot
 */
const de_ElicitSubSlot = (output: any, context: __SerdeContext): ElicitSubSlot => {
  return {
    name: __expectString(output.name),
    subSlotToElicit: output.subSlotToElicit != null ? de_ElicitSubSlot(output.subSlotToElicit, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1HeartbeatEvent
 */
const de_HeartbeatEvent = (output: any, context: __SerdeContext): HeartbeatEvent => {
  return {
    eventId: __expectString(output.eventId),
  } as any;
};

/**
 * deserializeAws_restJson1ImageResponseCard
 */
const de_ImageResponseCard = (output: any, context: __SerdeContext): ImageResponseCard => {
  return {
    buttons: output.buttons != null ? de_ButtonsList(output.buttons, context) : undefined,
    imageUrl: __expectString(output.imageUrl),
    subtitle: __expectString(output.subtitle),
    title: __expectString(output.title),
  } as any;
};

/**
 * deserializeAws_restJson1Intent
 */
const de_Intent = (output: any, context: __SerdeContext): Intent => {
  return {
    confirmationState: __expectString(output.confirmationState),
    name: __expectString(output.name),
    slots: output.slots != null ? de_Slots(output.slots, context) : undefined,
    state: __expectString(output.state),
  } as any;
};

/**
 * deserializeAws_restJson1IntentResultEvent
 */
const de_IntentResultEvent = (output: any, context: __SerdeContext): IntentResultEvent => {
  return {
    eventId: __expectString(output.eventId),
    inputMode: __expectString(output.inputMode),
    interpretations: output.interpretations != null ? de_Interpretations(output.interpretations, context) : undefined,
    recognizedBotMember:
      output.recognizedBotMember != null ? de_RecognizedBotMember(output.recognizedBotMember, context) : undefined,
    requestAttributes: output.requestAttributes != null ? de_StringMap(output.requestAttributes, context) : undefined,
    sessionId: __expectString(output.sessionId),
    sessionState: output.sessionState != null ? de_SessionState(output.sessionState, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Interpretation
 */
const de_Interpretation = (output: any, context: __SerdeContext): Interpretation => {
  return {
    intent: output.intent != null ? de_Intent(output.intent, context) : undefined,
    nluConfidence: output.nluConfidence != null ? de_ConfidenceScore(output.nluConfidence, context) : undefined,
    sentimentResponse:
      output.sentimentResponse != null ? de_SentimentResponse(output.sentimentResponse, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Interpretations
 */
const de_Interpretations = (output: any, context: __SerdeContext): Interpretation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Interpretation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Message
 */
const de_Message = (output: any, context: __SerdeContext): Message => {
  return {
    content: __expectString(output.content),
    contentType: __expectString(output.contentType),
    imageResponseCard:
      output.imageResponseCard != null ? de_ImageResponseCard(output.imageResponseCard, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Messages
 */
const de_Messages = (output: any, context: __SerdeContext): Message[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Message(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PlaybackInterruptionEvent
 */
const de_PlaybackInterruptionEvent = (output: any, context: __SerdeContext): PlaybackInterruptionEvent => {
  return {
    causedByEventId: __expectString(output.causedByEventId),
    eventId: __expectString(output.eventId),
    eventReason: __expectString(output.eventReason),
  } as any;
};

/**
 * deserializeAws_restJson1RecognizedBotMember
 */
const de_RecognizedBotMember = (output: any, context: __SerdeContext): RecognizedBotMember => {
  return {
    botId: __expectString(output.botId),
    botName: __expectString(output.botName),
  } as any;
};

/**
 * deserializeAws_restJson1RuntimeHintDetails
 */
const de_RuntimeHintDetails = (output: any, context: __SerdeContext): RuntimeHintDetails => {
  return {
    runtimeHintValues:
      output.runtimeHintValues != null ? de_RuntimeHintValuesList(output.runtimeHintValues, context) : undefined,
    subSlotHints: output.subSlotHints != null ? de_SlotHintsSlotMap(output.subSlotHints, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RuntimeHints
 */
const de_RuntimeHints = (output: any, context: __SerdeContext): RuntimeHints => {
  return {
    slotHints: output.slotHints != null ? de_SlotHintsIntentMap(output.slotHints, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RuntimeHintValue
 */
const de_RuntimeHintValue = (output: any, context: __SerdeContext): RuntimeHintValue => {
  return {
    phrase: __expectString(output.phrase),
  } as any;
};

/**
 * deserializeAws_restJson1RuntimeHintValuesList
 */
const de_RuntimeHintValuesList = (output: any, context: __SerdeContext): RuntimeHintValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RuntimeHintValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SentimentResponse
 */
const de_SentimentResponse = (output: any, context: __SerdeContext): SentimentResponse => {
  return {
    sentiment: __expectString(output.sentiment),
    sentimentScore: output.sentimentScore != null ? de_SentimentScore(output.sentimentScore, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SentimentScore
 */
const de_SentimentScore = (output: any, context: __SerdeContext): SentimentScore => {
  return {
    mixed: __limitedParseDouble(output.mixed),
    negative: __limitedParseDouble(output.negative),
    neutral: __limitedParseDouble(output.neutral),
    positive: __limitedParseDouble(output.positive),
  } as any;
};

/**
 * deserializeAws_restJson1SessionState
 */
const de_SessionState = (output: any, context: __SerdeContext): SessionState => {
  return {
    activeContexts: output.activeContexts != null ? de_ActiveContextsList(output.activeContexts, context) : undefined,
    dialogAction: output.dialogAction != null ? de_DialogAction(output.dialogAction, context) : undefined,
    intent: output.intent != null ? de_Intent(output.intent, context) : undefined,
    originatingRequestId: __expectString(output.originatingRequestId),
    runtimeHints: output.runtimeHints != null ? de_RuntimeHints(output.runtimeHints, context) : undefined,
    sessionAttributes: output.sessionAttributes != null ? de_StringMap(output.sessionAttributes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Slot
 */
const de_Slot = (output: any, context: __SerdeContext): Slot => {
  return {
    shape: __expectString(output.shape),
    subSlots: output.subSlots != null ? de_Slots(output.subSlots, context) : undefined,
    value: output.value != null ? de_Value(output.value, context) : undefined,
    values: output.values != null ? de_Values(output.values, context) : undefined,
  } as any;
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
      acc[key] = de_SlotHintsSlotMap(value, context);
      return acc;
    },
    {}
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
    acc[key] = de_RuntimeHintDetails(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Slots
 */
const de_Slots = (output: any, context: __SerdeContext): Record<string, Slot> => {
  return Object.entries(output).reduce((acc: Record<string, Slot>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_Slot(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1TextResponseEvent
 */
const de_TextResponseEvent = (output: any, context: __SerdeContext): TextResponseEvent => {
  return {
    eventId: __expectString(output.eventId),
    messages: output.messages != null ? de_Messages(output.messages, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TranscriptEvent
 */
const de_TranscriptEvent = (output: any, context: __SerdeContext): TranscriptEvent => {
  return {
    eventId: __expectString(output.eventId),
    transcript: __expectString(output.transcript),
  } as any;
};

/**
 * deserializeAws_restJson1Value
 */
const de_Value = (output: any, context: __SerdeContext): Value => {
  return {
    interpretedValue: __expectString(output.interpretedValue),
    originalValue: __expectString(output.originalValue),
    resolvedValues: output.resolvedValues != null ? de_StringList(output.resolvedValues, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Values
 */
const de_Values = (output: any, context: __SerdeContext): Slot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
