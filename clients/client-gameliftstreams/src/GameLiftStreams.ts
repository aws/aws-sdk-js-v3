// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";
import type { WaiterResult } from "@smithy/util-waiter";

import {
  type AddStreamGroupLocationsCommandInput,
  type AddStreamGroupLocationsCommandOutput,
  AddStreamGroupLocationsCommand,
} from "./commands/AddStreamGroupLocationsCommand";
import {
  type AssociateApplicationsCommandInput,
  type AssociateApplicationsCommandOutput,
  AssociateApplicationsCommand,
} from "./commands/AssociateApplicationsCommand";
import {
  type CreateApplicationCommandInput,
  type CreateApplicationCommandOutput,
  CreateApplicationCommand,
} from "./commands/CreateApplicationCommand";
import {
  type CreateStreamGroupCommandInput,
  type CreateStreamGroupCommandOutput,
  CreateStreamGroupCommand,
} from "./commands/CreateStreamGroupCommand";
import {
  type CreateStreamSessionConnectionCommandInput,
  type CreateStreamSessionConnectionCommandOutput,
  CreateStreamSessionConnectionCommand,
} from "./commands/CreateStreamSessionConnectionCommand";
import {
  type DeleteApplicationCommandInput,
  type DeleteApplicationCommandOutput,
  DeleteApplicationCommand,
} from "./commands/DeleteApplicationCommand";
import {
  type DeleteStreamGroupCommandInput,
  type DeleteStreamGroupCommandOutput,
  DeleteStreamGroupCommand,
} from "./commands/DeleteStreamGroupCommand";
import {
  type DisassociateApplicationsCommandInput,
  type DisassociateApplicationsCommandOutput,
  DisassociateApplicationsCommand,
} from "./commands/DisassociateApplicationsCommand";
import {
  type ExportStreamSessionFilesCommandInput,
  type ExportStreamSessionFilesCommandOutput,
  ExportStreamSessionFilesCommand,
} from "./commands/ExportStreamSessionFilesCommand";
import {
  type GetApplicationCommandInput,
  type GetApplicationCommandOutput,
  GetApplicationCommand,
} from "./commands/GetApplicationCommand";
import {
  type GetStreamGroupCommandInput,
  type GetStreamGroupCommandOutput,
  GetStreamGroupCommand,
} from "./commands/GetStreamGroupCommand";
import {
  type GetStreamSessionCommandInput,
  type GetStreamSessionCommandOutput,
  GetStreamSessionCommand,
} from "./commands/GetStreamSessionCommand";
import {
  type ListApplicationsCommandInput,
  type ListApplicationsCommandOutput,
  ListApplicationsCommand,
} from "./commands/ListApplicationsCommand";
import {
  type ListStreamGroupsCommandInput,
  type ListStreamGroupsCommandOutput,
  ListStreamGroupsCommand,
} from "./commands/ListStreamGroupsCommand";
import {
  type ListStreamSessionsByAccountCommandInput,
  type ListStreamSessionsByAccountCommandOutput,
  ListStreamSessionsByAccountCommand,
} from "./commands/ListStreamSessionsByAccountCommand";
import {
  type ListStreamSessionsCommandInput,
  type ListStreamSessionsCommandOutput,
  ListStreamSessionsCommand,
} from "./commands/ListStreamSessionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type RemoveStreamGroupLocationsCommandInput,
  type RemoveStreamGroupLocationsCommandOutput,
  RemoveStreamGroupLocationsCommand,
} from "./commands/RemoveStreamGroupLocationsCommand";
import {
  type StartStreamSessionCommandInput,
  type StartStreamSessionCommandOutput,
  StartStreamSessionCommand,
} from "./commands/StartStreamSessionCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type TerminateStreamSessionCommandInput,
  type TerminateStreamSessionCommandOutput,
  TerminateStreamSessionCommand,
} from "./commands/TerminateStreamSessionCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateApplicationCommandInput,
  type UpdateApplicationCommandOutput,
  UpdateApplicationCommand,
} from "./commands/UpdateApplicationCommand";
import {
  type UpdateStreamGroupCommandInput,
  type UpdateStreamGroupCommandOutput,
  UpdateStreamGroupCommand,
} from "./commands/UpdateStreamGroupCommand";
import { GameLiftStreamsClient } from "./GameLiftStreamsClient";
import { paginateListApplications } from "./pagination/ListApplicationsPaginator";
import { paginateListStreamGroups } from "./pagination/ListStreamGroupsPaginator";
import { paginateListStreamSessionsByAccount } from "./pagination/ListStreamSessionsByAccountPaginator";
import { paginateListStreamSessions } from "./pagination/ListStreamSessionsPaginator";
import { waitUntilApplicationDeleted } from "./waiters/waitForApplicationDeleted";
import { waitUntilApplicationReady } from "./waiters/waitForApplicationReady";
import { waitUntilStreamGroupActive } from "./waiters/waitForStreamGroupActive";
import { waitUntilStreamGroupDeleted } from "./waiters/waitForStreamGroupDeleted";
import { waitUntilStreamSessionActive } from "./waiters/waitForStreamSessionActive";

