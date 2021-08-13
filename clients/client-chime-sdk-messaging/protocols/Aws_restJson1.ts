import {
  BatchCreateChannelMembershipCommandInput,
  BatchCreateChannelMembershipCommandOutput,
} from "../commands/BatchCreateChannelMembershipCommand";
import { CreateChannelBanCommandInput, CreateChannelBanCommandOutput } from "../commands/CreateChannelBanCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "../commands/CreateChannelCommand";
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
import { GetChannelMessageCommandInput, GetChannelMessageCommandOutput } from "../commands/GetChannelMessageCommand";
import {
  GetMessagingSessionEndpointCommandInput,
  GetMessagingSessionEndpointCommandOutput,
} from "../commands/GetMessagingSessionEndpointCommand";
import { ListChannelBansCommandInput, ListChannelBansCommandOutput } from "../commands/ListChannelBansCommand";
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
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "../commands/ListChannelsCommand";
import {
  ListChannelsModeratedByAppInstanceUserCommandInput,
  ListChannelsModeratedByAppInstanceUserCommandOutput,
} from "../commands/ListChannelsModeratedByAppInstanceUserCommand";
import {
  RedactChannelMessageCommandInput,
  RedactChannelMessageCommandOutput,
} from "../commands/RedactChannelMessageCommand";
import { SendChannelMessageCommandInput, SendChannelMessageCommandOutput } from "../commands/SendChannelMessageCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "../commands/UpdateChannelCommand";
import {
  UpdateChannelMessageCommandInput,
  UpdateChannelMessageCommandOutput,
} from "../commands/UpdateChannelMessageCommand";
import {
  UpdateChannelReadMarkerCommandInput,
  UpdateChannelReadMarkerCommandOutput,
} from "../commands/UpdateChannelReadMarkerCommand";
import {
  AppInstanceUserMembershipSummary,
  BadRequestException,
  BatchChannelMemberships,
  BatchCreateChannelMembershipError,
  Channel,
  ChannelBan,
  ChannelBanSummary,
  ChannelMembership,
  ChannelMembershipForAppInstanceUserSummary,
  ChannelMembershipSummary,
  ChannelMessage,
  ChannelMessageSummary,
  ChannelModeratedByAppInstanceUserSummary,
  ChannelModerator,
  ChannelModeratorSummary,
  ChannelSummary,
  ConflictException,
  ForbiddenException,
  Identity,
  MessagingSessionEndpoint,
  NotFoundException,
  ResourceLimitExceededException,
  ServiceFailureException,
  ServiceUnavailableException,
  Tag,
  ThrottledClientException,
  UnauthorizedClientException,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

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

export const serializeAws_restJson1CreateChannelCommand = async (
  input: CreateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
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

export const serializeAws_restJson1GetMessagingSessionEndpointCommand = async (
  input: GetMessagingSessionEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
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

export const serializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommand = async (
  input: ListChannelsModeratedByAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ChimeBearer) && { "x-amz-chime-bearer": input.ChimeBearer! }),
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
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
    ...(input.Metadata !== undefined && input.Metadata !== null && { Metadata: input.Metadata }),
    ...(input.Persistence !== undefined && input.Persistence !== null && { Persistence: input.Persistence }),
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmessaging#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmessaging#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmessaging#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmessaging#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.chimesdkmessaging#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.chimesdkmessaging#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.chimesdkmessaging#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.chimesdkmessaging#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  };
  const data: any = await parseBody(output.body, context);
  if (data.ChannelArn !== undefined && data.ChannelArn !== null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.MessageId !== undefined && data.MessageId !== null) {
    contents.MessageId = __expectString(data.MessageId);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  };
  const data: any = await parseBody(output.body, context);
  if (data.ChannelArn !== undefined && data.ChannelArn !== null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.MessageId !== undefined && data.MessageId !== null) {
    contents.MessageId = __expectString(data.MessageId);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmessaging#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.chimesdkmessaging#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmessaging#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmessaging#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmessaging#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmessaging#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmessaging#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ResourceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const contents: ResourceLimitExceededException = {
    name: "ResourceLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ServiceFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceFailureException> => {
  const contents: ServiceFailureException = {
    name: "ServiceFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ThrottledClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottledClientException> => {
  const contents: ThrottledClientException = {
    name: "ThrottledClientException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1UnauthorizedClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedClientException> => {
  const contents: UnauthorizedClientException = {
    name: "UnauthorizedClientException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
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

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
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
        ? new Date(Math.round(output.ReadMarkerTimestamp * 1000))
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchCreateChannelMembershipError(entry, context);
    });
};

const deserializeAws_restJson1Channel = (output: any, context: __SerdeContext): Channel => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    CreatedBy:
      output.CreatedBy !== undefined && output.CreatedBy !== null
        ? deserializeAws_restJson1Identity(output.CreatedBy, context)
        : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? new Date(Math.round(output.CreatedTimestamp * 1000))
        : undefined,
    LastMessageTimestamp:
      output.LastMessageTimestamp !== undefined && output.LastMessageTimestamp !== null
        ? new Date(Math.round(output.LastMessageTimestamp * 1000))
        : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp !== undefined && output.LastUpdatedTimestamp !== null
        ? new Date(Math.round(output.LastUpdatedTimestamp * 1000))
        : undefined,
    Metadata: __expectString(output.Metadata),
    Mode: __expectString(output.Mode),
    Name: __expectString(output.Name),
    Privacy: __expectString(output.Privacy),
  } as any;
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
        ? new Date(Math.round(output.CreatedTimestamp * 1000))
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelBanSummary(entry, context);
    });
};

