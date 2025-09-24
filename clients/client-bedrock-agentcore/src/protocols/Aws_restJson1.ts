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
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  isSerializableHeaderValue,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "@smithy/uuid";

import { CreateEventCommandInput, CreateEventCommandOutput } from "../commands/CreateEventCommand";
import { DeleteEventCommandInput, DeleteEventCommandOutput } from "../commands/DeleteEventCommand";
import { DeleteMemoryRecordCommandInput, DeleteMemoryRecordCommandOutput } from "../commands/DeleteMemoryRecordCommand";
import { GetBrowserSessionCommandInput, GetBrowserSessionCommandOutput } from "../commands/GetBrowserSessionCommand";
import {
  GetCodeInterpreterSessionCommandInput,
  GetCodeInterpreterSessionCommandOutput,
} from "../commands/GetCodeInterpreterSessionCommand";
import { GetEventCommandInput, GetEventCommandOutput } from "../commands/GetEventCommand";
import { GetMemoryRecordCommandInput, GetMemoryRecordCommandOutput } from "../commands/GetMemoryRecordCommand";
import { GetResourceApiKeyCommandInput, GetResourceApiKeyCommandOutput } from "../commands/GetResourceApiKeyCommand";
import {
  GetResourceOauth2TokenCommandInput,
  GetResourceOauth2TokenCommandOutput,
} from "../commands/GetResourceOauth2TokenCommand";
import {
  GetWorkloadAccessTokenCommandInput,
  GetWorkloadAccessTokenCommandOutput,
} from "../commands/GetWorkloadAccessTokenCommand";
import {
  GetWorkloadAccessTokenForJWTCommandInput,
  GetWorkloadAccessTokenForJWTCommandOutput,
} from "../commands/GetWorkloadAccessTokenForJWTCommand";
import {
  GetWorkloadAccessTokenForUserIdCommandInput,
  GetWorkloadAccessTokenForUserIdCommandOutput,
} from "../commands/GetWorkloadAccessTokenForUserIdCommand";
import { InvokeAgentRuntimeCommandInput, InvokeAgentRuntimeCommandOutput } from "../commands/InvokeAgentRuntimeCommand";
import {
  InvokeCodeInterpreterCommandInput,
  InvokeCodeInterpreterCommandOutput,
} from "../commands/InvokeCodeInterpreterCommand";
import { ListActorsCommandInput, ListActorsCommandOutput } from "../commands/ListActorsCommand";
import {
  ListBrowserSessionsCommandInput,
  ListBrowserSessionsCommandOutput,
} from "../commands/ListBrowserSessionsCommand";
import {
  ListCodeInterpreterSessionsCommandInput,
  ListCodeInterpreterSessionsCommandOutput,
} from "../commands/ListCodeInterpreterSessionsCommand";
import { ListEventsCommandInput, ListEventsCommandOutput } from "../commands/ListEventsCommand";
import { ListMemoryRecordsCommandInput, ListMemoryRecordsCommandOutput } from "../commands/ListMemoryRecordsCommand";
import { ListSessionsCommandInput, ListSessionsCommandOutput } from "../commands/ListSessionsCommand";
import {
  RetrieveMemoryRecordsCommandInput,
  RetrieveMemoryRecordsCommandOutput,
} from "../commands/RetrieveMemoryRecordsCommand";
import {
  StartBrowserSessionCommandInput,
  StartBrowserSessionCommandOutput,
} from "../commands/StartBrowserSessionCommand";
import {
  StartCodeInterpreterSessionCommandInput,
  StartCodeInterpreterSessionCommandOutput,
} from "../commands/StartCodeInterpreterSessionCommand";
import { StopBrowserSessionCommandInput, StopBrowserSessionCommandOutput } from "../commands/StopBrowserSessionCommand";
import {
  StopCodeInterpreterSessionCommandInput,
  StopCodeInterpreterSessionCommandOutput,
} from "../commands/StopCodeInterpreterSessionCommand";
import {
  UpdateBrowserStreamCommandInput,
  UpdateBrowserStreamCommandOutput,
} from "../commands/UpdateBrowserStreamCommand";
import { BedrockAgentCoreServiceException as __BaseException } from "../models/BedrockAgentCoreServiceException";
import {
  AccessDeniedException,
  AutomationStreamUpdate,
  Branch,
  BranchFilter,
  BrowserSessionSummary,
  CodeInterpreterResult,
  CodeInterpreterSessionSummary,
  CodeInterpreterStreamOutput,
  ConflictException,
  Content,
  ContentBlock,
  Conversational,
  Event,
  FilterInput,
  InputContentBlock,
  InternalServerException,
  InvalidInputException,
  MemoryRecord,
  MemoryRecordSummary,
  PayloadType,
  ResourceContent,
  ResourceNotFoundException,
  RuntimeClientError,
  SearchCriteria,
  ServiceException,
  ServiceQuotaExceededException,
  SessionSummary,
  StreamUpdate,
  ThrottledException,
  ThrottlingException,
  ToolArguments,
  ToolResultStructuredContent,
  UnauthorizedException,
  ValidationException,
  ViewPort,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateEventCommand
 */
export const se_CreateEventCommand = async (
  input: CreateEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memories/{memoryId}/events");
  b.p("memoryId", () => input.memoryId!, "{memoryId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      actorId: [],
      branch: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      eventTimestamp: (_) => _.getTime() / 1_000,
      payload: (_) => se_PayloadTypeList(_, context),
      sessionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEventCommand
 */
export const se_DeleteEventCommand = async (
  input: DeleteEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memories/{memoryId}/actor/{actorId}/sessions/{sessionId}/events/{eventId}");
  b.p("memoryId", () => input.memoryId!, "{memoryId}", false);
  b.p("sessionId", () => input.sessionId!, "{sessionId}", false);
  b.p("eventId", () => input.eventId!, "{eventId}", false);
  b.p("actorId", () => input.actorId!, "{actorId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMemoryRecordCommand
 */
export const se_DeleteMemoryRecordCommand = async (
  input: DeleteMemoryRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memories/{memoryId}/memoryRecords/{memoryRecordId}");
  b.p("memoryId", () => input.memoryId!, "{memoryId}", false);
  b.p("memoryRecordId", () => input.memoryRecordId!, "{memoryRecordId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetBrowserSessionCommand
 */
export const se_GetBrowserSessionCommand = async (
  input: GetBrowserSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/browsers/{browserIdentifier}/sessions/get");
  b.p("browserIdentifier", () => input.browserIdentifier!, "{browserIdentifier}", false);
  const query: any = map({
    [_sI]: [, __expectNonNull(input[_sI]!, `sessionId`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCodeInterpreterSessionCommand
 */
export const se_GetCodeInterpreterSessionCommand = async (
  input: GetCodeInterpreterSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/code-interpreters/{codeInterpreterIdentifier}/sessions/get");
  b.p("codeInterpreterIdentifier", () => input.codeInterpreterIdentifier!, "{codeInterpreterIdentifier}", false);
  const query: any = map({
    [_sI]: [, __expectNonNull(input[_sI]!, `sessionId`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEventCommand
 */
export const se_GetEventCommand = async (
  input: GetEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memories/{memoryId}/actor/{actorId}/sessions/{sessionId}/events/{eventId}");
  b.p("memoryId", () => input.memoryId!, "{memoryId}", false);
  b.p("sessionId", () => input.sessionId!, "{sessionId}", false);
  b.p("actorId", () => input.actorId!, "{actorId}", false);
  b.p("eventId", () => input.eventId!, "{eventId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMemoryRecordCommand
 */
export const se_GetMemoryRecordCommand = async (
  input: GetMemoryRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memories/{memoryId}/memoryRecord/{memoryRecordId}");
  b.p("memoryId", () => input.memoryId!, "{memoryId}", false);
  b.p("memoryRecordId", () => input.memoryRecordId!, "{memoryRecordId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetResourceApiKeyCommand
 */
export const se_GetResourceApiKeyCommand = async (
  input: GetResourceApiKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identities/api-key");
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceCredentialProviderName: [],
      workloadIdentityToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetResourceOauth2TokenCommand
 */
export const se_GetResourceOauth2TokenCommand = async (
  input: GetResourceOauth2TokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identities/oauth2/token");
  let body: any;
  body = JSON.stringify(
    take(input, {
      customParameters: (_) => _json(_),
      forceAuthentication: [],
      oauth2Flow: [],
      resourceCredentialProviderName: [],
      resourceOauth2ReturnUrl: [],
      scopes: (_) => _json(_),
      workloadIdentityToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWorkloadAccessTokenCommand
 */
export const se_GetWorkloadAccessTokenCommand = async (
  input: GetWorkloadAccessTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identities/GetWorkloadAccessToken");
  let body: any;
  body = JSON.stringify(
    take(input, {
      workloadName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWorkloadAccessTokenForJWTCommand
 */
export const se_GetWorkloadAccessTokenForJWTCommand = async (
  input: GetWorkloadAccessTokenForJWTCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identities/GetWorkloadAccessTokenForJWT");
  let body: any;
  body = JSON.stringify(
    take(input, {
      userToken: [],
      workloadName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWorkloadAccessTokenForUserIdCommand
 */
export const se_GetWorkloadAccessTokenForUserIdCommand = async (
  input: GetWorkloadAccessTokenForUserIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identities/GetWorkloadAccessTokenForUserId");
  let body: any;
  body = JSON.stringify(
    take(input, {
      userId: [],
      workloadName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1InvokeAgentRuntimeCommand
 */
export const se_InvokeAgentRuntimeCommand = async (
  input: InvokeAgentRuntimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ct]: input[_cT] || "application/octet-stream",
    [_a]: input[_a]!,
    [_msi]: input[_mSI]!,
    [_xabarsi]: input[_rSI] ?? generateIdempotencyToken(),
    [_mpv]: input[_mPV]!,
    [_xabarui]: input[_rUI]!,
    [_xati]: input[_tI]!,
    [_t]: input[_tP]!,
    [_tr]: input[_tS]!,
    [_b]: input[_b]!,
  });
  b.bp("/runtimes/{agentRuntimeArn}/invocations");
  b.p("agentRuntimeArn", () => input.agentRuntimeArn!, "{agentRuntimeArn}", false);
  const query: any = map({
    [_q]: [, input[_q]!],
  });
  let body: any;
  if (input.payload !== undefined) {
    body = input.payload;
  }
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1InvokeCodeInterpreterCommand
 */
export const se_InvokeCodeInterpreterCommand = async (
  input: InvokeCodeInterpreterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xacisi]: input[_sI]!,
  });
  b.bp("/code-interpreters/{codeInterpreterIdentifier}/tools/invoke");
  b.p("codeInterpreterIdentifier", () => input.codeInterpreterIdentifier!, "{codeInterpreterIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      arguments: (_) => se_ToolArguments(_, context),
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListActorsCommand
 */
export const se_ListActorsCommand = async (
  input: ListActorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memories/{memoryId}/actors");
  b.p("memoryId", () => input.memoryId!, "{memoryId}", false);
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
 * serializeAws_restJson1ListBrowserSessionsCommand
 */
export const se_ListBrowserSessionsCommand = async (
  input: ListBrowserSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/browsers/{browserIdentifier}/sessions/list");
  b.p("browserIdentifier", () => input.browserIdentifier!, "{browserIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      status: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCodeInterpreterSessionsCommand
 */
export const se_ListCodeInterpreterSessionsCommand = async (
  input: ListCodeInterpreterSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/code-interpreters/{codeInterpreterIdentifier}/sessions/list");
  b.p("codeInterpreterIdentifier", () => input.codeInterpreterIdentifier!, "{codeInterpreterIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      status: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEventsCommand
 */
export const se_ListEventsCommand = async (
  input: ListEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memories/{memoryId}/actor/{actorId}/sessions/{sessionId}");
  b.p("memoryId", () => input.memoryId!, "{memoryId}", false);
  b.p("sessionId", () => input.sessionId!, "{sessionId}", false);
  b.p("actorId", () => input.actorId!, "{actorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      filter: (_) => _json(_),
      includePayloads: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMemoryRecordsCommand
 */
export const se_ListMemoryRecordsCommand = async (
  input: ListMemoryRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memories/{memoryId}/memoryRecords");
  b.p("memoryId", () => input.memoryId!, "{memoryId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      memoryStrategyId: [],
      namespace: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSessionsCommand
 */
export const se_ListSessionsCommand = async (
  input: ListSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memories/{memoryId}/actor/{actorId}/sessions");
  b.p("memoryId", () => input.memoryId!, "{memoryId}", false);
  b.p("actorId", () => input.actorId!, "{actorId}", false);
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
 * serializeAws_restJson1RetrieveMemoryRecordsCommand
 */
export const se_RetrieveMemoryRecordsCommand = async (
  input: RetrieveMemoryRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memories/{memoryId}/retrieve");
  b.p("memoryId", () => input.memoryId!, "{memoryId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      namespace: [],
      nextToken: [],
      searchCriteria: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartBrowserSessionCommand
 */
export const se_StartBrowserSessionCommand = async (
  input: StartBrowserSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/browsers/{browserIdentifier}/sessions/start");
  b.p("browserIdentifier", () => input.browserIdentifier!, "{browserIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      name: [],
      sessionTimeoutSeconds: [],
      viewPort: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartCodeInterpreterSessionCommand
 */
export const se_StartCodeInterpreterSessionCommand = async (
  input: StartCodeInterpreterSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/code-interpreters/{codeInterpreterIdentifier}/sessions/start");
  b.p("codeInterpreterIdentifier", () => input.codeInterpreterIdentifier!, "{codeInterpreterIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      name: [],
      sessionTimeoutSeconds: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopBrowserSessionCommand
 */
export const se_StopBrowserSessionCommand = async (
  input: StopBrowserSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/browsers/{browserIdentifier}/sessions/stop");
  b.p("browserIdentifier", () => input.browserIdentifier!, "{browserIdentifier}", false);
  const query: any = map({
    [_sI]: [, __expectNonNull(input[_sI]!, `sessionId`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopCodeInterpreterSessionCommand
 */
export const se_StopCodeInterpreterSessionCommand = async (
  input: StopCodeInterpreterSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/code-interpreters/{codeInterpreterIdentifier}/sessions/stop");
  b.p("codeInterpreterIdentifier", () => input.codeInterpreterIdentifier!, "{codeInterpreterIdentifier}", false);
  const query: any = map({
    [_sI]: [, __expectNonNull(input[_sI]!, `sessionId`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateBrowserStreamCommand
 */
export const se_UpdateBrowserStreamCommand = async (
  input: UpdateBrowserStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/browsers/{browserIdentifier}/sessions/streams/update");
  b.p("browserIdentifier", () => input.browserIdentifier!, "{browserIdentifier}", false);
  const query: any = map({
    [_sI]: [, __expectNonNull(input[_sI]!, `sessionId`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      streamUpdate: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateEventCommand
 */
export const de_CreateEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    event: (_) => de_Event(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEventCommand
 */
export const de_DeleteEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    eventId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMemoryRecordCommand
 */
export const de_DeleteMemoryRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMemoryRecordCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    memoryRecordId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetBrowserSessionCommand
 */
export const de_GetBrowserSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBrowserSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    browserIdentifier: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    sessionId: __expectString,
    sessionReplayArtifact: __expectString,
    sessionTimeoutSeconds: __expectInt32,
    status: __expectString,
    streams: _json,
    viewPort: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCodeInterpreterSessionCommand
 */
export const de_GetCodeInterpreterSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCodeInterpreterSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    codeInterpreterIdentifier: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    sessionId: __expectString,
    sessionTimeoutSeconds: __expectInt32,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEventCommand
 */
export const de_GetEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    event: (_) => de_Event(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMemoryRecordCommand
 */
export const de_GetMemoryRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMemoryRecordCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    memoryRecord: (_) => de_MemoryRecord(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetResourceApiKeyCommand
 */
export const de_GetResourceApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceApiKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    apiKey: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetResourceOauth2TokenCommand
 */
export const de_GetResourceOauth2TokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceOauth2TokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accessToken: __expectString,
    authorizationUrl: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkloadAccessTokenCommand
 */
export const de_GetWorkloadAccessTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkloadAccessTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    workloadAccessToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkloadAccessTokenForJWTCommand
 */
export const de_GetWorkloadAccessTokenForJWTCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkloadAccessTokenForJWTCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    workloadAccessToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkloadAccessTokenForUserIdCommand
 */
export const de_GetWorkloadAccessTokenForUserIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkloadAccessTokenForUserIdCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    workloadAccessToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1InvokeAgentRuntimeCommand
 */
export const de_InvokeAgentRuntimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<InvokeAgentRuntimeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_rSI]: [, output.headers[_xabarsi]],
    [_mSI]: [, output.headers[_msi]],
    [_mPV]: [, output.headers[_mpv]],
    [_tI]: [, output.headers[_xati]],
    [_tP]: [, output.headers[_t]],
    [_tS]: [, output.headers[_tr]],
    [_b]: [, output.headers[_b]],
    [_cT]: [, output.headers[_ct]],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.response = data;
  map(contents, {
    statusCode: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1InvokeCodeInterpreterCommand
 */
export const de_InvokeCodeInterpreterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<InvokeCodeInterpreterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_sI]: [, output.headers[_xacisi]],
  });
  const data: any = output.body;
  contents.stream = de_CodeInterpreterStreamOutput(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1ListActorsCommand
 */
export const de_ListActorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actorSummaries: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListBrowserSessionsCommand
 */
export const de_ListBrowserSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBrowserSessionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_BrowserSessionSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCodeInterpreterSessionsCommand
 */
export const de_ListCodeInterpreterSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCodeInterpreterSessionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_CodeInterpreterSessionSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEventsCommand
 */
export const de_ListEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    events: (_) => de_EventList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMemoryRecordsCommand
 */
export const de_ListMemoryRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMemoryRecordsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    memoryRecordSummaries: (_) => de_MemoryRecordSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSessionsCommand
 */
export const de_ListSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSessionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    sessionSummaries: (_) => de_SessionSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RetrieveMemoryRecordsCommand
 */
export const de_RetrieveMemoryRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveMemoryRecordsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    memoryRecordSummaries: (_) => de_MemoryRecordSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartBrowserSessionCommand
 */
export const de_StartBrowserSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBrowserSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    browserIdentifier: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    sessionId: __expectString,
    streams: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartCodeInterpreterSessionCommand
 */
export const de_StartCodeInterpreterSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCodeInterpreterSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    codeInterpreterIdentifier: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    sessionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopBrowserSessionCommand
 */
export const de_StopBrowserSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBrowserSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    browserIdentifier: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    sessionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopCodeInterpreterSessionCommand
 */
export const de_StopCodeInterpreterSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCodeInterpreterSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    codeInterpreterIdentifier: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    sessionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBrowserStreamCommand
 */
export const de_UpdateBrowserStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrowserStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    browserIdentifier: __expectString,
    sessionId: __expectString,
    streams: _json,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
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
    case "com.amazonaws.bedrockagentcore#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.bedrockagentcore#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.bedrockagentcore#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.bedrockagentcore#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.bedrockagentcore#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.bedrockagentcore#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.bedrockagentcore#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.bedrockagentcore#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.bedrockagentcore#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.bedrockagentcore#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "RuntimeClientError":
    case "com.amazonaws.bedrockagentcore#RuntimeClientError":
      throw await de_RuntimeClientErrorRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.bedrockagentcore#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1RuntimeClientErrorRes
 */
const de_RuntimeClientErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<RuntimeClientError> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new RuntimeClientError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceExceptionRes
 */
const de_ServiceExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ServiceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceException({
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
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottledExceptionRes
 */
const de_ThrottledExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottledException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottledException({
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
 * deserializeAws_restJson1UnauthorizedExceptionRes
 */
const de_UnauthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedException({
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

/**
 * deserializeAws_restJson1CodeInterpreterStreamOutput
 */
const de_CodeInterpreterStreamOutput = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<CodeInterpreterStreamOutput> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["result"] != null) {
      return {
        result: await de_CodeInterpreterResult_event(event["result"], context),
      };
    }
    if (event["accessDeniedException"] != null) {
      return {
        accessDeniedException: await de_AccessDeniedException_event(event["accessDeniedException"], context),
      };
    }
    if (event["conflictException"] != null) {
      return {
        conflictException: await de_ConflictException_event(event["conflictException"], context),
      };
    }
    if (event["internalServerException"] != null) {
      return {
        internalServerException: await de_InternalServerException_event(event["internalServerException"], context),
      };
    }
    if (event["resourceNotFoundException"] != null) {
      return {
        resourceNotFoundException: await de_ResourceNotFoundException_event(
          event["resourceNotFoundException"],
          context
        ),
      };
    }
    if (event["serviceQuotaExceededException"] != null) {
      return {
        serviceQuotaExceededException: await de_ServiceQuotaExceededException_event(
          event["serviceQuotaExceededException"],
          context
        ),
      };
    }
    if (event["throttlingException"] != null) {
      return {
        throttlingException: await de_ThrottlingException_event(event["throttlingException"], context),
      };
    }
    if (event["validationException"] != null) {
      return {
        validationException: await de_ValidationException_event(event["validationException"], context),
      };
    }
    return { $unknown: event as any };
  });
};
const de_AccessDeniedException_event = async (output: any, context: __SerdeContext): Promise<AccessDeniedException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_AccessDeniedExceptionRes(parsedOutput, context);
};
const de_CodeInterpreterResult_event = async (output: any, context: __SerdeContext): Promise<CodeInterpreterResult> => {
  const contents: CodeInterpreterResult = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_CodeInterpreterResult(data, context));
  return contents;
};
const de_ConflictException_event = async (output: any, context: __SerdeContext): Promise<ConflictException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ConflictExceptionRes(parsedOutput, context);
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
const de_ServiceQuotaExceededException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
};
const de_ThrottlingException_event = async (output: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ThrottlingExceptionRes(parsedOutput, context);
};
const de_ValidationException_event = async (output: any, context: __SerdeContext): Promise<ValidationException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ValidationExceptionRes(parsedOutput, context);
};
// se_AutomationStreamUpdate omitted.

// se_Branch omitted.

// se_BranchFilter omitted.

// se_Content omitted.

// se_Conversational omitted.

// se_CustomRequestParametersType omitted.

/**
 * serializeAws_restJson1Document
 */
const se_Document = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

// se_FilterInput omitted.

/**
 * serializeAws_restJson1InputContentBlock
 */
const se_InputContentBlock = (input: InputContentBlock, context: __SerdeContext): any => {
  return take(input, {
    blob: context.base64Encoder,
    path: [],
    text: [],
  });
};

/**
 * serializeAws_restJson1InputContentBlockList
 */
const se_InputContentBlockList = (input: InputContentBlock[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InputContentBlock(entry, context);
    });
};

/**
 * serializeAws_restJson1PayloadType
 */
const se_PayloadType = (input: PayloadType, context: __SerdeContext): any => {
  return PayloadType.visit(input, {
    blob: (value) => ({ blob: se_Document(value, context) }),
    conversational: (value) => ({ conversational: _json(value) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1PayloadTypeList
 */
const se_PayloadTypeList = (input: PayloadType[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PayloadType(entry, context);
    });
};

// se_ScopesListType omitted.

// se_SearchCriteria omitted.

// se_StreamUpdate omitted.

// se_StringList omitted.

/**
 * serializeAws_restJson1ToolArguments
 */
const se_ToolArguments = (input: ToolArguments, context: __SerdeContext): any => {
  return take(input, {
    clearContext: [],
    code: [],
    command: [],
    content: (_) => se_InputContentBlockList(_, context),
    directoryPath: [],
    language: [],
    path: [],
    paths: _json,
    taskId: [],
  });
};

// se_ViewPort omitted.

// de_ActorSummary omitted.

// de_ActorSummaryList omitted.

// de_AutomationStream omitted.

// de_Branch omitted.

// de_BrowserSessionStream omitted.

/**
 * deserializeAws_restJson1BrowserSessionSummaries
 */
const de_BrowserSessionSummaries = (output: any, context: __SerdeContext): BrowserSessionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BrowserSessionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BrowserSessionSummary
 */
const de_BrowserSessionSummary = (output: any, context: __SerdeContext): BrowserSessionSummary => {
  return take(output, {
    browserIdentifier: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    sessionId: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CodeInterpreterResult
 */
const de_CodeInterpreterResult = (output: any, context: __SerdeContext): CodeInterpreterResult => {
  return take(output, {
    content: (_: any) => de_ContentBlockList(_, context),
    isError: __expectBoolean,
    structuredContent: (_: any) => de_ToolResultStructuredContent(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1CodeInterpreterSessionSummaries
 */
const de_CodeInterpreterSessionSummaries = (output: any, context: __SerdeContext): CodeInterpreterSessionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CodeInterpreterSessionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CodeInterpreterSessionSummary
 */
const de_CodeInterpreterSessionSummary = (output: any, context: __SerdeContext): CodeInterpreterSessionSummary => {
  return take(output, {
    codeInterpreterIdentifier: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    sessionId: __expectString,
    status: __expectString,
  }) as any;
};

// de_Content omitted.

/**
 * deserializeAws_restJson1ContentBlock
 */
const de_ContentBlock = (output: any, context: __SerdeContext): ContentBlock => {
  return take(output, {
    data: context.base64Decoder,
    description: __expectString,
    mimeType: __expectString,
    name: __expectString,
    resource: (_: any) => de_ResourceContent(_, context),
    size: __expectLong,
    text: __expectString,
    type: __expectString,
    uri: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ContentBlockList
 */
const de_ContentBlockList = (output: any, context: __SerdeContext): ContentBlock[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ContentBlock(entry, context);
    });
  return retVal;
};

// de_Conversational omitted.

/**
 * deserializeAws_restJson1Document
 */
const de_Document = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

/**
 * deserializeAws_restJson1Event
 */
const de_Event = (output: any, context: __SerdeContext): Event => {
  return take(output, {
    actorId: __expectString,
    branch: _json,
    eventId: __expectString,
    eventTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    memoryId: __expectString,
    payload: (_: any) => de_PayloadTypeList(_, context),
    sessionId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1EventList
 */
const de_EventList = (output: any, context: __SerdeContext): Event[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Event(entry, context);
    });
  return retVal;
};

// de_LiveViewStream omitted.

// de_MemoryContent omitted.

/**
 * deserializeAws_restJson1MemoryRecord
 */
const de_MemoryRecord = (output: any, context: __SerdeContext): MemoryRecord => {
  return take(output, {
    content: (_: any) => _json(__expectUnion(_)),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    memoryRecordId: __expectString,
    memoryStrategyId: __expectString,
    namespaces: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1MemoryRecordSummary
 */
const de_MemoryRecordSummary = (output: any, context: __SerdeContext): MemoryRecordSummary => {
  return take(output, {
    content: (_: any) => _json(__expectUnion(_)),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    memoryRecordId: __expectString,
    memoryStrategyId: __expectString,
    namespaces: _json,
    score: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1MemoryRecordSummaryList
 */
const de_MemoryRecordSummaryList = (output: any, context: __SerdeContext): MemoryRecordSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MemoryRecordSummary(entry, context);
    });
  return retVal;
};

// de_NamespacesList omitted.

/**
 * deserializeAws_restJson1PayloadType
 */
const de_PayloadType = (output: any, context: __SerdeContext): PayloadType => {
  if (output.blob != null) {
    return {
      blob: de_Document(output.blob, context),
    };
  }
  if (output.conversational != null) {
    return {
      conversational: _json(output.conversational),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1PayloadTypeList
 */
const de_PayloadTypeList = (output: any, context: __SerdeContext): PayloadType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PayloadType(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResourceContent
 */
const de_ResourceContent = (output: any, context: __SerdeContext): ResourceContent => {
  return take(output, {
    blob: context.base64Decoder,
    mimeType: __expectString,
    text: __expectString,
    type: __expectString,
    uri: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SessionSummary
 */
const de_SessionSummary = (output: any, context: __SerdeContext): SessionSummary => {
  return take(output, {
    actorId: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    sessionId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SessionSummaryList
 */
const de_SessionSummaryList = (output: any, context: __SerdeContext): SessionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SessionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ToolResultStructuredContent
 */
const de_ToolResultStructuredContent = (output: any, context: __SerdeContext): ToolResultStructuredContent => {
  return take(output, {
    executionTime: __limitedParseDouble,
    exitCode: __expectInt32,
    stderr: __expectString,
    stdout: __expectString,
    taskId: __expectString,
    taskStatus: __expectString,
  }) as any;
};

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_ViewPort omitted.

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

const _a = "accept";
const _b = "baggage";
const _cT = "contentType";
const _ct = "content-type";
const _mPV = "mcpProtocolVersion";
const _mSI = "mcpSessionId";
const _mpv = "mcp-protocol-version";
const _msi = "mcp-session-id";
const _q = "qualifier";
const _rSI = "runtimeSessionId";
const _rUI = "runtimeUserId";
const _sI = "sessionId";
const _t = "traceparent";
const _tI = "traceId";
const _tP = "traceParent";
const _tS = "traceState";
const _tr = "tracestate";
const _xabarsi = "x-amzn-bedrock-agentcore-runtime-session-id";
const _xabarui = "x-amzn-bedrock-agentcore-runtime-user-id";
const _xacisi = "x-amzn-code-interpreter-session-id";
const _xati = "x-amzn-trace-id";
