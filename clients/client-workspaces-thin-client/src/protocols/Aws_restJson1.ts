// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@smithy/protocol-http";
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

import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "../commands/CreateEnvironmentCommand";
import { DeleteDeviceCommandInput, DeleteDeviceCommandOutput } from "../commands/DeleteDeviceCommand";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "../commands/DeleteEnvironmentCommand";
import { DeregisterDeviceCommandInput, DeregisterDeviceCommandOutput } from "../commands/DeregisterDeviceCommand";
import { GetDeviceCommandInput, GetDeviceCommandOutput } from "../commands/GetDeviceCommand";
import { GetEnvironmentCommandInput, GetEnvironmentCommandOutput } from "../commands/GetEnvironmentCommand";
import { GetSoftwareSetCommandInput, GetSoftwareSetCommandOutput } from "../commands/GetSoftwareSetCommand";
import { ListDevicesCommandInput, ListDevicesCommandOutput } from "../commands/ListDevicesCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "../commands/ListEnvironmentsCommand";
import { ListSoftwareSetsCommandInput, ListSoftwareSetsCommandOutput } from "../commands/ListSoftwareSetsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateDeviceCommandInput, UpdateDeviceCommandOutput } from "../commands/UpdateDeviceCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "../commands/UpdateEnvironmentCommand";
import { UpdateSoftwareSetCommandInput, UpdateSoftwareSetCommandOutput } from "../commands/UpdateSoftwareSetCommand";
import {
  AccessDeniedException,
  ConflictException,
  DayOfWeek,
  Device,
  DeviceSummary,
  Environment,
  EnvironmentSummary,
  InternalServerException,
  MaintenanceWindow,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  SoftwareSet,
  SoftwareSetSummary,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";
import { WorkSpacesThinClientServiceException as __BaseException } from "../models/WorkSpacesThinClientServiceException";

/**
 * serializeAws_restJson1CreateEnvironmentCommand
 */
export const se_CreateEnvironmentCommand = async (
  input: CreateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/environments");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      desiredSoftwareSetId: [],
      desktopArn: [],
      desktopEndpoint: [],
      deviceCreationTags: (_) => _json(_),
      kmsKeyArn: [],
      maintenanceWindow: (_) => _json(_),
      name: [],
      softwareSetUpdateMode: [],
      softwareSetUpdateSchedule: [],
      tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDeviceCommand
 */
export const se_DeleteDeviceCommand = async (
  input: DeleteDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/devices/{id}");
  b.p("id", () => input.id!, "{id}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEnvironmentCommand
 */
export const se_DeleteEnvironmentCommand = async (
  input: DeleteEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/environments/{id}");
  b.p("id", () => input.id!, "{id}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeregisterDeviceCommand
 */
export const se_DeregisterDeviceCommand = async (
  input: DeregisterDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/deregister-device/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      targetDeviceStatus: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDeviceCommand
 */
export const se_GetDeviceCommand = async (
  input: GetDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/devices/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEnvironmentCommand
 */
export const se_GetEnvironmentCommand = async (
  input: GetEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/environments/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSoftwareSetCommand
 */
export const se_GetSoftwareSetCommand = async (
  input: GetSoftwareSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/softwaresets/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDevicesCommand
 */
export const se_ListDevicesCommand = async (
  input: ListDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/devices");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEnvironmentsCommand
 */
export const se_ListEnvironmentsCommand = async (
  input: ListEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/environments");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSoftwareSetsCommand
 */
export const se_ListSoftwareSetsCommand = async (
  input: ListSoftwareSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/softwaresets");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
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
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
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
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
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
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDeviceCommand
 */
export const se_UpdateDeviceCommand = async (
  input: UpdateDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/devices/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      desiredSoftwareSetId: [],
      name: [],
      softwareSetUpdateSchedule: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEnvironmentCommand
 */
export const se_UpdateEnvironmentCommand = async (
  input: UpdateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/environments/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      desiredSoftwareSetId: [],
      desktopArn: [],
      desktopEndpoint: [],
      deviceCreationTags: (_) => _json(_),
      maintenanceWindow: (_) => _json(_),
      name: [],
      softwareSetUpdateMode: [],
      softwareSetUpdateSchedule: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSoftwareSetCommand
 */
export const se_UpdateSoftwareSetCommand = async (
  input: UpdateSoftwareSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/softwaresets/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      validationStatus: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateEnvironmentCommand
 */
export const de_CreateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    environment: (_) => de_EnvironmentSummary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDeviceCommand
 */
export const de_DeleteDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceCommandOutput> => {
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
 * deserializeAws_restJson1DeleteEnvironmentCommand
 */
export const de_DeleteEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> => {
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
 * deserializeAws_restJson1DeregisterDeviceCommand
 */
export const de_DeregisterDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterDeviceCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetDeviceCommand
 */
export const de_GetDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    device: (_) => de_Device(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEnvironmentCommand
 */
export const de_GetEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    environment: (_) => de_Environment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSoftwareSetCommand
 */
export const de_GetSoftwareSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSoftwareSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    softwareSet: (_) => de_SoftwareSet(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDevicesCommand
 */
export const de_ListDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    devices: (_) => de_DeviceList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEnvironmentsCommand
 */
export const de_ListEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    environments: (_) => de_EnvironmentList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSoftwareSetsCommand
 */
export const de_ListSoftwareSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSoftwareSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    softwareSets: (_) => de_SoftwareSetList(_, context),
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
 * deserializeAws_restJson1UpdateDeviceCommand
 */
export const de_UpdateDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    device: (_) => de_DeviceSummary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEnvironmentCommand
 */
export const de_UpdateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    environment: (_) => de_EnvironmentSummary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSoftwareSetCommand
 */
export const de_UpdateSoftwareSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSoftwareSetCommandOutput> => {
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
    case "com.amazonaws.workspacesthinclient#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesthinclient#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesthinclient#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesthinclient#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.workspacesthinclient#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesthinclient#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesthinclient#ValidationException":
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

// se_DayOfWeekList omitted.

// se_DeviceCreationTagsMap omitted.

// se_MaintenanceWindow omitted.

// se_TagsMap omitted.

// de_DayOfWeekList omitted.

/**
 * deserializeAws_restJson1Device
 */
const de_Device = (output: any, context: __SerdeContext): Device => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    currentSoftwareSetId: __expectString,
    currentSoftwareSetVersion: __expectString,
    desiredSoftwareSetId: __expectString,
    environmentId: __expectString,
    id: __expectString,
    kmsKeyArn: __expectString,
    lastConnectedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastPostureAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUserId: __expectString,
    model: __expectString,
    name: __expectString,
    pendingSoftwareSetId: __expectString,
    pendingSoftwareSetVersion: __expectString,
    serialNumber: __expectString,
    softwareSetComplianceStatus: __expectString,
    softwareSetUpdateSchedule: __expectString,
    softwareSetUpdateStatus: __expectString,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_DeviceCreationTagsMap omitted.

/**
 * deserializeAws_restJson1DeviceList
 */
const de_DeviceList = (output: any, context: __SerdeContext): DeviceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeviceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DeviceSummary
 */
const de_DeviceSummary = (output: any, context: __SerdeContext): DeviceSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    currentSoftwareSetId: __expectString,
    desiredSoftwareSetId: __expectString,
    environmentId: __expectString,
    id: __expectString,
    lastConnectedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastPostureAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUserId: __expectString,
    model: __expectString,
    name: __expectString,
    pendingSoftwareSetId: __expectString,
    serialNumber: __expectString,
    softwareSetUpdateSchedule: __expectString,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1Environment
 */
const de_Environment = (output: any, context: __SerdeContext): Environment => {
  return take(output, {
    activationCode: __expectString,
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    desiredSoftwareSetId: __expectString,
    desktopArn: __expectString,
    desktopEndpoint: __expectString,
    desktopType: __expectString,
    deviceCreationTags: _json,
    id: __expectString,
    kmsKeyArn: __expectString,
    maintenanceWindow: _json,
    name: __expectString,
    pendingSoftwareSetId: __expectString,
    pendingSoftwareSetVersion: __expectString,
    registeredDevicesCount: __expectInt32,
    softwareSetComplianceStatus: __expectString,
    softwareSetUpdateMode: __expectString,
    softwareSetUpdateSchedule: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1EnvironmentList
 */
const de_EnvironmentList = (output: any, context: __SerdeContext): EnvironmentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnvironmentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EnvironmentSummary
 */
const de_EnvironmentSummary = (output: any, context: __SerdeContext): EnvironmentSummary => {
  return take(output, {
    activationCode: __expectString,
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    desiredSoftwareSetId: __expectString,
    desktopArn: __expectString,
    desktopEndpoint: __expectString,
    desktopType: __expectString,
    id: __expectString,
    maintenanceWindow: _json,
    name: __expectString,
    pendingSoftwareSetId: __expectString,
    softwareSetUpdateMode: __expectString,
    softwareSetUpdateSchedule: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_MaintenanceWindow omitted.

// de_Software omitted.

// de_SoftwareList omitted.

/**
 * deserializeAws_restJson1SoftwareSet
 */
const de_SoftwareSet = (output: any, context: __SerdeContext): SoftwareSet => {
  return take(output, {
    arn: __expectString,
    id: __expectString,
    releasedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    software: _json,
    supportedUntil: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    validationStatus: __expectString,
    version: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SoftwareSetList
 */
const de_SoftwareSetList = (output: any, context: __SerdeContext): SoftwareSetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SoftwareSetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SoftwareSetSummary
 */
const de_SoftwareSetSummary = (output: any, context: __SerdeContext): SoftwareSetSummary => {
  return take(output, {
    arn: __expectString,
    id: __expectString,
    releasedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    supportedUntil: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    validationStatus: __expectString,
    version: __expectString,
  }) as any;
};

// de_TagsMap omitted.

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

const _cT = "clientToken";
const _mR = "maxResults";
const _nT = "nextToken";
const _rAS = "retryAfterSeconds";
const _ra = "retry-after";
const _tK = "tagKeys";
