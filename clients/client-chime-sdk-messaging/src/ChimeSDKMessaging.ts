// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { ChimeSDKMessagingClient, ChimeSDKMessagingClientConfig } from "./ChimeSDKMessagingClient";
import {
  AssociateChannelFlowCommand,
  AssociateChannelFlowCommandInput,
  AssociateChannelFlowCommandOutput,
} from "./commands/AssociateChannelFlowCommand";
import {
  BatchCreateChannelMembershipCommand,
  BatchCreateChannelMembershipCommandInput,
  BatchCreateChannelMembershipCommandOutput,
} from "./commands/BatchCreateChannelMembershipCommand";
import {
  ChannelFlowCallbackCommand,
  ChannelFlowCallbackCommandInput,
  ChannelFlowCallbackCommandOutput,
} from "./commands/ChannelFlowCallbackCommand";
import {
  CreateChannelBanCommand,
  CreateChannelBanCommandInput,
  CreateChannelBanCommandOutput,
} from "./commands/CreateChannelBanCommand";
import {
  CreateChannelCommand,
  CreateChannelCommandInput,
  CreateChannelCommandOutput,
} from "./commands/CreateChannelCommand";
import {
  CreateChannelFlowCommand,
  CreateChannelFlowCommandInput,
  CreateChannelFlowCommandOutput,
} from "./commands/CreateChannelFlowCommand";
import {
  CreateChannelMembershipCommand,
  CreateChannelMembershipCommandInput,
  CreateChannelMembershipCommandOutput,
} from "./commands/CreateChannelMembershipCommand";
import {
  CreateChannelModeratorCommand,
  CreateChannelModeratorCommandInput,
  CreateChannelModeratorCommandOutput,
} from "./commands/CreateChannelModeratorCommand";
import {
  DeleteChannelBanCommand,
  DeleteChannelBanCommandInput,
  DeleteChannelBanCommandOutput,
} from "./commands/DeleteChannelBanCommand";
import {
  DeleteChannelCommand,
  DeleteChannelCommandInput,
  DeleteChannelCommandOutput,
} from "./commands/DeleteChannelCommand";
import {
  DeleteChannelFlowCommand,
  DeleteChannelFlowCommandInput,
  DeleteChannelFlowCommandOutput,
} from "./commands/DeleteChannelFlowCommand";
import {
  DeleteChannelMembershipCommand,
  DeleteChannelMembershipCommandInput,
  DeleteChannelMembershipCommandOutput,
} from "./commands/DeleteChannelMembershipCommand";
import {
  DeleteChannelMessageCommand,
  DeleteChannelMessageCommandInput,
  DeleteChannelMessageCommandOutput,
} from "./commands/DeleteChannelMessageCommand";
import {
  DeleteChannelModeratorCommand,
  DeleteChannelModeratorCommandInput,
  DeleteChannelModeratorCommandOutput,
} from "./commands/DeleteChannelModeratorCommand";
import {
  DeleteMessagingStreamingConfigurationsCommand,
  DeleteMessagingStreamingConfigurationsCommandInput,
  DeleteMessagingStreamingConfigurationsCommandOutput,
} from "./commands/DeleteMessagingStreamingConfigurationsCommand";
import {
  DescribeChannelBanCommand,
  DescribeChannelBanCommandInput,
  DescribeChannelBanCommandOutput,
} from "./commands/DescribeChannelBanCommand";
import {
  DescribeChannelCommand,
  DescribeChannelCommandInput,
  DescribeChannelCommandOutput,
} from "./commands/DescribeChannelCommand";
import {
  DescribeChannelFlowCommand,
  DescribeChannelFlowCommandInput,
  DescribeChannelFlowCommandOutput,
} from "./commands/DescribeChannelFlowCommand";
import {
  DescribeChannelMembershipCommand,
  DescribeChannelMembershipCommandInput,
  DescribeChannelMembershipCommandOutput,
} from "./commands/DescribeChannelMembershipCommand";
import {
  DescribeChannelMembershipForAppInstanceUserCommand,
  DescribeChannelMembershipForAppInstanceUserCommandInput,
  DescribeChannelMembershipForAppInstanceUserCommandOutput,
} from "./commands/DescribeChannelMembershipForAppInstanceUserCommand";
import {
  DescribeChannelModeratedByAppInstanceUserCommand,
  DescribeChannelModeratedByAppInstanceUserCommandInput,
  DescribeChannelModeratedByAppInstanceUserCommandOutput,
} from "./commands/DescribeChannelModeratedByAppInstanceUserCommand";
import {
  DescribeChannelModeratorCommand,
  DescribeChannelModeratorCommandInput,
  DescribeChannelModeratorCommandOutput,
} from "./commands/DescribeChannelModeratorCommand";
import {
  DisassociateChannelFlowCommand,
  DisassociateChannelFlowCommandInput,
  DisassociateChannelFlowCommandOutput,
} from "./commands/DisassociateChannelFlowCommand";
import {
  GetChannelMembershipPreferencesCommand,
  GetChannelMembershipPreferencesCommandInput,
  GetChannelMembershipPreferencesCommandOutput,
} from "./commands/GetChannelMembershipPreferencesCommand";
import {
  GetChannelMessageCommand,
  GetChannelMessageCommandInput,
  GetChannelMessageCommandOutput,
} from "./commands/GetChannelMessageCommand";
import {
  GetChannelMessageStatusCommand,
  GetChannelMessageStatusCommandInput,
  GetChannelMessageStatusCommandOutput,
} from "./commands/GetChannelMessageStatusCommand";
import {
  GetMessagingSessionEndpointCommand,
  GetMessagingSessionEndpointCommandInput,
  GetMessagingSessionEndpointCommandOutput,
} from "./commands/GetMessagingSessionEndpointCommand";
import {
  GetMessagingStreamingConfigurationsCommand,
  GetMessagingStreamingConfigurationsCommandInput,
  GetMessagingStreamingConfigurationsCommandOutput,
} from "./commands/GetMessagingStreamingConfigurationsCommand";
import {
  ListChannelBansCommand,
  ListChannelBansCommandInput,
  ListChannelBansCommandOutput,
} from "./commands/ListChannelBansCommand";
import {
  ListChannelFlowsCommand,
  ListChannelFlowsCommandInput,
  ListChannelFlowsCommandOutput,
} from "./commands/ListChannelFlowsCommand";
import {
  ListChannelMembershipsCommand,
  ListChannelMembershipsCommandInput,
  ListChannelMembershipsCommandOutput,
} from "./commands/ListChannelMembershipsCommand";
import {
  ListChannelMembershipsForAppInstanceUserCommand,
  ListChannelMembershipsForAppInstanceUserCommandInput,
  ListChannelMembershipsForAppInstanceUserCommandOutput,
} from "./commands/ListChannelMembershipsForAppInstanceUserCommand";
import {
  ListChannelMessagesCommand,
  ListChannelMessagesCommandInput,
  ListChannelMessagesCommandOutput,
} from "./commands/ListChannelMessagesCommand";
import {
  ListChannelModeratorsCommand,
  ListChannelModeratorsCommandInput,
  ListChannelModeratorsCommandOutput,
} from "./commands/ListChannelModeratorsCommand";
import {
  ListChannelsAssociatedWithChannelFlowCommand,
  ListChannelsAssociatedWithChannelFlowCommandInput,
  ListChannelsAssociatedWithChannelFlowCommandOutput,
} from "./commands/ListChannelsAssociatedWithChannelFlowCommand";
import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "./commands/ListChannelsCommand";
import {
  ListChannelsModeratedByAppInstanceUserCommand,
  ListChannelsModeratedByAppInstanceUserCommandInput,
  ListChannelsModeratedByAppInstanceUserCommandOutput,
} from "./commands/ListChannelsModeratedByAppInstanceUserCommand";
import {
  ListSubChannelsCommand,
  ListSubChannelsCommandInput,
  ListSubChannelsCommandOutput,
} from "./commands/ListSubChannelsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutChannelExpirationSettingsCommand,
  PutChannelExpirationSettingsCommandInput,
  PutChannelExpirationSettingsCommandOutput,
} from "./commands/PutChannelExpirationSettingsCommand";
import {
  PutChannelMembershipPreferencesCommand,
  PutChannelMembershipPreferencesCommandInput,
  PutChannelMembershipPreferencesCommandOutput,
} from "./commands/PutChannelMembershipPreferencesCommand";
import {
  PutMessagingStreamingConfigurationsCommand,
  PutMessagingStreamingConfigurationsCommandInput,
  PutMessagingStreamingConfigurationsCommandOutput,
} from "./commands/PutMessagingStreamingConfigurationsCommand";
import {
  RedactChannelMessageCommand,
  RedactChannelMessageCommandInput,
  RedactChannelMessageCommandOutput,
} from "./commands/RedactChannelMessageCommand";
import {
  SearchChannelsCommand,
  SearchChannelsCommandInput,
  SearchChannelsCommandOutput,
} from "./commands/SearchChannelsCommand";
import {
  SendChannelMessageCommand,
  SendChannelMessageCommandInput,
  SendChannelMessageCommandOutput,
} from "./commands/SendChannelMessageCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateChannelCommand,
  UpdateChannelCommandInput,
  UpdateChannelCommandOutput,
} from "./commands/UpdateChannelCommand";
import {
  UpdateChannelFlowCommand,
  UpdateChannelFlowCommandInput,
  UpdateChannelFlowCommandOutput,
} from "./commands/UpdateChannelFlowCommand";
import {
  UpdateChannelMessageCommand,
  UpdateChannelMessageCommandInput,
  UpdateChannelMessageCommandOutput,
} from "./commands/UpdateChannelMessageCommand";
import {
  UpdateChannelReadMarkerCommand,
  UpdateChannelReadMarkerCommandInput,
  UpdateChannelReadMarkerCommandOutput,
} from "./commands/UpdateChannelReadMarkerCommand";

