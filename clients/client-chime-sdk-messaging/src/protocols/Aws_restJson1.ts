// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  isSerializableHeaderValue,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  Channel,
  ChannelBan,
  ChannelFlow,
  ChannelMembership,
  ChannelMembershipForAppInstanceUserSummary,
  ChannelMembershipPreferences,
  ChannelMessage,
  ChannelMessageCallback,
  ChannelMessageSummary,
  ChannelModeratedByAppInstanceUserSummary,
  ChannelModerator,
  ChannelSummary,
  ConflictException,
  ElasticChannelConfiguration,
  ExpirationSettings,
  ForbiddenException,
  LambdaConfiguration,
  MessageAttributeValue,
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
  Tag,
  Target,
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
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/channel-flow");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChannelFlowArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchCreateChannelMembershipCommand
 */
export const se_BatchCreateChannelMembershipCommand = async (
  input: BatchCreateChannelMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/memberships");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    [_o]: [, "batch-create"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      MemberArns: (_) => _json(_),
      SubChannelId: [],
      Type: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ChannelFlowCallbackCommand
 */
export const se_ChannelFlowCallbackCommand = async (
  input: ChannelFlowCallbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/channels/{ChannelArn}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    [_o]: [, "channel-flow-callback"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      CallbackId: [true, (_) => _ ?? generateIdempotencyToken()],
      ChannelMessage: (_) => _json(_),
      DeleteResource: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

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
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AppInstanceArn: [],
      ChannelId: [],
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ElasticChannelConfiguration: (_) => _json(_),
      ExpirationSettings: (_) => _json(_),
      MemberArns: (_) => _json(_),
      Metadata: [],
      Mode: [],
      ModeratorArns: (_) => _json(_),
      Name: [],
      Privacy: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateChannelBanCommand
 */
export const se_CreateChannelBanCommand = async (
  input: CreateChannelBanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/bans");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      MemberArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateChannelFlowCommand
 */
export const se_CreateChannelFlowCommand = async (
  input: CreateChannelFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/channel-flows");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AppInstanceArn: [],
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Name: [],
      Processors: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateChannelMembershipCommand
 */
export const se_CreateChannelMembershipCommand = async (
  input: CreateChannelMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/memberships");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      MemberArn: [],
      SubChannelId: [],
      Type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateChannelModeratorCommand
 */
export const se_CreateChannelModeratorCommand = async (
  input: CreateChannelModeratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/moderators");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChannelModeratorArn: [],
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
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteChannelBanCommand
 */
export const se_DeleteChannelBanCommand = async (
  input: DeleteChannelBanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/bans/{MemberArn}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  b.p("MemberArn", () => input.MemberArn!, "{MemberArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteChannelFlowCommand
 */
export const se_DeleteChannelFlowCommand = async (
  input: DeleteChannelFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channel-flows/{ChannelFlowArn}");
  b.p("ChannelFlowArn", () => input.ChannelFlowArn!, "{ChannelFlowArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteChannelMembershipCommand
 */
export const se_DeleteChannelMembershipCommand = async (
  input: DeleteChannelMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/memberships/{MemberArn}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  b.p("MemberArn", () => input.MemberArn!, "{MemberArn}", false);
  const query: any = map({
    [_sci]: [, input[_SCI]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteChannelMessageCommand
 */
export const se_DeleteChannelMessageCommand = async (
  input: DeleteChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/messages/{MessageId}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  b.p("MessageId", () => input.MessageId!, "{MessageId}", false);
  const query: any = map({
    [_sci]: [, input[_SCI]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteChannelModeratorCommand
 */
export const se_DeleteChannelModeratorCommand = async (
  input: DeleteChannelModeratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/moderators/{ChannelModeratorArn}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  b.p("ChannelModeratorArn", () => input.ChannelModeratorArn!, "{ChannelModeratorArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMessagingStreamingConfigurationsCommand
 */
export const se_DeleteMessagingStreamingConfigurationsCommand = async (
  input: DeleteMessagingStreamingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/app-instances/{AppInstanceArn}/streaming-configurations");
  b.p("AppInstanceArn", () => input.AppInstanceArn!, "{AppInstanceArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeChannelCommand
 */
export const se_DescribeChannelCommand = async (
  input: DescribeChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeChannelBanCommand
 */
export const se_DescribeChannelBanCommand = async (
  input: DescribeChannelBanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/bans/{MemberArn}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  b.p("MemberArn", () => input.MemberArn!, "{MemberArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeChannelFlowCommand
 */
export const se_DescribeChannelFlowCommand = async (
  input: DescribeChannelFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channel-flows/{ChannelFlowArn}");
  b.p("ChannelFlowArn", () => input.ChannelFlowArn!, "{ChannelFlowArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeChannelMembershipCommand
 */
export const se_DescribeChannelMembershipCommand = async (
  input: DescribeChannelMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/memberships/{MemberArn}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  b.p("MemberArn", () => input.MemberArn!, "{MemberArn}", false);
  const query: any = map({
    [_sci]: [, input[_SCI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeChannelMembershipForAppInstanceUserCommand
 */
export const se_DescribeChannelMembershipForAppInstanceUserCommand = async (
  input: DescribeChannelMembershipForAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    [_s]: [, "app-instance-user-membership"],
    [_aiua]: [, __expectNonNull(input[_AIUA]!, `AppInstanceUserArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommand
 */
export const se_DescribeChannelModeratedByAppInstanceUserCommand = async (
  input: DescribeChannelModeratedByAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    [_s]: [, "app-instance-user-moderated-channel"],
    [_aiua]: [, __expectNonNull(input[_AIUA]!, `AppInstanceUserArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeChannelModeratorCommand
 */
export const se_DescribeChannelModeratorCommand = async (
  input: DescribeChannelModeratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/moderators/{ChannelModeratorArn}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  b.p("ChannelModeratorArn", () => input.ChannelModeratorArn!, "{ChannelModeratorArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateChannelFlowCommand
 */
export const se_DisassociateChannelFlowCommand = async (
  input: DisassociateChannelFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/channel-flow/{ChannelFlowArn}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  b.p("ChannelFlowArn", () => input.ChannelFlowArn!, "{ChannelFlowArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetChannelMembershipPreferencesCommand
 */
export const se_GetChannelMembershipPreferencesCommand = async (
  input: GetChannelMembershipPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/memberships/{MemberArn}/preferences");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  b.p("MemberArn", () => input.MemberArn!, "{MemberArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetChannelMessageCommand
 */
export const se_GetChannelMessageCommand = async (
  input: GetChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/messages/{MessageId}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  b.p("MessageId", () => input.MessageId!, "{MessageId}", false);
  const query: any = map({
    [_sci]: [, input[_SCI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetChannelMessageStatusCommand
 */
export const se_GetChannelMessageStatusCommand = async (
  input: GetChannelMessageStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/messages/{MessageId}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  b.p("MessageId", () => input.MessageId!, "{MessageId}", false);
  const query: any = map({
    [_s]: [, "message-status"],
    [_sci]: [, input[_SCI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMessagingSessionEndpointCommand
 */
export const se_GetMessagingSessionEndpointCommand = async (
  input: GetMessagingSessionEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/endpoints/messaging-session");
  const query: any = map({
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMessagingStreamingConfigurationsCommand
 */
export const se_GetMessagingStreamingConfigurationsCommand = async (
  input: GetMessagingStreamingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/app-instances/{AppInstanceArn}/streaming-configurations");
  b.p("AppInstanceArn", () => input.AppInstanceArn!, "{AppInstanceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListChannelBansCommand
 */
export const se_ListChannelBansCommand = async (
  input: ListChannelBansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/bans");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt_]: [, input[_NTe]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListChannelFlowsCommand
 */
export const se_ListChannelFlowsCommand = async (
  input: ListChannelFlowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channel-flows");
  const query: any = map({
    [_aia]: [, __expectNonNull(input[_AIA]!, `AppInstanceArn`)],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt_]: [, input[_NTe]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListChannelMembershipsCommand
 */
export const se_ListChannelMembershipsCommand = async (
  input: ListChannelMembershipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/memberships");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    [_t]: [, input[_T]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt_]: [, input[_NTe]!],
    [_sci]: [, input[_SCI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListChannelMembershipsForAppInstanceUserCommand
 */
export const se_ListChannelMembershipsForAppInstanceUserCommand = async (
  input: ListChannelMembershipsForAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels");
  const query: any = map({
    [_s]: [, "app-instance-user-memberships"],
    [_aiua]: [, input[_AIUA]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt_]: [, input[_NTe]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListChannelMessagesCommand
 */
export const se_ListChannelMessagesCommand = async (
  input: ListChannelMessagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/messages");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    [_so]: [, input[_SO]!],
    [_nb]: [() => input.NotBefore !== void 0, () => __serializeDateTime(input[_NB]!).toString()],
    [_na]: [() => input.NotAfter !== void 0, () => __serializeDateTime(input[_NA]!).toString()],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt_]: [, input[_NTe]!],
    [_sci]: [, input[_SCI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListChannelModeratorsCommand
 */
export const se_ListChannelModeratorsCommand = async (
  input: ListChannelModeratorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/moderators");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt_]: [, input[_NTe]!],
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
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels");
  const query: any = map({
    [_aia]: [, __expectNonNull(input[_AIA]!, `AppInstanceArn`)],
    [_p]: [, input[_P]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt_]: [, input[_NTe]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListChannelsAssociatedWithChannelFlowCommand
 */
export const se_ListChannelsAssociatedWithChannelFlowCommand = async (
  input: ListChannelsAssociatedWithChannelFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channels");
  const query: any = map({
    [_s]: [, "channel-flow-associations"],
    [_cfa]: [, __expectNonNull(input[_CFA]!, `ChannelFlowArn`)],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt_]: [, input[_NTe]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommand
 */
export const se_ListChannelsModeratedByAppInstanceUserCommand = async (
  input: ListChannelsModeratedByAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels");
  const query: any = map({
    [_s]: [, "app-instance-user-moderated-channels"],
    [_aiua]: [, input[_AIUA]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt_]: [, input[_NTe]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSubChannelsCommand
 */
export const se_ListSubChannelsCommand = async (
  input: ListSubChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/subchannels");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt_]: [, input[_NTe]!],
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
  b.bp("/tags");
  const query: any = map({
    [_a]: [, __expectNonNull(input[_RARN]!, `ResourceARN`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutChannelExpirationSettingsCommand
 */
export const se_PutChannelExpirationSettingsCommand = async (
  input: PutChannelExpirationSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/expiration-settings");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ExpirationSettings: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutChannelMembershipPreferencesCommand
 */
export const se_PutChannelMembershipPreferencesCommand = async (
  input: PutChannelMembershipPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/memberships/{MemberArn}/preferences");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  b.p("MemberArn", () => input.MemberArn!, "{MemberArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Preferences: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutMessagingStreamingConfigurationsCommand
 */
export const se_PutMessagingStreamingConfigurationsCommand = async (
  input: PutMessagingStreamingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/app-instances/{AppInstanceArn}/streaming-configurations");
  b.p("AppInstanceArn", () => input.AppInstanceArn!, "{AppInstanceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      StreamingConfigurations: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RedactChannelMessageCommand
 */
export const se_RedactChannelMessageCommand = async (
  input: RedactChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/messages/{MessageId}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  b.p("MessageId", () => input.MessageId!, "{MessageId}", false);
  const query: any = map({
    [_o]: [, "redact"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      SubChannelId: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchChannelsCommand
 */
export const se_SearchChannelsCommand = async (
  input: SearchChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels");
  const query: any = map({
    [_o]: [, "search"],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt_]: [, input[_NTe]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Fields: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SendChannelMessageCommand
 */
export const se_SendChannelMessageCommand = async (
  input: SendChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/messages");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Content: [],
      ContentType: [],
      MessageAttributes: (_) => _json(_),
      Metadata: [],
      Persistence: [],
      PushNotification: (_) => _json(_),
      SubChannelId: [],
      Target: (_) => _json(_),
      Type: [],
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
  b.bp("/tags");
  const query: any = map({
    [_o]: [, "tag-resource"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceARN: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
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
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags");
  const query: any = map({
    [_o]: [, "untag-resource"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceARN: [],
      TagKeys: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
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
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Metadata: [],
      Mode: [],
      Name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateChannelFlowCommand
 */
export const se_UpdateChannelFlowCommand = async (
  input: UpdateChannelFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/channel-flows/{ChannelFlowArn}");
  b.p("ChannelFlowArn", () => input.ChannelFlowArn!, "{ChannelFlowArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
      Processors: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateChannelMessageCommand
 */
export const se_UpdateChannelMessageCommand = async (
  input: UpdateChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/messages/{MessageId}");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  b.p("MessageId", () => input.MessageId!, "{MessageId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Content: [],
      ContentType: [],
      Metadata: [],
      SubChannelId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateChannelReadMarkerCommand
 */
export const se_UpdateChannelReadMarkerCommand = async (
  input: UpdateChannelReadMarkerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacb]: input[_CB]!,
  });
  b.bp("/channels/{ChannelArn}/readMarker");
  b.p("ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateChannelFlowCommand
 */
export const de_AssociateChannelFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateChannelFlowCommandOutput> => {
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
 * deserializeAws_restJson1BatchCreateChannelMembershipCommand
 */
export const de_BatchCreateChannelMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateChannelMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BatchChannelMemberships: _json,
    Errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ChannelFlowCallbackCommand
 */
export const de_ChannelFlowCallbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChannelFlowCallbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CallbackId: __expectString,
    ChannelArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateChannelCommand
 */
export const de_CreateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateChannelBanCommand
 */
export const de_CreateChannelBanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelBanCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
    Member: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateChannelFlowCommand
 */
export const de_CreateChannelFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelFlowCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelFlowArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateChannelMembershipCommand
 */
export const de_CreateChannelMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelMembershipCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
    Member: _json,
    SubChannelId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateChannelModeratorCommand
 */
export const de_CreateChannelModeratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelModeratorCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
    ChannelModerator: _json,
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
 * deserializeAws_restJson1DeleteChannelBanCommand
 */
export const de_DeleteChannelBanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelBanCommandOutput> => {
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
 * deserializeAws_restJson1DeleteChannelFlowCommand
 */
export const de_DeleteChannelFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelFlowCommandOutput> => {
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
 * deserializeAws_restJson1DeleteChannelMembershipCommand
 */
export const de_DeleteChannelMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelMembershipCommandOutput> => {
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
 * deserializeAws_restJson1DeleteChannelMessageCommand
 */
export const de_DeleteChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelMessageCommandOutput> => {
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
 * deserializeAws_restJson1DeleteChannelModeratorCommand
 */
export const de_DeleteChannelModeratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelModeratorCommandOutput> => {
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
 * deserializeAws_restJson1DeleteMessagingStreamingConfigurationsCommand
 */
export const de_DeleteMessagingStreamingConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMessagingStreamingConfigurationsCommandOutput> => {
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
 * deserializeAws_restJson1DescribeChannelCommand
 */
export const de_DescribeChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Channel: (_) => de_Channel(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChannelBanCommand
 */
export const de_DescribeChannelBanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelBanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelBan: (_) => de_ChannelBan(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChannelFlowCommand
 */
export const de_DescribeChannelFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelFlow: (_) => de_ChannelFlow(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChannelMembershipCommand
 */
export const de_DescribeChannelMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelMembership: (_) => de_ChannelMembership(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChannelMembershipForAppInstanceUserCommand
 */
export const de_DescribeChannelMembershipForAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelMembershipForAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelMembership: (_) => de_ChannelMembershipForAppInstanceUserSummary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommand
 */
export const de_DescribeChannelModeratedByAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelModeratedByAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Channel: (_) => de_ChannelModeratedByAppInstanceUserSummary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChannelModeratorCommand
 */
export const de_DescribeChannelModeratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelModeratorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelModerator: (_) => de_ChannelModerator(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateChannelFlowCommand
 */
export const de_DisassociateChannelFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateChannelFlowCommandOutput> => {
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
 * deserializeAws_restJson1GetChannelMembershipPreferencesCommand
 */
export const de_GetChannelMembershipPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelMembershipPreferencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
    Member: _json,
    Preferences: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetChannelMessageCommand
 */
export const de_GetChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelMessage: (_) => de_ChannelMessage(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetChannelMessageStatusCommand
 */
export const de_GetChannelMessageStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelMessageStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Status: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMessagingSessionEndpointCommand
 */
export const de_GetMessagingSessionEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMessagingSessionEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Endpoint: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMessagingStreamingConfigurationsCommand
 */
export const de_GetMessagingStreamingConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMessagingStreamingConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    StreamingConfigurations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelBansCommand
 */
export const de_ListChannelBansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelBansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
    ChannelBans: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelFlowsCommand
 */
export const de_ListChannelFlowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelFlowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelFlows: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelMembershipsCommand
 */
export const de_ListChannelMembershipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelMembershipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
    ChannelMemberships: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelMembershipsForAppInstanceUserCommand
 */
export const de_ListChannelMembershipsForAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelMembershipsForAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelMemberships: (_) => de_ChannelMembershipForAppInstanceUserSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelMessagesCommand
 */
export const de_ListChannelMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelMessagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
    ChannelMessages: (_) => de_ChannelMessageSummaryList(_, context),
    NextToken: __expectString,
    SubChannelId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelModeratorsCommand
 */
export const de_ListChannelModeratorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelModeratorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
    ChannelModerators: _json,
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
    Channels: (_) => de_ChannelSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelsAssociatedWithChannelFlowCommand
 */
export const de_ListChannelsAssociatedWithChannelFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsAssociatedWithChannelFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Channels: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommand
 */
export const de_ListChannelsModeratedByAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsModeratedByAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Channels: (_) => de_ChannelModeratedByAppInstanceUserSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSubChannelsCommand
 */
export const de_ListSubChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
    NextToken: __expectString,
    SubChannels: _json,
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
 * deserializeAws_restJson1PutChannelExpirationSettingsCommand
 */
export const de_PutChannelExpirationSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutChannelExpirationSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
    ExpirationSettings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutChannelMembershipPreferencesCommand
 */
export const de_PutChannelMembershipPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutChannelMembershipPreferencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
    Member: _json,
    Preferences: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutMessagingStreamingConfigurationsCommand
 */
export const de_PutMessagingStreamingConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMessagingStreamingConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    StreamingConfigurations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RedactChannelMessageCommand
 */
export const de_RedactChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RedactChannelMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
    MessageId: __expectString,
    SubChannelId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchChannelsCommand
 */
export const de_SearchChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Channels: (_) => de_ChannelSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SendChannelMessageCommand
 */
export const de_SendChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendChannelMessageCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
    MessageId: __expectString,
    Status: _json,
    SubChannelId: __expectString,
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
    ChannelArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateChannelFlowCommand
 */
export const de_UpdateChannelFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelFlowArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateChannelMessageCommand
 */
export const de_UpdateChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
    MessageId: __expectString,
    Status: _json,
    SubChannelId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateChannelReadMarkerCommand
 */
export const de_UpdateChannelReadMarkerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelReadMarkerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelArn: __expectString,
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
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmessaging#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Code: __expectString,
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
 * deserializeAws_restJson1ForbiddenExceptionRes
 */
const de_ForbiddenExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_ChannelMemberArns omitted.

// se_ChannelMembershipPreferences omitted.

// se_ChannelMessageCallback omitted.

// se_ChannelModeratorArns omitted.

// se_ElasticChannelConfiguration omitted.

// se_ExpirationSettings omitted.

// se_LambdaConfiguration omitted.

// se_MemberArns omitted.

// se_MessageAttributeMap omitted.

// se_MessageAttributeStringValues omitted.

// se_MessageAttributeValue omitted.

// se_Processor omitted.

// se_ProcessorConfiguration omitted.

// se_ProcessorList omitted.

// se_PushNotificationConfiguration omitted.

// se_PushNotificationPreferences omitted.

// se_SearchField omitted.

// se_SearchFields omitted.

// se_SearchFieldValues omitted.

// se_StreamingConfiguration omitted.

// se_StreamingConfigurationList omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_Target omitted.

// se_TargetList omitted.

/**
 * deserializeAws_restJson1AppInstanceUserMembershipSummary
 */
const de_AppInstanceUserMembershipSummary = (
  output: any,
  context: __SerdeContext
): AppInstanceUserMembershipSummary => {
  return take(output, {
    ReadMarkerTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SubChannelId: __expectString,
    Type: __expectString,
  }) as any;
};

// de_BatchChannelMemberships omitted.

// de_BatchCreateChannelMembershipError omitted.

// de_BatchCreateChannelMembershipErrors omitted.

/**
 * deserializeAws_restJson1Channel
 */
const de_Channel = (output: any, context: __SerdeContext): Channel => {
  return take(output, {
    ChannelArn: __expectString,
    ChannelFlowArn: __expectString,
    CreatedBy: _json,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ElasticChannelConfiguration: _json,
    ExpirationSettings: _json,
    LastMessageTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Metadata: __expectString,
    Mode: __expectString,
    Name: __expectString,
    Privacy: __expectString,
  }) as any;
};

// de_ChannelAssociatedWithFlowSummary omitted.

// de_ChannelAssociatedWithFlowSummaryList omitted.

/**
 * deserializeAws_restJson1ChannelBan
 */
const de_ChannelBan = (output: any, context: __SerdeContext): ChannelBan => {
  return take(output, {
    ChannelArn: __expectString,
    CreatedBy: _json,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Member: _json,
  }) as any;
};

// de_ChannelBanSummary omitted.

// de_ChannelBanSummaryList omitted.

/**
 * deserializeAws_restJson1ChannelFlow
 */
const de_ChannelFlow = (output: any, context: __SerdeContext): ChannelFlow => {
  return take(output, {
    ChannelFlowArn: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Processors: _json,
  }) as any;
};

// de_ChannelFlowSummary omitted.

// de_ChannelFlowSummaryList omitted.

/**
 * deserializeAws_restJson1ChannelMembership
 */
const de_ChannelMembership = (output: any, context: __SerdeContext): ChannelMembership => {
  return take(output, {
    ChannelArn: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InvitedBy: _json,
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Member: _json,
    SubChannelId: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ChannelMembershipForAppInstanceUserSummary
 */
const de_ChannelMembershipForAppInstanceUserSummary = (
  output: any,
  context: __SerdeContext
): ChannelMembershipForAppInstanceUserSummary => {
  return take(output, {
    AppInstanceUserMembershipSummary: (_: any) => de_AppInstanceUserMembershipSummary(_, context),
    ChannelSummary: (_: any) => de_ChannelSummary(_, context),
  }) as any;
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
      return de_ChannelMembershipForAppInstanceUserSummary(entry, context);
    });
  return retVal;
};

// de_ChannelMembershipPreferences omitted.

// de_ChannelMembershipSummary omitted.

// de_ChannelMembershipSummaryList omitted.

/**
 * deserializeAws_restJson1ChannelMessage
 */
const de_ChannelMessage = (output: any, context: __SerdeContext): ChannelMessage => {
  return take(output, {
    ChannelArn: __expectString,
    Content: __expectString,
    ContentType: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastEditedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MessageAttributes: _json,
    MessageId: __expectString,
    Metadata: __expectString,
    Persistence: __expectString,
    Redacted: __expectBoolean,
    Sender: _json,
    Status: _json,
    SubChannelId: __expectString,
    Target: _json,
    Type: __expectString,
  }) as any;
};

// de_ChannelMessageStatusStructure omitted.

/**
 * deserializeAws_restJson1ChannelMessageSummary
 */
const de_ChannelMessageSummary = (output: any, context: __SerdeContext): ChannelMessageSummary => {
  return take(output, {
    Content: __expectString,
    ContentType: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastEditedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MessageAttributes: _json,
    MessageId: __expectString,
    Metadata: __expectString,
    Redacted: __expectBoolean,
    Sender: _json,
    Status: _json,
    Target: _json,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ChannelMessageSummaryList
 */
const de_ChannelMessageSummaryList = (output: any, context: __SerdeContext): ChannelMessageSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
  return take(output, {
    ChannelSummary: (_: any) => de_ChannelSummary(_, context),
  }) as any;
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
      return de_ChannelModeratedByAppInstanceUserSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ChannelModerator
 */
const de_ChannelModerator = (output: any, context: __SerdeContext): ChannelModerator => {
  return take(output, {
    ChannelArn: __expectString,
    CreatedBy: _json,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Moderator: _json,
  }) as any;
};

// de_ChannelModeratorSummary omitted.

// de_ChannelModeratorSummaryList omitted.

/**
 * deserializeAws_restJson1ChannelSummary
 */
const de_ChannelSummary = (output: any, context: __SerdeContext): ChannelSummary => {
  return take(output, {
    ChannelArn: __expectString,
    LastMessageTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Metadata: __expectString,
    Mode: __expectString,
    Name: __expectString,
    Privacy: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ChannelSummaryList
 */
const de_ChannelSummaryList = (output: any, context: __SerdeContext): ChannelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ChannelSummary(entry, context);
    });
  return retVal;
};

// de_ElasticChannelConfiguration omitted.

// de_ExpirationSettings omitted.

// de_Identity omitted.

// de_LambdaConfiguration omitted.

// de_Members omitted.

// de_MessageAttributeMap omitted.

// de_MessageAttributeStringValues omitted.

// de_MessageAttributeValue omitted.

// de_MessagingSessionEndpoint omitted.

// de_Processor omitted.

// de_ProcessorConfiguration omitted.

// de_ProcessorList omitted.

// de_PushNotificationPreferences omitted.

// de_StreamingConfiguration omitted.

// de_StreamingConfigurationList omitted.

// de_SubChannelSummary omitted.

// de_SubChannelSummaryList omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_Target omitted.

// de_TargetList omitted.

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

const _AIA = "AppInstanceArn";
const _AIUA = "AppInstanceUserArn";
const _CB = "ChimeBearer";
const _CFA = "ChannelFlowArn";
const _MR = "MaxResults";
const _NA = "NotAfter";
const _NB = "NotBefore";
const _NT = "NetworkType";
const _NTe = "NextToken";
const _P = "Privacy";
const _RARN = "ResourceARN";
const _SCI = "SubChannelId";
const _SO = "SortOrder";
const _T = "Type";
const _a = "arn";
const _aia = "app-instance-arn";
const _aiua = "app-instance-user-arn";
const _cfa = "channel-flow-arn";
const _mr = "max-results";
const _na = "not-after";
const _nb = "not-before";
const _nt = "network-type";
const _nt_ = "next-token";
const _o = "operation";
const _p = "privacy";
const _s = "scope";
const _sci = "sub-channel-id";
const _so = "sort-order";
const _t = "type";
const _xacb = "x-amz-chime-bearer";
