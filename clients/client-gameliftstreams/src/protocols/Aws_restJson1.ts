// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
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
  AddStreamGroupLocationsCommandInput,
  AddStreamGroupLocationsCommandOutput,
} from "../commands/AddStreamGroupLocationsCommand";
import {
  AssociateApplicationsCommandInput,
  AssociateApplicationsCommandOutput,
} from "../commands/AssociateApplicationsCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "../commands/CreateApplicationCommand";
import { CreateStreamGroupCommandInput, CreateStreamGroupCommandOutput } from "../commands/CreateStreamGroupCommand";
import {
  CreateStreamSessionConnectionCommandInput,
  CreateStreamSessionConnectionCommandOutput,
} from "../commands/CreateStreamSessionConnectionCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "../commands/DeleteApplicationCommand";
import { DeleteStreamGroupCommandInput, DeleteStreamGroupCommandOutput } from "../commands/DeleteStreamGroupCommand";
import {
  DisassociateApplicationsCommandInput,
  DisassociateApplicationsCommandOutput,
} from "../commands/DisassociateApplicationsCommand";
import {
  ExportStreamSessionFilesCommandInput,
  ExportStreamSessionFilesCommandOutput,
} from "../commands/ExportStreamSessionFilesCommand";
import { GetApplicationCommandInput, GetApplicationCommandOutput } from "../commands/GetApplicationCommand";
import { GetStreamGroupCommandInput, GetStreamGroupCommandOutput } from "../commands/GetStreamGroupCommand";
import { GetStreamSessionCommandInput, GetStreamSessionCommandOutput } from "../commands/GetStreamSessionCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
import { ListStreamGroupsCommandInput, ListStreamGroupsCommandOutput } from "../commands/ListStreamGroupsCommand";
import {
  ListStreamSessionsByAccountCommandInput,
  ListStreamSessionsByAccountCommandOutput,
} from "../commands/ListStreamSessionsByAccountCommand";
import { ListStreamSessionsCommandInput, ListStreamSessionsCommandOutput } from "../commands/ListStreamSessionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  RemoveStreamGroupLocationsCommandInput,
  RemoveStreamGroupLocationsCommandOutput,
} from "../commands/RemoveStreamGroupLocationsCommand";
import { StartStreamSessionCommandInput, StartStreamSessionCommandOutput } from "../commands/StartStreamSessionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import {
  TerminateStreamSessionCommandInput,
  TerminateStreamSessionCommandOutput,
} from "../commands/TerminateStreamSessionCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "../commands/UpdateApplicationCommand";
import { UpdateStreamGroupCommandInput, UpdateStreamGroupCommandOutput } from "../commands/UpdateStreamGroupCommand";
import { GameLiftStreamsServiceException as __BaseException } from "../models/GameLiftStreamsServiceException";
import {
  AccessDeniedException,
  ApplicationSummary,
  ConflictException,
  InternalServerException,
  LocationConfiguration,
  ResourceNotFoundException,
  RuntimeEnvironment,
  ServiceQuotaExceededException,
  StreamGroupSummary,
  StreamSessionSummary,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1AddStreamGroupLocationsCommand
 */
export const se_AddStreamGroupLocationsCommand = async (
  input: AddStreamGroupLocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/streamgroups/{Identifier}/locations");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      LocationConfigurations: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateApplicationsCommand
 */
export const se_AssociateApplicationsCommand = async (
  input: AssociateApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/streamgroups/{Identifier}/associations");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ApplicationIdentifiers: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateApplicationCommand
 */
export const se_CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ApplicationLogOutputUri: [],
      ApplicationLogPaths: (_) => _json(_),
      ApplicationSourceUri: [],
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      ExecutablePath: [],
      RuntimeEnvironment: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateStreamGroupCommand
 */
export const se_CreateStreamGroupCommand = async (
  input: CreateStreamGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/streamgroups");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      DefaultApplicationIdentifier: [],
      Description: [],
      LocationConfigurations: (_) => _json(_),
      StreamClass: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateStreamSessionConnectionCommand
 */
export const se_CreateStreamSessionConnectionCommand = async (
  input: CreateStreamSessionConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/streamgroups/{Identifier}/streamsessions/{StreamSessionIdentifier}/connections");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  b.p("StreamSessionIdentifier", () => input.StreamSessionIdentifier!, "{StreamSessionIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      SignalRequest: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteApplicationCommand
 */
export const se_DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteStreamGroupCommand
 */
export const se_DeleteStreamGroupCommand = async (
  input: DeleteStreamGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/streamgroups/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateApplicationsCommand
 */
export const se_DisassociateApplicationsCommand = async (
  input: DisassociateApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/streamgroups/{Identifier}/disassociations");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ApplicationIdentifiers: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ExportStreamSessionFilesCommand
 */
export const se_ExportStreamSessionFilesCommand = async (
  input: ExportStreamSessionFilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/streamgroups/{Identifier}/streamsessions/{StreamSessionIdentifier}/exportfiles");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  b.p("StreamSessionIdentifier", () => input.StreamSessionIdentifier!, "{StreamSessionIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      OutputUri: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetApplicationCommand
 */
export const se_GetApplicationCommand = async (
  input: GetApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetStreamGroupCommand
 */
export const se_GetStreamGroupCommand = async (
  input: GetStreamGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/streamgroups/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetStreamSessionCommand
 */
export const se_GetStreamSessionCommand = async (
  input: GetStreamSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/streamgroups/{Identifier}/streamsessions/{StreamSessionIdentifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  b.p("StreamSessionIdentifier", () => input.StreamSessionIdentifier!, "{StreamSessionIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListApplicationsCommand
 */
export const se_ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListStreamGroupsCommand
 */
export const se_ListStreamGroupsCommand = async (
  input: ListStreamGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/streamgroups");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListStreamSessionsCommand
 */
export const se_ListStreamSessionsCommand = async (
  input: ListStreamSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/streamgroups/{Identifier}/streamsessions");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  const query: any = map({
    [_S]: [, input[_S]!],
    [_EFS]: [, input[_EFS]!],
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListStreamSessionsByAccountCommand
 */
export const se_ListStreamSessionsByAccountCommand = async (
  input: ListStreamSessionsByAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/streamsessions");
  const query: any = map({
    [_S]: [, input[_S]!],
    [_EFS]: [, input[_EFS]!],
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
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
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RemoveStreamGroupLocationsCommand
 */
export const se_RemoveStreamGroupLocationsCommand = async (
  input: RemoveStreamGroupLocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/streamgroups/{Identifier}/locations");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  const query: any = map({
    [_l]: [__expectNonNull(input.Locations, `Locations`) != null, () => input[_L]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartStreamSessionCommand
 */
export const se_StartStreamSessionCommand = async (
  input: StartStreamSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/streamgroups/{Identifier}/streamsessions");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AdditionalEnvironmentVariables: (_) => _json(_),
      AdditionalLaunchArgs: (_) => _json(_),
      ApplicationIdentifier: [],
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ConnectionTimeoutSeconds: [],
      Description: [],
      Locations: (_) => _json(_),
      Protocol: [],
      SessionLengthSeconds: [],
      SignalRequest: [],
      UserId: [],
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
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TerminateStreamSessionCommand
 */
export const se_TerminateStreamSessionCommand = async (
  input: TerminateStreamSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/streamgroups/{Identifier}/streamsessions/{StreamSessionIdentifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  b.p("StreamSessionIdentifier", () => input.StreamSessionIdentifier!, "{StreamSessionIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
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
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.TagKeys, `TagKeys`) != null, () => input[_TK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateApplicationCommand
 */
export const se_UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ApplicationLogOutputUri: [],
      ApplicationLogPaths: (_) => _json(_),
      Description: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateStreamGroupCommand
 */
export const se_UpdateStreamGroupCommand = async (
  input: UpdateStreamGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/streamgroups/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DefaultApplicationIdentifier: [],
      Description: [],
      LocationConfigurations: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AddStreamGroupLocationsCommand
 */
export const de_AddStreamGroupLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddStreamGroupLocationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Identifier: __expectString,
    Locations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateApplicationsCommand
 */
export const de_AssociateApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationArns: _json,
    Arn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateApplicationCommand
 */
export const de_CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationLogOutputUri: __expectString,
    ApplicationLogPaths: _json,
    ApplicationSourceUri: __expectString,
    Arn: __expectString,
    AssociatedStreamGroups: _json,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    ExecutablePath: __expectString,
    Id: __expectString,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReplicationStatuses: _json,
    RuntimeEnvironment: _json,
    Status: __expectString,
    StatusReason: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateStreamGroupCommand
 */
export const de_CreateStreamGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamGroupCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    AssociatedApplications: _json,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultApplication: _json,
    Description: __expectString,
    Id: __expectString,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LocationStates: _json,
    Status: __expectString,
    StatusReason: __expectString,
    StreamClass: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateStreamSessionConnectionCommand
 */
export const de_CreateStreamSessionConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamSessionConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SignalResponse: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteApplicationCommand
 */
export const de_DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteStreamGroupCommand
 */
export const de_DeleteStreamGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamGroupCommandOutput> => {
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
 * deserializeAws_restJson1DisassociateApplicationsCommand
 */
export const de_DisassociateApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationArns: _json,
    Arn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ExportStreamSessionFilesCommand
 */
export const de_ExportStreamSessionFilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportStreamSessionFilesCommandOutput> => {
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
 * deserializeAws_restJson1GetApplicationCommand
 */
export const de_GetApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationLogOutputUri: __expectString,
    ApplicationLogPaths: _json,
    ApplicationSourceUri: __expectString,
    Arn: __expectString,
    AssociatedStreamGroups: _json,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    ExecutablePath: __expectString,
    Id: __expectString,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReplicationStatuses: _json,
    RuntimeEnvironment: _json,
    Status: __expectString,
    StatusReason: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetStreamGroupCommand
 */
export const de_GetStreamGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    AssociatedApplications: _json,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultApplication: _json,
    Description: __expectString,
    Id: __expectString,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LocationStates: _json,
    Status: __expectString,
    StatusReason: __expectString,
    StreamClass: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetStreamSessionCommand
 */
export const de_GetStreamSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AdditionalEnvironmentVariables: _json,
    AdditionalLaunchArgs: _json,
    ApplicationArn: __expectString,
    Arn: __expectString,
    ConnectionTimeoutSeconds: __expectInt32,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    ExportFilesMetadata: _json,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Location: __expectString,
    LogFileLocationUri: __expectString,
    Protocol: __expectString,
    SessionLengthSeconds: __expectInt32,
    SignalRequest: __expectString,
    SignalResponse: __expectString,
    Status: __expectString,
    StatusReason: __expectString,
    StreamGroupId: __expectString,
    UserId: __expectString,
    WebSdkProtocolUrl: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListApplicationsCommand
 */
export const de_ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de_ApplicationSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListStreamGroupsCommand
 */
export const de_ListStreamGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de_StreamGroupSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListStreamSessionsCommand
 */
export const de_ListStreamSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamSessionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de_StreamSessionSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListStreamSessionsByAccountCommand
 */
export const de_ListStreamSessionsByAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamSessionsByAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de_StreamSessionSummaryList(_, context),
    NextToken: __expectString,
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
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RemoveStreamGroupLocationsCommand
 */
export const de_RemoveStreamGroupLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveStreamGroupLocationsCommandOutput> => {
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
 * deserializeAws_restJson1StartStreamSessionCommand
 */
export const de_StartStreamSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStreamSessionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AdditionalEnvironmentVariables: _json,
    AdditionalLaunchArgs: _json,
    ApplicationArn: __expectString,
    Arn: __expectString,
    ConnectionTimeoutSeconds: __expectInt32,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    ExportFilesMetadata: _json,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Location: __expectString,
    LogFileLocationUri: __expectString,
    Protocol: __expectString,
    SessionLengthSeconds: __expectInt32,
    SignalRequest: __expectString,
    SignalResponse: __expectString,
    Status: __expectString,
    StatusReason: __expectString,
    StreamGroupId: __expectString,
    UserId: __expectString,
    WebSdkProtocolUrl: __expectString,
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
 * deserializeAws_restJson1TerminateStreamSessionCommand
 */
export const de_TerminateStreamSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateStreamSessionCommandOutput> => {
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
 * deserializeAws_restJson1UpdateApplicationCommand
 */
export const de_UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationLogOutputUri: __expectString,
    ApplicationLogPaths: _json,
    ApplicationSourceUri: __expectString,
    Arn: __expectString,
    AssociatedStreamGroups: _json,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    ExecutablePath: __expectString,
    Id: __expectString,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReplicationStatuses: _json,
    RuntimeEnvironment: _json,
    Status: __expectString,
    StatusReason: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateStreamGroupCommand
 */
export const de_UpdateStreamGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    AssociatedApplications: _json,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultApplication: _json,
    Description: __expectString,
    Id: __expectString,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LocationStates: _json,
    Status: __expectString,
    StatusReason: __expectString,
    StreamClass: __expectString,
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
    case "com.amazonaws.gameliftstreams#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gameliftstreams#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gameliftstreams#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.gameliftstreams#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gameliftstreams#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gameliftstreams#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.gameliftstreams#ConflictException":
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
    Message: __expectString,
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
    Message: __expectString,
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
    Message: __expectString,
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
    Message: __expectString,
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
    Message: __expectString,
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
    Message: __expectString,
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
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_EnvironmentVariables omitted.

// se_FilePaths omitted.

// se_GameLaunchArgList omitted.

// se_Identifiers omitted.

// se_LocationConfiguration omitted.

// se_LocationConfigurations omitted.

// se_LocationList omitted.

// se_RuntimeEnvironment omitted.

// se_Tags omitted.

/**
 * deserializeAws_restJson1ApplicationSummary
 */
const de_ApplicationSummary = (output: any, context: __SerdeContext): ApplicationSummary => {
  return take(output, {
    Arn: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Id: __expectString,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RuntimeEnvironment: _json,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ApplicationSummaryList
 */
const de_ApplicationSummaryList = (output: any, context: __SerdeContext): ApplicationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ApplicationSummary(entry, context);
    });
  return retVal;
};

// de_ArnList omitted.

// de_DefaultApplication omitted.

// de_EnvironmentVariables omitted.

// de_ExportFilesMetadata omitted.

// de_FilePaths omitted.

// de_GameLaunchArgList omitted.

// de_LocationState omitted.

// de_LocationStates omitted.

// de_ReplicationStatus omitted.

// de_ReplicationStatuses omitted.

// de_RuntimeEnvironment omitted.

/**
 * deserializeAws_restJson1StreamGroupSummary
 */
const de_StreamGroupSummary = (output: any, context: __SerdeContext): StreamGroupSummary => {
  return take(output, {
    Arn: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultApplication: _json,
    Description: __expectString,
    Id: __expectString,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    StreamClass: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1StreamGroupSummaryList
 */
const de_StreamGroupSummaryList = (output: any, context: __SerdeContext): StreamGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StreamGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1StreamSessionSummary
 */
const de_StreamSessionSummary = (output: any, context: __SerdeContext): StreamSessionSummary => {
  return take(output, {
    ApplicationArn: __expectString,
    Arn: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExportFilesMetadata: _json,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Location: __expectString,
    Protocol: __expectString,
    Status: __expectString,
    UserId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1StreamSessionSummaryList
 */
const de_StreamSessionSummaryList = (output: any, context: __SerdeContext): StreamSessionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StreamSessionSummary(entry, context);
    });
  return retVal;
};

// de_Tags omitted.

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

const _EFS = "ExportFilesStatus";
const _L = "Locations";
const _MR = "MaxResults";
const _NT = "NextToken";
const _S = "Status";
const _TK = "TagKeys";
const _l = "locations";
const _tK = "tagKeys";