const commands = {
  AssociateChannelFlowCommand,
  BatchCreateChannelMembershipCommand,
  ChannelFlowCallbackCommand,
  CreateChannelCommand,
  CreateChannelBanCommand,
  CreateChannelFlowCommand,
  CreateChannelMembershipCommand,
  CreateChannelModeratorCommand,
  DeleteChannelCommand,
  DeleteChannelBanCommand,
  DeleteChannelFlowCommand,
  DeleteChannelMembershipCommand,
  DeleteChannelMessageCommand,
  DeleteChannelModeratorCommand,
  DeleteMessagingStreamingConfigurationsCommand,
  DescribeChannelCommand,
  DescribeChannelBanCommand,
  DescribeChannelFlowCommand,
  DescribeChannelMembershipCommand,
  DescribeChannelMembershipForAppInstanceUserCommand,
  DescribeChannelModeratedByAppInstanceUserCommand,
  DescribeChannelModeratorCommand,
  DisassociateChannelFlowCommand,
  GetChannelMembershipPreferencesCommand,
  GetChannelMessageCommand,
  GetChannelMessageStatusCommand,
  GetMessagingSessionEndpointCommand,
  GetMessagingStreamingConfigurationsCommand,
  ListChannelBansCommand,
  ListChannelFlowsCommand,
  ListChannelMembershipsCommand,
  ListChannelMembershipsForAppInstanceUserCommand,
  ListChannelMessagesCommand,
  ListChannelModeratorsCommand,
  ListChannelsCommand,
  ListChannelsAssociatedWithChannelFlowCommand,
  ListChannelsModeratedByAppInstanceUserCommand,
  ListSubChannelsCommand,
  ListTagsForResourceCommand,
  PutChannelExpirationSettingsCommand,
  PutChannelMembershipPreferencesCommand,
  PutMessagingStreamingConfigurationsCommand,
  RedactChannelMessageCommand,
  SearchChannelsCommand,
  SendChannelMessageCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateChannelCommand,
  UpdateChannelFlowCommand,
  UpdateChannelMessageCommand,
  UpdateChannelReadMarkerCommand,
};

