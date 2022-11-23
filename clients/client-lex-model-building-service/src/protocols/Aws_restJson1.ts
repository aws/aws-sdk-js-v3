// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateBotVersionCommandInput, CreateBotVersionCommandOutput } from "../commands/CreateBotVersionCommand";
import {
  CreateIntentVersionCommandInput,
  CreateIntentVersionCommandOutput,
} from "../commands/CreateIntentVersionCommand";
import {
  CreateSlotTypeVersionCommandInput,
  CreateSlotTypeVersionCommandOutput,
} from "../commands/CreateSlotTypeVersionCommand";
import { DeleteBotAliasCommandInput, DeleteBotAliasCommandOutput } from "../commands/DeleteBotAliasCommand";
import {
  DeleteBotChannelAssociationCommandInput,
  DeleteBotChannelAssociationCommandOutput,
} from "../commands/DeleteBotChannelAssociationCommand";
import { DeleteBotCommandInput, DeleteBotCommandOutput } from "../commands/DeleteBotCommand";
import { DeleteBotVersionCommandInput, DeleteBotVersionCommandOutput } from "../commands/DeleteBotVersionCommand";
import { DeleteIntentCommandInput, DeleteIntentCommandOutput } from "../commands/DeleteIntentCommand";
import {
  DeleteIntentVersionCommandInput,
  DeleteIntentVersionCommandOutput,
} from "../commands/DeleteIntentVersionCommand";
import { DeleteSlotTypeCommandInput, DeleteSlotTypeCommandOutput } from "../commands/DeleteSlotTypeCommand";
import {
  DeleteSlotTypeVersionCommandInput,
  DeleteSlotTypeVersionCommandOutput,
} from "../commands/DeleteSlotTypeVersionCommand";
import { DeleteUtterancesCommandInput, DeleteUtterancesCommandOutput } from "../commands/DeleteUtterancesCommand";
import { GetBotAliasCommandInput, GetBotAliasCommandOutput } from "../commands/GetBotAliasCommand";
import { GetBotAliasesCommandInput, GetBotAliasesCommandOutput } from "../commands/GetBotAliasesCommand";
import {
  GetBotChannelAssociationCommandInput,
  GetBotChannelAssociationCommandOutput,
} from "../commands/GetBotChannelAssociationCommand";
import {
  GetBotChannelAssociationsCommandInput,
  GetBotChannelAssociationsCommandOutput,
} from "../commands/GetBotChannelAssociationsCommand";
import { GetBotCommandInput, GetBotCommandOutput } from "../commands/GetBotCommand";
import { GetBotsCommandInput, GetBotsCommandOutput } from "../commands/GetBotsCommand";
import { GetBotVersionsCommandInput, GetBotVersionsCommandOutput } from "../commands/GetBotVersionsCommand";
import { GetBuiltinIntentCommandInput, GetBuiltinIntentCommandOutput } from "../commands/GetBuiltinIntentCommand";
import { GetBuiltinIntentsCommandInput, GetBuiltinIntentsCommandOutput } from "../commands/GetBuiltinIntentsCommand";
import {
  GetBuiltinSlotTypesCommandInput,
  GetBuiltinSlotTypesCommandOutput,
} from "../commands/GetBuiltinSlotTypesCommand";
import { GetExportCommandInput, GetExportCommandOutput } from "../commands/GetExportCommand";
import { GetImportCommandInput, GetImportCommandOutput } from "../commands/GetImportCommand";
import { GetIntentCommandInput, GetIntentCommandOutput } from "../commands/GetIntentCommand";
import { GetIntentsCommandInput, GetIntentsCommandOutput } from "../commands/GetIntentsCommand";
import { GetIntentVersionsCommandInput, GetIntentVersionsCommandOutput } from "../commands/GetIntentVersionsCommand";
import { GetMigrationCommandInput, GetMigrationCommandOutput } from "../commands/GetMigrationCommand";
import { GetMigrationsCommandInput, GetMigrationsCommandOutput } from "../commands/GetMigrationsCommand";
import { GetSlotTypeCommandInput, GetSlotTypeCommandOutput } from "../commands/GetSlotTypeCommand";
import { GetSlotTypesCommandInput, GetSlotTypesCommandOutput } from "../commands/GetSlotTypesCommand";
import {
  GetSlotTypeVersionsCommandInput,
  GetSlotTypeVersionsCommandOutput,
} from "../commands/GetSlotTypeVersionsCommand";
import { GetUtterancesViewCommandInput, GetUtterancesViewCommandOutput } from "../commands/GetUtterancesViewCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutBotAliasCommandInput, PutBotAliasCommandOutput } from "../commands/PutBotAliasCommand";
import { PutBotCommandInput, PutBotCommandOutput } from "../commands/PutBotCommand";
import { PutIntentCommandInput, PutIntentCommandOutput } from "../commands/PutIntentCommand";
import { PutSlotTypeCommandInput, PutSlotTypeCommandOutput } from "../commands/PutSlotTypeCommand";
import { StartImportCommandInput, StartImportCommandOutput } from "../commands/StartImportCommand";
import { StartMigrationCommandInput, StartMigrationCommandOutput } from "../commands/StartMigrationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { LexModelBuildingServiceServiceException as __BaseException } from "../models/LexModelBuildingServiceServiceException";
import {
  AccessDeniedException,
  BadRequestException,
  BotAliasMetadata,
  BotChannelAssociation,
  BotMetadata,
  BuiltinIntentMetadata,
  BuiltinIntentSlot,
  BuiltinSlotTypeMetadata,
  CodeHook,
  ConflictException,
  ConversationLogsRequest,
  ConversationLogsResponse,
  EnumerationValue,
  FollowUpPrompt,
  FulfillmentActivity,
  InputContext,
  Intent,
  IntentMetadata,
  InternalFailureException,
  KendraConfiguration,
  LimitExceededException,
  Locale,
  LogSettingsRequest,
  LogSettingsResponse,
  Message,
  MigrationAlert,
  MigrationSummary,
  NotFoundException,
  OutputContext,
  PreconditionFailedException,
  Prompt,
  ResourceInUseException,
  ResourceReference,
  Slot,
  SlotDefaultValue,
  SlotDefaultValueSpec,
  SlotTypeConfiguration,
  SlotTypeMetadata,
  SlotTypeRegexConfiguration,
  Statement,
  Tag,
  UtteranceData,
  UtteranceList,
} from "../models/models_0";

