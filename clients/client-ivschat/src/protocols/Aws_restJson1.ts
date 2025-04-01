// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreateChatTokenCommandInput, CreateChatTokenCommandOutput } from "../commands/CreateChatTokenCommand";
import {
  CreateLoggingConfigurationCommandInput,
  CreateLoggingConfigurationCommandOutput,
} from "../commands/CreateLoggingConfigurationCommand";
import { CreateRoomCommandInput, CreateRoomCommandOutput } from "../commands/CreateRoomCommand";
import {
  DeleteLoggingConfigurationCommandInput,
  DeleteLoggingConfigurationCommandOutput,
} from "../commands/DeleteLoggingConfigurationCommand";
import { DeleteMessageCommandInput, DeleteMessageCommandOutput } from "../commands/DeleteMessageCommand";
import { DeleteRoomCommandInput, DeleteRoomCommandOutput } from "../commands/DeleteRoomCommand";
import { DisconnectUserCommandInput, DisconnectUserCommandOutput } from "../commands/DisconnectUserCommand";
import {
  GetLoggingConfigurationCommandInput,
  GetLoggingConfigurationCommandOutput,
} from "../commands/GetLoggingConfigurationCommand";
import { GetRoomCommandInput, GetRoomCommandOutput } from "../commands/GetRoomCommand";
import {
  ListLoggingConfigurationsCommandInput,
  ListLoggingConfigurationsCommandOutput,
} from "../commands/ListLoggingConfigurationsCommand";
import { ListRoomsCommandInput, ListRoomsCommandOutput } from "../commands/ListRoomsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { SendEventCommandInput, SendEventCommandOutput } from "../commands/SendEventCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateLoggingConfigurationCommandInput,
  UpdateLoggingConfigurationCommandOutput,
} from "../commands/UpdateLoggingConfigurationCommand";
import { UpdateRoomCommandInput, UpdateRoomCommandOutput } from "../commands/UpdateRoomCommand";
import { IvschatServiceException as __BaseException } from "../models/IvschatServiceException";
import {
  AccessDeniedException,
  ChatTokenCapability,
  CloudWatchLogsDestinationConfiguration,
  ConflictException,
  DestinationConfiguration,
  FirehoseDestinationConfiguration,
  InternalServerException,
  LoggingConfigurationSummary,
  MessageReviewHandler,
  PendingVerification,
  ResourceNotFoundException,
  RoomSummary,
  S3DestinationConfiguration,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateChatTokenCommand
 */
export const se_CreateChatTokenCommand = async (
  input: CreateChatTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateChatToken");
  let body: any;
  body = JSON.stringify(
    take(input, {
      attributes: (_) => _json(_),
      capabilities: (_) => _json(_),
      roomIdentifier: [],
      sessionDurationInMinutes: [],
      userId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateLoggingConfigurationCommand
 */
export const se_CreateLoggingConfigurationCommand = async (
  input: CreateLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateLoggingConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      destinationConfiguration: (_) => _json(_),
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRoomCommand
 */
export const se_CreateRoomCommand = async (
  input: CreateRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateRoom");
  let body: any;
  body = JSON.stringify(
    take(input, {
      loggingConfigurationIdentifiers: (_) => _json(_),
      maximumMessageLength: [],
      maximumMessageRatePerSecond: [],
      messageReviewHandler: (_) => _json(_),
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteLoggingConfigurationCommand
 */
export const se_DeleteLoggingConfigurationCommand = async (
  input: DeleteLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteLoggingConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      identifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMessageCommand
 */
export const se_DeleteMessageCommand = async (
  input: DeleteMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteMessage");
  let body: any;
  body = JSON.stringify(
    take(input, {
      id: [],
      reason: [],
      roomIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRoomCommand
 */
export const se_DeleteRoomCommand = async (
  input: DeleteRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteRoom");
  let body: any;
  body = JSON.stringify(
    take(input, {
      identifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisconnectUserCommand
 */
export const se_DisconnectUserCommand = async (
  input: DisconnectUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DisconnectUser");
  let body: any;
  body = JSON.stringify(
    take(input, {
      reason: [],
      roomIdentifier: [],
      userId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLoggingConfigurationCommand
 */
export const se_GetLoggingConfigurationCommand = async (
  input: GetLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetLoggingConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      identifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRoomCommand
 */
export const se_GetRoomCommand = async (
  input: GetRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetRoom");
  let body: any;
  body = JSON.stringify(
    take(input, {
      identifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLoggingConfigurationsCommand
 */
export const se_ListLoggingConfigurationsCommand = async (
  input: ListLoggingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListLoggingConfigurations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRoomsCommand
 */
export const se_ListRoomsCommand = async (
  input: ListRoomsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListRooms");
  let body: any;
  body = JSON.stringify(
    take(input, {
      loggingConfigurationIdentifier: [],
      maxResults: [],
      messageReviewHandlerUri: [],
      name: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SendEventCommand
 */
export const se_SendEventCommand = async (
  input: SendEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/SendEvent");
  let body: any;
  body = JSON.stringify(
    take(input, {
      attributes: (_) => _json(_),
      eventName: [],
      roomIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateLoggingConfigurationCommand
 */
export const se_UpdateLoggingConfigurationCommand = async (
  input: UpdateLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateLoggingConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      destinationConfiguration: (_) => _json(_),
      identifier: [],
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRoomCommand
 */
export const se_UpdateRoomCommand = async (
  input: UpdateRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateRoom");
  let body: any;
  body = JSON.stringify(
    take(input, {
      identifier: [],
      loggingConfigurationIdentifiers: (_) => _json(_),
      maximumMessageLength: [],
      maximumMessageRatePerSecond: [],
      messageReviewHandler: (_) => _json(_),
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateChatTokenCommand
 */
export const de_CreateChatTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChatTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    sessionExpirationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    token: __expectString,
    tokenExpirationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateLoggingConfigurationCommand
 */
export const de_CreateLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoggingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    destinationConfiguration: (_) => _json(__expectUnion(_)),
    id: __expectString,
    name: __expectString,
    state: __expectString,
    tags: _json,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRoomCommand
 */
export const de_CreateRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoomCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    loggingConfigurationIdentifiers: _json,
    maximumMessageLength: __expectInt32,
    maximumMessageRatePerSecond: __expectInt32,
    messageReviewHandler: _json,
    name: __expectString,
    tags: _json,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLoggingConfigurationCommand
 */
export const de_DeleteLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoggingConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMessageCommand
 */
export const de_DeleteMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRoomCommand
 */
export const de_DeleteRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoomCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisconnectUserCommand
 */
export const de_DisconnectUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectUserCommandOutput> => {
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
 * deserializeAws_restJson1GetLoggingConfigurationCommand
 */
export const de_GetLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoggingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    destinationConfiguration: (_) => _json(__expectUnion(_)),
    id: __expectString,
    name: __expectString,
    state: __expectString,
    tags: _json,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRoomCommand
 */
export const de_GetRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoomCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    loggingConfigurationIdentifiers: _json,
    maximumMessageLength: __expectInt32,
    maximumMessageRatePerSecond: __expectInt32,
    messageReviewHandler: _json,
    name: __expectString,
    tags: _json,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLoggingConfigurationsCommand
 */
export const de_ListLoggingConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLoggingConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    loggingConfigurations: (_) => de_LoggingConfigurationList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRoomsCommand
 */
export const de_ListRoomsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoomsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    rooms: (_) => de_RoomList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SendEventCommand
 */
export const de_SendEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEventCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
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
 * deserializeAws_restJson1UpdateLoggingConfigurationCommand
 */
export const de_UpdateLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLoggingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    destinationConfiguration: (_) => _json(__expectUnion(_)),
    id: __expectString,
    name: __expectString,
    state: __expectString,
    tags: _json,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRoomCommand
 */
export const de_UpdateRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoomCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    loggingConfigurationIdentifiers: _json,
    maximumMessageLength: __expectInt32,
    maximumMessageRatePerSecond: __expectInt32,
    messageReviewHandler: _json,
    name: __expectString,
    tags: _json,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
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
    case "AccessDeniedException":
    case "com.amazonaws.ivschat#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "PendingVerification":
    case "com.amazonaws.ivschat#PendingVerification":
      throw await de_PendingVerificationRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ivschat#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ivschat#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ivschat#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ivschat#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ivschat#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ivschat#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
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
 * deserializeAws_restJson1PendingVerificationRes
 */
const de_PendingVerificationRes = async (parsedOutput: any, context: __SerdeContext): Promise<PendingVerification> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new PendingVerification({
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
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    limit: __expectInt32,
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
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
    limit: __expectInt32,
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
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
    fieldList: _json,
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_ChatTokenAttributes omitted.

// se_ChatTokenCapabilities omitted.

// se_CloudWatchLogsDestinationConfiguration omitted.

// se_DestinationConfiguration omitted.

// se_EventAttributes omitted.

// se_FirehoseDestinationConfiguration omitted.

// se_LoggingConfigurationIdentifierList omitted.

// se_MessageReviewHandler omitted.

// se_S3DestinationConfiguration omitted.

// se_Tags omitted.

// de_CloudWatchLogsDestinationConfiguration omitted.

// de_DestinationConfiguration omitted.

// de_FirehoseDestinationConfiguration omitted.

// de_LoggingConfigurationIdentifierList omitted.

/**
 * deserializeAws_restJson1LoggingConfigurationList
 */
const de_LoggingConfigurationList = (output: any, context: __SerdeContext): LoggingConfigurationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LoggingConfigurationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LoggingConfigurationSummary
 */
const de_LoggingConfigurationSummary = (output: any, context: __SerdeContext): LoggingConfigurationSummary => {
  return take(output, {
    arn: __expectString,
    createTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    destinationConfiguration: (_: any) => _json(__expectUnion(_)),
    id: __expectString,
    name: __expectString,
    state: __expectString,
    tags: _json,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_MessageReviewHandler omitted.

/**
 * deserializeAws_restJson1RoomList
 */
const de_RoomList = (output: any, context: __SerdeContext): RoomSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RoomSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RoomSummary
 */
const de_RoomSummary = (output: any, context: __SerdeContext): RoomSummary => {
  return take(output, {
    arn: __expectString,
    createTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    loggingConfigurationIdentifiers: _json,
    messageReviewHandler: _json,
    name: __expectString,
    tags: _json,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_S3DestinationConfiguration omitted.

// de_Tags omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

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

const _tK = "tagKeys";
