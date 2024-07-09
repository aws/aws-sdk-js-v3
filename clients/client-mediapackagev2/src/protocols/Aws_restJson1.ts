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

import { CreateChannelCommandInput, CreateChannelCommandOutput } from "../commands/CreateChannelCommand";
import { CreateChannelGroupCommandInput, CreateChannelGroupCommandOutput } from "../commands/CreateChannelGroupCommand";
import {
  CreateOriginEndpointCommandInput,
  CreateOriginEndpointCommandOutput,
} from "../commands/CreateOriginEndpointCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "../commands/DeleteChannelCommand";
import { DeleteChannelGroupCommandInput, DeleteChannelGroupCommandOutput } from "../commands/DeleteChannelGroupCommand";
import {
  DeleteChannelPolicyCommandInput,
  DeleteChannelPolicyCommandOutput,
} from "../commands/DeleteChannelPolicyCommand";
import {
  DeleteOriginEndpointCommandInput,
  DeleteOriginEndpointCommandOutput,
} from "../commands/DeleteOriginEndpointCommand";
import {
  DeleteOriginEndpointPolicyCommandInput,
  DeleteOriginEndpointPolicyCommandOutput,
} from "../commands/DeleteOriginEndpointPolicyCommand";
import { GetChannelCommandInput, GetChannelCommandOutput } from "../commands/GetChannelCommand";
import { GetChannelGroupCommandInput, GetChannelGroupCommandOutput } from "../commands/GetChannelGroupCommand";
import { GetChannelPolicyCommandInput, GetChannelPolicyCommandOutput } from "../commands/GetChannelPolicyCommand";
import { GetOriginEndpointCommandInput, GetOriginEndpointCommandOutput } from "../commands/GetOriginEndpointCommand";
import {
  GetOriginEndpointPolicyCommandInput,
  GetOriginEndpointPolicyCommandOutput,
} from "../commands/GetOriginEndpointPolicyCommand";
import { ListChannelGroupsCommandInput, ListChannelGroupsCommandOutput } from "../commands/ListChannelGroupsCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "../commands/ListChannelsCommand";
import {
  ListOriginEndpointsCommandInput,
  ListOriginEndpointsCommandOutput,
} from "../commands/ListOriginEndpointsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutChannelPolicyCommandInput, PutChannelPolicyCommandOutput } from "../commands/PutChannelPolicyCommand";
import {
  PutOriginEndpointPolicyCommandInput,
  PutOriginEndpointPolicyCommandOutput,
} from "../commands/PutOriginEndpointPolicyCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "../commands/UpdateChannelCommand";
import { UpdateChannelGroupCommandInput, UpdateChannelGroupCommandOutput } from "../commands/UpdateChannelGroupCommand";
import {
  UpdateOriginEndpointCommandInput,
  UpdateOriginEndpointCommandOutput,
} from "../commands/UpdateOriginEndpointCommand";
import { MediaPackageV2ServiceException as __BaseException } from "../models/MediaPackageV2ServiceException";
import {
  AccessDeniedException,
  ChannelGroupListConfiguration,
  ChannelListConfiguration,
  ConflictException,
  CreateDashManifestConfiguration,
  CreateHlsManifestConfiguration,
  CreateLowLatencyHlsManifestConfiguration,
  DashPeriodTrigger,
  DashUtcTiming,
  DrmSystem,
  Encryption,
  EncryptionContractConfiguration,
  EncryptionMethod,
  EndpointErrorCondition,
  FilterConfiguration,
  ForceEndpointErrorConfiguration,
  GetDashManifestConfiguration,
  GetHlsManifestConfiguration,
  GetLowLatencyHlsManifestConfiguration,
  InternalServerException,
  OriginEndpointListConfiguration,
  ResourceNotFoundException,
  Scte,
  ScteDash,
  ScteFilter,
  ScteHls,
  Segment,
  ServiceQuotaExceededException,
  SpekeKeyProvider,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateChannelCommand
 */
export const se_CreateChannelCommand = async (
  input: CreateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_CT] ?? generateIdempotencyToken(),
  });
  b.bp("/channelGroup/{ChannelGroupName}/channel");
  b.p("ChannelGroupName", () => input.ChannelGroupName!, "{ChannelGroupName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChannelName: [],
      Description: [],
      InputType: [],
      tags: [, (_) => _json(_), `Tags`],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateChannelGroupCommand
 */
export const se_CreateChannelGroupCommand = async (
  input: CreateChannelGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_CT] ?? generateIdempotencyToken(),
  });
  b.bp("/channelGroup");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChannelGroupName: [],
      Description: [],
      tags: [, (_) => _json(_), `Tags`],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateOriginEndpointCommand
 */
