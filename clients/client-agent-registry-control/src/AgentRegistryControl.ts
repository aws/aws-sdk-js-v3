// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import { AgentRegistryControlClient } from "./AgentRegistryControlClient";
import {
  type CreateRegistryCommandInput,
  type CreateRegistryCommandOutput,
  CreateRegistryCommand,
} from "./commands/CreateRegistryCommand";
import {
  type CreateRegistryRecordCommandInput,
  type CreateRegistryRecordCommandOutput,
  CreateRegistryRecordCommand,
} from "./commands/CreateRegistryRecordCommand";
import {
  type DeleteRegistryCommandInput,
  type DeleteRegistryCommandOutput,
  DeleteRegistryCommand,
} from "./commands/DeleteRegistryCommand";
import {
  type DeleteRegistryRecordCommandInput,
  type DeleteRegistryRecordCommandOutput,
  DeleteRegistryRecordCommand,
} from "./commands/DeleteRegistryRecordCommand";
import {
  type GetRegistryCommandInput,
  type GetRegistryCommandOutput,
  GetRegistryCommand,
} from "./commands/GetRegistryCommand";
import {
  type GetRegistryRecordCommandInput,
  type GetRegistryRecordCommandOutput,
  GetRegistryRecordCommand,
} from "./commands/GetRegistryRecordCommand";
import {
  type ListRegistriesCommandInput,
  type ListRegistriesCommandOutput,
  ListRegistriesCommand,
} from "./commands/ListRegistriesCommand";
import {
  type ListRegistryRecordsCommandInput,
  type ListRegistryRecordsCommandOutput,
  ListRegistryRecordsCommand,
} from "./commands/ListRegistryRecordsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type SubmitRegistryRecordForApprovalCommandInput,
  type SubmitRegistryRecordForApprovalCommandOutput,
  SubmitRegistryRecordForApprovalCommand,
} from "./commands/SubmitRegistryRecordForApprovalCommand";
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
  type UpdateRegistryCommandInput,
  type UpdateRegistryCommandOutput,
  UpdateRegistryCommand,
} from "./commands/UpdateRegistryCommand";
import {
  type UpdateRegistryRecordCommandInput,
  type UpdateRegistryRecordCommandOutput,
  UpdateRegistryRecordCommand,
} from "./commands/UpdateRegistryRecordCommand";
import {
  type UpdateRegistryRecordStatusCommandInput,
  type UpdateRegistryRecordStatusCommandOutput,
  UpdateRegistryRecordStatusCommand,
} from "./commands/UpdateRegistryRecordStatusCommand";
import type { AgentRegistryControlServiceException } from "./models/AgentRegistryControlServiceException";
import { paginateListRegistries } from "./pagination/ListRegistriesPaginator";
import { paginateListRegistryRecords } from "./pagination/ListRegistryRecordsPaginator";
import { waitUntilRegistryReady } from "./waiters/waitForRegistryReady";
import { waitUntilRegistryRecordApproved } from "./waiters/waitForRegistryRecordApproved";

const commands = {
  CreateRegistryCommand,
  CreateRegistryRecordCommand,
  DeleteRegistryCommand,
  DeleteRegistryRecordCommand,
  GetRegistryCommand,
  GetRegistryRecordCommand,
  ListRegistriesCommand,
  ListRegistryRecordsCommand,
  ListTagsForResourceCommand,
  SubmitRegistryRecordForApprovalCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateRegistryCommand,
  UpdateRegistryRecordCommand,
  UpdateRegistryRecordStatusCommand,
};
const paginators = {
  paginateListRegistries,
  paginateListRegistryRecords,
};
const waiters = {
  waitUntilRegistryReady,
  waitUntilRegistryRecordApproved,
};