export interface ChimeSDKMessaging {
  /**
   * @see {@link AssociateChannelFlowCommand}
   */
  associateChannelFlow(
    args: AssociateChannelFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateChannelFlowCommandOutput>;
  associateChannelFlow(
    args: AssociateChannelFlowCommandInput,
    cb: (err: any, data?: AssociateChannelFlowCommandOutput) => void
  ): void;
  associateChannelFlow(
    args: AssociateChannelFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateChannelFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchCreateChannelMembershipCommand}
   */
  batchCreateChannelMembership(
    args: BatchCreateChannelMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateChannelMembershipCommandOutput>;
  batchCreateChannelMembership(
    args: BatchCreateChannelMembershipCommandInput,
    cb: (err: any, data?: BatchCreateChannelMembershipCommandOutput) => void
  ): void;
  batchCreateChannelMembership(
    args: BatchCreateChannelMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateChannelMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link ChannelFlowCallbackCommand}
   */
  channelFlowCallback(
    args: ChannelFlowCallbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ChannelFlowCallbackCommandOutput>;
  channelFlowCallback(
    args: ChannelFlowCallbackCommandInput,
    cb: (err: any, data?: ChannelFlowCallbackCommandOutput) => void
  ): void;
  channelFlowCallback(
    args: ChannelFlowCallbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ChannelFlowCallbackCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelCommand}
   */
  createChannel(args: CreateChannelCommandInput, options?: __HttpHandlerOptions): Promise<CreateChannelCommandOutput>;
  createChannel(args: CreateChannelCommandInput, cb: (err: any, data?: CreateChannelCommandOutput) => void): void;
  createChannel(
    args: CreateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelBanCommand}
   */
  createChannelBan(
    args: CreateChannelBanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelBanCommandOutput>;
  createChannelBan(
    args: CreateChannelBanCommandInput,
    cb: (err: any, data?: CreateChannelBanCommandOutput) => void
  ): void;
  createChannelBan(
    args: CreateChannelBanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelBanCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelFlowCommand}
   */
  createChannelFlow(
    args: CreateChannelFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelFlowCommandOutput>;
  createChannelFlow(
    args: CreateChannelFlowCommandInput,
    cb: (err: any, data?: CreateChannelFlowCommandOutput) => void
  ): void;
  createChannelFlow(
    args: CreateChannelFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelMembershipCommand}
   */
  createChannelMembership(
    args: CreateChannelMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelMembershipCommandOutput>;
  createChannelMembership(
    args: CreateChannelMembershipCommandInput,
    cb: (err: any, data?: CreateChannelMembershipCommandOutput) => void
  ): void;
  createChannelMembership(
    args: CreateChannelMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelModeratorCommand}
   */
  createChannelModerator(
    args: CreateChannelModeratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelModeratorCommandOutput>;
  createChannelModerator(
    args: CreateChannelModeratorCommandInput,
    cb: (err: any, data?: CreateChannelModeratorCommandOutput) => void
  ): void;
  createChannelModerator(
    args: CreateChannelModeratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelModeratorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelCommand}
   */
  deleteChannel(args: DeleteChannelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteChannelCommandOutput>;
  deleteChannel(args: DeleteChannelCommandInput, cb: (err: any, data?: DeleteChannelCommandOutput) => void): void;
  deleteChannel(
    args: DeleteChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelBanCommand}
   */
  deleteChannelBan(
    args: DeleteChannelBanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelBanCommandOutput>;
  deleteChannelBan(
    args: DeleteChannelBanCommandInput,
    cb: (err: any, data?: DeleteChannelBanCommandOutput) => void
  ): void;
  deleteChannelBan(
    args: DeleteChannelBanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelBanCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelFlowCommand}
   */
  deleteChannelFlow(
    args: DeleteChannelFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelFlowCommandOutput>;
  deleteChannelFlow(
    args: DeleteChannelFlowCommandInput,
    cb: (err: any, data?: DeleteChannelFlowCommandOutput) => void
  ): void;
  deleteChannelFlow(
    args: DeleteChannelFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelMembershipCommand}
   */
  deleteChannelMembership(
    args: DeleteChannelMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelMembershipCommandOutput>;
  deleteChannelMembership(
    args: DeleteChannelMembershipCommandInput,
    cb: (err: any, data?: DeleteChannelMembershipCommandOutput) => void
  ): void;
  deleteChannelMembership(
    args: DeleteChannelMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelMessageCommand}
   */
  deleteChannelMessage(
    args: DeleteChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelMessageCommandOutput>;
  deleteChannelMessage(
    args: DeleteChannelMessageCommandInput,
    cb: (err: any, data?: DeleteChannelMessageCommandOutput) => void
  ): void;
  deleteChannelMessage(
    args: DeleteChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelModeratorCommand}
   */
  deleteChannelModerator(
    args: DeleteChannelModeratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelModeratorCommandOutput>;
  deleteChannelModerator(
    args: DeleteChannelModeratorCommandInput,
    cb: (err: any, data?: DeleteChannelModeratorCommandOutput) => void
  ): void;
  deleteChannelModerator(
    args: DeleteChannelModeratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelModeratorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMessagingStreamingConfigurationsCommand}
   */
  deleteMessagingStreamingConfigurations(
    args: DeleteMessagingStreamingConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMessagingStreamingConfigurationsCommandOutput>;
  deleteMessagingStreamingConfigurations(
    args: DeleteMessagingStreamingConfigurationsCommandInput,
    cb: (err: any, data?: DeleteMessagingStreamingConfigurationsCommandOutput) => void
  ): void;
  deleteMessagingStreamingConfigurations(
    args: DeleteMessagingStreamingConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMessagingStreamingConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChannelCommand}
   */
  describeChannel(
    args: DescribeChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelCommandOutput>;
  describeChannel(args: DescribeChannelCommandInput, cb: (err: any, data?: DescribeChannelCommandOutput) => void): void;
  describeChannel(
    args: DescribeChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChannelBanCommand}
   */
  describeChannelBan(
    args: DescribeChannelBanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelBanCommandOutput>;
  describeChannelBan(
    args: DescribeChannelBanCommandInput,
    cb: (err: any, data?: DescribeChannelBanCommandOutput) => void
  ): void;
  describeChannelBan(
    args: DescribeChannelBanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelBanCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChannelFlowCommand}
   */
  describeChannelFlow(
    args: DescribeChannelFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelFlowCommandOutput>;
  describeChannelFlow(
    args: DescribeChannelFlowCommandInput,
    cb: (err: any, data?: DescribeChannelFlowCommandOutput) => void
  ): void;
  describeChannelFlow(
    args: DescribeChannelFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChannelMembershipCommand}
   */
  describeChannelMembership(
    args: DescribeChannelMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelMembershipCommandOutput>;
  describeChannelMembership(
    args: DescribeChannelMembershipCommandInput,
    cb: (err: any, data?: DescribeChannelMembershipCommandOutput) => void
  ): void;
  describeChannelMembership(
    args: DescribeChannelMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChannelMembershipForAppInstanceUserCommand}
   */
  describeChannelMembershipForAppInstanceUser(
    args: DescribeChannelMembershipForAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelMembershipForAppInstanceUserCommandOutput>;
  describeChannelMembershipForAppInstanceUser(
    args: DescribeChannelMembershipForAppInstanceUserCommandInput,
    cb: (err: any, data?: DescribeChannelMembershipForAppInstanceUserCommandOutput) => void
  ): void;
  describeChannelMembershipForAppInstanceUser(
    args: DescribeChannelMembershipForAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelMembershipForAppInstanceUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChannelModeratedByAppInstanceUserCommand}
   */
  describeChannelModeratedByAppInstanceUser(
    args: DescribeChannelModeratedByAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelModeratedByAppInstanceUserCommandOutput>;
  describeChannelModeratedByAppInstanceUser(
    args: DescribeChannelModeratedByAppInstanceUserCommandInput,
    cb: (err: any, data?: DescribeChannelModeratedByAppInstanceUserCommandOutput) => void
  ): void;
  describeChannelModeratedByAppInstanceUser(
    args: DescribeChannelModeratedByAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelModeratedByAppInstanceUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChannelModeratorCommand}
   */
  describeChannelModerator(
    args: DescribeChannelModeratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelModeratorCommandOutput>;
  describeChannelModerator(
    args: DescribeChannelModeratorCommandInput,
    cb: (err: any, data?: DescribeChannelModeratorCommandOutput) => void
  ): void;
  describeChannelModerator(
    args: DescribeChannelModeratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelModeratorCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateChannelFlowCommand}
   */
  disassociateChannelFlow(
    args: DisassociateChannelFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateChannelFlowCommandOutput>;
  disassociateChannelFlow(
    args: DisassociateChannelFlowCommandInput,
    cb: (err: any, data?: DisassociateChannelFlowCommandOutput) => void
  ): void;
  disassociateChannelFlow(
    args: DisassociateChannelFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateChannelFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChannelMembershipPreferencesCommand}
   */
  getChannelMembershipPreferences(
    args: GetChannelMembershipPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChannelMembershipPreferencesCommandOutput>;
  getChannelMembershipPreferences(
    args: GetChannelMembershipPreferencesCommandInput,
    cb: (err: any, data?: GetChannelMembershipPreferencesCommandOutput) => void
  ): void;
  getChannelMembershipPreferences(
    args: GetChannelMembershipPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChannelMembershipPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChannelMessageCommand}
   */
  getChannelMessage(
    args: GetChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChannelMessageCommandOutput>;
  getChannelMessage(
    args: GetChannelMessageCommandInput,
    cb: (err: any, data?: GetChannelMessageCommandOutput) => void
  ): void;
  getChannelMessage(
    args: GetChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChannelMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChannelMessageStatusCommand}
   */
  getChannelMessageStatus(
    args: GetChannelMessageStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChannelMessageStatusCommandOutput>;
  getChannelMessageStatus(
    args: GetChannelMessageStatusCommandInput,
    cb: (err: any, data?: GetChannelMessageStatusCommandOutput) => void
  ): void;
  getChannelMessageStatus(
    args: GetChannelMessageStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChannelMessageStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMessagingSessionEndpointCommand}
   */
  getMessagingSessionEndpoint(
    args: GetMessagingSessionEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMessagingSessionEndpointCommandOutput>;
  getMessagingSessionEndpoint(
    args: GetMessagingSessionEndpointCommandInput,
    cb: (err: any, data?: GetMessagingSessionEndpointCommandOutput) => void
  ): void;
  getMessagingSessionEndpoint(
    args: GetMessagingSessionEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMessagingSessionEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMessagingStreamingConfigurationsCommand}
   */
  getMessagingStreamingConfigurations(
    args: GetMessagingStreamingConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMessagingStreamingConfigurationsCommandOutput>;
  getMessagingStreamingConfigurations(
    args: GetMessagingStreamingConfigurationsCommandInput,
    cb: (err: any, data?: GetMessagingStreamingConfigurationsCommandOutput) => void
  ): void;
  getMessagingStreamingConfigurations(
    args: GetMessagingStreamingConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMessagingStreamingConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelBansCommand}
   */
  listChannelBans(
    args: ListChannelBansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelBansCommandOutput>;
  listChannelBans(args: ListChannelBansCommandInput, cb: (err: any, data?: ListChannelBansCommandOutput) => void): void;
  listChannelBans(
    args: ListChannelBansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelBansCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelFlowsCommand}
   */
  listChannelFlows(
    args: ListChannelFlowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelFlowsCommandOutput>;
  listChannelFlows(
    args: ListChannelFlowsCommandInput,
    cb: (err: any, data?: ListChannelFlowsCommandOutput) => void
  ): void;
  listChannelFlows(
    args: ListChannelFlowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelFlowsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelMembershipsCommand}
   */
  listChannelMemberships(
    args: ListChannelMembershipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelMembershipsCommandOutput>;
  listChannelMemberships(
    args: ListChannelMembershipsCommandInput,
    cb: (err: any, data?: ListChannelMembershipsCommandOutput) => void
  ): void;
  listChannelMemberships(
    args: ListChannelMembershipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelMembershipsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelMembershipsForAppInstanceUserCommand}
   */
  listChannelMembershipsForAppInstanceUser(
    args: ListChannelMembershipsForAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelMembershipsForAppInstanceUserCommandOutput>;
  listChannelMembershipsForAppInstanceUser(
    args: ListChannelMembershipsForAppInstanceUserCommandInput,
    cb: (err: any, data?: ListChannelMembershipsForAppInstanceUserCommandOutput) => void
  ): void;
  listChannelMembershipsForAppInstanceUser(
    args: ListChannelMembershipsForAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelMembershipsForAppInstanceUserCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelMessagesCommand}
   */
  listChannelMessages(
    args: ListChannelMessagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelMessagesCommandOutput>;
  listChannelMessages(
    args: ListChannelMessagesCommandInput,
    cb: (err: any, data?: ListChannelMessagesCommandOutput) => void
  ): void;
  listChannelMessages(
    args: ListChannelMessagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelMessagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelModeratorsCommand}
   */
  listChannelModerators(
    args: ListChannelModeratorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelModeratorsCommandOutput>;
  listChannelModerators(
    args: ListChannelModeratorsCommandInput,
    cb: (err: any, data?: ListChannelModeratorsCommandOutput) => void
  ): void;
  listChannelModerators(
    args: ListChannelModeratorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelModeratorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelsCommand}
   */
  listChannels(args: ListChannelsCommandInput, options?: __HttpHandlerOptions): Promise<ListChannelsCommandOutput>;
  listChannels(args: ListChannelsCommandInput, cb: (err: any, data?: ListChannelsCommandOutput) => void): void;
  listChannels(
    args: ListChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelsAssociatedWithChannelFlowCommand}
   */
  listChannelsAssociatedWithChannelFlow(
    args: ListChannelsAssociatedWithChannelFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelsAssociatedWithChannelFlowCommandOutput>;
  listChannelsAssociatedWithChannelFlow(
    args: ListChannelsAssociatedWithChannelFlowCommandInput,
    cb: (err: any, data?: ListChannelsAssociatedWithChannelFlowCommandOutput) => void
  ): void;
  listChannelsAssociatedWithChannelFlow(
    args: ListChannelsAssociatedWithChannelFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelsAssociatedWithChannelFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelsModeratedByAppInstanceUserCommand}
   */
  listChannelsModeratedByAppInstanceUser(
    args: ListChannelsModeratedByAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelsModeratedByAppInstanceUserCommandOutput>;
  listChannelsModeratedByAppInstanceUser(
    args: ListChannelsModeratedByAppInstanceUserCommandInput,
    cb: (err: any, data?: ListChannelsModeratedByAppInstanceUserCommandOutput) => void
  ): void;
  listChannelsModeratedByAppInstanceUser(
    args: ListChannelsModeratedByAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelsModeratedByAppInstanceUserCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSubChannelsCommand}
   */
  listSubChannels(
    args: ListSubChannelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSubChannelsCommandOutput>;
  listSubChannels(args: ListSubChannelsCommandInput, cb: (err: any, data?: ListSubChannelsCommandOutput) => void): void;
  listSubChannels(
    args: ListSubChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutChannelExpirationSettingsCommand}
   */
  putChannelExpirationSettings(
    args: PutChannelExpirationSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutChannelExpirationSettingsCommandOutput>;
  putChannelExpirationSettings(
    args: PutChannelExpirationSettingsCommandInput,
    cb: (err: any, data?: PutChannelExpirationSettingsCommandOutput) => void
  ): void;
  putChannelExpirationSettings(
    args: PutChannelExpirationSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutChannelExpirationSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutChannelMembershipPreferencesCommand}
   */
  putChannelMembershipPreferences(
    args: PutChannelMembershipPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutChannelMembershipPreferencesCommandOutput>;
  putChannelMembershipPreferences(
    args: PutChannelMembershipPreferencesCommandInput,
    cb: (err: any, data?: PutChannelMembershipPreferencesCommandOutput) => void
  ): void;
  putChannelMembershipPreferences(
    args: PutChannelMembershipPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutChannelMembershipPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutMessagingStreamingConfigurationsCommand}
   */
  putMessagingStreamingConfigurations(
    args: PutMessagingStreamingConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMessagingStreamingConfigurationsCommandOutput>;
  putMessagingStreamingConfigurations(
    args: PutMessagingStreamingConfigurationsCommandInput,
    cb: (err: any, data?: PutMessagingStreamingConfigurationsCommandOutput) => void
  ): void;
  putMessagingStreamingConfigurations(
    args: PutMessagingStreamingConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMessagingStreamingConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link RedactChannelMessageCommand}
   */
  redactChannelMessage(
    args: RedactChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RedactChannelMessageCommandOutput>;
  redactChannelMessage(
    args: RedactChannelMessageCommandInput,
    cb: (err: any, data?: RedactChannelMessageCommandOutput) => void
  ): void;
  redactChannelMessage(
    args: RedactChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RedactChannelMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchChannelsCommand}
   */
  searchChannels(
    args: SearchChannelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchChannelsCommandOutput>;
  searchChannels(args: SearchChannelsCommandInput, cb: (err: any, data?: SearchChannelsCommandOutput) => void): void;
  searchChannels(
    args: SearchChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link SendChannelMessageCommand}
   */
  sendChannelMessage(
    args: SendChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendChannelMessageCommandOutput>;
  sendChannelMessage(
    args: SendChannelMessageCommandInput,
    cb: (err: any, data?: SendChannelMessageCommandOutput) => void
  ): void;
  sendChannelMessage(
    args: SendChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendChannelMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChannelCommand}
   */
  updateChannel(args: UpdateChannelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateChannelCommandOutput>;
  updateChannel(args: UpdateChannelCommandInput, cb: (err: any, data?: UpdateChannelCommandOutput) => void): void;
  updateChannel(
    args: UpdateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChannelFlowCommand}
   */
  updateChannelFlow(
    args: UpdateChannelFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChannelFlowCommandOutput>;
  updateChannelFlow(
    args: UpdateChannelFlowCommandInput,
    cb: (err: any, data?: UpdateChannelFlowCommandOutput) => void
  ): void;
  updateChannelFlow(
    args: UpdateChannelFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChannelMessageCommand}
   */
  updateChannelMessage(
    args: UpdateChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChannelMessageCommandOutput>;
  updateChannelMessage(
    args: UpdateChannelMessageCommandInput,
    cb: (err: any, data?: UpdateChannelMessageCommandOutput) => void
  ): void;
  updateChannelMessage(
    args: UpdateChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChannelReadMarkerCommand}
   */
  updateChannelReadMarker(
    args: UpdateChannelReadMarkerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChannelReadMarkerCommandOutput>;
  updateChannelReadMarker(
    args: UpdateChannelReadMarkerCommandInput,
    cb: (err: any, data?: UpdateChannelReadMarkerCommandOutput) => void
  ): void;
  updateChannelReadMarker(
    args: UpdateChannelReadMarkerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelReadMarkerCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>The Amazon Chime SDK messaging APIs in this section allow software developers to send
 *          and receive messages in custom messaging applications. These APIs depend on the frameworks
 *          provided by the Amazon Chime SDK identity APIs. For more information about the messaging
 *          APIs, see <a href="https://docs.aws.amazon.com/chime/latest/APIReference/API_Operations_Amazon_Chime_SDK_Messaging.html">Amazon Chime SDK messaging</a>.</p>
 */
export class ChimeSDKMessaging extends ChimeSDKMessagingClient implements ChimeSDKMessaging {}
createAggregatedClient(commands, ChimeSDKMessaging);
