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

export const serializeAws_restJson1DeleteSessionCommand = async (
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

export const serializeAws_restJson1GetSessionCommand = async (
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

export const serializeAws_restJson1PutSessionCommand = async (
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
    ...(input.messages != null && { messages: serializeAws_restJson1Messages(input.messages, context) }),
    ...(input.requestAttributes != null && {
      requestAttributes: serializeAws_restJson1StringMap(input.requestAttributes, context),
    }),
    ...(input.sessionState != null && {
      sessionState: serializeAws_restJson1SessionState(input.sessionState, context),
    }),
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

export const serializeAws_restJson1RecognizeTextCommand = async (
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
    ...(input.requestAttributes != null && {
      requestAttributes: serializeAws_restJson1StringMap(input.requestAttributes, context),
    }),
    ...(input.sessionState != null && {
      sessionState: serializeAws_restJson1SessionState(input.sessionState, context),
    }),
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

export const serializeAws_restJson1RecognizeUtteranceCommand = async (
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

export const serializeAws_restJson1StartConversationCommand = async (
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
    body = serializeAws_restJson1StartConversationRequestEventStream(input.requestEventStream, context);
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

export const deserializeAws_restJson1DeleteSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSessionCommandError(output, context);
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

const deserializeAws_restJson1DeleteSessionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexruntimev2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexruntimev2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexruntimev2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexruntimev2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexruntimev2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.interpretations != null) {
    contents.interpretations = deserializeAws_restJson1Interpretations(data.interpretations, context);
  }
  if (data.messages != null) {
    contents.messages = deserializeAws_restJson1Messages(data.messages, context);
  }
  if (data.sessionId != null) {
    contents.sessionId = __expectString(data.sessionId);
  }
  if (data.sessionState != null) {
    contents.sessionState = deserializeAws_restJson1SessionState(data.sessionState, context);
  }
  return contents;
};

const deserializeAws_restJson1GetSessionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexruntimev2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexruntimev2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexruntimev2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexruntimev2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<PutSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutSessionCommandError(output, context);
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

const deserializeAws_restJson1PutSessionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadGatewayException":
    case "com.amazonaws.lexruntimev2#BadGatewayException":
      throw await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexruntimev2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "DependencyFailedException":
    case "com.amazonaws.lexruntimev2#DependencyFailedException":
      throw await deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexruntimev2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexruntimev2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexruntimev2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexruntimev2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RecognizeTextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecognizeTextCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RecognizeTextCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.interpretations != null) {
    contents.interpretations = deserializeAws_restJson1Interpretations(data.interpretations, context);
  }
  if (data.messages != null) {
    contents.messages = deserializeAws_restJson1Messages(data.messages, context);
  }
  if (data.requestAttributes != null) {
    contents.requestAttributes = deserializeAws_restJson1StringMap(data.requestAttributes, context);
  }
  if (data.sessionId != null) {
    contents.sessionId = __expectString(data.sessionId);
  }
  if (data.sessionState != null) {
    contents.sessionState = deserializeAws_restJson1SessionState(data.sessionState, context);
  }
  return contents;
};

const deserializeAws_restJson1RecognizeTextCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadGatewayException":
    case "com.amazonaws.lexruntimev2#BadGatewayException":
      throw await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexruntimev2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "DependencyFailedException":
    case "com.amazonaws.lexruntimev2#DependencyFailedException":
      throw await deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexruntimev2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexruntimev2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexruntimev2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexruntimev2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RecognizeUtteranceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<RecognizeUtteranceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RecognizeUtteranceCommandError(output, context);
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
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.audioStream = data;
  return contents;
};

const deserializeAws_restJson1RecognizeUtteranceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadGatewayException":
    case "com.amazonaws.lexruntimev2#BadGatewayException":
      throw await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexruntimev2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "DependencyFailedException":
    case "com.amazonaws.lexruntimev2#DependencyFailedException":
      throw await deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexruntimev2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexruntimev2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexruntimev2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexruntimev2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartConversationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<StartConversationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartConversationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = output.body;
  contents.responseEventStream = deserializeAws_restJson1StartConversationResponseEventStream(data, context);
  return contents;
};

const deserializeAws_restJson1StartConversationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexruntimev2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexruntimev2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexruntimev2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
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