export interface AgentRegistryControl {
  /**
   * @see {@link CreateRegistryCommand}
   */
  createRegistry(
    args: CreateRegistryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRegistryCommandOutput>;
  createRegistry(
    args: CreateRegistryCommandInput,
    cb: (err: any, data?: CreateRegistryCommandOutput) => void
  ): void;
  createRegistry(
    args: CreateRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRegistryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRegistryRecordCommand}
   */
  createRegistryRecord(
    args: CreateRegistryRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRegistryRecordCommandOutput>;
  createRegistryRecord(
    args: CreateRegistryRecordCommandInput,
    cb: (err: any, data?: CreateRegistryRecordCommandOutput) => void
  ): void;
  createRegistryRecord(
    args: CreateRegistryRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRegistryRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRegistryCommand}
   */
  deleteRegistry(
    args: DeleteRegistryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRegistryCommandOutput>;
  deleteRegistry(
    args: DeleteRegistryCommandInput,
    cb: (err: any, data?: DeleteRegistryCommandOutput) => void
  ): void;
  deleteRegistry(
    args: DeleteRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRegistryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRegistryRecordCommand}
   */
  deleteRegistryRecord(
    args: DeleteRegistryRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRegistryRecordCommandOutput>;
  deleteRegistryRecord(
    args: DeleteRegistryRecordCommandInput,
    cb: (err: any, data?: DeleteRegistryRecordCommandOutput) => void
  ): void;
  deleteRegistryRecord(
    args: DeleteRegistryRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRegistryRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRegistryCommand}
   */
  getRegistry(
    args: GetRegistryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRegistryCommandOutput>;
  getRegistry(
    args: GetRegistryCommandInput,
    cb: (err: any, data?: GetRegistryCommandOutput) => void
  ): void;
  getRegistry(
    args: GetRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRegistryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRegistryRecordCommand}
   */
  getRegistryRecord(
    args: GetRegistryRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRegistryRecordCommandOutput>;
  getRegistryRecord(
    args: GetRegistryRecordCommandInput,
    cb: (err: any, data?: GetRegistryRecordCommandOutput) => void
  ): void;
  getRegistryRecord(
    args: GetRegistryRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRegistryRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRegistriesCommand}
   */
  listRegistries(): Promise<ListRegistriesCommandOutput>;
  listRegistries(
    args: ListRegistriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRegistriesCommandOutput>;
  listRegistries(
    args: ListRegistriesCommandInput,
    cb: (err: any, data?: ListRegistriesCommandOutput) => void
  ): void;
  listRegistries(
    args: ListRegistriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRegistriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRegistryRecordsCommand}
   */
  listRegistryRecords(
    args: ListRegistryRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRegistryRecordsCommandOutput>;
  listRegistryRecords(
    args: ListRegistryRecordsCommandInput,
    cb: (err: any, data?: ListRegistryRecordsCommandOutput) => void
  ): void;
  listRegistryRecords(
    args: ListRegistryRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRegistryRecordsCommandOutput) => void
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
   * @see {@link SubmitRegistryRecordForApprovalCommand}
   */
  submitRegistryRecordForApproval(
    args: SubmitRegistryRecordForApprovalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SubmitRegistryRecordForApprovalCommandOutput>;
  submitRegistryRecordForApproval(
    args: SubmitRegistryRecordForApprovalCommandInput,
    cb: (err: any, data?: SubmitRegistryRecordForApprovalCommandOutput) => void
  ): void;
  submitRegistryRecordForApproval(
    args: SubmitRegistryRecordForApprovalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubmitRegistryRecordForApprovalCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRegistryCommand}
   */
  updateRegistry(
    args: UpdateRegistryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRegistryCommandOutput>;
  updateRegistry(
    args: UpdateRegistryCommandInput,
    cb: (err: any, data?: UpdateRegistryCommandOutput) => void
  ): void;
  updateRegistry(
    args: UpdateRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRegistryCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRegistryRecordCommand}
   */
  updateRegistryRecord(
    args: UpdateRegistryRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRegistryRecordCommandOutput>;
  updateRegistryRecord(
    args: UpdateRegistryRecordCommandInput,
    cb: (err: any, data?: UpdateRegistryRecordCommandOutput) => void
  ): void;
  updateRegistryRecord(
    args: UpdateRegistryRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRegistryRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRegistryRecordStatusCommand}
   */
  updateRegistryRecordStatus(
    args: UpdateRegistryRecordStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRegistryRecordStatusCommandOutput>;
  updateRegistryRecordStatus(
    args: UpdateRegistryRecordStatusCommandInput,
    cb: (err: any, data?: UpdateRegistryRecordStatusCommandOutput) => void
  ): void;
  updateRegistryRecordStatus(
    args: UpdateRegistryRecordStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRegistryRecordStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRegistriesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRegistriesCommandOutput}.
   */
  paginateListRegistries(
    args?: ListRegistriesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRegistriesCommandOutput>;

  /**
   * @see {@link ListRegistryRecordsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRegistryRecordsCommandOutput}.
   */
  paginateListRegistryRecords(
    args: ListRegistryRecordsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRegistryRecordsCommandOutput>;

  /**
   * @see {@link GetRegistryCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilRegistryReady(
    args: GetRegistryCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<AgentRegistryControl>, "client">
  ): Promise<WaiterResult<GetRegistryCommandOutput>>;

  /**
   * @see {@link GetRegistryRecordCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilRegistryRecordApproved(
    args: GetRegistryRecordCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<AgentRegistryControl>, "client">
  ): Promise<WaiterResult<GetRegistryRecordCommandOutput>>;
}

/**
 * <p>AWS Agent Registry is a managed catalog for publishing and discovering resources such as MCP servers, agents, and agent skills. Agent Registry Control is its control-plane API: use it to create and manage registries and the records they contain, configure discovery and authorization, govern record approval and curation workflows, and manage automatic detection of resources. Data-plane search and MCP invocation operations are provided by the companion Agent Registry API.</p>
 * @public
 */
export class AgentRegistryControl extends AgentRegistryControlClient implements AgentRegistryControl {}
createAggregatedClient(commands, AgentRegistryControl, { paginators, waiters });
