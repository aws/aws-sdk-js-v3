// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchAddChannelRoleToAccessorsCommand,
  BatchAddChannelRoleToAccessorsCommandInput,
  BatchAddChannelRoleToAccessorsCommandOutput,
} from "./commands/BatchAddChannelRoleToAccessorsCommand";
import {
  BatchAddRoleCommand,
  BatchAddRoleCommandInput,
  BatchAddRoleCommandOutput,
} from "./commands/BatchAddRoleCommand";
import {
  BatchRemoveChannelRoleFromAccessorsCommand,
  BatchRemoveChannelRoleFromAccessorsCommandInput,
  BatchRemoveChannelRoleFromAccessorsCommandOutput,
} from "./commands/BatchRemoveChannelRoleFromAccessorsCommand";
import {
  BatchRemoveRoleCommand,
  BatchRemoveRoleCommandInput,
  BatchRemoveRoleCommandOutput,
} from "./commands/BatchRemoveRoleCommand";
import {
  CreateChannelCommand,
  CreateChannelCommandInput,
  CreateChannelCommandOutput,
} from "./commands/CreateChannelCommand";
import { CreateSpaceCommand, CreateSpaceCommandInput, CreateSpaceCommandOutput } from "./commands/CreateSpaceCommand";
import { DeleteSpaceCommand, DeleteSpaceCommandInput, DeleteSpaceCommandOutput } from "./commands/DeleteSpaceCommand";
import {
  DeregisterAdminCommand,
  DeregisterAdminCommandInput,
  DeregisterAdminCommandOutput,
} from "./commands/DeregisterAdminCommand";
import { GetChannelCommand, GetChannelCommandInput, GetChannelCommandOutput } from "./commands/GetChannelCommand";
import { GetSpaceCommand, GetSpaceCommandInput, GetSpaceCommandOutput } from "./commands/GetSpaceCommand";
import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "./commands/ListChannelsCommand";
import { ListSpacesCommand, ListSpacesCommandInput, ListSpacesCommandOutput } from "./commands/ListSpacesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RegisterAdminCommand,
  RegisterAdminCommandInput,
  RegisterAdminCommandOutput,
} from "./commands/RegisterAdminCommand";
import { SendInvitesCommand, SendInvitesCommandInput, SendInvitesCommandOutput } from "./commands/SendInvitesCommand";
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
import { UpdateSpaceCommand, UpdateSpaceCommandInput, UpdateSpaceCommandOutput } from "./commands/UpdateSpaceCommand";
import { RepostspaceClient, RepostspaceClientConfig } from "./RepostspaceClient";

const commands = {
  BatchAddChannelRoleToAccessorsCommand,
  BatchAddRoleCommand,
  BatchRemoveChannelRoleFromAccessorsCommand,
  BatchRemoveRoleCommand,
  CreateChannelCommand,
  CreateSpaceCommand,
  DeleteSpaceCommand,
  DeregisterAdminCommand,
  GetChannelCommand,
  GetSpaceCommand,
  ListChannelsCommand,
  ListSpacesCommand,
  ListTagsForResourceCommand,
  RegisterAdminCommand,
  SendInvitesCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateChannelCommand,
  UpdateSpaceCommand,
};

