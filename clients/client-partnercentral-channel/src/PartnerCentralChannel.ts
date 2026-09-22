// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AcceptChannelHandshakeCommandInput,
  type AcceptChannelHandshakeCommandOutput,
  AcceptChannelHandshakeCommand,
} from "./commands/AcceptChannelHandshakeCommand";
import {
  type CancelChannelHandshakeCommandInput,
  type CancelChannelHandshakeCommandOutput,
  CancelChannelHandshakeCommand,
} from "./commands/CancelChannelHandshakeCommand";
import {
  type CreateChannelHandshakeCommandInput,
  type CreateChannelHandshakeCommandOutput,
  CreateChannelHandshakeCommand,
} from "./commands/CreateChannelHandshakeCommand";
import {
  type CreateProgramManagementAccountCommandInput,
  type CreateProgramManagementAccountCommandOutput,
  CreateProgramManagementAccountCommand,
} from "./commands/CreateProgramManagementAccountCommand";
import {
  type CreateRelationshipCommandInput,
  type CreateRelationshipCommandOutput,
  CreateRelationshipCommand,
} from "./commands/CreateRelationshipCommand";
import {
  type DeleteProgramManagementAccountCommandInput,
  type DeleteProgramManagementAccountCommandOutput,
  DeleteProgramManagementAccountCommand,
} from "./commands/DeleteProgramManagementAccountCommand";
import {
  type DeleteRelationshipCommandInput,
  type DeleteRelationshipCommandOutput,
  DeleteRelationshipCommand,
} from "./commands/DeleteRelationshipCommand";
import {
  type GetRelationshipCommandInput,
  type GetRelationshipCommandOutput,
  GetRelationshipCommand,
} from "./commands/GetRelationshipCommand";
import {
  type ListChannelHandshakesCommandInput,
  type ListChannelHandshakesCommandOutput,
  ListChannelHandshakesCommand,
} from "./commands/ListChannelHandshakesCommand";
import {
  type ListProgramManagementAccountsCommandInput,
  type ListProgramManagementAccountsCommandOutput,
  ListProgramManagementAccountsCommand,
} from "./commands/ListProgramManagementAccountsCommand";
import {
  type ListRelationshipsCommandInput,
  type ListRelationshipsCommandOutput,
  ListRelationshipsCommand,
} from "./commands/ListRelationshipsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type RejectChannelHandshakeCommandInput,
  type RejectChannelHandshakeCommandOutput,
  RejectChannelHandshakeCommand,
} from "./commands/RejectChannelHandshakeCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateProgramManagementAccountCommandInput,
  type UpdateProgramManagementAccountCommandOutput,
  UpdateProgramManagementAccountCommand,
} from "./commands/UpdateProgramManagementAccountCommand";
import {
  type UpdateRelationshipCommandInput,
  type UpdateRelationshipCommandOutput,
  UpdateRelationshipCommand,
} from "./commands/UpdateRelationshipCommand";
import { paginateListChannelHandshakes } from "./pagination/ListChannelHandshakesPaginator";
import { paginateListProgramManagementAccounts } from "./pagination/ListProgramManagementAccountsPaginator";
import { paginateListRelationships } from "./pagination/ListRelationshipsPaginator";
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
const paginators = {
  paginateListChannelHandshakes,
  paginateListProgramManagementAccounts,
  paginateListRelationships,
};

/**
 * @public
 */
