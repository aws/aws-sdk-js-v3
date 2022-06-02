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
  parseEpochTimestamp as __parseEpochTimestamp,
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
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PutChannelMembershipPreferencesCommandInput,
  PutChannelMembershipPreferencesCommandOutput,
} from "../commands/PutChannelMembershipPreferencesCommand";
import {
  RedactChannelMessageCommandInput,
  RedactChannelMessageCommandOutput,
} from "../commands/RedactChannelMessageCommand";
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
  ServiceFailureException,
  ServiceUnavailableException,
  Tag,
  ThrottledClientException,
  UnauthorizedClientException,
} from "../models/models_0";

export const serializeAws_restJson1AssociateChannelFlowCommand = async (
  input: AssociateChannelFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/channel-flow";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelFlowArn !== undefined &&
      input.ChannelFlowArn !== null && { ChannelFlowArn: input.ChannelFlowArn }),
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

export const serializeAws_restJson1BatchCreateChannelMembershipCommand = async (
  input: BatchCreateChannelMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/memberships";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  const query: any = {
    operation: "batch-create",
  };
  let body: any;
  body = JSON.stringify({
    ...(input.MemberArns !== undefined &&
      input.MemberArns !== null && { MemberArns: serializeAws_restJson1MemberArns(input.MemberArns, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
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

export const serializeAws_restJson1ChannelFlowCallbackCommand = async (
  input: ChannelFlowCallbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  const query: any = {
    operation: "channel-flow-callback",
  };
  let body: any;
  body = JSON.stringify({
    CallbackId: input.CallbackId ?? generateIdempotencyToken(),
    ...(input.ChannelMessage !== undefined &&
      input.ChannelMessage !== null && {
        ChannelMessage: serializeAws_restJson1ChannelMessageCallback(input.ChannelMessage, context),
      }),
    ...(input.DeleteResource !== undefined &&
      input.DeleteResource !== null && { DeleteResource: input.DeleteResource }),
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

export const serializeAws_restJson1CreateChannelCommand = async (
  input: CreateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
  let body: any;
  body = JSON.stringify({
    ...(input.AppInstanceArn !== undefined &&
      input.AppInstanceArn !== null && { AppInstanceArn: input.AppInstanceArn }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Metadata !== undefined && input.Metadata !== null && { Metadata: input.Metadata }),
    ...(input.Mode !== undefined && input.Mode !== null && { Mode: input.Mode }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Privacy !== undefined && input.Privacy !== null && { Privacy: input.Privacy }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1CreateChannelBanCommand = async (
  input: CreateChannelBanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/bans";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.MemberArn !== undefined && input.MemberArn !== null && { MemberArn: input.MemberArn }),
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

export const serializeAws_restJson1CreateChannelFlowCommand = async (
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
    ...(input.AppInstanceArn !== undefined &&
      input.AppInstanceArn !== null && { AppInstanceArn: input.AppInstanceArn }),
    ...(input.ClientRequestToken !== undefined &&
      input.ClientRequestToken !== null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Processors !== undefined &&
      input.Processors !== null && { Processors: serializeAws_restJson1ProcessorList(input.Processors, context) }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1CreateChannelMembershipCommand = async (
  input: CreateChannelMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/memberships";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.MemberArn !== undefined && input.MemberArn !== null && { MemberArn: input.MemberArn }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
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

export const serializeAws_restJson1CreateChannelModeratorCommand = async (
  input: CreateChannelModeratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/moderators";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelModeratorArn !== undefined &&
      input.ChannelModeratorArn !== null && { ChannelModeratorArn: input.ChannelModeratorArn }),
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

export const serializeAws_restJson1DeleteChannelCommand = async (
  input: DeleteChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
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

export const serializeAws_restJson1DeleteChannelBanCommand = async (
  input: DeleteChannelBanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/bans/{MemberArn}";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  if (input.MemberArn !== undefined) {
    const labelValue: string = input.MemberArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MemberArn.");
    }
    resolvedPath = resolvedPath.replace("{MemberArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MemberArn.");
  }
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

export const serializeAws_restJson1DeleteChannelFlowCommand = async (
  input: DeleteChannelFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel-flows/{ChannelFlowArn}";
  if (input.ChannelFlowArn !== undefined) {
    const labelValue: string = input.ChannelFlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelFlowArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelFlowArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelFlowArn.");
  }
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

export const serializeAws_restJson1DeleteChannelMembershipCommand = async (
  input: DeleteChannelMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/memberships/{MemberArn}";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  if (input.MemberArn !== undefined) {
    const labelValue: string = input.MemberArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MemberArn.");
    }
    resolvedPath = resolvedPath.replace("{MemberArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MemberArn.");
  }
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

export const serializeAws_restJson1DeleteChannelMessageCommand = async (
  input: DeleteChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/messages/{MessageId}";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  if (input.MessageId !== undefined) {
    const labelValue: string = input.MessageId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MessageId.");
    }
    resolvedPath = resolvedPath.replace("{MessageId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MessageId.");
  }
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

export const serializeAws_restJson1DeleteChannelModeratorCommand = async (
  input: DeleteChannelModeratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/moderators/{ChannelModeratorArn}";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  if (input.ChannelModeratorArn !== undefined) {
    const labelValue: string = input.ChannelModeratorArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelModeratorArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelModeratorArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelModeratorArn.");
  }
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

export const serializeAws_restJson1DescribeChannelCommand = async (
  input: DescribeChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
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

export const serializeAws_restJson1DescribeChannelBanCommand = async (
  input: DescribeChannelBanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/bans/{MemberArn}";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  if (input.MemberArn !== undefined) {
    const labelValue: string = input.MemberArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MemberArn.");
    }
    resolvedPath = resolvedPath.replace("{MemberArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MemberArn.");
  }
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

export const serializeAws_restJson1DescribeChannelFlowCommand = async (
  input: DescribeChannelFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel-flows/{ChannelFlowArn}";
  if (input.ChannelFlowArn !== undefined) {
    const labelValue: string = input.ChannelFlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelFlowArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelFlowArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelFlowArn.");
  }
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

export const serializeAws_restJson1DescribeChannelMembershipCommand = async (
  input: DescribeChannelMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/memberships/{MemberArn}";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  if (input.MemberArn !== undefined) {
    const labelValue: string = input.MemberArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MemberArn.");
    }
    resolvedPath = resolvedPath.replace("{MemberArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MemberArn.");
  }
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

export const serializeAws_restJson1DescribeChannelMembershipForAppInstanceUserCommand = async (
  input: DescribeChannelMembershipForAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  const query: any = {
    scope: "app-instance-user-membership",
    ...(input.AppInstanceUserArn !== undefined && { "app-instance-user-arn": input.AppInstanceUserArn }),
  };
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

export const serializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommand = async (
  input: DescribeChannelModeratedByAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  const query: any = {
    scope: "app-instance-user-moderated-channel",
    ...(input.AppInstanceUserArn !== undefined && { "app-instance-user-arn": input.AppInstanceUserArn }),
  };
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

export const serializeAws_restJson1DescribeChannelModeratorCommand = async (
  input: DescribeChannelModeratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/moderators/{ChannelModeratorArn}";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  if (input.ChannelModeratorArn !== undefined) {
    const labelValue: string = input.ChannelModeratorArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelModeratorArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelModeratorArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelModeratorArn.");
  }
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

export const serializeAws_restJson1DisassociateChannelFlowCommand = async (
  input: DisassociateChannelFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/channel-flow/{ChannelFlowArn}";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  if (input.ChannelFlowArn !== undefined) {
    const labelValue: string = input.ChannelFlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelFlowArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelFlowArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelFlowArn.");
  }
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

export const serializeAws_restJson1GetChannelMembershipPreferencesCommand = async (
  input: GetChannelMembershipPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/memberships/{MemberArn}/preferences";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  if (input.MemberArn !== undefined) {
    const labelValue: string = input.MemberArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MemberArn.");
    }
    resolvedPath = resolvedPath.replace("{MemberArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MemberArn.");
  }
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

export const serializeAws_restJson1GetChannelMessageCommand = async (
  input: GetChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/messages/{MessageId}";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  if (input.MessageId !== undefined) {
    const labelValue: string = input.MessageId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MessageId.");
    }
    resolvedPath = resolvedPath.replace("{MessageId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MessageId.");
  }
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

export const serializeAws_restJson1GetChannelMessageStatusCommand = async (
  input: GetChannelMessageStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/messages/{MessageId}";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  if (input.MessageId !== undefined) {
    const labelValue: string = input.MessageId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MessageId.");
    }
    resolvedPath = resolvedPath.replace("{MessageId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MessageId.");
  }
  const query: any = {
    scope: "message-status",
  };
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

export const serializeAws_restJson1GetMessagingSessionEndpointCommand = async (
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

export const serializeAws_restJson1ListChannelBansCommand = async (
  input: ListChannelBansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/bans";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
  };
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

export const serializeAws_restJson1ListChannelFlowsCommand = async (
  input: ListChannelFlowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel-flows";
  const query: any = {
    ...(input.AppInstanceArn !== undefined && { "app-instance-arn": input.AppInstanceArn }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
  };
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

export const serializeAws_restJson1ListChannelMembershipsCommand = async (
  input: ListChannelMembershipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/memberships";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  const query: any = {
    ...(input.Type !== undefined && { type: input.Type }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
  };
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

export const serializeAws_restJson1ListChannelMembershipsForAppInstanceUserCommand = async (
  input: ListChannelMembershipsForAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
  const query: any = {
    scope: "app-instance-user-memberships",
    ...(input.AppInstanceUserArn !== undefined && { "app-instance-user-arn": input.AppInstanceUserArn }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
  };
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

export const serializeAws_restJson1ListChannelMessagesCommand = async (
  input: ListChannelMessagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/messages";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  const query: any = {
    ...(input.SortOrder !== undefined && { "sort-order": input.SortOrder }),
    ...(input.NotBefore !== undefined && {
      "not-before": (input.NotBefore.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.NotAfter !== undefined && { "not-after": (input.NotAfter.toISOString().split(".")[0] + "Z").toString() }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
  };
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

export const serializeAws_restJson1ListChannelModeratorsCommand = async (
  input: ListChannelModeratorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/moderators";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
  };
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

export const serializeAws_restJson1ListChannelsCommand = async (
  input: ListChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
  const query: any = {
    ...(input.AppInstanceArn !== undefined && { "app-instance-arn": input.AppInstanceArn }),
    ...(input.Privacy !== undefined && { privacy: input.Privacy }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
  };
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

export const serializeAws_restJson1ListChannelsAssociatedWithChannelFlowCommand = async (
  input: ListChannelsAssociatedWithChannelFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
  const query: any = {
    scope: "channel-flow-associations",
    ...(input.ChannelFlowArn !== undefined && { "channel-flow-arn": input.ChannelFlowArn }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
  };
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

export const serializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommand = async (
  input: ListChannelsModeratedByAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
  const query: any = {
    scope: "app-instance-user-moderated-channels",
    ...(input.AppInstanceUserArn !== undefined && { "app-instance-user-arn": input.AppInstanceUserArn }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
  };
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = {
    ...(input.ResourceARN !== undefined && { arn: input.ResourceARN }),
  };
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

export const serializeAws_restJson1PutChannelMembershipPreferencesCommand = async (
  input: PutChannelMembershipPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/memberships/{MemberArn}/preferences";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  if (input.MemberArn !== undefined) {
    const labelValue: string = input.MemberArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MemberArn.");
    }
    resolvedPath = resolvedPath.replace("{MemberArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MemberArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Preferences !== undefined &&
      input.Preferences !== null && {
        Preferences: serializeAws_restJson1ChannelMembershipPreferences(input.Preferences, context),
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

export const serializeAws_restJson1RedactChannelMessageCommand = async (
  input: RedactChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/messages/{MessageId}";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  if (input.MessageId !== undefined) {
    const labelValue: string = input.MessageId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MessageId.");
    }
    resolvedPath = resolvedPath.replace("{MessageId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MessageId.");
  }
  const query: any = {
    operation: "redact",
  };
  let body: any;
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

export const serializeAws_restJson1SendChannelMessageCommand = async (
  input: SendChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/messages";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Content !== undefined && input.Content !== null && { Content: input.Content }),
    ...(input.MessageAttributes !== undefined &&
      input.MessageAttributes !== null && {
        MessageAttributes: serializeAws_restJson1MessageAttributeMap(input.MessageAttributes, context),
      }),
    ...(input.Metadata !== undefined && input.Metadata !== null && { Metadata: input.Metadata }),
    ...(input.Persistence !== undefined && input.Persistence !== null && { Persistence: input.Persistence }),
    ...(input.PushNotification !== undefined &&
      input.PushNotification !== null && {
        PushNotification: serializeAws_restJson1PushNotificationConfiguration(input.PushNotification, context),
      }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = {
    operation: "tag-resource",
  };
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = {
    operation: "untag-resource",
  };
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_restJson1TagKeyList(input.TagKeys, context) }),
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

export const serializeAws_restJson1UpdateChannelCommand = async (
  input: UpdateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Metadata !== undefined && input.Metadata !== null && { Metadata: input.Metadata }),
    ...(input.Mode !== undefined && input.Mode !== null && { Mode: input.Mode }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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

export const serializeAws_restJson1UpdateChannelFlowCommand = async (
  input: UpdateChannelFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel-flows/{ChannelFlowArn}";
  if (input.ChannelFlowArn !== undefined) {
    const labelValue: string = input.ChannelFlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelFlowArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelFlowArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelFlowArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Processors !== undefined &&
      input.Processors !== null && { Processors: serializeAws_restJson1ProcessorList(input.Processors, context) }),
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

export const serializeAws_restJson1UpdateChannelMessageCommand = async (
  input: UpdateChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/messages/{MessageId}";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  if (input.MessageId !== undefined) {
    const labelValue: string = input.MessageId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MessageId.");
    }
    resolvedPath = resolvedPath.replace("{MessageId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MessageId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Content !== undefined && input.Content !== null && { Content: input.Content }),
    ...(input.Metadata !== undefined && input.Metadata !== null && { Metadata: input.Metadata }),
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

export const serializeAws_restJson1UpdateChannelReadMarkerCommand = async (
  input: UpdateChannelReadMarkerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/readMarker";
  if (input.ChannelArn !== undefined) {
    const labelValue: string = input.ChannelArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelArn.");
    }
    resolvedPath = resolvedPath.replace("{ChannelArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelArn.");
  }
  let body: any;
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

export const deserializeAws_restJson1AssociateChannelFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateChannelFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateChannelFlowCommandError(output, context);
  }
  const contents: AssociateChannelFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AssociateChannelFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateChannelFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmessaging#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1BatchCreateChannelMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateChannelMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchCreateChannelMembershipCommandError(output, context);
  }
  const contents: BatchCreateChannelMembershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    BatchChannelMemberships: undefined,
    Errors: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BatchChannelMemberships !== undefined && data.BatchChannelMemberships !== null) {
    contents.BatchChannelMemberships = deserializeAws_restJson1BatchChannelMemberships(
      data.BatchChannelMemberships,
      context
    );
  }
  if (data.Errors !== undefined && data.Errors !== null) {
    contents.Errors = deserializeAws_restJson1BatchCreateChannelMembershipErrors(data.Errors, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchCreateChannelMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateChannelMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ChannelFlowCallbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChannelFlowCallbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ChannelFlowCallbackCommandError(output, context);
  }
  const contents: ChannelFlowCallbackCommandOutput = {
    $metadata: deserializeMetadata(output),
    CallbackId: undefined,
    ChannelArn: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CallbackId !== undefined && data.CallbackId !== null) {
    contents.CallbackId = __expectString(data.CallbackId);
  }
  if (data.ChannelArn !== undefined && data.ChannelArn !== null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ChannelFlowCallbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChannelFlowCallbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateChannelCommandError(output, context);
  }
  const contents: CreateChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelArn: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn !== undefined && data.ChannelArn !== null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmessaging#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateChannelBanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelBanCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateChannelBanCommandError(output, context);
  }
  const contents: CreateChannelBanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelArn: undefined,
    Member: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn !== undefined && data.ChannelArn !== null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.Member !== undefined && data.Member !== null) {
    contents.Member = deserializeAws_restJson1Identity(data.Member, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateChannelBanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelBanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmessaging#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateChannelFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelFlowCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateChannelFlowCommandError(output, context);
  }
  const contents: CreateChannelFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelFlowArn: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelFlowArn !== undefined && data.ChannelFlowArn !== null) {
    contents.ChannelFlowArn = __expectString(data.ChannelFlowArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateChannelFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmessaging#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateChannelMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelMembershipCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateChannelMembershipCommandError(output, context);
  }
  const contents: CreateChannelMembershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelArn: undefined,
    Member: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn !== undefined && data.ChannelArn !== null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.Member !== undefined && data.Member !== null) {
    contents.Member = deserializeAws_restJson1Identity(data.Member, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateChannelMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmessaging#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateChannelModeratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelModeratorCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateChannelModeratorCommandError(output, context);
  }
  const contents: CreateChannelModeratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelArn: undefined,
    ChannelModerator: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn !== undefined && data.ChannelArn !== null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.ChannelModerator !== undefined && data.ChannelModerator !== null) {
    contents.ChannelModerator = deserializeAws_restJson1Identity(data.ChannelModerator, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateChannelModeratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelModeratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmessaging#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteChannelCommandError(output, context);
  }
  const contents: DeleteChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteChannelBanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelBanCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteChannelBanCommandError(output, context);
  }
  const contents: DeleteChannelBanCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteChannelBanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelBanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteChannelFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelFlowCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteChannelFlowCommandError(output, context);
  }
  const contents: DeleteChannelFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteChannelFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteChannelMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelMembershipCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteChannelMembershipCommandError(output, context);
  }
  const contents: DeleteChannelMembershipCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteChannelMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelMessageCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteChannelMessageCommandError(output, context);
  }
  const contents: DeleteChannelMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteChannelMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteChannelModeratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelModeratorCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteChannelModeratorCommandError(output, context);
  }
  const contents: DeleteChannelModeratorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteChannelModeratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelModeratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeChannelCommandError(output, context);
  }
  const contents: DescribeChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    Channel: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Channel !== undefined && data.Channel !== null) {
    contents.Channel = deserializeAws_restJson1Channel(data.Channel, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeChannelBanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelBanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeChannelBanCommandError(output, context);
  }
  const contents: DescribeChannelBanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelBan: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelBan !== undefined && data.ChannelBan !== null) {
    contents.ChannelBan = deserializeAws_restJson1ChannelBan(data.ChannelBan, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeChannelBanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelBanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmessaging#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeChannelFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeChannelFlowCommandError(output, context);
  }
  const contents: DescribeChannelFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelFlow: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelFlow !== undefined && data.ChannelFlow !== null) {
    contents.ChannelFlow = deserializeAws_restJson1ChannelFlow(data.ChannelFlow, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeChannelFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeChannelMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeChannelMembershipCommandError(output, context);
  }
  const contents: DescribeChannelMembershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelMembership: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelMembership !== undefined && data.ChannelMembership !== null) {
    contents.ChannelMembership = deserializeAws_restJson1ChannelMembership(data.ChannelMembership, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeChannelMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmessaging#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeChannelMembershipForAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelMembershipForAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeChannelMembershipForAppInstanceUserCommandError(output, context);
  }
  const contents: DescribeChannelMembershipForAppInstanceUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelMembership: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelMembership !== undefined && data.ChannelMembership !== null) {
    contents.ChannelMembership = deserializeAws_restJson1ChannelMembershipForAppInstanceUserSummary(
      data.ChannelMembership,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeChannelMembershipForAppInstanceUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelMembershipForAppInstanceUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelModeratedByAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommandError(output, context);
  }
  const contents: DescribeChannelModeratedByAppInstanceUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    Channel: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Channel !== undefined && data.Channel !== null) {
    contents.Channel = deserializeAws_restJson1ChannelModeratedByAppInstanceUserSummary(data.Channel, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelModeratedByAppInstanceUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeChannelModeratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelModeratorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeChannelModeratorCommandError(output, context);
  }
  const contents: DescribeChannelModeratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelModerator: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelModerator !== undefined && data.ChannelModerator !== null) {
    contents.ChannelModerator = deserializeAws_restJson1ChannelModerator(data.ChannelModerator, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeChannelModeratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelModeratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmessaging#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DisassociateChannelFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateChannelFlowCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateChannelFlowCommandError(output, context);
  }
  const contents: DisassociateChannelFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateChannelFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateChannelFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmessaging#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetChannelMembershipPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelMembershipPreferencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetChannelMembershipPreferencesCommandError(output, context);
  }
  const contents: GetChannelMembershipPreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelArn: undefined,
    Member: undefined,
    Preferences: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn !== undefined && data.ChannelArn !== null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.Member !== undefined && data.Member !== null) {
    contents.Member = deserializeAws_restJson1Identity(data.Member, context);
  }
  if (data.Preferences !== undefined && data.Preferences !== null) {
    contents.Preferences = deserializeAws_restJson1ChannelMembershipPreferences(data.Preferences, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetChannelMembershipPreferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelMembershipPreferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetChannelMessageCommandError(output, context);
  }
  const contents: GetChannelMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelMessage: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelMessage !== undefined && data.ChannelMessage !== null) {
    contents.ChannelMessage = deserializeAws_restJson1ChannelMessage(data.ChannelMessage, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetChannelMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmessaging#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetChannelMessageStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelMessageStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetChannelMessageStatusCommandError(output, context);
  }
  const contents: GetChannelMessageStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    Status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = deserializeAws_restJson1ChannelMessageStatusStructure(data.Status, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetChannelMessageStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelMessageStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetMessagingSessionEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMessagingSessionEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMessagingSessionEndpointCommandError(output, context);
  }
  const contents: GetMessagingSessionEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    Endpoint: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Endpoint !== undefined && data.Endpoint !== null) {
    contents.Endpoint = deserializeAws_restJson1MessagingSessionEndpoint(data.Endpoint, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetMessagingSessionEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMessagingSessionEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListChannelBansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelBansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChannelBansCommandError(output, context);
  }
  const contents: ListChannelBansCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelArn: undefined,
    ChannelBans: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn !== undefined && data.ChannelArn !== null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.ChannelBans !== undefined && data.ChannelBans !== null) {
    contents.ChannelBans = deserializeAws_restJson1ChannelBanSummaryList(data.ChannelBans, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListChannelBansCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelBansCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListChannelFlowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelFlowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChannelFlowsCommandError(output, context);
  }
  const contents: ListChannelFlowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelFlows: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelFlows !== undefined && data.ChannelFlows !== null) {
    contents.ChannelFlows = deserializeAws_restJson1ChannelFlowSummaryList(data.ChannelFlows, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListChannelFlowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelFlowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListChannelMembershipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelMembershipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChannelMembershipsCommandError(output, context);
  }
  const contents: ListChannelMembershipsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelArn: undefined,
    ChannelMemberships: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn !== undefined && data.ChannelArn !== null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.ChannelMemberships !== undefined && data.ChannelMemberships !== null) {
    contents.ChannelMemberships = deserializeAws_restJson1ChannelMembershipSummaryList(
      data.ChannelMemberships,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListChannelMembershipsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelMembershipsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListChannelMembershipsForAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelMembershipsForAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChannelMembershipsForAppInstanceUserCommandError(output, context);
  }
  const contents: ListChannelMembershipsForAppInstanceUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelMemberships: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelMemberships !== undefined && data.ChannelMemberships !== null) {
    contents.ChannelMemberships = deserializeAws_restJson1ChannelMembershipForAppInstanceUserSummaryList(
      data.ChannelMemberships,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListChannelMembershipsForAppInstanceUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelMembershipsForAppInstanceUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListChannelMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelMessagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChannelMessagesCommandError(output, context);
  }
  const contents: ListChannelMessagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelArn: undefined,
    ChannelMessages: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn !== undefined && data.ChannelArn !== null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.ChannelMessages !== undefined && data.ChannelMessages !== null) {
    contents.ChannelMessages = deserializeAws_restJson1ChannelMessageSummaryList(data.ChannelMessages, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListChannelMessagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelMessagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListChannelModeratorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelModeratorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChannelModeratorsCommandError(output, context);
  }
  const contents: ListChannelModeratorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelArn: undefined,
    ChannelModerators: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn !== undefined && data.ChannelArn !== null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.ChannelModerators !== undefined && data.ChannelModerators !== null) {
    contents.ChannelModerators = deserializeAws_restJson1ChannelModeratorSummaryList(data.ChannelModerators, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListChannelModeratorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelModeratorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChannelsCommandError(output, context);
  }
  const contents: ListChannelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Channels: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Channels !== undefined && data.Channels !== null) {
    contents.Channels = deserializeAws_restJson1ChannelSummaryList(data.Channels, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListChannelsAssociatedWithChannelFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsAssociatedWithChannelFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChannelsAssociatedWithChannelFlowCommandError(output, context);
  }
  const contents: ListChannelsAssociatedWithChannelFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
    Channels: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Channels !== undefined && data.Channels !== null) {
    contents.Channels = deserializeAws_restJson1ChannelAssociatedWithFlowSummaryList(data.Channels, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListChannelsAssociatedWithChannelFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsAssociatedWithChannelFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsModeratedByAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommandError(output, context);
  }
  const contents: ListChannelsModeratedByAppInstanceUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    Channels: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Channels !== undefined && data.Channels !== null) {
    contents.Channels = deserializeAws_restJson1ChannelModeratedByAppInstanceUserSummaryList(data.Channels, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsModeratedByAppInstanceUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1PutChannelMembershipPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutChannelMembershipPreferencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutChannelMembershipPreferencesCommandError(output, context);
  }
  const contents: PutChannelMembershipPreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelArn: undefined,
    Member: undefined,
    Preferences: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn !== undefined && data.ChannelArn !== null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.Member !== undefined && data.Member !== null) {
    contents.Member = deserializeAws_restJson1Identity(data.Member, context);
  }
  if (data.Preferences !== undefined && data.Preferences !== null) {
    contents.Preferences = deserializeAws_restJson1ChannelMembershipPreferences(data.Preferences, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutChannelMembershipPreferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutChannelMembershipPreferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1RedactChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RedactChannelMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RedactChannelMessageCommandError(output, context);
  }
  const contents: RedactChannelMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelArn: undefined,
    MessageId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn !== undefined && data.ChannelArn !== null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.MessageId !== undefined && data.MessageId !== null) {
    contents.MessageId = __expectString(data.MessageId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RedactChannelMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RedactChannelMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1SendChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendChannelMessageCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1SendChannelMessageCommandError(output, context);
  }
  const contents: SendChannelMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelArn: undefined,
    MessageId: undefined,
    Status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn !== undefined && data.ChannelArn !== null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.MessageId !== undefined && data.MessageId !== null) {
    contents.MessageId = __expectString(data.MessageId);
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = deserializeAws_restJson1ChannelMessageStatusStructure(data.Status, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SendChannelMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendChannelMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmessaging#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateChannelCommandError(output, context);
  }
  const contents: UpdateChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelArn: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn !== undefined && data.ChannelArn !== null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateChannelFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateChannelFlowCommandError(output, context);
  }
  const contents: UpdateChannelFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelFlowArn: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelFlowArn !== undefined && data.ChannelFlowArn !== null) {
    contents.ChannelFlowArn = __expectString(data.ChannelFlowArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateChannelFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateChannelMessageCommandError(output, context);
  }
  const contents: UpdateChannelMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelArn: undefined,
    MessageId: undefined,
    Status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn !== undefined && data.ChannelArn !== null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.MessageId !== undefined && data.MessageId !== null) {
    contents.MessageId = __expectString(data.MessageId);
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = deserializeAws_restJson1ChannelMessageStatusStructure(data.Status, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateChannelMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateChannelReadMarkerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelReadMarkerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateChannelReadMarkerCommandError(output, context);
  }
  const contents: UpdateChannelReadMarkerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelArn: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn !== undefined && data.ChannelArn !== null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateChannelReadMarkerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelReadMarkerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceFailureException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThrottledClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottledClientException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ThrottledClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1UnauthorizedClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedClientException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new UnauthorizedClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1ChannelMembershipPreferences = (
  input: ChannelMembershipPreferences,
  context: __SerdeContext
): any => {
  return {
    ...(input.PushNotifications !== undefined &&
      input.PushNotifications !== null && {
        PushNotifications: serializeAws_restJson1PushNotificationPreferences(input.PushNotifications, context),
      }),
  };
};

const serializeAws_restJson1ChannelMessageCallback = (input: ChannelMessageCallback, context: __SerdeContext): any => {
  return {
    ...(input.Content !== undefined && input.Content !== null && { Content: input.Content }),
    ...(input.MessageAttributes !== undefined &&
      input.MessageAttributes !== null && {
        MessageAttributes: serializeAws_restJson1MessageAttributeMap(input.MessageAttributes, context),
      }),
    ...(input.MessageId !== undefined && input.MessageId !== null && { MessageId: input.MessageId }),
    ...(input.Metadata !== undefined && input.Metadata !== null && { Metadata: input.Metadata }),
    ...(input.PushNotification !== undefined &&
      input.PushNotification !== null && {
        PushNotification: serializeAws_restJson1PushNotificationConfiguration(input.PushNotification, context),
      }),
  };
};

const serializeAws_restJson1LambdaConfiguration = (input: LambdaConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.InvocationType !== undefined &&
      input.InvocationType !== null && { InvocationType: input.InvocationType }),
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_restJson1MemberArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1MessageAttributeMap = (
  input: Record<string, MessageAttributeValue>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1MessageAttributeValue(value, context),
    };
  }, {});
};

const serializeAws_restJson1MessageAttributeStringValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1MessageAttributeValue = (input: MessageAttributeValue, context: __SerdeContext): any => {
  return {
    ...(input.StringValues !== undefined &&
      input.StringValues !== null && {
        StringValues: serializeAws_restJson1MessageAttributeStringValues(input.StringValues, context),
      }),
  };
};

const serializeAws_restJson1Processor = (input: Processor, context: __SerdeContext): any => {
  return {
    ...(input.Configuration !== undefined &&
      input.Configuration !== null && {
        Configuration: serializeAws_restJson1ProcessorConfiguration(input.Configuration, context),
      }),
    ...(input.ExecutionOrder !== undefined &&
      input.ExecutionOrder !== null && { ExecutionOrder: input.ExecutionOrder }),
    ...(input.FallbackAction !== undefined &&
      input.FallbackAction !== null && { FallbackAction: input.FallbackAction }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_restJson1ProcessorConfiguration = (input: ProcessorConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Lambda !== undefined &&
      input.Lambda !== null && { Lambda: serializeAws_restJson1LambdaConfiguration(input.Lambda, context) }),
  };
};

const serializeAws_restJson1ProcessorList = (input: Processor[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Processor(entry, context);
    });
};

const serializeAws_restJson1PushNotificationConfiguration = (
  input: PushNotificationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
    ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1PushNotificationPreferences = (
  input: PushNotificationPreferences,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowNotifications !== undefined &&
      input.AllowNotifications !== null && { AllowNotifications: input.AllowNotifications }),
    ...(input.FilterRule !== undefined && input.FilterRule !== null && { FilterRule: input.FilterRule }),
  };
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Tag(entry, context);
    });
};

const deserializeAws_restJson1AppInstanceUserMembershipSummary = (
  output: any,
  context: __SerdeContext
): AppInstanceUserMembershipSummary => {
  return {
    ReadMarkerTimestamp:
      output.ReadMarkerTimestamp !== undefined && output.ReadMarkerTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReadMarkerTimestamp)))
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1BatchChannelMemberships = (
  output: any,
  context: __SerdeContext
): BatchChannelMemberships => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    InvitedBy:
      output.InvitedBy !== undefined && output.InvitedBy !== null
        ? deserializeAws_restJson1Identity(output.InvitedBy, context)
        : undefined,
    Members:
      output.Members !== undefined && output.Members !== null
        ? deserializeAws_restJson1Members(output.Members, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1BatchCreateChannelMembershipError = (
  output: any,
  context: __SerdeContext
): BatchCreateChannelMembershipError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    MemberArn: __expectString(output.MemberArn),
  } as any;
};

const deserializeAws_restJson1BatchCreateChannelMembershipErrors = (
  output: any,
  context: __SerdeContext
): BatchCreateChannelMembershipError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchCreateChannelMembershipError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Channel = (output: any, context: __SerdeContext): Channel => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    ChannelFlowArn: __expectString(output.ChannelFlowArn),
    CreatedBy:
      output.CreatedBy !== undefined && output.CreatedBy !== null
        ? deserializeAws_restJson1Identity(output.CreatedBy, context)
        : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    LastMessageTimestamp:
      output.LastMessageTimestamp !== undefined && output.LastMessageTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastMessageTimestamp)))
        : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp !== undefined && output.LastUpdatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    Metadata: __expectString(output.Metadata),
    Mode: __expectString(output.Mode),
    Name: __expectString(output.Name),
    Privacy: __expectString(output.Privacy),
  } as any;
};

const deserializeAws_restJson1ChannelAssociatedWithFlowSummary = (
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

const deserializeAws_restJson1ChannelAssociatedWithFlowSummaryList = (
  output: any,
  context: __SerdeContext
): ChannelAssociatedWithFlowSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelAssociatedWithFlowSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChannelBan = (output: any, context: __SerdeContext): ChannelBan => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    CreatedBy:
      output.CreatedBy !== undefined && output.CreatedBy !== null
        ? deserializeAws_restJson1Identity(output.CreatedBy, context)
        : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    Member:
      output.Member !== undefined && output.Member !== null
        ? deserializeAws_restJson1Identity(output.Member, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ChannelBanSummary = (output: any, context: __SerdeContext): ChannelBanSummary => {
  return {
    Member:
      output.Member !== undefined && output.Member !== null
        ? deserializeAws_restJson1Identity(output.Member, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ChannelBanSummaryList = (output: any, context: __SerdeContext): ChannelBanSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelBanSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChannelFlow = (output: any, context: __SerdeContext): ChannelFlow => {
  return {
    ChannelFlowArn: __expectString(output.ChannelFlowArn),
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp !== undefined && output.LastUpdatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    Name: __expectString(output.Name),
    Processors:
      output.Processors !== undefined && output.Processors !== null
        ? deserializeAws_restJson1ProcessorList(output.Processors, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ChannelFlowSummary = (output: any, context: __SerdeContext): ChannelFlowSummary => {
  return {
    ChannelFlowArn: __expectString(output.ChannelFlowArn),
    Name: __expectString(output.Name),
    Processors:
      output.Processors !== undefined && output.Processors !== null
        ? deserializeAws_restJson1ProcessorList(output.Processors, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ChannelFlowSummaryList = (output: any, context: __SerdeContext): ChannelFlowSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelFlowSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChannelMembership = (output: any, context: __SerdeContext): ChannelMembership => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    InvitedBy:
      output.InvitedBy !== undefined && output.InvitedBy !== null
        ? deserializeAws_restJson1Identity(output.InvitedBy, context)
        : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp !== undefined && output.LastUpdatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    Member:
      output.Member !== undefined && output.Member !== null
        ? deserializeAws_restJson1Identity(output.Member, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ChannelMembershipForAppInstanceUserSummary = (
  output: any,
  context: __SerdeContext
): ChannelMembershipForAppInstanceUserSummary => {
  return {
    AppInstanceUserMembershipSummary:
      output.AppInstanceUserMembershipSummary !== undefined && output.AppInstanceUserMembershipSummary !== null
        ? deserializeAws_restJson1AppInstanceUserMembershipSummary(output.AppInstanceUserMembershipSummary, context)
        : undefined,
    ChannelSummary:
      output.ChannelSummary !== undefined && output.ChannelSummary !== null
        ? deserializeAws_restJson1ChannelSummary(output.ChannelSummary, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ChannelMembershipForAppInstanceUserSummaryList = (
  output: any,
  context: __SerdeContext
): ChannelMembershipForAppInstanceUserSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelMembershipForAppInstanceUserSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChannelMembershipPreferences = (
  output: any,
  context: __SerdeContext
): ChannelMembershipPreferences => {
  return {
    PushNotifications:
      output.PushNotifications !== undefined && output.PushNotifications !== null
        ? deserializeAws_restJson1PushNotificationPreferences(output.PushNotifications, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ChannelMembershipSummary = (
  output: any,
  context: __SerdeContext
): ChannelMembershipSummary => {
  return {
    Member:
      output.Member !== undefined && output.Member !== null
        ? deserializeAws_restJson1Identity(output.Member, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ChannelMembershipSummaryList = (
  output: any,
  context: __SerdeContext
): ChannelMembershipSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelMembershipSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChannelMessage = (output: any, context: __SerdeContext): ChannelMessage => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    Content: __expectString(output.Content),
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    LastEditedTimestamp:
      output.LastEditedTimestamp !== undefined && output.LastEditedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastEditedTimestamp)))
        : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp !== undefined && output.LastUpdatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    MessageAttributes:
      output.MessageAttributes !== undefined && output.MessageAttributes !== null
        ? deserializeAws_restJson1MessageAttributeMap(output.MessageAttributes, context)
        : undefined,
    MessageId: __expectString(output.MessageId),
    Metadata: __expectString(output.Metadata),
    Persistence: __expectString(output.Persistence),
    Redacted: __expectBoolean(output.Redacted),
    Sender:
      output.Sender !== undefined && output.Sender !== null
        ? deserializeAws_restJson1Identity(output.Sender, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1ChannelMessageStatusStructure(output.Status, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ChannelMessageStatusStructure = (
  output: any,
  context: __SerdeContext
): ChannelMessageStatusStructure => {
  return {
    Detail: __expectString(output.Detail),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1ChannelMessageSummary = (output: any, context: __SerdeContext): ChannelMessageSummary => {
  return {
    Content: __expectString(output.Content),
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    LastEditedTimestamp:
      output.LastEditedTimestamp !== undefined && output.LastEditedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastEditedTimestamp)))
        : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp !== undefined && output.LastUpdatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    MessageAttributes:
      output.MessageAttributes !== undefined && output.MessageAttributes !== null
        ? deserializeAws_restJson1MessageAttributeMap(output.MessageAttributes, context)
        : undefined,
    MessageId: __expectString(output.MessageId),
    Metadata: __expectString(output.Metadata),
    Redacted: __expectBoolean(output.Redacted),
    Sender:
      output.Sender !== undefined && output.Sender !== null
        ? deserializeAws_restJson1Identity(output.Sender, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1ChannelMessageStatusStructure(output.Status, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ChannelMessageSummaryList = (
  output: any,
  context: __SerdeContext
): ChannelMessageSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelMessageSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChannelModeratedByAppInstanceUserSummary = (
  output: any,
  context: __SerdeContext
): ChannelModeratedByAppInstanceUserSummary => {
  return {
    ChannelSummary:
      output.ChannelSummary !== undefined && output.ChannelSummary !== null
        ? deserializeAws_restJson1ChannelSummary(output.ChannelSummary, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ChannelModeratedByAppInstanceUserSummaryList = (
  output: any,
  context: __SerdeContext
): ChannelModeratedByAppInstanceUserSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelModeratedByAppInstanceUserSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChannelModerator = (output: any, context: __SerdeContext): ChannelModerator => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    CreatedBy:
      output.CreatedBy !== undefined && output.CreatedBy !== null
        ? deserializeAws_restJson1Identity(output.CreatedBy, context)
        : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    Moderator:
      output.Moderator !== undefined && output.Moderator !== null
        ? deserializeAws_restJson1Identity(output.Moderator, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ChannelModeratorSummary = (
  output: any,
  context: __SerdeContext
): ChannelModeratorSummary => {
  return {
    Moderator:
      output.Moderator !== undefined && output.Moderator !== null
        ? deserializeAws_restJson1Identity(output.Moderator, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ChannelModeratorSummaryList = (
  output: any,
  context: __SerdeContext
): ChannelModeratorSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelModeratorSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChannelSummary = (output: any, context: __SerdeContext): ChannelSummary => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    LastMessageTimestamp:
      output.LastMessageTimestamp !== undefined && output.LastMessageTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastMessageTimestamp)))
        : undefined,
    Metadata: __expectString(output.Metadata),
    Mode: __expectString(output.Mode),
    Name: __expectString(output.Name),
    Privacy: __expectString(output.Privacy),
  } as any;
};

const deserializeAws_restJson1ChannelSummaryList = (output: any, context: __SerdeContext): ChannelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Identity = (output: any, context: __SerdeContext): Identity => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1LambdaConfiguration = (output: any, context: __SerdeContext): LambdaConfiguration => {
  return {
    InvocationType: __expectString(output.InvocationType),
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

const deserializeAws_restJson1Members = (output: any, context: __SerdeContext): Identity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Identity(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MessageAttributeMap = (
  output: any,
  context: __SerdeContext
): Record<string, MessageAttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, MessageAttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1MessageAttributeValue(value, context),
    };
  }, {});
};

const deserializeAws_restJson1MessageAttributeStringValues = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1MessageAttributeValue = (output: any, context: __SerdeContext): MessageAttributeValue => {
  return {
    StringValues:
      output.StringValues !== undefined && output.StringValues !== null
        ? deserializeAws_restJson1MessageAttributeStringValues(output.StringValues, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MessagingSessionEndpoint = (
  output: any,
  context: __SerdeContext
): MessagingSessionEndpoint => {
  return {
    Url: __expectString(output.Url),
  } as any;
};

const deserializeAws_restJson1Processor = (output: any, context: __SerdeContext): Processor => {
  return {
    Configuration:
      output.Configuration !== undefined && output.Configuration !== null
        ? deserializeAws_restJson1ProcessorConfiguration(output.Configuration, context)
        : undefined,
    ExecutionOrder: __expectInt32(output.ExecutionOrder),
    FallbackAction: __expectString(output.FallbackAction),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1ProcessorConfiguration = (
  output: any,
  context: __SerdeContext
): ProcessorConfiguration => {
  return {
    Lambda:
      output.Lambda !== undefined && output.Lambda !== null
        ? deserializeAws_restJson1LambdaConfiguration(output.Lambda, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ProcessorList = (output: any, context: __SerdeContext): Processor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Processor(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PushNotificationPreferences = (
  output: any,
  context: __SerdeContext
): PushNotificationPreferences => {
  return {
    AllowNotifications: __expectString(output.AllowNotifications),
    FilterRule: __expectString(output.FilterRule),
  } as any;
};

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
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

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