const deserializeAws_restJson1BadGatewayExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadGatewayException> => {
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
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

const deserializeAws_restJson1DependencyFailedExceptionResponse = async (
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
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

const serializeAws_restJson1StartConversationRequestEventStream = (
  input: any,
  context: __SerdeContext & __EventStreamSerdeContext
): any => {
  const eventMarshallingVisitor = (event: any): __Message =>
    StartConversationRequestEventStream.visit(event, {
      ConfigurationEvent: (value) => serializeAws_restJson1ConfigurationEvent_event(value, context),
      AudioInputEvent: (value) => serializeAws_restJson1AudioInputEvent_event(value, context),
      DTMFInputEvent: (value) => serializeAws_restJson1DTMFInputEvent_event(value, context),
      TextInputEvent: (value) => serializeAws_restJson1TextInputEvent_event(value, context),
      PlaybackCompletionEvent: (value) => serializeAws_restJson1PlaybackCompletionEvent_event(value, context),
      DisconnectionEvent: (value) => serializeAws_restJson1DisconnectionEvent_event(value, context),
      _: (value) => value as any,
    });
  return context.eventStreamMarshaller.serialize(input, eventMarshallingVisitor);
};
const serializeAws_restJson1AudioInputEvent_event = (input: AudioInputEvent, context: __SerdeContext): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "AudioInputEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = serializeAws_restJson1AudioInputEvent(input, context);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
const serializeAws_restJson1ConfigurationEvent_event = (
  input: ConfigurationEvent,
  context: __SerdeContext
): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "ConfigurationEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = serializeAws_restJson1ConfigurationEvent(input, context);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
const serializeAws_restJson1DisconnectionEvent_event = (
  input: DisconnectionEvent,
  context: __SerdeContext
): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "DisconnectionEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = serializeAws_restJson1DisconnectionEvent(input, context);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
const serializeAws_restJson1DTMFInputEvent_event = (input: DTMFInputEvent, context: __SerdeContext): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "DTMFInputEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = serializeAws_restJson1DTMFInputEvent(input, context);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
const serializeAws_restJson1PlaybackCompletionEvent_event = (
  input: PlaybackCompletionEvent,
  context: __SerdeContext
): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "PlaybackCompletionEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = serializeAws_restJson1PlaybackCompletionEvent(input, context);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
const serializeAws_restJson1TextInputEvent_event = (input: TextInputEvent, context: __SerdeContext): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "TextInputEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = serializeAws_restJson1TextInputEvent(input, context);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
const deserializeAws_restJson1StartConversationResponseEventStream = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<StartConversationResponseEventStream> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["PlaybackInterruptionEvent"] != null) {
      return {
        PlaybackInterruptionEvent: await deserializeAws_restJson1PlaybackInterruptionEvent_event(
          event["PlaybackInterruptionEvent"],
          context
        ),
      };
    }
    if (event["TranscriptEvent"] != null) {
      return {
        TranscriptEvent: await deserializeAws_restJson1TranscriptEvent_event(event["TranscriptEvent"], context),
      };
    }
    if (event["IntentResultEvent"] != null) {
      return {
        IntentResultEvent: await deserializeAws_restJson1IntentResultEvent_event(event["IntentResultEvent"], context),
      };
    }
    if (event["TextResponseEvent"] != null) {
      return {
        TextResponseEvent: await deserializeAws_restJson1TextResponseEvent_event(event["TextResponseEvent"], context),
      };
    }
    if (event["AudioResponseEvent"] != null) {
      return {
        AudioResponseEvent: await deserializeAws_restJson1AudioResponseEvent_event(
          event["AudioResponseEvent"],
          context
        ),
      };
    }
    if (event["HeartbeatEvent"] != null) {
      return {
        HeartbeatEvent: await deserializeAws_restJson1HeartbeatEvent_event(event["HeartbeatEvent"], context),
      };
    }
    if (event["AccessDeniedException"] != null) {
      return {
        AccessDeniedException: await deserializeAws_restJson1AccessDeniedException_event(
          event["AccessDeniedException"],
          context
        ),
      };
    }
    if (event["ResourceNotFoundException"] != null) {
      return {
        ResourceNotFoundException: await deserializeAws_restJson1ResourceNotFoundException_event(
          event["ResourceNotFoundException"],
          context
        ),
      };
    }
    if (event["ValidationException"] != null) {
      return {
        ValidationException: await deserializeAws_restJson1ValidationException_event(
          event["ValidationException"],
          context
        ),
      };
    }
    if (event["ThrottlingException"] != null) {
      return {
        ThrottlingException: await deserializeAws_restJson1ThrottlingException_event(
          event["ThrottlingException"],
          context
        ),
      };
    }
    if (event["InternalServerException"] != null) {
      return {
        InternalServerException: await deserializeAws_restJson1InternalServerException_event(
          event["InternalServerException"],
          context
        ),
      };
    }
    if (event["ConflictException"] != null) {
      return {
        ConflictException: await deserializeAws_restJson1ConflictException_event(event["ConflictException"], context),
      };
    }
    if (event["DependencyFailedException"] != null) {
      return {
        DependencyFailedException: await deserializeAws_restJson1DependencyFailedException_event(
          event["DependencyFailedException"],
          context
        ),
      };
    }
    if (event["BadGatewayException"] != null) {
      return {
        BadGatewayException: await deserializeAws_restJson1BadGatewayException_event(
          event["BadGatewayException"],
          context
        ),
      };
    }
    return { $unknown: output };
  });
};
const deserializeAws_restJson1AccessDeniedException_event = async (
  output: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1AudioResponseEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<AudioResponseEvent> => {
  const contents: AudioResponseEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, deserializeAws_restJson1AudioResponseEvent(data, context));
  return contents;
};
const deserializeAws_restJson1BadGatewayException_event = async (
  output: any,
  context: __SerdeContext
): Promise<BadGatewayException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1ConflictException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1DependencyFailedException_event = async (
  output: any,
  context: __SerdeContext
): Promise<DependencyFailedException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1HeartbeatEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<HeartbeatEvent> => {
  const contents: HeartbeatEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, deserializeAws_restJson1HeartbeatEvent(data, context));
  return contents;
};
const deserializeAws_restJson1IntentResultEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<IntentResultEvent> => {
  const contents: IntentResultEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, deserializeAws_restJson1IntentResultEvent(data, context));
  return contents;
};
const deserializeAws_restJson1InternalServerException_event = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1PlaybackInterruptionEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<PlaybackInterruptionEvent> => {
  const contents: PlaybackInterruptionEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, deserializeAws_restJson1PlaybackInterruptionEvent(data, context));
  return contents;
};
const deserializeAws_restJson1ResourceNotFoundException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1TextResponseEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<TextResponseEvent> => {
  const contents: TextResponseEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, deserializeAws_restJson1TextResponseEvent(data, context));
  return contents;
};
const deserializeAws_restJson1ThrottlingException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1TranscriptEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<TranscriptEvent> => {
  const contents: TranscriptEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, deserializeAws_restJson1TranscriptEvent(data, context));
  return contents;
};
const deserializeAws_restJson1ValidationException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
};
const serializeAws_restJson1ActiveContext = (input: ActiveContext, context: __SerdeContext): any => {
  return {
    ...(input.contextAttributes != null && {
      contextAttributes: serializeAws_restJson1ActiveContextParametersMap(input.contextAttributes, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.timeToLive != null && {
      timeToLive: serializeAws_restJson1ActiveContextTimeToLive(input.timeToLive, context),
    }),
  };
};

const serializeAws_restJson1ActiveContextParametersMap = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1ActiveContextsList = (input: ActiveContext[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ActiveContext(entry, context);
    });
};

const serializeAws_restJson1ActiveContextTimeToLive = (
  input: ActiveContextTimeToLive,
  context: __SerdeContext
): any => {
  return {
    ...(input.timeToLiveInSeconds != null && { timeToLiveInSeconds: input.timeToLiveInSeconds }),
    ...(input.turnsToLive != null && { turnsToLive: input.turnsToLive }),
  };
};

const serializeAws_restJson1AudioInputEvent = (input: AudioInputEvent, context: __SerdeContext): any => {
  return {
    ...(input.audioChunk != null && { audioChunk: context.base64Encoder(input.audioChunk) }),
    ...(input.clientTimestampMillis != null && { clientTimestampMillis: input.clientTimestampMillis }),
    ...(input.contentType != null && { contentType: input.contentType }),
    ...(input.eventId != null && { eventId: input.eventId }),
  };
};

const serializeAws_restJson1Button = (input: Button, context: __SerdeContext): any => {
  return {
    ...(input.text != null && { text: input.text }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1ButtonsList = (input: Button[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Button(entry, context);
    });
};

const serializeAws_restJson1ConfigurationEvent = (input: ConfigurationEvent, context: __SerdeContext): any => {
  return {
    ...(input.clientTimestampMillis != null && { clientTimestampMillis: input.clientTimestampMillis }),
    ...(input.disablePlayback != null && { disablePlayback: input.disablePlayback }),
    ...(input.eventId != null && { eventId: input.eventId }),
    ...(input.requestAttributes != null && {
      requestAttributes: serializeAws_restJson1StringMap(input.requestAttributes, context),
    }),
    ...(input.responseContentType != null && { responseContentType: input.responseContentType }),
    ...(input.sessionState != null && {
      sessionState: serializeAws_restJson1SessionState(input.sessionState, context),
    }),
    ...(input.welcomeMessages != null && {
      welcomeMessages: serializeAws_restJson1Messages(input.welcomeMessages, context),
    }),
  };
};

const serializeAws_restJson1DialogAction = (input: DialogAction, context: __SerdeContext): any => {
  return {
    ...(input.slotElicitationStyle != null && { slotElicitationStyle: input.slotElicitationStyle }),
    ...(input.slotToElicit != null && { slotToElicit: input.slotToElicit }),
    ...(input.subSlotToElicit != null && {
      subSlotToElicit: serializeAws_restJson1ElicitSubSlot(input.subSlotToElicit, context),
    }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_restJson1DisconnectionEvent = (input: DisconnectionEvent, context: __SerdeContext): any => {
  return {
    ...(input.clientTimestampMillis != null && { clientTimestampMillis: input.clientTimestampMillis }),
    ...(input.eventId != null && { eventId: input.eventId }),
  };
};

const serializeAws_restJson1DTMFInputEvent = (input: DTMFInputEvent, context: __SerdeContext): any => {
  return {
    ...(input.clientTimestampMillis != null && { clientTimestampMillis: input.clientTimestampMillis }),
    ...(input.eventId != null && { eventId: input.eventId }),
    ...(input.inputCharacter != null && { inputCharacter: input.inputCharacter }),
  };
};

const serializeAws_restJson1ElicitSubSlot = (input: ElicitSubSlot, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.subSlotToElicit != null && {
      subSlotToElicit: serializeAws_restJson1ElicitSubSlot(input.subSlotToElicit, context),
    }),
  };
};

const serializeAws_restJson1ImageResponseCard = (input: ImageResponseCard, context: __SerdeContext): any => {
  return {
    ...(input.buttons != null && { buttons: serializeAws_restJson1ButtonsList(input.buttons, context) }),
    ...(input.imageUrl != null && { imageUrl: input.imageUrl }),
    ...(input.subtitle != null && { subtitle: input.subtitle }),
    ...(input.title != null && { title: input.title }),
  };
};

const serializeAws_restJson1Intent = (input: Intent, context: __SerdeContext): any => {
  return {
    ...(input.confirmationState != null && { confirmationState: input.confirmationState }),
    ...(input.name != null && { name: input.name }),
    ...(input.slots != null && { slots: serializeAws_restJson1Slots(input.slots, context) }),
    ...(input.state != null && { state: input.state }),
  };
};

const serializeAws_restJson1Message = (input: Message, context: __SerdeContext): any => {
  return {
    ...(input.content != null && { content: input.content }),
    ...(input.contentType != null && { contentType: input.contentType }),
    ...(input.imageResponseCard != null && {
      imageResponseCard: serializeAws_restJson1ImageResponseCard(input.imageResponseCard, context),
    }),
  };
};

const serializeAws_restJson1Messages = (input: Message[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Message(entry, context);
    });
};

const serializeAws_restJson1PlaybackCompletionEvent = (
  input: PlaybackCompletionEvent,
  context: __SerdeContext
): any => {
  return {
    ...(input.clientTimestampMillis != null && { clientTimestampMillis: input.clientTimestampMillis }),
    ...(input.eventId != null && { eventId: input.eventId }),
  };
};

const serializeAws_restJson1RuntimeHintDetails = (input: RuntimeHintDetails, context: __SerdeContext): any => {
  return {
    ...(input.runtimeHintValues != null && {
      runtimeHintValues: serializeAws_restJson1RuntimeHintValuesList(input.runtimeHintValues, context),
    }),
    ...(input.subSlotHints != null && {
      subSlotHints: serializeAws_restJson1SlotHintsSlotMap(input.subSlotHints, context),
    }),
  };
};

const serializeAws_restJson1RuntimeHints = (input: RuntimeHints, context: __SerdeContext): any => {
  return {
    ...(input.slotHints != null && { slotHints: serializeAws_restJson1SlotHintsIntentMap(input.slotHints, context) }),
  };
};

const serializeAws_restJson1RuntimeHintValue = (input: RuntimeHintValue, context: __SerdeContext): any => {
  return {
    ...(input.phrase != null && { phrase: input.phrase }),
  };
};

const serializeAws_restJson1RuntimeHintValuesList = (input: RuntimeHintValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RuntimeHintValue(entry, context);
    });
};

const serializeAws_restJson1SessionState = (input: SessionState, context: __SerdeContext): any => {
  return {
    ...(input.activeContexts != null && {
      activeContexts: serializeAws_restJson1ActiveContextsList(input.activeContexts, context),
    }),
    ...(input.dialogAction != null && {
      dialogAction: serializeAws_restJson1DialogAction(input.dialogAction, context),
    }),
    ...(input.intent != null && { intent: serializeAws_restJson1Intent(input.intent, context) }),
    ...(input.originatingRequestId != null && { originatingRequestId: input.originatingRequestId }),
    ...(input.runtimeHints != null && {
      runtimeHints: serializeAws_restJson1RuntimeHints(input.runtimeHints, context),
    }),
    ...(input.sessionAttributes != null && {
      sessionAttributes: serializeAws_restJson1StringMap(input.sessionAttributes, context),
    }),
  };
};

const serializeAws_restJson1Slot = (input: Slot, context: __SerdeContext): any => {
  return {
    ...(input.shape != null && { shape: input.shape }),
    ...(input.subSlots != null && { subSlots: serializeAws_restJson1Slots(input.subSlots, context) }),
    ...(input.value != null && { value: serializeAws_restJson1Value(input.value, context) }),
    ...(input.values != null && { values: serializeAws_restJson1Values(input.values, context) }),
  };
};

const serializeAws_restJson1SlotHintsIntentMap = (
  input: Record<string, Record<string, RuntimeHintDetails>>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1SlotHintsSlotMap(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1SlotHintsSlotMap = (
  input: Record<string, RuntimeHintDetails>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1RuntimeHintDetails(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1Slots = (input: Record<string, Slot>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1Slot(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1StringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1TextInputEvent = (input: TextInputEvent, context: __SerdeContext): any => {
  return {
    ...(input.clientTimestampMillis != null && { clientTimestampMillis: input.clientTimestampMillis }),
    ...(input.eventId != null && { eventId: input.eventId }),
    ...(input.text != null && { text: input.text }),
  };
};

const serializeAws_restJson1Value = (input: Value, context: __SerdeContext): any => {
  return {
    ...(input.interpretedValue != null && { interpretedValue: input.interpretedValue }),
    ...(input.originalValue != null && { originalValue: input.originalValue }),
    ...(input.resolvedValues != null && {
      resolvedValues: serializeAws_restJson1StringList(input.resolvedValues, context),
    }),
  };
};

const serializeAws_restJson1Values = (input: Slot[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Slot(entry, context);
    });
};

const deserializeAws_restJson1ActiveContext = (output: any, context: __SerdeContext): ActiveContext => {
  return {
    contextAttributes:
      output.contextAttributes != null
        ? deserializeAws_restJson1ActiveContextParametersMap(output.contextAttributes, context)
        : undefined,
    name: __expectString(output.name),
    timeToLive:
      output.timeToLive != null
        ? deserializeAws_restJson1ActiveContextTimeToLive(output.timeToLive, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ActiveContextParametersMap = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1ActiveContextsList = (output: any, context: __SerdeContext): ActiveContext[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ActiveContext(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ActiveContextTimeToLive = (
  output: any,
  context: __SerdeContext
): ActiveContextTimeToLive => {
  return {
    timeToLiveInSeconds: __expectInt32(output.timeToLiveInSeconds),
    turnsToLive: __expectInt32(output.turnsToLive),
  } as any;
};

const deserializeAws_restJson1AudioResponseEvent = (output: any, context: __SerdeContext): AudioResponseEvent => {
  return {
    audioChunk: output.audioChunk != null ? context.base64Decoder(output.audioChunk) : undefined,
    contentType: __expectString(output.contentType),
    eventId: __expectString(output.eventId),
  } as any;
};

const deserializeAws_restJson1Button = (output: any, context: __SerdeContext): Button => {
  return {
    text: __expectString(output.text),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1ButtonsList = (output: any, context: __SerdeContext): Button[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Button(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConfidenceScore = (output: any, context: __SerdeContext): ConfidenceScore => {
  return {
    score: __limitedParseDouble(output.score),
  } as any;
};

const deserializeAws_restJson1DialogAction = (output: any, context: __SerdeContext): DialogAction => {
  return {
    slotElicitationStyle: __expectString(output.slotElicitationStyle),
    slotToElicit: __expectString(output.slotToElicit),
    subSlotToElicit:
      output.subSlotToElicit != null
        ? deserializeAws_restJson1ElicitSubSlot(output.subSlotToElicit, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1ElicitSubSlot = (output: any, context: __SerdeContext): ElicitSubSlot => {
  return {
    name: __expectString(output.name),
    subSlotToElicit:
      output.subSlotToElicit != null
        ? deserializeAws_restJson1ElicitSubSlot(output.subSlotToElicit, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1HeartbeatEvent = (output: any, context: __SerdeContext): HeartbeatEvent => {
  return {
    eventId: __expectString(output.eventId),
  } as any;
};

const deserializeAws_restJson1ImageResponseCard = (output: any, context: __SerdeContext): ImageResponseCard => {
  return {
    buttons: output.buttons != null ? deserializeAws_restJson1ButtonsList(output.buttons, context) : undefined,
    imageUrl: __expectString(output.imageUrl),
    subtitle: __expectString(output.subtitle),
    title: __expectString(output.title),
  } as any;
};

const deserializeAws_restJson1Intent = (output: any, context: __SerdeContext): Intent => {
  return {
    confirmationState: __expectString(output.confirmationState),
    name: __expectString(output.name),
    slots: output.slots != null ? deserializeAws_restJson1Slots(output.slots, context) : undefined,
    state: __expectString(output.state),
  } as any;
};

const deserializeAws_restJson1IntentResultEvent = (output: any, context: __SerdeContext): IntentResultEvent => {
  return {
    eventId: __expectString(output.eventId),
    inputMode: __expectString(output.inputMode),
    interpretations:
      output.interpretations != null
        ? deserializeAws_restJson1Interpretations(output.interpretations, context)
        : undefined,
    requestAttributes:
      output.requestAttributes != null
        ? deserializeAws_restJson1StringMap(output.requestAttributes, context)
        : undefined,
    sessionId: __expectString(output.sessionId),
    sessionState:
      output.sessionState != null ? deserializeAws_restJson1SessionState(output.sessionState, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Interpretation = (output: any, context: __SerdeContext): Interpretation => {
  return {
    intent: output.intent != null ? deserializeAws_restJson1Intent(output.intent, context) : undefined,
    nluConfidence:
      output.nluConfidence != null ? deserializeAws_restJson1ConfidenceScore(output.nluConfidence, context) : undefined,
    sentimentResponse:
      output.sentimentResponse != null
        ? deserializeAws_restJson1SentimentResponse(output.sentimentResponse, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Interpretations = (output: any, context: __SerdeContext): Interpretation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Interpretation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Message = (output: any, context: __SerdeContext): Message => {
  return {
    content: __expectString(output.content),
    contentType: __expectString(output.contentType),
    imageResponseCard:
      output.imageResponseCard != null
        ? deserializeAws_restJson1ImageResponseCard(output.imageResponseCard, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Messages = (output: any, context: __SerdeContext): Message[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Message(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PlaybackInterruptionEvent = (
  output: any,
  context: __SerdeContext
): PlaybackInterruptionEvent => {
  return {
    causedByEventId: __expectString(output.causedByEventId),
    eventId: __expectString(output.eventId),
    eventReason: __expectString(output.eventReason),
  } as any;
};

const deserializeAws_restJson1RuntimeHintDetails = (output: any, context: __SerdeContext): RuntimeHintDetails => {
  return {
    runtimeHintValues:
      output.runtimeHintValues != null
        ? deserializeAws_restJson1RuntimeHintValuesList(output.runtimeHintValues, context)
        : undefined,
    subSlotHints:
      output.subSlotHints != null ? deserializeAws_restJson1SlotHintsSlotMap(output.subSlotHints, context) : undefined,
  } as any;
};

const deserializeAws_restJson1RuntimeHints = (output: any, context: __SerdeContext): RuntimeHints => {
  return {
    slotHints:
      output.slotHints != null ? deserializeAws_restJson1SlotHintsIntentMap(output.slotHints, context) : undefined,
  } as any;
};

const deserializeAws_restJson1RuntimeHintValue = (output: any, context: __SerdeContext): RuntimeHintValue => {
  return {
    phrase: __expectString(output.phrase),
  } as any;
};

const deserializeAws_restJson1RuntimeHintValuesList = (output: any, context: __SerdeContext): RuntimeHintValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RuntimeHintValue(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SentimentResponse = (output: any, context: __SerdeContext): SentimentResponse => {
  return {
    sentiment: __expectString(output.sentiment),
    sentimentScore:
      output.sentimentScore != null
        ? deserializeAws_restJson1SentimentScore(output.sentimentScore, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SentimentScore = (output: any, context: __SerdeContext): SentimentScore => {
  return {
    mixed: __limitedParseDouble(output.mixed),
    negative: __limitedParseDouble(output.negative),
    neutral: __limitedParseDouble(output.neutral),
    positive: __limitedParseDouble(output.positive),
  } as any;
};

const deserializeAws_restJson1SessionState = (output: any, context: __SerdeContext): SessionState => {
  return {
    activeContexts:
      output.activeContexts != null
        ? deserializeAws_restJson1ActiveContextsList(output.activeContexts, context)
        : undefined,
    dialogAction:
      output.dialogAction != null ? deserializeAws_restJson1DialogAction(output.dialogAction, context) : undefined,
    intent: output.intent != null ? deserializeAws_restJson1Intent(output.intent, context) : undefined,
    originatingRequestId: __expectString(output.originatingRequestId),
    runtimeHints:
      output.runtimeHints != null ? deserializeAws_restJson1RuntimeHints(output.runtimeHints, context) : undefined,
    sessionAttributes:
      output.sessionAttributes != null
        ? deserializeAws_restJson1StringMap(output.sessionAttributes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Slot = (output: any, context: __SerdeContext): Slot => {
  return {
    shape: __expectString(output.shape),
    subSlots: output.subSlots != null ? deserializeAws_restJson1Slots(output.subSlots, context) : undefined,
    value: output.value != null ? deserializeAws_restJson1Value(output.value, context) : undefined,
    values: output.values != null ? deserializeAws_restJson1Values(output.values, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SlotHintsIntentMap = (
  output: any,
  context: __SerdeContext
): Record<string, Record<string, RuntimeHintDetails>> => {
  return Object.entries(output).reduce(
    (acc: Record<string, Record<string, RuntimeHintDetails>>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_restJson1SlotHintsSlotMap(value, context);
      return acc;
    },
    {}
  );
};

const deserializeAws_restJson1SlotHintsSlotMap = (
  output: any,
  context: __SerdeContext
): Record<string, RuntimeHintDetails> => {
  return Object.entries(output).reduce((acc: Record<string, RuntimeHintDetails>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1RuntimeHintDetails(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1Slots = (output: any, context: __SerdeContext): Record<string, Slot> => {
  return Object.entries(output).reduce((acc: Record<string, Slot>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1Slot(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1StringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1StringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TextResponseEvent = (output: any, context: __SerdeContext): TextResponseEvent => {
  return {
    eventId: __expectString(output.eventId),
    messages: output.messages != null ? deserializeAws_restJson1Messages(output.messages, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TranscriptEvent = (output: any, context: __SerdeContext): TranscriptEvent => {
  return {
    eventId: __expectString(output.eventId),
    transcript: __expectString(output.transcript),
  } as any;
};

const deserializeAws_restJson1Value = (output: any, context: __SerdeContext): Value => {
  return {
    interpretedValue: __expectString(output.interpretedValue),
    originalValue: __expectString(output.originalValue),
    resolvedValues:
      output.resolvedValues != null ? deserializeAws_restJson1StringList(output.resolvedValues, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Values = (output: any, context: __SerdeContext): Slot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Slot(entry, context);
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