export interface Repostspace {
  /**
   * @see {@link BatchAddChannelRoleToAccessorsCommand}
   */
  batchAddChannelRoleToAccessors(
    args: BatchAddChannelRoleToAccessorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchAddChannelRoleToAccessorsCommandOutput>;
  batchAddChannelRoleToAccessors(
    args: BatchAddChannelRoleToAccessorsCommandInput,
    cb: (err: any, data?: BatchAddChannelRoleToAccessorsCommandOutput) => void
  ): void;
  batchAddChannelRoleToAccessors(
    args: BatchAddChannelRoleToAccessorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAddChannelRoleToAccessorsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchAddRoleCommand}
   */
  batchAddRole(args: BatchAddRoleCommandInput, options?: __HttpHandlerOptions): Promise<BatchAddRoleCommandOutput>;
  batchAddRole(args: BatchAddRoleCommandInput, cb: (err: any, data?: BatchAddRoleCommandOutput) => void): void;
  batchAddRole(
    args: BatchAddRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAddRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchRemoveChannelRoleFromAccessorsCommand}
   */
  batchRemoveChannelRoleFromAccessors(
    args: BatchRemoveChannelRoleFromAccessorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchRemoveChannelRoleFromAccessorsCommandOutput>;
  batchRemoveChannelRoleFromAccessors(
    args: BatchRemoveChannelRoleFromAccessorsCommandInput,
    cb: (err: any, data?: BatchRemoveChannelRoleFromAccessorsCommandOutput) => void
  ): void;
  batchRemoveChannelRoleFromAccessors(
    args: BatchRemoveChannelRoleFromAccessorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchRemoveChannelRoleFromAccessorsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchRemoveRoleCommand}
   */
  batchRemoveRole(
    args: BatchRemoveRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchRemoveRoleCommandOutput>;
  batchRemoveRole(args: BatchRemoveRoleCommandInput, cb: (err: any, data?: BatchRemoveRoleCommandOutput) => void): void;
  batchRemoveRole(
    args: BatchRemoveRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchRemoveRoleCommandOutput) => void
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
   * @see {@link CreateSpaceCommand}
   */
  createSpace(args: CreateSpaceCommandInput, options?: __HttpHandlerOptions): Promise<CreateSpaceCommandOutput>;
  createSpace(args: CreateSpaceCommandInput, cb: (err: any, data?: CreateSpaceCommandOutput) => void): void;
  createSpace(
    args: CreateSpaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSpaceCommand}
   */
  deleteSpace(args: DeleteSpaceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSpaceCommandOutput>;
  deleteSpace(args: DeleteSpaceCommandInput, cb: (err: any, data?: DeleteSpaceCommandOutput) => void): void;
  deleteSpace(
    args: DeleteSpaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterAdminCommand}
   */
  deregisterAdmin(
    args: DeregisterAdminCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterAdminCommandOutput>;
  deregisterAdmin(args: DeregisterAdminCommandInput, cb: (err: any, data?: DeregisterAdminCommandOutput) => void): void;
  deregisterAdmin(
    args: DeregisterAdminCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterAdminCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChannelCommand}
   */
  getChannel(args: GetChannelCommandInput, options?: __HttpHandlerOptions): Promise<GetChannelCommandOutput>;
  getChannel(args: GetChannelCommandInput, cb: (err: any, data?: GetChannelCommandOutput) => void): void;
  getChannel(
    args: GetChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSpaceCommand}
   */
  getSpace(args: GetSpaceCommandInput, options?: __HttpHandlerOptions): Promise<GetSpaceCommandOutput>;
  getSpace(args: GetSpaceCommandInput, cb: (err: any, data?: GetSpaceCommandOutput) => void): void;
  getSpace(
    args: GetSpaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSpaceCommandOutput) => void
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
   * @see {@link ListSpacesCommand}
   */
  listSpaces(): Promise<ListSpacesCommandOutput>;
  listSpaces(args: ListSpacesCommandInput, options?: __HttpHandlerOptions): Promise<ListSpacesCommandOutput>;
  listSpaces(args: ListSpacesCommandInput, cb: (err: any, data?: ListSpacesCommandOutput) => void): void;
  listSpaces(
    args: ListSpacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSpacesCommandOutput) => void
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
   * @see {@link RegisterAdminCommand}
   */
  registerAdmin(args: RegisterAdminCommandInput, options?: __HttpHandlerOptions): Promise<RegisterAdminCommandOutput>;
  registerAdmin(args: RegisterAdminCommandInput, cb: (err: any, data?: RegisterAdminCommandOutput) => void): void;
  registerAdmin(
    args: RegisterAdminCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterAdminCommandOutput) => void
  ): void;

  /**
   * @see {@link SendInvitesCommand}
   */
  sendInvites(args: SendInvitesCommandInput, options?: __HttpHandlerOptions): Promise<SendInvitesCommandOutput>;
  sendInvites(args: SendInvitesCommandInput, cb: (err: any, data?: SendInvitesCommandOutput) => void): void;
  sendInvites(
    args: SendInvitesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendInvitesCommandOutput) => void
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
   * @see {@link UpdateSpaceCommand}
   */
  updateSpace(args: UpdateSpaceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSpaceCommandOutput>;
  updateSpace(args: UpdateSpaceCommandInput, cb: (err: any, data?: UpdateSpaceCommandOutput) => void): void;
  updateSpace(
    args: UpdateSpaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSpaceCommandOutput) => void
  ): void;
}

/**
 * <p>AWS re:Post Private is a private version of AWS re:Post for enterprises with Enterprise Support or Enterprise On-Ramp Support plans. It provides access to knowledge and experts to accelerate cloud adoption and increase developer productivity. With your organization-specific private re:Post, you can build an organization-specific developer community that drives efficiencies at scale and provides access to valuable knowledge resources. Additionally, re:Post Private centralizes trusted AWS technical content and offers private discussion forums to improve how your teams collaborate internally and with AWS to remove technical obstacles, accelerate innovation, and scale more efficiently in the cloud.</p>
 * @public
 */
export class Repostspace extends RepostspaceClient implements Repostspace {}
createAggregatedClient(commands, Repostspace);
