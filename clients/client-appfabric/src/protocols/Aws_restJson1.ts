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
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  BatchGetUserAccessTasksCommandInput,
  BatchGetUserAccessTasksCommandOutput,
} from "../commands/BatchGetUserAccessTasksCommand";
import {
  ConnectAppAuthorizationCommandInput,
  ConnectAppAuthorizationCommandOutput,
} from "../commands/ConnectAppAuthorizationCommand";
import {
  CreateAppAuthorizationCommandInput,
  CreateAppAuthorizationCommandOutput,
} from "../commands/CreateAppAuthorizationCommand";
import { CreateAppBundleCommandInput, CreateAppBundleCommandOutput } from "../commands/CreateAppBundleCommand";
import { CreateIngestionCommandInput, CreateIngestionCommandOutput } from "../commands/CreateIngestionCommand";
import {
  CreateIngestionDestinationCommandInput,
  CreateIngestionDestinationCommandOutput,
} from "../commands/CreateIngestionDestinationCommand";
import {
  DeleteAppAuthorizationCommandInput,
  DeleteAppAuthorizationCommandOutput,
} from "../commands/DeleteAppAuthorizationCommand";
import { DeleteAppBundleCommandInput, DeleteAppBundleCommandOutput } from "../commands/DeleteAppBundleCommand";
import { DeleteIngestionCommandInput, DeleteIngestionCommandOutput } from "../commands/DeleteIngestionCommand";
import {
  DeleteIngestionDestinationCommandInput,
  DeleteIngestionDestinationCommandOutput,
} from "../commands/DeleteIngestionDestinationCommand";
import {
  GetAppAuthorizationCommandInput,
  GetAppAuthorizationCommandOutput,
} from "../commands/GetAppAuthorizationCommand";
import { GetAppBundleCommandInput, GetAppBundleCommandOutput } from "../commands/GetAppBundleCommand";
import { GetIngestionCommandInput, GetIngestionCommandOutput } from "../commands/GetIngestionCommand";
import {
  GetIngestionDestinationCommandInput,
  GetIngestionDestinationCommandOutput,
} from "../commands/GetIngestionDestinationCommand";
import {
  ListAppAuthorizationsCommandInput,
  ListAppAuthorizationsCommandOutput,
} from "../commands/ListAppAuthorizationsCommand";
import { ListAppBundlesCommandInput, ListAppBundlesCommandOutput } from "../commands/ListAppBundlesCommand";
import {
  ListIngestionDestinationsCommandInput,
  ListIngestionDestinationsCommandOutput,
} from "../commands/ListIngestionDestinationsCommand";
import { ListIngestionsCommandInput, ListIngestionsCommandOutput } from "../commands/ListIngestionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartIngestionCommandInput, StartIngestionCommandOutput } from "../commands/StartIngestionCommand";
import {
  StartUserAccessTasksCommandInput,
  StartUserAccessTasksCommandOutput,
} from "../commands/StartUserAccessTasksCommand";
import { StopIngestionCommandInput, StopIngestionCommandOutput } from "../commands/StopIngestionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateAppAuthorizationCommandInput,
  UpdateAppAuthorizationCommandOutput,
} from "../commands/UpdateAppAuthorizationCommand";
import {
  UpdateIngestionDestinationCommandInput,
  UpdateIngestionDestinationCommandOutput,
} from "../commands/UpdateIngestionDestinationCommand";
import { AppFabricServiceException as __BaseException } from "../models/AppFabricServiceException";
import {
  AccessDeniedException,
  ApiKeyCredential,
  AppAuthorization,
  AppAuthorizationSummary,
  AuditLogDestinationConfiguration,
  AuditLogProcessingConfiguration,
  AuthRequest,
  ConflictException,
  Credential,
  Destination,
  DestinationConfiguration,
  FirehoseStream,
  Ingestion,
  IngestionDestination,
  InternalServerException,
  Oauth2Credential,
  ProcessingConfiguration,
  ResourceNotFoundException,
  S3Bucket,
  ServiceQuotaExceededException,
  Tag,
  Tenant,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1BatchGetUserAccessTasksCommand
 */
export const se_BatchGetUserAccessTasksCommand = async (
  input: BatchGetUserAccessTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/useraccess/batchget");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appBundleIdentifier: [],
      taskIdList: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ConnectAppAuthorizationCommand
 */
export const se_ConnectAppAuthorizationCommand = async (
  input: ConnectAppAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}/connect");
  b.p("appBundleIdentifier", () => input.appBundleIdentifier!, "{appBundleIdentifier}", false);
  b.p("appAuthorizationIdentifier", () => input.appAuthorizationIdentifier!, "{appAuthorizationIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      authRequest: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAppAuthorizationCommand
 */
export const se_CreateAppAuthorizationCommand = async (
  input: CreateAppAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/appbundles/{appBundleIdentifier}/appauthorizations");
  b.p("appBundleIdentifier", () => input.appBundleIdentifier!, "{appBundleIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      app: [],
      authType: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      credential: (_) => _json(_),
      tags: (_) => _json(_),
      tenant: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAppBundleCommand
 */
export const se_CreateAppBundleCommand = async (
  input: CreateAppBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/appbundles");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      customerManagedKeyIdentifier: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateIngestionCommand
 */
export const se_CreateIngestionCommand = async (
  input: CreateIngestionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/appbundles/{appBundleIdentifier}/ingestions");
  b.p("appBundleIdentifier", () => input.appBundleIdentifier!, "{appBundleIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      app: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ingestionType: [],
      tags: (_) => _json(_),
      tenantId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateIngestionDestinationCommand
 */
export const se_CreateIngestionDestinationCommand = async (
  input: CreateIngestionDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations");
  b.p("appBundleIdentifier", () => input.appBundleIdentifier!, "{appBundleIdentifier}", false);
  b.p("ingestionIdentifier", () => input.ingestionIdentifier!, "{ingestionIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      destinationConfiguration: (_) => _json(_),
      processingConfiguration: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAppAuthorizationCommand
 */
export const se_DeleteAppAuthorizationCommand = async (
  input: DeleteAppAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}");
  b.p("appBundleIdentifier", () => input.appBundleIdentifier!, "{appBundleIdentifier}", false);
  b.p("appAuthorizationIdentifier", () => input.appAuthorizationIdentifier!, "{appAuthorizationIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAppBundleCommand
 */
export const se_DeleteAppBundleCommand = async (
  input: DeleteAppBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/appbundles/{appBundleIdentifier}");
  b.p("appBundleIdentifier", () => input.appBundleIdentifier!, "{appBundleIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteIngestionCommand
 */
export const se_DeleteIngestionCommand = async (
  input: DeleteIngestionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}");
  b.p("appBundleIdentifier", () => input.appBundleIdentifier!, "{appBundleIdentifier}", false);
  b.p("ingestionIdentifier", () => input.ingestionIdentifier!, "{ingestionIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteIngestionDestinationCommand
 */
export const se_DeleteIngestionDestinationCommand = async (
  input: DeleteIngestionDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp(
    "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations/{ingestionDestinationIdentifier}"
  );
  b.p("appBundleIdentifier", () => input.appBundleIdentifier!, "{appBundleIdentifier}", false);
  b.p("ingestionIdentifier", () => input.ingestionIdentifier!, "{ingestionIdentifier}", false);
  b.p(
    "ingestionDestinationIdentifier",
    () => input.ingestionDestinationIdentifier!,
    "{ingestionDestinationIdentifier}",
    false
  );
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAppAuthorizationCommand
 */
export const se_GetAppAuthorizationCommand = async (
  input: GetAppAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}");
  b.p("appBundleIdentifier", () => input.appBundleIdentifier!, "{appBundleIdentifier}", false);
  b.p("appAuthorizationIdentifier", () => input.appAuthorizationIdentifier!, "{appAuthorizationIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAppBundleCommand
 */
export const se_GetAppBundleCommand = async (
  input: GetAppBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/appbundles/{appBundleIdentifier}");
  b.p("appBundleIdentifier", () => input.appBundleIdentifier!, "{appBundleIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetIngestionCommand
 */
export const se_GetIngestionCommand = async (
  input: GetIngestionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}");
  b.p("appBundleIdentifier", () => input.appBundleIdentifier!, "{appBundleIdentifier}", false);
  b.p("ingestionIdentifier", () => input.ingestionIdentifier!, "{ingestionIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetIngestionDestinationCommand
 */
export const se_GetIngestionDestinationCommand = async (
  input: GetIngestionDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp(
    "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations/{ingestionDestinationIdentifier}"
  );
  b.p("appBundleIdentifier", () => input.appBundleIdentifier!, "{appBundleIdentifier}", false);
  b.p("ingestionIdentifier", () => input.ingestionIdentifier!, "{ingestionIdentifier}", false);
  b.p(
    "ingestionDestinationIdentifier",
    () => input.ingestionDestinationIdentifier!,
    "{ingestionDestinationIdentifier}",
    false
  );
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAppAuthorizationsCommand
 */
export const se_ListAppAuthorizationsCommand = async (
  input: ListAppAuthorizationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/appbundles/{appBundleIdentifier}/appauthorizations");
  b.p("appBundleIdentifier", () => input.appBundleIdentifier!, "{appBundleIdentifier}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAppBundlesCommand
 */
export const se_ListAppBundlesCommand = async (
  input: ListAppBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/appbundles");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIngestionDestinationsCommand
 */
export const se_ListIngestionDestinationsCommand = async (
  input: ListIngestionDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations");
  b.p("appBundleIdentifier", () => input.appBundleIdentifier!, "{appBundleIdentifier}", false);
  b.p("ingestionIdentifier", () => input.ingestionIdentifier!, "{ingestionIdentifier}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIngestionsCommand
 */
export const se_ListIngestionsCommand = async (
  input: ListIngestionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/appbundles/{appBundleIdentifier}/ingestions");
  b.p("appBundleIdentifier", () => input.appBundleIdentifier!, "{appBundleIdentifier}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
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
 * serializeAws_restJson1StartIngestionCommand
 */
export const se_StartIngestionCommand = async (
  input: StartIngestionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/start");
  b.p("ingestionIdentifier", () => input.ingestionIdentifier!, "{ingestionIdentifier}", false);
  b.p("appBundleIdentifier", () => input.appBundleIdentifier!, "{appBundleIdentifier}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartUserAccessTasksCommand
 */
export const se_StartUserAccessTasksCommand = async (
  input: StartUserAccessTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/useraccess/start");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appBundleIdentifier: [],
      email: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopIngestionCommand
 */
export const se_StopIngestionCommand = async (
  input: StopIngestionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/stop");
  b.p("ingestionIdentifier", () => input.ingestionIdentifier!, "{ingestionIdentifier}", false);
  b.p("appBundleIdentifier", () => input.appBundleIdentifier!, "{appBundleIdentifier}", false);
  let body: any;
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
 * serializeAws_restJson1UpdateAppAuthorizationCommand
 */
export const se_UpdateAppAuthorizationCommand = async (
  input: UpdateAppAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}");
  b.p("appBundleIdentifier", () => input.appBundleIdentifier!, "{appBundleIdentifier}", false);
  b.p("appAuthorizationIdentifier", () => input.appAuthorizationIdentifier!, "{appAuthorizationIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      credential: (_) => _json(_),
      tenant: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateIngestionDestinationCommand
 */
export const se_UpdateIngestionDestinationCommand = async (
  input: UpdateIngestionDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp(
    "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations/{ingestionDestinationIdentifier}"
  );
  b.p("appBundleIdentifier", () => input.appBundleIdentifier!, "{appBundleIdentifier}", false);
  b.p("ingestionIdentifier", () => input.ingestionIdentifier!, "{ingestionIdentifier}", false);
  b.p(
    "ingestionDestinationIdentifier",
    () => input.ingestionDestinationIdentifier!,
    "{ingestionDestinationIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      destinationConfiguration: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchGetUserAccessTasksCommand
 */
export const de_BatchGetUserAccessTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetUserAccessTasksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    userAccessResultsList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ConnectAppAuthorizationCommand
 */
export const de_ConnectAppAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConnectAppAuthorizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appAuthorizationSummary: (_) => de_AppAuthorizationSummary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAppAuthorizationCommand
 */
export const de_CreateAppAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppAuthorizationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appAuthorization: (_) => de_AppAuthorization(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAppBundleCommand
 */
export const de_CreateAppBundleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppBundleCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appBundle: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateIngestionCommand
 */
export const de_CreateIngestionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIngestionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ingestion: (_) => de_Ingestion(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateIngestionDestinationCommand
 */
export const de_CreateIngestionDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIngestionDestinationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ingestionDestination: (_) => de_IngestionDestination(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAppAuthorizationCommand
 */
export const de_DeleteAppAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppAuthorizationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteAppBundleCommand
 */
export const de_DeleteAppBundleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppBundleCommandOutput> => {
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
 * deserializeAws_restJson1DeleteIngestionCommand
 */
export const de_DeleteIngestionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIngestionCommandOutput> => {
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
 * deserializeAws_restJson1DeleteIngestionDestinationCommand
 */
export const de_DeleteIngestionDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIngestionDestinationCommandOutput> => {
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
 * deserializeAws_restJson1GetAppAuthorizationCommand
 */
export const de_GetAppAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppAuthorizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appAuthorization: (_) => de_AppAuthorization(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAppBundleCommand
 */
export const de_GetAppBundleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppBundleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appBundle: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIngestionCommand
 */
export const de_GetIngestionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIngestionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ingestion: (_) => de_Ingestion(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIngestionDestinationCommand
 */
export const de_GetIngestionDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIngestionDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ingestionDestination: (_) => de_IngestionDestination(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAppAuthorizationsCommand
 */
export const de_ListAppAuthorizationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppAuthorizationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appAuthorizationSummaryList: (_) => de_AppAuthorizationSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAppBundlesCommand
 */
export const de_ListAppBundlesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppBundlesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appBundleSummaryList: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIngestionDestinationsCommand
 */
export const de_ListIngestionDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIngestionDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ingestionDestinations: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIngestionsCommand
 */
export const de_ListIngestionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIngestionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ingestions: _json,
    nextToken: __expectString,
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
 * deserializeAws_restJson1StartIngestionCommand
 */
export const de_StartIngestionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartIngestionCommandOutput> => {
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
 * deserializeAws_restJson1StartUserAccessTasksCommand
 */
export const de_StartUserAccessTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartUserAccessTasksCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    userAccessTasksList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopIngestionCommand
 */
export const de_StopIngestionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopIngestionCommandOutput> => {
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
 * deserializeAws_restJson1UpdateAppAuthorizationCommand
 */
export const de_UpdateAppAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppAuthorizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appAuthorization: (_) => de_AppAuthorization(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateIngestionDestinationCommand
 */
export const de_UpdateIngestionDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIngestionDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ingestionDestination: (_) => de_IngestionDestination(_, context),
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
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appfabric#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appfabric#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appfabric#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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
  const contents: any = map({
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
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
    message: __expectString,
    quotaCode: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
    serviceCode: __expectString,
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
  const contents: any = map({
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    quotaCode: __expectString,
    serviceCode: __expectString,
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

// se_ApiKeyCredential omitted.

// se_AuditLogDestinationConfiguration omitted.

// se_AuditLogProcessingConfiguration omitted.

// se_AuthRequest omitted.

// se_Credential omitted.

// se_Destination omitted.

// se_DestinationConfiguration omitted.

// se_FirehoseStream omitted.

// se_Oauth2Credential omitted.

// se_ProcessingConfiguration omitted.

// se_S3Bucket omitted.

// se_Tag omitted.

// se_TagList omitted.

// se_TaskIdList omitted.

// se_Tenant omitted.

/**
 * deserializeAws_restJson1AppAuthorization
 */
const de_AppAuthorization = (output: any, context: __SerdeContext): AppAuthorization => {
  return take(output, {
    app: __expectString,
    appAuthorizationArn: __expectString,
    appBundleArn: __expectString,
    authType: __expectString,
    authUrl: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    persona: __expectString,
    status: __expectString,
    tenant: _json,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1AppAuthorizationSummary
 */
const de_AppAuthorizationSummary = (output: any, context: __SerdeContext): AppAuthorizationSummary => {
  return take(output, {
    app: __expectString,
    appAuthorizationArn: __expectString,
    appBundleArn: __expectString,
    status: __expectString,
    tenant: _json,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1AppAuthorizationSummaryList
 */
const de_AppAuthorizationSummaryList = (output: any, context: __SerdeContext): AppAuthorizationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AppAuthorizationSummary(entry, context);
    });
  return retVal;
};

// de_AppBundle omitted.

// de_AppBundleSummary omitted.

// de_AppBundleSummaryList omitted.

// de_AuditLogDestinationConfiguration omitted.

// de_AuditLogProcessingConfiguration omitted.

// de_Destination omitted.

// de_DestinationConfiguration omitted.

// de_FirehoseStream omitted.

/**
 * deserializeAws_restJson1Ingestion
 */
const de_Ingestion = (output: any, context: __SerdeContext): Ingestion => {
  return take(output, {
    app: __expectString,
    appBundleArn: __expectString,
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ingestionType: __expectString,
    state: __expectString,
    tenantId: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1IngestionDestination
 */
const de_IngestionDestination = (output: any, context: __SerdeContext): IngestionDestination => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    destinationConfiguration: (_: any) => _json(__expectUnion(_)),
    ingestionArn: __expectString,
    processingConfiguration: (_: any) => _json(__expectUnion(_)),
    status: __expectString,
    statusReason: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_IngestionDestinationList omitted.

// de_IngestionDestinationSummary omitted.

// de_IngestionList omitted.

// de_IngestionSummary omitted.

// de_ProcessingConfiguration omitted.

// de_S3Bucket omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TaskError omitted.

// de_Tenant omitted.

// de_UserAccessResultItem omitted.

// de_UserAccessResultsList omitted.

// de_UserAccessTaskItem omitted.

// de_UserAccessTasksList omitted.

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

const _mR = "maxResults";
const _nT = "nextToken";
const _rAS = "retryAfterSeconds";
const _ra = "retry-after";
const _tK = "tagKeys";
