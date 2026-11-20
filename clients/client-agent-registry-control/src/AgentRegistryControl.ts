// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import { AgentRegistryControlClient } from "./AgentRegistryControlClient";
import {
  type AssociatePublisherCommandInput,
  type AssociatePublisherCommandOutput,
  AssociatePublisherCommand,
} from "./commands/AssociatePublisherCommand";
import {
  type CreatePublisherCommandInput,
  type CreatePublisherCommandOutput,
  CreatePublisherCommand,
} from "./commands/CreatePublisherCommand";
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
  type DeletePublisherCommandInput,
  type DeletePublisherCommandOutput,
  DeletePublisherCommand,
} from "./commands/DeletePublisherCommand";
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
  type DisassociatePublisherCommandInput,
  type DisassociatePublisherCommandOutput,
  DisassociatePublisherCommand,
} from "./commands/DisassociatePublisherCommand";
import {
  type GetPublisherCommandInput,
  type GetPublisherCommandOutput,
  GetPublisherCommand,
} from "./commands/GetPublisherCommand";
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
  type ListPublisherAssociationsCommandInput,
  type ListPublisherAssociationsCommandOutput,
  ListPublisherAssociationsCommand,
} from "./commands/ListPublisherAssociationsCommand";
import {
  type ListPublishersCommandInput,
  type ListPublishersCommandOutput,
  ListPublishersCommand,
} from "./commands/ListPublishersCommand";
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
  type UpdatePublisherAssociationApprovalStatusCommandInput,
  type UpdatePublisherAssociationApprovalStatusCommandOutput,
  UpdatePublisherAssociationApprovalStatusCommand,
} from "./commands/UpdatePublisherAssociationApprovalStatusCommand";
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
import {
  type ValidatePublisherCommandInput,
  type ValidatePublisherCommandOutput,
  ValidatePublisherCommand,
} from "./commands/ValidatePublisherCommand";
import type { AgentRegistryControlServiceException } from "./models/AgentRegistryControlServiceException";
import { paginateListPublisherAssociations } from "./pagination/ListPublisherAssociationsPaginator";
import { paginateListPublishers } from "./pagination/ListPublishersPaginator";
import { paginateListRegistries } from "./pagination/ListRegistriesPaginator";
import { paginateListRegistryRecords } from "./pagination/ListRegistryRecordsPaginator";
import { waitUntilRegistryReady } from "./waiters/waitForRegistryReady";
import { waitUntilRegistryRecordApproved } from "./waiters/waitForRegistryRecordApproved";

const commands = {
  AssociatePublisherCommand,
  CreatePublisherCommand,
  CreateRegistryCommand,
  CreateRegistryRecordCommand,
  DeletePublisherCommand,
  DeleteRegistryCommand,
  DeleteRegistryRecordCommand,
  DisassociatePublisherCommand,
  GetPublisherCommand,
  GetRegistryCommand,
  GetRegistryRecordCommand,
  ListPublisherAssociationsCommand,
  ListPublishersCommand,
  ListRegistriesCommand,
  ListRegistryRecordsCommand,
  ListTagsForResourceCommand,
  SubmitRegistryRecordForApprovalCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdatePublisherAssociationApprovalStatusCommand,
  UpdateRegistryCommand,
  UpdateRegistryRecordCommand,
  UpdateRegistryRecordStatusCommand,
  ValidatePublisherCommand,
};
const paginators = {
  paginateListPublisherAssociations,
  paginateListPublishers,
  paginateListRegistries,
  paginateListRegistryRecords,
};
const waiters = {
  waitUntilRegistryReady,
  waitUntilRegistryRecordApproved,
};

/**
 * @public
 */