export interface PartnerCentralChannelRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface PartnerCentralChannel {
  /**
   * @see {@link AcceptChannelHandshakeCommand}
   */
  acceptChannelHandshake(
    args: AcceptChannelHandshakeCommandInput,
    options?: PartnerCentralChannelRequestOptions
  ): Promise<AcceptChannelHandshakeCommandOutput>;
  acceptChannelHandshake(
    args: AcceptChannelHandshakeCommandInput,
    cb: (err: any, data?: AcceptChannelHandshakeCommandOutput) => void
  ): void;
  acceptChannelHandshake(
    args: AcceptChannelHandshakeCommandInput,
    options: PartnerCentralChannelRequestOptions,
    cb: (err: any, data?: AcceptChannelHandshakeCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelChannelHandshakeCommand}
   */
  cancelChannelHandshake(
    args: CancelChannelHandshakeCommandInput,
    options?: PartnerCentralChannelRequestOptions
  ): Promise<CancelChannelHandshakeCommandOutput>;
  cancelChannelHandshake(
    args: CancelChannelHandshakeCommandInput,
    cb: (err: any, data?: CancelChannelHandshakeCommandOutput) => void
  ): void;
  cancelChannelHandshake(
    args: CancelChannelHandshakeCommandInput,
    options: PartnerCentralChannelRequestOptions,
    cb: (err: any, data?: CancelChannelHandshakeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelHandshakeCommand}
   */
  createChannelHandshake(
    args: CreateChannelHandshakeCommandInput,
    options?: PartnerCentralChannelRequestOptions
  ): Promise<CreateChannelHandshakeCommandOutput>;
  createChannelHandshake(
    args: CreateChannelHandshakeCommandInput,
    cb: (err: any, data?: CreateChannelHandshakeCommandOutput) => void
  ): void;
  createChannelHandshake(
    args: CreateChannelHandshakeCommandInput,
    options: PartnerCentralChannelRequestOptions,
    cb: (err: any, data?: CreateChannelHandshakeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProgramManagementAccountCommand}
   */
  createProgramManagementAccount(
    args: CreateProgramManagementAccountCommandInput,
    options?: PartnerCentralChannelRequestOptions
  ): Promise<CreateProgramManagementAccountCommandOutput>;
  createProgramManagementAccount(
    args: CreateProgramManagementAccountCommandInput,
    cb: (err: any, data?: CreateProgramManagementAccountCommandOutput) => void
  ): void;
  createProgramManagementAccount(
    args: CreateProgramManagementAccountCommandInput,
    options: PartnerCentralChannelRequestOptions,
    cb: (err: any, data?: CreateProgramManagementAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRelationshipCommand}
   */
  createRelationship(
    args: CreateRelationshipCommandInput,
    options?: PartnerCentralChannelRequestOptions
  ): Promise<CreateRelationshipCommandOutput>;
  createRelationship(
    args: CreateRelationshipCommandInput,
    cb: (err: any, data?: CreateRelationshipCommandOutput) => void
  ): void;
  createRelationship(
    args: CreateRelationshipCommandInput,
    options: PartnerCentralChannelRequestOptions,
    cb: (err: any, data?: CreateRelationshipCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProgramManagementAccountCommand}
   */
  deleteProgramManagementAccount(
    args: DeleteProgramManagementAccountCommandInput,
    options?: PartnerCentralChannelRequestOptions
  ): Promise<DeleteProgramManagementAccountCommandOutput>;
  deleteProgramManagementAccount(
    args: DeleteProgramManagementAccountCommandInput,
    cb: (err: any, data?: DeleteProgramManagementAccountCommandOutput) => void
  ): void;
  deleteProgramManagementAccount(
    args: DeleteProgramManagementAccountCommandInput,
    options: PartnerCentralChannelRequestOptions,
    cb: (err: any, data?: DeleteProgramManagementAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRelationshipCommand}
   */
  deleteRelationship(
    args: DeleteRelationshipCommandInput,
    options?: PartnerCentralChannelRequestOptions
  ): Promise<DeleteRelationshipCommandOutput>;
  deleteRelationship(
    args: DeleteRelationshipCommandInput,
    cb: (err: any, data?: DeleteRelationshipCommandOutput) => void
  ): void;
  deleteRelationship(
    args: DeleteRelationshipCommandInput,
    options: PartnerCentralChannelRequestOptions,
    cb: (err: any, data?: DeleteRelationshipCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRelationshipCommand}
   */
  getRelationship(
    args: GetRelationshipCommandInput,
    options?: PartnerCentralChannelRequestOptions
  ): Promise<GetRelationshipCommandOutput>;
  getRelationship(
    args: GetRelationshipCommandInput,
    cb: (err: any, data?: GetRelationshipCommandOutput) => void
  ): void;
  getRelationship(
    args: GetRelationshipCommandInput,
    options: PartnerCentralChannelRequestOptions,
    cb: (err: any, data?: GetRelationshipCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelHandshakesCommand}
   */
  listChannelHandshakes(
    args: ListChannelHandshakesCommandInput,
    options?: PartnerCentralChannelRequestOptions
  ): Promise<ListChannelHandshakesCommandOutput>;
  listChannelHandshakes(
    args: ListChannelHandshakesCommandInput,
    cb: (err: any, data?: ListChannelHandshakesCommandOutput) => void
  ): void;
  listChannelHandshakes(
    args: ListChannelHandshakesCommandInput,
    options: PartnerCentralChannelRequestOptions,
    cb: (err: any, data?: ListChannelHandshakesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProgramManagementAccountsCommand}
   */
  listProgramManagementAccounts(
    args: ListProgramManagementAccountsCommandInput,
    options?: PartnerCentralChannelRequestOptions
  ): Promise<ListProgramManagementAccountsCommandOutput>;
  listProgramManagementAccounts(
    args: ListProgramManagementAccountsCommandInput,
    cb: (err: any, data?: ListProgramManagementAccountsCommandOutput) => void
  ): void;
  listProgramManagementAccounts(
    args: ListProgramManagementAccountsCommandInput,
    options: PartnerCentralChannelRequestOptions,
    cb: (err: any, data?: ListProgramManagementAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRelationshipsCommand}
   */
  listRelationships(
    args: ListRelationshipsCommandInput,
    options?: PartnerCentralChannelRequestOptions
  ): Promise<ListRelationshipsCommandOutput>;
  listRelationships(
    args: ListRelationshipsCommandInput,
    cb: (err: any, data?: ListRelationshipsCommandOutput) => void
  ): void;
  listRelationships(
    args: ListRelationshipsCommandInput,
    options: PartnerCentralChannelRequestOptions,
    cb: (err: any, data?: ListRelationshipsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: PartnerCentralChannelRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: PartnerCentralChannelRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectChannelHandshakeCommand}
   */
  rejectChannelHandshake(
    args: RejectChannelHandshakeCommandInput,
    options?: PartnerCentralChannelRequestOptions
  ): Promise<RejectChannelHandshakeCommandOutput>;
  rejectChannelHandshake(
    args: RejectChannelHandshakeCommandInput,
    cb: (err: any, data?: RejectChannelHandshakeCommandOutput) => void
  ): void;
  rejectChannelHandshake(
    args: RejectChannelHandshakeCommandInput,
    options: PartnerCentralChannelRequestOptions,
    cb: (err: any, data?: RejectChannelHandshakeCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: PartnerCentralChannelRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: PartnerCentralChannelRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: PartnerCentralChannelRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: PartnerCentralChannelRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProgramManagementAccountCommand}
   */
  updateProgramManagementAccount(
    args: UpdateProgramManagementAccountCommandInput,
    options?: PartnerCentralChannelRequestOptions
  ): Promise<UpdateProgramManagementAccountCommandOutput>;
  updateProgramManagementAccount(
    args: UpdateProgramManagementAccountCommandInput,
    cb: (err: any, data?: UpdateProgramManagementAccountCommandOutput) => void
  ): void;
  updateProgramManagementAccount(
    args: UpdateProgramManagementAccountCommandInput,
    options: PartnerCentralChannelRequestOptions,
    cb: (err: any, data?: UpdateProgramManagementAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRelationshipCommand}
   */
  updateRelationship(
    args: UpdateRelationshipCommandInput,
    options?: PartnerCentralChannelRequestOptions
  ): Promise<UpdateRelationshipCommandOutput>;
  updateRelationship(
    args: UpdateRelationshipCommandInput,
    cb: (err: any, data?: UpdateRelationshipCommandOutput) => void
  ): void;
  updateRelationship(
    args: UpdateRelationshipCommandInput,
    options: PartnerCentralChannelRequestOptions,
    cb: (err: any, data?: UpdateRelationshipCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelHandshakesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListChannelHandshakesCommandOutput}.
   */
  paginateListChannelHandshakes(
    args: ListChannelHandshakesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListChannelHandshakesCommandOutput>;

  /**
   * @see {@link ListProgramManagementAccountsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProgramManagementAccountsCommandOutput}.
   */
  paginateListProgramManagementAccounts(
    args: ListProgramManagementAccountsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProgramManagementAccountsCommandOutput>;

  /**
   * @see {@link ListRelationshipsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRelationshipsCommandOutput}.
   */
  paginateListRelationships(
    args: ListRelationshipsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRelationshipsCommandOutput>;
}

/**
 * <p>AWS Partner Central Channel service for managing partner relationships, handshakes, and program management accounts.</p>
 * @public
 */
export class PartnerCentralChannel extends PartnerCentralChannelClient implements PartnerCentralChannel {}
createAggregatedClient(commands, PartnerCentralChannel, { paginators });
