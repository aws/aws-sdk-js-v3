import { ChimeSDKMessagingClient } from "./ChimeSDKMessagingClient";
import {
  BatchCreateChannelMembershipCommand,
  BatchCreateChannelMembershipCommandInput,
  BatchCreateChannelMembershipCommandOutput,
} from "./commands/BatchCreateChannelMembershipCommand";
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
  GetChannelMessageCommand,
  GetChannelMessageCommandInput,
  GetChannelMessageCommandOutput,
} from "./commands/GetChannelMessageCommand";
import {
  GetMessagingSessionEndpointCommand,
  GetMessagingSessionEndpointCommandInput,
  GetMessagingSessionEndpointCommandOutput,
} from "./commands/GetMessagingSessionEndpointCommand";
import {
  ListChannelBansCommand,
  ListChannelBansCommandInput,
  ListChannelBansCommandOutput,
} from "./commands/ListChannelBansCommand";
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
  RedactChannelMessageCommand,
  RedactChannelMessageCommandInput,
  RedactChannelMessageCommandOutput,
} from "./commands/RedactChannelMessageCommand";
import {
  SendChannelMessageCommand,
  SendChannelMessageCommandInput,
  SendChannelMessageCommandOutput,
} from "./commands/SendChannelMessageCommand";
import {
  UpdateChannelCommand,
  UpdateChannelCommandInput,
  UpdateChannelCommandOutput,
} from "./commands/UpdateChannelCommand";
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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>The Amazon Chime SDK Messaging APIs in this section allow software developers to send
 *          and receive messages in custom messaging applications. These APIs depend on the frameworks
 *          provided by the Amazon Chime SDK Identity APIs. For more information about the messaging
 *          APIs, see .</p>
 */
