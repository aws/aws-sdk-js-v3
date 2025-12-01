// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptChannelHandshakeCommand,
  AcceptChannelHandshakeCommandInput,
  AcceptChannelHandshakeCommandOutput,
} from "./commands/AcceptChannelHandshakeCommand";
import {
  CancelChannelHandshakeCommand,
  CancelChannelHandshakeCommandInput,
  CancelChannelHandshakeCommandOutput,
} from "./commands/CancelChannelHandshakeCommand";
import {
  CreateChannelHandshakeCommand,
  CreateChannelHandshakeCommandInput,
  CreateChannelHandshakeCommandOutput,
} from "./commands/CreateChannelHandshakeCommand";
import {
  CreateProgramManagementAccountCommand,
  CreateProgramManagementAccountCommandInput,
  CreateProgramManagementAccountCommandOutput,
} from "./commands/CreateProgramManagementAccountCommand";
import {
  CreateRelationshipCommand,
  CreateRelationshipCommandInput,
  CreateRelationshipCommandOutput,
} from "./commands/CreateRelationshipCommand";
import {
  DeleteProgramManagementAccountCommand,
  DeleteProgramManagementAccountCommandInput,
  DeleteProgramManagementAccountCommandOutput,
} from "./commands/DeleteProgramManagementAccountCommand";
import {
  DeleteRelationshipCommand,
  DeleteRelationshipCommandInput,
  DeleteRelationshipCommandOutput,
} from "./commands/DeleteRelationshipCommand";
import {
  GetRelationshipCommand,
  GetRelationshipCommandInput,
  GetRelationshipCommandOutput,
} from "./commands/GetRelationshipCommand";
import {
  ListChannelHandshakesCommand,
  ListChannelHandshakesCommandInput,
  ListChannelHandshakesCommandOutput,
} from "./commands/ListChannelHandshakesCommand";
import {
  ListProgramManagementAccountsCommand,
  ListProgramManagementAccountsCommandInput,
  ListProgramManagementAccountsCommandOutput,
} from "./commands/ListProgramManagementAccountsCommand";
import {
  ListRelationshipsCommand,
  ListRelationshipsCommandInput,
  ListRelationshipsCommandOutput,
} from "./commands/ListRelationshipsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RejectChannelHandshakeCommand,
  RejectChannelHandshakeCommandInput,
  RejectChannelHandshakeCommandOutput,
} from "./commands/RejectChannelHandshakeCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateProgramManagementAccountCommand,
  UpdateProgramManagementAccountCommandInput,
  UpdateProgramManagementAccountCommandOutput,
} from "./commands/UpdateProgramManagementAccountCommand";
import {
  UpdateRelationshipCommand,
  UpdateRelationshipCommandInput,
  UpdateRelationshipCommandOutput,
} from "./commands/UpdateRelationshipCommand";
import { PartnerCentralChannelClient } from "./PartnerCentralChannelClient";

const commands = {
  AcceptChannelHandshakeCommand,
  CancelChannelHandshakeCommand,
  CreateChannelHandshakeCommand,
  CreateProgramManagementAccountCommand,
  CreateRelationshipCommand,
  DeleteProgramManagementAccountCommand,
  DeleteRelationshipCommand,
  GetRelationshipCommand,
  ListChannelHandshakesCommand,
  ListProgramManagementAccountsCommand,
  ListRelationshipsCommand,
  ListTagsForResourceCommand,
  RejectChannelHandshakeCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateProgramManagementAccountCommand,
  UpdateRelationshipCommand,
};

