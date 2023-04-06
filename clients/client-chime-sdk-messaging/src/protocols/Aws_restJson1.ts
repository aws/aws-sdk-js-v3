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
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AssociateChannelFlowCommandInput,
  AssociateChannelFlowCommandOutput,
} from "../commands/AssociateChannelFlowCommand";
import {
  BatchCreateChannelMembershipCommandInput,
  BatchCreateChannelMembershipCommandOutput,
} from "../commands/BatchCreateChannelMembershipCommand";
import {
  ChannelFlowCallbackCommandInput,
  ChannelFlowCallbackCommandOutput,
} from "../commands/ChannelFlowCallbackCommand";
import { CreateChannelBanCommandInput, CreateChannelBanCommandOutput } from "../commands/CreateChannelBanCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "../commands/CreateChannelCommand";
import { CreateChannelFlowCommandInput, CreateChannelFlowCommandOutput } from "../commands/CreateChannelFlowCommand";
import {
  CreateChannelMembershipCommandInput,
  CreateChannelMembershipCommandOutput,
} from "../commands/CreateChannelMembershipCommand";
import {
  CreateChannelModeratorCommandInput,
  CreateChannelModeratorCommandOutput,
} from "../commands/CreateChannelModeratorCommand";
import { DeleteChannelBanCommandInput, DeleteChannelBanCommandOutput } from "../commands/DeleteChannelBanCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "../commands/DeleteChannelCommand";
import { DeleteChannelFlowCommandInput, DeleteChannelFlowCommandOutput } from "../commands/DeleteChannelFlowCommand";
import {
  DeleteChannelMembershipCommandInput,
  DeleteChannelMembershipCommandOutput,
} from "../commands/DeleteChannelMembershipCommand";
import {
  DeleteChannelMessageCommandInput,
  DeleteChannelMessageCommandOutput,
} from "../commands/DeleteChannelMessageCommand";
import {
  DeleteChannelModeratorCommandInput,
  DeleteChannelModeratorCommandOutput,
} from "../commands/DeleteChannelModeratorCommand";
import {
  DeleteMessagingStreamingConfigurationsCommandInput,
  DeleteMessagingStreamingConfigurationsCommandOutput,
} from "../commands/DeleteMessagingStreamingConfigurationsCommand";
import { DescribeChannelBanCommandInput, DescribeChannelBanCommandOutput } from "../commands/DescribeChannelBanCommand";
import { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "../commands/DescribeChannelCommand";
import {
  DescribeChannelFlowCommandInput,
  DescribeChannelFlowCommandOutput,
} from "../commands/DescribeChannelFlowCommand";
import {
  DescribeChannelMembershipCommandInput,
  DescribeChannelMembershipCommandOutput,
} from "../commands/DescribeChannelMembershipCommand";
import {
  DescribeChannelMembershipForAppInstanceUserCommandInput,
  DescribeChannelMembershipForAppInstanceUserCommandOutput,
} from "../commands/DescribeChannelMembershipForAppInstanceUserCommand";
import {
  DescribeChannelModeratedByAppInstanceUserCommandInput,
  DescribeChannelModeratedByAppInstanceUserCommandOutput,
} from "../commands/DescribeChannelModeratedByAppInstanceUserCommand";
import {
  DescribeChannelModeratorCommandInput,
  DescribeChannelModeratorCommandOutput,
} from "../commands/DescribeChannelModeratorCommand";
import {
  DisassociateChannelFlowCommandInput,
  DisassociateChannelFlowCommandOutput,
} from "../commands/DisassociateChannelFlowCommand";
import {
  GetChannelMembershipPreferencesCommandInput,
  GetChannelMembershipPreferencesCommandOutput,
} from "../commands/GetChannelMembershipPreferencesCommand";
import { GetChannelMessageCommandInput, GetChannelMessageCommandOutput } from "../commands/GetChannelMessageCommand";
import {
  GetChannelMessageStatusCommandInput,
  GetChannelMessageStatusCommandOutput,
} from "../commands/GetChannelMessageStatusCommand";
import {
  GetMessagingSessionEndpointCommandInput,
  GetMessagingSessionEndpointCommandOutput,
} from "../commands/GetMessagingSessionEndpointCommand";
import {
  GetMessagingStreamingConfigurationsCommandInput,
  GetMessagingStreamingConfigurationsCommandOutput,
} from "../commands/GetMessagingStreamingConfigurationsCommand";
import { ListChannelBansCommandInput, ListChannelBansCommandOutput } from "../commands/ListChannelBansCommand";
import { ListChannelFlowsCommandInput, ListChannelFlowsCommandOutput } from "../commands/ListChannelFlowsCommand";
import {
  ListChannelMembershipsCommandInput,
  ListChannelMembershipsCommandOutput,
} from "../commands/ListChannelMembershipsCommand";
import {
  ListChannelMembershipsForAppInstanceUserCommandInput,
  ListChannelMembershipsForAppInstanceUserCommandOutput,
} from "../commands/ListChannelMembershipsForAppInstanceUserCommand";
import {
  ListChannelMessagesCommandInput,
  ListChannelMessagesCommandOutput,
} from "../commands/ListChannelMessagesCommand";
import {
  ListChannelModeratorsCommandInput,
  ListChannelModeratorsCommandOutput,
} from "../commands/ListChannelModeratorsCommand";
import {
  ListChannelsAssociatedWithChannelFlowCommandInput,
  ListChannelsAssociatedWithChannelFlowCommandOutput,
} from "../commands/ListChannelsAssociatedWithChannelFlowCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "../commands/ListChannelsCommand";
import {
  ListChannelsModeratedByAppInstanceUserCommandInput,
  ListChannelsModeratedByAppInstanceUserCommandOutput,
} from "../commands/ListChannelsModeratedByAppInstanceUserCommand";
import { ListSubChannelsCommandInput, ListSubChannelsCommandOutput } from "../commands/ListSubChannelsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PutChannelExpirationSettingsCommandInput,
  PutChannelExpirationSettingsCommandOutput,
} from "../commands/PutChannelExpirationSettingsCommand";
import {
  PutChannelMembershipPreferencesCommandInput,
  PutChannelMembershipPreferencesCommandOutput,
} from "../commands/PutChannelMembershipPreferencesCommand";
import {
  PutMessagingStreamingConfigurationsCommandInput,
  PutMessagingStreamingConfigurationsCommandOutput,
} from "../commands/PutMessagingStreamingConfigurationsCommand";
import {
  RedactChannelMessageCommandInput,
  RedactChannelMessageCommandOutput,
} from "../commands/RedactChannelMessageCommand";
import { SearchChannelsCommandInput, SearchChannelsCommandOutput } from "../commands/SearchChannelsCommand";
import { SendChannelMessageCommandInput, SendChannelMessageCommandOutput } from "../commands/SendChannelMessageCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "../commands/UpdateChannelCommand";
import { UpdateChannelFlowCommandInput, UpdateChannelFlowCommandOutput } from "../commands/UpdateChannelFlowCommand";
import {
  UpdateChannelMessageCommandInput,
  UpdateChannelMessageCommandOutput,
} from "../commands/UpdateChannelMessageCommand";
import {
  UpdateChannelReadMarkerCommandInput,
  UpdateChannelReadMarkerCommandOutput,
} from "../commands/UpdateChannelReadMarkerCommand";
import { ChimeSDKMessagingServiceException as __BaseException } from "../models/ChimeSDKMessagingServiceException";
import {
  AppInstanceUserMembershipSummary,
  BadRequestException,
  BatchChannelMemberships,
  BatchCreateChannelMembershipError,
  Channel,
  ChannelAssociatedWithFlowSummary,
  ChannelBan,
  ChannelBanSummary,
  ChannelFlow,
  ChannelFlowSummary,
  ChannelMembership,
  ChannelMembershipForAppInstanceUserSummary,
  ChannelMembershipPreferences,
  ChannelMembershipSummary,
  ChannelMessage,
  ChannelMessageCallback,
  ChannelMessageStatusStructure,
  ChannelMessageSummary,
  ChannelModeratedByAppInstanceUserSummary,
  ChannelModerator,
  ChannelModeratorSummary,
  ChannelSummary,
  ConflictException,
  ElasticChannelConfiguration,
  ExpirationSettings,
  ForbiddenException,
  Identity,
  LambdaConfiguration,
  MessageAttributeValue,
  MessagingSessionEndpoint,
  NotFoundException,
  Processor,
  ProcessorConfiguration,
  PushNotificationConfiguration,
  PushNotificationPreferences,
  ResourceLimitExceededException,
  SearchField,
  ServiceFailureException,
  ServiceUnavailableException,
  StreamingConfiguration,
  SubChannelSummary,
  Tag,
  ThrottledClientException,
  UnauthorizedClientException,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateChannelFlowCommand
 */
export const se_AssociateChannelFlowCommand = async (
  input: AssociateChannelFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/channel-flow";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelFlowArn != null && { ChannelFlowArn: input.ChannelFlowArn }),
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

/**
 * serializeAws_restJson1BatchCreateChannelMembershipCommand
 */
export const se_BatchCreateChannelMembershipCommand = async (
  input: BatchCreateChannelMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/memberships";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    operation: [, "batch-create"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.MemberArns != null && { MemberArns: se_MemberArns(input.MemberArns, context) }),
    ...(input.SubChannelId != null && { SubChannelId: input.SubChannelId }),
    ...(input.Type != null && { Type: input.Type }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ChannelFlowCallbackCommand
 */
export const se_ChannelFlowCallbackCommand = async (
  input: ChannelFlowCallbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    operation: [, "channel-flow-callback"],
  });
  let body: any;
  body = JSON.stringify({
    CallbackId: input.CallbackId ?? generateIdempotencyToken(),
    ...(input.ChannelMessage != null && { ChannelMessage: se_ChannelMessageCallback(input.ChannelMessage, context) }),
    ...(input.DeleteResource != null && { DeleteResource: input.DeleteResource }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1CreateChannelCommand
 */
export const se_CreateChannelCommand = async (
  input: CreateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
  let body: any;
  body = JSON.stringify({
    ...(input.AppInstanceArn != null && { AppInstanceArn: input.AppInstanceArn }),
    ...(input.ChannelId != null && { ChannelId: input.ChannelId }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.ElasticChannelConfiguration != null && {
      ElasticChannelConfiguration: se_ElasticChannelConfiguration(input.ElasticChannelConfiguration, context),
    }),
    ...(input.ExpirationSettings != null && {
      ExpirationSettings: se_ExpirationSettings(input.ExpirationSettings, context),
    }),
    ...(input.MemberArns != null && { MemberArns: se_ChannelMemberArns(input.MemberArns, context) }),
    ...(input.Metadata != null && { Metadata: input.Metadata }),
    ...(input.Mode != null && { Mode: input.Mode }),
    ...(input.ModeratorArns != null && { ModeratorArns: se_ChannelModeratorArns(input.ModeratorArns, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Privacy != null && { Privacy: input.Privacy }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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
 * serializeAws_restJson1CreateChannelBanCommand
 */
export const se_CreateChannelBanCommand = async (
  input: CreateChannelBanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/bans";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.MemberArn != null && { MemberArn: input.MemberArn }),
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
 * serializeAws_restJson1CreateChannelFlowCommand
 */
export const se_CreateChannelFlowCommand = async (
  input: CreateChannelFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel-flows";
  let body: any;
  body = JSON.stringify({
    ...(input.AppInstanceArn != null && { AppInstanceArn: input.AppInstanceArn }),
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Processors != null && { Processors: se_ProcessorList(input.Processors, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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
 * serializeAws_restJson1CreateChannelMembershipCommand
 */
export const se_CreateChannelMembershipCommand = async (
  input: CreateChannelMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/memberships";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.MemberArn != null && { MemberArn: input.MemberArn }),
    ...(input.SubChannelId != null && { SubChannelId: input.SubChannelId }),
    ...(input.Type != null && { Type: input.Type }),
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
 * serializeAws_restJson1CreateChannelModeratorCommand
 */
export const se_CreateChannelModeratorCommand = async (
  input: CreateChannelModeratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/moderators";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelModeratorArn != null && { ChannelModeratorArn: input.ChannelModeratorArn }),
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
 * serializeAws_restJson1DeleteChannelCommand
 */
export const se_DeleteChannelCommand = async (
  input: DeleteChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    "sub-channel-id": [, input.SubChannelId!],
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

/**
 * serializeAws_restJson1DeleteChannelBanCommand
 */
export const se_DeleteChannelBanCommand = async (
  input: DeleteChannelBanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/bans/{MemberArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MemberArn", () => input.MemberArn!, "{MemberArn}", false);
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
 * serializeAws_restJson1DeleteChannelFlowCommand
 */
export const se_DeleteChannelFlowCommand = async (
  input: DeleteChannelFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel-flows/{ChannelFlowArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ChannelFlowArn",
    () => input.ChannelFlowArn!,
    "{ChannelFlowArn}",
    false
  );
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
 * serializeAws_restJson1DeleteChannelMembershipCommand
 */
export const se_DeleteChannelMembershipCommand = async (
  input: DeleteChannelMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/memberships/{MemberArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MemberArn", () => input.MemberArn!, "{MemberArn}", false);
  const query: any = map({
    "sub-channel-id": [, input.SubChannelId!],
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

/**
 * serializeAws_restJson1DeleteChannelMessageCommand
 */
export const se_DeleteChannelMessageCommand = async (
  input: DeleteChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/messages/{MessageId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MessageId", () => input.MessageId!, "{MessageId}", false);
  const query: any = map({
    "sub-channel-id": [, input.SubChannelId!],
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

/**
 * serializeAws_restJson1DeleteChannelModeratorCommand
 */
export const se_DeleteChannelModeratorCommand = async (
  input: DeleteChannelModeratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/moderators/{ChannelModeratorArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ChannelModeratorArn",
    () => input.ChannelModeratorArn!,
    "{ChannelModeratorArn}",
    false
  );
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
 * serializeAws_restJson1DeleteMessagingStreamingConfigurationsCommand
 */
export const se_DeleteMessagingStreamingConfigurationsCommand = async (
  input: DeleteMessagingStreamingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app-instances/{AppInstanceArn}/streaming-configurations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceArn",
    () => input.AppInstanceArn!,
    "{AppInstanceArn}",
    false
  );
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
 * serializeAws_restJson1DescribeChannelCommand
 */
export const se_DescribeChannelCommand = async (
  input: DescribeChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
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
 * serializeAws_restJson1DescribeChannelBanCommand
 */
export const se_DescribeChannelBanCommand = async (
  input: DescribeChannelBanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/bans/{MemberArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MemberArn", () => input.MemberArn!, "{MemberArn}", false);
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
 * serializeAws_restJson1DescribeChannelFlowCommand
 */
export const se_DescribeChannelFlowCommand = async (
  input: DescribeChannelFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel-flows/{ChannelFlowArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ChannelFlowArn",
    () => input.ChannelFlowArn!,
    "{ChannelFlowArn}",
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

/**
 * serializeAws_restJson1DescribeChannelMembershipCommand
 */
export const se_DescribeChannelMembershipCommand = async (
  input: DescribeChannelMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/memberships/{MemberArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MemberArn", () => input.MemberArn!, "{MemberArn}", false);
  const query: any = map({
    "sub-channel-id": [, input.SubChannelId!],
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

/**
 * serializeAws_restJson1DescribeChannelMembershipForAppInstanceUserCommand
 */
export const se_DescribeChannelMembershipForAppInstanceUserCommand = async (
  input: DescribeChannelMembershipForAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    scope: [, "app-instance-user-membership"],
    "app-instance-user-arn": [, __expectNonNull(input.AppInstanceUserArn!, `AppInstanceUserArn`)],
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

/**
 * serializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommand
 */
export const se_DescribeChannelModeratedByAppInstanceUserCommand = async (
  input: DescribeChannelModeratedByAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    scope: [, "app-instance-user-moderated-channel"],
    "app-instance-user-arn": [, __expectNonNull(input.AppInstanceUserArn!, `AppInstanceUserArn`)],
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

/**
 * serializeAws_restJson1DescribeChannelModeratorCommand
 */
export const se_DescribeChannelModeratorCommand = async (
  input: DescribeChannelModeratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/moderators/{ChannelModeratorArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ChannelModeratorArn",
    () => input.ChannelModeratorArn!,
    "{ChannelModeratorArn}",
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

/**
 * serializeAws_restJson1DisassociateChannelFlowCommand
 */
export const se_DisassociateChannelFlowCommand = async (
  input: DisassociateChannelFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/channel-flow/{ChannelFlowArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ChannelFlowArn",
    () => input.ChannelFlowArn!,
    "{ChannelFlowArn}",
    false
  );
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
 * serializeAws_restJson1GetChannelMembershipPreferencesCommand
 */
export const se_GetChannelMembershipPreferencesCommand = async (
  input: GetChannelMembershipPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/memberships/{MemberArn}/preferences";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MemberArn", () => input.MemberArn!, "{MemberArn}", false);
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
 * serializeAws_restJson1GetChannelMessageCommand
 */
export const se_GetChannelMessageCommand = async (
  input: GetChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/messages/{MessageId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MessageId", () => input.MessageId!, "{MessageId}", false);
  const query: any = map({
    "sub-channel-id": [, input.SubChannelId!],
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

/**
 * serializeAws_restJson1GetChannelMessageStatusCommand
 */
export const se_GetChannelMessageStatusCommand = async (
  input: GetChannelMessageStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/messages/{MessageId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MessageId", () => input.MessageId!, "{MessageId}", false);
  const query: any = map({
    scope: [, "message-status"],
    "sub-channel-id": [, input.SubChannelId!],
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

/**
 * serializeAws_restJson1GetMessagingSessionEndpointCommand
 */
export const se_GetMessagingSessionEndpointCommand = async (
  input: GetMessagingSessionEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/endpoints/messaging-session";
  let body: any;
  body = "";
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
 * serializeAws_restJson1GetMessagingStreamingConfigurationsCommand
 */
export const se_GetMessagingStreamingConfigurationsCommand = async (
  input: GetMessagingStreamingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app-instances/{AppInstanceArn}/streaming-configurations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceArn",
    () => input.AppInstanceArn!,
    "{AppInstanceArn}",
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

/**
 * serializeAws_restJson1ListChannelBansCommand
 */
export const se_ListChannelBansCommand = async (
  input: ListChannelBansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/bans";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
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

/**
 * serializeAws_restJson1ListChannelFlowsCommand
 */
export const se_ListChannelFlowsCommand = async (
  input: ListChannelFlowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel-flows";
  const query: any = map({
    "app-instance-arn": [, __expectNonNull(input.AppInstanceArn!, `AppInstanceArn`)],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
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

/**
 * serializeAws_restJson1ListChannelMembershipsCommand
 */
export const se_ListChannelMembershipsCommand = async (
  input: ListChannelMembershipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/memberships";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    type: [, input.Type!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
    "sub-channel-id": [, input.SubChannelId!],
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

/**
 * serializeAws_restJson1ListChannelMembershipsForAppInstanceUserCommand
 */
export const se_ListChannelMembershipsForAppInstanceUserCommand = async (
  input: ListChannelMembershipsForAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
  const query: any = map({
    scope: [, "app-instance-user-memberships"],
    "app-instance-user-arn": [, input.AppInstanceUserArn!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
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

/**
 * serializeAws_restJson1ListChannelMessagesCommand
 */
export const se_ListChannelMessagesCommand = async (
  input: ListChannelMessagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/messages";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    "sort-order": [, input.SortOrder!],
    "not-before": [
      () => input.NotBefore !== void 0,
      () => (input.NotBefore!.toISOString().split(".")[0] + "Z").toString(),
    ],
    "not-after": [
      () => input.NotAfter !== void 0,
      () => (input.NotAfter!.toISOString().split(".")[0] + "Z").toString(),
    ],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
    "sub-channel-id": [, input.SubChannelId!],
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

/**
 * serializeAws_restJson1ListChannelModeratorsCommand
 */
export const se_ListChannelModeratorsCommand = async (
  input: ListChannelModeratorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/moderators";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
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

/**
 * serializeAws_restJson1ListChannelsCommand
 */
export const se_ListChannelsCommand = async (
  input: ListChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
  const query: any = map({
    "app-instance-arn": [, __expectNonNull(input.AppInstanceArn!, `AppInstanceArn`)],
    privacy: [, input.Privacy!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
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

/**
 * serializeAws_restJson1ListChannelsAssociatedWithChannelFlowCommand
 */
export const se_ListChannelsAssociatedWithChannelFlowCommand = async (
  input: ListChannelsAssociatedWithChannelFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
  const query: any = map({
    scope: [, "channel-flow-associations"],
    "channel-flow-arn": [, __expectNonNull(input.ChannelFlowArn!, `ChannelFlowArn`)],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
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

/**
 * serializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommand
 */
export const se_ListChannelsModeratedByAppInstanceUserCommand = async (
  input: ListChannelsModeratedByAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
  const query: any = map({
    scope: [, "app-instance-user-moderated-channels"],
    "app-instance-user-arn": [, input.AppInstanceUserArn!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
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

/**
 * serializeAws_restJson1ListSubChannelsCommand
 */
export const se_ListSubChannelsCommand = async (
  input: ListSubChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/subchannels";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
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

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    arn: [, __expectNonNull(input.ResourceARN!, `ResourceARN`)],
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

/**
 * serializeAws_restJson1PutChannelExpirationSettingsCommand
 */
export const se_PutChannelExpirationSettingsCommand = async (
  input: PutChannelExpirationSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/expiration-settings";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ExpirationSettings != null && {
      ExpirationSettings: se_ExpirationSettings(input.ExpirationSettings, context),
    }),
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

/**
 * serializeAws_restJson1PutChannelMembershipPreferencesCommand
 */
export const se_PutChannelMembershipPreferencesCommand = async (
  input: PutChannelMembershipPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/memberships/{MemberArn}/preferences";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MemberArn", () => input.MemberArn!, "{MemberArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Preferences != null && { Preferences: se_ChannelMembershipPreferences(input.Preferences, context) }),
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

/**
 * serializeAws_restJson1PutMessagingStreamingConfigurationsCommand
 */
export const se_PutMessagingStreamingConfigurationsCommand = async (
  input: PutMessagingStreamingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app-instances/{AppInstanceArn}/streaming-configurations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceArn",
    () => input.AppInstanceArn!,
    "{AppInstanceArn}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.StreamingConfigurations != null && {
      StreamingConfigurations: se_StreamingConfigurationList(input.StreamingConfigurations, context),
    }),
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

/**
 * serializeAws_restJson1RedactChannelMessageCommand
 */
export const se_RedactChannelMessageCommand = async (
  input: RedactChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/messages/{MessageId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MessageId", () => input.MessageId!, "{MessageId}", false);
  const query: any = map({
    operation: [, "redact"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.SubChannelId != null && { SubChannelId: input.SubChannelId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1SearchChannelsCommand
 */
export const se_SearchChannelsCommand = async (
  input: SearchChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
  const query: any = map({
    operation: [, "search"],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.Fields != null && { Fields: se_SearchFields(input.Fields, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1SendChannelMessageCommand
 */
export const se_SendChannelMessageCommand = async (
  input: SendChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/messages";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Content != null && { Content: input.Content }),
    ...(input.ContentType != null && { ContentType: input.ContentType }),
    ...(input.MessageAttributes != null && {
      MessageAttributes: se_MessageAttributeMap(input.MessageAttributes, context),
    }),
    ...(input.Metadata != null && { Metadata: input.Metadata }),
    ...(input.Persistence != null && { Persistence: input.Persistence }),
    ...(input.PushNotification != null && {
      PushNotification: se_PushNotificationConfiguration(input.PushNotification, context),
    }),
    ...(input.SubChannelId != null && { SubChannelId: input.SubChannelId }),
    ...(input.Type != null && { Type: input.Type }),
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
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    operation: [, "tag-resource"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    operation: [, "untag-resource"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateChannelCommand
 */
export const se_UpdateChannelCommand = async (
  input: UpdateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Metadata != null && { Metadata: input.Metadata }),
    ...(input.Mode != null && { Mode: input.Mode }),
    ...(input.Name != null && { Name: input.Name }),
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

/**
 * serializeAws_restJson1UpdateChannelFlowCommand
 */
export const se_UpdateChannelFlowCommand = async (
  input: UpdateChannelFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel-flows/{ChannelFlowArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ChannelFlowArn",
    () => input.ChannelFlowArn!,
    "{ChannelFlowArn}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Processors != null && { Processors: se_ProcessorList(input.Processors, context) }),
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

/**
 * serializeAws_restJson1UpdateChannelMessageCommand
 */
export const se_UpdateChannelMessageCommand = async (
  input: UpdateChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/messages/{MessageId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MessageId", () => input.MessageId!, "{MessageId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Content != null && { Content: input.Content }),
    ...(input.ContentType != null && { ContentType: input.ContentType }),
    ...(input.Metadata != null && { Metadata: input.Metadata }),
    ...(input.SubChannelId != null && { SubChannelId: input.SubChannelId }),
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

/**
 * serializeAws_restJson1UpdateChannelReadMarkerCommand
 */
export const se_UpdateChannelReadMarkerCommand = async (
  input: UpdateChannelReadMarkerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/readMarker";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.SubChannelId != null && { SubChannelId: input.SubChannelId }),
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

/**
 * deserializeAws_restJson1AssociateChannelFlowCommand
 */
export const de_AssociateChannelFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateChannelFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateChannelFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateChannelFlowCommandError
 */
const de_AssociateChannelFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateChannelFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmessaging#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BatchCreateChannelMembershipCommand
 */
export const de_BatchCreateChannelMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateChannelMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchCreateChannelMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BatchChannelMemberships != null) {
    contents.BatchChannelMemberships = de_BatchChannelMemberships(data.BatchChannelMemberships, context);
  }
  if (data.Errors != null) {
    contents.Errors = de_BatchCreateChannelMembershipErrors(data.Errors, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchCreateChannelMembershipCommandError
 */
const de_BatchCreateChannelMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateChannelMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmessaging#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmessaging#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ChannelFlowCallbackCommand
 */
export const de_ChannelFlowCallbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChannelFlowCallbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ChannelFlowCallbackCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CallbackId != null) {
    contents.CallbackId = __expectString(data.CallbackId);
  }
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ChannelFlowCallbackCommandError
 */
const de_ChannelFlowCallbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChannelFlowCallbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateChannelCommand
 */
export const de_CreateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateChannelCommandError
 */
const de_CreateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmessaging#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateChannelBanCommand
 */
export const de_CreateChannelBanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelBanCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateChannelBanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.Member != null) {
    contents.Member = de_Identity(data.Member, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateChannelBanCommandError
 */
const de_CreateChannelBanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelBanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmessaging#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateChannelFlowCommand
 */
export const de_CreateChannelFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelFlowCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateChannelFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelFlowArn != null) {
    contents.ChannelFlowArn = __expectString(data.ChannelFlowArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateChannelFlowCommandError
 */
const de_CreateChannelFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmessaging#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateChannelMembershipCommand
 */
export const de_CreateChannelMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelMembershipCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateChannelMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.Member != null) {
    contents.Member = de_Identity(data.Member, context);
  }
  if (data.SubChannelId != null) {
    contents.SubChannelId = __expectString(data.SubChannelId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateChannelMembershipCommandError
 */
const de_CreateChannelMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmessaging#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmessaging#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateChannelModeratorCommand
 */
export const de_CreateChannelModeratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelModeratorCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateChannelModeratorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.ChannelModerator != null) {
    contents.ChannelModerator = de_Identity(data.ChannelModerator, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateChannelModeratorCommandError
 */
const de_CreateChannelModeratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelModeratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmessaging#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteChannelCommand
 */
export const de_DeleteChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteChannelCommandError
 */
const de_DeleteChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteChannelBanCommand
 */
export const de_DeleteChannelBanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelBanCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteChannelBanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteChannelBanCommandError
 */
const de_DeleteChannelBanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelBanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteChannelFlowCommand
 */
export const de_DeleteChannelFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelFlowCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteChannelFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteChannelFlowCommandError
 */
const de_DeleteChannelFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteChannelMembershipCommand
 */
export const de_DeleteChannelMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelMembershipCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteChannelMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteChannelMembershipCommandError
 */
const de_DeleteChannelMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteChannelMessageCommand
 */
export const de_DeleteChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelMessageCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteChannelMessageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteChannelMessageCommandError
 */
const de_DeleteChannelMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteChannelModeratorCommand
 */
export const de_DeleteChannelModeratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelModeratorCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteChannelModeratorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteChannelModeratorCommandError
 */
const de_DeleteChannelModeratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelModeratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteMessagingStreamingConfigurationsCommand
 */
export const de_DeleteMessagingStreamingConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMessagingStreamingConfigurationsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteMessagingStreamingConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMessagingStreamingConfigurationsCommandError
 */
const de_DeleteMessagingStreamingConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMessagingStreamingConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeChannelCommand
 */
export const de_DescribeChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Channel != null) {
    contents.Channel = de_Channel(data.Channel, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChannelCommandError
 */
const de_DescribeChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeChannelBanCommand
 */
export const de_DescribeChannelBanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelBanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeChannelBanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelBan != null) {
    contents.ChannelBan = de_ChannelBan(data.ChannelBan, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChannelBanCommandError
 */
const de_DescribeChannelBanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelBanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmessaging#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeChannelFlowCommand
 */
export const de_DescribeChannelFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeChannelFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelFlow != null) {
    contents.ChannelFlow = de_ChannelFlow(data.ChannelFlow, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChannelFlowCommandError
 */
const de_DescribeChannelFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeChannelMembershipCommand
 */
export const de_DescribeChannelMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeChannelMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelMembership != null) {
    contents.ChannelMembership = de_ChannelMembership(data.ChannelMembership, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChannelMembershipCommandError
 */
const de_DescribeChannelMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmessaging#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeChannelMembershipForAppInstanceUserCommand
 */
export const de_DescribeChannelMembershipForAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelMembershipForAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeChannelMembershipForAppInstanceUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelMembership != null) {
    contents.ChannelMembership = de_ChannelMembershipForAppInstanceUserSummary(data.ChannelMembership, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChannelMembershipForAppInstanceUserCommandError
 */
const de_DescribeChannelMembershipForAppInstanceUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelMembershipForAppInstanceUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommand
 */
export const de_DescribeChannelModeratedByAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelModeratedByAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeChannelModeratedByAppInstanceUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Channel != null) {
    contents.Channel = de_ChannelModeratedByAppInstanceUserSummary(data.Channel, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommandError
 */
const de_DescribeChannelModeratedByAppInstanceUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelModeratedByAppInstanceUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeChannelModeratorCommand
 */
export const de_DescribeChannelModeratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelModeratorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeChannelModeratorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelModerator != null) {
    contents.ChannelModerator = de_ChannelModerator(data.ChannelModerator, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChannelModeratorCommandError
 */
const de_DescribeChannelModeratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelModeratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmessaging#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DisassociateChannelFlowCommand
 */
export const de_DisassociateChannelFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateChannelFlowCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DisassociateChannelFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateChannelFlowCommandError
 */
const de_DisassociateChannelFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateChannelFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmessaging#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetChannelMembershipPreferencesCommand
 */
export const de_GetChannelMembershipPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelMembershipPreferencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetChannelMembershipPreferencesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.Member != null) {
    contents.Member = de_Identity(data.Member, context);
  }
  if (data.Preferences != null) {
    contents.Preferences = de_ChannelMembershipPreferences(data.Preferences, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetChannelMembershipPreferencesCommandError
 */
const de_GetChannelMembershipPreferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelMembershipPreferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetChannelMessageCommand
 */
export const de_GetChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetChannelMessageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelMessage != null) {
    contents.ChannelMessage = de_ChannelMessage(data.ChannelMessage, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetChannelMessageCommandError
 */
const de_GetChannelMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmessaging#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetChannelMessageStatusCommand
 */
export const de_GetChannelMessageStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelMessageStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetChannelMessageStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Status != null) {
    contents.Status = de_ChannelMessageStatusStructure(data.Status, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetChannelMessageStatusCommandError
 */
const de_GetChannelMessageStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelMessageStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetMessagingSessionEndpointCommand
 */
export const de_GetMessagingSessionEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMessagingSessionEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMessagingSessionEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Endpoint != null) {
    contents.Endpoint = de_MessagingSessionEndpoint(data.Endpoint, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetMessagingSessionEndpointCommandError
 */
const de_GetMessagingSessionEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMessagingSessionEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetMessagingStreamingConfigurationsCommand
 */
export const de_GetMessagingStreamingConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMessagingStreamingConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMessagingStreamingConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.StreamingConfigurations != null) {
    contents.StreamingConfigurations = de_StreamingConfigurationList(data.StreamingConfigurations, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetMessagingStreamingConfigurationsCommandError
 */
const de_GetMessagingStreamingConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMessagingStreamingConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmessaging#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListChannelBansCommand
 */
export const de_ListChannelBansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelBansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListChannelBansCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.ChannelBans != null) {
    contents.ChannelBans = de_ChannelBanSummaryList(data.ChannelBans, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelBansCommandError
 */
const de_ListChannelBansCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelBansCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListChannelFlowsCommand
 */
export const de_ListChannelFlowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelFlowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListChannelFlowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelFlows != null) {
    contents.ChannelFlows = de_ChannelFlowSummaryList(data.ChannelFlows, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelFlowsCommandError
 */
const de_ListChannelFlowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelFlowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListChannelMembershipsCommand
 */
export const de_ListChannelMembershipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelMembershipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListChannelMembershipsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.ChannelMemberships != null) {
    contents.ChannelMemberships = de_ChannelMembershipSummaryList(data.ChannelMemberships, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelMembershipsCommandError
 */
const de_ListChannelMembershipsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelMembershipsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListChannelMembershipsForAppInstanceUserCommand
 */
export const de_ListChannelMembershipsForAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelMembershipsForAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListChannelMembershipsForAppInstanceUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelMemberships != null) {
    contents.ChannelMemberships = de_ChannelMembershipForAppInstanceUserSummaryList(data.ChannelMemberships, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelMembershipsForAppInstanceUserCommandError
 */
const de_ListChannelMembershipsForAppInstanceUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelMembershipsForAppInstanceUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListChannelMessagesCommand
 */
export const de_ListChannelMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelMessagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListChannelMessagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.ChannelMessages != null) {
    contents.ChannelMessages = de_ChannelMessageSummaryList(data.ChannelMessages, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.SubChannelId != null) {
    contents.SubChannelId = __expectString(data.SubChannelId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelMessagesCommandError
 */
const de_ListChannelMessagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelMessagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListChannelModeratorsCommand
 */
export const de_ListChannelModeratorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelModeratorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListChannelModeratorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.ChannelModerators != null) {
    contents.ChannelModerators = de_ChannelModeratorSummaryList(data.ChannelModerators, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelModeratorsCommandError
 */
const de_ListChannelModeratorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelModeratorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListChannelsCommand
 */
export const de_ListChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListChannelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Channels != null) {
    contents.Channels = de_ChannelSummaryList(data.Channels, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelsCommandError
 */
const de_ListChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListChannelsAssociatedWithChannelFlowCommand
 */
export const de_ListChannelsAssociatedWithChannelFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsAssociatedWithChannelFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListChannelsAssociatedWithChannelFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Channels != null) {
    contents.Channels = de_ChannelAssociatedWithFlowSummaryList(data.Channels, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelsAssociatedWithChannelFlowCommandError
 */
const de_ListChannelsAssociatedWithChannelFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsAssociatedWithChannelFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommand
 */
export const de_ListChannelsModeratedByAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsModeratedByAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListChannelsModeratedByAppInstanceUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Channels != null) {
    contents.Channels = de_ChannelModeratedByAppInstanceUserSummaryList(data.Channels, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommandError
 */
const de_ListChannelsModeratedByAppInstanceUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsModeratedByAppInstanceUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListSubChannelsCommand
 */
export const de_ListSubChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSubChannelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.SubChannels != null) {
    contents.SubChannels = de_SubChannelSummaryList(data.SubChannels, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSubChannelsCommandError
 */
const de_ListSubChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubChannelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags != null) {
    contents.Tags = de_TagList(data.Tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
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
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutChannelExpirationSettingsCommand
 */
export const de_PutChannelExpirationSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutChannelExpirationSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutChannelExpirationSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.ExpirationSettings != null) {
    contents.ExpirationSettings = de_ExpirationSettings(data.ExpirationSettings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutChannelExpirationSettingsCommandError
 */
const de_PutChannelExpirationSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutChannelExpirationSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutChannelMembershipPreferencesCommand
 */
export const de_PutChannelMembershipPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutChannelMembershipPreferencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutChannelMembershipPreferencesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.Member != null) {
    contents.Member = de_Identity(data.Member, context);
  }
  if (data.Preferences != null) {
    contents.Preferences = de_ChannelMembershipPreferences(data.Preferences, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutChannelMembershipPreferencesCommandError
 */
const de_PutChannelMembershipPreferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutChannelMembershipPreferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutMessagingStreamingConfigurationsCommand
 */
export const de_PutMessagingStreamingConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMessagingStreamingConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutMessagingStreamingConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.StreamingConfigurations != null) {
    contents.StreamingConfigurations = de_StreamingConfigurationList(data.StreamingConfigurations, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutMessagingStreamingConfigurationsCommandError
 */
const de_PutMessagingStreamingConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMessagingStreamingConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmessaging#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RedactChannelMessageCommand
 */
export const de_RedactChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RedactChannelMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RedactChannelMessageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.MessageId != null) {
    contents.MessageId = __expectString(data.MessageId);
  }
  if (data.SubChannelId != null) {
    contents.SubChannelId = __expectString(data.SubChannelId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RedactChannelMessageCommandError
 */
const de_RedactChannelMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RedactChannelMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1SearchChannelsCommand
 */
export const de_SearchChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchChannelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Channels != null) {
    contents.Channels = de_ChannelSummaryList(data.Channels, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SearchChannelsCommandError
 */
const de_SearchChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchChannelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1SendChannelMessageCommand
 */
export const de_SendChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendChannelMessageCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_SendChannelMessageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.MessageId != null) {
    contents.MessageId = __expectString(data.MessageId);
  }
  if (data.Status != null) {
    contents.Status = de_ChannelMessageStatusStructure(data.Status, context);
  }
  if (data.SubChannelId != null) {
    contents.SubChannelId = __expectString(data.SubChannelId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SendChannelMessageCommandError
 */
const de_SendChannelMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendChannelMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
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
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmessaging#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
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
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateChannelCommand
 */
export const de_UpdateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateChannelCommandError
 */
const de_UpdateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateChannelFlowCommand
 */
export const de_UpdateChannelFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateChannelFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelFlowArn != null) {
    contents.ChannelFlowArn = __expectString(data.ChannelFlowArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateChannelFlowCommandError
 */
const de_UpdateChannelFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateChannelMessageCommand
 */
export const de_UpdateChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateChannelMessageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.MessageId != null) {
    contents.MessageId = __expectString(data.MessageId);
  }
  if (data.Status != null) {
    contents.Status = de_ChannelMessageStatusStructure(data.Status, context);
  }
  if (data.SubChannelId != null) {
    contents.SubChannelId = __expectString(data.SubChannelId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateChannelMessageCommandError
 */
const de_UpdateChannelMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateChannelReadMarkerCommand
 */
export const de_UpdateChannelReadMarkerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelReadMarkerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateChannelReadMarkerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.SubChannelId != null) {
    contents.SubChannelId = __expectString(data.SubChannelId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateChannelReadMarkerCommandError
 */
const de_UpdateChannelReadMarkerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelReadMarkerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new BadRequestException({
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
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ForbiddenExceptionRes
 */
const de_ForbiddenExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceLimitExceededExceptionRes
 */
const de_ResourceLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceFailureExceptionRes
 */
const de_ServiceFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottledClientExceptionRes
 */
const de_ThrottledClientExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottledClientException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ThrottledClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnauthorizedClientExceptionRes
 */
const de_UnauthorizedClientExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedClientException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new UnauthorizedClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1ChannelMemberArns
 */
const se_ChannelMemberArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ChannelMembershipPreferences
 */
const se_ChannelMembershipPreferences = (input: ChannelMembershipPreferences, context: __SerdeContext): any => {
  return {
    ...(input.PushNotifications != null && {
      PushNotifications: se_PushNotificationPreferences(input.PushNotifications, context),
    }),
  };
};

/**
 * serializeAws_restJson1ChannelMessageCallback
 */
const se_ChannelMessageCallback = (input: ChannelMessageCallback, context: __SerdeContext): any => {
  return {
    ...(input.Content != null && { Content: input.Content }),
    ...(input.ContentType != null && { ContentType: input.ContentType }),
    ...(input.MessageAttributes != null && {
      MessageAttributes: se_MessageAttributeMap(input.MessageAttributes, context),
    }),
    ...(input.MessageId != null && { MessageId: input.MessageId }),
    ...(input.Metadata != null && { Metadata: input.Metadata }),
    ...(input.PushNotification != null && {
      PushNotification: se_PushNotificationConfiguration(input.PushNotification, context),
    }),
    ...(input.SubChannelId != null && { SubChannelId: input.SubChannelId }),
  };
};

/**
 * serializeAws_restJson1ChannelModeratorArns
 */
const se_ChannelModeratorArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ElasticChannelConfiguration
 */
const se_ElasticChannelConfiguration = (input: ElasticChannelConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.MaximumSubChannels != null && { MaximumSubChannels: input.MaximumSubChannels }),
    ...(input.MinimumMembershipPercentage != null && {
      MinimumMembershipPercentage: input.MinimumMembershipPercentage,
    }),
    ...(input.TargetMembershipsPerSubChannel != null && {
      TargetMembershipsPerSubChannel: input.TargetMembershipsPerSubChannel,
    }),
  };
};

/**
 * serializeAws_restJson1ExpirationSettings
 */
const se_ExpirationSettings = (input: ExpirationSettings, context: __SerdeContext): any => {
  return {
    ...(input.ExpirationCriterion != null && { ExpirationCriterion: input.ExpirationCriterion }),
    ...(input.ExpirationDays != null && { ExpirationDays: input.ExpirationDays }),
  };
};

/**
 * serializeAws_restJson1LambdaConfiguration
 */
const se_LambdaConfiguration = (input: LambdaConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.InvocationType != null && { InvocationType: input.InvocationType }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_restJson1MemberArns
 */
const se_MemberArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1MessageAttributeMap
 */
const se_MessageAttributeMap = (input: Record<string, MessageAttributeValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_MessageAttributeValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1MessageAttributeStringValues
 */
const se_MessageAttributeStringValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1MessageAttributeValue
 */
const se_MessageAttributeValue = (input: MessageAttributeValue, context: __SerdeContext): any => {
  return {
    ...(input.StringValues != null && { StringValues: se_MessageAttributeStringValues(input.StringValues, context) }),
  };
};

/**
 * serializeAws_restJson1Processor
 */
const se_Processor = (input: Processor, context: __SerdeContext): any => {
  return {
    ...(input.Configuration != null && { Configuration: se_ProcessorConfiguration(input.Configuration, context) }),
    ...(input.ExecutionOrder != null && { ExecutionOrder: input.ExecutionOrder }),
    ...(input.FallbackAction != null && { FallbackAction: input.FallbackAction }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_restJson1ProcessorConfiguration
 */
const se_ProcessorConfiguration = (input: ProcessorConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Lambda != null && { Lambda: se_LambdaConfiguration(input.Lambda, context) }),
  };
};

/**
 * serializeAws_restJson1ProcessorList
 */
const se_ProcessorList = (input: Processor[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Processor(entry, context);
    });
};

/**
 * serializeAws_restJson1PushNotificationConfiguration
 */
const se_PushNotificationConfiguration = (input: PushNotificationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Body != null && { Body: input.Body }),
    ...(input.Title != null && { Title: input.Title }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_restJson1PushNotificationPreferences
 */
const se_PushNotificationPreferences = (input: PushNotificationPreferences, context: __SerdeContext): any => {
  return {
    ...(input.AllowNotifications != null && { AllowNotifications: input.AllowNotifications }),
    ...(input.FilterRule != null && { FilterRule: input.FilterRule }),
  };
};

/**
 * serializeAws_restJson1SearchField
 */
const se_SearchField = (input: SearchField, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Operator != null && { Operator: input.Operator }),
    ...(input.Values != null && { Values: se_SearchFieldValues(input.Values, context) }),
  };
};

/**
 * serializeAws_restJson1SearchFields
 */
const se_SearchFields = (input: SearchField[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SearchField(entry, context);
    });
};

/**
 * serializeAws_restJson1SearchFieldValues
 */
const se_SearchFieldValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1StreamingConfiguration
 */
const se_StreamingConfiguration = (input: StreamingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DataType != null && { DataType: input.DataType }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_restJson1StreamingConfigurationList
 */
const se_StreamingConfigurationList = (input: StreamingConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_StreamingConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * deserializeAws_restJson1AppInstanceUserMembershipSummary
 */
const de_AppInstanceUserMembershipSummary = (
  output: any,
  context: __SerdeContext
): AppInstanceUserMembershipSummary => {
  return {
    ReadMarkerTimestamp:
      output.ReadMarkerTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReadMarkerTimestamp)))
        : undefined,
    SubChannelId: __expectString(output.SubChannelId),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1BatchChannelMemberships
 */
const de_BatchChannelMemberships = (output: any, context: __SerdeContext): BatchChannelMemberships => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    InvitedBy: output.InvitedBy != null ? de_Identity(output.InvitedBy, context) : undefined,
    Members: output.Members != null ? de_Members(output.Members, context) : undefined,
    SubChannelId: __expectString(output.SubChannelId),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1BatchCreateChannelMembershipError
 */
const de_BatchCreateChannelMembershipError = (
  output: any,
  context: __SerdeContext
): BatchCreateChannelMembershipError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    MemberArn: __expectString(output.MemberArn),
  } as any;
};

/**
 * deserializeAws_restJson1BatchCreateChannelMembershipErrors
 */
const de_BatchCreateChannelMembershipErrors = (
  output: any,
  context: __SerdeContext
): BatchCreateChannelMembershipError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchCreateChannelMembershipError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Channel
 */
const de_Channel = (output: any, context: __SerdeContext): Channel => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    ChannelFlowArn: __expectString(output.ChannelFlowArn),
    CreatedBy: output.CreatedBy != null ? de_Identity(output.CreatedBy, context) : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    ElasticChannelConfiguration:
      output.ElasticChannelConfiguration != null
        ? de_ElasticChannelConfiguration(output.ElasticChannelConfiguration, context)
        : undefined,
    ExpirationSettings:
      output.ExpirationSettings != null ? de_ExpirationSettings(output.ExpirationSettings, context) : undefined,
    LastMessageTimestamp:
      output.LastMessageTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastMessageTimestamp)))
        : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    Metadata: __expectString(output.Metadata),
    Mode: __expectString(output.Mode),
    Name: __expectString(output.Name),
    Privacy: __expectString(output.Privacy),
  } as any;
};

/**
 * deserializeAws_restJson1ChannelAssociatedWithFlowSummary
 */
const de_ChannelAssociatedWithFlowSummary = (
  output: any,
  context: __SerdeContext
): ChannelAssociatedWithFlowSummary => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    Metadata: __expectString(output.Metadata),
    Mode: __expectString(output.Mode),
    Name: __expectString(output.Name),
    Privacy: __expectString(output.Privacy),
  } as any;
};

/**
 * deserializeAws_restJson1ChannelAssociatedWithFlowSummaryList
 */
const de_ChannelAssociatedWithFlowSummaryList = (
  output: any,
  context: __SerdeContext
): ChannelAssociatedWithFlowSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChannelAssociatedWithFlowSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ChannelBan
 */
const de_ChannelBan = (output: any, context: __SerdeContext): ChannelBan => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    CreatedBy: output.CreatedBy != null ? de_Identity(output.CreatedBy, context) : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    Member: output.Member != null ? de_Identity(output.Member, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ChannelBanSummary
 */
const de_ChannelBanSummary = (output: any, context: __SerdeContext): ChannelBanSummary => {
  return {
    Member: output.Member != null ? de_Identity(output.Member, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ChannelBanSummaryList
 */
const de_ChannelBanSummaryList = (output: any, context: __SerdeContext): ChannelBanSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChannelBanSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ChannelFlow
 */
const de_ChannelFlow = (output: any, context: __SerdeContext): ChannelFlow => {
  return {
    ChannelFlowArn: __expectString(output.ChannelFlowArn),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    Name: __expectString(output.Name),
    Processors: output.Processors != null ? de_ProcessorList(output.Processors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ChannelFlowSummary
 */
const de_ChannelFlowSummary = (output: any, context: __SerdeContext): ChannelFlowSummary => {
  return {
    ChannelFlowArn: __expectString(output.ChannelFlowArn),
    Name: __expectString(output.Name),
    Processors: output.Processors != null ? de_ProcessorList(output.Processors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ChannelFlowSummaryList
 */
const de_ChannelFlowSummaryList = (output: any, context: __SerdeContext): ChannelFlowSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChannelFlowSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ChannelMembership
 */
const de_ChannelMembership = (output: any, context: __SerdeContext): ChannelMembership => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    InvitedBy: output.InvitedBy != null ? de_Identity(output.InvitedBy, context) : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    Member: output.Member != null ? de_Identity(output.Member, context) : undefined,
    SubChannelId: __expectString(output.SubChannelId),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1ChannelMembershipForAppInstanceUserSummary
 */
const de_ChannelMembershipForAppInstanceUserSummary = (
  output: any,
  context: __SerdeContext
): ChannelMembershipForAppInstanceUserSummary => {
  return {
    AppInstanceUserMembershipSummary:
      output.AppInstanceUserMembershipSummary != null
        ? de_AppInstanceUserMembershipSummary(output.AppInstanceUserMembershipSummary, context)
        : undefined,
    ChannelSummary: output.ChannelSummary != null ? de_ChannelSummary(output.ChannelSummary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ChannelMembershipForAppInstanceUserSummaryList
 */
const de_ChannelMembershipForAppInstanceUserSummaryList = (
  output: any,
  context: __SerdeContext
): ChannelMembershipForAppInstanceUserSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChannelMembershipForAppInstanceUserSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ChannelMembershipPreferences
 */
const de_ChannelMembershipPreferences = (output: any, context: __SerdeContext): ChannelMembershipPreferences => {
  return {
    PushNotifications:
      output.PushNotifications != null ? de_PushNotificationPreferences(output.PushNotifications, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ChannelMembershipSummary
 */
const de_ChannelMembershipSummary = (output: any, context: __SerdeContext): ChannelMembershipSummary => {
  return {
    Member: output.Member != null ? de_Identity(output.Member, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ChannelMembershipSummaryList
 */
const de_ChannelMembershipSummaryList = (output: any, context: __SerdeContext): ChannelMembershipSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChannelMembershipSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ChannelMessage
 */
const de_ChannelMessage = (output: any, context: __SerdeContext): ChannelMessage => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    Content: __expectString(output.Content),
    ContentType: __expectString(output.ContentType),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    LastEditedTimestamp:
      output.LastEditedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastEditedTimestamp)))
        : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    MessageAttributes:
      output.MessageAttributes != null ? de_MessageAttributeMap(output.MessageAttributes, context) : undefined,
    MessageId: __expectString(output.MessageId),
    Metadata: __expectString(output.Metadata),
    Persistence: __expectString(output.Persistence),
    Redacted: __expectBoolean(output.Redacted),
    Sender: output.Sender != null ? de_Identity(output.Sender, context) : undefined,
    Status: output.Status != null ? de_ChannelMessageStatusStructure(output.Status, context) : undefined,
    SubChannelId: __expectString(output.SubChannelId),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1ChannelMessageStatusStructure
 */
const de_ChannelMessageStatusStructure = (output: any, context: __SerdeContext): ChannelMessageStatusStructure => {
  return {
    Detail: __expectString(output.Detail),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1ChannelMessageSummary
 */
const de_ChannelMessageSummary = (output: any, context: __SerdeContext): ChannelMessageSummary => {
  return {
    Content: __expectString(output.Content),
    ContentType: __expectString(output.ContentType),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    LastEditedTimestamp:
      output.LastEditedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastEditedTimestamp)))
        : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    MessageAttributes:
      output.MessageAttributes != null ? de_MessageAttributeMap(output.MessageAttributes, context) : undefined,
    MessageId: __expectString(output.MessageId),
    Metadata: __expectString(output.Metadata),
    Redacted: __expectBoolean(output.Redacted),
    Sender: output.Sender != null ? de_Identity(output.Sender, context) : undefined,
    Status: output.Status != null ? de_ChannelMessageStatusStructure(output.Status, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1ChannelMessageSummaryList
 */
const de_ChannelMessageSummaryList = (output: any, context: __SerdeContext): ChannelMessageSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChannelMessageSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ChannelModeratedByAppInstanceUserSummary
 */
const de_ChannelModeratedByAppInstanceUserSummary = (
  output: any,
  context: __SerdeContext
): ChannelModeratedByAppInstanceUserSummary => {
  return {
    ChannelSummary: output.ChannelSummary != null ? de_ChannelSummary(output.ChannelSummary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ChannelModeratedByAppInstanceUserSummaryList
 */
const de_ChannelModeratedByAppInstanceUserSummaryList = (
  output: any,
  context: __SerdeContext
): ChannelModeratedByAppInstanceUserSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChannelModeratedByAppInstanceUserSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ChannelModerator
 */
const de_ChannelModerator = (output: any, context: __SerdeContext): ChannelModerator => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    CreatedBy: output.CreatedBy != null ? de_Identity(output.CreatedBy, context) : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    Moderator: output.Moderator != null ? de_Identity(output.Moderator, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ChannelModeratorSummary
 */
const de_ChannelModeratorSummary = (output: any, context: __SerdeContext): ChannelModeratorSummary => {
  return {
    Moderator: output.Moderator != null ? de_Identity(output.Moderator, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ChannelModeratorSummaryList
 */
const de_ChannelModeratorSummaryList = (output: any, context: __SerdeContext): ChannelModeratorSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChannelModeratorSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ChannelSummary
 */
const de_ChannelSummary = (output: any, context: __SerdeContext): ChannelSummary => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    LastMessageTimestamp:
      output.LastMessageTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastMessageTimestamp)))
        : undefined,
    Metadata: __expectString(output.Metadata),
    Mode: __expectString(output.Mode),
    Name: __expectString(output.Name),
    Privacy: __expectString(output.Privacy),
  } as any;
};

/**
 * deserializeAws_restJson1ChannelSummaryList
 */
const de_ChannelSummaryList = (output: any, context: __SerdeContext): ChannelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChannelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ElasticChannelConfiguration
 */
const de_ElasticChannelConfiguration = (output: any, context: __SerdeContext): ElasticChannelConfiguration => {
  return {
    MaximumSubChannels: __expectInt32(output.MaximumSubChannels),
    MinimumMembershipPercentage: __expectInt32(output.MinimumMembershipPercentage),
    TargetMembershipsPerSubChannel: __expectInt32(output.TargetMembershipsPerSubChannel),
  } as any;
};

/**
 * deserializeAws_restJson1ExpirationSettings
 */
const de_ExpirationSettings = (output: any, context: __SerdeContext): ExpirationSettings => {
  return {
    ExpirationCriterion: __expectString(output.ExpirationCriterion),
    ExpirationDays: __expectInt32(output.ExpirationDays),
  } as any;
};

/**
 * deserializeAws_restJson1Identity
 */
const de_Identity = (output: any, context: __SerdeContext): Identity => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1LambdaConfiguration
 */
const de_LambdaConfiguration = (output: any, context: __SerdeContext): LambdaConfiguration => {
  return {
    InvocationType: __expectString(output.InvocationType),
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

/**
 * deserializeAws_restJson1Members
 */
const de_Members = (output: any, context: __SerdeContext): Identity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Identity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MessageAttributeMap
 */
const de_MessageAttributeMap = (output: any, context: __SerdeContext): Record<string, MessageAttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, MessageAttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_MessageAttributeValue(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1MessageAttributeStringValues
 */
const de_MessageAttributeStringValues = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1MessageAttributeValue
 */
const de_MessageAttributeValue = (output: any, context: __SerdeContext): MessageAttributeValue => {
  return {
    StringValues:
      output.StringValues != null ? de_MessageAttributeStringValues(output.StringValues, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MessagingSessionEndpoint
 */
const de_MessagingSessionEndpoint = (output: any, context: __SerdeContext): MessagingSessionEndpoint => {
  return {
    Url: __expectString(output.Url),
  } as any;
};

/**
 * deserializeAws_restJson1Processor
 */
const de_Processor = (output: any, context: __SerdeContext): Processor => {
  return {
    Configuration: output.Configuration != null ? de_ProcessorConfiguration(output.Configuration, context) : undefined,
    ExecutionOrder: __expectInt32(output.ExecutionOrder),
    FallbackAction: __expectString(output.FallbackAction),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1ProcessorConfiguration
 */
const de_ProcessorConfiguration = (output: any, context: __SerdeContext): ProcessorConfiguration => {
  return {
    Lambda: output.Lambda != null ? de_LambdaConfiguration(output.Lambda, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ProcessorList
 */
const de_ProcessorList = (output: any, context: __SerdeContext): Processor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Processor(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PushNotificationPreferences
 */
const de_PushNotificationPreferences = (output: any, context: __SerdeContext): PushNotificationPreferences => {
  return {
    AllowNotifications: __expectString(output.AllowNotifications),
    FilterRule: __expectString(output.FilterRule),
  } as any;
};

/**
 * deserializeAws_restJson1StreamingConfiguration
 */
const de_StreamingConfiguration = (output: any, context: __SerdeContext): StreamingConfiguration => {
  return {
    DataType: __expectString(output.DataType),
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

/**
 * deserializeAws_restJson1StreamingConfigurationList
 */
const de_StreamingConfigurationList = (output: any, context: __SerdeContext): StreamingConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StreamingConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SubChannelSummary
 */
const de_SubChannelSummary = (output: any, context: __SerdeContext): SubChannelSummary => {
  return {
    MembershipCount: __expectInt32(output.MembershipCount),
    SubChannelId: __expectString(output.SubChannelId),
  } as any;
};

/**
 * deserializeAws_restJson1SubChannelSummaryList
 */
const de_SubChannelSummaryList = (output: any, context: __SerdeContext): SubChannelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SubChannelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
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