export class ChimeSDKMessaging extends ChimeSDKMessagingClient {
  /**
   * <p>Adds a specified number of users to a channel. </p>
   */
  public batchCreateChannelMembership(
    args: BatchCreateChannelMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateChannelMembershipCommandOutput>;
  public batchCreateChannelMembership(
    args: BatchCreateChannelMembershipCommandInput,
    cb: (err: any, data?: BatchCreateChannelMembershipCommandOutput) => void
  ): void;
  public batchCreateChannelMembership(
    args: BatchCreateChannelMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateChannelMembershipCommandOutput) => void
  ): void;
  public batchCreateChannelMembership(
    args: BatchCreateChannelMembershipCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchCreateChannelMembershipCommandOutput) => void),
    cb?: (err: any, data?: BatchCreateChannelMembershipCommandOutput) => void
  ): Promise<BatchCreateChannelMembershipCommandOutput> | void {
    const command = new BatchCreateChannelMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a channel to which you can add users and send messages.</p>
   *
   *          <p>
   *             <b>Restriction</b>: You can't change a channel's
   *          privacy.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public createChannel(
    args: CreateChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelCommandOutput>;
  public createChannel(
    args: CreateChannelCommandInput,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;
  public createChannel(
    args: CreateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;
  public createChannel(
    args: CreateChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateChannelCommandOutput) => void),
    cb?: (err: any, data?: CreateChannelCommandOutput) => void
  ): Promise<CreateChannelCommandOutput> | void {
    const command = new CreateChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Permanently bans a member from a channel. Moderators can't add banned members to a
   *          channel. To undo a ban, you first have to <code>DeleteChannelBan</code>, and then
   *             <code>CreateChannelMembership</code>. Bans are cleaned up when you delete users or
   *          channels.</p>
   *          <p>If you ban a user who is already part of a channel, that user is automatically kicked
   *          from the channel.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public createChannelBan(
    args: CreateChannelBanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelBanCommandOutput>;
  public createChannelBan(
    args: CreateChannelBanCommandInput,
    cb: (err: any, data?: CreateChannelBanCommandOutput) => void
  ): void;
  public createChannelBan(
    args: CreateChannelBanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelBanCommandOutput) => void
  ): void;
  public createChannelBan(
    args: CreateChannelBanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateChannelBanCommandOutput) => void),
    cb?: (err: any, data?: CreateChannelBanCommandOutput) => void
  ): Promise<CreateChannelBanCommandOutput> | void {
    const command = new CreateChannelBanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds a user to a channel. The <code>InvitedBy</code> response field is derived from the
   *          request header. A channel member can:</p>
   *
   *          <ul>
   *             <li>
   *                <p>List messages</p>
   *             </li>
   *             <li>
   *                <p>Send messages</p>
   *             </li>
   *             <li>
   *                <p>Receive messages</p>
   *             </li>
   *             <li>
   *                <p>Edit their own messages</p>
   *             </li>
   *             <li>
   *                <p>Leave the channel</p>
   *             </li>
   *          </ul>
   *
   *          <p>Privacy settings impact this action as follows:</p>
   *
   *          <ul>
   *             <li>
   *                <p>Public Channels: You do not need to be a member to list messages, but you must be
   *                a member to send messages.</p>
   *             </li>
   *             <li>
   *                <p>Private Channels: You must be a member to list or send messages.</p>
   *             </li>
   *          </ul>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public createChannelMembership(
    args: CreateChannelMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelMembershipCommandOutput>;
  public createChannelMembership(
    args: CreateChannelMembershipCommandInput,
    cb: (err: any, data?: CreateChannelMembershipCommandOutput) => void
  ): void;
  public createChannelMembership(
    args: CreateChannelMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelMembershipCommandOutput) => void
  ): void;
  public createChannelMembership(
    args: CreateChannelMembershipCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateChannelMembershipCommandOutput) => void),
    cb?: (err: any, data?: CreateChannelMembershipCommandOutput) => void
  ): Promise<CreateChannelMembershipCommandOutput> | void {
    const command = new CreateChannelMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new <code>ChannelModerator</code>. A channel moderator can:</p>
   *
   *          <ul>
   *             <li>
   *                <p>Add and remove other members of the channel.</p>
   *             </li>
   *             <li>
   *                <p>Add and remove other moderators of the channel.</p>
   *             </li>
   *             <li>
   *                <p>Add and remove user bans for the channel.</p>
   *             </li>
   *             <li>
   *                <p>Redact messages in the channel.</p>
   *             </li>
   *             <li>
   *                <p>List messages in the channel.</p>
   *             </li>
   *          </ul>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public createChannelModerator(
    args: CreateChannelModeratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelModeratorCommandOutput>;
  public createChannelModerator(
    args: CreateChannelModeratorCommandInput,
    cb: (err: any, data?: CreateChannelModeratorCommandOutput) => void
  ): void;
  public createChannelModerator(
    args: CreateChannelModeratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelModeratorCommandOutput) => void
  ): void;
  public createChannelModerator(
    args: CreateChannelModeratorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateChannelModeratorCommandOutput) => void),
    cb?: (err: any, data?: CreateChannelModeratorCommandOutput) => void
  ): Promise<CreateChannelModeratorCommandOutput> | void {
    const command = new CreateChannelModeratorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Immediately makes a channel and its memberships inaccessible and marks them for
   *          deletion. This is an irreversible process.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public deleteChannel(
    args: DeleteChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelCommandOutput>;
  public deleteChannel(
    args: DeleteChannelCommandInput,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;
  public deleteChannel(
    args: DeleteChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;
  public deleteChannel(
    args: DeleteChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteChannelCommandOutput) => void),
    cb?: (err: any, data?: DeleteChannelCommandOutput) => void
  ): Promise<DeleteChannelCommandOutput> | void {
    const command = new DeleteChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a user from a channel's ban list.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public deleteChannelBan(
    args: DeleteChannelBanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelBanCommandOutput>;
  public deleteChannelBan(
    args: DeleteChannelBanCommandInput,
    cb: (err: any, data?: DeleteChannelBanCommandOutput) => void
  ): void;
  public deleteChannelBan(
    args: DeleteChannelBanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelBanCommandOutput) => void
  ): void;
  public deleteChannelBan(
    args: DeleteChannelBanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteChannelBanCommandOutput) => void),
    cb?: (err: any, data?: DeleteChannelBanCommandOutput) => void
  ): Promise<DeleteChannelBanCommandOutput> | void {
    const command = new DeleteChannelBanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a member from a channel.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public deleteChannelMembership(
    args: DeleteChannelMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelMembershipCommandOutput>;
  public deleteChannelMembership(
    args: DeleteChannelMembershipCommandInput,
    cb: (err: any, data?: DeleteChannelMembershipCommandOutput) => void
  ): void;
  public deleteChannelMembership(
    args: DeleteChannelMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelMembershipCommandOutput) => void
  ): void;
  public deleteChannelMembership(
    args: DeleteChannelMembershipCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteChannelMembershipCommandOutput) => void),
    cb?: (err: any, data?: DeleteChannelMembershipCommandOutput) => void
  ): Promise<DeleteChannelMembershipCommandOutput> | void {
    const command = new DeleteChannelMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a channel message. Only admins can perform this action. Deletion makes messages
   *          inaccessible immediately. A background process deletes any revisions created by
   *             <code>UpdateChannelMessage</code>.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public deleteChannelMessage(
    args: DeleteChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelMessageCommandOutput>;
  public deleteChannelMessage(
    args: DeleteChannelMessageCommandInput,
    cb: (err: any, data?: DeleteChannelMessageCommandOutput) => void
  ): void;
  public deleteChannelMessage(
    args: DeleteChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelMessageCommandOutput) => void
  ): void;
  public deleteChannelMessage(
    args: DeleteChannelMessageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteChannelMessageCommandOutput) => void),
    cb?: (err: any, data?: DeleteChannelMessageCommandOutput) => void
  ): Promise<DeleteChannelMessageCommandOutput> | void {
    const command = new DeleteChannelMessageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a channel moderator.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public deleteChannelModerator(
    args: DeleteChannelModeratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelModeratorCommandOutput>;
  public deleteChannelModerator(
    args: DeleteChannelModeratorCommandInput,
    cb: (err: any, data?: DeleteChannelModeratorCommandOutput) => void
  ): void;
  public deleteChannelModerator(
    args: DeleteChannelModeratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelModeratorCommandOutput) => void
  ): void;
  public deleteChannelModerator(
    args: DeleteChannelModeratorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteChannelModeratorCommandOutput) => void),
    cb?: (err: any, data?: DeleteChannelModeratorCommandOutput) => void
  ): Promise<DeleteChannelModeratorCommandOutput> | void {
    const command = new DeleteChannelModeratorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the full details of a channel in an Amazon Chime
   *          <code>AppInstance</code>.</p>
   *
   *          <note>
   *
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public describeChannel(
    args: DescribeChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelCommandOutput>;
  public describeChannel(
    args: DescribeChannelCommandInput,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;
  public describeChannel(
    args: DescribeChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;
  public describeChannel(
    args: DescribeChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeChannelCommandOutput) => void),
    cb?: (err: any, data?: DescribeChannelCommandOutput) => void
  ): Promise<DescribeChannelCommandOutput> | void {
    const command = new DescribeChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the full details of a channel ban.</p>
   *
   *          <note>
   *
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public describeChannelBan(
    args: DescribeChannelBanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelBanCommandOutput>;
  public describeChannelBan(
    args: DescribeChannelBanCommandInput,
    cb: (err: any, data?: DescribeChannelBanCommandOutput) => void
  ): void;
  public describeChannelBan(
    args: DescribeChannelBanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelBanCommandOutput) => void
  ): void;
  public describeChannelBan(
    args: DescribeChannelBanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeChannelBanCommandOutput) => void),
    cb?: (err: any, data?: DescribeChannelBanCommandOutput) => void
  ): Promise<DescribeChannelBanCommandOutput> | void {
    const command = new DescribeChannelBanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the full details of a user's channel membership.</p>
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public describeChannelMembership(
    args: DescribeChannelMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelMembershipCommandOutput>;
  public describeChannelMembership(
    args: DescribeChannelMembershipCommandInput,
    cb: (err: any, data?: DescribeChannelMembershipCommandOutput) => void
  ): void;
  public describeChannelMembership(
    args: DescribeChannelMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelMembershipCommandOutput) => void
  ): void;
  public describeChannelMembership(
    args: DescribeChannelMembershipCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeChannelMembershipCommandOutput) => void),
    cb?: (err: any, data?: DescribeChannelMembershipCommandOutput) => void
  ): Promise<DescribeChannelMembershipCommandOutput> | void {
    const command = new DescribeChannelMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns the details of a channel based on the membership of the specified
   *             <code>AppInstanceUser</code>.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public describeChannelMembershipForAppInstanceUser(
    args: DescribeChannelMembershipForAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelMembershipForAppInstanceUserCommandOutput>;
  public describeChannelMembershipForAppInstanceUser(
    args: DescribeChannelMembershipForAppInstanceUserCommandInput,
    cb: (err: any, data?: DescribeChannelMembershipForAppInstanceUserCommandOutput) => void
  ): void;
  public describeChannelMembershipForAppInstanceUser(
    args: DescribeChannelMembershipForAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelMembershipForAppInstanceUserCommandOutput) => void
  ): void;
  public describeChannelMembershipForAppInstanceUser(
    args: DescribeChannelMembershipForAppInstanceUserCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeChannelMembershipForAppInstanceUserCommandOutput) => void),
    cb?: (err: any, data?: DescribeChannelMembershipForAppInstanceUserCommandOutput) => void
  ): Promise<DescribeChannelMembershipForAppInstanceUserCommandOutput> | void {
    const command = new DescribeChannelMembershipForAppInstanceUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the full details of a channel moderated by the specified
   *             <code>AppInstanceUser</code>.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public describeChannelModeratedByAppInstanceUser(
    args: DescribeChannelModeratedByAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelModeratedByAppInstanceUserCommandOutput>;
  public describeChannelModeratedByAppInstanceUser(
    args: DescribeChannelModeratedByAppInstanceUserCommandInput,
    cb: (err: any, data?: DescribeChannelModeratedByAppInstanceUserCommandOutput) => void
  ): void;
  public describeChannelModeratedByAppInstanceUser(
    args: DescribeChannelModeratedByAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelModeratedByAppInstanceUserCommandOutput) => void
  ): void;
  public describeChannelModeratedByAppInstanceUser(
    args: DescribeChannelModeratedByAppInstanceUserCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeChannelModeratedByAppInstanceUserCommandOutput) => void),
    cb?: (err: any, data?: DescribeChannelModeratedByAppInstanceUserCommandOutput) => void
  ): Promise<DescribeChannelModeratedByAppInstanceUserCommandOutput> | void {
    const command = new DescribeChannelModeratedByAppInstanceUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the full details of a single ChannelModerator.</p>
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public describeChannelModerator(
    args: DescribeChannelModeratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelModeratorCommandOutput>;
  public describeChannelModerator(
    args: DescribeChannelModeratorCommandInput,
    cb: (err: any, data?: DescribeChannelModeratorCommandOutput) => void
  ): void;
  public describeChannelModerator(
    args: DescribeChannelModeratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelModeratorCommandOutput) => void
  ): void;
  public describeChannelModerator(
    args: DescribeChannelModeratorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeChannelModeratorCommandOutput) => void),
    cb?: (err: any, data?: DescribeChannelModeratorCommandOutput) => void
  ): Promise<DescribeChannelModeratorCommandOutput> | void {
    const command = new DescribeChannelModeratorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the full details of a channel message.</p>
   *
   *          <note>
   *             <p>The x-amz-chime-bearer request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public getChannelMessage(
    args: GetChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChannelMessageCommandOutput>;
  public getChannelMessage(
    args: GetChannelMessageCommandInput,
    cb: (err: any, data?: GetChannelMessageCommandOutput) => void
  ): void;
  public getChannelMessage(
    args: GetChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChannelMessageCommandOutput) => void
  ): void;
  public getChannelMessage(
    args: GetChannelMessageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetChannelMessageCommandOutput) => void),
    cb?: (err: any, data?: GetChannelMessageCommandOutput) => void
  ): Promise<GetChannelMessageCommandOutput> | void {
    const command = new GetChannelMessageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>The details of the endpoint for the messaging session.</p>
   */
  public getMessagingSessionEndpoint(
    args: GetMessagingSessionEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMessagingSessionEndpointCommandOutput>;
  public getMessagingSessionEndpoint(
    args: GetMessagingSessionEndpointCommandInput,
    cb: (err: any, data?: GetMessagingSessionEndpointCommandOutput) => void
  ): void;
  public getMessagingSessionEndpoint(
    args: GetMessagingSessionEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMessagingSessionEndpointCommandOutput) => void
  ): void;
  public getMessagingSessionEndpoint(
    args: GetMessagingSessionEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMessagingSessionEndpointCommandOutput) => void),
    cb?: (err: any, data?: GetMessagingSessionEndpointCommandOutput) => void
  ): Promise<GetMessagingSessionEndpointCommandOutput> | void {
    const command = new GetMessagingSessionEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the users banned from a particular channel.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public listChannelBans(
    args: ListChannelBansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelBansCommandOutput>;
  public listChannelBans(
    args: ListChannelBansCommandInput,
    cb: (err: any, data?: ListChannelBansCommandOutput) => void
  ): void;
  public listChannelBans(
    args: ListChannelBansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelBansCommandOutput) => void
  ): void;
  public listChannelBans(
    args: ListChannelBansCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListChannelBansCommandOutput) => void),
    cb?: (err: any, data?: ListChannelBansCommandOutput) => void
  ): Promise<ListChannelBansCommandOutput> | void {
    const command = new ListChannelBansCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all channel memberships in a channel.</p>
   *
   *          <note>
   *
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public listChannelMemberships(
    args: ListChannelMembershipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelMembershipsCommandOutput>;
  public listChannelMemberships(
    args: ListChannelMembershipsCommandInput,
    cb: (err: any, data?: ListChannelMembershipsCommandOutput) => void
  ): void;
  public listChannelMemberships(
    args: ListChannelMembershipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelMembershipsCommandOutput) => void
  ): void;
  public listChannelMemberships(
    args: ListChannelMembershipsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListChannelMembershipsCommandOutput) => void),
    cb?: (err: any, data?: ListChannelMembershipsCommandOutput) => void
  ): Promise<ListChannelMembershipsCommandOutput> | void {
    const command = new ListChannelMembershipsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Lists all channels that a particular <code>AppInstanceUser</code> is a part of. Only an
   *             <code>AppInstanceAdmin</code> can call the API with a user ARN that is not their own. </p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public listChannelMembershipsForAppInstanceUser(
    args: ListChannelMembershipsForAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelMembershipsForAppInstanceUserCommandOutput>;
  public listChannelMembershipsForAppInstanceUser(
    args: ListChannelMembershipsForAppInstanceUserCommandInput,
    cb: (err: any, data?: ListChannelMembershipsForAppInstanceUserCommandOutput) => void
  ): void;
  public listChannelMembershipsForAppInstanceUser(
    args: ListChannelMembershipsForAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelMembershipsForAppInstanceUserCommandOutput) => void
  ): void;
  public listChannelMembershipsForAppInstanceUser(
    args: ListChannelMembershipsForAppInstanceUserCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListChannelMembershipsForAppInstanceUserCommandOutput) => void),
    cb?: (err: any, data?: ListChannelMembershipsForAppInstanceUserCommandOutput) => void
  ): Promise<ListChannelMembershipsForAppInstanceUserCommandOutput> | void {
    const command = new ListChannelMembershipsForAppInstanceUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List all the messages in a channel. Returns a paginated list of
   *             <code>ChannelMessages</code>. By default, sorted by creation timestamp in descending
   *          order.</p>
   *          <note>
   *             <p>Redacted messages appear in the results as empty, since they are only redacted, not
   *             deleted. Deleted messages do not appear in the results. This action always returns the
   *             latest version of an edited message.</p>
   *             <p>Also, the x-amz-chime-bearer request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public listChannelMessages(
    args: ListChannelMessagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelMessagesCommandOutput>;
  public listChannelMessages(
    args: ListChannelMessagesCommandInput,
    cb: (err: any, data?: ListChannelMessagesCommandOutput) => void
  ): void;
  public listChannelMessages(
    args: ListChannelMessagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelMessagesCommandOutput) => void
  ): void;
  public listChannelMessages(
    args: ListChannelMessagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListChannelMessagesCommandOutput) => void),
    cb?: (err: any, data?: ListChannelMessagesCommandOutput) => void
  ): Promise<ListChannelMessagesCommandOutput> | void {
    const command = new ListChannelMessagesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the moderators for a channel.</p>
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public listChannelModerators(
    args: ListChannelModeratorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelModeratorsCommandOutput>;
  public listChannelModerators(
    args: ListChannelModeratorsCommandInput,
    cb: (err: any, data?: ListChannelModeratorsCommandOutput) => void
  ): void;
  public listChannelModerators(
    args: ListChannelModeratorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelModeratorsCommandOutput) => void
  ): void;
  public listChannelModerators(
    args: ListChannelModeratorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListChannelModeratorsCommandOutput) => void),
    cb?: (err: any, data?: ListChannelModeratorsCommandOutput) => void
  ): Promise<ListChannelModeratorsCommandOutput> | void {
    const command = new ListChannelModeratorsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all Channels created under a single Chime App as a paginated list. You can specify
   *          filters to narrow results.</p>
   *
   *          <p class="title">
   *             <b>Functionality & restrictions</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>Use privacy = <code>PUBLIC</code> to retrieve all public channels in the
   *                account.</p>
   *             </li>
   *             <li>
   *                <p>Only an <code>AppInstanceAdmin</code> can set privacy = <code>PRIVATE</code> to
   *                list the private channels in an account.</p>
   *             </li>
   *          </ul>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public listChannels(
    args: ListChannelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelsCommandOutput>;
  public listChannels(args: ListChannelsCommandInput, cb: (err: any, data?: ListChannelsCommandOutput) => void): void;
  public listChannels(
    args: ListChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;
  public listChannels(
    args: ListChannelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListChannelsCommandOutput) => void),
    cb?: (err: any, data?: ListChannelsCommandOutput) => void
  ): Promise<ListChannelsCommandOutput> | void {
    const command = new ListChannelsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>A list of the channels moderated by an <code>AppInstanceUser</code>.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public listChannelsModeratedByAppInstanceUser(
    args: ListChannelsModeratedByAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelsModeratedByAppInstanceUserCommandOutput>;
  public listChannelsModeratedByAppInstanceUser(
    args: ListChannelsModeratedByAppInstanceUserCommandInput,
    cb: (err: any, data?: ListChannelsModeratedByAppInstanceUserCommandOutput) => void
  ): void;
  public listChannelsModeratedByAppInstanceUser(
    args: ListChannelsModeratedByAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelsModeratedByAppInstanceUserCommandOutput) => void
  ): void;
  public listChannelsModeratedByAppInstanceUser(
    args: ListChannelsModeratedByAppInstanceUserCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListChannelsModeratedByAppInstanceUserCommandOutput) => void),
    cb?: (err: any, data?: ListChannelsModeratedByAppInstanceUserCommandOutput) => void
  ): Promise<ListChannelsModeratedByAppInstanceUserCommandOutput> | void {
    const command = new ListChannelsModeratedByAppInstanceUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Redacts message content, but not metadata. The message exists in the back end, but the
   *          action returns null content, and the state shows as redacted.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public redactChannelMessage(
    args: RedactChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RedactChannelMessageCommandOutput>;
  public redactChannelMessage(
    args: RedactChannelMessageCommandInput,
    cb: (err: any, data?: RedactChannelMessageCommandOutput) => void
  ): void;
  public redactChannelMessage(
    args: RedactChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RedactChannelMessageCommandOutput) => void
  ): void;
  public redactChannelMessage(
    args: RedactChannelMessageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RedactChannelMessageCommandOutput) => void),
    cb?: (err: any, data?: RedactChannelMessageCommandOutput) => void
  ): Promise<RedactChannelMessageCommandOutput> | void {
    const command = new RedactChannelMessageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sends a message to a particular channel that the member is a part of.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *
   *             <p>Also, <code>STANDARD</code> messages can contain 4KB of data and the 1KB of metadata.
   *                <code>CONTROL</code> messages can contain 30 bytes of data and no metadata.</p>
   *          </note>
   */
  public sendChannelMessage(
    args: SendChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendChannelMessageCommandOutput>;
  public sendChannelMessage(
    args: SendChannelMessageCommandInput,
    cb: (err: any, data?: SendChannelMessageCommandOutput) => void
  ): void;
  public sendChannelMessage(
    args: SendChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendChannelMessageCommandOutput) => void
  ): void;
  public sendChannelMessage(
    args: SendChannelMessageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendChannelMessageCommandOutput) => void),
    cb?: (err: any, data?: SendChannelMessageCommandOutput) => void
  ): Promise<SendChannelMessageCommandOutput> | void {
    const command = new SendChannelMessageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update a channel's attributes.</p>
   *          <p>
   *             <b>Restriction</b>: You can't change a channel's privacy. </p>
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public updateChannel(
    args: UpdateChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChannelCommandOutput>;
  public updateChannel(
    args: UpdateChannelCommandInput,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;
  public updateChannel(
    args: UpdateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;
  public updateChannel(
    args: UpdateChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateChannelCommandOutput) => void),
    cb?: (err: any, data?: UpdateChannelCommandOutput) => void
  ): Promise<UpdateChannelCommandOutput> | void {
    const command = new UpdateChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the content of a message.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public updateChannelMessage(
    args: UpdateChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChannelMessageCommandOutput>;
  public updateChannelMessage(
    args: UpdateChannelMessageCommandInput,
    cb: (err: any, data?: UpdateChannelMessageCommandOutput) => void
  ): void;
  public updateChannelMessage(
    args: UpdateChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelMessageCommandOutput) => void
  ): void;
  public updateChannelMessage(
    args: UpdateChannelMessageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateChannelMessageCommandOutput) => void),
    cb?: (err: any, data?: UpdateChannelMessageCommandOutput) => void
  ): Promise<UpdateChannelMessageCommandOutput> | void {
    const command = new UpdateChannelMessageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>The details of the time when a user last read messages in a channel.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
   *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
   *             the header.</p>
   *          </note>
   */
  public updateChannelReadMarker(
    args: UpdateChannelReadMarkerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChannelReadMarkerCommandOutput>;
  public updateChannelReadMarker(
    args: UpdateChannelReadMarkerCommandInput,
    cb: (err: any, data?: UpdateChannelReadMarkerCommandOutput) => void
  ): void;
  public updateChannelReadMarker(
    args: UpdateChannelReadMarkerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelReadMarkerCommandOutput) => void
  ): void;
  public updateChannelReadMarker(
    args: UpdateChannelReadMarkerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateChannelReadMarkerCommandOutput) => void),
    cb?: (err: any, data?: UpdateChannelReadMarkerCommandOutput) => void
  ): Promise<UpdateChannelReadMarkerCommandOutput> | void {
    const command = new UpdateChannelReadMarkerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