export const se_CreateOriginEndpointCommand = async (
  input: CreateOriginEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_CT] ?? generateIdempotencyToken(),
  });
  b.bp("/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint");
  b.p("ChannelGroupName", () => input.ChannelGroupName!, "{ChannelGroupName}", false);
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ContainerType: [],
      DashManifests: (_) => se_CreateDashManifests(_, context),
      Description: [],
      ForceEndpointErrorConfiguration: (_) => _json(_),
      HlsManifests: (_) => se_CreateHlsManifests(_, context),
      LowLatencyHlsManifests: (_) => se_CreateLowLatencyHlsManifests(_, context),
      OriginEndpointName: [],
      Segment: (_) => _json(_),
      StartoverWindowSeconds: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteChannelCommand
 */
export const se_DeleteChannelCommand = async (
  input: DeleteChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channelGroup/{ChannelGroupName}/channel/{ChannelName}");
  b.p("ChannelGroupName", () => input.ChannelGroupName!, "{ChannelGroupName}", false);
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteChannelGroupCommand
 */
export const se_DeleteChannelGroupCommand = async (
  input: DeleteChannelGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channelGroup/{ChannelGroupName}");
  b.p("ChannelGroupName", () => input.ChannelGroupName!, "{ChannelGroupName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteChannelPolicyCommand
 */
export const se_DeleteChannelPolicyCommand = async (
  input: DeleteChannelPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channelGroup/{ChannelGroupName}/channel/{ChannelName}/policy");
  b.p("ChannelGroupName", () => input.ChannelGroupName!, "{ChannelGroupName}", false);
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteOriginEndpointCommand
 */
export const se_DeleteOriginEndpointCommand = async (
  input: DeleteOriginEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}");
  b.p("ChannelGroupName", () => input.ChannelGroupName!, "{ChannelGroupName}", false);
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  b.p("OriginEndpointName", () => input.OriginEndpointName!, "{OriginEndpointName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteOriginEndpointPolicyCommand
 */
export const se_DeleteOriginEndpointPolicyCommand = async (
  input: DeleteOriginEndpointPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/policy");
  b.p("ChannelGroupName", () => input.ChannelGroupName!, "{ChannelGroupName}", false);
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  b.p("OriginEndpointName", () => input.OriginEndpointName!, "{OriginEndpointName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetChannelCommand
 */
export const se_GetChannelCommand = async (
  input: GetChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channelGroup/{ChannelGroupName}/channel/{ChannelName}");
  b.p("ChannelGroupName", () => input.ChannelGroupName!, "{ChannelGroupName}", false);
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetChannelGroupCommand
 */
export const se_GetChannelGroupCommand = async (
  input: GetChannelGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channelGroup/{ChannelGroupName}");
  b.p("ChannelGroupName", () => input.ChannelGroupName!, "{ChannelGroupName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetChannelPolicyCommand
 */
export const se_GetChannelPolicyCommand = async (
  input: GetChannelPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channelGroup/{ChannelGroupName}/channel/{ChannelName}/policy");
  b.p("ChannelGroupName", () => input.ChannelGroupName!, "{ChannelGroupName}", false);
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetOriginEndpointCommand
 */
export const se_GetOriginEndpointCommand = async (
  input: GetOriginEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}");
  b.p("ChannelGroupName", () => input.ChannelGroupName!, "{ChannelGroupName}", false);
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  b.p("OriginEndpointName", () => input.OriginEndpointName!, "{OriginEndpointName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetOriginEndpointPolicyCommand
 */
export const se_GetOriginEndpointPolicyCommand = async (
  input: GetOriginEndpointPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/policy");
  b.p("ChannelGroupName", () => input.ChannelGroupName!, "{ChannelGroupName}", false);
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  b.p("OriginEndpointName", () => input.OriginEndpointName!, "{OriginEndpointName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListChannelGroupsCommand
 */
export const se_ListChannelGroupsCommand = async (
  input: ListChannelGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channelGroup");
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListChannelsCommand
 */
export const se_ListChannelsCommand = async (
  input: ListChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channelGroup/{ChannelGroupName}/channel");
  b.p("ChannelGroupName", () => input.ChannelGroupName!, "{ChannelGroupName}", false);
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListOriginEndpointsCommand
 */
export const se_ListOriginEndpointsCommand = async (
  input: ListOriginEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint");
  b.p("ChannelGroupName", () => input.ChannelGroupName!, "{ChannelGroupName}", false);
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
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
 * serializeAws_restJson1PutChannelPolicyCommand
 */
export const se_PutChannelPolicyCommand = async (
  input: PutChannelPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/channelGroup/{ChannelGroupName}/channel/{ChannelName}/policy");
  b.p("ChannelGroupName", () => input.ChannelGroupName!, "{ChannelGroupName}", false);
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Policy: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutOriginEndpointPolicyCommand
 */
export const se_PutOriginEndpointPolicyCommand = async (
  input: PutOriginEndpointPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/policy");
  b.p("ChannelGroupName", () => input.ChannelGroupName!, "{ChannelGroupName}", false);
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  b.p("OriginEndpointName", () => input.OriginEndpointName!, "{OriginEndpointName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Policy: [],
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
      tags: [, (_) => _json(_), `Tags`],
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
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    [_tK]: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input[_TK]! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateChannelCommand
 */
export const se_UpdateChannelCommand = async (
  input: UpdateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xauim]: input[_ET]!,
  });
  b.bp("/channelGroup/{ChannelGroupName}/channel/{ChannelName}");
  b.p("ChannelGroupName", () => input.ChannelGroupName!, "{ChannelGroupName}", false);
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateChannelGroupCommand
 */
export const se_UpdateChannelGroupCommand = async (
  input: UpdateChannelGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xauim]: input[_ET]!,
  });
  b.bp("/channelGroup/{ChannelGroupName}");
  b.p("ChannelGroupName", () => input.ChannelGroupName!, "{ChannelGroupName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateOriginEndpointCommand
 */
export const se_UpdateOriginEndpointCommand = async (
  input: UpdateOriginEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xauim]: input[_ET]!,
  });
  b.bp("/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}");
  b.p("ChannelGroupName", () => input.ChannelGroupName!, "{ChannelGroupName}", false);
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  b.p("OriginEndpointName", () => input.OriginEndpointName!, "{OriginEndpointName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ContainerType: [],
      DashManifests: (_) => se_CreateDashManifests(_, context),
      Description: [],
      ForceEndpointErrorConfiguration: (_) => _json(_),
      HlsManifests: (_) => se_CreateHlsManifests(_, context),
      LowLatencyHlsManifests: (_) => se_CreateLowLatencyHlsManifests(_, context),
      Segment: (_) => _json(_),
      StartoverWindowSeconds: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateChannelCommand
 */
export const de_CreateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    ChannelGroupName: __expectString,
    ChannelName: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    ETag: __expectString,
    IngestEndpoints: _json,
    InputType: __expectString,
    ModifiedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateChannelGroupCommand
 */
export const de_CreateChannelGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    ChannelGroupName: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    ETag: __expectString,
    EgressDomain: __expectString,
    ModifiedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateOriginEndpointCommand
 */
export const de_CreateOriginEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOriginEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    ChannelGroupName: __expectString,
    ChannelName: __expectString,
    ContainerType: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DashManifests: (_) => de_GetDashManifests(_, context),
    Description: __expectString,
    ETag: __expectString,
    ForceEndpointErrorConfiguration: _json,
    HlsManifests: (_) => de_GetHlsManifests(_, context),
    LowLatencyHlsManifests: (_) => de_GetLowLatencyHlsManifests(_, context),
    ModifiedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OriginEndpointName: __expectString,
    Segment: _json,
    StartoverWindowSeconds: __expectInt32,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteChannelCommand
 */
export const de_DeleteChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
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
 * deserializeAws_restJson1DeleteChannelGroupCommand
 */
export const de_DeleteChannelGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelGroupCommandOutput> => {
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
 * deserializeAws_restJson1DeleteChannelPolicyCommand
 */
export const de_DeleteChannelPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelPolicyCommandOutput> => {
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
 * deserializeAws_restJson1DeleteOriginEndpointCommand
 */
export const de_DeleteOriginEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOriginEndpointCommandOutput> => {
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
 * deserializeAws_restJson1DeleteOriginEndpointPolicyCommand
 */
export const de_DeleteOriginEndpointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOriginEndpointPolicyCommandOutput> => {
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
 * deserializeAws_restJson1GetChannelCommand
 */
export const de_GetChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    ChannelGroupName: __expectString,
    ChannelName: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    ETag: __expectString,
    IngestEndpoints: _json,
    InputType: __expectString,
    ModifiedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetChannelGroupCommand
 */
export const de_GetChannelGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    ChannelGroupName: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    ETag: __expectString,
    EgressDomain: __expectString,
    ModifiedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetChannelPolicyCommand
 */
export const de_GetChannelPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelGroupName: __expectString,
    ChannelName: __expectString,
    Policy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetOriginEndpointCommand
 */
export const de_GetOriginEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOriginEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    ChannelGroupName: __expectString,
    ChannelName: __expectString,
    ContainerType: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DashManifests: (_) => de_GetDashManifests(_, context),
    Description: __expectString,
    ETag: __expectString,
    ForceEndpointErrorConfiguration: _json,
    HlsManifests: (_) => de_GetHlsManifests(_, context),
    LowLatencyHlsManifests: (_) => de_GetLowLatencyHlsManifests(_, context),
    ModifiedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OriginEndpointName: __expectString,
    Segment: _json,
    StartoverWindowSeconds: __expectInt32,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetOriginEndpointPolicyCommand
 */
export const de_GetOriginEndpointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOriginEndpointPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelGroupName: __expectString,
    ChannelName: __expectString,
    OriginEndpointName: __expectString,
    Policy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelGroupsCommand
 */
export const de_ListChannelGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de_ChannelGroupsList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelsCommand
 */
export const de_ListChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de_ChannelList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListOriginEndpointsCommand
 */
export const de_ListOriginEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOriginEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de_OriginEndpointsList(_, context),
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
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutChannelPolicyCommand
 */
export const de_PutChannelPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutChannelPolicyCommandOutput> => {
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
 * deserializeAws_restJson1PutOriginEndpointPolicyCommand
 */
export const de_PutOriginEndpointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutOriginEndpointPolicyCommandOutput> => {
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
 * deserializeAws_restJson1UpdateChannelCommand
 */
export const de_UpdateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    ChannelGroupName: __expectString,
    ChannelName: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    ETag: __expectString,
    IngestEndpoints: _json,
    InputType: __expectString,
    ModifiedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateChannelGroupCommand
 */
export const de_UpdateChannelGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    ChannelGroupName: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    ETag: __expectString,
    EgressDomain: __expectString,
    ModifiedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateOriginEndpointCommand
 */
export const de_UpdateOriginEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOriginEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    ChannelGroupName: __expectString,
    ChannelName: __expectString,
    ContainerType: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DashManifests: (_) => de_GetDashManifests(_, context),
    Description: __expectString,
    ETag: __expectString,
    ForceEndpointErrorConfiguration: _json,
    HlsManifests: (_) => de_GetHlsManifests(_, context),
    LowLatencyHlsManifests: (_) => de_GetLowLatencyHlsManifests(_, context),
    ModifiedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OriginEndpointName: __expectString,
    Segment: _json,
    StartoverWindowSeconds: __expectInt32,
    Tags: [, _json, `tags`],
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
    case "com.amazonaws.mediapackagev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediapackagev2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.mediapackagev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mediapackagev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.mediapackagev2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.mediapackagev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mediapackagev2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    ConflictExceptionType: __expectString,
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
    ResourceTypeNotFound: __expectString,
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
    ValidationExceptionType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1CreateDashManifestConfiguration
 */
const se_CreateDashManifestConfiguration = (input: CreateDashManifestConfiguration, context: __SerdeContext): any => {
  return take(input, {
    DrmSignaling: [],
    FilterConfiguration: (_) => se_FilterConfiguration(_, context),
    ManifestName: [],
    ManifestWindowSeconds: [],
    MinBufferTimeSeconds: [],
    MinUpdatePeriodSeconds: [],
    PeriodTriggers: _json,
    ScteDash: _json,
    SegmentTemplateFormat: [],
    SuggestedPresentationDelaySeconds: [],
    UtcTiming: _json,
  });
};

/**
 * serializeAws_restJson1CreateDashManifests
 */
const se_CreateDashManifests = (input: CreateDashManifestConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CreateDashManifestConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1CreateHlsManifestConfiguration
 */
const se_CreateHlsManifestConfiguration = (input: CreateHlsManifestConfiguration, context: __SerdeContext): any => {
  return take(input, {
    ChildManifestName: [],
    FilterConfiguration: (_) => se_FilterConfiguration(_, context),
    ManifestName: [],
    ManifestWindowSeconds: [],
    ProgramDateTimeIntervalSeconds: [],
    ScteHls: _json,
  });
};

/**
 * serializeAws_restJson1CreateHlsManifests
 */
const se_CreateHlsManifests = (input: CreateHlsManifestConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CreateHlsManifestConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1CreateLowLatencyHlsManifestConfiguration
 */
const se_CreateLowLatencyHlsManifestConfiguration = (
  input: CreateLowLatencyHlsManifestConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    ChildManifestName: [],
    FilterConfiguration: (_) => se_FilterConfiguration(_, context),
    ManifestName: [],
    ManifestWindowSeconds: [],
    ProgramDateTimeIntervalSeconds: [],
    ScteHls: _json,
  });
};

/**
 * serializeAws_restJson1CreateLowLatencyHlsManifests
 */
const se_CreateLowLatencyHlsManifests = (
  input: CreateLowLatencyHlsManifestConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CreateLowLatencyHlsManifestConfiguration(entry, context);
    });
};

// se_DashPeriodTriggers omitted.

// se_DashUtcTiming omitted.

// se_DrmSystems omitted.

// se_Encryption omitted.

// se_EncryptionContractConfiguration omitted.

// se_EncryptionMethod omitted.

// se_EndpointErrorConditions omitted.

/**
 * serializeAws_restJson1FilterConfiguration
 */
const se_FilterConfiguration = (input: FilterConfiguration, context: __SerdeContext): any => {
  return take(input, {
    End: (_) => _.getTime() / 1_000,
    ManifestFilter: [],
    Start: (_) => _.getTime() / 1_000,
    TimeDelaySeconds: [],
  });
};

// se_ForceEndpointErrorConfiguration omitted.

// se_Scte omitted.

// se_ScteDash omitted.

// se_ScteFilterList omitted.

// se_ScteHls omitted.

// se_Segment omitted.

// se_SpekeKeyProvider omitted.

// se_TagMap omitted.

/**
 * deserializeAws_restJson1ChannelGroupListConfiguration
 */
const de_ChannelGroupListConfiguration = (output: any, context: __SerdeContext): ChannelGroupListConfiguration => {
  return take(output, {
    Arn: __expectString,
    ChannelGroupName: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    ModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1ChannelGroupsList
 */
const de_ChannelGroupsList = (output: any, context: __SerdeContext): ChannelGroupListConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ChannelGroupListConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ChannelList
 */
const de_ChannelList = (output: any, context: __SerdeContext): ChannelListConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ChannelListConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ChannelListConfiguration
 */
const de_ChannelListConfiguration = (output: any, context: __SerdeContext): ChannelListConfiguration => {
  return take(output, {
    Arn: __expectString,
    ChannelGroupName: __expectString,
    ChannelName: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    InputType: __expectString,
    ModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_DashPeriodTriggers omitted.

// de_DashUtcTiming omitted.

// de_DrmSystems omitted.

// de_Encryption omitted.

// de_EncryptionContractConfiguration omitted.

// de_EncryptionMethod omitted.

// de_EndpointErrorConditions omitted.

/**
 * deserializeAws_restJson1FilterConfiguration
 */
const de_FilterConfiguration = (output: any, context: __SerdeContext): FilterConfiguration => {
  return take(output, {
    End: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ManifestFilter: __expectString,
    Start: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TimeDelaySeconds: __expectInt32,
  }) as any;
};

// de_ForceEndpointErrorConfiguration omitted.

/**
 * deserializeAws_restJson1GetDashManifestConfiguration
 */
const de_GetDashManifestConfiguration = (output: any, context: __SerdeContext): GetDashManifestConfiguration => {
  return take(output, {
    DrmSignaling: __expectString,
    FilterConfiguration: (_: any) => de_FilterConfiguration(_, context),
    ManifestName: __expectString,
    ManifestWindowSeconds: __expectInt32,
    MinBufferTimeSeconds: __expectInt32,
    MinUpdatePeriodSeconds: __expectInt32,
    PeriodTriggers: _json,
    ScteDash: _json,
    SegmentTemplateFormat: __expectString,
    SuggestedPresentationDelaySeconds: __expectInt32,
    Url: __expectString,
    UtcTiming: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1GetDashManifests
 */
const de_GetDashManifests = (output: any, context: __SerdeContext): GetDashManifestConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GetDashManifestConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GetHlsManifestConfiguration
 */
const de_GetHlsManifestConfiguration = (output: any, context: __SerdeContext): GetHlsManifestConfiguration => {
  return take(output, {
    ChildManifestName: __expectString,
    FilterConfiguration: (_: any) => de_FilterConfiguration(_, context),
    ManifestName: __expectString,
    ManifestWindowSeconds: __expectInt32,
    ProgramDateTimeIntervalSeconds: __expectInt32,
    ScteHls: _json,
    Url: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1GetHlsManifests
 */
const de_GetHlsManifests = (output: any, context: __SerdeContext): GetHlsManifestConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GetHlsManifestConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GetLowLatencyHlsManifestConfiguration
 */
const de_GetLowLatencyHlsManifestConfiguration = (
  output: any,
  context: __SerdeContext
): GetLowLatencyHlsManifestConfiguration => {
  return take(output, {
    ChildManifestName: __expectString,
    FilterConfiguration: (_: any) => de_FilterConfiguration(_, context),
    ManifestName: __expectString,
    ManifestWindowSeconds: __expectInt32,
    ProgramDateTimeIntervalSeconds: __expectInt32,
    ScteHls: _json,
    Url: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1GetLowLatencyHlsManifests
 */
const de_GetLowLatencyHlsManifests = (
  output: any,
  context: __SerdeContext
): GetLowLatencyHlsManifestConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GetLowLatencyHlsManifestConfiguration(entry, context);
    });
  return retVal;
};

// de_IngestEndpoint omitted.

// de_IngestEndpointList omitted.

// de_ListDashManifestConfiguration omitted.

// de_ListDashManifests omitted.

// de_ListHlsManifestConfiguration omitted.

// de_ListHlsManifests omitted.

// de_ListLowLatencyHlsManifestConfiguration omitted.

// de_ListLowLatencyHlsManifests omitted.

/**
 * deserializeAws_restJson1OriginEndpointListConfiguration
 */
const de_OriginEndpointListConfiguration = (output: any, context: __SerdeContext): OriginEndpointListConfiguration => {
  return take(output, {
    Arn: __expectString,
    ChannelGroupName: __expectString,
    ChannelName: __expectString,
    ContainerType: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DashManifests: _json,
    Description: __expectString,
    ForceEndpointErrorConfiguration: _json,
    HlsManifests: _json,
    LowLatencyHlsManifests: _json,
    ModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OriginEndpointName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1OriginEndpointsList
 */
const de_OriginEndpointsList = (output: any, context: __SerdeContext): OriginEndpointListConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OriginEndpointListConfiguration(entry, context);
    });
  return retVal;
};

// de_Scte omitted.

// de_ScteDash omitted.

// de_ScteFilterList omitted.

// de_ScteHls omitted.

// de_Segment omitted.

// de_SpekeKeyProvider omitted.

// de_TagMap omitted.

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

const _CT = "ClientToken";
const _ET = "ETag";
const _MR = "MaxResults";
const _NT = "NextToken";
const _TK = "TagKeys";
const _mR = "maxResults";
const _nT = "nextToken";
const _tK = "tagKeys";
const _xact = "x-amzn-client-token";
const _xauim = "x-amzn-update-if-match";