export interface PartnerCentralChannel {
  /**
   * @see {@link AcceptChannelHandshakeCommand}
   */
  acceptChannelHandshake(
    args: AcceptChannelHandshakeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptChannelHandshakeCommandOutput>;
  acceptChannelHandshake(
    args: AcceptChannelHandshakeCommandInput,
    cb: (err: any, data?: AcceptChannelHandshakeCommandOutput) => void
  ): void;
  acceptChannelHandshake(
    args: AcceptChannelHandshakeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptChannelHandshakeCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelChannelHandshakeCommand}
   */
  cancelChannelHandshake(
    args: CancelChannelHandshakeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelChannelHandshakeCommandOutput>;
  cancelChannelHandshake(
    args: CancelChannelHandshakeCommandInput,
    cb: (err: any, data?: CancelChannelHandshakeCommandOutput) => void
  ): void;
  cancelChannelHandshake(
    args: CancelChannelHandshakeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelChannelHandshakeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelHandshakeCommand}
   */
  createChannelHandshake(
    args: CreateChannelHandshakeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelHandshakeCommandOutput>;
  createChannelHandshake(
    args: CreateChannelHandshakeCommandInput,
    cb: (err: any, data?: CreateChannelHandshakeCommandOutput) => void
  ): void;
  createChannelHandshake(
    args: CreateChannelHandshakeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelHandshakeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProgramManagementAccountCommand}
   */
  createProgramManagementAccount(
    args: CreateProgramManagementAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProgramManagementAccountCommandOutput>;
  createProgramManagementAccount(
    args: CreateProgramManagementAccountCommandInput,
    cb: (err: any, data?: CreateProgramManagementAccountCommandOutput) => void
  ): void;
  createProgramManagementAccount(
    args: CreateProgramManagementAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProgramManagementAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRelationshipCommand}
   */
  createRelationship(
    args: CreateRelationshipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRelationshipCommandOutput>;
  createRelationship(
    args: CreateRelationshipCommandInput,
    cb: (err: any, data?: CreateRelationshipCommandOutput) => void
  ): void;
  createRelationship(
    args: CreateRelationshipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRelationshipCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProgramManagementAccountCommand}
   */
  deleteProgramManagementAccount(
    args: DeleteProgramManagementAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProgramManagementAccountCommandOutput>;
  deleteProgramManagementAccount(
    args: DeleteProgramManagementAccountCommandInput,
    cb: (err: any, data?: DeleteProgramManagementAccountCommandOutput) => void
  ): void;
  deleteProgramManagementAccount(
    args: DeleteProgramManagementAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProgramManagementAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRelationshipCommand}
   */
  deleteRelationship(
    args: DeleteRelationshipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRelationshipCommandOutput>;
  deleteRelationship(
    args: DeleteRelationshipCommandInput,
    cb: (err: any, data?: DeleteRelationshipCommandOutput) => void
  ): void;
  deleteRelationship(
    args: DeleteRelationshipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRelationshipCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRelationshipCommand}
   */
  getRelationship(
    args: GetRelationshipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationshipCommandOutput>;
  getRelationship(args: GetRelationshipCommandInput, cb: (err: any, data?: GetRelationshipCommandOutput) => void): void;
  getRelationship(
    args: GetRelationshipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelationshipCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelHandshakesCommand}
   */
  listChannelHandshakes(
    args: ListChannelHandshakesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelHandshakesCommandOutput>;
  listChannelHandshakes(
    args: ListChannelHandshakesCommandInput,
    cb: (err: any, data?: ListChannelHandshakesCommandOutput) => void
  ): void;
  listChannelHandshakes(
    args: ListChannelHandshakesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelHandshakesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProgramManagementAccountsCommand}
   */
  listProgramManagementAccounts(
    args: ListProgramManagementAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProgramManagementAccountsCommandOutput>;
  listProgramManagementAccounts(
    args: ListProgramManagementAccountsCommandInput,
    cb: (err: any, data?: ListProgramManagementAccountsCommandOutput) => void
  ): void;
  listProgramManagementAccounts(
    args: ListProgramManagementAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProgramManagementAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRelationshipsCommand}
   */
  listRelationships(
    args: ListRelationshipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRelationshipsCommandOutput>;
  listRelationships(
    args: ListRelationshipsCommandInput,
    cb: (err: any, data?: ListRelationshipsCommandOutput) => void
  ): void;
  listRelationships(
    args: ListRelationshipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRelationshipsCommandOutput) => void
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
   * @see {@link RejectChannelHandshakeCommand}
   */
  rejectChannelHandshake(
    args: RejectChannelHandshakeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectChannelHandshakeCommandOutput>;
  rejectChannelHandshake(
    args: RejectChannelHandshakeCommandInput,
    cb: (err: any, data?: RejectChannelHandshakeCommandOutput) => void
  ): void;
  rejectChannelHandshake(
    args: RejectChannelHandshakeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectChannelHandshakeCommandOutput) => void
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
   * @see {@link UpdateProgramManagementAccountCommand}
   */
  updateProgramManagementAccount(
    args: UpdateProgramManagementAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProgramManagementAccountCommandOutput>;
  updateProgramManagementAccount(
    args: UpdateProgramManagementAccountCommandInput,
    cb: (err: any, data?: UpdateProgramManagementAccountCommandOutput) => void
  ): void;
  updateProgramManagementAccount(
    args: UpdateProgramManagementAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProgramManagementAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRelationshipCommand}
   */
  updateRelationship(
    args: UpdateRelationshipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRelationshipCommandOutput>;
  updateRelationship(
    args: UpdateRelationshipCommandInput,
    cb: (err: any, data?: UpdateRelationshipCommandOutput) => void
  ): void;
  updateRelationship(
    args: UpdateRelationshipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRelationshipCommandOutput) => void
  ): void;
}

/**
 * <p>AWS Partner Central Channel service for managing partner relationships, handshakes, and program management accounts.</p>
 * @public
 */
export class PartnerCentralChannel extends PartnerCentralChannelClient implements PartnerCentralChannel {}
createAggregatedClient(commands, PartnerCentralChannel);