const deserializeAws_restJson1ChannelMembership = (output: any, context: __SerdeContext): ChannelMembership => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? new Date(Math.round(output.CreatedTimestamp * 1000))
        : undefined,
    InvitedBy:
      output.InvitedBy !== undefined && output.InvitedBy !== null
        ? deserializeAws_restJson1Identity(output.InvitedBy, context)
        : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp !== undefined && output.LastUpdatedTimestamp !== null
        ? new Date(Math.round(output.LastUpdatedTimestamp * 1000))
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelMembershipForAppInstanceUserSummary(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelMembershipSummary(entry, context);
    });
};

const deserializeAws_restJson1ChannelMessage = (output: any, context: __SerdeContext): ChannelMessage => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    Content: __expectString(output.Content),
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? new Date(Math.round(output.CreatedTimestamp * 1000))
        : undefined,
    LastEditedTimestamp:
      output.LastEditedTimestamp !== undefined && output.LastEditedTimestamp !== null
        ? new Date(Math.round(output.LastEditedTimestamp * 1000))
        : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp !== undefined && output.LastUpdatedTimestamp !== null
        ? new Date(Math.round(output.LastUpdatedTimestamp * 1000))
        : undefined,
    MessageId: __expectString(output.MessageId),
    Metadata: __expectString(output.Metadata),
    Persistence: __expectString(output.Persistence),
    Redacted: __expectBoolean(output.Redacted),
    Sender:
      output.Sender !== undefined && output.Sender !== null
        ? deserializeAws_restJson1Identity(output.Sender, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ChannelMessageSummary = (output: any, context: __SerdeContext): ChannelMessageSummary => {
  return {
    Content: __expectString(output.Content),
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? new Date(Math.round(output.CreatedTimestamp * 1000))
        : undefined,
    LastEditedTimestamp:
      output.LastEditedTimestamp !== undefined && output.LastEditedTimestamp !== null
        ? new Date(Math.round(output.LastEditedTimestamp * 1000))
        : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp !== undefined && output.LastUpdatedTimestamp !== null
        ? new Date(Math.round(output.LastUpdatedTimestamp * 1000))
        : undefined,
    MessageId: __expectString(output.MessageId),
    Metadata: __expectString(output.Metadata),
    Redacted: __expectBoolean(output.Redacted),
    Sender:
      output.Sender !== undefined && output.Sender !== null
        ? deserializeAws_restJson1Identity(output.Sender, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ChannelMessageSummaryList = (
  output: any,
  context: __SerdeContext
): ChannelMessageSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelMessageSummary(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelModeratedByAppInstanceUserSummary(entry, context);
    });
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
        ? new Date(Math.round(output.CreatedTimestamp * 1000))
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelModeratorSummary(entry, context);
    });
};

const deserializeAws_restJson1ChannelSummary = (output: any, context: __SerdeContext): ChannelSummary => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    LastMessageTimestamp:
      output.LastMessageTimestamp !== undefined && output.LastMessageTimestamp !== null
        ? new Date(Math.round(output.LastMessageTimestamp * 1000))
        : undefined,
    Metadata: __expectString(output.Metadata),
    Mode: __expectString(output.Mode),
    Name: __expectString(output.Name),
    Privacy: __expectString(output.Privacy),
  } as any;
};

const deserializeAws_restJson1ChannelSummaryList = (output: any, context: __SerdeContext): ChannelSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelSummary(entry, context);
    });
};

const deserializeAws_restJson1Identity = (output: any, context: __SerdeContext): Identity => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1Members = (output: any, context: __SerdeContext): Identity[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Identity(entry, context);
    });
};

const deserializeAws_restJson1MessagingSessionEndpoint = (
  output: any,
  context: __SerdeContext
): MessagingSessionEndpoint => {
  return {
    Url: __expectString(output.Url),
  } as any;
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