export const serializeAws_restJson1CreateBotVersionCommand = async (
  input: CreateBotVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{name}/versions";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.checksum != null && { checksum: input.checksum }),
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

export const serializeAws_restJson1CreateIntentVersionCommand = async (
  input: CreateIntentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/intents/{name}/versions";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.checksum != null && { checksum: input.checksum }),
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

export const serializeAws_restJson1CreateSlotTypeVersionCommand = async (
  input: CreateSlotTypeVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/slottypes/{name}/versions";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.checksum != null && { checksum: input.checksum }),
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

export const serializeAws_restJson1DeleteBotCommand = async (
  input: DeleteBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
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

export const serializeAws_restJson1DeleteBotAliasCommand = async (
  input: DeleteBotAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botName}/aliases/{name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botName", () => input.botName!, "{botName}", false);
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

export const serializeAws_restJson1DeleteBotChannelAssociationCommand = async (
  input: DeleteBotChannelAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botName}/aliases/{botAlias}/channels/{name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botName", () => input.botName!, "{botName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botAlias", () => input.botAlias!, "{botAlias}", false);
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

export const serializeAws_restJson1DeleteBotVersionCommand = async (
  input: DeleteBotVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{name}/versions/{version}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "version", () => input.version!, "{version}", false);
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

export const serializeAws_restJson1DeleteIntentCommand = async (
  input: DeleteIntentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/intents/{name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
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

export const serializeAws_restJson1DeleteIntentVersionCommand = async (
  input: DeleteIntentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/intents/{name}/versions/{version}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "version", () => input.version!, "{version}", false);
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

export const serializeAws_restJson1DeleteSlotTypeCommand = async (
  input: DeleteSlotTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/slottypes/{name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
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

export const serializeAws_restJson1DeleteSlotTypeVersionCommand = async (
  input: DeleteSlotTypeVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/slottypes/{name}/version/{version}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "version", () => input.version!, "{version}", false);
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

export const serializeAws_restJson1DeleteUtterancesCommand = async (
  input: DeleteUtterancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botName}/utterances/{userId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "botName", () => input.botName!, "{botName}", false);
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

export const serializeAws_restJson1GetBotCommand = async (
  input: GetBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{name}/versions/{versionOrAlias}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "versionOrAlias",
    () => input.versionOrAlias!,
    "{versionOrAlias}",
    false
  );
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

export const serializeAws_restJson1GetBotAliasCommand = async (
  input: GetBotAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botName}/aliases/{name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botName", () => input.botName!, "{botName}", false);
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

export const serializeAws_restJson1GetBotAliasesCommand = async (
  input: GetBotAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botName}/aliases";
  resolvedPath = __resolvedPath(resolvedPath, input, "botName", () => input.botName!, "{botName}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nameContains: [, input.nameContains!],
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

export const serializeAws_restJson1GetBotChannelAssociationCommand = async (
  input: GetBotChannelAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botName}/aliases/{botAlias}/channels/{name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botName", () => input.botName!, "{botName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botAlias", () => input.botAlias!, "{botAlias}", false);
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

export const serializeAws_restJson1GetBotChannelAssociationsCommand = async (
  input: GetBotChannelAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botName}/aliases/{botAlias}/channels";
  resolvedPath = __resolvedPath(resolvedPath, input, "botName", () => input.botName!, "{botName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botAlias", () => input.botAlias!, "{botAlias}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nameContains: [, input.nameContains!],
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

export const serializeAws_restJson1GetBotsCommand = async (
  input: GetBotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nameContains: [, input.nameContains!],
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

export const serializeAws_restJson1GetBotVersionsCommand = async (
  input: GetBotVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{name}/versions";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
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

export const serializeAws_restJson1GetBuiltinIntentCommand = async (
  input: GetBuiltinIntentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/builtins/intents/{signature}";
  resolvedPath = __resolvedPath(resolvedPath, input, "signature", () => input.signature!, "{signature}", false);
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

export const serializeAws_restJson1GetBuiltinIntentsCommand = async (
  input: GetBuiltinIntentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/builtins/intents";
  const query: any = map({
    locale: [, input.locale!],
    signatureContains: [, input.signatureContains!],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
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

export const serializeAws_restJson1GetBuiltinSlotTypesCommand = async (
  input: GetBuiltinSlotTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/builtins/slottypes";
  const query: any = map({
    locale: [, input.locale!],
    signatureContains: [, input.signatureContains!],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
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

export const serializeAws_restJson1GetExportCommand = async (
  input: GetExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/exports";
  const query: any = map({
    name: [, __expectNonNull(input.name!, `name`)],
    version: [, __expectNonNull(input.version!, `version`)],
    resourceType: [, __expectNonNull(input.resourceType!, `resourceType`)],
    exportType: [, __expectNonNull(input.exportType!, `exportType`)],
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

export const serializeAws_restJson1GetImportCommand = async (
  input: GetImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/imports/{importId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "importId", () => input.importId!, "{importId}", false);
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

export const serializeAws_restJson1GetIntentCommand = async (
  input: GetIntentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/intents/{name}/versions/{version}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "version", () => input.version!, "{version}", false);
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

export const serializeAws_restJson1GetIntentsCommand = async (
  input: GetIntentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/intents";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nameContains: [, input.nameContains!],
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

export const serializeAws_restJson1GetIntentVersionsCommand = async (
  input: GetIntentVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/intents/{name}/versions";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
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

export const serializeAws_restJson1GetMigrationCommand = async (
  input: GetMigrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/migrations/{migrationId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "migrationId", () => input.migrationId!, "{migrationId}", false);
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

export const serializeAws_restJson1GetMigrationsCommand = async (
  input: GetMigrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/migrations";
  const query: any = map({
    sortByAttribute: [, input.sortByAttribute!],
    sortByOrder: [, input.sortByOrder!],
    v1BotNameContains: [, input.v1BotNameContains!],
    migrationStatusEquals: [, input.migrationStatusEquals!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
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

export const serializeAws_restJson1GetSlotTypeCommand = async (
  input: GetSlotTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/slottypes/{name}/versions/{version}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "version", () => input.version!, "{version}", false);
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

export const serializeAws_restJson1GetSlotTypesCommand = async (
  input: GetSlotTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/slottypes";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nameContains: [, input.nameContains!],
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

export const serializeAws_restJson1GetSlotTypeVersionsCommand = async (
  input: GetSlotTypeVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/slottypes/{name}/versions";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
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

export const serializeAws_restJson1GetUtterancesViewCommand = async (
  input: GetUtterancesViewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botName}/utterances";
  resolvedPath = __resolvedPath(resolvedPath, input, "botName", () => input.botName!, "{botName}", false);
  const query: any = map({
    view: [, "aggregation"],
    bot_versions: [
      __expectNonNull(input.botVersions, `botVersions`) != null,
      () => (input.botVersions! || []).map((_entry) => _entry as any),
    ],
    status_type: [, __expectNonNull(input.statusType!, `statusType`)],
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
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

export const serializeAws_restJson1PutBotCommand = async (
  input: PutBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{name}/versions/$LATEST";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.abortStatement != null && {
      abortStatement: serializeAws_restJson1Statement(input.abortStatement, context),
    }),
    ...(input.checksum != null && { checksum: input.checksum }),
    ...(input.childDirected != null && { childDirected: input.childDirected }),
    ...(input.clarificationPrompt != null && {
      clarificationPrompt: serializeAws_restJson1Prompt(input.clarificationPrompt, context),
    }),
    ...(input.createVersion != null && { createVersion: input.createVersion }),
    ...(input.description != null && { description: input.description }),
    ...(input.detectSentiment != null && { detectSentiment: input.detectSentiment }),
    ...(input.enableModelImprovements != null && { enableModelImprovements: input.enableModelImprovements }),
    ...(input.idleSessionTTLInSeconds != null && { idleSessionTTLInSeconds: input.idleSessionTTLInSeconds }),
    ...(input.intents != null && { intents: serializeAws_restJson1IntentList(input.intents, context) }),
    ...(input.locale != null && { locale: input.locale }),
    ...(input.nluIntentConfidenceThreshold != null && {
      nluIntentConfidenceThreshold: __serializeFloat(input.nluIntentConfidenceThreshold),
    }),
    ...(input.processBehavior != null && { processBehavior: input.processBehavior }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
    ...(input.voiceId != null && { voiceId: input.voiceId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutBotAliasCommand = async (
  input: PutBotAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botName}/aliases/{name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botName", () => input.botName!, "{botName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.botVersion != null && { botVersion: input.botVersion }),
    ...(input.checksum != null && { checksum: input.checksum }),
    ...(input.conversationLogs != null && {
      conversationLogs: serializeAws_restJson1ConversationLogsRequest(input.conversationLogs, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutIntentCommand = async (
  input: PutIntentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/intents/{name}/versions/$LATEST";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.checksum != null && { checksum: input.checksum }),
    ...(input.conclusionStatement != null && {
      conclusionStatement: serializeAws_restJson1Statement(input.conclusionStatement, context),
    }),
    ...(input.confirmationPrompt != null && {
      confirmationPrompt: serializeAws_restJson1Prompt(input.confirmationPrompt, context),
    }),
    ...(input.createVersion != null && { createVersion: input.createVersion }),
    ...(input.description != null && { description: input.description }),
    ...(input.dialogCodeHook != null && {
      dialogCodeHook: serializeAws_restJson1CodeHook(input.dialogCodeHook, context),
    }),
    ...(input.followUpPrompt != null && {
      followUpPrompt: serializeAws_restJson1FollowUpPrompt(input.followUpPrompt, context),
    }),
    ...(input.fulfillmentActivity != null && {
      fulfillmentActivity: serializeAws_restJson1FulfillmentActivity(input.fulfillmentActivity, context),
    }),
    ...(input.inputContexts != null && {
      inputContexts: serializeAws_restJson1InputContextList(input.inputContexts, context),
    }),
    ...(input.kendraConfiguration != null && {
      kendraConfiguration: serializeAws_restJson1KendraConfiguration(input.kendraConfiguration, context),
    }),
    ...(input.outputContexts != null && {
      outputContexts: serializeAws_restJson1OutputContextList(input.outputContexts, context),
    }),
    ...(input.parentIntentSignature != null && { parentIntentSignature: input.parentIntentSignature }),
    ...(input.rejectionStatement != null && {
      rejectionStatement: serializeAws_restJson1Statement(input.rejectionStatement, context),
    }),
    ...(input.sampleUtterances != null && {
      sampleUtterances: serializeAws_restJson1IntentUtteranceList(input.sampleUtterances, context),
    }),
    ...(input.slots != null && { slots: serializeAws_restJson1SlotList(input.slots, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutSlotTypeCommand = async (
  input: PutSlotTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/slottypes/{name}/versions/$LATEST";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.checksum != null && { checksum: input.checksum }),
    ...(input.createVersion != null && { createVersion: input.createVersion }),
    ...(input.description != null && { description: input.description }),
    ...(input.enumerationValues != null && {
      enumerationValues: serializeAws_restJson1EnumerationValues(input.enumerationValues, context),
    }),
    ...(input.parentSlotTypeSignature != null && { parentSlotTypeSignature: input.parentSlotTypeSignature }),
    ...(input.slotTypeConfigurations != null && {
      slotTypeConfigurations: serializeAws_restJson1SlotTypeConfigurations(input.slotTypeConfigurations, context),
    }),
    ...(input.valueSelectionStrategy != null && { valueSelectionStrategy: input.valueSelectionStrategy }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1StartImportCommand = async (
  input: StartImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/imports";
  let body: any;
  body = JSON.stringify({
    ...(input.mergeStrategy != null && { mergeStrategy: input.mergeStrategy }),
    ...(input.payload != null && { payload: context.base64Encoder(input.payload) }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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

export const serializeAws_restJson1StartMigrationCommand = async (
  input: StartMigrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/migrations";
  let body: any;
  body = JSON.stringify({
    ...(input.migrationStrategy != null && { migrationStrategy: input.migrationStrategy }),
    ...(input.v1BotName != null && { v1BotName: input.v1BotName }),
    ...(input.v1BotVersion != null && { v1BotVersion: input.v1BotVersion }),
    ...(input.v2BotName != null && { v2BotName: input.v2BotName }),
    ...(input.v2BotRole != null && { v2BotRole: input.v2BotRole }),
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const deserializeAws_restJson1CreateBotVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBotVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.abortStatement != null) {
    contents.abortStatement = deserializeAws_restJson1Statement(data.abortStatement, context);
  }
  if (data.checksum != null) {
    contents.checksum = __expectString(data.checksum);
  }
  if (data.childDirected != null) {
    contents.childDirected = __expectBoolean(data.childDirected);
  }
  if (data.clarificationPrompt != null) {
    contents.clarificationPrompt = deserializeAws_restJson1Prompt(data.clarificationPrompt, context);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.detectSentiment != null) {
    contents.detectSentiment = __expectBoolean(data.detectSentiment);
  }
  if (data.enableModelImprovements != null) {
    contents.enableModelImprovements = __expectBoolean(data.enableModelImprovements);
  }
  if (data.failureReason != null) {
    contents.failureReason = __expectString(data.failureReason);
  }
  if (data.idleSessionTTLInSeconds != null) {
    contents.idleSessionTTLInSeconds = __expectInt32(data.idleSessionTTLInSeconds);
  }
  if (data.intents != null) {
    contents.intents = deserializeAws_restJson1IntentList(data.intents, context);
  }
  if (data.lastUpdatedDate != null) {
    contents.lastUpdatedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDate)));
  }
  if (data.locale != null) {
    contents.locale = __expectString(data.locale);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  if (data.voiceId != null) {
    contents.voiceId = __expectString(data.voiceId);
  }
  return contents;
};

const deserializeAws_restJson1CreateBotVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelbuildingservice#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateIntentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntentVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateIntentVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.checksum != null) {
    contents.checksum = __expectString(data.checksum);
  }
  if (data.conclusionStatement != null) {
    contents.conclusionStatement = deserializeAws_restJson1Statement(data.conclusionStatement, context);
  }
  if (data.confirmationPrompt != null) {
    contents.confirmationPrompt = deserializeAws_restJson1Prompt(data.confirmationPrompt, context);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.dialogCodeHook != null) {
    contents.dialogCodeHook = deserializeAws_restJson1CodeHook(data.dialogCodeHook, context);
  }
  if (data.followUpPrompt != null) {
    contents.followUpPrompt = deserializeAws_restJson1FollowUpPrompt(data.followUpPrompt, context);
  }
  if (data.fulfillmentActivity != null) {
    contents.fulfillmentActivity = deserializeAws_restJson1FulfillmentActivity(data.fulfillmentActivity, context);
  }
  if (data.inputContexts != null) {
    contents.inputContexts = deserializeAws_restJson1InputContextList(data.inputContexts, context);
  }
  if (data.kendraConfiguration != null) {
    contents.kendraConfiguration = deserializeAws_restJson1KendraConfiguration(data.kendraConfiguration, context);
  }
  if (data.lastUpdatedDate != null) {
    contents.lastUpdatedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDate)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.outputContexts != null) {
    contents.outputContexts = deserializeAws_restJson1OutputContextList(data.outputContexts, context);
  }
  if (data.parentIntentSignature != null) {
    contents.parentIntentSignature = __expectString(data.parentIntentSignature);
  }
  if (data.rejectionStatement != null) {
    contents.rejectionStatement = deserializeAws_restJson1Statement(data.rejectionStatement, context);
  }
  if (data.sampleUtterances != null) {
    contents.sampleUtterances = deserializeAws_restJson1IntentUtteranceList(data.sampleUtterances, context);
  }
  if (data.slots != null) {
    contents.slots = deserializeAws_restJson1SlotList(data.slots, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

const deserializeAws_restJson1CreateIntentVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntentVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelbuildingservice#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateSlotTypeVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSlotTypeVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSlotTypeVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.checksum != null) {
    contents.checksum = __expectString(data.checksum);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.enumerationValues != null) {
    contents.enumerationValues = deserializeAws_restJson1EnumerationValues(data.enumerationValues, context);
  }
  if (data.lastUpdatedDate != null) {
    contents.lastUpdatedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDate)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.parentSlotTypeSignature != null) {
    contents.parentSlotTypeSignature = __expectString(data.parentSlotTypeSignature);
  }
  if (data.slotTypeConfigurations != null) {
    contents.slotTypeConfigurations = deserializeAws_restJson1SlotTypeConfigurations(
      data.slotTypeConfigurations,
      context
    );
  }
  if (data.valueSelectionStrategy != null) {
    contents.valueSelectionStrategy = __expectString(data.valueSelectionStrategy);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

const deserializeAws_restJson1CreateSlotTypeVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSlotTypeVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelbuildingservice#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteBotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.lexmodelbuildingservice#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteBotAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotAliasCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBotAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteBotAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.lexmodelbuildingservice#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteBotChannelAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotChannelAssociationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBotChannelAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteBotChannelAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotChannelAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteBotVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotVersionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBotVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteBotVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.lexmodelbuildingservice#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteIntentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteIntentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteIntentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.lexmodelbuildingservice#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteIntentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntentVersionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteIntentVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteIntentVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntentVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.lexmodelbuildingservice#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteSlotTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlotTypeCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSlotTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteSlotTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlotTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.lexmodelbuildingservice#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteSlotTypeVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlotTypeVersionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSlotTypeVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteSlotTypeVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlotTypeVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.lexmodelbuildingservice#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteUtterancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUtterancesCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteUtterancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteUtterancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUtterancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.abortStatement != null) {
    contents.abortStatement = deserializeAws_restJson1Statement(data.abortStatement, context);
  }
  if (data.checksum != null) {
    contents.checksum = __expectString(data.checksum);
  }
  if (data.childDirected != null) {
    contents.childDirected = __expectBoolean(data.childDirected);
  }
  if (data.clarificationPrompt != null) {
    contents.clarificationPrompt = deserializeAws_restJson1Prompt(data.clarificationPrompt, context);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.detectSentiment != null) {
    contents.detectSentiment = __expectBoolean(data.detectSentiment);
  }
  if (data.enableModelImprovements != null) {
    contents.enableModelImprovements = __expectBoolean(data.enableModelImprovements);
  }
  if (data.failureReason != null) {
    contents.failureReason = __expectString(data.failureReason);
  }
  if (data.idleSessionTTLInSeconds != null) {
    contents.idleSessionTTLInSeconds = __expectInt32(data.idleSessionTTLInSeconds);
  }
  if (data.intents != null) {
    contents.intents = deserializeAws_restJson1IntentList(data.intents, context);
  }
  if (data.lastUpdatedDate != null) {
    contents.lastUpdatedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDate)));
  }
  if (data.locale != null) {
    contents.locale = __expectString(data.locale);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.nluIntentConfidenceThreshold != null) {
    contents.nluIntentConfidenceThreshold = __limitedParseDouble(data.nluIntentConfidenceThreshold);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  if (data.voiceId != null) {
    contents.voiceId = __expectString(data.voiceId);
  }
  return contents;
};

const deserializeAws_restJson1GetBotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetBotAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBotAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botName != null) {
    contents.botName = __expectString(data.botName);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.checksum != null) {
    contents.checksum = __expectString(data.checksum);
  }
  if (data.conversationLogs != null) {
    contents.conversationLogs = deserializeAws_restJson1ConversationLogsResponse(data.conversationLogs, context);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.lastUpdatedDate != null) {
    contents.lastUpdatedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDate)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  return contents;
};

const deserializeAws_restJson1GetBotAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetBotAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotAliasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBotAliasesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BotAliases != null) {
    contents.BotAliases = deserializeAws_restJson1BotAliasMetadataList(data.BotAliases, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetBotAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetBotChannelAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotChannelAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBotChannelAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botAlias != null) {
    contents.botAlias = __expectString(data.botAlias);
  }
  if (data.botConfiguration != null) {
    contents.botConfiguration = deserializeAws_restJson1ChannelConfigurationMap(data.botConfiguration, context);
  }
  if (data.botName != null) {
    contents.botName = __expectString(data.botName);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.failureReason != null) {
    contents.failureReason = __expectString(data.failureReason);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.type != null) {
    contents.type = __expectString(data.type);
  }
  return contents;
};

const deserializeAws_restJson1GetBotChannelAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotChannelAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetBotChannelAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotChannelAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBotChannelAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botChannelAssociations != null) {
    contents.botChannelAssociations = deserializeAws_restJson1BotChannelAssociationList(
      data.botChannelAssociations,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetBotChannelAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotChannelAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetBotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBotsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.bots != null) {
    contents.bots = deserializeAws_restJson1BotMetadataList(data.bots, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetBotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetBotVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBotVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.bots != null) {
    contents.bots = deserializeAws_restJson1BotMetadataList(data.bots, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetBotVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetBuiltinIntentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBuiltinIntentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBuiltinIntentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.signature != null) {
    contents.signature = __expectString(data.signature);
  }
  if (data.slots != null) {
    contents.slots = deserializeAws_restJson1BuiltinIntentSlotList(data.slots, context);
  }
  if (data.supportedLocales != null) {
    contents.supportedLocales = deserializeAws_restJson1LocaleList(data.supportedLocales, context);
  }
  return contents;
};

const deserializeAws_restJson1GetBuiltinIntentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBuiltinIntentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetBuiltinIntentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBuiltinIntentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBuiltinIntentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.intents != null) {
    contents.intents = deserializeAws_restJson1BuiltinIntentMetadataList(data.intents, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetBuiltinIntentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBuiltinIntentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetBuiltinSlotTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBuiltinSlotTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBuiltinSlotTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.slotTypes != null) {
    contents.slotTypes = deserializeAws_restJson1BuiltinSlotTypeMetadataList(data.slotTypes, context);
  }
  return contents;
};

const deserializeAws_restJson1GetBuiltinSlotTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBuiltinSlotTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetExportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.exportStatus != null) {
    contents.exportStatus = __expectString(data.exportStatus);
  }
  if (data.exportType != null) {
    contents.exportType = __expectString(data.exportType);
  }
  if (data.failureReason != null) {
    contents.failureReason = __expectString(data.failureReason);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  if (data.url != null) {
    contents.url = __expectString(data.url);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

const deserializeAws_restJson1GetExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetImportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.failureReason != null) {
    contents.failureReason = deserializeAws_restJson1StringList(data.failureReason, context);
  }
  if (data.importId != null) {
    contents.importId = __expectString(data.importId);
  }
  if (data.importStatus != null) {
    contents.importStatus = __expectString(data.importStatus);
  }
  if (data.mergeStrategy != null) {
    contents.mergeStrategy = __expectString(data.mergeStrategy);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  return contents;
};

const deserializeAws_restJson1GetImportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetIntentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIntentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.checksum != null) {
    contents.checksum = __expectString(data.checksum);
  }
  if (data.conclusionStatement != null) {
    contents.conclusionStatement = deserializeAws_restJson1Statement(data.conclusionStatement, context);
  }
  if (data.confirmationPrompt != null) {
    contents.confirmationPrompt = deserializeAws_restJson1Prompt(data.confirmationPrompt, context);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.dialogCodeHook != null) {
    contents.dialogCodeHook = deserializeAws_restJson1CodeHook(data.dialogCodeHook, context);
  }
  if (data.followUpPrompt != null) {
    contents.followUpPrompt = deserializeAws_restJson1FollowUpPrompt(data.followUpPrompt, context);
  }
  if (data.fulfillmentActivity != null) {
    contents.fulfillmentActivity = deserializeAws_restJson1FulfillmentActivity(data.fulfillmentActivity, context);
  }
  if (data.inputContexts != null) {
    contents.inputContexts = deserializeAws_restJson1InputContextList(data.inputContexts, context);
  }
  if (data.kendraConfiguration != null) {
    contents.kendraConfiguration = deserializeAws_restJson1KendraConfiguration(data.kendraConfiguration, context);
  }
  if (data.lastUpdatedDate != null) {
    contents.lastUpdatedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDate)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.outputContexts != null) {
    contents.outputContexts = deserializeAws_restJson1OutputContextList(data.outputContexts, context);
  }
  if (data.parentIntentSignature != null) {
    contents.parentIntentSignature = __expectString(data.parentIntentSignature);
  }
  if (data.rejectionStatement != null) {
    contents.rejectionStatement = deserializeAws_restJson1Statement(data.rejectionStatement, context);
  }
  if (data.sampleUtterances != null) {
    contents.sampleUtterances = deserializeAws_restJson1IntentUtteranceList(data.sampleUtterances, context);
  }
  if (data.slots != null) {
    contents.slots = deserializeAws_restJson1SlotList(data.slots, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

const deserializeAws_restJson1GetIntentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetIntentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIntentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.intents != null) {
    contents.intents = deserializeAws_restJson1IntentMetadataList(data.intents, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetIntentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetIntentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntentVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIntentVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.intents != null) {
    contents.intents = deserializeAws_restJson1IntentMetadataList(data.intents, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetIntentVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntentVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetMigrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMigrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMigrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alerts != null) {
    contents.alerts = deserializeAws_restJson1MigrationAlerts(data.alerts, context);
  }
  if (data.migrationId != null) {
    contents.migrationId = __expectString(data.migrationId);
  }
  if (data.migrationStatus != null) {
    contents.migrationStatus = __expectString(data.migrationStatus);
  }
  if (data.migrationStrategy != null) {
    contents.migrationStrategy = __expectString(data.migrationStrategy);
  }
  if (data.migrationTimestamp != null) {
    contents.migrationTimestamp = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.migrationTimestamp)));
  }
  if (data.v1BotLocale != null) {
    contents.v1BotLocale = __expectString(data.v1BotLocale);
  }
  if (data.v1BotName != null) {
    contents.v1BotName = __expectString(data.v1BotName);
  }
  if (data.v1BotVersion != null) {
    contents.v1BotVersion = __expectString(data.v1BotVersion);
  }
  if (data.v2BotId != null) {
    contents.v2BotId = __expectString(data.v2BotId);
  }
  if (data.v2BotRole != null) {
    contents.v2BotRole = __expectString(data.v2BotRole);
  }
  return contents;
};

const deserializeAws_restJson1GetMigrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMigrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetMigrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMigrationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMigrationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.migrationSummaries != null) {
    contents.migrationSummaries = deserializeAws_restJson1MigrationSummaryList(data.migrationSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetMigrationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMigrationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSlotTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSlotTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSlotTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.checksum != null) {
    contents.checksum = __expectString(data.checksum);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.enumerationValues != null) {
    contents.enumerationValues = deserializeAws_restJson1EnumerationValues(data.enumerationValues, context);
  }
  if (data.lastUpdatedDate != null) {
    contents.lastUpdatedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDate)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.parentSlotTypeSignature != null) {
    contents.parentSlotTypeSignature = __expectString(data.parentSlotTypeSignature);
  }
  if (data.slotTypeConfigurations != null) {
    contents.slotTypeConfigurations = deserializeAws_restJson1SlotTypeConfigurations(
      data.slotTypeConfigurations,
      context
    );
  }
  if (data.valueSelectionStrategy != null) {
    contents.valueSelectionStrategy = __expectString(data.valueSelectionStrategy);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

const deserializeAws_restJson1GetSlotTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSlotTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSlotTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSlotTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSlotTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.slotTypes != null) {
    contents.slotTypes = deserializeAws_restJson1SlotTypeMetadataList(data.slotTypes, context);
  }
  return contents;
};

const deserializeAws_restJson1GetSlotTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSlotTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSlotTypeVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSlotTypeVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSlotTypeVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.slotTypes != null) {
    contents.slotTypes = deserializeAws_restJson1SlotTypeMetadataList(data.slotTypes, context);
  }
  return contents;
};

const deserializeAws_restJson1GetSlotTypeVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSlotTypeVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetUtterancesViewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUtterancesViewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUtterancesViewCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botName != null) {
    contents.botName = __expectString(data.botName);
  }
  if (data.utterances != null) {
    contents.utterances = deserializeAws_restJson1ListsOfUtterances(data.utterances, context);
  }
  return contents;
};

const deserializeAws_restJson1GetUtterancesViewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUtterancesViewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagList(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.abortStatement != null) {
    contents.abortStatement = deserializeAws_restJson1Statement(data.abortStatement, context);
  }
  if (data.checksum != null) {
    contents.checksum = __expectString(data.checksum);
  }
  if (data.childDirected != null) {
    contents.childDirected = __expectBoolean(data.childDirected);
  }
  if (data.clarificationPrompt != null) {
    contents.clarificationPrompt = deserializeAws_restJson1Prompt(data.clarificationPrompt, context);
  }
  if (data.createVersion != null) {
    contents.createVersion = __expectBoolean(data.createVersion);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.detectSentiment != null) {
    contents.detectSentiment = __expectBoolean(data.detectSentiment);
  }
  if (data.enableModelImprovements != null) {
    contents.enableModelImprovements = __expectBoolean(data.enableModelImprovements);
  }
  if (data.failureReason != null) {
    contents.failureReason = __expectString(data.failureReason);
  }
  if (data.idleSessionTTLInSeconds != null) {
    contents.idleSessionTTLInSeconds = __expectInt32(data.idleSessionTTLInSeconds);
  }
  if (data.intents != null) {
    contents.intents = deserializeAws_restJson1IntentList(data.intents, context);
  }
  if (data.lastUpdatedDate != null) {
    contents.lastUpdatedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDate)));
  }
  if (data.locale != null) {
    contents.locale = __expectString(data.locale);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.nluIntentConfidenceThreshold != null) {
    contents.nluIntentConfidenceThreshold = __limitedParseDouble(data.nluIntentConfidenceThreshold);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagList(data.tags, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  if (data.voiceId != null) {
    contents.voiceId = __expectString(data.voiceId);
  }
  return contents;
};

const deserializeAws_restJson1PutBotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelbuildingservice#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutBotAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBotAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutBotAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botName != null) {
    contents.botName = __expectString(data.botName);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.checksum != null) {
    contents.checksum = __expectString(data.checksum);
  }
  if (data.conversationLogs != null) {
    contents.conversationLogs = deserializeAws_restJson1ConversationLogsResponse(data.conversationLogs, context);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.lastUpdatedDate != null) {
    contents.lastUpdatedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDate)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagList(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1PutBotAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBotAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelbuildingservice#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutIntentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutIntentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutIntentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.checksum != null) {
    contents.checksum = __expectString(data.checksum);
  }
  if (data.conclusionStatement != null) {
    contents.conclusionStatement = deserializeAws_restJson1Statement(data.conclusionStatement, context);
  }
  if (data.confirmationPrompt != null) {
    contents.confirmationPrompt = deserializeAws_restJson1Prompt(data.confirmationPrompt, context);
  }
  if (data.createVersion != null) {
    contents.createVersion = __expectBoolean(data.createVersion);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.dialogCodeHook != null) {
    contents.dialogCodeHook = deserializeAws_restJson1CodeHook(data.dialogCodeHook, context);
  }
  if (data.followUpPrompt != null) {
    contents.followUpPrompt = deserializeAws_restJson1FollowUpPrompt(data.followUpPrompt, context);
  }
  if (data.fulfillmentActivity != null) {
    contents.fulfillmentActivity = deserializeAws_restJson1FulfillmentActivity(data.fulfillmentActivity, context);
  }
  if (data.inputContexts != null) {
    contents.inputContexts = deserializeAws_restJson1InputContextList(data.inputContexts, context);
  }
  if (data.kendraConfiguration != null) {
    contents.kendraConfiguration = deserializeAws_restJson1KendraConfiguration(data.kendraConfiguration, context);
  }
  if (data.lastUpdatedDate != null) {
    contents.lastUpdatedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDate)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.outputContexts != null) {
    contents.outputContexts = deserializeAws_restJson1OutputContextList(data.outputContexts, context);
  }
  if (data.parentIntentSignature != null) {
    contents.parentIntentSignature = __expectString(data.parentIntentSignature);
  }
  if (data.rejectionStatement != null) {
    contents.rejectionStatement = deserializeAws_restJson1Statement(data.rejectionStatement, context);
  }
  if (data.sampleUtterances != null) {
    contents.sampleUtterances = deserializeAws_restJson1IntentUtteranceList(data.sampleUtterances, context);
  }
  if (data.slots != null) {
    contents.slots = deserializeAws_restJson1SlotList(data.slots, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

const deserializeAws_restJson1PutIntentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutIntentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelbuildingservice#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutSlotTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSlotTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutSlotTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.checksum != null) {
    contents.checksum = __expectString(data.checksum);
  }
  if (data.createVersion != null) {
    contents.createVersion = __expectBoolean(data.createVersion);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.enumerationValues != null) {
    contents.enumerationValues = deserializeAws_restJson1EnumerationValues(data.enumerationValues, context);
  }
  if (data.lastUpdatedDate != null) {
    contents.lastUpdatedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDate)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.parentSlotTypeSignature != null) {
    contents.parentSlotTypeSignature = __expectString(data.parentSlotTypeSignature);
  }
  if (data.slotTypeConfigurations != null) {
    contents.slotTypeConfigurations = deserializeAws_restJson1SlotTypeConfigurations(
      data.slotTypeConfigurations,
      context
    );
  }
  if (data.valueSelectionStrategy != null) {
    contents.valueSelectionStrategy = __expectString(data.valueSelectionStrategy);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

const deserializeAws_restJson1PutSlotTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSlotTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelbuildingservice#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartImportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.importId != null) {
    contents.importId = __expectString(data.importId);
  }
  if (data.importStatus != null) {
    contents.importStatus = __expectString(data.importStatus);
  }
  if (data.mergeStrategy != null) {
    contents.mergeStrategy = __expectString(data.mergeStrategy);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagList(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1StartImportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartMigrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMigrationCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartMigrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.migrationId != null) {
    contents.migrationId = __expectString(data.migrationId);
  }
  if (data.migrationStrategy != null) {
    contents.migrationStrategy = __expectString(data.migrationStrategy);
  }
  if (data.migrationTimestamp != null) {
    contents.migrationTimestamp = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.migrationTimestamp)));
  }
  if (data.v1BotLocale != null) {
    contents.v1BotLocale = __expectString(data.v1BotLocale);
  }
  if (data.v1BotName != null) {
    contents.v1BotName = __expectString(data.v1BotName);
  }
  if (data.v1BotVersion != null) {
    contents.v1BotVersion = __expectString(data.v1BotVersion);
  }
  if (data.v2BotId != null) {
    contents.v2BotId = __expectString(data.v2BotId);
  }
  if (data.v2BotRole != null) {
    contents.v2BotRole = __expectString(data.v2BotRole);
  }
  return contents;
};

const deserializeAws_restJson1StartMigrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMigrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lexmodelbuildingservice#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new BadRequestException({
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

const deserializeAws_restJson1InternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({
    retryAfterSeconds: [, parsedOutput.headers["retry-after"]],
  });
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1PreconditionFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PreconditionFailedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new PreconditionFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.exampleReference != null) {
    contents.exampleReference = deserializeAws_restJson1ResourceReference(data.exampleReference, context);
  }
  if (data.referenceType != null) {
    contents.referenceType = __expectString(data.referenceType);
  }
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1CodeHook = (input: CodeHook, context: __SerdeContext): any => {
  return {
    ...(input.messageVersion != null && { messageVersion: input.messageVersion }),
    ...(input.uri != null && { uri: input.uri }),
  };
};

const serializeAws_restJson1ConversationLogsRequest = (
  input: ConversationLogsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.iamRoleArn != null && { iamRoleArn: input.iamRoleArn }),
    ...(input.logSettings != null && {
      logSettings: serializeAws_restJson1LogSettingsRequestList(input.logSettings, context),
    }),
  };
};

const serializeAws_restJson1EnumerationValue = (input: EnumerationValue, context: __SerdeContext): any => {
  return {
    ...(input.synonyms != null && { synonyms: serializeAws_restJson1SynonymList(input.synonyms, context) }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1EnumerationValues = (input: EnumerationValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1EnumerationValue(entry, context);
    });
};

const serializeAws_restJson1FollowUpPrompt = (input: FollowUpPrompt, context: __SerdeContext): any => {
  return {
    ...(input.prompt != null && { prompt: serializeAws_restJson1Prompt(input.prompt, context) }),
    ...(input.rejectionStatement != null && {
      rejectionStatement: serializeAws_restJson1Statement(input.rejectionStatement, context),
    }),
  };
};

const serializeAws_restJson1FulfillmentActivity = (input: FulfillmentActivity, context: __SerdeContext): any => {
  return {
    ...(input.codeHook != null && { codeHook: serializeAws_restJson1CodeHook(input.codeHook, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_restJson1InputContext = (input: InputContext, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_restJson1InputContextList = (input: InputContext[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1InputContext(entry, context);
    });
};

const serializeAws_restJson1Intent = (input: Intent, context: __SerdeContext): any => {
  return {
    ...(input.intentName != null && { intentName: input.intentName }),
    ...(input.intentVersion != null && { intentVersion: input.intentVersion }),
  };
};

const serializeAws_restJson1IntentList = (input: Intent[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Intent(entry, context);
    });
};

const serializeAws_restJson1IntentUtteranceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1KendraConfiguration = (input: KendraConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.kendraIndex != null && { kendraIndex: input.kendraIndex }),
    ...(input.queryFilterString != null && { queryFilterString: input.queryFilterString }),
    ...(input.role != null && { role: input.role }),
  };
};

const serializeAws_restJson1LogSettingsRequest = (input: LogSettingsRequest, context: __SerdeContext): any => {
  return {
    ...(input.destination != null && { destination: input.destination }),
    ...(input.kmsKeyArn != null && { kmsKeyArn: input.kmsKeyArn }),
    ...(input.logType != null && { logType: input.logType }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_restJson1LogSettingsRequestList = (input: LogSettingsRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1LogSettingsRequest(entry, context);
    });
};

const serializeAws_restJson1Message = (input: Message, context: __SerdeContext): any => {
  return {
    ...(input.content != null && { content: input.content }),
    ...(input.contentType != null && { contentType: input.contentType }),
    ...(input.groupNumber != null && { groupNumber: input.groupNumber }),
  };
};

const serializeAws_restJson1MessageList = (input: Message[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Message(entry, context);
    });
};

const serializeAws_restJson1OutputContext = (input: OutputContext, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.timeToLiveInSeconds != null && { timeToLiveInSeconds: input.timeToLiveInSeconds }),
    ...(input.turnsToLive != null && { turnsToLive: input.turnsToLive }),
  };
};

const serializeAws_restJson1OutputContextList = (input: OutputContext[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1OutputContext(entry, context);
    });
};

const serializeAws_restJson1Prompt = (input: Prompt, context: __SerdeContext): any => {
  return {
    ...(input.maxAttempts != null && { maxAttempts: input.maxAttempts }),
    ...(input.messages != null && { messages: serializeAws_restJson1MessageList(input.messages, context) }),
    ...(input.responseCard != null && { responseCard: input.responseCard }),
  };
};

const serializeAws_restJson1Slot = (input: Slot, context: __SerdeContext): any => {
  return {
    ...(input.defaultValueSpec != null && {
      defaultValueSpec: serializeAws_restJson1SlotDefaultValueSpec(input.defaultValueSpec, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.obfuscationSetting != null && { obfuscationSetting: input.obfuscationSetting }),
    ...(input.priority != null && { priority: input.priority }),
    ...(input.responseCard != null && { responseCard: input.responseCard }),
    ...(input.sampleUtterances != null && {
      sampleUtterances: serializeAws_restJson1SlotUtteranceList(input.sampleUtterances, context),
    }),
    ...(input.slotConstraint != null && { slotConstraint: input.slotConstraint }),
    ...(input.slotType != null && { slotType: input.slotType }),
    ...(input.slotTypeVersion != null && { slotTypeVersion: input.slotTypeVersion }),
    ...(input.valueElicitationPrompt != null && {
      valueElicitationPrompt: serializeAws_restJson1Prompt(input.valueElicitationPrompt, context),
    }),
  };
};

const serializeAws_restJson1SlotDefaultValue = (input: SlotDefaultValue, context: __SerdeContext): any => {
  return {
    ...(input.defaultValue != null && { defaultValue: input.defaultValue }),
  };
};

const serializeAws_restJson1SlotDefaultValueList = (input: SlotDefaultValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SlotDefaultValue(entry, context);
    });
};

const serializeAws_restJson1SlotDefaultValueSpec = (input: SlotDefaultValueSpec, context: __SerdeContext): any => {
  return {
    ...(input.defaultValueList != null && {
      defaultValueList: serializeAws_restJson1SlotDefaultValueList(input.defaultValueList, context),
    }),
  };
};

const serializeAws_restJson1SlotList = (input: Slot[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Slot(entry, context);
    });
};

const serializeAws_restJson1SlotTypeConfiguration = (input: SlotTypeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.regexConfiguration != null && {
      regexConfiguration: serializeAws_restJson1SlotTypeRegexConfiguration(input.regexConfiguration, context),
    }),
  };
};

const serializeAws_restJson1SlotTypeConfigurations = (input: SlotTypeConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SlotTypeConfiguration(entry, context);
    });
};

const serializeAws_restJson1SlotTypeRegexConfiguration = (
  input: SlotTypeRegexConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.pattern != null && { pattern: input.pattern }),
  };
};

const serializeAws_restJson1SlotUtteranceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Statement = (input: Statement, context: __SerdeContext): any => {
  return {
    ...(input.messages != null && { messages: serializeAws_restJson1MessageList(input.messages, context) }),
    ...(input.responseCard != null && { responseCard: input.responseCard }),
  };
};

const serializeAws_restJson1SynonymList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const deserializeAws_restJson1BotAliasMetadata = (output: any, context: __SerdeContext): BotAliasMetadata => {
  return {
    botName: __expectString(output.botName),
    botVersion: __expectString(output.botVersion),
    checksum: __expectString(output.checksum),
    conversationLogs:
      output.conversationLogs != null
        ? deserializeAws_restJson1ConversationLogsResponse(output.conversationLogs, context)
        : undefined,
    createdDate:
      output.createdDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdDate)))
        : undefined,
    description: __expectString(output.description),
    lastUpdatedDate:
      output.lastUpdatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDate)))
        : undefined,
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1BotAliasMetadataList = (output: any, context: __SerdeContext): BotAliasMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BotAliasMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BotChannelAssociation = (output: any, context: __SerdeContext): BotChannelAssociation => {
  return {
    botAlias: __expectString(output.botAlias),
    botConfiguration:
      output.botConfiguration != null
        ? deserializeAws_restJson1ChannelConfigurationMap(output.botConfiguration, context)
        : undefined,
    botName: __expectString(output.botName),
    createdDate:
      output.createdDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdDate)))
        : undefined,
    description: __expectString(output.description),
    failureReason: __expectString(output.failureReason),
    name: __expectString(output.name),
    status: __expectString(output.status),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1BotChannelAssociationList = (
  output: any,
  context: __SerdeContext
): BotChannelAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BotChannelAssociation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BotMetadata = (output: any, context: __SerdeContext): BotMetadata => {
  return {
    createdDate:
      output.createdDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdDate)))
        : undefined,
    description: __expectString(output.description),
    lastUpdatedDate:
      output.lastUpdatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDate)))
        : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1BotMetadataList = (output: any, context: __SerdeContext): BotMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BotMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BuiltinIntentMetadata = (output: any, context: __SerdeContext): BuiltinIntentMetadata => {
  return {
    signature: __expectString(output.signature),
    supportedLocales:
      output.supportedLocales != null
        ? deserializeAws_restJson1LocaleList(output.supportedLocales, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BuiltinIntentMetadataList = (
  output: any,
  context: __SerdeContext
): BuiltinIntentMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BuiltinIntentMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BuiltinIntentSlot = (output: any, context: __SerdeContext): BuiltinIntentSlot => {
  return {
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1BuiltinIntentSlotList = (output: any, context: __SerdeContext): BuiltinIntentSlot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BuiltinIntentSlot(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BuiltinSlotTypeMetadata = (
  output: any,
  context: __SerdeContext
): BuiltinSlotTypeMetadata => {
  return {
    signature: __expectString(output.signature),
    supportedLocales:
      output.supportedLocales != null
        ? deserializeAws_restJson1LocaleList(output.supportedLocales, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BuiltinSlotTypeMetadataList = (
  output: any,
  context: __SerdeContext
): BuiltinSlotTypeMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BuiltinSlotTypeMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChannelConfigurationMap = (
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

const deserializeAws_restJson1CodeHook = (output: any, context: __SerdeContext): CodeHook => {
  return {
    messageVersion: __expectString(output.messageVersion),
    uri: __expectString(output.uri),
  } as any;
};

const deserializeAws_restJson1ConversationLogsResponse = (
  output: any,
  context: __SerdeContext
): ConversationLogsResponse => {
  return {
    iamRoleArn: __expectString(output.iamRoleArn),
    logSettings:
      output.logSettings != null
        ? deserializeAws_restJson1LogSettingsResponseList(output.logSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EnumerationValue = (output: any, context: __SerdeContext): EnumerationValue => {
  return {
    synonyms: output.synonyms != null ? deserializeAws_restJson1SynonymList(output.synonyms, context) : undefined,
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1EnumerationValues = (output: any, context: __SerdeContext): EnumerationValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EnumerationValue(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FollowUpPrompt = (output: any, context: __SerdeContext): FollowUpPrompt => {
  return {
    prompt: output.prompt != null ? deserializeAws_restJson1Prompt(output.prompt, context) : undefined,
    rejectionStatement:
      output.rejectionStatement != null
        ? deserializeAws_restJson1Statement(output.rejectionStatement, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FulfillmentActivity = (output: any, context: __SerdeContext): FulfillmentActivity => {
  return {
    codeHook: output.codeHook != null ? deserializeAws_restJson1CodeHook(output.codeHook, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1InputContext = (output: any, context: __SerdeContext): InputContext => {
  return {
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1InputContextList = (output: any, context: __SerdeContext): InputContext[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InputContext(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Intent = (output: any, context: __SerdeContext): Intent => {
  return {
    intentName: __expectString(output.intentName),
    intentVersion: __expectString(output.intentVersion),
  } as any;
};

const deserializeAws_restJson1IntentList = (output: any, context: __SerdeContext): Intent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Intent(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1IntentMetadata = (output: any, context: __SerdeContext): IntentMetadata => {
  return {
    createdDate:
      output.createdDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdDate)))
        : undefined,
    description: __expectString(output.description),
    lastUpdatedDate:
      output.lastUpdatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDate)))
        : undefined,
    name: __expectString(output.name),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1IntentMetadataList = (output: any, context: __SerdeContext): IntentMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IntentMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1IntentUtteranceList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1KendraConfiguration = (output: any, context: __SerdeContext): KendraConfiguration => {
  return {
    kendraIndex: __expectString(output.kendraIndex),
    queryFilterString: __expectString(output.queryFilterString),
    role: __expectString(output.role),
  } as any;
};

const deserializeAws_restJson1ListOfUtterance = (output: any, context: __SerdeContext): UtteranceData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UtteranceData(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListsOfUtterances = (output: any, context: __SerdeContext): UtteranceList[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UtteranceList(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LocaleList = (output: any, context: __SerdeContext): (Locale | string)[] => {
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

const deserializeAws_restJson1LogSettingsResponse = (output: any, context: __SerdeContext): LogSettingsResponse => {
  return {
    destination: __expectString(output.destination),
    kmsKeyArn: __expectString(output.kmsKeyArn),
    logType: __expectString(output.logType),
    resourceArn: __expectString(output.resourceArn),
    resourcePrefix: __expectString(output.resourcePrefix),
  } as any;
};

const deserializeAws_restJson1LogSettingsResponseList = (
  output: any,
  context: __SerdeContext
): LogSettingsResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LogSettingsResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Message = (output: any, context: __SerdeContext): Message => {
  return {
    content: __expectString(output.content),
    contentType: __expectString(output.contentType),
    groupNumber: __expectInt32(output.groupNumber),
  } as any;
};

const deserializeAws_restJson1MessageList = (output: any, context: __SerdeContext): Message[] => {
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

const deserializeAws_restJson1MigrationAlert = (output: any, context: __SerdeContext): MigrationAlert => {
  return {
    details:
      output.details != null ? deserializeAws_restJson1MigrationAlertDetails(output.details, context) : undefined,
    message: __expectString(output.message),
    referenceURLs:
      output.referenceURLs != null
        ? deserializeAws_restJson1MigrationAlertReferenceURLs(output.referenceURLs, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1MigrationAlertDetails = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1MigrationAlertReferenceURLs = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1MigrationAlerts = (output: any, context: __SerdeContext): MigrationAlert[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MigrationAlert(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MigrationSummary = (output: any, context: __SerdeContext): MigrationSummary => {
  return {
    migrationId: __expectString(output.migrationId),
    migrationStatus: __expectString(output.migrationStatus),
    migrationStrategy: __expectString(output.migrationStrategy),
    migrationTimestamp:
      output.migrationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.migrationTimestamp)))
        : undefined,
    v1BotLocale: __expectString(output.v1BotLocale),
    v1BotName: __expectString(output.v1BotName),
    v1BotVersion: __expectString(output.v1BotVersion),
    v2BotId: __expectString(output.v2BotId),
    v2BotRole: __expectString(output.v2BotRole),
  } as any;
};

const deserializeAws_restJson1MigrationSummaryList = (output: any, context: __SerdeContext): MigrationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MigrationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1OutputContext = (output: any, context: __SerdeContext): OutputContext => {
  return {
    name: __expectString(output.name),
    timeToLiveInSeconds: __expectInt32(output.timeToLiveInSeconds),
    turnsToLive: __expectInt32(output.turnsToLive),
  } as any;
};

const deserializeAws_restJson1OutputContextList = (output: any, context: __SerdeContext): OutputContext[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1OutputContext(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Prompt = (output: any, context: __SerdeContext): Prompt => {
  return {
    maxAttempts: __expectInt32(output.maxAttempts),
    messages: output.messages != null ? deserializeAws_restJson1MessageList(output.messages, context) : undefined,
    responseCard: __expectString(output.responseCard),
  } as any;
};

const deserializeAws_restJson1ResourceReference = (output: any, context: __SerdeContext): ResourceReference => {
  return {
    name: __expectString(output.name),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1Slot = (output: any, context: __SerdeContext): Slot => {
  return {
    defaultValueSpec:
      output.defaultValueSpec != null
        ? deserializeAws_restJson1SlotDefaultValueSpec(output.defaultValueSpec, context)
        : undefined,
    description: __expectString(output.description),
    name: __expectString(output.name),
    obfuscationSetting: __expectString(output.obfuscationSetting),
    priority: __expectInt32(output.priority),
    responseCard: __expectString(output.responseCard),
    sampleUtterances:
      output.sampleUtterances != null
        ? deserializeAws_restJson1SlotUtteranceList(output.sampleUtterances, context)
        : undefined,
    slotConstraint: __expectString(output.slotConstraint),
    slotType: __expectString(output.slotType),
    slotTypeVersion: __expectString(output.slotTypeVersion),
    valueElicitationPrompt:
      output.valueElicitationPrompt != null
        ? deserializeAws_restJson1Prompt(output.valueElicitationPrompt, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SlotDefaultValue = (output: any, context: __SerdeContext): SlotDefaultValue => {
  return {
    defaultValue: __expectString(output.defaultValue),
  } as any;
};

const deserializeAws_restJson1SlotDefaultValueList = (output: any, context: __SerdeContext): SlotDefaultValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SlotDefaultValue(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SlotDefaultValueSpec = (output: any, context: __SerdeContext): SlotDefaultValueSpec => {
  return {
    defaultValueList:
      output.defaultValueList != null
        ? deserializeAws_restJson1SlotDefaultValueList(output.defaultValueList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SlotList = (output: any, context: __SerdeContext): Slot[] => {
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

const deserializeAws_restJson1SlotTypeConfiguration = (output: any, context: __SerdeContext): SlotTypeConfiguration => {
  return {
    regexConfiguration:
      output.regexConfiguration != null
        ? deserializeAws_restJson1SlotTypeRegexConfiguration(output.regexConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SlotTypeConfigurations = (
  output: any,
  context: __SerdeContext
): SlotTypeConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SlotTypeConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SlotTypeMetadata = (output: any, context: __SerdeContext): SlotTypeMetadata => {
  return {
    createdDate:
      output.createdDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdDate)))
        : undefined,
    description: __expectString(output.description),
    lastUpdatedDate:
      output.lastUpdatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDate)))
        : undefined,
    name: __expectString(output.name),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1SlotTypeMetadataList = (output: any, context: __SerdeContext): SlotTypeMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SlotTypeMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SlotTypeRegexConfiguration = (
  output: any,
  context: __SerdeContext
): SlotTypeRegexConfiguration => {
  return {
    pattern: __expectString(output.pattern),
  } as any;
};

const deserializeAws_restJson1SlotUtteranceList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Statement = (output: any, context: __SerdeContext): Statement => {
  return {
    messages: output.messages != null ? deserializeAws_restJson1MessageList(output.messages, context) : undefined,
    responseCard: __expectString(output.responseCard),
  } as any;
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

const deserializeAws_restJson1SynonymList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UtteranceData = (output: any, context: __SerdeContext): UtteranceData => {
  return {
    count: __expectInt32(output.count),
    distinctUsers: __expectInt32(output.distinctUsers),
    firstUtteredDate:
      output.firstUtteredDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.firstUtteredDate)))
        : undefined,
    lastUtteredDate:
      output.lastUtteredDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUtteredDate)))
        : undefined,
    utteranceString: __expectString(output.utteranceString),
  } as any;
};

const deserializeAws_restJson1UtteranceList = (output: any, context: __SerdeContext): UtteranceList => {
  return {
    botVersion: __expectString(output.botVersion),
    utterances:
      output.utterances != null ? deserializeAws_restJson1ListOfUtterance(output.utterances, context) : undefined,
  } as any;
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