export interface AgentRegistryControlRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface AgentRegistryControl {
  /**
   * @see {@link AssociatePublisherCommand}
   */
  associatePublisher(
    args: AssociatePublisherCommandInput,
    options?: AgentRegistryControlRequestOptions
  ): Promise<AssociatePublisherCommandOutput>;
  associatePublisher(
    args: AssociatePublisherCommandInput,
    cb: (err: any, data?: AssociatePublisherCommandOutput) => void
  ): void;
  associatePublisher(
    args: AssociatePublisherCommandInput,
    options: AgentRegistryControlRequestOptions,
    cb: (err: any, data?: AssociatePublisherCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePublisherCommand}
   */
  createPublisher(
    args: CreatePublisherCommandInput,
    options?: AgentRegistryControlRequestOptions
  ): Promise<CreatePublisherCommandOutput>;
  createPublisher(
    args: CreatePublisherCommandInput,
    cb: (err: any, data?: CreatePublisherCommandOutput) => void
  ): void;
  createPublisher(
    args: CreatePublisherCommandInput,
    options: AgentRegistryControlRequestOptions,
    cb: (err: any, data?: CreatePublisherCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRegistryCommand}
   */
  createRegistry(
    args: CreateRegistryCommandInput,
    options?: AgentRegistryControlRequestOptions
  ): Promise<CreateRegistryCommandOutput>;
  createRegistry(
    args: CreateRegistryCommandInput,
    cb: (err: any, data?: CreateRegistryCommandOutput) => void
  ): void;
  createRegistry(
    args: CreateRegistryCommandInput,
    options: AgentRegistryControlRequestOptions,
    cb: (err: any, data?: CreateRegistryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRegistryRecordCommand}
   */
  createRegistryRecord(
    args: CreateRegistryRecordCommandInput,
    options?: AgentRegistryControlRequestOptions
  ): Promise<CreateRegistryRecordCommandOutput>;
  createRegistryRecord(
    args: CreateRegistryRecordCommandInput,
    cb: (err: any, data?: CreateRegistryRecordCommandOutput) => void
  ): void;
  createRegistryRecord(
    args: CreateRegistryRecordCommandInput,
    options: AgentRegistryControlRequestOptions,
    cb: (err: any, data?: CreateRegistryRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePublisherCommand}
   */
  deletePublisher(
    args: DeletePublisherCommandInput,
    options?: AgentRegistryControlRequestOptions
  ): Promise<DeletePublisherCommandOutput>;
  deletePublisher(
    args: DeletePublisherCommandInput,
    cb: (err: any, data?: DeletePublisherCommandOutput) => void
  ): void;
  deletePublisher(
    args: DeletePublisherCommandInput,
    options: AgentRegistryControlRequestOptions,
    cb: (err: any, data?: DeletePublisherCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRegistryCommand}
   */
  deleteRegistry(
    args: DeleteRegistryCommandInput,
    options?: AgentRegistryControlRequestOptions
  ): Promise<DeleteRegistryCommandOutput>;
  deleteRegistry(
    args: DeleteRegistryCommandInput,
    cb: (err: any, data?: DeleteRegistryCommandOutput) => void
  ): void;
  deleteRegistry(
    args: DeleteRegistryCommandInput,
    options: AgentRegistryControlRequestOptions,
    cb: (err: any, data?: DeleteRegistryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRegistryRecordCommand}
   */
  deleteRegistryRecord(
    args: DeleteRegistryRecordCommandInput,
    options?: AgentRegistryControlRequestOptions
  ): Promise<DeleteRegistryRecordCommandOutput>;
  deleteRegistryRecord(
    args: DeleteRegistryRecordCommandInput,
    cb: (err: any, data?: DeleteRegistryRecordCommandOutput) => void
  ): void;
  deleteRegistryRecord(
    args: DeleteRegistryRecordCommandInput,
    options: AgentRegistryControlRequestOptions,
    cb: (err: any, data?: DeleteRegistryRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociatePublisherCommand}
   */
  disassociatePublisher(
    args: DisassociatePublisherCommandInput,
    options?: AgentRegistryControlRequestOptions
  ): Promise<DisassociatePublisherCommandOutput>;
  disassociatePublisher(
    args: DisassociatePublisherCommandInput,
    cb: (err: any, data?: DisassociatePublisherCommandOutput) => void
  ): void;
  disassociatePublisher(
    args: DisassociatePublisherCommandInput,
    options: AgentRegistryControlRequestOptions,
    cb: (err: any, data?: DisassociatePublisherCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPublisherCommand}
   */
  getPublisher(
    args: GetPublisherCommandInput,
    options?: AgentRegistryControlRequestOptions
  ): Promise<GetPublisherCommandOutput>;
  getPublisher(
    args: GetPublisherCommandInput,
    cb: (err: any, data?: GetPublisherCommandOutput) => void
  ): void;
  getPublisher(
    args: GetPublisherCommandInput,
    options: AgentRegistryControlRequestOptions,
    cb: (err: any, data?: GetPublisherCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRegistryCommand}
   */
  getRegistry(
    args: GetRegistryCommandInput,
    options?: AgentRegistryControlRequestOptions
  ): Promise<GetRegistryCommandOutput>;
  getRegistry(
    args: GetRegistryCommandInput,
    cb: (err: any, data?: GetRegistryCommandOutput) => void
  ): void;
  getRegistry(
    args: GetRegistryCommandInput,
    options: AgentRegistryControlRequestOptions,
    cb: (err: any, data?: GetRegistryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRegistryRecordCommand}
   */
  getRegistryRecord(
    args: GetRegistryRecordCommandInput,
    options?: AgentRegistryControlRequestOptions
  ): Promise<GetRegistryRecordCommandOutput>;
  getRegistryRecord(
    args: GetRegistryRecordCommandInput,
    cb: (err: any, data?: GetRegistryRecordCommandOutput) => void
  ): void;
  getRegistryRecord(
    args: GetRegistryRecordCommandInput,
    options: AgentRegistryControlRequestOptions,
    cb: (err: any, data?: GetRegistryRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPublisherAssociationsCommand}
   */
  listPublisherAssociations(): Promise<ListPublisherAssociationsCommandOutput>;
  listPublisherAssociations(
    args: ListPublisherAssociationsCommandInput,
    options?: AgentRegistryControlRequestOptions
  ): Promise<ListPublisherAssociationsCommandOutput>;
  listPublisherAssociations(
    args: ListPublisherAssociationsCommandInput,
    cb: (err: any, data?: ListPublisherAssociationsCommandOutput) => void
  ): void;
  listPublisherAssociations(
    args: ListPublisherAssociationsCommandInput,
    options: AgentRegistryControlRequestOptions,
    cb: (err: any, data?: ListPublisherAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPublishersCommand}
   */
  listPublishers(): Promise<ListPublishersCommandOutput>;
  listPublishers(
    args: ListPublishersCommandInput,
    options?: AgentRegistryControlRequestOptions
  ): Promise<ListPublishersCommandOutput>;
  listPublishers(
    args: ListPublishersCommandInput,
    cb: (err: any, data?: ListPublishersCommandOutput) => void
  ): void;
  listPublishers(
    args: ListPublishersCommandInput,
    options: AgentRegistryControlRequestOptions,
    cb: (err: any, data?: ListPublishersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRegistriesCommand}
   */
  listRegistries(): Promise<ListRegistriesCommandOutput>;
  listRegistries(
    args: ListRegistriesCommandInput,
    options?: AgentRegistryControlRequestOptions
  ): Promise<ListRegistriesCommandOutput>;
  listRegistries(
    args: ListRegistriesCommandInput,
    cb: (err: any, data?: ListRegistriesCommandOutput) => void
  ): void;
  listRegistries(
    args: ListRegistriesCommandInput,
    options: AgentRegistryControlRequestOptions,
    cb: (err: any, data?: ListRegistriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRegistryRecordsCommand}
   */
  listRegistryRecords(
    args: ListRegistryRecordsCommandInput,
    options?: AgentRegistryControlRequestOptions
  ): Promise<ListRegistryRecordsCommandOutput>;
  listRegistryRecords(
    args: ListRegistryRecordsCommandInput,
    cb: (err: any, data?: ListRegistryRecordsCommandOutput) => void
  ): void;
  listRegistryRecords(
    args: ListRegistryRecordsCommandInput,
    options: AgentRegistryControlRequestOptions,
    cb: (err: any, data?: ListRegistryRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: AgentRegistryControlRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: AgentRegistryControlRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link SubmitRegistryRecordForApprovalCommand}
   */
  submitRegistryRecordForApproval(
    args: SubmitRegistryRecordForApprovalCommandInput,
    options?: AgentRegistryControlRequestOptions
  ): Promise<SubmitRegistryRecordForApprovalCommandOutput>;
  submitRegistryRecordForApproval(
    args: SubmitRegistryRecordForApprovalCommandInput,
    cb: (err: any, data?: SubmitRegistryRecordForApprovalCommandOutput) => void
  ): void;
  submitRegistryRecordForApproval(
    args: SubmitRegistryRecordForApprovalCommandInput,
    options: AgentRegistryControlRequestOptions,
    cb: (err: any, data?: SubmitRegistryRecordForApprovalCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: AgentRegistryControlRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: AgentRegistryControlRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: AgentRegistryControlRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: AgentRegistryControlRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePublisherAssociationApprovalStatusCommand}
   */
  updatePublisherAssociationApprovalStatus(
    args: UpdatePublisherAssociationApprovalStatusCommandInput,
    options?: AgentRegistryControlRequestOptions
  ): Promise<UpdatePublisherAssociationApprovalStatusCommandOutput>;
  updatePublisherAssociationApprovalStatus(
    args: UpdatePublisherAssociationApprovalStatusCommandInput,
    cb: (err: any, data?: UpdatePublisherAssociationApprovalStatusCommandOutput) => void
  ): void;
  updatePublisherAssociationApprovalStatus(
    args: UpdatePublisherAssociationApprovalStatusCommandInput,
    options: AgentRegistryControlRequestOptions,
    cb: (err: any, data?: UpdatePublisherAssociationApprovalStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRegistryCommand}
   */
  updateRegistry(
    args: UpdateRegistryCommandInput,
    options?: AgentRegistryControlRequestOptions
  ): Promise<UpdateRegistryCommandOutput>;
  updateRegistry(
    args: UpdateRegistryCommandInput,
    cb: (err: any, data?: UpdateRegistryCommandOutput) => void
  ): void;
  updateRegistry(
    args: UpdateRegistryCommandInput,
    options: AgentRegistryControlRequestOptions,
    cb: (err: any, data?: UpdateRegistryCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRegistryRecordCommand}
   */
  updateRegistryRecord(
    args: UpdateRegistryRecordCommandInput,
    options?: AgentRegistryControlRequestOptions
  ): Promise<UpdateRegistryRecordCommandOutput>;
  updateRegistryRecord(
    args: UpdateRegistryRecordCommandInput,
    cb: (err: any, data?: UpdateRegistryRecordCommandOutput) => void
  ): void;
  updateRegistryRecord(
    args: UpdateRegistryRecordCommandInput,
    options: AgentRegistryControlRequestOptions,
    cb: (err: any, data?: UpdateRegistryRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRegistryRecordStatusCommand}
   */
  updateRegistryRecordStatus(
    args: UpdateRegistryRecordStatusCommandInput,
    options?: AgentRegistryControlRequestOptions
  ): Promise<UpdateRegistryRecordStatusCommandOutput>;
  updateRegistryRecordStatus(
    args: UpdateRegistryRecordStatusCommandInput,
    cb: (err: any, data?: UpdateRegistryRecordStatusCommandOutput) => void
  ): void;
  updateRegistryRecordStatus(
    args: UpdateRegistryRecordStatusCommandInput,
    options: AgentRegistryControlRequestOptions,
    cb: (err: any, data?: UpdateRegistryRecordStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidatePublisherCommand}
   */
  validatePublisher(
    args: ValidatePublisherCommandInput,
    options?: AgentRegistryControlRequestOptions
  ): Promise<ValidatePublisherCommandOutput>;
  validatePublisher(
    args: ValidatePublisherCommandInput,
    cb: (err: any, data?: ValidatePublisherCommandOutput) => void
  ): void;
  validatePublisher(
    args: ValidatePublisherCommandInput,
    options: AgentRegistryControlRequestOptions,
    cb: (err: any, data?: ValidatePublisherCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPublisherAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPublisherAssociationsCommandOutput}.
   */
  paginateListPublisherAssociations(
    args?: ListPublisherAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPublisherAssociationsCommandOutput>;

  /**
   * @see {@link ListPublishersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPublishersCommandOutput}.
   */
  paginateListPublishers(
    args?: ListPublishersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPublishersCommandOutput>;

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
 * <p>Amazon Web Services Agent Registry is a managed catalog for publishing and discovering resources such as MCP servers, agents, and agent skills. Agent Registry Control is its control-plane API: use it to create and manage registries and the records they contain, configure discovery and authorization, govern record approval and curation workflows, and manage automatic detection of resources. Data-plane search and MCP invocation operations are provided by the companion Agent Registry API.</p>
 * @public
 */
export class AgentRegistryControl extends AgentRegistryControlClient implements AgentRegistryControl {}
createAggregatedClient(commands, AgentRegistryControl, { paginators, waiters });