const commands = {
  AddStreamGroupLocationsCommand,
  AssociateApplicationsCommand,
  CreateApplicationCommand,
  CreateStreamGroupCommand,
  CreateStreamSessionConnectionCommand,
  DeleteApplicationCommand,
  DeleteStreamGroupCommand,
  DisassociateApplicationsCommand,
  ExportStreamSessionFilesCommand,
  GetApplicationCommand,
  GetStreamGroupCommand,
  GetStreamSessionCommand,
  ListApplicationsCommand,
  ListStreamGroupsCommand,
  ListStreamSessionsCommand,
  ListStreamSessionsByAccountCommand,
  ListTagsForResourceCommand,
  RemoveStreamGroupLocationsCommand,
  StartStreamSessionCommand,
  TagResourceCommand,
  TerminateStreamSessionCommand,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateStreamGroupCommand,
};
const paginators = {
  paginateListApplications,
  paginateListStreamGroups,
  paginateListStreamSessions,
  paginateListStreamSessionsByAccount,
};
const waiters = {
  waitUntilApplicationReady,
  waitUntilApplicationDeleted,
  waitUntilStreamGroupActive,
  waitUntilStreamGroupDeleted,
  waitUntilStreamSessionActive,
};

export interface GameLiftStreams {
  /**
   * @see {@link AddStreamGroupLocationsCommand}
   */
  addStreamGroupLocations(
    args: AddStreamGroupLocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddStreamGroupLocationsCommandOutput>;
  addStreamGroupLocations(
    args: AddStreamGroupLocationsCommandInput,
    cb: (err: any, data?: AddStreamGroupLocationsCommandOutput) => void
  ): void;
  addStreamGroupLocations(
    args: AddStreamGroupLocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddStreamGroupLocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateApplicationsCommand}
   */
  associateApplications(
    args: AssociateApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateApplicationsCommandOutput>;
  associateApplications(
    args: AssociateApplicationsCommandInput,
    cb: (err: any, data?: AssociateApplicationsCommandOutput) => void
  ): void;
  associateApplications(
    args: AssociateApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApplicationCommand}
   */
  createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStreamGroupCommand}
   */
  createStreamGroup(
    args: CreateStreamGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamGroupCommandOutput>;
  createStreamGroup(
    args: CreateStreamGroupCommandInput,
    cb: (err: any, data?: CreateStreamGroupCommandOutput) => void
  ): void;
  createStreamGroup(
    args: CreateStreamGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStreamSessionConnectionCommand}
   */
  createStreamSessionConnection(
    args: CreateStreamSessionConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamSessionConnectionCommandOutput>;
  createStreamSessionConnection(
    args: CreateStreamSessionConnectionCommandInput,
    cb: (err: any, data?: CreateStreamSessionConnectionCommandOutput) => void
  ): void;
  createStreamSessionConnection(
    args: CreateStreamSessionConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamSessionConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationCommand}
   */
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCommandOutput>;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStreamGroupCommand}
   */
  deleteStreamGroup(
    args: DeleteStreamGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStreamGroupCommandOutput>;
  deleteStreamGroup(
    args: DeleteStreamGroupCommandInput,
    cb: (err: any, data?: DeleteStreamGroupCommandOutput) => void
  ): void;
  deleteStreamGroup(
    args: DeleteStreamGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStreamGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateApplicationsCommand}
   */
  disassociateApplications(
    args: DisassociateApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateApplicationsCommandOutput>;
  disassociateApplications(
    args: DisassociateApplicationsCommandInput,
    cb: (err: any, data?: DisassociateApplicationsCommandOutput) => void
  ): void;
  disassociateApplications(
    args: DisassociateApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportStreamSessionFilesCommand}
   */
  exportStreamSessionFiles(
    args: ExportStreamSessionFilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportStreamSessionFilesCommandOutput>;
  exportStreamSessionFiles(
    args: ExportStreamSessionFilesCommandInput,
    cb: (err: any, data?: ExportStreamSessionFilesCommandOutput) => void
  ): void;
  exportStreamSessionFiles(
    args: ExportStreamSessionFilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportStreamSessionFilesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationCommand}
   */
  getApplication(
    args: GetApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationCommandOutput>;
  getApplication(
    args: GetApplicationCommandInput,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;
  getApplication(
    args: GetApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStreamGroupCommand}
   */
  getStreamGroup(
    args: GetStreamGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStreamGroupCommandOutput>;
  getStreamGroup(
    args: GetStreamGroupCommandInput,
    cb: (err: any, data?: GetStreamGroupCommandOutput) => void
  ): void;
  getStreamGroup(
    args: GetStreamGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStreamGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStreamSessionCommand}
   */
  getStreamSession(
    args: GetStreamSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStreamSessionCommandOutput>;
  getStreamSession(
    args: GetStreamSessionCommandInput,
    cb: (err: any, data?: GetStreamSessionCommandOutput) => void
  ): void;
  getStreamSession(
    args: GetStreamSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStreamSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationsCommand}
   */
  listApplications(): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  listApplications(
    args: ListApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStreamGroupsCommand}
   */
  listStreamGroups(): Promise<ListStreamGroupsCommandOutput>;
  listStreamGroups(
    args: ListStreamGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStreamGroupsCommandOutput>;
  listStreamGroups(
    args: ListStreamGroupsCommandInput,
    cb: (err: any, data?: ListStreamGroupsCommandOutput) => void
  ): void;
  listStreamGroups(
    args: ListStreamGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStreamSessionsCommand}
   */
  listStreamSessions(
    args: ListStreamSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStreamSessionsCommandOutput>;
  listStreamSessions(
    args: ListStreamSessionsCommandInput,
    cb: (err: any, data?: ListStreamSessionsCommandOutput) => void
  ): void;
  listStreamSessions(
    args: ListStreamSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStreamSessionsByAccountCommand}
   */
  listStreamSessionsByAccount(): Promise<ListStreamSessionsByAccountCommandOutput>;
  listStreamSessionsByAccount(
    args: ListStreamSessionsByAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStreamSessionsByAccountCommandOutput>;
  listStreamSessionsByAccount(
    args: ListStreamSessionsByAccountCommandInput,
    cb: (err: any, data?: ListStreamSessionsByAccountCommandOutput) => void
  ): void;
  listStreamSessionsByAccount(
    args: ListStreamSessionsByAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamSessionsByAccountCommandOutput) => void
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
   * @see {@link RemoveStreamGroupLocationsCommand}
   */
  removeStreamGroupLocations(
    args: RemoveStreamGroupLocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveStreamGroupLocationsCommandOutput>;
  removeStreamGroupLocations(
    args: RemoveStreamGroupLocationsCommandInput,
    cb: (err: any, data?: RemoveStreamGroupLocationsCommandOutput) => void
  ): void;
  removeStreamGroupLocations(
    args: RemoveStreamGroupLocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveStreamGroupLocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartStreamSessionCommand}
   */
  startStreamSession(
    args: StartStreamSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartStreamSessionCommandOutput>;
  startStreamSession(
    args: StartStreamSessionCommandInput,
    cb: (err: any, data?: StartStreamSessionCommandOutput) => void
  ): void;
  startStreamSession(
    args: StartStreamSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartStreamSessionCommandOutput) => void
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
   * @see {@link TerminateStreamSessionCommand}
   */
  terminateStreamSession(
    args: TerminateStreamSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateStreamSessionCommandOutput>;
  terminateStreamSession(
    args: TerminateStreamSessionCommandInput,
    cb: (err: any, data?: TerminateStreamSessionCommandOutput) => void
  ): void;
  terminateStreamSession(
    args: TerminateStreamSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateStreamSessionCommandOutput) => void
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
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStreamGroupCommand}
   */
  updateStreamGroup(
    args: UpdateStreamGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStreamGroupCommandOutput>;
  updateStreamGroup(
    args: UpdateStreamGroupCommandInput,
    cb: (err: any, data?: UpdateStreamGroupCommandOutput) => void
  ): void;
  updateStreamGroup(
    args: UpdateStreamGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStreamGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListApplicationsCommandOutput}.
   */
  paginateListApplications(
    args?: ListApplicationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListApplicationsCommandOutput>;

  /**
   * @see {@link ListStreamGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListStreamGroupsCommandOutput}.
   */
  paginateListStreamGroups(
    args?: ListStreamGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListStreamGroupsCommandOutput>;

  /**
   * @see {@link ListStreamSessionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListStreamSessionsCommandOutput}.
   */
  paginateListStreamSessions(
    args: ListStreamSessionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListStreamSessionsCommandOutput>;

  /**
   * @see {@link ListStreamSessionsByAccountCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListStreamSessionsByAccountCommandOutput}.
   */
  paginateListStreamSessionsByAccount(
    args?: ListStreamSessionsByAccountCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListStreamSessionsByAccountCommandOutput>;

  /**
   * @see {@link GetApplicationCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilApplicationReady(
    args: GetApplicationCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<GameLiftStreams>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetApplicationCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilApplicationDeleted(
    args: GetApplicationCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<GameLiftStreams>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetStreamGroupCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilStreamGroupActive(
    args: GetStreamGroupCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<GameLiftStreams>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetStreamGroupCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilStreamGroupDeleted(
    args: GetStreamGroupCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<GameLiftStreams>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetStreamSessionCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilStreamSessionActive(
    args: GetStreamSessionCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<GameLiftStreams>, "client">
  ): Promise<WaiterResult>;
}

/**
 * <fullname>Amazon GameLift Streams</fullname> <p>Amazon GameLift Streams provides a global cloud solution for content streaming experiences. Use Amazon GameLift Streams tools to upload and configure content for streaming, deploy and scale computing resources to host streams, and manage stream session placement to meet customer demand.</p> <p>This Reference Guide describes the Amazon GameLift Streams service API. You can use the API through the Amazon Web Services SDK, the Command Line Interface (CLI), or by making direct REST calls through HTTPS.</p> <p>See the <i>Amazon GameLift Streams Developer Guide</i> for more information on how Amazon GameLift Streams works and how to work with it.</p>
 * @public
 */
export class GameLiftStreams extends GameLiftStreamsClient implements GameLiftStreams {}
createAggregatedClient(commands, GameLiftStreams, { paginators, waiters });
